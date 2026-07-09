import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';

interface PuzzleTile {
  id: number;       // The original/correct position index (0 to size*size - 1)
  currentIndex: number; // Current grid index (0 to size*size - 1)
  peelProgress?: number; // 0 to 1
  isPeeledOff?: boolean;
  peelCorner?: 'tr' | 'tl' | 'br' | 'bl';
}

const SYNTH_IMAGES = [
  { id: 'minimoog', name: 'Minimoog', url: './assets/minimoog.png' },
  { id: 'arpodysseymkiii', name: 'ARP Odyssey Mk III', url: './assets/arpodysseymkiii.png' },
  { id: 'dx7', name: 'Yamaha DX7', url: './assets/dx7.png' },
  { id: 'juno60', name: 'Roland Juno-60', url: './assets/juno60.png' },
  { id: 'tb303', name: 'Roland TB-303', url: './assets/tb303.png' },
  { id: 'tr808', name: 'Roland TR-808', url: './assets/tr808.png' },
  { id: 'tr909', name: 'Roland TR-909', url: './assets/tr909.png' },
  { id: 'cz1', name: 'Casio CZ-1', url: './assets/cz1.png' },
  { id: 'mpc60', name: 'Akai MPC60', url: './assets/mpc60.png' },
  { id: 'sp1200', name: 'E-mu SP-1200', url: './assets/sp1200.png' }
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
  @state() private gameMode: 'freeplay' | 'play' = 'freeplay';

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

  // Peel Drag Physics state
  private peelTile: PuzzleTile | null = null;
  private peelStartX = 0;
  private peelStartY = 0;
  private peelStartProgress = 0;
  private peelMaxDistance = 100;

  static styles = css`
    *, *::before, *::after {
      box-sizing: border-box;
    }

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
      transition: all var(--transition-speed) ease;
    }

    .active-synth-name.minimoog {
      font-family: 'BioRhyme', serif;
      font-weight: 800;
      color: #f5a623;
      text-shadow: 0 0 12px rgba(245, 166, 35, 0.4);
      text-transform: capitalize;
    }

    .active-synth-name.arpodysseymkiii {
      font-family: 'Syncopate', sans-serif;
      font-weight: 700;
      color: #ff5200;
      text-shadow: 0 0 12px rgba(255, 82, 0, 0.5);
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }

    .active-synth-name.dx7 {
      font-family: 'Orbitron', sans-serif;
      font-weight: 900;
      color: #00f5d4;
      text-shadow: 0 0 12px rgba(0, 245, 212, 0.5);
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .active-synth-name.juno60 {
      font-family: 'Syncopate', sans-serif;
      font-weight: 700;
      font-style: italic;
      color: #ff2a4b;
      text-shadow: 0 0 12px rgba(255, 42, 75, 0.5);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .active-synth-name.tb303 {
      font-family: 'Orbitron', sans-serif;
      font-weight: 700;
      font-style: italic;
      color: #39ff14;
      text-shadow: 0 0 12px rgba(57, 255, 20, 0.5);
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .active-synth-name.tr808 {
      font-family: 'Rubik', sans-serif;
      font-weight: 900;
      color: #ff6b00;
      text-shadow: 0 0 12px rgba(255, 107, 0, 0.5);
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .active-synth-name.tr909 {
      font-family: 'Syncopate', sans-serif;
      font-weight: 700;
      color: #e2e2e8;
      text-shadow: 0 0 12px rgba(226, 226, 232, 0.3);
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }

    .active-synth-name.cz1 {
      font-family: 'Orbitron', sans-serif;
      font-weight: 700;
      font-style: italic;
      color: #00bcff;
      text-shadow: 0 0 12px rgba(0, 188, 255, 0.5);
      text-transform: uppercase;
    }

    .active-synth-name.mpc60 {
      font-family: 'Rubik', sans-serif;
      font-weight: 800;
      color: #ded6c5;
      text-shadow: 0 0 12px rgba(222, 214, 197, 0.3);
      letter-spacing: -0.02em;
      text-transform: uppercase;
    }

    .active-synth-name.sp1200 {
      font-family: 'Rubik', sans-serif;
      font-weight: 900;
      font-style: italic;
      color: #4b7bec;
      text-shadow: 0 0 12px rgba(75, 123, 236, 0.5);
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

    .stat-value.cyan {
      color: var(--accent-cyan);
      text-shadow: var(--shadow-glow-cyan);
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
      background-color: #1a1a1a;
      background-image: 
        radial-gradient(circle at 30% 70%, rgba(255,255,255,0.05) 0%, transparent 20%),
        radial-gradient(circle at 70% 30%, rgba(255,255,255,0.08) 0%, transparent 30%);
      cursor: grab;
      user-select: none;
      touch-action: none;
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 0.06);
      box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.12),
        0 4px 8px rgba(0, 0, 0, 0.4);
      transition: border-color 0.2s, box-shadow 0.2s;
      overflow: visible;
    }

    .sticker-layer {
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background-size: var(--bg-size);
      background-repeat: no-repeat;
      pointer-events: none;
      border-radius: 4px;
    }

    /* Subtle sticker peel effects */
    .sticker-layer.peel-tr {
      clip-path: polygon(0 0, calc(100% - var(--peel-size, 12px)) 0, 100% var(--peel-size, 12px), 100% 100%, 0 100%);
    }
    .sticker-layer.peel-tr::after {
      content: '';
      position: absolute;
      top: -0.5px;
      right: -0.5px;
      width: var(--peel-size, 12px);
      height: var(--peel-size, 12px);
      background: linear-gradient(225deg, transparent 41%, rgba(0,0,0,0.15) 45%, #d8d3c9 47%, #faf8f5 55%, #ffffff 80%);
      box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.4);
      border-radius: 0 0 0 2px;
      pointer-events: none;
      z-index: 5;
    }

    .sticker-layer.peel-tl {
      clip-path: polygon(var(--peel-size, 12px) 0, 100% 0, 100% 100%, 0 100%, 0 var(--peel-size, 12px));
    }
    .sticker-layer.peel-tl::after {
      content: '';
      position: absolute;
      top: -0.5px;
      left: -0.5px;
      width: var(--peel-size, 12px);
      height: var(--peel-size, 12px);
      background: linear-gradient(135deg, transparent 41%, rgba(0,0,0,0.15) 45%, #d8d3c9 47%, #faf8f5 55%, #ffffff 80%);
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
      border-radius: 0 0 2px 0;
      pointer-events: none;
      z-index: 5;
    }

    .sticker-layer.peel-br {
      clip-path: polygon(0 0, 100% 0, 100% calc(100% - var(--peel-size, 12px)), calc(100% - var(--peel-size, 12px)) 100%, 0 100%);
    }
    .sticker-layer.peel-br::after {
      content: '';
      position: absolute;
      bottom: -0.5px;
      right: -0.5px;
      width: var(--peel-size, 12px);
      height: var(--peel-size, 12px);
      background: linear-gradient(315deg, transparent 41%, rgba(0,0,0,0.15) 45%, #d8d3c9 47%, #faf8f5 55%, #ffffff 80%);
      box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.4);
      border-radius: 2px 0 0 0;
      pointer-events: none;
      z-index: 5;
    }

    .sticker-layer.peel-bl {
      clip-path: polygon(0 0, 100% 0, 100% 100%, var(--peel-size, 12px) 100%, 0 calc(100% - var(--peel-size, 12px)));
    }
    .sticker-layer.peel-bl::after {
      content: '';
      position: absolute;
      bottom: -0.5px;
      left: -0.5px;
      width: var(--peel-size, 12px);
      height: var(--peel-size, 12px);
      background: linear-gradient(45deg, transparent 41%, rgba(0,0,0,0.15) 45%, #d8d3c9 47%, #faf8f5 55%, #ffffff 80%);
      box-shadow: 1px -1px 2px rgba(0, 0, 0, 0.4);
      border-radius: 0 2px 0 0;
      pointer-events: none;
      z-index: 5;
    }

    .peel-hitbox {
      position: absolute;
      width: 40px;
      height: 40px;
      z-index: 10;
      cursor: grabbing;
      touch-action: none;
    }
    .peel-hitbox.peel-tr { top: 0; right: 0; }
    .peel-hitbox.peel-tl { top: 0; left: 0; }
    .peel-hitbox.peel-br { bottom: 0; right: 0; }
    .peel-hitbox.peel-bl { bottom: 0; left: 0; }

    .tile:hover {
      border-color: var(--tile-hover-border, rgba(255, 94, 0, 0.4));
      box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.18),
        0 0 10px var(--tile-hover-glow, rgba(255, 94, 0, 0.3)),
        0 6px 12px rgba(0, 0, 0, 0.5);
    }

    .puzzle-grid.locked .tile {
      cursor: default;
      pointer-events: none;
    }

    .puzzle-grid.locked .tile:hover {
      border-color: rgba(255, 255, 255, 0.06);
      box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.12),
        0 4px 8px rgba(0, 0, 0, 0.4);
    }

    .mode-selector {
      display: flex;
      width: 100%;
      background-color: #0b0c0f;
      border: 1px solid #20222a;
      border-radius: var(--border-radius);
      padding: 2px;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.8);
    }

    .mode-btn {
      flex: 1;
      background: transparent;
      border: none;
      color: var(--text-muted);
      font-size: 0.8rem;
      padding: 0.5rem 0;
      border-radius: calc(var(--border-radius) - 2px);
      box-shadow: none;
      transition: all var(--transition-speed) ease;
    }

    .mode-btn:hover:not(.active) {
      color: var(--text-secondary);
      background: rgba(255, 255, 255, 0.02);
    }

    .mode-btn.active.cyan {
      color: #fff;
      background: linear-gradient(180deg, #00f0ff 0%, #00b0cc 100%);
      box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.3),
        0 2px 8px rgba(0, 229, 255, 0.3);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    }

    .mode-btn.active.orange {
      color: #fff;
      background: linear-gradient(180deg, #ff7c33 0%, var(--accent-orange) 100%);
      box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.3),
        0 2px 8px rgba(255, 94, 0, 0.3);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    }

    .start-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(10, 11, 14, 0.75);
      backdrop-filter: blur(2px);
      z-index: 25;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
    }

    .start-overlay .start-btn {
      font-size: 1.1rem;
      padding: 0.8rem 2rem;
      background: linear-gradient(180deg, #ff7c33 0%, var(--accent-orange) 100%);
      box-shadow: 0 0 20px rgba(255, 94, 0, 0.4);
      animation: pulse-start 2s infinite;
    }

    .start-hint {
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    @keyframes pulse-start {
      0% { box-shadow: 0 0 15px rgba(255, 94, 0, 0.3); transform: scale(1); }
      50% { box-shadow: 0 0 25px rgba(255, 94, 0, 0.6); transform: scale(1.03); }
      100% { box-shadow: 0 0 15px rgba(255, 94, 0, 0.3); transform: scale(1); }
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

    /* Synth Print Shop Footer & Patch Jack */
    .synth-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px dashed var(--border-color);
    }

    .footer-serial {
      font-family: var(--font-digital);
      font-size: 0.75rem;
      color: var(--text-muted);
      letter-spacing: 0.05em;
    }

    .footer-jack-group {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .jack-label {
      font-family: var(--font-digital);
      font-size: 0.7rem;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .jack-port {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background: radial-gradient(circle, #3a3d46 0%, #1c1d22 70%, #0c0d10 100%);
      border: 2px solid #111;
      box-shadow: 
        inset 0 2px 4px rgba(0, 0, 0, 0.8),
        0 1px 1px rgba(255, 255, 255, 0.05);
      cursor: pointer;
      position: relative;
      transition: all var(--transition-speed) ease;
      text-decoration: none;
    }

    .jack-port::after {
      content: '';
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #000;
      box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.9);
      transition: background-color var(--transition-speed) ease;
    }

    .jack-port:hover {
      border-color: var(--accent-orange);
      box-shadow: 
        inset 0 2px 4px rgba(0, 0, 0, 0.8),
        0 0 8px rgba(255, 94, 0, 0.4);
    }

    .jack-port:hover::after {
      background-color: #ff5e00;
      box-shadow: 0 0 6px var(--accent-orange);
    }

    /* Backlit LED Buy Button */
    .order-btn-wrapper {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .led-indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #2c0b00;
      box-shadow: inset 0 1px 2px rgba(0,0,0,0.8);
      transition: background-color 0.3s, box-shadow 0.3s;
    }

    .btn-order-poster:hover + .led-indicator,
    .order-btn-wrapper:hover .led-indicator {
      background-color: #ff3c00;
      box-shadow: 
        0 0 8px #ff3c00,
        inset 0 1px 1px rgba(255,255,255,0.5);
    }

    .btn-order-poster {
      font-family: var(--font-family);
      font-size: 0.7rem;
      padding: 0.35rem 0.7rem;
      border-radius: 4px;
      border: 1px solid #111;
      background: linear-gradient(180deg, #2a2d36 0%, #1e2026 100%);
      color: var(--text-secondary);
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 0.05em;
      transition: all var(--transition-speed) cubic-bezier(0.16, 1, 0.3, 1);
      display: inline-flex;
      align-items: center;
      text-decoration: none;
    }

    .btn-order-poster:hover {
      color: var(--text-primary);
      background: linear-gradient(180deg, #323642 0%, #22252c 100%);
      border-color: var(--accent-orange);
      box-shadow: 0 0 6px rgba(255, 94, 0, 0.2);
    }

    /* Solved Promo CSS */
    .win-promo {
      margin-top: 0.5rem;
      padding: 0.6rem 1rem;
      background-color: rgba(255, 94, 0, 0.03);
      border: 1px dashed rgba(255, 94, 0, 0.2);
      border-radius: 6px;
      max-width: 320px;
      text-align: center;
    }

    .win-promo-text {
      font-size: 0.75rem;
      color: var(--text-secondary);
      line-height: 1.4;
      margin-bottom: 0.4rem;
    }

    .win-promo-link {
      display: inline-block;
      font-family: var(--font-digital);
      font-size: 0.8rem;
      color: var(--accent-orange);
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 0.05em;
      transition: color 0.2s;
    }

    .win-promo-link:hover {
      color: #ff9e66;
      text-shadow: var(--shadow-glow-orange);
    }

    @media (max-width: 480px) {
      :host {
        gap: 1rem;
      }
      .header-panel {
        flex-direction: column;
        align-items: stretch;
        gap: 0.75rem;
        padding-bottom: 0.75rem;
      }
      .active-synth-name {
        text-align: center;
        font-size: 1rem;
      }
      .order-btn-wrapper {
        justify-content: center;
      }
      .stats {
        justify-content: center;
        width: 100%;
        gap: 0.5rem;
      }
      .stat-display {
        flex: 1;
        min-width: 0;
        padding: 0.25rem 0.5rem;
      }
      .stat-value {
        font-size: 1.15rem;
      }
      .mode-selector {
        padding: 1px;
      }
      .mode-btn {
        padding: 0.4rem 0;
        font-size: 0.75rem;
      }
      .controls {
        flex-direction: column;
        gap: 0.5rem;
      }
      .controls select,
      .controls button {
        width: 100%;
        min-width: 0;
      }
      .game-actions {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem;
      }
      .game-actions button {
        padding-top: 1rem;
        padding-bottom: 0.45rem;
        font-size: 0.75rem;
      }
      .board-wrapper {
        border-width: 4px;
      }
      .synth-footer {
        flex-direction: column;
        gap: 0.75rem;
        align-items: center;
        text-align: center;
      }
      .footer-jack-group {
        justify-content: center;
        flex-wrap: wrap;
      }
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

  private setMode(mode: 'freeplay' | 'play') {
    if (this.gameMode === mode) return;
    this.gameMode = mode;
    this.resetPuzzle();
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
      let peelCorner: 'tr' | 'tl' | 'br' | 'bl' | undefined;
      let peelProgress = 0;
      if (i === 1) { peelCorner = 'tr'; peelProgress = 0.12; }
      else if (i === 3) { peelCorner = 'tl'; peelProgress = 0.08; }
      else if (i === 5) { peelCorner = 'br'; peelProgress = 0.10; }
      else if ((size === 3 && i === 6) || (size > 3 && i === 8)) { peelCorner = 'bl'; peelProgress = 0.06; }

      tiles.push({ 
        id: i, 
        currentIndex: i, 
        peelProgress,
        isPeeledOff: false,
        peelCorner 
      });
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

  // Peel pointer events
  private _boundPeelPointerMove = (e: PointerEvent) => this.handlePeelPointerMove(e);
  private _boundPeelPointerUp = (e: PointerEvent) => this.handlePeelPointerUp(e);

  private handlePointerDown(e: PointerEvent, tile: PuzzleTile) {
    const canMove = this.gameMode === 'freeplay' || (this.gameMode === 'play' && this.isPlaying);
    if (!canMove || this.isSolving || this.hasWon) return;

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

  private handlePeelPointerDown(e: PointerEvent, tile: PuzzleTile) {
    if (tile.isPeeledOff) return;
    
    // Stop propagation so tile dragging isn't triggered
    e.stopPropagation();
    e.preventDefault();
    
    this.peelTile = tile;
    this.peelStartX = e.clientX;
    this.peelStartY = e.clientY;
    this.peelStartProgress = tile.peelProgress || 0;
    
    const rect = (e.currentTarget as HTMLElement).closest('.tile')?.getBoundingClientRect();
    this.peelMaxDistance = rect ? Math.max(rect.width, rect.height) : 100;
    
    window.addEventListener('pointermove', this._boundPeelPointerMove);
    window.addEventListener('pointerup', this._boundPeelPointerUp);
    window.addEventListener('pointercancel', this._boundPeelPointerUp);
  }

  private handlePeelPointerMove(e: PointerEvent) {
    if (!this.peelTile) return;
    
    const deltaX = e.clientX - this.peelStartX;
    const deltaY = e.clientY - this.peelStartY;
    
    let pullDistance = 0;
    if (this.peelTile.peelCorner === 'tr') {
      pullDistance = -deltaX + deltaY;
    } else if (this.peelTile.peelCorner === 'tl') {
      pullDistance = deltaX + deltaY;
    } else if (this.peelTile.peelCorner === 'br') {
      pullDistance = -deltaX - deltaY;
    } else if (this.peelTile.peelCorner === 'bl') {
      pullDistance = deltaX - deltaY;
    }
    
    const progressDelta = pullDistance / this.peelMaxDistance;
    let newProgress = this.peelStartProgress + progressDelta;
    newProgress = Math.max(0, Math.min(1.2, newProgress));
    
    this.peelTile.peelProgress = newProgress;
    this.tiles = [...this.tiles];
  }

  private handlePeelPointerUp(e: PointerEvent) {
    if (!this.peelTile) return;
    
    window.removeEventListener('pointermove', this._boundPeelPointerMove);
    window.removeEventListener('pointerup', this._boundPeelPointerUp);
    window.removeEventListener('pointercancel', this._boundPeelPointerUp);
    
    if (this.peelTile.peelProgress && this.peelTile.peelProgress > 0.75) {
      this.peelTile.isPeeledOff = true;
      this.triggerHaptic();
    } else {
      let defaultProgress = 0;
      if (this.peelTile.id === 1) defaultProgress = 0.12;
      else if (this.peelTile.id === 3) defaultProgress = 0.08;
      else if (this.peelTile.id === 5) defaultProgress = 0.10;
      else if ((this.gridSize === 3 && this.peelTile.id === 6) || (this.gridSize > 3 && this.peelTile.id === 8)) defaultProgress = 0.06;
      
      this.peelTile.peelProgress = defaultProgress;
    }
    
    this.peelTile = null;
    this.tiles = [...this.tiles];
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

    // Sort tiles by current index so they render in correct grid placement order
    const sortedTiles = [...this.tiles].sort((a, b) => a.currentIndex - b.currentIndex);

    return html`
      <div class="header-panel">
        <div style="display: flex; flex-direction: column; gap: 0.25rem;">
          <div class="active-synth-name ${this.activeImage.id}">${this.activeImage.name}</div>
          <div class="order-btn-wrapper" title="Posters coming soon!">
            <span class="btn-order-poster" style="cursor: default;">
              Posters Coming Soon
            </span>
            <span class="led-indicator"></span>
          </div>
        </div>
        <div class="stats">
          <div class="stat-display">
            <span class="stat-label">Moves</span>
            <span class="stat-value ${this.gameMode === 'freeplay' ? 'cyan' : ''}">${String(this.moves).padStart(3, '0')}</span>
          </div>
          <div class="stat-display">
            <span class="stat-label">Time</span>
            <span class="stat-value ${this.gameMode === 'freeplay' ? 'cyan' : ''}">
              ${this.gameMode === 'freeplay' ? 'FREE' : this.formatTime(this.secondsElapsed)}
            </span>
          </div>
        </div>
      </div>

      <!-- Mode Selector Segmented Toggle -->
      <div class="mode-selector">
        <button 
          class="mode-btn ${this.gameMode === 'freeplay' ? 'active cyan' : ''}" 
          @click=${() => this.setMode('freeplay')}
          ?disabled=${this.isSolving}
        >
          Freeplay
        </button>
        <button 
          class="mode-btn ${this.gameMode === 'play' ? 'active orange' : ''}" 
          @click=${() => this.setMode('play')}
          ?disabled=${this.isSolving}
        >
          Play Mode
        </button>
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
      </div>

      <div class="board-wrapper">
        <div 
          class="puzzle-grid ${this.gameMode === 'play' && !this.isPlaying ? 'locked' : ''}" 
          style="
            grid-template-columns: repeat(${size}, 1fr); 
            grid-template-rows: repeat(${size}, 1fr); 
            --bg-size: calc(${size} * 100% + (${size} - 1) * var(--grid-gap)) calc(${size} * 100% + (${size} - 1) * var(--grid-gap));
            --tile-hover-border: ${this.gameMode === 'freeplay' ? 'rgba(0, 229, 255, 0.5)' : 'rgba(255, 94, 0, 0.4)'};
            --tile-hover-glow: ${this.gameMode === 'freeplay' ? 'rgba(0, 229, 255, 0.4)' : 'rgba(255, 94, 0, 0.3)'};
          "
        >
          ${sortedTiles.map(tile => {
      const isBlank = tile.id === size * size - 1;
      const hideBlank = isBlank && (this.gameMode === 'freeplay' || this.isPlaying);

      // Calculate slice position coordinates
      const correctRow = Math.floor(tile.id / size);
      const correctCol = tile.id % size;
      const xPercent = (correctCol / (size - 1)) * 100;
      const yPercent = (correctRow / (size - 1)) * 100;
      const bgPosition = `${xPercent}% ${yPercent}%`;

      let peelClass = '';
      let peelSize = '';
      if (!isBlank && tile.peelCorner && !tile.isPeeledOff) {
        peelClass = `peel-${tile.peelCorner}`;
        peelSize = `calc(${tile.peelProgress || 0} * 100px)`;
      }

      return html`
              <div 
                class="tile ${hideBlank ? 'blank' : ''}" 
                data-index=${tile.currentIndex}
                @pointerdown=${(e: PointerEvent) => this.handlePointerDown(e, tile)}
                @dragstart=${(e: Event) => e.preventDefault()}
              >
                ${!tile.isPeeledOff ? html`
                  <div class="sticker-layer ${peelClass}" style="background-image: url('${this.activeImage.url}'); background-position: ${bgPosition}; ${peelSize ? `--peel-size: ${peelSize};` : ''}"></div>
                  ${tile.peelCorner ? html`
                    <div class="peel-hitbox peel-${tile.peelCorner}" @pointerdown=${(e: PointerEvent) => this.handlePeelPointerDown(e, tile)}></div>
                  ` : ''}
                ` : ''}
              </div>
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
          
          <div class="win-promo">
            <div class="win-promo-text" style="margin-bottom: 0;">Like these prints? Posters coming soon!</div>
          </div>

          <button class="primary" style="margin-top: 0.5rem;" @click=${this.shufflePuzzle}>Play Again</button>
        </div>

        ${this.gameMode === 'play' && !this.isPlaying && !this.hasWon ? html`
          <div class="start-overlay">
            <button class="primary start-btn" @click=${this.shufflePuzzle}>START GAME</button>
            <div class="start-hint">Click to Shuffle & Play</div>
          </div>
        ` : ''}
      </div>

      <div class="game-actions">
        <button 
          @click=${this.gameMode === 'freeplay' ? this.resetPuzzle : this.shufflePuzzle} 
          ?disabled=${this.isSolving || (this.gameMode === 'play' && !this.isPlaying)}
        >
          ${this.gameMode === 'freeplay' ? 'Reset' : 'Reshuffle'}
        </button>
        <button 
          @click=${() => { this.showPreview = !this.showPreview; }} 
          ?disabled=${this.hasWon || this.isSolving}
        >
          Preview
        </button>
        <button 
          @click=${() => this.runSolver(false)} 
          ?disabled=${this.gameMode !== 'play' || !this.isPlaying || this.hasWon || this.isSolving}
        >
          Get Hint
        </button>
        <button 
          @click=${() => this.runSolver(true)} 
          ?disabled=${this.gameMode !== 'play' || !this.isPlaying || this.hasWon || this.isSolving}
        >
          Auto-Solve
        </button>
      </div>

      <!-- Synth Console Footer -->
      <footer class="synth-footer">
        <div class="footer-jack-group">
          <span class="jack-label">POSTER OUT</span>
          <span class="jack-port" title="Like these prints? Posters coming soon!" style="cursor: default;"></span>
          <span class="jack-label" style="color: var(--accent-orange)">POSTERS COMING SOON</span>
        </div>
        <div class="footer-serial">MOD-808 // SERIAL: WS-2026</div>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sliding-puzzle': SlidingPuzzle;
  }
}
