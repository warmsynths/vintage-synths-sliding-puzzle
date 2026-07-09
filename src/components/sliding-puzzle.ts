import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';

interface PuzzleTile {
  id: number;       // The original/correct position index (0 to size*size - 1)
  currentIndex: number; // Current grid index (0 to size*size - 1)
}

const SYNTH_IMAGES = [
  { id: 'minimoog', name: 'Minimoog', url: '/assets/minimoog.png' },
  { id: 'arpodysseymkiii', name: 'ARP Odyssey Mk III', url: '/assets/arpodysseymkiii.png' },
  { id: 'dx7', name: 'Yamaha DX7', url: '/assets/dx7.png' },
  { id: 'juno60', name: 'Roland Juno-60', url: '/assets/juno60.png' },
  { id: 'tb303', name: 'Roland TB-303', url: '/assets/tb303.png' },
  { id: 'tr808', name: 'Roland TR-808', url: '/assets/tr808.png' },
  { id: 'tr909', name: 'Roland TR-909', url: '/assets/tr909.png' },
  { id: 'cz1', name: 'Casio CZ-1', url: '/assets/cz1.png' },
  { id: 'mpc60', name: 'Akai MPC60', url: '/assets/mpc60.png' },
  { id: 'sp1200', name: 'E-mu SP-1200', url: '/assets/sp1200.png' }
];

@customElement('sliding-puzzle')
export class SlidingPuzzle extends LitElement {
  @state() private gridSize = 3;
  @state() private activeImage = SYNTH_IMAGES[0];
  @state() private tiles: PuzzleTile[] = [];
  @state() private blankIndex = 8; // Index of the empty slot in the grid (size*size - 1 initially)
  @state() private moves = 0;
  @state() private secondsElapsed = 0;
  @state() private isPlaying = false;
  @state() private hasWon = false;
  @state() private showPreview = false;
  @state() private isSolving = false;

  @query('.puzzle-grid') private gridElement!: HTMLElement;

  private timerInterval?: number;
  private hasMoved = false;
  
  // Drag/Touch Physics state
  private dragTile: PuzzleTile | null = null;
  private dragElement: HTMLElement | null = null;
  private startX = 0;
  private startY = 0;
  private allowedDragDirection: 'up' | 'down' | 'left' | 'right' | null = null;
  private maxDragDistance = 0;

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 1.5rem;
    }

    .header-panel {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.25rem 0 0.75rem 0;
      border-bottom: 1px dashed var(--border-color);
    }

    .active-synth-name {
      font-size: 1.1rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      color: var(--accent-cyan);
      text-shadow: var(--shadow-glow-cyan);
      text-transform: uppercase;
    }

    .stats {
      display: flex;
      gap: 0.75rem;
    }

    .stat-display {
      background-color: #0b0c0f;
      border: 1px solid #20222a;
      border-radius: 4px;
      padding: 0.35rem 0.75rem;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.8);
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 75px;
    }

    .stat-label {
      font-size: 0.6rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--text-muted);
      margin-bottom: 0.15rem;
    }

    .stat-value {
      font-family: var(--font-digital);
      font-size: 1.3rem;
      color: var(--accent-orange);
      text-shadow: var(--shadow-glow-orange);
      line-height: 1.2;
    }

    button {
      font-family: var(--font-family);
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.03em;
      cursor: pointer;
      border: 1px solid #111;
      background: linear-gradient(180deg, #373a44 0%, #252830 100%);
      color: var(--text-secondary);
      padding: 0.6rem 1.2rem;
      border-radius: var(--border-radius);
      box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.05),
        0 1px 3px rgba(0, 0, 0, 0.4);
      transition: all var(--transition-speed) cubic-bezier(0.16, 1, 0.3, 1);
      outline: none;
      text-transform: uppercase;
    }

    button:hover:not([disabled]) {
      color: var(--text-primary);
      background: linear-gradient(180deg, #444855 0%, #2f333d 100%);
      border-color: #222;
    }

    button:active:not([disabled]) {
      background: linear-gradient(180deg, #1d1e24 0%, #272931 100%);
      box-shadow: 
        inset 0 2px 4px rgba(0, 0, 0, 0.6),
        0 1px 0 rgba(255, 255, 255, 0.05);
      transform: translateY(1px);
    }

    button.primary {
      background: linear-gradient(180deg, #ff7c33 0%, var(--accent-orange) 100%);
      color: #fff;
      border-color: #cc4b00;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.2),
        0 2px 8px rgba(255, 94, 0, 0.3);
    }

    button.primary:hover:not([disabled]) {
      background: linear-gradient(180deg, #ff9255 0%, #ff6f1a 100%);
      box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.3),
        var(--shadow-glow-orange);
    }

    button.primary:active:not([disabled]) {
      background: linear-gradient(180deg, #d64f00 0%, #ff5e00 100%);
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    button[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }

    select {
      font-family: var(--font-family);
      font-size: 0.85rem;
      font-weight: 500;
      padding: 0.6rem 2.2rem 0.6rem 1rem;
      border: 1px solid #111;
      border-radius: var(--border-radius);
      background-color: #1c1d22;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ff5e00' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 10px center;
      background-size: 14px;
      color: var(--text-primary);
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
      cursor: pointer;
      transition: all var(--transition-speed) ease;
      appearance: none;
      outline: none;
      text-transform: uppercase;
    }

    select:hover {
      border-color: var(--accent-orange);
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5), 0 0 4px rgba(255, 94, 0, 0.2);
    }

    select:focus {
      border-color: var(--accent-orange);
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5), var(--shadow-glow-orange);
    }

    .controls {
      display: flex;
      gap: 0.75rem;
      width: 100%;
      flex-wrap: wrap;
    }

    .controls select,
    .controls button {
      flex: 1;
      min-width: 120px;
      text-align: center;
    }

    .game-actions {
      display: flex;
      gap: 0.75rem;
      width: 100%;
    }

    .game-actions button {
      flex: 1;
      font-size: 0.8rem;
      border: 1px solid #111;
      background: linear-gradient(180deg, #2e303a 0%, #1c1d24 100%);
      color: var(--text-secondary);
      position: relative;
      overflow: hidden;
      padding-top: 1.1rem;
      padding-bottom: 0.5rem;
    }

    .game-actions button::before {
      content: '';
      position: absolute;
      top: 3px;
      left: 50%;
      transform: translateX(-50%);
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #3e4250;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.5);
      transition: background-color var(--transition-speed), box-shadow var(--transition-speed);
    }

    .game-actions button:not([disabled]):hover {
      background: linear-gradient(180deg, #373a46 0%, #20222a 100%);
      color: var(--text-primary);
    }

    .game-actions button:not([disabled]):hover::before {
      background-color: var(--accent-cyan);
      box-shadow: var(--shadow-glow-cyan);
    }

    /* Outer wrapper containing preview / grid */
    .board-wrapper {
      position: relative;
      width: 100%;
      aspect-ratio: 2464 / 1728;
      background-color: #0b0c0f;
      border: 6px solid #1d1f26;
      box-shadow: 
        inset 0 4px 12px rgba(0, 0, 0, 0.85),
        0 10px 25px rgba(0, 0, 0, 0.6);
      border-radius: var(--border-radius-lg);
      overflow: hidden;
      touch-action: none; /* Prevents default scroll behaviors when dragging */
    }

    .puzzle-grid {
      display: grid;
      width: 100%;
      height: 100%;
      gap: var(--grid-gap);
      padding: var(--grid-gap);
      background-color: #08080b;
      position: absolute;
      top: 0;
      left: 0;
      transition: opacity 0.3s ease;
    }

    .tile {
      position: relative;
      width: 100%;
      height: 100%;
      background-size: var(--bg-size);
      background-repeat: no-repeat;
      cursor: grab;
      user-select: none;
      touch-action: none;
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 0.06);
      box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.12),
        0 4px 8px rgba(0, 0, 0, 0.4);
      transition: border-color 0.2s, box-shadow 0.2s;
    }

    .tile:hover {
      border-color: rgba(255, 94, 0, 0.4);
      box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.18),
        0 0 10px rgba(255, 94, 0, 0.3),
        0 6px 12px rgba(0, 0, 0, 0.5);
    }

    .tile:active {
      cursor: grabbing;
    }

    .tile.blank {
      opacity: 0;
      pointer-events: none;
    }

    .preview-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      z-index: 20;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .preview-overlay.visible {
      opacity: 1;
      pointer-events: auto;
    }

    .win-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(10, 11, 14, 0.95);
      backdrop-filter: blur(4px);
      z-index: 30;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.25rem;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      border: 2px solid var(--accent-green);
    }

    .win-overlay.visible {
      opacity: 1;
      pointer-events: auto;
    }

    .win-title {
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      color: var(--accent-green);
      text-shadow: 0 0 15px rgba(57, 255, 20, 0.5);
      text-transform: uppercase;
    }

    .hint-highlight {
      outline: 3px solid var(--accent-cyan);
      outline-offset: -3px;
      box-shadow: 0 0 15px rgba(0, 229, 255, 0.6);
      animation: pulse-hint 1s infinite alternate;
    }

    @keyframes pulse-hint {
      0% { outline-color: rgba(0, 229, 255, 0.4); }
      100% { outline-color: rgba(0, 229, 255, 1); }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.resetPuzzle();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopTimer();
  }

  protected updated(changedProperties: PropertyValues) {
    if (changedProperties.has('gridSize') || changedProperties.has('activeImage')) {
      this.resetPuzzle();
    }
  }

  private startTimer() {
    this.stopTimer();
    this.secondsElapsed = 0;
    this.timerInterval = window.setInterval(() => {
      this.secondsElapsed++;
    }, 1000);
  }

  private stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = undefined;
    }
  }

  private formatTime(secs: number): string {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  private triggerHaptic() {
    if ('vibrate' in navigator) {
      try {
        navigator.vibrate(10);
      } catch (e) {
        // Ignore haptics errors if browser blocks it
      }
    }
  }

  private resetPuzzle() {
    this.stopTimer();
    this.isSolving = false;
    this.secondsElapsed = 0;
    this.moves = 0;
    this.isPlaying = false;
    this.hasWon = false;
    this.showPreview = false;
    
    const size = this.gridSize;
    const totalTiles = size * size;
    const tiles: PuzzleTile[] = [];
    
    for (let i = 0; i < totalTiles; i++) {
      tiles.push({ id: i, currentIndex: i });
    }
    
    this.tiles = tiles;
    this.blankIndex = totalTiles - 1;
  }

  // Shuffle the board by executing a sequence of random valid sliding moves
  private shufflePuzzle() {
    this.resetPuzzle();
    
    const size = this.gridSize;
    let blankIdx = size * size - 1;
    const tempTiles = [...this.tiles];
    
    // Perform random moves to shuffle the puzzle (guarantees mathematical solvability)
    let lastMovedId = -1;
    const shuffleSteps = size * size * 25; // Scale shuffle complexity with grid size
    
    for (let step = 0; step < shuffleSteps; step++) {
      const neighbors = this.getNeighbors(blankIdx, size);
      // Avoid immediately moving the same tile back
      const validNeighbors = neighbors.filter(nIdx => tempTiles.find(t => t.currentIndex === nIdx)?.id !== lastMovedId);
      const chosenNeighborIdx = validNeighbors.length > 0 
        ? validNeighbors[Math.floor(Math.random() * validNeighbors.length)] 
        : neighbors[Math.floor(Math.random() * neighbors.length)];
      
      const neighborTile = tempTiles.find(t => t.currentIndex === chosenNeighborIdx)!;
      const blankTile = tempTiles.find(t => t.id === size * size - 1)!;
      lastMovedId = neighborTile.id;
      
      // Swap coordinates of both tiles
      neighborTile.currentIndex = blankIdx;
      blankTile.currentIndex = chosenNeighborIdx;
      blankIdx = chosenNeighborIdx;
    }
    
    // Sort tiles by current index for rendering order helper if needed, 
    // but we can just update the reactive property
    this.tiles = tempTiles;
    this.blankIndex = blankIdx;
    this.isPlaying = true;
    this.startTimer();
  }

  private getNeighbors(index: number, size: number): number[] {
    const row = Math.floor(index / size);
    const col = index % size;
    const neighbors: number[] = [];
    
    if (row > 0) neighbors.push(index - size); // Up
    if (row < size - 1) neighbors.push(index + size); // Down
    if (col > 0) neighbors.push(index - 1); // Left
    if (col < size - 1) neighbors.push(index + 1); // Right
    
    return neighbors;
  }

  private checkWinState(): boolean {
    // If every tile is back to its original index, they have won!
    const win = this.tiles.every(tile => tile.id === tile.currentIndex);
    if (win && this.isPlaying) {
      this.isPlaying = false;
      this.stopTimer();
      this.hasWon = true;
      this.triggerHaptic();
    }
    return win;
  }

  // Pointer gesture events to handle tactile drag-and-slide
  private _boundPointerMove = (e: PointerEvent) => this.handlePointerMove(e);
  private _boundPointerUp = (e: PointerEvent) => this.handlePointerUp(e);

  private handlePointerDown(e: PointerEvent, tile: PuzzleTile) {
    if (!this.isPlaying || this.isSolving || this.hasWon) return;
    
    // Prevent default browser behaviors like text selection or image dragging
    e.preventDefault();
    
    const size = this.gridSize;
    const tileIdx = tile.currentIndex;
    const blankIdx = this.blankIndex;
    
    // Is the clicked tile adjacent to the blank spot?
    const rowTile = Math.floor(tileIdx / size);
    const colTile = tileIdx % size;
    const rowBlank = Math.floor(blankIdx / size);
    const colBlank = blankIdx % size;
    
    const isAdjacent = (Math.abs(rowTile - rowBlank) === 1 && colTile === colBlank) ||
                        (Math.abs(colTile - colBlank) === 1 && rowTile === rowBlank);
    
    if (!isAdjacent) return;
    
    const el = e.currentTarget as HTMLElement;
    this.dragTile = tile;
    this.dragElement = el;
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.hasMoved = false;
    
    if (rowTile === rowBlank) {
      this.allowedDragDirection = colBlank > colTile ? 'right' : 'left';
    } else {
      this.allowedDragDirection = rowBlank > rowTile ? 'down' : 'up';
    }
    
    // Determine allowed direction and max travel distance
    const rect = el.getBoundingClientRect();
    const gap = parseFloat(getComputedStyle(this.gridElement).gap || '0');
    if (this.allowedDragDirection === 'left' || this.allowedDragDirection === 'right') {
      this.maxDragDistance = rect.width + gap;
    } else {
      this.maxDragDistance = rect.height + gap;
    }
    
    // Bind to window for global movement tracking, ensuring smooth tracking even if pointer leaves the element
    window.addEventListener('pointermove', this._boundPointerMove);
    window.addEventListener('pointerup', this._boundPointerUp);
    window.addEventListener('pointercancel', this._boundPointerUp);
    
    el.style.transition = 'none';
    el.style.zIndex = '10';
  }

  private handlePointerMove(e: PointerEvent) {
    if (!this.dragTile || !this.dragElement) return;
    
    const deltaX = e.clientX - this.startX;
    const deltaY = e.clientY - this.startY;
    
    // Set hasMoved if pointer moves beyond a small threshold
    if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
      this.hasMoved = true;
    }
    
    let translateX = 0;
    let translateY = 0;
    const max = this.maxDragDistance;
    
    if (this.allowedDragDirection === 'right') {
      translateX = Math.max(0, Math.min(max, deltaX));
    } else if (this.allowedDragDirection === 'left') {
      translateX = Math.min(0, Math.max(-max, deltaX));
    } else if (this.allowedDragDirection === 'down') {
      translateY = Math.max(0, Math.min(max, deltaY));
    } else if (this.allowedDragDirection === 'up') {
      translateY = Math.min(0, Math.max(-max, deltaY));
    }
    
    this.dragElement.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
  }

  private handlePointerUp(e: PointerEvent) {
    if (!this.dragTile || !this.dragElement) return;
    
    const el = this.dragElement;
    const tile = this.dragTile;
    const size = this.gridSize;
    
    // Clean up window listeners
    window.removeEventListener('pointermove', this._boundPointerMove);
    window.removeEventListener('pointerup', this._boundPointerUp);
    window.removeEventListener('pointercancel', this._boundPointerUp);
    
    const transform = el.style.transform;
    const match = transform.match(/translate3d\(([^px]+)px,\s*([^px]+)px/);
    let draggedDistance = 0;
    
    if (match) {
      const tx = parseFloat(match[1]);
      const ty = parseFloat(match[2]);
      draggedDistance = Math.max(Math.abs(tx), Math.abs(ty));
    }
    
    // If dragged more than 35% of the distance OR it was a simple tap/click (hasMoved === false)
    const threshold = this.maxDragDistance * 0.35;
    const shouldMove = (draggedDistance >= threshold || !this.hasMoved) && e.type !== 'pointercancel';
    
    el.style.transition = 'transform 0.15s ease-out';
    
    if (shouldMove) {
      // Execute Move: Swap current indices of both the clicked tile and the blank tile
      const prevBlank = this.blankIndex;
      const newBlank = tile.currentIndex;
      const blankTile = this.tiles.find(t => t.id === size * size - 1)!;
      
      tile.currentIndex = prevBlank;
      blankTile.currentIndex = newBlank;
      this.blankIndex = newBlank;
      
      this.moves++;
      this.triggerHaptic();
      
      // Update tiles reference to trigger lit render
      this.tiles = [...this.tiles];
      
      // Clean up transform instantly as its new grid slot will position it
      el.style.transform = '';
      el.style.zIndex = '';
      
      // Check win
      this.checkWinState();
    } else {
      // Snap back
      el.style.transform = 'translate3d(0, 0, 0)';
      setTimeout(() => {
        el.style.zIndex = '';
      }, 150);
    }
    
    this.dragTile = null;
    this.dragElement = null;
    this.allowedDragDirection = null;
  }

  // A* Solver implementation for 3x3 (and single-hint for larger grids)
  private async runSolver(isFullSolve: boolean) {
    if (!this.isPlaying || this.hasWon || this.isSolving) return;
    this.isSolving = true;
    
    const size = this.gridSize;
    const startBoard = this.getBoardArray();
    
    if (size > 3) {
      // 4x4 or 5x5: run one step of greedy best move
      const nextIdx = this.getGreedyBestMove(startBoard, size);
      if (nextIdx !== null) {
        if (isFullSolve) {
          // Greedy full solve simulation loop
          let currentBoard = [...startBoard];
          const path: number[] = [];
          let visited = new Set<string>();
          visited.add(currentBoard.join(','));
          
          for (let i = 0; i < 40; i++) {
            const bestMove = this.getGreedyBestMove(currentBoard, size, visited);
            if (bestMove === null) break;
            
            const bIdx = currentBoard.indexOf(size * size - 1);
            currentBoard[bIdx] = currentBoard[bestMove];
            currentBoard[bestMove] = size * size - 1;
            path.push(bestMove);
            visited.add(currentBoard.join(','));
            
            if (this.isBoardSolved(currentBoard)) break;
          }
          
          if (path.length > 0) {
            await this.animatePath(path);
          } else {
            // Just move one step
            await this.animatePath([nextIdx]);
          }
        } else {
          // Highlight hint
          const tileEl = this.shadowRoot?.querySelector(`[data-index="${nextIdx}"]`) as HTMLElement;
          if (tileEl) {
            tileEl.classList.add('hint-highlight');
            setTimeout(() => {
              tileEl.classList.remove('hint-highlight');
            }, 1500);
          }
        }
      }
      this.isSolving = false;
      return;
    }
    
    // 3x3: optimal A* solver
    const path = this.solveAStar(startBoard);
    
    if (path && path.length > 0) {
      if (isFullSolve) {
        await this.animatePath(path);
      } else {
        // Just hint the first move
        const hintIdx = path[0];
        const tileEl = this.shadowRoot?.querySelector(`[data-index="${hintIdx}"]`) as HTMLElement;
        if (tileEl) {
          tileEl.classList.add('hint-highlight');
          setTimeout(() => {
            tileEl.classList.remove('hint-highlight');
          }, 1500);
        }
      }
    }
    this.isSolving = false;
  }

  private getBoardArray(): number[] {
    const arr = new Array(this.gridSize * this.gridSize).fill(-1);
    this.tiles.forEach(tile => {
      arr[tile.currentIndex] = tile.id;
    });
    return arr;
  }

  private isBoardSolved(board: number[]): boolean {
    return board.every((val, idx) => val === idx);
  }

  // Manhattan distance heuristic
  private getManhattanDistance(board: number[], size: number): number {
    let dist = 0;
    for (let i = 0; i < board.length; i++) {
      const val = board[i];
      if (val === size * size - 1) continue; // Skip blank tile
      
      const targetRow = Math.floor(val / size);
      const targetCol = val % size;
      const currentRow = Math.floor(i / size);
      const currentCol = i % size;
      
      dist += Math.abs(targetRow - currentRow) + Math.abs(targetCol - currentCol);
    }
    return dist;
  }

  private getGreedyBestMove(board: number[], size: number, visited?: Set<string>): number | null {
    const blankIdx = board.indexOf(size * size - 1);
    const neighbors = this.getNeighbors(blankIdx, size);
    
    let bestMove: number | null = null;
    let minDistance = Infinity;
    
    for (const nIdx of neighbors) {
      // Simulate move
      const nextBoard = [...board];
      nextBoard[blankIdx] = board[nIdx];
      nextBoard[nIdx] = size * size - 1;
      
      if (visited && visited.has(nextBoard.join(','))) continue;
      
      const dist = this.getManhattanDistance(nextBoard, size);
      if (dist < minDistance) {
        minDistance = dist;
        bestMove = nIdx;
      }
    }
    
    return bestMove;
  }

  private solveAStar(startBoard: number[]): number[] | null {
    const size = 3;
    const queue: Array<{ board: number[]; path: number[]; g: number; f: number }> = [];
    const visited = new Set<string>();
    
    const h = this.getManhattanDistance(startBoard, size);
    queue.push({ board: startBoard, path: [], g: 0, f: h });
    visited.add(startBoard.join(','));
    
    let iterations = 0;
    while (queue.length > 0 && iterations < 5000) {
      iterations++;
      // Sort to get node with lowest f score
      queue.sort((a, b) => a.f - b.f);
      const current = queue.shift()!;
      
      if (this.isBoardSolved(current.board)) {
        return current.path;
      }
      
      const blankIdx = current.board.indexOf(8);
      const neighbors = this.getNeighbors(blankIdx, size);
      
      for (const nIdx of neighbors) {
        const nextBoard = [...current.board];
        nextBoard[blankIdx] = current.board[nIdx];
        nextBoard[nIdx] = 8;
        
        const key = nextBoard.join(',');
        if (visited.has(key)) continue;
        
        visited.add(key);
        const nextPath = [...current.path, nIdx];
        const g = current.g + 1;
        const f = g + this.getManhattanDistance(nextBoard, size);
        
        queue.push({ board: nextBoard, path: nextPath, g, f });
      }
    }
    
    return null; // Not found within limits
  }

  private async animatePath(path: number[]) {
    for (const moveIdx of path) {
      if (!this.isSolving) break;
      
      const tile = this.tiles.find(t => t.currentIndex === moveIdx)!;
      const tileEl = this.shadowRoot?.querySelector(`[data-index="${moveIdx}"]`) as HTMLElement;
      
      if (tileEl) {
        // Determine travel direction
        const size = this.gridSize;
        const rect = tileEl.getBoundingClientRect();
        const gap = parseFloat(getComputedStyle(this.gridElement).gap || '0');
        const distWidth = rect.width + gap;
        const distHeight = rect.height + gap;
        
        const rowTile = Math.floor(moveIdx / size);
        const rowBlank = Math.floor(this.blankIndex / size);
        
        let tx = 0, ty = 0;
        if (rowTile === rowBlank) {
          tx = this.blankIndex > moveIdx ? distWidth : -distWidth;
        } else {
          ty = this.blankIndex > moveIdx ? distHeight : -distHeight;
        }
        
        tileEl.style.transition = 'transform 0.15s ease-out';
        tileEl.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
        this.triggerHaptic();
        
        await new Promise(resolve => setTimeout(resolve, 150));
        
        // Swap model state
        const prevBlank = this.blankIndex;
        const newBlank = tile.currentIndex;
        const blankTile = this.tiles.find(t => t.id === size * size - 1)!;
        
        tile.currentIndex = prevBlank;
        blankTile.currentIndex = newBlank;
        this.blankIndex = newBlank;
        this.moves++;
        this.tiles = [...this.tiles];
        
        tileEl.style.transition = 'none';
        tileEl.style.transform = '';
        
        await new Promise(resolve => setTimeout(resolve, 80));
      }
    }
    
    this.checkWinState();
  }

  private handleImageChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    const match = SYNTH_IMAGES.find(img => img.id === select.value);
    if (match) {
      this.activeImage = match;
    }
  }

  private handleGridSizeChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    this.gridSize = parseInt(select.value);
  }

  render() {
    const size = this.gridSize;
    const sizePercent = 100 * size;
    
    // Sort tiles by current index so they render in correct grid placement order
    const sortedTiles = [...this.tiles].sort((a, b) => a.currentIndex - b.currentIndex);

    return html`
      <div class="header-panel">
        <div class="active-synth-name">${this.activeImage.name}</div>
        <div class="stats">
          <div class="stat-display">
            <span class="stat-label">Moves</span>
            <span class="stat-value">${String(this.moves).padStart(3, '0')}</span>
          </div>
          <div class="stat-display">
            <span class="stat-label">Time</span>
            <span class="stat-value">${this.formatTime(this.secondsElapsed)}</span>
          </div>
        </div>
      </div>

      <div class="controls">
        <select @change=${this.handleImageChange} .value=${this.activeImage.id} ?disabled=${this.isSolving}>
          ${SYNTH_IMAGES.map(img => html`<option value=${img.id}>${img.name}</option>`)}
        </select>

        <select @change=${this.handleGridSizeChange} .value=${String(this.gridSize)} ?disabled=${this.isSolving}>
          <option value="3">3 x 3 (Beginner)</option>
          <option value="4">4 x 4 (Classic)</option>
          <option value="5">5 x 5 (Expert)</option>
        </select>
        
        <button class="primary" @click=${this.shufflePuzzle} ?disabled=${this.isSolving}>
          ${this.isPlaying ? 'Restart' : 'Shuffle & Play'}
        </button>
      </div>

      <div class="board-wrapper">
        <div 
          class="puzzle-grid" 
          style="grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr); --bg-size: ${sizePercent}% ${sizePercent}%;"
        >
          ${sortedTiles.map(tile => {
            const isBlank = tile.id === size * size - 1;
            
            // Calculate slice position coordinates
            const correctRow = Math.floor(tile.id / size);
            const correctCol = tile.id % size;
            const xPercent = (correctCol / (size - 1)) * 100;
            const yPercent = (correctRow / (size - 1)) * 100;
            const bgPosition = `${xPercent}% ${yPercent}%`;

            return html`
              <div 
                class="tile ${isBlank ? 'blank' : ''}" 
                data-index=${tile.currentIndex}
                style="background-image: url('${this.activeImage.url}'); background-position: ${bgPosition};"
                @pointerdown=${(e: PointerEvent) => this.handlePointerDown(e, tile)}
                @dragstart=${(e: Event) => e.preventDefault()}
              ></div>
            `;
          })}
        </div>

        <div 
          class="preview-overlay ${this.showPreview ? 'visible' : ''}" 
          style="background-image: url('${this.activeImage.url}');"
        ></div>

        <div class="win-overlay ${this.hasWon ? 'visible' : ''}">
          <div class="win-title">SOLVED</div>
          <div style="color: var(--text-secondary); text-align: center;">
            <div>COMPLETED IN ${this.moves} MOVES</div>
            <div>TIME ELAPSED: ${this.formatTime(this.secondsElapsed)}</div>
          </div>
          <button class="primary" style="margin-top: 0.5rem;" @click=${this.shufflePuzzle}>Play Again</button>
        </div>
      </div>

      <div class="game-actions">
        <button 
          @click=${() => { this.showPreview = !this.showPreview; }} 
          ?disabled=${this.hasWon || this.isSolving}
        >
          Preview
        </button>
        <button 
          @click=${() => this.runSolver(false)} 
          ?disabled=${!this.isPlaying || this.hasWon || this.isSolving}
        >
          Get Hint
        </button>
        <button 
          @click=${() => this.runSolver(true)} 
          ?disabled=${!this.isPlaying || this.hasWon || this.isSolving}
        >
          Auto-Solve
        </button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sliding-puzzle': SlidingPuzzle;
  }
}
