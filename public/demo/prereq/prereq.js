(()=>{function ye(){return[co(),io(),lo(),uo(),bo(),So(),Co(),go(),po()].join(`
`)}function co(){return`
/* Generic elevated card (white surface, hairline border, soft shadow). */
.bc-card {
  background: var(--bc-color-bg);
  border: 1px solid var(--bc-color-border-divider);
  border-radius: var(--bc-radius-2xl);
  box-shadow: var(--bc-shadow-elev-2);
  color: var(--bc-color-text);
}
.bc-card--flat {
  box-shadow: none;
}
.bc-card--inset {
  background: var(--bc-color-bg-inset);
  box-shadow: none;
}

/* Translucent gradient panel \u2014 paper.nu side-card frame style. */
.bc-card-soft {
  background: linear-gradient(
    180deg,
    var(--bc-color-panel-grad-top),
    var(--bc-color-panel-grad-bottom)
  );
  border: 1px solid var(--bc-color-accent-border-12);
  border-radius: var(--bc-radius-3xl);
  box-shadow: var(--bc-shadow-side-panel);
  color: var(--bc-color-text-mauve-panel);
}

/* Status surface for inline empty/loading/error states inside a modal body. */
.bc-modal-status-card {
  background: var(--bc-color-bg);
  border: 1px solid var(--bc-color-border);
  border-radius: var(--bc-radius-3xl);
  box-shadow: var(--bc-shadow-modal-status);
  color: var(--bc-color-text);
}

/* Disclaimer / info notice (neutral surface with icon + body). */
.bc-disclaimer {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 10px;
  background: var(--bc-color-surface-hover);
  border: 1px solid var(--bc-color-border);
  border-radius: var(--bc-radius-lg);
  color: var(--bc-color-text-soft);
  font-size: var(--bc-font-11);
  line-height: 1.45;
}
.bc-disclaimer strong {
  color: var(--bc-color-text);
}

/* Section divider \u2014 horizontal hairline. */
.bc-divider {
  border: 0;
  border-top: 1px solid var(--bc-color-border-divider);
  margin: 0;
}
`}function io(){return`
/* Base button. Inherit type, no chrome by default \u2014 variants supply visuals.
   Defaults match the modal/dialog action shape (the de-facto standard across
   features); use --xs/--sm/--lg modifiers below to scale. */
.bc-btn {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: 1px solid transparent;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: var(--bc-font-13);
  font-weight: var(--bc-fw-bold);
  letter-spacing: var(--bc-ls-wide);
  line-height: 1;
  padding: 9px 14px;
  border-radius: var(--bc-radius-xl);
  cursor: pointer;
  text-decoration: none;
  transition:
    background var(--bc-tx-base) var(--bc-easing),
    border-color var(--bc-tx-base) var(--bc-easing),
    color var(--bc-tx-base) var(--bc-easing),
    box-shadow var(--bc-tx-base) var(--bc-easing);
}
.bc-btn:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

/* Variant rules below are chained with .bc-btn to bump specificity to (0,2,0).
   Paper.nu's Tailwind preflight resets [type='button'] background-color to
   transparent at (0,1,0) and loads after our design-system style \u2014 without
   the chain, that reset defeats the variant fills (white text on the white
   modal card became invisible). */

/* Primary: solid accent fill. */
.bc-btn.bc-btn--primary {
  background: var(--bc-color-cta);
  border-color: var(--bc-color-cta);
  color: var(--bc-color-cta-on);
}
.bc-btn.bc-btn--primary:hover:not(:disabled) {
  background: var(--bc-color-cta-hover);
  border-color: var(--bc-color-cta-hover);
}

/* Soft modifier \u2014 swaps a primary button's hard accent for the softer accent
   ladder (used by modal/dialog action rows where the harder accent reads as
   too loud). Stack with --primary: bc-btn bc-btn--primary bc-btn--soft. */
.bc-btn.bc-btn--soft {
  background: var(--bc-color-cta-soft);
  border-color: var(--bc-color-cta-soft);
  color: var(--bc-color-cta-soft-on);
}
.bc-btn.bc-btn--soft:hover:not(:disabled) {
  background: var(--bc-color-cta-soft-hover);
  border-color: var(--bc-color-cta-soft-hover);
}

/* Secondary: outline with surface bg. */
.bc-btn.bc-btn--secondary {
  background: var(--bc-color-bg);
  border-color: var(--bc-color-border);
  color: var(--bc-color-text);
}
.bc-btn.bc-btn--secondary:hover:not(:disabled) {
  background: var(--bc-color-surface-hover);
}

/* Accent-outline secondary \u2014 transparent bg, accent-tinted border, inherits
   text color. Used in modal/dialog action rows alongside --primary --soft. */
.bc-btn.bc-btn--secondary-accent {
  background: transparent;
  border-color: var(--bc-color-accent-border-22);
  color: inherit;
}
.bc-btn.bc-btn--secondary-accent:hover:not(:disabled) {
  background: var(--bc-color-accent-fill-08);
}

/* Fill modifier \u2014 expands the button along the main axis of a flex actions
   row (e.g. modal action rows where the primary stretches and the secondary
   stays compact). */
.bc-btn--fill {
  flex: 1 1 auto;
}

/* Ghost: transparent, text only. */
.bc-btn.bc-btn--ghost {
  background: transparent;
  border-color: transparent;
  color: var(--bc-color-text-muted);
}
.bc-btn.bc-btn--ghost:hover:not(:disabled) {
  background: var(--bc-color-surface-hover);
  color: var(--bc-color-text);
}

/* Outline-accent: outlined accent (used for "Refresh" style secondary CTAs). */
.bc-btn.bc-btn--outline-accent {
  background: var(--bc-color-surface-translucent-72);
  border-color: var(--bc-color-accent-border-32);
  color: var(--bc-color-accent);
}
.bc-btn.bc-btn--outline-accent:hover:not(:disabled) {
  background: var(--bc-color-accent-fill-12);
}

/* Icon-only square button. */
.bc-btn.bc-btn--icon {
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: var(--bc-radius-lg);
  color: var(--bc-color-text-muted);
}
.bc-btn.bc-btn--icon:hover:not(:disabled) {
  background: var(--bc-color-surface-hover);
  color: var(--bc-color-text);
}

/* Pill modifier \u2014 fully-rounded edge. */
.bc-btn--pill {
  border-radius: var(--bc-radius-pill);
  padding-left: 16px;
  padding-right: 16px;
}

/* Size modifiers. */
.bc-btn--xs {
  font-size: var(--bc-font-10);
  padding: 2px 8px;
}
.bc-btn--sm {
  font-size: var(--bc-font-11);
  padding: 4px 10px;
}
.bc-btn--lg {
  font-size: var(--bc-font-13);
  padding: 8px 16px;
}

/* Uppercase label modifier for badge-like buttons. */
.bc-btn--label {
  text-transform: uppercase;
  letter-spacing: var(--bc-ls-widest);
  font-weight: var(--bc-fw-bold);
}
`}function lo(){return`
/* Static label pill (read-only badge). */
.bc-pill {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: var(--bc-radius-pill);
  background: var(--bc-color-accent-fill-08);
  color: var(--bc-color-accent);
  font-size: var(--bc-font-11);
  font-weight: var(--bc-fw-semibold);
  line-height: 1.2;
  white-space: nowrap;
}
.bc-pill--muted {
  background: var(--bc-color-surface-hover);
  color: var(--bc-color-text-muted);
}
.bc-pill--success {
  background: var(--bc-color-success-bg);
  color: var(--bc-color-success);
}
.bc-pill--warn {
  background: var(--bc-color-warn-bg);
  color: var(--bc-color-warn);
}
.bc-pill--danger {
  background: var(--bc-color-danger-bg);
  color: var(--bc-color-danger);
}
.bc-pill--rose {
  background: var(--bc-color-warn-rose-fill-12);
  color: var(--bc-color-warn-rose-text);
}

/* Interactive chip \u2014 used as a removable filter token or active selector. */
.bc-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 10px;
  border-radius: var(--bc-radius-pill);
  background: var(--bc-color-accent-surface-tile);
  color: var(--bc-color-accent);
  border: 1px solid transparent;
  font-size: var(--bc-font-11);
  font-weight: var(--bc-fw-semibold);
  line-height: 1.2;
  cursor: pointer;
}
.bc-chip:hover {
  background: var(--bc-color-accent-fill-12);
}

/* Active state for a chip (filter row). */
.bc-chip.is-active,
.bc-chip[aria-pressed="true"] {
  background: var(--bc-color-accent-surface-tile);
  color: var(--bc-color-accent);
  border-color: var(--bc-color-accent-border-18);
}

/* Status pill \u2014 Open / Closed / Wait List style. */
.bc-status-pill {
  display: inline-flex;
  align-items: center;
  padding: 1px 8px;
  border-radius: var(--bc-radius-pill);
  border: 1px solid var(--bc-color-border);
  background: var(--bc-color-surface-soft);
  color: var(--bc-color-text-muted);
  font-size: var(--bc-font-10);
  font-weight: var(--bc-fw-bold);
  letter-spacing: var(--bc-ls-widest);
  text-transform: uppercase;
  line-height: 1.4;
}
.bc-status-pill[data-status="Open"] {
  background: var(--bc-color-success-bg);
  color: var(--bc-color-success);
  border-color: var(--bc-color-success-bg);
}
.bc-status-pill[data-status="Closed"] {
  background: var(--bc-color-danger-bg);
  color: var(--bc-color-danger);
  border-color: var(--bc-color-danger-bg);
}
.bc-status-pill[data-status="Wait List"] {
  background: var(--bc-color-warn-bg);
  color: var(--bc-color-warn);
  border-color: var(--bc-color-warn-bg);
}

/* Generic kind-tagged tag (used by class-search course header). */
.bc-tag {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: var(--bc-radius-md);
  background: var(--bc-color-paper-soft);
  color: var(--bc-color-paper-deep);
  font-size: var(--bc-font-10);
  font-weight: var(--bc-fw-bold);
  letter-spacing: var(--bc-ls-widest);
  text-transform: uppercase;
  line-height: 1.4;
}
.bc-tag[data-kind="distro"] {
  background: var(--bc-color-success-distro-bg);
  color: var(--bc-color-success-distro-text);
}
.bc-tag[data-kind="discipline"] {
  background: var(--bc-color-warn-bg);
  color: var(--bc-color-warn-text-discipline);
}
.bc-tag[data-kind="school"] {
  background: var(--bc-color-paper-soft);
  color: var(--bc-color-paper);
}
.bc-tag[data-kind="open"] {
  background: var(--bc-color-success-bg);
  color: var(--bc-color-success);
}
.bc-tag[data-kind="closed"] {
  background: var(--bc-color-danger-bg);
  color: var(--bc-color-danger);
}
.bc-tag[data-kind="wait"] {
  background: var(--bc-color-warn-bg);
  color: var(--bc-color-warn);
}
`}function uo(){return`
/* Base text input. */
.bc-input,
.bc-select {
  display: block;
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--bc-color-border-strong);
  border-radius: var(--bc-radius-lg);
  background: var(--bc-color-bg);
  color: var(--bc-color-text);
  font: inherit;
  font-size: var(--bc-font-13);
  line-height: 1.4;
  transition:
    border-color var(--bc-tx-base) var(--bc-easing),
    box-shadow var(--bc-tx-base) var(--bc-easing);
}
.bc-input:focus,
.bc-select:focus {
  outline: none;
  border-color: var(--bc-color-accent);
  box-shadow: var(--bc-shadow-input-focus-ring);
}
.bc-input::placeholder {
  color: var(--bc-color-text-subtle);
}
.bc-input--lg {
  font-size: var(--bc-font-15);
  padding: 10px 14px;
}
.bc-input--sm {
  font-size: var(--bc-font-12);
  padding: 6px 10px;
}

/* Search input \u2014 pill wrapper with icon + borderless input. */
.bc-search {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 6px 12px;
  border: 1px solid var(--bc-color-border);
  border-radius: var(--bc-radius-pill);
  background: var(--bc-color-bg);
  color: var(--bc-color-text);
}
.bc-search:focus-within {
  border-color: var(--bc-color-accent);
  box-shadow: var(--bc-shadow-input-focus-ring);
}
.bc-search__icon {
  display: inline-flex;
  flex: 0 0 auto;
  color: var(--bc-color-text-subtle);
}
.bc-search__input {
  border: none;
  background: transparent;
  color: var(--bc-color-text);
  flex: 1 1 auto;
  min-width: 0;
  font: inherit;
  font-size: var(--bc-font-13);
  line-height: 1.4;
}
.bc-search__input:focus {
  outline: none;
}
.bc-search__input::placeholder {
  color: var(--bc-color-text-subtle);
}
`}function bo(){return`
/* Underline tabs (modal-style). */
.bc-tabs {
  display: flex;
  align-items: center;
  gap: 4px;
  border-bottom: 1px solid var(--bc-color-border);
}
.bc-tab {
  appearance: none;
  background: transparent;
  border: 0;
  border-bottom: 2px solid transparent;
  padding: 10px 14px;
  margin-bottom: -1px;
  color: var(--bc-color-text-muted);
  font: inherit;
  font-size: var(--bc-font-13);
  font-weight: var(--bc-fw-medium);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.bc-tab:hover {
  color: var(--bc-color-text);
}
.bc-tab.is-active {
  color: var(--bc-color-accent);
  border-bottom-color: var(--bc-color-accent);
  font-weight: var(--bc-fw-semibold);
}

/* Pill tabs (side-card-style segmented control). */
.bc-tabs--pill {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  border: 0;
  padding: 2px;
  border-radius: var(--bc-radius-2xl);
  background: var(--bc-color-accent-fill-06);
}
.bc-tabs--pill .bc-tab {
  border: 0;
  margin-bottom: 0;
  padding: 6px 12px;
  border-radius: var(--bc-radius-xl);
  font-size: var(--bc-font-12);
  text-transform: uppercase;
  letter-spacing: var(--bc-ls-wider);
  font-weight: var(--bc-fw-bold);
  color: var(--bc-color-text-mauve-soft);
}
.bc-tabs--pill .bc-tab:hover {
  background: var(--bc-color-accent-fill-08);
}
.bc-tabs--pill .bc-tab.is-active {
  background: var(--bc-color-accent-fill-15);
  color: var(--bc-color-accent);
  border: 0;
}
`}function So(){return`
/* Circular loading spinner. */
@keyframes bc-spin {
  to { transform: rotate(360deg); }
}
.bc-spinner {
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: var(--bc-radius-circle);
  border: 1.5px solid var(--bc-color-accent-fill-24);
  border-top-color: var(--bc-color-accent);
  animation: bc-spin 900ms linear infinite;
}
.bc-spinner--xs {
  width: 10px;
  height: 10px;
}
.bc-spinner--lg {
  width: 32px;
  height: 32px;
  border-width: 3px;
}

/* Flash banner \u2014 full-width inline alert. */
.bc-flash {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 12px;
  border: 1px solid transparent;
  border-radius: var(--bc-radius-xl);
}
.bc-flash--success {
  background: var(--bc-color-success-bg-soft);
  border-color: var(--bc-color-success-border);
  color: var(--bc-color-success-text);
}
.bc-flash--warn {
  background: var(--bc-color-warn-bg-soft);
  border-color: var(--bc-color-warn-border);
  color: var(--bc-color-warn-text);
}
.bc-flash--danger {
  background: var(--bc-color-danger-bg-soft);
  border-color: var(--bc-color-danger-border);
  color: var(--bc-color-danger-text);
}

/* Tooltip \u2014 host + popup; show on hover/focus of host.
   Default: single-line, anchored above the host, centered.
   Modifiers (added when paper-ctec migrated off its private tooltip):
     .bc-tooltip--rich  \u2014 multi-line wrapping popup anchored below the
                          host with a CSS arrow; high z-index so it
                          renders above modals.
     .bc-tooltip--right \u2014 right-edge anchored; pair with --rich when the
                          host sits near the right side of its container
                          so the popup hugs the right instead of
                          overflowing. */
.bc-tooltip-host {
  position: relative;
  display: inline-flex;
}
.bc-tooltip {
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--bc-color-bg);
  color: var(--bc-color-text);
  border: 1px solid var(--bc-color-border);
  padding: 6px 10px;
  border-radius: var(--bc-radius-lg);
  font-size: var(--bc-font-11);
  line-height: 1.45;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--bc-tx-base) var(--bc-easing), visibility var(--bc-tx-base) var(--bc-easing);
  box-shadow: var(--bc-shadow-tooltip);
  z-index: 10;
}
.bc-tooltip--rich {
  bottom: auto;
  top: calc(100% + 8px);
  left: -8px;
  transform: none;
  width: min(260px, calc(100vw - 32px));
  padding: 10px 12px;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-weight: var(--bc-fw-medium);
  font-style: normal;
  letter-spacing: 0;
  text-transform: none;
  text-align: left;
  white-space: normal;
  word-break: normal;
  overflow-wrap: anywhere;
  z-index: 2147483647;
}
.bc-tooltip--rich.bc-tooltip--right {
  left: auto;
  right: 0;
}
.bc-tooltip--rich::before {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 14px;
  border: 6px solid transparent;
  border-bottom-color: var(--bc-color-bg);
}
.bc-tooltip--rich.bc-tooltip--right::before {
  left: auto;
  right: 14px;
}
.bc-tooltip-host:hover .bc-tooltip,
.bc-tooltip-host:focus-within .bc-tooltip {
  opacity: 1;
  visibility: visible;
}
`}function Co(){return`
.bc-stars {
  display: inline-flex;
  align-items: center;
  gap: 1px;
}
.bc-star {
  position: relative;
  display: inline-block;
  width: 12px;
  height: 12px;
}
.bc-star__base {
  color: var(--bc-color-star-base);
}
.bc-star__fill {
  color: var(--bc-color-star-fill);
  position: absolute;
  inset: 0;
  overflow: hidden;
}
`}function go(){return`
.bc-stat {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  padding: 8px 10px;
  background: var(--bc-color-bg);
  border: 1px solid var(--bc-color-border);
  border-radius: var(--bc-radius-lg);
  min-width: 56px;
}
.bc-stat__value {
  color: var(--bc-color-accent);
  font-size: var(--bc-font-15);
  font-weight: var(--bc-fw-bold);
  line-height: 1.1;
}
.bc-stat__label {
  color: var(--bc-color-text-muted);
  font-size: var(--bc-font-10);
  font-weight: var(--bc-fw-semibold);
  letter-spacing: var(--bc-ls-widest);
  text-transform: uppercase;
  line-height: 1.4;
}
`}function po(){return`
/* Paper card \u2014 cream surface, dashed warm border, offset solid shadow.
   Use for popup-internal callouts that should feel like notebook scraps. */
.bc-card--paper {
  background: var(--bc-color-bg);
  border: 2px solid var(--bc-color-text);
  border-radius: var(--bc-radius-lg);
  box-shadow: 2px 2px 0 var(--bc-color-text);
  color: var(--bc-color-text);
  padding: 16px;
}
.bc-card--paper.bc-card--accent-shadow {
  box-shadow: 2px 2px 0 var(--bc-color-accent);
}
/* Slight rotational jitter for popup-only "stack of pages" feel. Avoid
   applying these inside content-script surfaces \u2014 Paper.nu's tight grids
   look broken with rotated children. */
.bc-card--rotate-l { transform: rotate(-0.5deg); }
.bc-card--rotate-r { transform: rotate(0.7deg); }

/* Pencil button \u2014 ink fill, pencil-font label, offset solid accent shadow. */
.bc-btn.bc-btn--pencil {
  background: var(--bc-color-text);
  border-color: var(--bc-color-text);
  color: var(--bc-color-bg);
  font-family: var(--bc-font-display);
  font-weight: var(--bc-fw-regular);
  letter-spacing: 0.02em;
  box-shadow: 2px 2px 0 var(--bc-color-accent);
  border-radius: var(--bc-radius-sm);
  padding: 10px 16px;
}
.bc-btn.bc-btn--pencil:hover:not(:disabled) {
  background: var(--bc-color-text-strong);
  box-shadow: 3px 3px 0 var(--bc-color-accent);
  transform: translate(-1px, -1px);
}

/* Yellow marker highlight under inline text (landing's .marker). */
.bc-mark {
  background: linear-gradient(transparent 58%, var(--bc-color-highlight-mark) 58%);
  padding: 0 4px;
}

/* Hand-drawn scribble \u2014 handwriting font, accent color, tilted. Used for
   section taglines, small annotations, footer asides. */
.bc-scribble {
  font-family: var(--bc-font-hand);
  color: var(--bc-color-accent);
  display: inline-block;
  transform: rotate(-2deg);
  font-size: var(--bc-font-18);
  line-height: 1.2;
}

/* Pencil-font stamp \u2014 uppercase boxed label, lightly rotated. */
.bc-stamp {
  display: inline-flex;
  align-items: center;
  font-family: var(--bc-font-display);
  font-size: var(--bc-font-11);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  padding: 3px 8px;
  border: 1.5px solid currentColor;
  border-radius: var(--bc-radius-sm);
  transform: rotate(3deg);
  color: var(--bc-color-text-muted);
  background: transparent;
}
.bc-stamp--live { color: var(--bc-color-success); }
.bc-stamp--next { color: var(--bc-color-text); }
.bc-stamp--queued { color: var(--bc-color-text-muted); }

/* Dashed divider \u2014 pencil-line dash on warm border tone. */
.bc-divider--dashed {
  border: 0;
  border-top: 2px dashed var(--bc-color-border-strong);
  margin: 0;
}
`}function xe(e){return[fo(e??(r=>`../assets/fonts/${r}`)),Eo(),Y(`:root,
[data-bc-theme="default"]`,pe),Y('[data-bc-theme="default"][data-bc-mode="dark"]',fe),Y('[data-bc-theme="pencil"]',mo),Y('[data-bc-theme="pencil"][data-bc-mode="dark"]',Io),Y('[data-bc-theme="bright"]',ho),Y('[data-bc-theme="bright"][data-bc-mode="dark"]',To)].join(`
`)}function fo(e){let r=(o,t,n,a="normal")=>`
@font-face {
  font-family: "${o}";
  font-style: ${a};
  font-weight: ${t};
  font-display: swap;
  src: url("${e(n)}") format("woff2");
}`;return[r("Special Elite",400,"special-elite-regular.woff2"),r("Caveat",400,"caveat-regular.woff2"),r("Caveat",600,"caveat-600.woff2"),r("Caveat",700,"caveat-700.woff2"),r("Inter",400,"inter-regular.woff2"),r("Inter",500,"inter-500.woff2"),r("Inter",600,"inter-600.woff2"),r("Inter",700,"inter-700.woff2"),r("JetBrains Mono",400,"jetbrains-mono-regular.woff2"),r("JetBrains Mono",500,"jetbrains-mono-500.woff2")].join(`
`)}function Eo(){return`
:root {
  /* Radii */
  --bc-radius-xs: 2px;
  --bc-radius-sm: 4px;
  --bc-radius-md: 6px;
  --bc-radius-lg: 8px;
  --bc-radius-xl: 10px;
  --bc-radius-2xl: 12px;
  --bc-radius-3xl: 14px;
  --bc-radius-pill: 999px;
  --bc-radius-circle: 50%;

  /* Type sizes */
  --bc-font-9: 9px;
  --bc-font-10: 10px;
  --bc-font-11: 11px;
  --bc-font-12: 12px;
  --bc-font-13: 13px;
  --bc-font-14: 14px;
  --bc-font-15: 15px;
  --bc-font-16: 16px;
  --bc-font-18: 18px;
  --bc-font-20: 20px;
  --bc-font-22: 22px;
  --bc-font-24: 24px;
  --bc-font-26: 26px;
  --bc-font-28: 28px;
  --bc-font-36: 36px;

  /* Type weights */
  --bc-fw-regular: 400;
  --bc-fw-medium: 500;
  --bc-fw-semibold: 600;
  --bc-fw-bold: 700;
  --bc-fw-extrabold: 800;

  /* Default weight for display-font surfaces (.bc-paper-ctec-modal-title,
     .bc-paper-ctec-modal-card-title, etc.). Defaults to semibold so
     Northwestern-theme headers (rendered in Inter via inherited stack)
     get enough presence; the pencil theme overrides to regular to keep
     Special Elite at its native single weight. */
  --bc-fw-display: var(--bc-fw-semibold);

  /* Motion */
  --bc-tx-fast: 80ms;
  --bc-tx-base: 120ms;
  --bc-tx-slow: 220ms;
  --bc-easing: ease;

  /* Static (theme-invariant) colors \u2014 used when sitting on an inline-set
     saturated background (e.g. heatmap cells), where the text color must
     stay near-white regardless of light/dark theme. */
  --bc-color-on-saturated: #ffffff;

  /* Heatmap shader RGB tuples. JS reads these at render time and
     interpolates an alpha for each cell (so cell intensity scales with
     value while the hue follows the theme). Two scales: ratings (Inst /
     Course / Learn / Global) and hours. */
  --bc-color-heatmap-rating-rgb: 102, 2, 60;
  --bc-color-heatmap-hours-rgb: 162, 28, 175;

  /* Call-to-action fill for primary buttons. Follows the accent unless a
     theme sets its own (bright uses pencil yellow with dark text, since
     its accent is near-black and has to stay readable as text). */
  /* Chart ink. Follows the accent unless a theme colors data separately. */
  --bc-color-chart: var(--bc-color-accent);
  --bc-color-chart-fill-45: var(--bc-color-accent-fill-45);
  --bc-color-chart-fill-05: var(--bc-color-accent-fill-05);
  --bc-color-cta: var(--bc-color-accent);
  --bc-color-cta-hover: var(--bc-color-accent-hover);
  --bc-color-cta-on: var(--bc-color-accent-on);
  --bc-color-cta-soft: var(--bc-color-accent-soft);
  --bc-color-cta-soft-hover: var(--bc-color-accent-soft-hover);
  --bc-color-cta-soft-on: var(--bc-color-accent-soft-on);

  /* Season inks for the drawn term icons (design/icons.ts). Dark themes
     lift them in their own blocks. */
  --bc-color-season-fall: #b85c2c;
  --bc-color-season-winter: #4a7bb0;
  --bc-color-season-spring: #c4527e;
  --bc-color-season-summer: #d39a17;

  /* Cast by the analytics side sheet onto the page to its left. */
  --bc-shadow-sheet: -18px 0 40px -24px rgba(23, 23, 26, 0.35);

  /* Letter-spacing */
  --bc-ls-tight: -0.02em;
  --bc-ls-snug: -0.01em;
  --bc-ls-wide: 0.02em;
  --bc-ls-wider: 0.03em;
  --bc-ls-widest: 0.04em;
  --bc-ls-caps: 0.06em;
  --bc-ls-caps-wide: 0.08em;
  --bc-ls-caps-widest: 0.1em;

  /* Font stacks. Body/mono are the general workhorses across every theme.
     Display/hand default to inherit so the Northwestern (default) theme
     leaves headers and accents in whatever font the surrounding host page
     uses (CAESAR's Helvetica/Arial, Paper.nu's system stack, the popup's
     own family, etc.) \u2014 applying font-family: var(--bc-font-display)
     becomes a no-op. The pencil theme overrides --bc-font-display and
     --bc-font-hand in its own block to bring back the typewriter +
     handwriting flair. The system fallbacks on body let CAESAR / Paper.nu
     render with native fonts before the woff2 finishes loading. */
  --bc-font-body: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --bc-font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --bc-font-display: inherit;
  --bc-font-hand: inherit;
}
`}function Mo(e,r){return`rgba(${e[0]}, ${e[1]}, ${e[2]}, ${r})`}function z(e,r,o){return Object.entries(o).map(([t,n])=>`  --bc-color-${e}-${t}: ${Mo(r,n)};`)}function Y(e,r){let o=[];o.push(...z("accent-fill",r.accentRgb,r.accentFill)),o.push(...z("accent-border",r.accentRgb,r.accentBorder)),o.push(...z("warn-rose-fill",r.warnRoseRgb,r.warnRoseFill)),o.push(...z("warn-rose-border",r.warnRoseRgb,r.warnRoseBorder)),o.push(...z("ink-fill",r.inkFillRgb,r.inkFill)),o.push(`  --bc-color-ink-border-12: ${r.inkBorder12};`);for(let[t,n]of Object.entries(r.tokens))o.push(`  ${t}: ${n};`);return`
${e} {
${o.join(`
`)}
}
`}var pe={accentRgb:[102,2,60],accentFill:{"04":"0.04","05":"0.05","06":"0.06","08":"0.08",10:"0.10",12:"0.12",15:"0.15",18:"0.18",22:"0.22",24:"0.24",32:"0.32",45:"0.45"},accentBorder:{"08":"0.08",12:"0.12",14:"0.14",18:"0.18",22:"0.22",28:"0.28",32:"0.32",45:"0.45"},warnRoseRgb:[190,24,93],warnRoseFill:{12:"0.12",20:"0.20"},warnRoseBorder:{28:"0.28",32:"0.32"},inkFillRgb:[15,23,42],inkFill:{"04":"0.04","06":"0.06","08":"0.08","025":"0.025"},inkBorder12:"rgba(17, 24, 39, 0.12)",tokens:{"--bc-color-accent":"#66023c","--bc-color-accent-hover":"#500030","--bc-color-accent-pressed":"#3f0126","--bc-color-accent-on":"#ffffff","--bc-color-accent-soft":"#66023c","--bc-color-accent-soft-hover":"#500030","--bc-color-accent-soft-on":"#ffffff","--bc-color-accent-surface-faint":"#fff7fb","--bc-color-accent-surface-soft":"#fdeef5","--bc-color-accent-surface-tint":"#faf3f7","--bc-color-accent-surface-tile":"#f6ecf2","--bc-color-accent-surface-tile-2":"#f1ebef","--bc-color-accent-surface-row":"#faf7f9","--bc-color-accent-surface-row-border":"#f0e4eb","--bc-color-accent-mid-border":"#d8b6c8","--bc-color-warn-rose-text":"#9f1239","--bc-color-warn-rose-text-deep":"#881337","--bc-color-paper":"#4e2a84","--bc-color-paper-deep":"#3a1f63","--bc-color-paper-soft":"#f3eef9","--bc-color-bg":"#ffffff","--bc-color-bg-app":"#f3f4f6","--bc-color-bg-muted":"#fafafa","--bc-color-bg-inset":"var(--bc-color-accent-surface-row)","--bc-color-surface-hover":"#f7f7f8","--bc-color-surface-hover-strong":"#f3f3f5","--bc-color-surface-soft":"#f9fafb","--bc-color-border":"#e6e6ea","--bc-color-border-strong":"#d1d5db","--bc-color-border-divider":"#e5e7eb","--bc-color-surface-translucent-86":"rgba(255, 251, 253, 0.86)","--bc-color-surface-translucent-72":"rgba(255, 255, 255, 0.72)","--bc-color-surface-translucent-62":"rgba(255, 255, 255, 0.62)","--bc-color-surface-translucent-56":"rgba(255, 255, 255, 0.56)","--bc-color-surface-translucent-84":"rgba(255, 255, 255, 0.84)","--bc-color-surface-translucent-88":"rgba(255, 255, 255, 0.88)","--bc-color-surface-translucent-92":"rgba(255, 255, 255, 0.92)","--bc-color-surface-translucent-98":"rgba(255, 255, 255, 0.98)","--bc-color-surface-warm-grad-top":"rgba(255, 250, 252, 0.98)","--bc-color-text":"#1f2937","--bc-color-text-strong":"#111827","--bc-color-text-soft":"#4b5563","--bc-color-text-muted":"#6b7280","--bc-color-text-subtle":"#9ca3af","--bc-color-text-mauve":"#7a596a","--bc-color-text-mauve-soft":"#6b5a65","--bc-color-text-mauve-warm":"#5b4451","--bc-color-text-mauve-deep":"#2f1f29","--bc-color-text-mauve-panel":"#3f3340","--bc-color-text-mauve-pale":"#c9b4bf","--bc-color-text-mauve-cool":"#9b6b81","--bc-color-text-mauve-axis":"#9b8290","--bc-color-text-mauve-axis-strong":"#7a596a","--bc-color-text-body-warm":"#4b3a44","--bc-color-text-mauve-cool-alt":"#6b5a65","--bc-color-text-on-tooltip":"#f9fafb","--bc-color-text-on-histogram":"#3a2730","--bc-color-success":"#15803d","--bc-color-success-bg":"#dcfce7","--bc-color-success-bg-soft":"#ecfdf5","--bc-color-success-border":"#abefc6","--bc-color-success-text":"#054f31","--bc-color-success-deep":"#047857","--bc-color-success-distro-text":"#065f46","--bc-color-success-distro-bg":"#ecfdf5","--bc-color-warn":"#b45309","--bc-color-warn-bg":"#fef3c7","--bc-color-warn-bg-soft":"#fffaeb","--bc-color-warn-bg-page":"#fff7ed","--bc-color-warn-border":"#fedf89","--bc-color-warn-border-page":"#fdba74","--bc-color-warn-text":"#93370d","--bc-color-warn-text-page":"#7c2d12","--bc-color-warn-text-discipline":"#92400e","--bc-color-danger":"#b91c1c","--bc-color-danger-bg":"#fee2e2","--bc-color-danger-bg-soft":"#fef3f2","--bc-color-danger-bg-pill":"#fdecec","--bc-color-danger-border":"#fecdca","--bc-color-danger-text":"#912018","--bc-color-danger-text-pill":"#b03d3d","--bc-color-danger-deep":"#b91c1c","--bc-color-danger-rose":"#9f1239","--bc-color-info-bg":"#eef2ff","--bc-color-info-border":"#c7d2fe","--bc-color-info-text":"#1e1b4b","--bc-color-info-text-deep":"#3730a3","--bc-color-highlight":"#fef08a","--bc-color-highlight-text":"#713f12","--bc-color-highlight-mark":"rgba(254, 240, 138, 0.7)","--bc-color-star-base":"#c9b4bf","--bc-color-star-fill":"#d97706","--bc-color-hours-grad-start":"#a21caf","--bc-color-hours-grad-end":"#db2777","--bc-color-chart-trend-axis":"#f1ebef","--bc-color-chart-trend-text":"#9b8290","--bc-color-chart-trend-text-strong":"#7a596a","--bc-color-chart-axis-cool":"#475569","--bc-color-ink":"#1f2937","--bc-color-ink-deep":"#0f172a","--bc-color-ink-text":"#1f2937","--bc-color-ink-text-on-light":"#f9fafb","--bc-color-ink-instructor-pill-bg":"rgba(17, 24, 39, 0.06)","--bc-shadow-elev-1":"0 1px 2px rgba(15, 23, 42, 0.04)","--bc-shadow-elev-2":"0 2px 8px rgba(15, 23, 42, 0.05)","--bc-shadow-card-soft":"0 -1px 2px rgba(15, 23, 42, 0.04)","--bc-shadow-button":"0 2px 6px rgba(15, 23, 42, 0.18)","--bc-shadow-button-hover":"0 3px 8px rgba(15, 23, 42, 0.22)","--bc-shadow-add-cta":"0 2px 6px rgba(102, 2, 60, 0.22)","--bc-shadow-modal":"0 1px 2px rgba(0, 0, 0, 0.06), 0 30px 60px -10px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.04)","--bc-shadow-modal-status":"0 1px 2px rgba(0, 0, 0, 0.04)","--bc-shadow-auth-card":"0 28px 60px rgba(15, 23, 42, 0.32)","--bc-shadow-side-panel":"0 10px 28px rgba(102, 2, 60, 0.08)","--bc-shadow-tooltip":"0 8px 24px rgba(0, 0, 0, 0.18)","--bc-shadow-kpi-active-ring":"0 0 0 3px rgba(102, 2, 60, 0.08)","--bc-shadow-toggle-knob":"0 1px 3px rgba(0, 0, 0, 0.25)","--bc-shadow-input-focus-ring":"0 0 0 3px rgba(102, 2, 60, 0.18)","--bc-shadow-input-focus-inner":"inset 0 1px 2px rgba(15, 23, 42, 0.04)","--bc-color-overlay-modal":"rgba(15, 23, 42, 0.55)","--bc-color-overlay-auth":"rgba(15, 23, 42, 0.6)","--bc-color-overlay-on-light":"rgba(15, 23, 42, 0.08)","--bc-color-flash-pill-bg":"rgba(255, 255, 255, 0.65)","--bc-color-flash-action-bg":"rgba(255, 255, 255, 0.7)","--bc-color-flash-action-bg-hover":"rgba(255, 255, 255, 1)","--bc-color-sentiment-pos-fg":"#15803d","--bc-color-sentiment-pos-bg":"#ecfdf5","--bc-color-sentiment-neg-fg":"#9f1239","--bc-color-sentiment-neg-bg":"#fff1f2","--bc-color-sentiment-mix-fg":"#a16207","--bc-color-sentiment-mix-bg":"#fefce8","--bc-color-sentiment-neu-fg":"#7a596a","--bc-color-sentiment-neu-bg":"#f6ecf2","--bc-color-sentiment-all-dot":"#d8b6c8","--bc-color-kpi-fg-dark":"#f9fafb","--bc-color-panel-grad-top":"rgba(255, 250, 252, 0.98)","--bc-color-panel-grad-bottom":"rgba(255, 255, 255, 0.98)","--bc-color-card-outline":"rgba(17, 24, 39, 0.7)","--bc-color-card-divider-soft":"rgba(17, 24, 39, 0.12)","--bc-color-cart-bg":"#1f2937","--bc-color-cart-bg-hover":"#0f172a","--bc-color-cart-border":"rgba(15, 23, 42, 0.45)","--bc-color-cart-border-hover":"rgba(15, 23, 42, 0.7)","--bc-color-cart-text":"#f9fafb","--bc-color-cart-success-bg":"#047857","--bc-color-cart-success-border":"rgba(4, 120, 87, 0.65)","--bc-color-cart-success-text":"#ecfdf5","--bc-color-cart-error-bg":"#b91c1c","--bc-color-cart-error-border":"rgba(185, 28, 28, 0.7)","--bc-color-cart-error-text":"#fef2f2","--bc-color-cart-loading-bg":"#4b5563","--bc-color-cart-loading-border":"rgba(75, 85, 99, 0.65)","--bc-color-cart-loading-text":"#f3f4f6","--bc-color-comment-highlight-light":"rgba(250, 204, 21, 0.38)","--bc-color-comments-card-bg":"var(--bc-color-surface-hover)","--bc-color-disabled-bg":"#c7c2d6","--bc-color-gate-warn-bg":"#fff7ed","--bc-color-gate-warn-border":"#fdba74","--bc-color-gate-warn-text":"#7c2d12","--bc-color-gate-lock-bg":"#eef2ff","--bc-color-gate-lock-border":"#c7d2fe","--bc-color-gate-lock-text":"#1e1b4b","--bc-color-gate-ok-bg":"#ecfdf5","--bc-color-gate-ok-border":"#a7f3d0","--bc-color-gate-ok-text":"#064e3b","--bc-color-seat-full-bg":"#fde8e8","--bc-color-seat-full-border":"#f4a9a9","--bc-color-seat-full-ink":"#8c1d18","--bc-color-seat-waitlist-bg":"#fff0d9","--bc-color-seat-waitlist-border":"#f1c27a","--bc-color-seat-waitlist-ink":"#8a4b00","--bc-color-seat-info-bg":"#eef2ff","--bc-color-seat-info-border":"#c7d2fe","--bc-color-seat-info-ink":"#3730a3","--bc-color-seat-warn-bg":"#fff1df","--bc-color-seat-warn-border":"#f7c58a","--bc-color-seat-warn-ink":"#94410d","--bc-color-seat-tight-bg":"#fff8d9","--bc-color-seat-tight-border":"#eed46b","--bc-color-seat-tight-ink":"#7a5d00","--bc-color-seat-room-bg":"#eef8d7","--bc-color-seat-room-border":"#bfdc7d","--bc-color-seat-room-ink":"#4d6b00","--bc-color-seat-open-bg":"#e8f5e9","--bc-color-seat-open-border":"#b9ddbc","--bc-color-seat-open-ink":"#1b5e20","--bc-color-seat-warn-row-text":"#8a2e00","--bc-color-seat-warn-row-border":"#d99a66","--bc-color-seat-error-text":"#7a123f","--bc-color-seat-muted-text":"#5c4c56","--bc-color-trend-zone-1":"rgba(220, 38, 38, 0.08)","--bc-color-trend-zone-2":"rgba(234, 88, 12, 0.08)","--bc-color-trend-zone-3":"rgba(202, 138, 4, 0.08)","--bc-color-trend-zone-4":"rgba(101, 163, 13, 0.10)","--bc-color-trend-zone-5":"rgba(22, 163, 74, 0.10)","--bc-color-trend-zone-1-solid":"rgba(220, 38, 38, 0.85)","--bc-color-trend-zone-2-solid":"rgba(234, 88, 12, 0.85)","--bc-color-trend-zone-3-solid":"rgba(202, 138, 4, 0.85)","--bc-color-trend-zone-4-solid":"rgba(101, 163, 13, 0.85)","--bc-color-trend-zone-5-solid":"rgba(22, 163, 74, 0.85)","--bc-color-trend-zone-6-solid":"rgba(4, 120, 87, 0.92)"}},fe={accentRgb:[252,165,207],accentFill:{"04":"0.06","05":"0.06","06":"0.06","08":"0.08",10:"0.10",12:"0.12",15:"0.16",18:"0.16",22:"0.22",24:"0.22",32:"0.30",45:"0.40"},accentBorder:{"08":"0.12",12:"0.12",14:"0.14",18:"0.18",22:"0.22",28:"0.30",32:"0.36",45:"0.45"},warnRoseRgb:[251,113,133],warnRoseFill:{12:"0.14",20:"0.22"},warnRoseBorder:{28:"0.30",32:"0.40"},inkFillRgb:[248,250,252],inkFill:{"04":"0.04","06":"0.06","08":"0.08","025":"0.05"},inkBorder12:"rgba(255, 255, 255, 0.14)",tokens:{"--bc-color-season-fall":"#e0895a","--bc-color-season-winter":"#7fb0e6","--bc-color-season-spring":"#ec86ac","--bc-color-season-summer":"#f0bd45","--bc-shadow-sheet":"-18px 0 40px -24px rgba(0, 0, 0, 0.8)","--bc-color-sentiment-pos-fg":"#4ade80","--bc-color-sentiment-neg-fg":"#fb7185","--bc-color-sentiment-mix-fg":"#eab308","--bc-color-sentiment-neu-fg":"#a3a3a3","--bc-color-accent":"#d8b4fe","--bc-color-accent-hover":"#c084fc","--bc-color-accent-pressed":"#c084fc","--bc-color-accent-on":"#1f1147","--bc-color-accent-soft":"#fbcfe8","--bc-color-accent-soft-hover":"#f9a8d4","--bc-color-accent-soft-on":"#500030","--bc-color-accent-surface-faint":"rgba(168, 85, 247, 0.08)","--bc-color-accent-surface-soft":"rgba(216, 180, 254, 0.18)","--bc-color-accent-surface-tint":"rgba(252, 165, 207, 0.08)","--bc-color-accent-surface-tile":"rgba(252, 165, 207, 0.14)","--bc-color-accent-surface-tile-2":"rgba(252, 165, 207, 0.10)","--bc-color-accent-surface-row":"rgba(17, 24, 39, 0.30)","--bc-color-accent-surface-row-border":"rgba(252, 165, 207, 0.14)","--bc-color-accent-mid-border":"rgba(252, 165, 207, 0.30)","--bc-color-warn-rose-text":"#fecdd3","--bc-color-warn-rose-text-deep":"#fecdd3","--bc-color-bg":"#262626","--bc-color-bg-app":"#171717","--bc-color-bg-muted":"#171717","--bc-color-bg-inset":"#262626","--bc-color-surface-hover":"#404040","--bc-color-surface-hover-strong":"#525252","--bc-color-surface-soft":"#262626","--bc-color-border":"#404040","--bc-color-border-strong":"#525252","--bc-color-border-divider":"#404040","--bc-color-surface-translucent-86":"rgba(17, 24, 39, 0.26)","--bc-color-surface-translucent-72":"rgba(17, 24, 39, 0.32)","--bc-color-surface-translucent-62":"rgba(17, 24, 39, 0.22)","--bc-color-surface-translucent-56":"rgba(17, 24, 39, 0.22)","--bc-color-surface-translucent-84":"rgba(17, 24, 39, 0.35)","--bc-color-surface-translucent-88":"transparent","--bc-color-surface-translucent-92":"rgba(17, 24, 39, 0.40)","--bc-color-surface-translucent-98":"rgba(31, 24, 29, 0.98)","--bc-color-surface-warm-grad-top":"rgba(31, 24, 29, 0.98)","--bc-color-text":"#fafafa","--bc-color-text-strong":"#f9fafb","--bc-color-text-soft":"#d1d5db","--bc-color-text-muted":"#a3a3a3","--bc-color-text-subtle":"#737373","--bc-color-text-mauve":"#d4b9c5","--bc-color-text-mauve-soft":"#d8c7d0","--bc-color-text-mauve-warm":"#f3e5ed","--bc-color-text-mauve-deep":"#fff6fb","--bc-color-text-mauve-panel":"#f5e7ee","--bc-color-text-mauve-pale":"rgba(255, 227, 238, 0.36)","--bc-color-text-mauve-cool":"#c4b5fd","--bc-color-text-mauve-axis":"#a3a3a3","--bc-color-text-mauve-axis-strong":"#a3a3a3","--bc-color-text-body-warm":"#e8d3dc","--bc-color-text-mauve-cool-alt":"#d8c7d0","--bc-color-text-on-tooltip":"#fafafa","--bc-color-text-on-histogram":"#fafafa","--bc-color-success":"#6ee7b7","--bc-color-success-bg":"rgba(16, 78, 53, 0.32)","--bc-color-success-bg-soft":"rgba(16, 78, 53, 0.32)","--bc-color-success-border":"rgba(110, 231, 183, 0.36)","--bc-color-success-text":"#d1fadf","--bc-color-success-deep":"#6ee7b7","--bc-color-success-distro-text":"#d1fadf","--bc-color-success-distro-bg":"rgba(16, 78, 53, 0.32)","--bc-color-warn":"#fef3c7","--bc-color-warn-bg":"rgba(120, 53, 15, 0.32)","--bc-color-warn-bg-soft":"rgba(120, 53, 15, 0.32)","--bc-color-warn-bg-page":"rgba(120, 53, 15, 0.32)","--bc-color-warn-border":"rgba(254, 223, 137, 0.36)","--bc-color-warn-border-page":"rgba(254, 223, 137, 0.36)","--bc-color-warn-text":"#fef3c7","--bc-color-warn-text-page":"#fef3c7","--bc-color-warn-text-discipline":"#fef3c7","--bc-color-danger":"#fda4af","--bc-color-danger-bg":"rgba(127, 29, 29, 0.32)","--bc-color-danger-bg-soft":"rgba(127, 29, 29, 0.32)","--bc-color-danger-bg-pill":"rgba(127, 29, 29, 0.32)","--bc-color-danger-border":"rgba(254, 205, 202, 0.36)","--bc-color-danger-text":"#fee4e2","--bc-color-danger-text-pill":"#fda4af","--bc-color-danger-deep":"#fda4af","--bc-color-danger-rose":"#fda4af","--bc-color-info-bg":"rgba(168, 85, 247, 0.14)","--bc-color-info-border":"rgba(216, 180, 254, 0.32)","--bc-color-info-text":"#d8b4fe","--bc-color-info-text-deep":"#c4b5fd","--bc-color-highlight":"rgba(254, 240, 138, 0.85)","--bc-color-highlight-text":"#1f1147","--bc-color-highlight-mark":"rgba(254, 240, 138, 0.35)","--bc-color-star-base":"rgba(255, 227, 238, 0.36)","--bc-color-star-fill":"#fbbf24","--bc-color-hours-grad-start":"#d8b4fe","--bc-color-hours-grad-end":"#f9a8d4","--bc-color-chart-trend-axis":"#525252","--bc-color-chart-trend-text":"#a3a3a3","--bc-color-chart-trend-text-strong":"#a3a3a3","--bc-color-chart-axis-cool":"#a3a3a3","--bc-color-ink":"#d8b4fe","--bc-color-ink-deep":"#c084fc","--bc-color-ink-text":"#fafafa","--bc-color-ink-text-on-light":"#1f1147","--bc-color-ink-instructor-pill-bg":"rgba(255, 255, 255, 0.08)","--bc-shadow-elev-1":"0 1px 2px rgba(0, 0, 0, 0.4)","--bc-shadow-elev-2":"0 2px 8px rgba(0, 0, 0, 0.4)","--bc-shadow-card-soft":"0 -1px 2px rgba(0, 0, 0, 0.4)","--bc-shadow-button":"0 2px 6px rgba(0, 0, 0, 0.4)","--bc-shadow-button-hover":"0 3px 8px rgba(0, 0, 0, 0.5)","--bc-shadow-add-cta":"0 2px 6px rgba(216, 180, 254, 0.3)","--bc-shadow-modal":"0 1px 2px rgba(0, 0, 0, 0.4), 0 30px 60px -10px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.04)","--bc-shadow-modal-status":"0 1px 2px rgba(0, 0, 0, 0.4)","--bc-shadow-auth-card":"0 28px 60px rgba(0, 0, 0, 0.6)","--bc-shadow-side-panel":"0 10px 28px rgba(0, 0, 0, 0.22)","--bc-shadow-tooltip":"0 8px 24px rgba(0, 0, 0, 0.45)","--bc-shadow-kpi-active-ring":"0 0 0 3px rgba(216, 180, 254, 0.18)","--bc-shadow-toggle-knob":"0 1px 3px rgba(0, 0, 0, 0.45)","--bc-shadow-input-focus-ring":"0 0 0 3px rgba(216, 180, 254, 0.24)","--bc-shadow-input-focus-inner":"inset 0 1px 2px rgba(0, 0, 0, 0.3)","--bc-color-overlay-modal":"rgba(0, 0, 0, 0.55)","--bc-color-overlay-auth":"rgba(0, 0, 0, 0.6)","--bc-color-overlay-on-light":"rgba(255, 255, 255, 0.08)","--bc-color-panel-grad-top":"rgba(31, 24, 29, 0.98)","--bc-color-panel-grad-bottom":"rgba(23, 18, 22, 0.98)","--bc-color-card-outline":"rgba(248, 250, 252, 0.7)","--bc-color-card-divider-soft":"rgba(255, 255, 255, 0.14)","--bc-color-heatmap-rating-rgb":"216, 180, 254","--bc-color-heatmap-hours-rgb":"252, 165, 207","--bc-color-cart-bg":"#404040","--bc-color-cart-bg-hover":"#525252","--bc-color-cart-border":"#525252","--bc-color-cart-border-hover":"#737373","--bc-color-cart-text":"#fafafa","--bc-color-cart-success-bg":"#047857","--bc-color-cart-success-border":"#10b981","--bc-color-cart-success-text":"#ecfdf5","--bc-color-cart-error-bg":"#b91c1c","--bc-color-cart-error-border":"#ef4444","--bc-color-cart-error-text":"#fef2f2","--bc-color-cart-loading-bg":"#525252","--bc-color-cart-loading-border":"#737373","--bc-color-cart-loading-text":"#f3f4f6","--bc-color-comment-highlight-light":"rgba(250, 204, 21, 0.24)","--bc-color-disabled-bg":"#525252","--bc-color-gate-warn-bg":"rgba(120, 53, 15, 0.32)","--bc-color-gate-warn-border":"rgba(254, 223, 137, 0.36)","--bc-color-gate-warn-text":"#fef3c7","--bc-color-gate-lock-bg":"rgba(168, 85, 247, 0.14)","--bc-color-gate-lock-border":"rgba(216, 180, 254, 0.32)","--bc-color-gate-lock-text":"#d8b4fe","--bc-color-gate-ok-bg":"rgba(16, 78, 53, 0.32)","--bc-color-gate-ok-border":"rgba(110, 231, 183, 0.36)","--bc-color-gate-ok-text":"#d1fadf","--bc-color-trend-zone-1":"rgba(248, 113, 113, 0.16)","--bc-color-trend-zone-2":"rgba(251, 146, 60, 0.16)","--bc-color-trend-zone-3":"rgba(250, 204, 21, 0.16)","--bc-color-trend-zone-4":"rgba(132, 204, 22, 0.18)","--bc-color-trend-zone-5":"rgba(74, 222, 128, 0.18)","--bc-color-trend-zone-1-solid":"rgba(248, 113, 113, 0.90)","--bc-color-trend-zone-2-solid":"rgba(251, 146, 60, 0.90)","--bc-color-trend-zone-3-solid":"rgba(250, 204, 21, 0.90)","--bc-color-trend-zone-4-solid":"rgba(132, 204, 22, 0.90)","--bc-color-trend-zone-5-solid":"rgba(74, 222, 128, 0.90)","--bc-color-trend-zone-6-solid":"rgba(16, 185, 129, 0.95)"}},mo={accentRgb:[208,95,120],accentFill:{"04":"0.05","05":"0.06","06":"0.07","08":"0.10",10:"0.12",12:"0.14",15:"0.18",18:"0.22",22:"0.26",24:"0.28",32:"0.36",45:"0.50"},accentBorder:{"08":"0.14",12:"0.20",14:"0.22",18:"0.28",22:"0.32",28:"0.40",32:"0.45",45:"0.55"},warnRoseRgb:[190,24,93],warnRoseFill:{12:"0.12",20:"0.20"},warnRoseBorder:{28:"0.28",32:"0.32"},inkFillRgb:[42,42,46],inkFill:{"04":"0.04","06":"0.06","08":"0.08","025":"0.025"},inkBorder12:"rgba(42, 42, 46, 0.12)",tokens:{"--bc-color-accent":"#d05f78","--bc-color-accent-hover":"#b54e63","--bc-color-accent-pressed":"#99425a","--bc-color-accent-on":"#fffaf3","--bc-color-accent-soft":"#a06a0c","--bc-color-accent-soft-hover":"#815509","--bc-color-accent-soft-on":"#fffaf3","--bc-color-accent-surface-faint":"#fffaf3","--bc-color-accent-surface-soft":"#ece4d6","--bc-color-accent-surface-tint":"#f1eadd","--bc-color-accent-surface-tile":"#ece4d6","--bc-color-accent-surface-tile-2":"#efe8db","--bc-color-accent-surface-row":"#f4ede0","--bc-color-accent-surface-row-border":"#d8cdba","--bc-color-accent-mid-border":"#b8ad97","--bc-color-warn-rose-text":"#9f1239","--bc-color-warn-rose-text-deep":"#881337","--bc-color-paper":"#4e2a84","--bc-color-paper-deep":"#3a1f63","--bc-color-paper-soft":"#f3eef9","--bc-color-bg":"#fdfbf6","--bc-color-bg-app":"#f6ecc0","--bc-color-bg-muted":"#f5f1ea","--bc-color-bg-inset":"#f3ebde","--bc-color-surface-hover":"#f0e9dc","--bc-color-surface-hover-strong":"#e7e0d0","--bc-color-surface-soft":"#faf6ef","--bc-color-border":"#d9cab4","--bc-color-border-strong":"#c8c0a4","--bc-color-border-divider":"#e3d6c4","--bc-color-surface-translucent-86":"rgba(255, 250, 243, 0.86)","--bc-color-surface-translucent-72":"rgba(255, 250, 243, 0.72)","--bc-color-surface-translucent-62":"rgba(255, 250, 243, 0.62)","--bc-color-surface-translucent-56":"rgba(255, 250, 243, 0.56)","--bc-color-surface-translucent-84":"rgba(255, 250, 243, 0.84)","--bc-color-surface-translucent-88":"rgba(255, 250, 243, 0.88)","--bc-color-surface-translucent-92":"rgba(255, 250, 243, 0.92)","--bc-color-surface-translucent-98":"rgba(255, 250, 243, 0.98)","--bc-color-surface-warm-grad-top":"rgba(255, 250, 243, 0.98)","--bc-color-text":"#2a2a2e","--bc-color-text-strong":"#1d1d20","--bc-color-text-soft":"#4a4d52","--bc-color-text-muted":"#7d8088","--bc-color-text-subtle":"#a09a86","--bc-color-text-mauve":"#6b5a55","--bc-color-text-mauve-soft":"#5c4d49","--bc-color-text-mauve-warm":"#4a3d39","--bc-color-text-mauve-deep":"#2a2a2e","--bc-color-text-mauve-panel":"#3a3330","--bc-color-text-mauve-pale":"#c8c0a4","--bc-color-text-mauve-cool":"#8a6f5e","--bc-color-text-mauve-axis":"#9b9080","--bc-color-text-mauve-axis-strong":"#6b5a55","--bc-color-text-body-warm":"#4a3d39","--bc-color-text-mauve-cool-alt":"#6b5a55","--bc-color-text-on-tooltip":"#fffaf3","--bc-color-text-on-histogram":"#2a2a2e","--bc-color-success":"#2a7a4a","--bc-color-success-bg":"#e3f2d9","--bc-color-success-bg-soft":"#effae0","--bc-color-success-border":"#b8d59a","--bc-color-success-text":"#1f5a36","--bc-color-success-deep":"#2a7a4a","--bc-color-success-distro-text":"#1f5a36","--bc-color-success-distro-bg":"#effae0","--bc-color-warn":"#b07a18","--bc-color-warn-bg":"#f5e8c4","--bc-color-warn-bg-soft":"#fbf6e3","--bc-color-warn-bg-page":"#fbf6e3","--bc-color-warn-border":"#e2d2a4","--bc-color-warn-border-page":"#d4a373","--bc-color-warn-text":"#7c5a14","--bc-color-warn-text-page":"#6b4d11","--bc-color-warn-text-discipline":"#8a6512","--bc-color-danger":"#b54e63","--bc-color-danger-bg":"#fbe1e6","--bc-color-danger-bg-soft":"#fdeef1","--bc-color-danger-bg-pill":"#fbe1e6","--bc-color-danger-border":"#f3b9c5","--bc-color-danger-text":"#8a3a4a","--bc-color-danger-text-pill":"#99425a","--bc-color-danger-deep":"#8a3a4a","--bc-color-danger-rose":"#9f1239","--bc-color-info-bg":"#e8e3f0","--bc-color-info-border":"#c4b8d6","--bc-color-info-text":"#2d2347","--bc-color-info-text-deep":"#3d3060","--bc-color-highlight":"#f5e8c4","--bc-color-highlight-text":"#5b4451","--bc-color-highlight-mark":"rgba(245, 200, 66, 0.45)","--bc-color-star-base":"#d9cab4","--bc-color-star-fill":"#d97706","--bc-color-hours-grad-start":"#d05f78","--bc-color-hours-grad-end":"#b08512","--bc-color-chart-trend-axis":"#ead9aa","--bc-color-chart-trend-text":"#9b9080","--bc-color-chart-trend-text-strong":"#6b5a55","--bc-color-chart-axis-cool":"#6b5a55","--bc-color-ink":"#2a2a2e","--bc-color-ink-deep":"#1d1d20","--bc-color-ink-text":"#2a2a2e","--bc-color-ink-text-on-light":"#fffaf3","--bc-color-ink-instructor-pill-bg":"rgba(42, 42, 46, 0.06)","--bc-shadow-elev-1":"0 1px 2px rgba(42, 42, 46, 0.08)","--bc-shadow-elev-2":"0 2px 8px rgba(42, 42, 46, 0.10)","--bc-shadow-card-soft":"0 -1px 2px rgba(42, 42, 46, 0.06)","--bc-shadow-button":"0 2px 6px rgba(42, 42, 46, 0.18)","--bc-shadow-button-hover":"0 3px 8px rgba(42, 42, 46, 0.22)","--bc-shadow-add-cta":"2px 2px 0 #d05f78","--bc-shadow-modal":"0 1px 2px rgba(42, 42, 46, 0.08), 0 30px 60px -10px rgba(42, 42, 46, 0.35), 0 0 0 1px rgba(42, 42, 46, 0.06)","--bc-shadow-modal-status":"0 1px 2px rgba(42, 42, 46, 0.06)","--bc-shadow-auth-card":"0 28px 60px rgba(42, 42, 46, 0.32)","--bc-shadow-side-panel":"0 10px 28px rgba(42, 42, 46, 0.10)","--bc-shadow-tooltip":"0 8px 24px rgba(42, 42, 46, 0.22)","--bc-shadow-kpi-active-ring":"0 0 0 3px rgba(208, 95, 120, 0.14)","--bc-shadow-toggle-knob":"0 1px 3px rgba(42, 42, 46, 0.32)","--bc-shadow-input-focus-ring":"0 0 0 3px rgba(208, 95, 120, 0.24)","--bc-shadow-input-focus-inner":"inset 0 1px 2px rgba(42, 42, 46, 0.06)","--bc-color-overlay-modal":"rgba(42, 42, 46, 0.55)","--bc-color-overlay-auth":"rgba(42, 42, 46, 0.6)","--bc-color-overlay-on-light":"rgba(42, 42, 46, 0.10)","--bc-color-panel-grad-top":"rgba(255, 250, 243, 0.98)","--bc-color-panel-grad-bottom":"rgba(252, 245, 230, 0.98)","--bc-color-card-outline":"rgba(42, 42, 46, 0.7)","--bc-color-card-divider-soft":"rgba(42, 42, 46, 0.12)","--bc-color-cart-bg":"#2a2a2e","--bc-color-cart-bg-hover":"#1d1d20","--bc-color-cart-border":"rgba(42, 42, 46, 0.45)","--bc-color-cart-border-hover":"rgba(42, 42, 46, 0.7)","--bc-color-cart-text":"#fffaf3","--bc-color-cart-success-bg":"#2a7a4a","--bc-color-cart-success-border":"rgba(42, 122, 74, 0.65)","--bc-color-cart-success-text":"#effae0","--bc-color-cart-error-bg":"#b54e63","--bc-color-cart-error-border":"rgba(181, 78, 99, 0.7)","--bc-color-cart-error-text":"#fdeef1","--bc-color-cart-loading-bg":"#6b5a55","--bc-color-cart-loading-border":"rgba(107, 90, 85, 0.65)","--bc-color-cart-loading-text":"#f7f1ea","--bc-color-comment-highlight-light":"rgba(245, 200, 66, 0.22)","--bc-color-comments-card-bg":"#eceae4","--bc-color-heatmap-rating-rgb":"42, 42, 46","--bc-color-heatmap-hours-rgb":"208, 95, 120","--bc-color-disabled-bg":"#d9cab4","--bc-color-gate-warn-bg":"#fdf3c4","--bc-color-gate-warn-border":"#d4a373","--bc-color-gate-warn-text":"#6b4d11","--bc-color-gate-lock-bg":"#e8e3f0","--bc-color-gate-lock-border":"#c4b8d6","--bc-color-gate-lock-text":"#2d2347","--bc-color-gate-ok-bg":"#effae0","--bc-color-gate-ok-border":"#b8d59a","--bc-color-gate-ok-text":"#1f5a36","--bc-color-seat-full-bg":"#fbe1e6","--bc-color-seat-full-border":"#f3b9c5","--bc-color-seat-full-ink":"#8a3a4a","--bc-color-seat-waitlist-bg":"#fbe89a","--bc-color-seat-waitlist-border":"#d4a373","--bc-color-seat-waitlist-ink":"#8a4b00","--bc-color-seat-info-bg":"#e8e3f0","--bc-color-seat-info-border":"#c4b8d6","--bc-color-seat-info-ink":"#3d3060","--bc-color-seat-warn-bg":"#fdf3c4","--bc-color-seat-warn-border":"#d4a373","--bc-color-seat-warn-ink":"#6b4d11","--bc-color-seat-tight-bg":"#fdf3c4","--bc-color-seat-tight-border":"#ead9aa","--bc-color-seat-tight-ink":"#7c5a14","--bc-color-seat-room-bg":"#effae0","--bc-color-seat-room-border":"#b8d59a","--bc-color-seat-room-ink":"#1f5a36","--bc-color-seat-open-bg":"#effae0","--bc-color-seat-open-border":"#b8d59a","--bc-color-seat-open-ink":"#1f5a36","--bc-color-seat-warn-row-text":"#6b4d11","--bc-color-seat-warn-row-border":"#d4a373","--bc-color-seat-error-text":"#8a3a4a","--bc-color-seat-muted-text":"#6b5a55","--bc-color-trend-zone-1":"rgba(220, 38, 38, 0.08)","--bc-color-trend-zone-2":"rgba(234, 88, 12, 0.08)","--bc-color-trend-zone-3":"rgba(202, 138, 4, 0.08)","--bc-color-trend-zone-4":"rgba(101, 163, 13, 0.10)","--bc-color-trend-zone-5":"rgba(22, 163, 74, 0.10)","--bc-color-trend-zone-1-solid":"rgba(220, 38, 38, 0.85)","--bc-color-trend-zone-2-solid":"rgba(234, 88, 12, 0.85)","--bc-color-trend-zone-3-solid":"rgba(202, 138, 4, 0.85)","--bc-color-trend-zone-4-solid":"rgba(101, 163, 13, 0.85)","--bc-color-trend-zone-5-solid":"rgba(22, 163, 74, 0.85)","--bc-color-trend-zone-6-solid":"rgba(4, 120, 87, 0.92)","--bc-font-display":'"Special Elite", "Courier Prime", ui-monospace, SFMono-Regular, Menlo, monospace',"--bc-font-hand":'"Caveat", "Patrick Hand", ui-rounded, "Comic Sans MS", cursive',"--bc-fw-display":"var(--bc-fw-regular)"}},Io={accentRgb:[245,163,180],accentFill:{"04":"0.06","05":"0.07","06":"0.08","08":"0.10",10:"0.12",12:"0.14",15:"0.18",18:"0.20",22:"0.24",24:"0.26",32:"0.32",45:"0.42"},accentBorder:{"08":"0.14",12:"0.16",14:"0.18",18:"0.22",22:"0.26",28:"0.32",32:"0.40",45:"0.50"},warnRoseRgb:[251,113,133],warnRoseFill:{12:"0.16",20:"0.22"},warnRoseBorder:{28:"0.30",32:"0.40"},inkFillRgb:[255,250,243],inkFill:{"04":"0.05","06":"0.07","08":"0.10","025":"0.04"},inkBorder12:"rgba(255, 250, 243, 0.14)",tokens:{"--bc-color-season-fall":"#e0895a","--bc-color-season-winter":"#7fb0e6","--bc-color-season-spring":"#ec86ac","--bc-color-season-summer":"#f0bd45","--bc-shadow-sheet":"-18px 0 40px -24px rgba(0, 0, 0, 0.8)","--bc-color-sentiment-pos-fg":"#86c98a","--bc-color-sentiment-neg-fg":"#f5a3b4","--bc-color-sentiment-mix-fg":"#e3b341","--bc-color-sentiment-neu-fg":"#b3a890","--bc-color-accent":"#f5a3b4","--bc-color-accent-hover":"#f7b8c5","--bc-color-accent-pressed":"#e88fa3","--bc-color-accent-on":"#2a1d22","--bc-color-accent-soft":"#f5c842","--bc-color-accent-soft-hover":"#ffd864","--bc-color-accent-soft-on":"#2a1d22","--bc-color-accent-surface-faint":"rgba(245, 163, 180, 0.08)","--bc-color-accent-surface-soft":"rgba(245, 200, 66, 0.16)","--bc-color-accent-surface-tint":"rgba(245, 163, 180, 0.10)","--bc-color-accent-surface-tile":"rgba(245, 163, 180, 0.14)","--bc-color-accent-surface-tile-2":"rgba(245, 163, 180, 0.10)","--bc-color-accent-surface-row":"rgba(43, 37, 28, 0.55)","--bc-color-accent-surface-row-border":"rgba(245, 163, 180, 0.16)","--bc-color-accent-mid-border":"rgba(245, 163, 180, 0.32)","--bc-color-warn-rose-text":"#fecdd3","--bc-color-warn-rose-text-deep":"#fecdd3","--bc-color-bg":"#2b251c","--bc-color-bg-app":"#211c14","--bc-color-bg-muted":"#1d1812","--bc-color-bg-inset":"#2b251c","--bc-color-surface-hover":"#3a3225","--bc-color-surface-hover-strong":"#4a3f30","--bc-color-surface-soft":"#2b251c","--bc-color-border":"#4a3f30","--bc-color-border-strong":"#5c4f3c","--bc-color-border-divider":"#4a3f30","--bc-color-surface-translucent-86":"rgba(33, 28, 20, 0.86)","--bc-color-surface-translucent-72":"rgba(33, 28, 20, 0.72)","--bc-color-surface-translucent-62":"rgba(33, 28, 20, 0.62)","--bc-color-surface-translucent-56":"rgba(33, 28, 20, 0.56)","--bc-color-surface-translucent-84":"rgba(33, 28, 20, 0.84)","--bc-color-surface-translucent-88":"rgba(33, 28, 20, 0.88)","--bc-color-surface-translucent-92":"rgba(33, 28, 20, 0.92)","--bc-color-surface-translucent-98":"rgba(33, 28, 20, 0.98)","--bc-color-surface-warm-grad-top":"rgba(43, 37, 28, 0.98)","--bc-color-text":"#f6ecc0","--bc-color-text-strong":"#fffaf3","--bc-color-text-soft":"#e3d6b8","--bc-color-text-muted":"#b3a890","--bc-color-text-subtle":"#8a8068","--bc-color-text-mauve":"#d8c8b0","--bc-color-text-mauve-soft":"#dcc9b6","--bc-color-text-mauve-warm":"#f3e3c8","--bc-color-text-mauve-deep":"#fffaf3","--bc-color-text-mauve-panel":"#f3e3c8","--bc-color-text-mauve-pale":"rgba(246, 236, 192, 0.40)","--bc-color-text-mauve-cool":"#f5a3b4","--bc-color-text-mauve-axis":"#b3a890","--bc-color-text-mauve-axis-strong":"#d8c8b0","--bc-color-text-body-warm":"#f3e3c8","--bc-color-text-mauve-cool-alt":"#dcc9b6","--bc-color-text-on-tooltip":"#fffaf3","--bc-color-text-on-histogram":"#fffaf3","--bc-color-success":"#9be3a8","--bc-color-success-bg":"rgba(31, 90, 54, 0.40)","--bc-color-success-bg-soft":"rgba(31, 90, 54, 0.32)","--bc-color-success-border":"rgba(155, 227, 168, 0.40)","--bc-color-success-text":"#d5f3da","--bc-color-success-deep":"#9be3a8","--bc-color-success-distro-text":"#d5f3da","--bc-color-success-distro-bg":"rgba(31, 90, 54, 0.40)","--bc-color-warn":"#f5c842","--bc-color-warn-bg":"rgba(124, 90, 20, 0.42)","--bc-color-warn-bg-soft":"rgba(124, 90, 20, 0.32)","--bc-color-warn-bg-page":"rgba(124, 90, 20, 0.32)","--bc-color-warn-border":"rgba(245, 200, 66, 0.40)","--bc-color-warn-border-page":"rgba(245, 200, 66, 0.40)","--bc-color-warn-text":"#fbe89a","--bc-color-warn-text-page":"#fbe89a","--bc-color-warn-text-discipline":"#fbe89a","--bc-color-danger":"#f5a3b4","--bc-color-danger-bg":"rgba(138, 58, 74, 0.40)","--bc-color-danger-bg-soft":"rgba(138, 58, 74, 0.32)","--bc-color-danger-bg-pill":"rgba(138, 58, 74, 0.40)","--bc-color-danger-border":"rgba(245, 163, 180, 0.40)","--bc-color-danger-text":"#fbe1e6","--bc-color-danger-text-pill":"#f5a3b4","--bc-color-danger-deep":"#f5a3b4","--bc-color-danger-rose":"#f5a3b4","--bc-color-info-bg":"rgba(196, 184, 214, 0.16)","--bc-color-info-border":"rgba(196, 184, 214, 0.32)","--bc-color-info-text":"#d6cae8","--bc-color-info-text-deep":"#b9a8da","--bc-color-highlight":"rgba(245, 200, 66, 0.85)","--bc-color-highlight-text":"#2a1d10","--bc-color-highlight-mark":"rgba(245, 200, 66, 0.30)","--bc-color-star-base":"rgba(246, 236, 192, 0.32)","--bc-color-star-fill":"#f5c842","--bc-color-hours-grad-start":"#f5a3b4","--bc-color-hours-grad-end":"#f5c842","--bc-color-chart-trend-axis":"#5c4f3c","--bc-color-chart-trend-text":"#b3a890","--bc-color-chart-trend-text-strong":"#d8c8b0","--bc-color-chart-axis-cool":"#b3a890","--bc-color-ink":"#f5a3b4","--bc-color-ink-deep":"#f7b8c5","--bc-color-ink-text":"#fffaf3","--bc-color-ink-text-on-light":"#2a1d22","--bc-color-ink-instructor-pill-bg":"rgba(255, 250, 243, 0.08)","--bc-shadow-elev-1":"0 1px 2px rgba(0, 0, 0, 0.45)","--bc-shadow-elev-2":"0 2px 8px rgba(0, 0, 0, 0.45)","--bc-shadow-card-soft":"0 -1px 2px rgba(0, 0, 0, 0.45)","--bc-shadow-button":"2px 2px 0 rgba(245, 163, 180, 0.85)","--bc-shadow-button-hover":"3px 3px 0 rgba(245, 163, 180, 0.95)","--bc-shadow-add-cta":"2px 2px 0 #f5a3b4","--bc-shadow-modal":"0 1px 2px rgba(0, 0, 0, 0.45), 0 30px 60px -10px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 250, 243, 0.05)","--bc-shadow-modal-status":"0 1px 2px rgba(0, 0, 0, 0.45)","--bc-shadow-auth-card":"0 28px 60px rgba(0, 0, 0, 0.6)","--bc-shadow-side-panel":"0 10px 28px rgba(0, 0, 0, 0.32)","--bc-shadow-tooltip":"0 8px 24px rgba(0, 0, 0, 0.50)","--bc-shadow-kpi-active-ring":"0 0 0 3px rgba(245, 163, 180, 0.20)","--bc-shadow-toggle-knob":"0 1px 3px rgba(0, 0, 0, 0.50)","--bc-shadow-input-focus-ring":"0 0 0 3px rgba(245, 163, 180, 0.30)","--bc-shadow-input-focus-inner":"inset 0 1px 2px rgba(0, 0, 0, 0.32)","--bc-color-overlay-modal":"rgba(0, 0, 0, 0.55)","--bc-color-overlay-auth":"rgba(0, 0, 0, 0.6)","--bc-color-overlay-on-light":"rgba(255, 250, 243, 0.08)","--bc-color-panel-grad-top":"rgba(43, 37, 28, 0.98)","--bc-color-panel-grad-bottom":"rgba(33, 28, 20, 0.98)","--bc-color-card-outline":"rgba(255, 250, 243, 0.7)","--bc-color-card-divider-soft":"rgba(255, 250, 243, 0.14)","--bc-color-heatmap-rating-rgb":"246, 236, 192","--bc-color-heatmap-hours-rgb":"245, 163, 180","--bc-color-on-saturated":"#2a1d22","--bc-color-cart-bg":"#4a3f30","--bc-color-cart-bg-hover":"#5c4f3c","--bc-color-cart-border":"#5c4f3c","--bc-color-cart-border-hover":"#7d6e58","--bc-color-cart-text":"#fffaf3","--bc-color-cart-success-bg":"#2a7a4a","--bc-color-cart-success-border":"#9be3a8","--bc-color-cart-success-text":"#d5f3da","--bc-color-cart-error-bg":"#8a3a4a","--bc-color-cart-error-border":"#f5a3b4","--bc-color-cart-error-text":"#fbe1e6","--bc-color-cart-loading-bg":"#5c4f3c","--bc-color-cart-loading-border":"#7d6e58","--bc-color-cart-loading-text":"#f3e3c8","--bc-color-comment-highlight-light":"rgba(245, 200, 66, 0.28)","--bc-color-comments-card-bg":"#3a3225","--bc-color-disabled-bg":"#5c4f3c","--bc-color-gate-warn-bg":"rgba(124, 90, 20, 0.38)","--bc-color-gate-warn-border":"rgba(245, 200, 66, 0.40)","--bc-color-gate-warn-text":"#fbe89a","--bc-color-gate-lock-bg":"rgba(196, 184, 214, 0.16)","--bc-color-gate-lock-border":"rgba(196, 184, 214, 0.32)","--bc-color-gate-lock-text":"#d6cae8","--bc-color-gate-ok-bg":"rgba(31, 90, 54, 0.38)","--bc-color-gate-ok-border":"rgba(155, 227, 168, 0.40)","--bc-color-gate-ok-text":"#d5f3da","--bc-color-trend-zone-1":"rgba(248, 113, 113, 0.16)","--bc-color-trend-zone-2":"rgba(251, 146, 60, 0.16)","--bc-color-trend-zone-3":"rgba(250, 204, 21, 0.16)","--bc-color-trend-zone-4":"rgba(132, 204, 22, 0.18)","--bc-color-trend-zone-5":"rgba(74, 222, 128, 0.18)","--bc-color-trend-zone-1-solid":"rgba(248, 113, 113, 0.90)","--bc-color-trend-zone-2-solid":"rgba(251, 146, 60, 0.90)","--bc-color-trend-zone-3-solid":"rgba(250, 204, 21, 0.90)","--bc-color-trend-zone-4-solid":"rgba(132, 204, 22, 0.90)","--bc-color-trend-zone-5-solid":"rgba(74, 222, 128, 0.90)","--bc-color-trend-zone-6-solid":"rgba(16, 185, 129, 0.95)"}},Ge={"--bc-color-cta":"#f5c842","--bc-color-cta-hover":"#eebb25","--bc-color-cta-on":"#201a02","--bc-color-cta-soft":"#f5c842","--bc-color-cta-soft-hover":"#eebb25","--bc-color-cta-soft-on":"#201a02","--bc-font-display":"var(--bc-font-body)","--bc-color-heatmap-hours-rgb":"222, 160, 16","--bc-color-hours-grad-start":"#f2bd1d","--bc-color-hours-grad-end":"#e0486b","--bc-shadow-kpi-active-ring":"0 0 0 3px rgba(245, 200, 66, 0.5)","--bc-shadow-input-focus-ring":"0 0 0 3px rgba(245, 200, 66, 0.55)"},ho={...pe,accentRgb:[23,23,26],inkFillRgb:[23,23,26],inkBorder12:"rgba(23, 23, 26, 0.12)",tokens:{...pe.tokens,...Ge,"--bc-color-chart":"#d6456a","--bc-color-chart-fill-45":"rgba(214, 69, 106, 0.45)","--bc-color-chart-fill-05":"rgba(214, 69, 106, 0.05)","--bc-color-heatmap-rating-rgb":"214, 69, 106","--bc-color-accent":"#17171a","--bc-color-accent-hover":"#2c2c31","--bc-color-accent-pressed":"#000000","--bc-color-accent-on":"#ffffff","--bc-color-accent-soft":"#17171a","--bc-color-accent-soft-hover":"#2c2c31","--bc-color-accent-soft-on":"#ffffff","--bc-color-accent-surface-faint":"#fcfcfb","--bc-color-accent-surface-soft":"#f3f3f1","--bc-color-accent-surface-tint":"#f8f7f5","--bc-color-accent-surface-tile":"#f4f3f0","--bc-color-accent-surface-tile-2":"#f1f0ec","--bc-color-accent-surface-row":"#faf9f7","--bc-color-accent-surface-row-border":"#ebe9e4","--bc-color-accent-mid-border":"#bfbdb6","--bc-color-bg-app":"#fbfaf7","--bc-color-bg-muted":"#fbfaf8","--bc-color-surface-hover":"#f6f5f2","--bc-color-surface-hover-strong":"#efeeea","--bc-color-surface-soft":"#fbfaf8","--bc-color-border":"#e7e5e0","--bc-color-border-strong":"#d3d0c8","--bc-color-border-divider":"#ebe9e4","--bc-color-surface-translucent-86":"rgba(252, 252, 251, 0.86)","--bc-color-surface-warm-grad-top":"rgba(252, 252, 251, 0.98)","--bc-color-panel-grad-top":"rgba(252, 252, 251, 0.98)","--bc-color-text":"#26262b","--bc-color-text-strong":"#17171a","--bc-color-text-soft":"#53545c","--bc-color-text-muted":"#74757d","--bc-color-text-subtle":"#a1a2a9","--bc-color-text-mauve":"#6b6b72","--bc-color-text-mauve-soft":"#62636a","--bc-color-text-mauve-warm":"#4c4d54","--bc-color-text-mauve-deep":"#17171a","--bc-color-text-mauve-panel":"#33343a","--bc-color-text-mauve-pale":"#c4c2bb","--bc-color-text-mauve-cool":"#85868e","--bc-color-text-mauve-axis":"#94959c","--bc-color-text-mauve-axis-strong":"#6b6b72","--bc-color-text-body-warm":"#3f4046","--bc-color-text-mauve-cool-alt":"#62636a","--bc-color-text-on-histogram":"#26262b","--bc-color-star-base":"#cfcbc0","--bc-color-chart-trend-axis":"#eeebe3","--bc-color-chart-trend-text":"#94959c","--bc-color-chart-trend-text-strong":"#6b6b72","--bc-color-ink":"#26262b","--bc-color-ink-deep":"#17171a","--bc-color-ink-text":"#26262b","--bc-color-sentiment-neu-fg":"#6b6b72","--bc-color-sentiment-neu-bg":"#f1f0ec","--bc-color-sentiment-all-dot":"#bfbdb6","--bc-color-disabled-bg":"#d6d3cb","--bc-color-seat-muted-text":"#53545c","--bc-shadow-add-cta":"0 2px 6px rgba(60, 45, 0, 0.2)","--bc-shadow-side-panel":"0 10px 28px rgba(30, 25, 10, 0.08)"}},To={...fe,accentRgb:[244,244,245],tokens:{...fe.tokens,...Ge,"--bc-color-chart":"#f5a3b4","--bc-color-chart-fill-45":"rgba(245, 163, 180, 0.45)","--bc-color-chart-fill-05":"rgba(245, 163, 180, 0.05)","--bc-color-heatmap-rating-rgb":"245, 163, 180","--bc-color-accent":"#f4f4f5","--bc-color-accent-hover":"#ffffff","--bc-color-accent-pressed":"#d4d4d8","--bc-color-accent-on":"#17171a","--bc-color-accent-soft":"#f4f4f5","--bc-color-accent-soft-hover":"#ffffff","--bc-color-accent-soft-on":"#17171a","--bc-color-accent-surface-faint":"#1f1f22","--bc-color-accent-surface-soft":"#2a2a2e","--bc-color-accent-surface-tint":"#26262a","--bc-color-accent-surface-tile":"#2c2c31","--bc-color-accent-surface-tile-2":"#303035","--bc-color-accent-surface-row":"#232326","--bc-color-accent-surface-row-border":"#3a3a40","--bc-color-accent-mid-border":"#52525b","--bc-color-text-mauve":"#d4d4d8","--bc-color-text-mauve-soft":"#c4c4cc","--bc-color-text-mauve-warm":"#e4e4e7","--bc-color-text-mauve-deep":"#fafafa","--bc-color-text-mauve-panel":"#e4e4e7","--bc-color-text-mauve-pale":"rgba(255, 255, 255, 0.3)","--bc-color-text-mauve-cool":"#a1a1aa","--bc-color-text-body-warm":"#e4e4e7","--bc-color-text-mauve-cool-alt":"#c4c4cc","--bc-color-sentiment-neu-fg":"#c4c4cc","--bc-color-sentiment-neu-bg":"#2c2c31","--bc-color-sentiment-all-dot":"#52525b"}};var Le="bc-design-system";function Ao(e){return chrome.runtime.getURL(`assets/fonts/${e}`)}function Re(e){if(document.getElementById(Le))return;let r=document.createElement("style");r.id=Le,r.textContent=`${xe(e??Ao)}
${ye()}`,(document.head??document.documentElement).appendChild(r)}function we(e){document.documentElement.setAttribute("data-bc-theme",e)}var D=/\b([A-Za-z][A-Za-z_]{1,})\s+(\d{3})(?:-([A-Za-z0-9]+))?\b/;var Ee=/^([A-Za-z][A-Za-z_]{1,})\s+(\d{3})(?:-([A-Za-z0-9]+))?$/,ke=/^\s*(\d{3})(?:-([A-Z0-9]+))?\s*$/,ee=/^\s*none[\s.]*$/i,De=/\b(freshman|sophomore|junior|senior|graduate|graduate[- ]level|first[- ]?year|second[- ]?year|advanced)\b(?:\s+(?:engineering|medill|kellogg|bienen|weinberg|mccormick|sesp|communication))?\s+(?:standing|status)\b/i,Be=/\b(freshman|sophomore|junior|senior)\s+or\s+(above|higher)\b/i,re=/^(?:reserved\s+for\s+)?(freshmen|sophomores|juniors|seniors|graduates|freshman|sophomore|junior|senior|graduate|advanced\s+students?)\s*(?:and\s+(freshmen|sophomores|juniors|seniors|graduates))?$/i,qe=/\b(\d)00\s*-?level\s+or\s+(?:above|higher)\b/i,Ue=/^\(\s*\d+\s*\)\s*/,Fe=/^(non[- ])?(medill|mccormick|kellogg|bienen|weinberg|sesp|communication|isp|mmss|kaplan|wcas|engineering|graduate|undergraduate|honors)(?:\s+[A-Za-z][\w-]*){0,4}\s+students?,?\s+([^;]+)$/i,Ye=/\b([A-D][+\-]?|P)\s*(?:or\s+(?:better|higher|above))\b/i,$e=/\bor\s+equivalent\b/i,je=/\b(consent|permission|approval)\s+of\s+(?:the\s+)?instructor\b|\binstructor\s+(consent|permission|approval)\b/i,Ve=/\b(consent|permission|approval)\s+of\s+(?:the\s+)?(?:[\w-]+\s+){0,3}(?:department|chair|director|coordinator|advisor|adviser|program)\b|\bdepartment(?:al)?\s+consent\b/i,ze=/\bconsent\s+of\s+(program\s+)?advise[rn]\b/i,Je=/\bfaculty\s+(permission|consent|approval)\b/i,We=/\bdepartment(?:al)?\s+(approval|permission)\b/i,Ze=/\bby\s+application(?:\s+only)?\b|\bapplication\s+required\b|\bsubmission\s+of\s+(?:a\s+)?petition\b|\bby\s+invitation\b|^invitation$/i,Qe=/\bplacement\s+(?:exam|test|score|results)\b|\bqualifying\s+score\b|\bdepartment(?:al)?\s+placement(?:\s+exam)?\b|\bplacement\s+by\s+exam\b|\bbased\s+on\s+(?:test\s+)?placement\b/i,oe=/\bAP\s+(?:exam|score|credit|(?:of\s+)?\d)\b/i,Ke=/^(?:(?:students?\s+)?(?:must\s+)?(?:be|is)\s+)?(?:an?\s+)?(?:([A-Z][\w&-]*(?:\s+[A-Z][\w&-]*){0,2})\s+)?(?:(graduate|grad)|(masters?|MS|PhD|MS\/PhD))\s+students?(?:\s+standing)?(?:\s+to\s+(?:enroll|register))?$/i,Xe=/\b(?:students?\s+(?:must\s+be\s+)?enrolled\s+in|enrollment\s+in|admission\s+to|admitted\s+to|reserved\s+(?:exclusively\s+)?for)\s+(?:the\s+)?(.+?)(?:\s+to\s+register|\.|$|,)/i,er=/\b(?:any\s+)?(\d)00\s*[-\s]*(?:or\s+(\d)00\s*[-\s]*)?level\b\s+(.+?)\s+(course|class)\b/i,rr=/^any\s+(\d)00\s*-?level\s+course\s+in\s+(.+?)$/i,or=/\b(one|two|three|four|1|2|3|4)\s+(\d)00\s*[-\s]*(?:or\s+(\d)00\s*[-\s]*)?level\b\s+(?:course|courses)\s+in\s+(.+?)(?:\.|$|,)/i,tr=/\b(?:(?:a|min(?:imum)?|at\s+least)\s+)?(\d(?:\.\d{1,2})?)\s*(?:cumulative\s+)?GPA\b|\bGPA\s+(?:of\s+)?(?:at\s+least\s+)?(\d(?:\.\d{1,2})?)\b/i,te=/\brecommended\b/i;var nr=/(?:must\s+be\s+taken|should\s+be\s+taken|taken|may\s+be\s+taken)\s+concurrently\s+with\s+([A-Z][A-Z_]+\s+\d{3}(?:-[A-Z0-9]+)?(?:\s*(?:,|\s+and|\s+or)\s+(?:[A-Z][A-Z_]+\s+)?\d{3}(?:-[A-Z0-9]+)?)*)/i,ar=/\bvary\b/i,sr={one:1,two:2,three:3,four:4,1:1,2:2,3:3,4:4},Me=/\b(\d)00\s*-?(?:\s*or\s+(\d)00\s*-?)?\s*level\s+((?:[A-Za-z][\w-]*)(?:\s+or\s+[A-Za-z][\w-]*){1,4})\s+(?:course|class)\b/gi,cr=/^equivalents?(?:\s+\w+){0,5}(?:\s*\([^()]*\))?\.?$/i,me=/^(above|higher)\.?$/i,Ie=/^instructor\.?$/i,ir=/^(senior|junior|sophomore|freshman|graduate(?:[- ]level)?|advanced|first[- ]?year|second[- ]?year)(?:\s+or\s+(senior|junior|sophomore|freshman|graduate|advanced|first[- ]?year|second[- ]?year))?\s+(?:standing|status)(?:\s+in\s+(?:the\s+)?(.+?))?\.?$/i,lr=/^grade\s+of\s+(?:at\s+least\s+)?([A-D][+\-]?)(?:\s+or\s+(?:better|higher|above))?\s+in\s+(.+)$/i,dr=/^(?:1|one)\s+course\s+(?:from|in)\s+(.+)$/i,ur=[/^(?:students?\s+must\s+have\s+)?(?:received|earned)\s+an?\s+(?:grade\s+of\s+)?([A-D][+\-]?)\s+or\s+(?:better|higher|above)\s+(?:in\s+)?(?:or\s+(?:be\s+)?(?:currently\s+)?enrolled\s+in\s+)?/i,/^(?:in\s+order\s+)?to\s+(?:register|enroll)(?:\s+(?:for|in)\s+this\s+(?:course|class))?,?\s+(?:you|students?)\s+must\s+have\s+(?:completed\s+|taken\s+)?/i,/^students\s+must\s+have\s+completed,?\s+with\s+a\s+([A-D][+\-]?)\s*or\s+better,?\s*/i,/^grades?\s+of\s+([A-D][+\-]?)\s*or\s+(?:better|higher|above)\s+in\s+(?:both\s+)?/i,/^([A-D][+\-]?)\s+or\s+(?:better|higher|above)\s+in\s+/i,/^students?\s+must\s+have\s+completed,?\s*/i,/^students?\s+(?:must|should)\s+have\s+/i,/^prerequisites?:\s*/i,/^pre-requisites?:\s*/i,/^prereqs?:\s*/i],ne=[/\s+(?:in\s+order\s+)?to\s+(?:successfully\s+)?register\s+for\s+(?:this|the)\s+(?:course|class)\.?$/i,/\s+(?:in\s+order\s+)?to\s+(?:successfully\s+)?enroll\s+(?:in|into)\s+(?:this|the)\s+(?:course|class)\.?$/i,/[\s.;]*\badd\s+(?:both|all)\b[^.]*\bcart\b.*$/i,/\.\s*may\s+not\s+receive\s+credit\s+for\s+both.*$/i,/\.\s*credit\s+not\s+given\s+for\s+both.*$/i,/\.\s*students?\s+who\s+have\s+taken.*$/i,/\.\s*should\s+not\s+take.*$/i,/\.\s*[^.]*may\s+be\s+repeated.*$/i,/\.\s*credit\s+(?:may\s+not|cannot|not\s+allowed)\s+(?:be\s+)?(?:earned|received|for\s+both).*$/i,/\bcredit\s+not\s+allowed\s+for\s+both.*$/i,/\bcredit\s+not\s+given\s+for\s+both.*$/i,/\.\s*prerequisites?:\s*.*$/i,/[\s.,;]*additional\s+prerequisites?\s+may\s+apply\.?$/i,/[\s.,;]*may\s+be\s+repeated.*$/i,/[\s.,;]*may\s+not\s+be\s+repeated.*$/i,/[\s.,;]+may\s+not\s+receive\s+credit\s+for\s+both.*$/i,/[\s.,;]+may\s+be\s+taken\s+with\s+instructor\s+approval\.?$/i,/[\s.,;]+carries\s+business\s+credit\.?$/i,/[\s.,;]+taught\s+with\s+[A-Z][A-Z_]+\s+\d{3}.*$/i,/\s+\d+\s+quarters?\s+before\s+registration\b/i,/\s+for\s+participants\s+in\s+the\s+[^.]*?\s+program(?:\s+only)?\.?$/i];function _o(e){let r=e.trim(),o=r.toLowerCase(),t=Ye.exec(r);return t&&/^[A-D][+\-]?\s*or\s+(?:better|higher|above)$/i.test(r)?{kind:"grade",minGrade:t[1].toUpperCase()}:/^or\s+equivalent$/.test(o)?{kind:"equivalent"}:o.includes("concurrent registration")&&(o.includes("acceptable")||o.includes("allowed"))?{kind:"concurrent",concurrent:"allowed"}:o.includes("may be taken concurrently")||o.includes("can be taken concurrently")?{kind:"concurrent",concurrent:"allowed"}:o.includes("taken concurrently")||o.includes("concurrent")&&o.includes("register")?{kind:"concurrent",concurrent:"required"}:null}function br(e){let r=[],o=[],t=0,n=e.length;for(;t<n;)if(e[t]==="("){let a=1,s=t+1;for(;s<n&&a>0;)e[s]==="("?a++:e[s]===")"&&a--,s++;if(a!==0){o.push(e[t]),t++;continue}let i=e.slice(t+1,s-1).trim(),c=_o(i);c!==null?(r.push(c),o.push(`\0${r.length-1}\0`)):o.push(e.slice(t,s)),t=s}else o.push(e[t]),t++;return[o.join(""),r]}function _(e,r){if(!e||typeof e!="object")return e;if(e.kind==="course"){let o={...e};return r.minGrade!==void 0&&(o.minGrade=r.minGrade),r.equivalentOk!==void 0&&(o.equivalentOk=r.equivalentOk),r.concurrent!==void 0&&(o.concurrent=r.concurrent),o}return e.kind==="any"||e.kind==="all"?{...e,of:e.of.map(o=>_(o,r)).filter(o=>o!==null)}:e}function he(e,r){if(r.length===0||e===null)return e;let o=e;for(let t of r)t.kind==="grade"?o=_(o,{minGrade:t.minGrade}):t.kind==="equivalent"?o=_(o,{equivalentOk:!0}):t.kind==="concurrent"&&(o=_(o,{concurrent:t.concurrent}));return o}function Sr(e,r){return!e||typeof e!="object"?e:{...e,...r}}function Te(e){if(e===null||typeof e!="object")return JSON.stringify(e);if(Array.isArray(e))return"["+e.map(Te).join(",")+"]";let r=e;return"{"+Object.keys(r).sort().map(t=>JSON.stringify(t)+":"+Te(r[t])).join(",")+"}"}function Cr(e){let r=new Set,o=[];for(let t of e){let n=Te(t);r.has(n)||(r.add(n),o.push(t))}return o}function A(e){let r=e.filter(n=>n!==null);if(r.length===0)return null;let o=[];for(let n of r)if(n.kind==="all")for(let a of n.of)o.push(a);else o.push(n);let t=Cr(o);return t.length===1?t[0]:Po({kind:"all",of:t})}function h(e){let r=e.filter(n=>n!==null);if(r.length===0)return null;let o=[];for(let n of r)if(n.kind==="any")for(let a of n.of)o.push(a);else o.push(n);let t=Cr(o);return t.length===1?t[0]:{kind:"any",of:t}}function gr(e){return A(e)}function N(e){if(!e||e.kind!=="any")return e;let r=[...e.of],o=r.some(n=>n.kind==="consent"),t=[];for(let n of r){if(n.kind==="topic"){let a=n.topic.trim();if(cr.test(a)){if(t.length>0){let s=_(t[t.length-1],{equivalentOk:!0});s&&(t[t.length-1]=s)}continue}if(me.test(a)){let s=t[t.length-1];s&&s.kind==="standing"&&(t[t.length-1]={...s,orAbove:!0});continue}if(Ie.test(a)&&o){t.push({kind:"consent",source:"instructor"});continue}}t.push(n)}return t.length===0?null:t.length===1?t[0]:{kind:"any",of:t}}function Po(e){if(!e||e.kind!=="all")return e;let r=[...e.of],o=r.some(n=>n.kind==="consent"),t=[];for(let n of r){if(n.kind==="topic"){let a=n.topic.trim();if(me.test(a)){let s=t[t.length-1];s&&s.kind==="standing"&&(t[t.length-1]={...s,orAbove:!0});continue}if(Ie.test(a)&&o){t.push({kind:"consent",source:"instructor"});continue}}t.push(n)}return t.length===0?null:t.length===1?t[0]:{kind:"all",of:t}}function O(e){return e.replace(/\s+/g," ").trim()}function pr(e){let r=null;e=e.replace(/^(?:REQ|Requirements?)\s*:\s*/i,"");for(let o of ur){let t=o.exec(e);if(t){e=e.slice(t[0].length);let n=t[1];n&&/^([A-D][+\-]?|P)$/i.test(n)&&(r=n.toUpperCase());break}}for(let o of ne)e=e.replace(o,"");return[e.trim(),r]}function fr(e){return e.replace(/\b((?:[A-Z][A-Z_]+\s+)?)(\d{3})-(\d)((?:,\s*\d)+)\b/g,(r,o,t,n,a)=>{let s=[n,...a.split(",").map(c=>c.trim()).filter(Boolean)],i=o??"";return s.map(c=>`${i}${t}-${c}`).join(", ")})}function Er(e){let r=e.split(/(,?\s+or\s+|,?\s+and\s+|,\s+|;\s+)/i),o=[],t=null;for(let n=0;n<r.length;n++){let a=r[n];if(n%2===1){o.push(a);continue}let s=a,i=D.exec(s);if(i){t=i[1],o.push(s);continue}if(/^\s*(\d{3})(?:-([A-Z0-9]+))?\b/.exec(s)&&t){o.push(`${t} `+s.replace(/^\s+/,""));continue}o.push(s)}return o.join("")}function Mr(e){let r=[];return Me.lastIndex=0,[e.replace(Me,(...t)=>{let n=t[1],a=t[2],s=t[3],i=[parseInt(n,10)*100];a&&i.push(parseInt(a,10)*100);let c=s.split(/\s+or\s+/i).map(u=>u.trim()).filter(Boolean),g={kind:"level-wildcard",levels:Array.from(new Set(i)).sort((u,M)=>u-M),subjects:c};return r.push(g),`LWMULTI${r.length-1}TOKEN`}),r]}function Ho(e){return e.replace(/[\s.,;]+$/g,"").replace(/^[\s.,;]+/g,"")}function mr(e){let r=e.toLowerCase().replace(/ /g,"-");return r=r.replace(/-level$/,""),r}var No=new Set(["first-year","second-year","sophomore","junior","senior","advanced","graduate","freshman"]);function J(e){return No.has(e)?e:null}function Ir(e){let r=ir.exec(e.trim());if(!r)return null;let t=[mr(r[1])];r[2]&&t.push(mr(r[2]));let n;if(r[3]){let s=r[3].trim();if(s=s.replace(/[,.]+$/g,""),/\b(consent|permission|approval)\b/i.test(s)||D.test(s))return null;let i=s.split(/\s+or\s+|\s+and\s+|,\s*/i).map(g=>g.trim()).filter(Boolean),c=i.map(g=>g.toLowerCase());i.length===1&&(c[0]==="major"||c[0]==="minor"||c[0]==="program")?n={type:c[0]}:n={type:"program",names:i}}let a=s=>{let i=J(s);if(!i)return null;let c={kind:"standing",level:i};return n&&(c.scope=n),c};return t.length===1?a(t[0]):h(t.map(a))}function ae(e,r){e=O(e);let o=e.split(/\s*,\s*(?:or\s+)?|\s+or\s+|\s+and\s+/i).map(a=>a.trim()).filter(Boolean);if(o.length===0)return null;let t=null,n=[];for(let a of o){let s=Ee.exec(a);if(s){t=s[1].toUpperCase(),n.push({kind:"course",subject:t,number:s[2],section:s[3]?s[3].toUpperCase():"0"});continue}if(s=ke.exec(a),s&&t){n.push({kind:"course",subject:t,number:s[1],section:s[2]?s[2].toUpperCase():"0"});continue}return null}return n.length===1?n[0]:r==="all"?A(n):h(n)}function W(e,r,o){if(e=Ho(O(e)),e=e.replace(Ue,"").trim(),e=e.replace(/^(?:or|and)(?:\s+|$)/i,"").trim(),!e)return null;let t=e.toLowerCase();if(ee.test(e))return{kind:"none"};let n=/^LWMULTI(\d+)TOKEN$/.exec(e);if(n){let d=parseInt(n[1],10);if(d>=0&&d<o.length)return o[d]}let a=re.exec(e);if(a){let d=E=>{let H=E.toLowerCase().trim();return H=H.replace(/\s+students?$/,""),H.replace(/s$/,"")},b=[d(a[1])];if(a[2]&&b.push(d(a[2])),b.length===1){let E=J(b[0]);if(E)return{kind:"standing",level:E}}else{let E=b.map(k=>J(k)).filter(k=>k!==null).map(k=>({kind:"standing",level:k})),H=h(E);if(H)return H}}let s=/^co-?requisites?:?\s+(.+)$/i.exec(e);if(s){let d=W(s[1],r,o);if(d!==null)return _(d,{concurrent:"required"})}let i=Ee.exec(e);if(i)return{kind:"course",subject:i[1].toUpperCase(),number:i[2],section:i[3]?i[3].toUpperCase():"0"};let c=lr.exec(e);if(c){let d=c[1].toUpperCase(),b=c[2].trim(),E=W(b,r,o);if(E&&(E.kind==="course"||E.kind==="any"||E.kind==="all"))return _(E,{minGrade:d})}let g=dr.exec(e);if(g){let d=g[1].trim().replace(/\.$/,""),b=ae(d,"any");if(b!==null)return b}if(D.test(e)){let d=ae(e,t.includes(" or ")?"any":"all");if(d!==null)return d;let b=D.exec(e);if(b){let E=e.toLowerCase();if(!E.includes("not required")&&!E.includes("do not take")&&!E.includes("not take"))return{kind:"course",subject:b[1].toUpperCase(),number:b[2],section:b[3]?b[3].toUpperCase():"0"}}}let u=De.exec(e);if(u){let d=u[1].toLowerCase().replace(/ /g,"-");d=d.replace(/-level$/,"");let b=J(d);if(b){let E={kind:"standing",level:b},H=e.slice(u.index+u[0].length),k=/^\s*in\s+(?:the\s+)?(.+?)(?:\.|$)/i.exec(H);if(k){let X=k[1].trim().replace(/[,.]+$/g,"").split(/\s+or\s+|\s+and\s+|,\s*/i).map(F=>F.trim()).filter(Boolean);if(X.length>0){let F=X.map(so=>so.toLowerCase());X.length===1&&(F[0]==="major"||F[0]==="minor"||F[0]==="program")?E.scope={type:F[0]}:E.scope={type:"program",names:X}}}else if(/\b(MMSS|ISP|kaplan|medill|kellogg|bienen)\b/.test(e)){let ge=/\b(MMSS|ISP|kaplan|medill|kellogg|bienen)\b/i.exec(e);ge&&(E.scope={type:"program",names:[ge[1]]})}return te.test(e)&&(E.recommended=!0),E}}let M=Be.exec(e);if(M){let d=J(M[1].toLowerCase());if(d)return{kind:"standing",level:d,orAbove:!0}}if(je.test(e))return{kind:"consent",source:"instructor"};if(Ve.test(e)||We.test(e))return{kind:"consent",source:"department"};if(ze.test(e))return{kind:"consent",source:"program-adviser"};if(Je.test(e))return{kind:"consent",source:"faculty"};if(Ze.test(e))return{kind:"consent",source:"application"};if(Qe.test(e)){let d="department";/\bchemistry\b/i.test(e)?d="chemistry":/\blanguage\b/i.test(e)?d="language":/\bmath\b/i.test(e)&&(d="math");let b={kind:"placement",exam:d};return t.includes("qualifying")&&(b.passed=!0),b}if(oe.test(e))return{kind:"placement",exam:"AP"};let l=Xe.exec(e);if(l){let d=l[1].trim().replace(/[,.]+$/g,""),b="enrolled-in";return/\badmission\b|\badmitted\b/i.test(e)?b="admitted-to":/\breserved\b/i.test(e)&&(b="reserved-for"),{kind:"program",relation:b,name:d}}let C=or.exec(e);if(C){let d=[parseInt(C[2],10)*100];return C[3]&&d.push(parseInt(C[3],10)*100),{kind:"level-wildcard",levels:Array.from(new Set(d)).sort((b,E)=>b-E),subjects:[C[4].trim()],count:sr[C[1].toLowerCase()]}}let S=tr.exec(e);if(S){let b={kind:"gpa",min:parseFloat(S[1]??S[2])};return/\bcumulative\b/i.test(e)?b.scope="overall":/\bin\s+(?:the\s+)?major\b/i.test(e)&&(b.scope="major"),b}let p=er.exec(e);if(p){let d=[parseInt(p[1],10)*100];return p[2]&&d.push(parseInt(p[2],10)*100),{kind:"level-wildcard",levels:d.slice().sort((b,E)=>b-E),subjects:[p[3].trim()]}}let f=rr.exec(e);if(f)return{kind:"level-wildcard",levels:[parseInt(f[1],10)*100],subjects:[f[2].trim()]};let I=qe.exec(e);if(I)return{kind:"level-wildcard",levels:[parseInt(I[1],10)*100],subjects:[],orHigher:!0};let T=Ke.exec(e);if(T&&(!T[1]||T[1].split(/\s+/).every(d=>/^[A-Z]/.test(d)))){let d=T[1]?[T[3]?`${T[1]} ${T[3]}`:T[1]]:T[3]?[T[3]]:null,b={kind:"standing",level:"graduate"};return d&&(b.scope={type:"program",names:d}),b}return ar.test(t)?{kind:"raw",text:e,reason:"vary-by-topic"}:(r.push("freeform"),{kind:"topic",topic:e})}function hr(e){let r=0;for(let o of e)if(o==="("||o==="[")r++;else if((o===")"||o==="]")&&(r--,r<0))return!1;return r===0}function Z(e){for(e=e.trim();e.startsWith("(")&&e.endsWith(")")&&hr(e.slice(1,-1));){let r=e.slice(1,-1);if(!hr(r))break;e=r.trim()}return e}function Tr(e){return/[\w]/.test(e)}function m(e,r){let o=[...r].sort((c,g)=>g.length-c.length),t=[],n=[],a=0,s=0,i=e.length;for(;s<i;){let c=e[s];if(c==="("||c==="["){a++,n.push(c),s++;continue}if(c===")"||c==="]"){a--,n.push(c),s++;continue}if(a===0){let g=null;for(let u of o)if(e.slice(s,s+u.length).toLowerCase()===u.toLowerCase()){if(/^[A-Za-z]/.test(u)){let M=s>0?e[s-1]:" ",l=s+u.length<i?e[s+u.length]:" ";if(Tr(M)||Tr(l))continue}g=u;break}if(g!==null){t.push(n.join("").trim()),n.length=0,s+=g.length;continue}}n.push(c),s++}return t.push(n.join("").trim()),t.filter(c=>c.length>0)}function Ar(e){let r=[],o=[],t=[],n=0,a=0,s=e.length,i=[[", and ","and"],[", or ","or"],[" and ","and"],[" or ","or"]];for(;a<s;){let c=e[a];if(c==="("||c==="["){n++,t.push(c),a++;continue}if(c===")"||c==="]"){n--,t.push(c),a++;continue}if(n===0){let g=null;for(let[u,M]of i)if(e.slice(a,a+u.length).toLowerCase()===u.toLowerCase()){g=[u,M];break}if(g){r.push(t.join("").trim()),o.push(g[1]),t.length=0,a+=g[0].length;continue}}t.push(c),a++}return r.push(t.join("").trim()),[r,o]}function _r(e){if(e.length<3)return!1;for(let r=1;r<e.length;r++)if(e[r]===e[r-1])return!1;return!0}function Pr(e){let r=n=>n.toLowerCase().replace(/s$/,""),o=new Set(["freshman","sophomore","junior","senior","graduate","advanced"]),t=r(e);return t=t.replace(/\s+student$/,""),o.has(t)?{kind:"standing",level:t}:null}function xr(e,r){let o=[];if(e=O(e),ee.test(e))return{parsed:{kind:"none"},warnings:o};let t;[e,t]=pr(e),e=O(e);let n=re.exec(e);if(n){let u=[],M=Pr(n[1]);if(M&&u.push(M),n[2]){let l=Pr(n[2]);l&&u.push(l)}if(u.length===1)return{parsed:u[0],warnings:o};if(u.length>1){let l=h(u);if(l)return{parsed:l,warnings:o}}}let a=[],s=nr.exec(e);if(s){let u=s[1],M=s.index,l=s.index+s[0].length,C=Math.max(0,M-30),S=e.slice(C,M),p=/(?:should|must|may)\s+be\s*$/i.exec(S);p&&(M=C+p.index);let f=/\bor\b/i.test(u)?"any":"all",I=ae(u,f);I!==null&&(I=_(I,{concurrent:"required"}),I&&a.push(I),e=(e.slice(0,M)+e.slice(l)).replace(/[\s.,;]+$/g,"").replace(/^[\s.,;]+/g,"").replace(/[\s,;]+(?:and|or)$/i,""))}for(let u of ne)e=e.replace(u,"");e=e.replace(/\s+(?:in\s+order\s+)?to\s+(?:register|enroll)\s+(?:for|in|into)\s+this\s+(?:course|class)\.?/gi,"."),e=e.replace(/\s+(?:and\s+passed\s+)?with\s+(?:an?\s+(?:grade\s+of\s+)?([A-D][+-]?)\s+or\s+(?:better|higher|above)\b|at\s+least\s+an?\s+([A-D][+-]?)(?!\w))/gi,(u,M,l)=>{let C=(M??l??"").toUpperCase();return C==="C-"||C==="B-"?` (${C} or better)`:""}),e=e.replace(/(?<![A-Z_]\s)\b((?:[A-Z][A-Z_]+\s+)?\d{3}(?:-[A-Za-z0-9]+)?(?:(?:,\s*|,?\s+(?:and|AND)\s+)(?:[A-Z][A-Z_]+\s+)?\d{3}(?:-[A-Za-z0-9]+)?)*,?\s+(?:and|AND)\s+(?:[A-Z][A-Z_]+\s+)?\d{3}(?:-[A-Za-z0-9]+)?) (\([CB]- or better\))/g,(u,M,l,C,S)=>M.includes(",")&&/\b(?:or|OR)\s+$/.test(S.slice(0,C))?u:M.replace(/(\d{3}(?:-[A-Za-z0-9]+)?)(?=,|\s+(?:and|AND)\s)/g,`$1 ${l}`)+` ${l}`),e=e.replace(/\bAP\s+(?:score\s+)?of\s+\d\b[^,;]*/gi,u=>x(u)?u:u.split(/\s+or\s+/i).map(M=>M.replace(/\s+and\s+/gi," & ")).join(" or ")),e=e.replace(/\b(AP\s+(?:[Ss]core\s+)?(?:of\s+)?\d\s+in\s+)([A-Z][a-z]+(?:(?:,\s*|,?\s+(?:or|and)\s+)[A-Z][a-z]+)+)\b/g,(u,M,l)=>M+l.split(/,\s*|,?\s+(?:or|and)\s+/).join("/")),e=e.replace(/(?<=^|[,;]\s*|\band\s+)(?:(?:have\s+)?(?:prior\s+)?(?:completed|completion\s+of|taken)\s+or\s+(?:be\s+|are\s+)?(?:currently|concurrently|concurrent)\s+(?:enrolled|enrollment|registered|registration)(?:\s+in)?|(?:students?\s+)?(?:must\s+)?(?:currently\s+)?(?:be\s+)?(?:currently\s+)?enrolled(?:\s+in)?\s+or\s+(?:have\s+)?(?:taken|completed|passed)(?:\s+and\s+passed)?|(?:have\s+)?taken\s+and\s+passed)\s+/gi,""),e=e.replace(/\s+or\s+equivalent(?=,?\s+and\s)/gi," (or equivalent)"),e=e.replace(/,?\s+which\s+(?:may|can)\s+be\s+taken\s+concurrently\b/gi," (may be taken concurrently)"),e=O(e).replace(/[\s.,;]+$/g,"").replace(/^[\s.,;]+/g,""),e=fr(e);let i;[e,i]=Mr(e),r&&(e=e.replace(/^(\d{3})(?:-([A-Za-z0-9]+))?(?!\s*-?\s*level\b)\b/,u=>`${r} ${u}`)),e=Er(e);let c=/^(.*?\b)(?:at least |any )?one of (?:the following(?: courses)?:?\s*)?([^;:]+)$/i.exec(e);c&&!x(c[1])&&!/\b(?:and|or)\b/i.test(c[2])&&(e=c[2].split(/\s*,\s*/).join(" or "));let g=v(e,o,i);return t&&g!==null&&(g=_(g,{minGrade:t})),a.length>0&&(g=gr([g,...a])),{parsed:g,warnings:o}}function x(e){return D.test(e)||/^\s*\d{3}\b/.test(e)}function Hr(e){let r=/^([A-Za-z][A-Za-z_]{1,})\s+(\d{3})(?:-([A-Za-z0-9]+))?(?:\s*\([^()]*\))?\.?$/.exec(e.trim());return r?`${r[1].toUpperCase()} ${r[2]}-${(r[3]??"0").toUpperCase()}`:null}function se(e){return m(e,[" or "]).length>1}function Oo(e){let r=m(e,[","]);return r.length===1||m(e,[", or "]).length>1?!0:r.every(se)}function Nr(e){let r=new Set;for(let o of e){let t=/(\d{3})-[A-Za-z0-9]+/.exec(o);if(!t)return!1;r.add(t[1])}return r.size===1&&e.length>1}function v(e,r,o){if(e=O(e).replace(/[\s.,;]+$/g,"").replace(/^[\s.,;]+/g,""),!e)return null;e=Z(e);let t=Ir(e);if(t!==null)return t;let n=Fe.exec(e);if(n){let l=!!n[1],C=n[2],S=n[3].trim(),p=v(S,r,o);if(p!==null)return{kind:"when",condition:{kind:"program-membership",program:C,negated:l},then:p}}let a=m(e,[", and either: "," and either: "]),s=a.length===2?a:m(e,[";"]).length===1?m(e,[", and either "," and either "]):[];if(s.length>1)return A(s.map(l=>v(l,r,o)));if(!e.includes(";")){let[l,C]=Ar(e);if(_r(C)){let S=C[1],p=S==="and"?"or":"and",f=[[l[0]]];for(let b=0;b<C.length;b++){let E=C[b],H=l[b+1];E===S?f.push([H]):f[f.length-1].push(H)}let I=p==="or"?h:A,T=S==="and"?A:h,d=[];for(let b of f)b.length===1?d.push(B(b[0],r,o)):d.push(N(I(b.map(E=>B(E,r,o)))));return N(T(d))}}let i=m(e,[";"]);if(i.length>1){let l=[];for(let S=0;S<i.length;S++){let p=i[S].replace(/[\s.,;]+$/g,"").replace(/^[\s.,;]+/g,"");if(S===0){l.push({op:"first",text:p});continue}let f=/^(or|and)\s+/i.exec(p);f?l.push({op:f[1].toLowerCase(),text:p.slice(f[0].length).trim()}):l.push({op:"and",text:p})}let C=l[l.length-1];return C.op==="or"&&!x(C.text)&&l.slice(1,-1).some(S=>S.op==="and")?N(h([yr(l.slice(0,-1),r,o),v(C.text,r,o)])):l.every(S=>S.op==="first"||S.op==="and")&&l.some(S=>oe.test(S.text))&&!l.some(S=>x(S.text))&&m(C.text,[", or "]).length>1?N(h(l.map(S=>v(S.text,r,o)))):yr(l,r,o)}let c=m(e,[", and "]);if(c.length>1&&c.some(se)&&c.every(l=>!se(l)||Oo(l))){let l=c[c.length-1],C=m(l,[" or "]),S=C[C.length-1];if(C.length>1&&!x(S)&&x(C[0])){let p=[...c.slice(0,-1),C.slice(0,-1).join(" or ")];return N(h([A(p.map(f=>v(f,r,o))),B(S,r,o)]))}return A(c.map(p=>v(p,r,o)))}let g=m(e,[","]);if(g.length>1&&m(e,[" and "]).length===1&&m(e,[", or "]).length===1){let l=g.map(se),C=l.filter(Boolean).length;if(C===1&&l[l.length-1]){let S=m(g[g.length-1],[" or "]);if(S.every(x)&&!Nr([...g.slice(0,-1),S[0]])){let f=m(e,[" or ",","]);return N(h(f.map(I=>B(I,r,o))))}}else if(C>=1){let S=[],p=[];return g.forEach((f,I)=>{if(!l[I]){p.push(f);return}let T=m(f,[" or "]);p.length>0&&p.every(x)&&T.every(x)&&!Nr([...p,T[0]])?S.push([...p,f]):S.push(...p.map(d=>[d]),[f]),p=[]}),S.push(...p.map(f=>[f])),A(S.map(f=>N(h(f.map(I=>v(I,r,o))))))}}if(m(e,[", or "]).length>1){let l=m(e,[", or "," or ",", "]),C=/^(?:have\s+)?(.*\b(?:AP|placement)\b.*?)\s+for\s+(.+)$/i.exec(l[l.length-1]),S=C?Hr(C[2].split(/\.\s/)[0]):null,p=S?l.slice(0,-1).findIndex(f=>Hr(f)===S):-1;if(C&&p>=0&&l.length>2){let f=I=>B(I,r,o);return A([...l.slice(0,p).map(f),h([...l.slice(p,-1).map(f),W(C[1],r,o)])])}if(l.length>1)return N(h(l.map(f=>B(f,r,o))))}let M=m(e,[", or "," or "]);return M.length>1?N(h(M.map(l=>B(l,r,o)))):B(e,r,o)}function B(e,r,o){if(e=O(e).replace(/[\s.,;]+$/g,"").replace(/^[\s.,;]+/g,""),!e)return null;e=Z(e);let t=m(e,[", and "," and "]);if(t.length>1){let n=t.map(a=>Or(a,r,o));return A(n)}return Or(e,r,o)}function Or(e,r,o){if(e=O(e).replace(/[\s.,;]+$/g,"").replace(/^[\s.,;]+/g,""),!e)return null;e=Z(e);let t=m(e,[","]);if(t.length>1){let n=t.map(a=>vr(a,r,o)).filter(a=>a!==null);return n.length===0?null:n.length===1?n[0]:A(n)}return vr(e,r,o)}function vr(e,r,o){if(e=O(e).replace(/[\s.,;]+$/g,"").replace(/^[\s.,;]+/g,""),!e)return null;let t=br(e),n=t[1],a=t[0];a=a.replace(/\s*\x00\d+\x00\s*/g," ").trim();let s=a,i=Z(a);if(i!==s)return he(v(i,r,o),n);a=i;let c=W(a,r,o);return c=he(c,n),c!==null&&$e.test(e)&&(c=_(c,{equivalentOk:!0})),c!==null&&te.test(e)&&(c=Sr(c,{recommended:!0})),c}function yr(e,r,o){let t=[];for(let{op:a,text:s}of e)a==="or"&&t.length>0?t[t.length-1].push(s):t.push([s]);let n=[];for(let a of t)a.length===1?n.push(v(a[0],r,o)):n.push(N(h(a.map(s=>v(s,r,o)))));return n.length>1?A(n):n.length===1?n[0]:null}var ce=(e,r)=>xr(e,r);var G={ready:0,"needs-consent":1,"in-progress":2,unknown:3,blocked:4,"no-data":5};var Gr=1800*60*60*1e3;var vo={state:"no-data",missing:[],notes:[]},yo=["A+","A","A-","B+","B","B-","C+","C","C-","D+","D","D-","F"];function Lr(e){let r=yo.indexOf(e.toUpperCase());return r===-1?Number.POSITIVE_INFINITY:r}function xo(e,r){let o=Lr(e),t=Lr(r);return o===Number.POSITIVE_INFINITY||t===Number.POSITIVE_INFINITY?!1:o<=t}function $(){return{state:"ready",missing:[],notes:[]}}function Go(e){if(e.length===0)return $();let r=G[e[0].state];for(let s of e){let i=G[s.state];i<r&&(r=i)}let o=e.filter(s=>G[s.state]===r),t=o[0].state;if(t==="ready"){let s=[];for(let i of o)s.push(...i.notes);return{state:t,missing:[],notes:s}}let n=[],a=[];for(let s of o)n.push(...s.missing),a.push(...s.notes);return{state:t,missing:n,notes:a}}function Lo(e){if(e.length===0)return $();let r=G[e[0].state];for(let a of e){let s=G[a.state];s>r&&(r=s)}let o=Object.keys(G).find(a=>G[a]===r),t=[],n=[];for(let a of e){if(a.state==="ready"){n.push(...a.notes);continue}t.push(...a.missing),n.push(...a.notes)}return{state:o,missing:t,notes:n}}function Ro(e){let r=e.section&&e.section!=="0"?`-${e.section}`:"";return`${e.subject} ${e.number}${r}`}function wo(e,r){let o=Ro(e),t=r.get(o),n=[];if(e.concurrent==="required"?n.push("concurrent enrollment required"):e.concurrent==="allowed"&&n.push("concurrent enrollment allowed"),e.recommended)return{state:"ready",missing:[],notes:[...n,`recommended: ${o}`]};if(!t)return{state:"blocked",missing:[e],notes:n};let a=t.status;if(a==="Taken"){if(e.minGrade){let s=t.grade??"";if(!xo(s,e.minGrade))return{state:"blocked",missing:[e],notes:[...n,`minimum grade ${e.minGrade} not met`]}}return{state:"ready",missing:[],notes:n}}return a==="Transferred"||a==="In Progress"?{state:"ready",missing:[],notes:n}:{state:"blocked",missing:[e],notes:n}}var j=(e,r)=>e===null?{...vo}:Q(e,r);function Q(e,r){switch(e.kind){case"none":return $();case"course":return wo(e,r);case"consent":return{state:"needs-consent",missing:[e],notes:[`needs ${e.source} consent`]};case"standing":return{state:"unknown",missing:[e],notes:[]};case"topic":case"raw":case"level-wildcard":case"program":case"program-membership":case"placement":case"gpa":return{state:"unknown",missing:[e],notes:[]};case"all":{if(e.of.length===0)return $();let o=e.of.map(t=>Q(t,r));return Lo(o)}case"any":{if(e.of.length===0)return $();let o=e.of.map(t=>Q(t,r));return Go(o)}case"when":{let o=Q(e.condition,r),t=Q(e.then,r);return o.state==="unknown"?{...t,state:"unknown"}:o.state==="ready"?t:$()}}}var Rr={"ANTHRO 375-0":"Students must have completed ANTHRO 309 or ANTHRO 275 to enroll in this class","ANTHRO 483-0":"Students must have completed ANTHRO 401-4 to enroll","ARABIC 114-0":"121-2","ARABIC 316-1":"211-3 or equivalent","ARABIC 316-2":"ARABIC 211-3 or equivalent","ARABIC 316-3":"ARABIC 211-3 or equivalent","ASTRON 321-0":"ASTRON 220-1 or ASTRON 220-2","ASTRON 325-0":"ASTRON 220-1 or ASTRON 220-2","ASTRON 329-0":"ASTRON 220-1 or ASTRON 220-2","BIOL_SCI 201-0":"Students must have completed CHEM 131-0, CHEM 151-0, or CHEM 171-0 to register","BIOL_SCI 201-SG":"BIOL_SCI 201-0","BIOL_SCI 202-0":"Students must have completed BIOL_SCI 201-0 to register for this course. Must be taken concurrently with BIOL_SCI 232-0","BIOL_SCI 202-SG":"BIOL_SCI 202-0","BIOL_SCI 203-0":"Students must have completed BIOL_SCI 202-0 to register for this course. Must be taken concurrently with BIOL_SCI 233-0","BIOL_SCI 203-CN":"Students must have completed BIOL_SCI 202-CN with a grade of C- or better to register for this course","BIOL_SCI 203-SG":"BIOL_SCI 203-0","BIOL_SCI 233-0":"Students must have completed BIOL_SCI 232-0. Must be taken concurrently with BIOL_SCI 203-0 or 241-0","BIOL_SCI 234-CN":"grades of C- or higher in both BIOL_SCI 233","BIOL_SCI 239-0":"CHEM 151-0 or CHEM 171-0. Enrollment by successful score on the annual BioSci placement exam or permission of instructor","BIOL_SCI 240-0":"BIOL_SCI 239-0, co-requisite BIOL_SCI 232-0","BIOL_SCI 241-0":"BIOL_SCI 240-0; co-requisite BIOL_SCI 233-0","BIOL_SCI 301-0":"Students must have completed BIOL_SCI 201-0 or BIOL_SCI 239-0, and CHEM 210-1 or CHEM 212-1 or CHEM 215-1 or CHEM 217-1 to register for this course","BIOL_SCI 302-0":"To enroll, students must have completed BIOL_SCI 202-0 or BIOL_SCI 240-0, 203-0 or BIOL_SCI 241-0, and BIOL_SCI 301-0","BIOL_SCI 303-0":"Students must have completed BIOL_SCI 301-0 to register for this course","BIOL_SCI 307-0":"Students must have completed BIOL_SCI 202-0 or BIOL_SCI 240-0, 203-0 or BIOL_SCI 241-0, and BIOL_SCI 301-0; or NEUROSCI 206-0 in order to register for this course","BIOL_SCI 310-0":"Students must have completed BIOL_SCI 201-0 or BIOL_SCI 239-0, BIOL_SCI 202-0 or BIOL_SCI 240-0, and CHEM 132-0, CHEM 152-0, or CHEM 172-0","BIOL_SCI 315-0":"Students must have completed BIOL_SCI 201-0 or BIOL_SCI 239-0, BIOL_SCI 202-0 or BIOL_SCI 240-0, and BIOL_SCI 301-0 to register for this course","BIOL_SCI 316-0":"BIOL_SCI 201-0, BIOL_SCI 202-0, BIOL_SCI 203-0, and BIOL_SCI 301-0","BIOL_SCI 319-0":"Students must have completed BIOL_SCI 202-0 or BIOL_SCI 240-0, BIOL_SCI 203-0 or BIOL_SCI 241-0, and BIOL_SCI 301-0 to register for this course","BIOL_SCI 325-0":"Students must have completed BIOL_SCI 202-0 or BIOL_SCI 240-0, 203-0 or BIOL_SCI 241-0, and BIOL_SCI 301-0 to enroll","BIOL_SCI 327-0":"Students must have completed BIOL_SCI 201-0 or BIOL_SCI 239-0, and BIOL_SCI 202-0 or BIOL_SCI 240-0 to register for this course","BIOL_SCI 328-0":"BIOL_SCI 201-0 or BIOL_SCI 239-0, BIOL_SCI 202-0 or BIOL_SCI 240-0, BIOL_SCI 203-0 or BIOL_SCI 241-0, and have completed or be currently enrolled in BIOL_SCI 301-0. Graduate students can be added by departmental permission","BIOL_SCI 332-0":"Students must have completed BIOL_SCI 203-0 or ENVR_SCI 202-0 to register for this course","BIOL_SCI 333-0":"Students must have completed BIOL_SCI 203-0, or BIOL_SCI 241-0, or BIOL_SCI 339-0, or BIOL_SCI 341-0, or BIOL_SCI 342-0, or ENVR_SCI 202-0 to register for this course","BIOL_SCI 336-0":"Students must have completed BIOL_SCI 203-0, BIOL_SCI 241-0, or BIOL_SCI 339-0, or BIOL_SCI 341-0, or BIOL_SCI 342-0, or ENVR_SCI 202-0 to register for this course","BIOL_SCI 337-0":"BIOL_SCI 201-0, or BIOL_SCI 239-0, or EARTH 212-0, MATH 218-3 or MATH 220-2, and STAT 202-0 or 210-0","BIOL_SCI 339-0":"Students must have completed BIOL_SCI 203-0, or BIOL_SCI 241-0, or BIOL_SCI 341-0, or BIOL_SCI 342-0, or ENVR_SCI 202-0 to register for this course","BIOL_SCI 340-0":"BIOL_SCI 203-0 or BIOL_SCI 241-0 or EARTH 212-0 or BIOL_SCI 339-0 or PBC Graduate student standing or permission of instructor","BIOL_SCI 341-0":"Students must have completed BIOL_SCI 203-0 or BIOL_SCI 241-0, and BIOL_SCI 337-0 or another course in statistics to register for this course","BIOL_SCI 342-0":"Students must have completed BIOL_SCI 203-0 or BIOL_SCI 241-0, and BIOL_SCI 337-0 or another course in statistics to register for this course","BIOL_SCI 345-0":"Students must have completed BIOL_SCI 202-0 or BIOL_SCI 240-0, BIOL_SCI 203-0 or BIOL_SCI 241-0, and BIOL_SCI 234-0 to register for this course","BIOL_SCI 349-0":"Students must have completed BIOL_SCI 203-0, or BIOL_SCI 241-0, or BIOL_SCI 339-0, or BIOL_SCI 341-0, or BIOL_SCI 342-0, or ENVR_SCI 202-0 to register for this course","BIOL_SCI 350-0":"Students must have completed BIOL_SCI 203-0, or BIOL_SCI 241-0, or BIOL_SCI 339-0, or BIOL_SCI 341-0, or BIOL_SCI 342-0, or ENVR_SCI 202-0 to register for this course","BIOL_SCI 354-0":"Students must have completed BIOL_SCI 201-0 or BIOL_SCI 239-0, and BIOL_SCI 202-0 or BIOL_SCI 240-0 to register for this course","BIOL_SCI 355-0":"Students must have completed BIOL_SCI 201-0 or BIOL_SCI 239-0, BIOL_SCI 202-0 or BIOL_SCI 240-0, and BIOL_SCI 301-0 to register for this course","BIOL_SCI 356-0":"BIOL_SCI 201-0, BIOL_SCI 202-0, BIOL_SCI 203-0, and BIOL_SCI 301-0","BIOL_SCI 360-0":"Students must have completed BIOL_SCI 301-0 to enroll","BIOL_SCI 363-0":"Students must have completed BIOL_SCI 202-0 or BIOL_SCI 240-0, BIOL_SCI 203-0 or BIOL_SCI 241-0, and BIOL_SCI 301-0 to register for this course","BIOL_SCI 377-0":"Students must have completed BIOL_SCI 201-0 or BIOL_SCI 239-0, BIOL_SCI 202-0 or BIOL_SCI 240-0, and BIOL_SCI 301-0 to register for this course","BIOL_SCI 378-0":"Students must have completed BIOL_SCI 202-0 or BIOL_SCI 240-0, and BIOL_SCI 203-0 or BIOL_SCI 241-0 to register for this course","BIOL_SCI 379-0":"BIOL_SCI 203-0, BIOL_SCI 234-0, and BIOL_SCI 301-0","BIOL_SCI 380-0":"Students must have completed BIOL_SCI 202-0 or BIOL_SCI 240-0, BIOL_SCI 203-0 or BIOL_SCI 241-0, and BIOL_SCI 301-0 to register for this course","BIOL_SCI 381-0":"Students must have completed BIOL_SCI 202-0 or BIOL_SCI 240-0, and BIOL_SCI 203-0 or BIOL_SCI 241-0 to register for this course","BIOL_SCI 390-0":"Students must have completed BIOL_SCI 301-0 to register for this course","BIOL_SCI 391-0":"Students must have completed BIOL_SCI 202-0 or BIOL_SCI 240-0, and BIOL_SCI 203-0 or BIOL_SCI 241-0, and BIOL_SCI 301-0 to register for this course","BIOL_SCI 392-0":"Students must have completed BIOL_SCI 202-0 or BIOL_SCI 240-0, BIOL_SCI 203-0 or BIOL_SCI 241-0, BIOL_SCI 234-0, and BIOL_SCI 301-0 to register for this course","BIOL_SCI 393-0":"BIOL_SCI 203-0 or BIOL_SCI 241-0","BIOL_SCI 395-0":"Students must have completed BIOL_SCI 202-0 or BIOL_SCI 240-0, BIOL_SCI 203-0 or BIOL_SCI 241-0, and BIOL_SCI 301-0 to register for this course","BIOL_SCI 396-0":"Students must have completed BIOL_SCI 202-0 or BIOL_SCI 240-0, BIOL_SCI 203-0 or BIOL_SCI 241-0, and BIOL_SCI 301-0 to register for this course","BLK_ST 331-0":"sophomore standing","BLK_ST 380-0":"advanced student or senior standing","BLK_ST 381-0":"advanced student or senior standing","BLK_ST 396-0":"advanced student or senior standing","BMD_ENG 207-0":"BMD_ENG 220-0 or GEN_ENG 231-0","BMD_ENG 270-0":"BMD_ENG 250 or BMD_ENG 271; GEN_ENG 205-4; MATH 228-2","BMD_ENG 306-0":"Registration is restricted to BME Students Only. Students must have completed PHYSICS 135-2 to enroll in this course or be a BMD_ENG graduate student","BMD_ENG 312-0":"BMD_ENG 220, GEN_ENG 205-1, MATH 220-1, MATH 220-2 or BioMed MS or Phd","BMD_ENG 317-0":"BIOL_SCI 201-0 and CHEM 215-1 or is a BME graduate student","BMD_ENG 340-0":"CHEM 215-1 OR be BME MS/PhD student to enroll in this class","BMD_ENG 343-0":"BIOL_SCI 201-0, BIOL_SCI 202-0 (can be taken concurrently), CHEM 215-1, MAT_SCI 201-0, or be a BME Graduate student","BMD_ENG 344-0":"BIOL_SCI 201-0, BIOL_SCI 202-0 (can be taken concurrently), CHEM 215-1, MAT_SCI 201-0 or be a BME graduate student","BMD_ENG 346-0":"BIOL_SCI 201-0, BIOL_SCI 202-0 (can be taken concurrently), CHEM 215-1, or be a BME Graduate student","BMD_ENG 354-0":"Students must have completed or be currently registered in BMD_ENG 353 or MAT_SCI 353 to enroll","BMD_ENG 378-0":"BMD_ENG 270-0; MATH 228-1","BMD_ENG 390-1":"BMD_ENG 207-0; BMD_ENG 309-0; COMP_SCI 150-0, GEN_ENG 150-0, or GEN_ENG 151-0; two of the following: BMD_ENG 250-0, BMD_ENG 271-0, MAT_SCI 201-0","BMD_ENG 404-2":"BMD_ENG 404-1","BMD_ENG 404-3":"BMD_ENG 404-2","BUSCOM 925-0":"Students must have taken and passed BUSCOM 906-0 Contract Law in order to enroll into this course","CHEM 110-MG":"Concurrent enrollment in CHEM-110","CHEM 142-CN":"CHEM 131-CN and 141-CN","CHEM 172-0":"Please try again during regular registration. In order to enroll for this class you must have completed CHEM 171 and 181 with a grade of C- or better OR you must currently be enrolled in CHEM 171","CHEM 182-0":"Students must have completed CHEM 171-0 and CHEM 181-0 with a C- or better, and must be taken concurrently with CHEM 172-0","CHEM 215-2":"Student must have received a C- or higher or be currently enrolled in CHEM 215-1 to register for this course","CHEM 215-A":`CHEM 132-CN and CHEM 142-CN
Co-Req: Student must also enroll in CHEM 235-A`,"CHEM 215-C":"CHEM 215-B (grade of C- or better), or current enrollment in CHEM 215-B Additional Requirement: CHEM 235-C must be taken concurrently","CHEM 217-1":"CHEM 132-0 and CHEM 142-0, or CHEM 152-0 and CHEM 162-0, or CHEM 172-0 and CHEM 182-0 (C- or better), or department placement. Must be taken concurrently with CHEM 235-1","CHEM 217-2":"CHEM 217-1 and CHEM 237-1 (C- or better). Must be taken concurrently with CHEM 237-2","CHEM 217-3":"CHEM 217-2 and CHEM 237-2 (C- or better). Must be taken concurrently with CHEM 235-3","CHEM 235-2":"Students must be enrolled or have completed CHEM 215-1 to register for this course","CHEM 235-3":"Grade of C- or better in CHEM 215-2 and in CHEM 235-2. Must be taken concurrently with CHEM 215-3 or CHEM 217-3","CHEM 235-A":`CHEM 132-CN and CHEM 142
Co-Req: Students mush also enroll in CHEM 215-A`,"CHEM 235-C":"CHEM 215-B (grade of C- or better), or current enrollment in CHEM 215-B Additional Requirement: CHEM 215-C must be taken concurrently","CHEM 237-1":"CHEM 132-0 and CHEM 142-0, or CHEM 152-0 and CHEM 162-0, or CHEM 172-0 and CHEM 182-0 (C- or better), or equivalent. Must be taken concurrently with CHEM 217-1","CHEM 237-2":"CHEM 217-1 and CHEM 237-1 (C- or better). Must be taken concurrently with CHEM 217-2","CHEM 305-0":"CHEM 215-3 or CHEM 212-3 or 217-3 (C- or better); and 1 biochemistry course; or consent of instructor","CHEM 306-0":"CHEM 215-2 or CHEM 212-3 or 217-3 (C- or better); MATH 230-2; PHYSICS 135-1 and PHYSICS 135-2; or consent of instructor","CHEM 307-0":"CHEM 215-3 or CHEM 212-3 or 217-3 (C- or better)","CHEM 308-0":"Students must have completed CHEM 212-3 or 215-3 to register for this course. CHEM 342-1 is recommended","CHEM 309-0":"(for undergraduates only): CHEM 215-3 or CHEM 212-3 or 217-3 (C- or better); and one of the following courses: CHEM 307-0, CHEM 313-0, CHEM 319-0, CHEM 412-0, or CHEM 415-0","CHEM 310-1":"Students must have taken CHEM 215-3 or CHEM 212-3 or CHEM 217-3 with a C- or better to register for this course","CHEM 310-2":"CHEM 215-3 or CHEM 217-3 or equivalent. CHEM 310-1 strongly recommended","CHEM 313-0":"Students must have completed CHEM 215-3 or CHEM 212-3 or 217-3 (C- or better) to enroll","CHEM 314-0":"CHEM 215-3 or CHEM 212-3 or 217-3 (C- or better); and 1 quarter of biology; or consent of instructor","CHEM 319-0":"Students must have completed CHEM 215-3 or CHEM 212-3 or 217-3 (C- or better) to enroll","CHEM 342-1":"CHEM 132-0 or CHEM 152-0 or CHEM 172-0 or CHEM 215-3 or CHEM 212-3 or CHEM 217-3 (C- or better); and MATH 230-1","CHEM 342-2":"MATH 230-2; PHYSICS 135-1 and 135-2; and CHEM 342-1","CHEM 350-1":"Students must have completed CHEM 220-0; and CHEM 215-3 or CHEM 212-3 or 217-3, and CHEM 235-3 (C- or better); or equivalent to enroll","CHEM 393-0":"CHEM 215-2 or CHEM 217-2 (C- or better)","CHEM 403-0":"Graduate student or BIOL_SCI 201 and CHEM 215-1 or CHEM 217-1","CHEM 406-0":"CHEM 215-2 or CHEM 212-3 or 217-3 (C- or better); MATH 230-2; PHYSICS 135-1 and PHYSICS 135-2; or consent of instructor","CHEM 493-0":"Must have completed CHEM 215-2 & CHEM 235-2 w/ a minimum of C-, be currently enrolled in CHEM 215-2 & 235-2, have completed CHEM 217-2 & CHEM 237-2 w/ a minimum of C-, or be currently enrolled in CHEM 217-2 & 237-2 to enroll","CHEM_ENG 302-0":"COMP_SCI 214 or Permission of Instructor","CHEM_ENG 312-0":"MATH 220-1, 220-2, 228-1, 228-2 or equivalent; COMP_SCI 150-0, GEN_ENG 150, or GEN_ENG 151-0","CHEM_ENG 342-0":"Please try again during regular registration. Students must have taken CHEM_ENG 212-0, 307-0, 321-0, 322-0, and 323-0 in order to register for this course","CHEM_ENG 351-0":"Please try again during regular registration. Students must have taken CHEM_ENG 212-0, 307-0, 321-0, 322-0, and 323-0 in order to register for this course","CHEM_ENG 378-0":"CHEM_ENG 275-0 or BIOL_SCI 201-0 or BIOL_SCI 202-0 or MBIOTECH 304-0 or CHEM_ENG 376-0","CHINESE 311-1":"Students must have passed CHINESE 211-3 with at least a C- or be placed in according to placement test results","CHINESE 311-2":"Students must have passed CHINESE 211-3 with at least a C- or be placed in according to placement test results","CHINESE 311-3":"grade of at least C- in CHINESE 211-3 or equivalent","CHINESE 315-1":"grade of at least C- in CHINESE 215-3; or all three of the following: CHINESE 311-1, CHINESE 311-2 and CHINESE 311-3","CHINESE 315-2":"grade of at least C- in CHINESE 215-3 or completion of the CHINESE 311-1, CHINESE 311-2 and CHINESE 311-3 series","CHINESE 315-3":"grade of at least C- in CHINESE 215-3; or all three of the following: CHINESE 311-1, CHINESE 311-2 and CHINESE 311-3","CIS 212-DL":"Students must have completed CIS 110-CN to register for this class. Other students may register with instructor permission","CIS 419-DL":"CIS 414 or MSDS 430","CIS 431-DL":"CIS 414 or MSDS 430","CIS 435-DL":"CIS 414 or MSDS 430","CIS 436-DL":"CIS 414 or MSDS 430","CIS 452-0":"CIS 413","CIS 455-DL":"CIS 413","CIS 459-DL":"CIS 414 OR MSDS 430","CIS 460-0":"CIS 413","CIS 471-DL":"CIS 414 or MSDS 430","CIS 473-DL":"CIS 414 or MSDS 430","CIS 477-DL":"CIS 414 or MSDS 430","CIV_ENV 201-0":"CIV_ENV 301-1 Cornerstone Design Lab","CIV_ENV 250-0":"Students must have completed CIV_ENV 216 to register for this course","CIV_ENV 260-0":"MATH 220-2; CHEM 131-0, CHEM 151-0, or CHEM 171-0 highly recommended","CIV_ENV 301-1":"CIV_ENV 201-0 Cornerstone Design","CIV_ENV 323-0":"Students must have taken CIV_ENV 221, or be a graduate student in order to enroll in this class","CIV_ENV 346-0":"Students must have taken CIV_ENV 260, one course in fluid mechanics, or have graduate standing","CIV_ENV 366-0":"CIV_ENV 260 or instructor consent","COMM_ST 365-0":"Students must have completed COMM_ST 261-0 to enroll","COMP_ENG 358-0":"COMP_SCI 213 or (COMP_ENG 205 & 211) or MS CS/CE major or PhDs CS/CE major or permission of Instructor","COMP_ENG 368-0":"COMP_SCI 213 or CS/CE Graduate standing or Consent of Instructor","COMP_ENG 468-0":"COMP_SCI 213 or CS/CE Graduate standing or Consent of Instructor","COMP_SCI 180-0":"GEN_ENG 150-0 or GEN_ENG 151-0 or COMP_SCI 150 or COMP_SCI 1CA","COMP_SCI 196-0":"Students must not be Computer Science Major and have completed COMP_SCI 110-0 or 150-0 or STAT 201-0","COMP_SCI 208-0":"(COMP_SCI 150 or GEN_ENG 150 or GEN_ENG 151) and (COMP_SCI 111 or COMP_SCI 180)","COMP_SCI 211-0":"COMP_SCI 150 or GEN_ENG 150 or GEN_ENG 151","COMP_SCI 212-0":"COMP_SCI 150 or GEN_ENG 150 or GEN_ENG 151","COMP_SCI 217-0":"COMP_SCI 150 or GEN_ENG 150 or GEN_ENG 151","COMP_SCI 262-0":"COMP_SCI 212-0 or MATH 300-0","COMP_SCI 298-0":"Consent of Instructor","COMP_SCI 301-0":"COMP_SCI 110-0, COMP_SCI 111-0, COMP_SCI 150, GEN_ENG 150-0, GEN_ENG 151-0, MECH_ENG 224-0, or consent of instructor","COMP_SCI 302-0":"COMP_SCI 349 or MS CS or PhDs CS","COMP_SCI 308-0":"Students must have completed COMP_SCI 211-0 and (COMP_SCI 208-0 or COMP_SCI 214) or Instructor consent to enroll","COMP_SCI 310-0":"COMP_SCI 213 and (COMP_SCI 208 or COMP_SCI 214) or CS MS or CS PhDs or Instructor permission","COMP_SCI 311-0":"Students must have taken COMP_SCI 110 or COMP_SCI 111 or be a graduate CS student to register for this course. Cannot have taken LRN_SCI 309-0","COMP_SCI 312-0":"(COMP_SCI 211 and COMP_SCI 214) and (COMP_SCI 262 or ELEC_ENG 302 or IEMS 201 or IEMS 303 or STAT 210) or MS CS or PhDs CS or Instructor consent","COMP_SCI 313-0":"((COMP_SCI 214 or COMP_SCI 208) and (COMP_SCI 329 or COMP_SCI 330)) or CS MS or CS PhDs or Permission of Instructor","COMP_SCI 316-1":"COMP_SCI 110 or 111 or 150 or 211 or GEN_ENG 150 or GEN_ENG 151 or permission of instructor","COMP_SCI 317-0":"COMP_SCI 208/214 or CS MS or CS PhD or permission of instructor","COMP_SCI 321-0":"(COMP_SCI 211 and (COMP_SCI 214 or COMP_SCI 208)) or COMP_SCI MS or COMP_SCI PhDs or Instructor permissiong","COMP_SCI 322-0":"Students must have completed ((COMP_SCI 214 or COMP_SCI 208) & (COMP_SCI 213 or COMP_ENG 205)), or CS MS or CS PhD in order to register for this course","COMP_SCI 324-0":"COMP_SCI 321 or CS PhD or Permission Instructor","COMP_SCI 325-0":"(COMP_SCI 208 or COMP_SCI 214) or (COG_SCI major required and COMP_SCI 150 or GEN_ENG 150 or GEN_ENG 151) or COMP_SCI MS or COMP_SCI PhDs or Instructor consent","COMP_SCI 326-0":"Students must have completed COMP_SCI 212-0 & COMP_SCI 214-0, have consent of the instructor, or be a Computer Science Graduate student in order to register for this course","COMP_SCI 329-0":"COMP_SCI 150 or GEN_ENG 150 or GEN_ENG 151 or COMP_SCI 110 or COMP_SCI 111 and has not completed COMP_SCI 330 or Graduate Standing and has not completed COMP_SCI 330","COMP_SCI 330-0":"(COMP_SCI 208 or COMP_SCI 214) and has not completed COMP_SCI 329 or Graduate Standing and has not completed COMP_SCI 329. Concurrent enrollment in COMP_SCI 329 and 330 is not allowed","COMP_SCI 332-0":"(COMP_SCI 212 and COMP_SCI 214) or COMP_SCI 336 or ECON 380-1(Game Theory) or IEMS 303 or MMSS 211-2 or CS MS or CS PhDs or Permission of Instructor","COMP_SCI 336-0":"Students must have completed COMP_SCI 212-0 & (COMP_SCI 208 or COMP_SCI 214-0), or be Computer Science grad student in order to register for this course","COMP_SCI 338-0":"Must have completed one of COMP_SCI 348, 349, 330, 339","COMP_SCI 338-1":"COMP_SCI 180 or COMP_SCI 208 or COMP_SCI 211 or COMP_SCI 330 or COMP_SCI 339 or COMP_SCI 348 or COMP_SCI 349 or CS MS or CS PhD or Instructor permission","COMP_SCI 338-2":"COMP_SCI 338-1","COMP_SCI 338-3":"COMP_SCI 338-2","COMP_SCI 339-0":"Students must have completed ((COMP_SCI 214 or COMP_SCI 208) & (COMP_SCI 213 or COMP_ENG 205)), or CS MS or CS PhD in order to register for this course","COMP_SCI 340-0":"((COMP_SCI 208-0 or COMP_SCI 214-0) and (COMP_SCI 213-0 or COMP_ENG 205-0)) or CS MS or CS PhD","COMP_SCI 343-0":"((COMP_SCI 208-0 or COMP_SCI 214-0) and (COMP_SCI 213-0 or COMP_ENG 205-0)) or CS MS or CS PhD","COMP_SCI 346-0":"COMP_SCI 213 or (COMP_ENG 205 & 211) or MS CS/CE major or PhDs CS/CE major or permission of Instructor","COMP_SCI 349-0":"COMP_SCI 214; GEN_ENG 150-0 or GEN_ENG 151-0; GEN_ENG 205-1, GEN_ENG 206-1, GEN_ENG 241-0, or MATH 240-0; GEN_ENG 231-0, IEMS 201-0, IEMS 303-0, ELEC_ENG 302-0, STAT 210-0, MATH 310-1 (or COMP_SCI grad standing)","COMP_SCI 352-0":"Students must have completed COMP_SCI 211-0 and (COMP_SCI 208-0 or COMP_SCI 214-0) to enroll in this course","COMP_SCI 353-0":"(MATH 228-1 or MATH 230-1) and (GEN_ENG 205-1 or GEN_ENG 206-1 or GEN_ENG 241 or MATH 240) or CS MS or CS PhD or Instructor Permission","COMP_SCI 354-0":"COMP_SCI 213 or (COMP_ENG 205 & 211) or MS CS/CE major or PhDs CS/CE major or permission of Instructor","COMP_SCI 355-0":"Students must have completed COMP_SCI 213-0 and COMP_SCI 354-0 or COMP_SCI 213-0 and COMP_SCI 343-0 to enroll","COMP_SCI 358-0":"COMP_SCI 213 or (COMP_ENG 205 & 211) or MS CS/CE major or PhDs CS/CE major or permission of Instructor","COMP_SCI 362-0":"Students must have completed COMP_SCI 262-0 or 335-0 or 336-0 to enroll","COMP_SCI 368-0":"COMP_SCI 213 or CS/CE Graduate standing or Consent of Instructor","COMP_SCI 371-0":"COMP_SCI 348 or COMP_SCI 325, or equivalent experience with artificial intelligence","COMP_SCI 376-0":"Students must have taken COMP_SCI 208 or COMP_SCI 214-0 in order to register for this course","COMP_SCI 377-0":"Students must have taken COMP_SCI 376 or have received instructor permission","COMP_SCI 380-0":"COMP_SCI 211 and (COMP_SCI 208 or COMP_SCI 214) or MS CS or PhDs CS or PhD CS+LS or PhD TSB or permission of Instructor","COMP_SCI 381-0":"COMP_SCI 211 and (COMP_SCI 208 or COMP_SCI 214) or MS CS or PhDs CS or PhD CS+LS or PhD TSB or permission of Instructor","COMP_SCI 387-0":"COMP_SCI 213 and (COMP_SCI 208 or COMP_SCI 214) or CS MS or CS PhDs or Instructor permission","COMP_SCI 396-0":"(COMP_SCI 329 or COMP_SCI 330) and (COMP_SCI 348 or COMP_SCI349) or Instructor permission","COMP_SCI 407-0":"Student must have completed COMP_SCI 307-0 or be a COMP_SCI MS/PhD student to enroll","COMP_SCI 413-0":"(COMP_SCI 211 and (COMP_SCI 329 or COMP_SCI 330)) or CS MS or CS PhDs or Permission of Instructor","COMP_SCI 424-0":"COMP_SCI 321 or CS PhD or Permission Instructor","COMP_SCI 433-0":"COMP_SCI 346 or COMP_SCI 340 or COMP_ENG 346 or ELEC_ENG 326","COMP_SCI 437-0":"Undergraduates who have finished COMP_SCI 212 and COMP_SCI 336 (or equivalent) or MS CS or any PhD students. PhD's should request a permission number","COMP_SCI 439-0":"COMP_SCI 339 or permission of instructor/","COMP_SCI 445-0":"Students must have taken COMP_SCI 340-0 or COMP_SCI 345-0 or CS Graduate standing or Consent of Instructor","COMP_SCI 447-0":"Students must have completed COMP_SCI 371-0 or have permission from the instructor to enroll","COMP_SCI 449-0":"COMP_SCI 349 or CS PhD or Instructor permission","COMP_SCI 450-0":"Students must have completed COMP_SCI 340-0 or 343-0 or 354-0 or have permission from the instructor in order to register for this course","COMP_SCI 460-0":"CS Graduate Standing","COMP_SCI 461-0":"COMP_SCI 349 or permission of instructor","COMP_SCI 462-0":"Must be a COMP_SCI graduate student and have completed COMP_SCI 335-0 or 336-0 to enroll","COMP_SCI 468-0":"COMP_SCI 213 or CS/CE Graduate standing or Consent of Instructor","COMP_SCI 496-0":"CS Grad Standing OR undergrads that have completed COMP_SCI 335 or 336 OR have permission from the instructor","COMP_SCI 497-0":"COMP_SCI 340 or CS PhD or Instructor permission","COUN 481-5":"COUN 481-4 Pre-practicum; Co-requisite: COUN 480-7 Methods 2","CSD 496-0":"CSD 406","DANCE 201-0":"DANCE 101-1 or approval of instructor","DSGN 106-2":"Please try again during regular registration. Students must have completed DSGN 106-1","DSGN 384-1":"Students must have taken DSGN 106-1,2 or DSGN 208 to register for this course","EARTH 327-0":"Students must be a Graduate Student or has taken {MATH 226 or 235 and MATH (228-1 and 228-2) or (230-1 and 230-2) or (285-2 and 285-3) or (290-2 and 290-3) or (291-2 and 291-3)} or {MATH (281-1 and 281-2)}","EARTH 330-0":"Students must have completed EARTH 201 or ENVR_SCI 201 to enroll in this course","EARTH 344-0":"Completion of CHEM 132+142 or 152+162 or 172+182","EARTH 375-0":"EARTH 210-0 and EARTH 212-0 or EARTH 214-0 (or equivalent), or instructor permission. Or graduate student","ECON 307-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 308-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 309-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 310-2":"All students must have taken ECON 310-1 or MMSS 211-1 in order to enroll in this course","ECON 313-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 315-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 316-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 323-1":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 323-2":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 324-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 325-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 326-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 327-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 328-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 329-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 330-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 335-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 336-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 337-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 339-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 340-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 341-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 342-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 344-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 349-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 350-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 351-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 355-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 358-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 360-2":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 361-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 362-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 371-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 372-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 373-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 380-1":"All students must have taken ECON 310-1 or MMSS 211-1 in order to enroll in this course","ECON 381-1":"All students must have taken ECON 310-1 or MMSS 211-1 in order to enroll in this course","ECON 381-2":"All students must have taken ECON 310-1 or MMSS 211-1 in order to enroll in this course","ECON 383-0":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 398-1":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ECON 398-2":"Students must have taken ECON 310-1 or MMSS 211-1 and ECON 281 or ECON 381-1 or MATH 386-1 or IEMS 304 or STAT 350 to successfully enroll in this course","ELEC_ENG 225-0":"ELEC_ENG 221-0","ENGLISH 306-0":"ENGLISH 206-0, ENGLISH 207-0, ENGLISH 208-0, or Department consent","ENGLISH 307-0":"ENGLISH 206-0, ENGLISH 207-0, ENGLISH 208-0, or Department consent","ENGLISH 307-A":"Students must have taken & passed ENGLISH 207 to enroll","ENGLISH 308-0":"ENGLISH 206-0, ENGLISH 207-0, ENGLISH 208-0, or Department consent","ENGLISH 308-A":"Students must have taken & passed ENGLISH 208 to enroll","ENGLISH 309-0":"ENGLISH 206-0, ENGLISH 207-0, ENGLISH 208-0, or Department consent","ES_APPM 245-0":"GEN_ENG 205-1 or 206-1","FRENCH 111-1":"None or placed in the course by the French Language Placement Test","FRENCH 121-1":"Grade of at least C- in FRENCH 111-3 or FRENCH 115-2, or placed in the course by the French Language Placement Test","FRENCH 299-SA":"Students must have completed FRENCH 121-3, FRENCH 125-3, or FRENCH 201-0. Other students may register with instructor permission","FRENCH 307-0":"Students must have completed FRENCH 202-0 or a test score of 5 in AP French. Other students may register with instructor permission","GEN_ENG 211-0":"GEN_ENG 150, GEN_ENG 151 or COMP_SCI 150 (Programming), MATH 220-1 or equivalent","GEN_ENG 231-0":"GEN_ENG 150 or GEN_ENG 151, MATH 220-2. You may not enroll in both GEN_ENG 231-0 and GEN_ENG 241-0 during initial registration. This restriction will be removed after the initial registration period if capacity allows","GEN_ENG 231-SG":"GEN_ENG 231-0","GEN_ENG 241-0":"GEN_ENG 150 or GEN_ENG 151, MATH 220-2. You may not enroll in both GEN_ENG 231-0 and GEN_ENG 241-0 during initial registration. This restriction will be removed after the initial registration period if capacity allows","HEBREW 121-3":"HEBREW 121-2 or equivalent","HEBREW 216-0":"HEBREW 121-3 or permission of the instructor","HIND_URD 210-0":"Grade of at least C- in HIND_URD 121-3 or HIND_URD 125-2 or equivalent","HLTH_PRF 501-1":"Must be admitted to the Master of Science in Health Professions Education program or have instructor approval to enroll","HLTH_PRF 502-1":"Must be admitted to the Master of Science in Health Professions Education program or have instructor approval to enroll","HLTH_PRF 503-1":"Must be admitted to the Master of Science in Health Professions Education program or have instructor approval to enroll","HLTH_PRF 504-1":"Must be admitted to the Master of Science in Health Professions Education program or have instructor approval to enroll","IEMS 201-0":"MATH 218-2 or MATH 220-2 or equivalent","IEMS 294-0":"DSGN 106-1, DSGN 106-2, sophomore standing","IEMS 302-0":"prior completion of or concurrent enrollment in MATH 228-2. Add both classes to the shopping cart and submit together for successful registration","IEMS 303-0":"COMP_SCI 150-0, GEN_ENG 150-0, or GEN_ENG 151-0; IEMS 302-0; GEN_ENG 205-1, GEN_ENG 206-1, MATH 240-0 or GEN_ENG 241-0","IEMS 305-0":"IEMS 301-0 or IEMS 304-0 or equivalent","IEMS 308-0":"Students must have completed or be currently enrolled in IEMS 304 and COMP_SCI 317 to enroll in this course","IEMS 310-0":"IEMS 201-0, IEMS 302-0, or GEN_ENG 231-0","IEMS 313-0":"COMP_SCI 110-0, COMP_SCI 111-0, COMP_SCI 150-0, GEN_ENG 150-0, or GEN_ENG 151-0, GEN_ENG 205-1, GEN_ENG 206-1, MATH 240-0 or GEN_ENG 241-0; MATH 228-1","IEMS 315-0":"COMP_SCI 150-0, GEN_ENG 150-0, or GEN_ENG 151-0; IEMS 302-0; GEN_ENG 231-0 or IEMS 303-0 (can be concurrent); GEN_ENG 241-0 or ES_APPM 245-0","IEMS 317-0":"IEMS 303-0; IEMS 315-0","IEMS 352-0":"IEMS 304-0 and COMP_SCI 217-0","IEMS 365-0":"COMP_SCI 150-0, GEN_ENG 150-0, or GEN_ENG 151-0; IEMS 201-0, IEMS 303-0 or GEN_ENG 231-0; One of IEMS 313-0, IEMS 310-0, CIV_ENV 304-0, MATH 368-0 or COMP_SCI 336-0 (with instructor approval)","IEMS 370-0":"CIV_ENV 205-0 or equivalent","IEMS 373-0":"CIV_ENV 205-0, IEMS 302-0, IEMS 303-0 or equivalents, or consent of instructor","IEMS 382-0":"IEMS 201-0, IEMS 303-0, or GEN_ENG 231-0; IEMS 310-0 or IEMS 313-0","IEMS 385-0":"IEMS 201-0, IEMS 303-0, or GEN_ENG 231-0; IEMS 310-0 or IEMS 313-0","IEMS 394-0":"Students must have taken IEMS 302, 303, 304, 313, 315, and 317 in order to register for this course","IMC 302-0":"ECON 202, approved Statistics course","IMC 306-0":"Students must have completed IMC 303-0 in order to successfully enroll into the course","IMC 309-0":"Perquisite: Students must have completed IMC 301, IMC 302, and IMC 303 to enroll","IMC 310-0":"Students must have completed IMC 303-0 in order to successfully enroll into the course","IMC 311-0":"Perquisite: Students must have completed IMC 301, IMC 302, and IMC 303 to enroll","IMC 312-0":"Perquisite: Students must have completed IMC 301, IMC 302, and IMC 303 to enroll","IMC 313-0":"Perquisite: Students must have completed IMC 301, IMC 302, and IMC 303 to enroll","IMC 314-0":"Perquisite: Students must have completed IMC 301, IMC 302, and IMC 303 to enroll","IMC 421-0":"IMC 420: Brand Management Foundations","IMC 424-0":"IMC 420: Brand Management Foundations","IMC 426-0":"IMC 420: Brand Management Foundations","IMC 427-0":"IMC 420: Brand Management Foundations","IMC 428-0":"IMC 420: Brand Management Foundations","IMC 442-0":"IMC 440: Strategic Management Foundations","IMC 449-0":"IMC 440: Strategic Management Foundations","IMC 451-0":"IMC 450: Media Foundations","IMC 452-0":"IMC 450: Media Foundations","IMC 453-0":"IMC 450: Media Foundations","IMC 462-0":"IMC 460: Data Science Foundations","IMC 463-0":"IMC 460 AND IMC 461","IMC 465-0":"Students must have completed IMC 462 to enroll","IMC 466-0":"Students must have completed IMC 463 to enroll","IMC 467-0":"Students must have taken MEM 411-1 or IMC 460-0 in order to register for IMC 467-0","IMC 490-0":"IMC 420: Brand Management Foundations","INTL_ST 383-2":"INTL_ST 383-1","JAZZ_ST 332-2":"JAZZ_ST 332-1","JAZZ_ST 332-3":"JAZZ_ST 332-2","JAZZ_ST 333-2":"Students must have completed JAZZ_ST 333-1 to enroll","JOUR 302-0":"JOUR 201-1, 201-2, and Medill sophomore, Junior, or Senior Standing","JOUR 319-0":"Medill sophomore standing","JOUR 320-0":"To register for this course, you must have taken at least one of the following courses: JOUR 301, JOUR 301-1, JOUR 319, JOUR 352, JOUR 384, JOUR 390 (JOURneys: New York City & the), or JOUR 390 (JOURneys: Exploring Asian Amer)","JOUR 321-0":"To register for this course, you must have taken at least one of the following courses: JOUR 301, JOUR 301-1, JOUR 319, JOUR 352, JOUR 384, JOUR 390 (JOURneys: New York City & the), or JOUR 390 (JOURneys: Exploring Asian Amer)","JOUR 322-0":"JOUR 301-0","JOUR 360-0":"JOUR 201-1, 201-2, and Medill sophomore, Junior, or Senior Standing","JOUR 368-0":"JOUR 301-0","JOUR 371-0":"JOUR 301-0","JOUR 372-0":"JOUR 301-0","JOUR 374-0":"JOUR 301-0","JOUR 376-0":"JOUR 201-1, 201-2, and Medill sophomore, Junior, or Senior Standing","JOUR 383-0":"JOUR 201-1, 201-2, and Medill sophomore, Junior, or Senior Standing","JOUR 390-0":"JOUR 201-1, 201-2, and Medill sophomore, Junior, or Senior Standing","KOREAN 125-3":"Grade of at least C- in KOREAN 125-2 or equivalent","LEGAL_ST 331-0":"POLI_SCI 220-0 or POLI_SCI 230-0","LING 327-0":"consent of instructor","LING 452-0":"LING 350 or LING Grads","MATH 218-MG-1":"Concurrent enrollment in MATH 218-1","MATH 220-2":"MATH 218-2 or MATH 220-1","MATH 228-1":"MATH 218-3 or MATH 220-2","MATH 228-2":"MATH 228-1 or MATH 230-1 or MATH 281-1 or MATH 285-2 or MATH 290-2 or MATH 291-2 or ES_APPM 252-1","MATH 230-1":"Students must have completed MATH 218-3 or MATH 220-2","MATH 230-2":"MATH 228-1 or MATH 230-1 or MATH 281-1 or MATH 285-2 or MATH 290-2 or MATH 291-2 or ES_APPM 252-1","MATH 235-0":"MATH 218-3 or MATH 220-2, and MATH 228-1 or MATH 230-1 or MATH 281-1 or MATH 285-2 or MATH 290-2 or MATH 291-2 or ES_APPM 252-1","MATH 240-0":"Students must have completed MATH 230-1 (or equivalent)","MATH 250-0":"MATH 226-0 or MATH 281-2; and MATH 228-2 or MATH 230-2 or MATH 281-2 or MATH 285-3 or MATH 290-3 or MATH 291-3 or ES_APPM 252-2; and MATH 240-0 or MATH 285-1 or MATH 290-1 or MATH 291-1 or GEN_ENG 205-1 or GEN_ENG 206-1","MATH 300-0":"Students must have completed MATH 240-0 (or equivalent). Other students may register with department permission","MATH 306-0":"Students must have completed MATH 240-0 (or equivalent). Other students may register with department permission","MATH 320-1":"Registration is restricted to undergraduate students who have completed MATH 300-0 or MATH 291-3","MATH 325-0":"Students must have completed MATH 230-2 (or equivalent) and MATH 240-0 (or equivalent)","MATH 327-0":"Students must have completed MATH 230-2 (or equivalent) and MATH 240-0 (or equivalent)","MATH 331-1":"Students must have completed MATH 291-3. Students who have completed MATH 300-0 may enroll with department permission","MATH 342-0":"Students must have completed MATH 230-2 (or equivalent) and MATH 240-0 (or equivalent)","MATH 351-0":"Students must have completed MATH 250-0 (or equivalent) or MATH 281-3","MATH 354-0":"Students must have completed MATH 240-0 (or equivalent)","MATH 360-1":"Students must have completed MATH 290-3 or MATH 291-3","MATH 364-0":"MATH 320-1 or MATH 321-1","MATH 365-0":"MATH 240-0 or MATH 281-3 or MATH 285-1 or MATH 290-1 or MATH 291-1 or GEN_ENG 205-1 or GEN_ENG 206-1","MATH 366-0":"completed or currently enrolled in a course in the equivalency group containing MATH 240-0 AND completed or currently enrolled in a course in the equivalency group containing MATH 310-1","MATH 368-0":"completed or currently enrolled in MATH 291-3; OR MATH 300-0 and completed or currently enrolled in a course in the equivalency group containing MATH 230-2","MATH 420-1":"MATH 410-1,2,3 or permission","MAT_SCI 314-0":"CHEM 132-0, CHEM 152-0, or CHEM 172-0; MATH 228-1 or MATH 230-1; GEN_ENG 150; PHYSICS 135-1 to be taken concurrently","MAT_SCI 315-0":"MAT_SCI 201-0 or MAT_SCI 301-0 or equivalent and MAT_SCI 314-0 or equivalent","MAT_SCI 316-2":"Students must have completed MAT_SCI 316-1 or have instructor consent to enroll","MAT_SCI 318-0":"MAT_SCI 201 or 301 or faculty consent","MAT_SCI 332-0":"MAT_SCI 316-1; MAT_SCI 316-2 (may be taken concurrently) or consent of instructor","MAT_SCI 345-0":"MAT_SCI 201-0 or MAT_SCI 301-0 or or MAT_SCI Graduate or MAT_SCI PhD or consent of instructor","MAT_SCI 380-0":"MAT_SCI 351-1 or equivalent MAT_SCI 301-0 or or MAT_SCI Graduate or MAT_SCI PhD","MAT_SCI 390-1":"MAT_SCI 316-2 and MAT_SCI 351-2 or consent of instructor","MAT_SCI 390-2":"MAT_SCI 316-2 and MAT_SCI 351-2; MAT_SCI 390-1","MAT_SCI 391-0":"MAT_SCI 201 or 301 or faculty consent","MAT_SCI 437-0":"MAT_SCI 331-0 and MAT_SCI 332-0 or Senior Undergraduates or Graduate Students","MCI 302-0":"Admission to MCI Certificate Program","MCI 304-0":"Admission to the MCI Certificate program","MECH_ENG 222-0":"MATH 220-2 and GEN_ENG 205-3","MECH_ENG 224-0":"GEN_ENG 205-1, GEN_ENG 206-1, GEN_ENG 150-0 or GEN_ENG 151-0","MECH_ENG 301-0":"MECH_ENG 224-0, COMP_SCI 110-0, COMP_SCI 111-0, COMP_SCI 150-0, GEN_ENG 150-0, GEN_ENG 151-0, or some programming experience and consent of instructor","MECH_ENG 302-0":"COMP_SCI 211 or MECH_ENG 224 or Permission of Instructor","MECH_ENG 434-0":"Students must have completed MECH_ENG 241-0 or have instructor consent for an equivalent course to enroll","MECH_ENG 455-0":"Students must have completed MECH_ENG 314-0 or have received permission from the instructor to enroll","MENA 412-2":"Please try again during regular registration. Students must have taken MENA 412-1 to register for this course","MENA 412-3":"Please try again during regular registration. Students must have taken MENA 412-1 and 412-2 to register for this course","MENA 415-0":"MENA 412-3","MSDS 422-DL":"MSDS 400 & 401","MSDS 455-DL":"MSDS 400 & 401","MSDS 457-DL":"MSDS 400 & 401","MSDS 492-DL":"MSDS 400 & 401","MS_ED 407-2":"MS_ED 407-1","MS_ED 485-0":"MS_ED 475-0","MS_ED 486-0":"MS_ED 476-0","MS_ED 487-0":"MS_ED 477-0","MS_ED 488-0":"MS_ED 478-0","MS_FT 413-0":"MS_FT 411-0","MS_FT 413-6":"MS_FT 411-6","MS_FT 481-3":"MS_FT 481-2 Internship in Marriage & Family Therapy","MS_FT 481-7":"MS_FT 481-6 Internship in Marriage and Family Therapy 1","MS_FT 481-8":"MS_FT 481-6 Internship in Marriage and Family Therapy 1 and MS_FT 481-7 Internship in Marriage and Family Therapy 2","MS_FT 482-6":"MS_FT 480-6 Pre-practicum, and MS_FT 481-6 Internship in Marital & Family Therapy","MS_FT 482-7":"MS_FT 482-6 Advanced Internship in Marriage and Family Therapy 1","MS_FT 482-8":"MS_FT 482-7 Advanced Internship in Marriage and Family Therapy 2","MS_FT 496-6":"Must have passed MS_FT 495-6 to enroll in this course","MUSIC_ED 238-0":"Students must have completed MUSIC_ED 237-0 to register for this course","MUSIC_ED 366-0":"Must be 3rd year and above. Co-registration requirement in MUSIC_ED 314-0","MUS_COMP 314-3":"Composition PhD student or MUS_COMP 314-1 & MUS_COMP 314-2, or consent of instructor","MUS_TECH 321-0":"Students must have completed MUS_TECH 300-0 to enroll","MUS_TECH 322-0":"Students must have completed MUS_TECH 300-0 to enroll","MUS_TECH 340-0":"Students must have completed MUS_TECH 300-0 to enroll","NEUROSCI 202-0":"BIOL_SCI 201-0 (or evidence of placement into BIOL_SCI 239-0 or a score of 5 on Biology AP test)","NEUROSCI 304-0":"Students must have completed NEUROSCI 202-0 or NEUROSCI 311-0 or BIOL_SCI 302-0","NEUROSCI 308-0":"Students must have completed NEUROSCI 202-0 or NEUROSCI 311-0 or BIOL_SCI 302-0","NEUROSCI 340-0":"NEUROSCI 202-0 and NEUROSCI 206-0; or NEUROSCI 311-0 and NEUROSCI 206-0; or BIOL_SCI 302-0","NEUROSCI 350-0":"NEUROSCI 202-0 or NEUROSCI 311-0 or BIOL_SCI 302-0; and consent of instructor","NEUROSCI 359-0":"NEUROSCI 202-0 and NEUROSCI 206-0; or NEUROSCI 311-0 and NEUROSCI 206-0; or BIOL_SCI 302-0","NEUROSCI 365-0":"Students must have completed NEUROSCI 202-0 or NEUROSCI 311-0 or BIOL_SCI 302-0","NEUROSCI 366-0":"MATH 220-2 or equivalent or graduate standing. Undergraduates must hold at least sophomore status","NEUROSCI 368-0":"BIOL_SCI 337-0, BMD_ENG 220-0, CSD 304-0, ES-ES_APPM 375-1, IEMS 201-0, PSYCH 201-0, STAT 202-0, STAT 210-0, or STAT 383-0 and either: NEUROSCI 202-0 and NEUROSCI 206-0; or NEUROSCI 311-0 and NEUROSCI 206-0; or BIOL_SCI 302-0","NEUROSCI 371-0":"Students must have completed NEUROSCI 202-0 or NEUROSCI 311-0 or BIOL_SCI 302-0","NEUROSCI 390-0":"BIOL_SCI 337-0, BMD_ENG 220-0, CSD 304-0, ES-ES_APPM 375-1, IEMS 201-0, PSYCH 201-0, STAT 202-0, STAT 210-0, or STAT 383-0 and either: (NEUROSCI 202-0 and NEUROSCI 206-0); or (NEUROSCI 311-0 and NEUROSCI 206-0); or BIOL_SCI 302-0","PBC 440-0":"BIOL_SCI 203-0 or BIOL_SCI 241-0 or EARTH 212-0 or BIOL_SCI 339-0 or PBC Graduate student standing or permission of instructor","PHIL 351-0":"Students must have completed either PHIL 250 or MATH 300 in order to enroll in this course","PHIL 372-1":"Junior Status in the Brady Scholars Program","PHIL 372-2":"Junior Status in the Brady Scholars Program","PHYSICS 135-1":"MATH 220-1, MATH 220-2; MATH 230-1 OR MATH 290-1 OR MATH 291-1 (may be taken concurrently)","PHYSICS 135-2":"Students must have taken PHYSICS 135-1 OR PHYSICS 125-1 OR PHYSICS 140-1 OR [GEN_ENG 205-2 AND 205-3] OR [GEN_ENG 206-2 AND 206-3] to register for this class. Co-Requisite: Students must also register for PHYSICS 136-2. Add both classes to the shopping cart and submit together for successful registration","PHYSICS 135-3":"Students must have taken PHYSICS 135-2 or PHYSICS 125-2 or PHYSICS 140-2 to register for this class. Co-Requisite: Students must also register for PHYSICS 136-3. Add both classes to the shopping cart and submit together for successful registration","PHYSICS 140-1":"MATH 220-1, MATH 220-2; concurrent enrollment in PHYSICS 126-1 and MATH 230-1","PHYSICS 140-2":"PHYSICS 140-1, PHYSICS 126-1; concurrent enrollment in PHYSICS 126-2","PHYSICS 140-3":"PHYSICS 140-2, PHYSICS 126-2; concurrent enrollment in PHYSICS 126-3","PHYSICS 211-0":"PHYSICS 135-1, PHYSICS 140-1, or equivalent; MATH 230-1 or equivalent","PHYSICS 239-0":"PHYSICS 135-1, PHYSICS 135-2, and PHYSICS 135-3 or equivalent; MATH 240-0; MATH 250-0 or PHYSICS 250-0, which may be taken concurrently","PHYSICS 250-0":"PHYSICS 135-1 or PHYSICS 140-1, MATH 230-1, MATH 240-0, or equivalents","PHYSICS 312-0":"MATH 230-1, MATH 230-2, MATH 240-0, and PHYSICS 250-0 or MATH 250-0, or equivalents","PHYSICS 330-1":"PHYSICS 135-1 or equivalent and MATH 230-2 and MATH 240-0; PHYSICS 250-0 or MATH 250-0 or equivalent","PHYSICS 330-2":"PHYSICS 330-1 or equivalent; PHYSICS 250-0 or MATH 250-0 or equivalent","PHYSICS 332-0":"PHYSICS 135-1, PHYSICS 135-2, and PHYSICS 135-3; PHYSICS 125-3 or PHYSICS 239-0 (concurrent registration allowed)","PHYSICS 333-1":"PHYSICS 135-1, PHYSICS 135-2, and PHYSICS 135-3; MATH 230-2; PHYSICS 250-0 or MATH 250-0 or equivalent","PHYSICS 333-2":"PHYSICS 333-1; MATH 230-2; PHYSICS 250-0 or MATH 250-0 or equivalent","PHYSICS 339-1":"PHYSICS 135-1, PHYSICS 135-2, PHYSICS 135-3, PHYSICS 239-0, PHYSICS 330-1, MATH 240-0 or second-year standing in ISP","PHYSICS 339-2":"PHYSICS 339-1; second-year standing in ISP or PHYSICS 250-0 or MATH 250-0 and MATH 351-0","PHYSICS 352-0":"PHYSICS 135-1, PHYSICS 135-2, and PHYSICS 135-3 or equivalent; PHYSICS 250-0 or MATH 250-0 or equivalent (concurrent enrollment is allowed); COMP_SCI 110-0 or equivalent prior programming experience","PIANO 328-2":"Students must have completed PIANO 328-1 to register for this course","PIANO 328-3":"Students must have completed PIANO 328-2 to register for this course","POLI_SCI 385-0":"POLI_SCI 220-0, POLI_SCI 240-0, or POLI_SCI 250-0","PORT 210-0":"for Portuguese section: PORT 201-0, PORT 202-0, or sufficient score on placement exam. Prerequisite for English section: none","PROJ_MGT 498-5A":"PROJ_MGT 401-5 Professional Communication Practices in Project Management","PROJ_MGT 498-5B":"PROJ_MGT 498-5A, Capstone I","PSYCH 205-0":"REQ: To register, students must have completed PSYCH 201 with a C- or higher, STAT 202 with a B or higher, STAT 210 with a B or higher, or have AP credit (score of 5) for STAT 202. No first-year students","PSYCH 301-0":"To register, students must have completed PSYCH 201 with a C- or higher, STAT 210 with a B or higher, or have AP credit (score of 5) for STAT 210","PSYCH 328-0":"PSYCH 221-0 or NEUROSCI 206-0","PSYCH 336-0":"a course in cognition and/or neuroscience, or instructor permission based on a strong background in neurobiology and/or physics; PSYCH 301-0 strongly recommended","PSYCH 364-0":"Students must complete PSYCH 301-0 before taking this course","PSYCH 365-0":"Students must complete PSYCH 301-0 before taking this course","PSYCH 366-0":"PSYCH 301-0, PSYCH 213-0","PSYCH 367-0":"Students must complete PSYCH 301-0 before taking this course","PSYCH 369-0":"PSYCH 301-0; PSYCH 213-0, PSYCH 215-0, or PSYCH 303-0","PSYCH 370-0":"Students must complete PSYCH 301-0 before taking this course","PSYCH 372-0":"Students must complete PSYCH 301-0 before taking this course","PSYCH 373-0":"Students must complete PSYCH 301-0 before taking this course","PSYCH 374-0":"PSYCH 301-0; and PSYCH 228-0, PSYCH 328-0, or PSYCH 336-0","PSYCH 375-0":"Students must complete PSYCH 301-0 before taking this course","PSYCH 378-0":"Students must complete PSYCH 301-0 before taking this course","PSYCH 380-0":"Students must complete PSYCH 301-0 before taking this course","PSYCH 381-0":"PSYCH 301-0, PSYCH 244-0 strongly recommended","PSYCH 383-0":"Students must complete PSYCH 301-0 before taking this course","PSYCH 387-0":"PSYCH 301-0","PSYCH 390-0":"Students must complete PSYCH 301-0 before taking this course","PSYCH 391-0":"Students must complete PSYCH 301-0 before taking this course","PSYCH 392-0":"Students must complete PSYCH 301-0 before taking this course","PSYCH 397-1":"Students must complete PSYCH 301-0 before taking this course","PSYCH 397-2":"Students must complete PSYCH 301-0 before taking this course","PSYCH 398-1":"Students must complete PSYCH 301-0 before taking this course","PSYCH 398-2":"Students must complete PSYCH 301-0 before taking this course","PSYCH 398-3":"Students must complete PSYCH 301-0 before taking this course","PUB_HLTH 306-0":"PUB_HLTH 301 Behavior Society and Health","PUB_HLTH 370-3":"PUB_HLTH 370-1 Seminar in Maternal Child Health (Fall quarter) and PUB_HLTH 370-2 Seminar in Maternal Child Health (Winter Quarter)","PUB_HLTH 451-0":"PUB_HLTH 351-0 Introduction to Implementation Science","PUB_HLTH 452-0":"PUB_HLTH 351-0 Introduction to Implementation Science","PUB_HLTH 460-1":"BIOSTAT 306 or previous R experience with approval from instructor","REGLAW 902-0":"Students must have taken and passed REGLAW 901-0 Legal & Regulatory Process in order to enroll into this course","RTVF 368-1":": RTVF 190-0 and either THEATRE 171-0 or THEATRE 273-1","RTVF 369-0":"RTVF 190-0","RTVF 382-0":"RTVF 380-0 or RTVF 381-0","RTVF 476-0":"Student must have completed EITHER RTVF 380-0 or 381-0 to enroll","SESP 116-0":"Students must have completed SESP 251-0 to enroll","SESP 295-1":"Prior to 2024-2025 students will need to have completed SESP 195-0 3 times to enroll. 2024-2025 and beyond, students will need to have completed SESP 195-1, 195-2, 195-3 to enroll","SESP 295-2":"Prior to 2024-2025 students will need to have completed SESP 195-0 3 times to enroll. 2024-2025 and beyond, students will need to have completed SESP 195-1, 195-2, 195-3 to enroll","SOCIOL 401-2":"Sociology/MORS-Soc PhD Students Students must have completed or be currently enrolled in SOCIOL 401-1 or have received the intstructors permission to register for this class","SOC_POL 330-0":"ECON 281 and ECON 310-1 or SESP 310 for SESP students. SESP students must register for SOC_POL 330-0","SPANISH 190-SA":"SPANISH 101-3, SPANISH 115-2, SPANISH 121-3, SPANISH 125-0, or SPANISH 127-0","SPANISH 191-SA":"SPANISH 101-3, SPANISH 115-2, SPANISH 121-3, SPANISH 125-0, or SPANISH 127-0","SPANISH 199-SA":"SPANISH 101-3, SPANISH 115-2, SPANISH 121-3, SPANISH 125-0, or SPANISH 127-0","SPANISH 201-0":"Second language learners currently enrolled in or who have taken and passed SPANISH 121-3 or SPANISH 125-0, OR have an AP score of 4, OR sufficient score on the Spanish Language Placement Exam. ANTIREQ: SPANISH 200/201","SPANISH 202-0":"Students must currently be enrolled in or have taken and passed SPANISH 200-0 or SPANISH 201-0, OR have an AP score of 5, OR sufficient score on the Spanish Language Placement Exam","SPANISH 202-SA":"Students must currently be enrolled in or have taken and passed SPANISH 200-0 or SPANISH 201-0, OR have an AP score of 5, OR sufficient score on the Spanish Language Placement Exam","SPANISH 204-0":"Second language learners currently enrolled in or who have passed SPANISH 201-0, OR have an AP score of 5, OR a sufficient score on the Spanish Language Placement Exam","SPANISH 205-0":"Students must currently be enrolled in or have taken and passed SPANISH 200-0 or SPANISH 201-0, OR have an AP score of 5, OR sufficient score on the Spanish Language Placement Exam","SPANISH 206-0":"Students must currently be enrolled in or have taken and passed SPANISH 200-0 or SPANISH 201-0, OR have an AP score of 5, OR sufficient score on the Spanish Language Placement Exam","SPANISH 208-0":"Students must currently be enrolled in or have taken and passed SPANISH 200-0 or SPANISH 201-0, OR have an AP score of 5, OR sufficient score on the Spanish Language Placement Exam","SPANISH 210-0":"(may be taken concurrently): SPANISH 200-0 or SPANISH 204-0","SPANISH 215-SA":"SPANISH 200-0 or SPANISH 201-0","SPANISH 250-0":"SPANISH 200-0 or SPANISH 204-0 (may be taken concurrently), OR have an AP score of 5 for heritage students, OR an AP of 5 in both the Spanish Language and Literature exams for non-heritage students, OR sufficient score on the Spanish Language Placement Exam","SPANISH 251-0":"SPANISH 200-0 or SPANISH 204-0 (may be taken concurrently), OR have an AP score of 5 for heritage students, OR an AP of 5 in both the Spanish Language and Literature exams for non-heritage students, OR sufficient score on the Spanish Language Placement Exam","SPANISH 260-0":"SPANISH 200-0 or SPANISH 204-0 (may be taken concurrently), OR have an AP score of 5 for heritage students, OR an AP of 5 in both the Spanish Language and Literature exams for non-heritage students, OR sufficient score on the Spanish Language Placement Exam","SPANISH 261-0":"SPANISH 200-0 or SPANISH 204-0 (may be taken concurrently), OR have an AP score of 5 for heritage students, OR an AP of 5 in both the Spanish Language and Literature exams for non-heritage students, OR sufficient score on the Spanish Language Placement Exam","SPANISH 280-0":"Students must currently be enrolled in or have taken and passed SPANISH 200-0 or SPANISH 204-0, OR have an AP score of 5 for heritage students, OR an AP of 5 in both the Spanish Language and Literature exams for non-heritage students, OR sufficient score on the Spanish Language Placement Exam","SPANISH 281-0":"Students must currently be enrolled in or have taken and passed SPANISH 200-0 or SPANISH 204-0, OR have an AP score of 5 for heritage students, OR an AP of 5 in both the Spanish Language and Literature exams for non-heritage students, OR sufficient score on the Spanish Language Placement Exam","SPANISH 301-0":"Students must currently be enrolled in or have taken and passed SPANISH 200-0 or SPANISH 204-0, OR have an AP score of 5 for heritage students, OR an AP of 5 in both the Spanish Language and Literature exams for non-heritage students, OR sufficient score on the Spanish Language Placement Exam","SPANISH 301-SA":"Students must currently be enrolled in or have taken and passed SPANISH 200-0 or SPANISH 204-0, OR have an AP score of 5 for heritage students, OR an AP of 5 in both the Spanish Language and Literature exams for non-heritage students, OR sufficient score on the Spanish Language Placement Exam","SPANISH 302-0":"Must be enrolled in or have passed SPANISH 200-0 or SPANISH 204-0, have an AP score of 5 for heritage students, an AP of 5 in the Spanish Language and Literature exams for non-heritage students, or Spanish Language Placement Exam score","SPANISH 302-SA":"Students must currently be enrolled in or have taken and passed SPANISH 200-0 or SPANISH 204-0, OR have an AP score of 5 for heritage students, OR an AP of 5 in both the Spanish Language and Literature exams for non-heritage students, OR sufficient score on the Spanish Language Placement Exam","SPANISH 349-0":"1 course from SPANISH 250-0, SPANISH 251-0, SPANISH 260-0, or SPANISH 261-0","SPANISH 350-0":"1 course from SPANISH 250-0, SPANISH 251-0, SPANISH 260-0, or SPANISH 261-0","SPANISH 360-0":"1 course from SPANISH 250-0, SPANISH 251-0, SPANISH 260-0, or SPANISH 261-0","SPANISH 364-0":"1 course from SPANISH 250-0, SPANISH 251-0, SPANISH 260-0, or SPANISH 261-0","SPANISH 380-SA":"1 course from SPANISH 250-0, SPANISH 251-0, SPANISH 260-0, or SPANISH 261-0","STAT 228-0":"MATH 218-3 or MATH 220-2, and MATH 228-1 or MATH 230-1 or MATH 281-1 or MATH 285-2 or MATH 290-2 or MATH 291-2 or ES_APPM 252-1","STAT 301-1":"STAT 201-0 or GEN_ENG 150-0 or GEN_ENG 151-0 and STAT 202-0 or STAT 210-0 or STAT 232-0 or PSYCH 201-0 or IEMS 201-0 or IEMS 303-0","STAT 302-0":"STAT 201-0 or GEN_ENG 150-0 or GEN_ENG 151-0 and STAT 202-0 or STAT 210-0 or STAT 232-0 or PSYCH 201-0 or IEMS 201-0 or IEMS 303-0","STAT 303-1":"STAT 201-0 or GEN_ENG 150-0 or GEN_ENG 151-0 and STAT 202-0 or STAT 210-0 or STAT 232-0 or PSYCH 201-0 or IEMS 201-0 or IEMS 303-0","STAT 304-0":"STAT 201-0 or GEN_ENG 150-0 or GEN_ENG 151-0 and STAT 202-0 or STAT 210-0 or STAT 232-0 or PSYCH 201-0 or IEMS 201-0 or IEMS 303-0","STAT 305-0":"STAT 201-0 or GEN_ENG 150-0 or GEN_ENG 151-0 and STAT 202-0 or STAT 210-0 or STAT 232-0 or PSYCH 201-0 or IEMS 201-0 or IEMS 303-0","STAT 320-2":"To enroll students must have completed STAT 320-1 or STAT 383-0 or MATH 310-1 or MATH 311-1 or MATH 314-0 or MATH 385-0 or ELEC_ENG 302-0 or IEMS 202-0","STAT 328-0":"Students must have completed STAT 320-2 and STAT 350-0 or ECON 381-2 or MATH 386-2 to enroll in this course","STAT 348-0":"STAT 320-2 and MATH 240-0 or MATH 285-1 or MATH 281-3 or MATH 290-1 or MATH 291-1 or GEN_ENG 205-1 or GEN_ENG 206-1. Co-requisite STAT 350-0","STAT 350-0":"STAT 201-0 or GEN_ENG 150-0 or GEN_ENG 151-0 and STAT 202-0 or 210-0 or 232-0 or PSYCH 201-0 or IEMS 201-0 or 303-0. Co-requisite: STAT 320-1 or 383-0 or MATH 310-1 or 311-1 or 314-0 or 385-0 or ELEC_ENG 302-0 or IEMS 302-0","STAT 351-0":"STAT 320-1 or STAT 383-0 or MATH 310-1 or MATH 311-1 or MATH 314-0 or MATH 385-0 or ELEC_ENG 302-0 or IEMS 302-0 or equivalent","STAT 353-0":"STAT 350-0 or ECON 381-2 or MATH 386-2 and STAT 320-2 or STAT 420-2 or MATH 310-2","STAT 360-0":"Students must have completed STAT 320-2 and MATH 240-0 to enroll in this course","STAT 362-0":"STAT 301-3 or STAT 303-3","STAT 363-0":"STAT 362-0, COMP_SCI 349-0, or STAT 415-0; and MATH 240-0/281-3/285-1/290-1/291-1, GEN_ENG 205-1, or GEN_ENG 206-1; and STAT 320-1, STAT 383-0, MATH 310-1/311-1/314-0/385-0, ELEC_ENG 302-0, IEMS 302-0, or equivalent","STAT 364-0":"STAT 362-0, COMP_SCI 349-0, or STAT 415-0; and MATH 240-0/281-3/285-1/290-1/291-1, GEN_ENG 205-1, or GEN_ENG 206-1; and STAT 320-1, STAT 383-0, MATH 310-1/311-1/314-0/385-0, ELEC_ENG 302-0, IEMS 302-0, or equivalent","STAT 450-2":"STAT 450-1 Advanced Statistical Theory 1","STRINGS 316-2":"Students must have completed STRINGS 316-1 to register for this course","TEACH_ED 312-0":"completion of TEACH_ED 311","TEACH_ED 385-0":"TEACH_ED 375-0","TEACH_ED 386-0":"TEACH_ED 376-0","TEACH_ED 387-0":"TEACH_ED 377-0","TEACH_ED 388-0":"TEACH_ED 378-0 or MS_ED 478-0","THEATRE 271-0":"THEATRE 171-0","THEATRE 319-0":"consent of instructor","THEATRE 330-0":"THEATRE 231-0 or THEATRE 333-1","THEATRE 372-0":"THEATRE 170-0 Voice for Performance","THEATRE 375-0":"Students must have completed THEATRE 373-3 to enroll","THEATRE 376-0":"Students must have completed RTVF 190 and either THEATRE 171 of THEATRE 237-1","THEATRE 377-0":"Students must have completed RTVF 190-0 to enroll"};var kr={"CHEM 210-1":"CHEM 215-1","CHEM 210-2":"CHEM 215-2","CHEM 210-3":"CHEM 215-3","CHEM 210-A":"CHEM 215-A","CHEM 210-B":"CHEM 215-B","CHEM 210-C":"CHEM 215-C","CHEM 212-1":"CHEM 217-1","CHEM 212-2":"CHEM 217-2","CHEM 212-3":"CHEM 217-3","CHEM 232-1":"CHEM 237-1","CHEM 232-2":"CHEM 237-2","BIOL_SCI 215-0":"BIOL_SCI 201-0","BIOL_SCI 215-CN":"BIOL_SCI 201-CN","BIOL_SCI 219-0":"BIOL_SCI 202-0","BIOL_SCI 219-CN":"BIOL_SCI 202-CN","BIOL_SCI 217-0":"BIOL_SCI 310-0","BIOL_SCI 220-0":"BIOL_SCI 233-0","BIOL_SCI 221-0":"BIOL_SCI 232-0","BIOL_SCI 222-0":"BIOL_SCI 234-0","BIOL_SCI 308-0":"BIOL_SCI 301-0","MATH 212-0":"MATH 218-1","MATH 213-0":"MATH 218-2","MATH 214-0":"MATH 218-3","MATH 220-0":"MATH 220-1","MATH 224-0":"MATH 220-2","MATH 230-0":"MATH 230-1","MATH 234-0":"MATH 230-2","ENVR_SCI 201-0":"EARTH 210-0","ENVR_SCI 202-0":"EARTH 212-0","ENVR_SCI 203-0":"EARTH 213-0","EARTH 201-0":"EARTH 214-0","EARTH 202-0":"EARTH 215-0","EARTH 203-0":"EARTH 210-0","PSYCH 205-0":"PSYCH 301-0","PSYCH 204-0":"PSYCH 213-0","PSYCH 212-0":"PSYCH 221-0","PSYCH 218-0":"PSYCH 244-0","PSYCH 245-0":"PSYCH 345-0","PSYCH 314-0":"PSYCH 350-0","PSYCH 316-0":"PSYCH 330-0","PSYCH 335-0":"PSYCH 373-0","PSYCH 357-0":"PSYCH 390-0","PSYCH 358-0":"PSYCH 391-0","PSYCH 359-0":"PSYCH 392-0","PSYCH 361-0":"PSYCH 328-0","PSYCH 363-0":"PSYCH 378-0","PSYCH 376-0":"PSYCH 308-0","PSYCH 377-0":"PSYCH 367-0","ASTRON 220-0":"ASTRON 220-1","ASTRON 425-0":"ASTRON 325-0","COMP_SCI 214-0":"COMP_SCI 208-0","COMP_SCI 111-0":"COMP_SCI 180-0","COMP_SCI 325-1":"COMP_SCI 325-0","EECS 317-0":"COMP_SCI 217-0","IEMS 202-0":"IEMS 302-0","SPANISH 197-0":"SPANISH 200-0","SPANISH 207-0":"SPANISH 200-0","SPANISH 203-0":"SPANISH 201-0","SPANISH 220-0":"SPANISH 204-0","FRENCH 101-A":"FRENCH 111-A","FRENCH 101-B":"FRENCH 111-B","FRENCH 101-C":"FRENCH 111-C","FRENCH 102-A":"FRENCH 121-A","FRENCH 102-B":"FRENCH 121-B","FRENCH 102-C":"FRENCH 121-C","PORT 121-3":"PORT 115-2","ARABIC 311-2":"ARABIC 211-3","GBL_HLTH 301-0":"GBL_HLTH 201-0","COMP_LIT 210-0":"ENGLISH 220-0","THEATRE 140-1":"THEATRE 160-1","THEATRE 140-2":"THEATRE 160-2","THEATRE 120-0":"THEATRE 160-3","THEATRE 364-1":"THEATRE 328-1","THEATRE 364-2":"THEATRE 328-2","THEATRE 364-3":"THEATRE 328-3","SESP 195-0":"SESP 195-1","MUS_TECH 259-0":"MUS_TECH 300-0","MUS_COMP 111-0":"MUS_COMP 211-0"},Dr={AF_AM_ST:"BLK_ST",GNDR_ST:"GSS"};function K(e){let r=kr[e];if(r)return r;let o=e.indexOf(" "),t=Dr[e.slice(0,o)];return t?`${t}${e.slice(o)}`:e}var wr=new Map;for(let[e,r]of Object.entries(kr))wr.set(r,[...wr.get(r)??[],e]);var zt=new Map(Object.entries(Dr).map(([e,r])=>[r,e]));var Bo={HINDI:"HIND_URD",URDU:"HIND_URD",BIO_SCI:"BIOL_SCI",MATSCI:"MAT_SCI",MSFT:"MS_FT",PHILOSOPHY:"PHIL",APPM:"ES_APPM"},qo=["COMP_SCI","COMP_ENG","ELEC_ENG"],Br={ANY:1,ONE:1,TWO:2,THREE:3,FOUR:4},Uo=80;function _e(e){let r=new Set,o=new Set,t=new Map,n=new Map,a=0;for(let i of e){r.add(i.id),o.add(i.subject);let c=`${i.subject} ${i.catalog.split("-")[0]}`,g=t.get(c);g?g.push(i.id):t.set(c,[i.id]);let u=Math.max(0,...(i.terms??[]).map(Number));n.set(i.id,u),u>a&&(a=u)}let s=new Set;for(let[i,c]of n)c>0&&c>=a-Uo&&s.add(i);return{ids:r,live:s,subjects:o,variants:t}}function Ae(e){return`${e.subject} ${e.number}-${e.section||"0"}`}function qr(e,r){let[o,t]=r.split(" "),n=t.indexOf("-");return n<0?{...e,subject:o,number:t,section:"0"}:{...e,subject:o,number:t.slice(0,n),section:t.slice(n+1)}}function Fo(e,r){let o=e.section||"0";if(/^\d+$/.test(o)&&o!=="0")return null;let t=(r.variants.get(`${e.subject} ${e.number}`)??[]).filter(a=>r.live.has(a));if(t.length===0)return null;let n=`${e.subject} ${e.number}-`;for(let a of["0","1","DL","CN"])if(t.includes(n+a))return n+a;return t.length===1?t[0]:null}function Yo(e,r,o){let t={...e,subject:e.subject.toUpperCase()};t.section=(t.section||"0").toUpperCase().replace(/(?<=\d)(OR|AND)$/,"");let n=Number(t.number);if(t.section==="LEVEL"||!o.subjects.has(t.subject)&&t.subject in Br){let s=Br[t.subject];return{kind:"level-wildcard",levels:[n],subjects:[o.subjects.has(t.subject)?t.subject:r],...s&&s>1?{count:s}:{}}}if(t.subject==="EECS"){let s=qo.filter(i=>o.variants.has(`${i} ${t.number}`));s.length===1&&(t.subject=s[0])}t.subject=Bo[t.subject]??t.subject;let a=K(Ae(t));if(o.ids.has(a)&&(t=qr(t,a)),!o.subjects.has(t.subject))if(o.variants.has(`${r} ${t.number}`))t.subject=r;else return{kind:"raw",text:`${e.subject} ${e.number}`,reason:"unknown-subject"};if(!o.live.has(Ae(t))){let s=Fo(t,o);s&&(t=qr(t,s))}return t}function Fr(e,r){if(e.kind==="course"){let o=Ae(e);return r.ids.has(o)&&!r.live.has(o)}return e.kind==="all"?e.of.some(o=>Fr(o,r)):!1}function Ur(e){let r=new Set;return e.filter(o=>{let t=o.kind==="course"?`course:${o.subject} ${o.number}-${o.section}`:JSON.stringify(o);return r.has(t)?!1:(r.add(t),!0)})}function ie(e,r,o){switch(e.kind){case"course":return Yo(e,r,o);case"all":return{kind:"all",of:Ur(e.of.map(t=>ie(t,r,o)))};case"any":{let t=Ur(e.of.map(s=>ie(s,r,o))),n=t.filter(s=>!Fr(s,o)),a=n.length>0?n:t;return a.length===1?a[0]:{kind:"any",of:a}}case"when":return{...e,then:ie(e.then,r,o)};default:return e}}function Pe(e,r){let o=new Map;for(let[t,n]of e){let a=n.parsed?ie(n.parsed,t.split(" ")[0],r):n.parsed;o.set(t,{...n,parsed:a})}return o}function P(e,r,o,t){let n=e.createElement(r);if(o){if(o.text!==void 0&&o.html!==void 0)throw new Error("el(): cannot provide both `text` and `html`");if(o.class!==void 0&&(n.className=o.class),o.text!==void 0&&(n.textContent=o.text),o.html!==void 0&&(n.innerHTML=o.html),o.dataset)for(let[a,s]of Object.entries(o.dataset))s!==void 0&&(n.dataset[a]=s);if(o.style)for(let[a,s]of Object.entries(o.style))s!==void 0&&(n.style[a]=s);if(o.attrs)for(let[a,s]of Object.entries(o.attrs))s!==void 0&&n.setAttribute(a,s);if(o.on)for(let[a,s]of Object.entries(o.on))s&&n.addEventListener(a,s)}if(t)for(let a of t)a==null||a===!1||(typeof a=="string"?n.appendChild(e.createTextNode(a)):n.appendChild(a));return n}function Yr(e,r,o){let t=e.getElementById(r);if(t instanceof HTMLStyleElement)return t.textContent!==o&&(t.textContent=o),t;let n=e.createElement("style");return n.id=r,n.textContent=o,(e.head??e.documentElement).appendChild(n),n}var $r="bc-prereq-filter-style",jr="bc-prereq-filter-row",L="bc-prereq-filter-switch",q="bc-prereq-filter-btn",y="bc-prereq-filter-tooltip",R="bc-prereq-badge",Vr="data-bc-prereq-hidden";var $o=2,jo="No prerequisites";function zr(e,r,o,t={}){let n=r??{kind:"none"},a={doc:e,history:o,parsedMap:t.parsedMap??null,depth:0,seen:new Set(t.target?[Zo(t.target)]:[]),expanded:new Set,collapsed:!1},s=P(e,"div",{class:"bc-prereq-tree"});if(t.target){let i=`${t.target.subject} ${t.target.number.replace(/-0$/,"")}`,c=He(e);c.appendChild(w(e,i,Kr(t.target.state),{target:!0})),ue(c,n,a),s.appendChild(c)}else s.appendChild(de(n,a));return{el:s}}function He(e){return P(e,"div",{class:"bc-prereq-tree__node"})}function w(e,r,o,t={}){let n=["bc-prereq-tree__pill",`bc-prereq-tree__pill--${o}`];return t.soft&&n.push("bc-prereq-tree__pill--soft"),t.target&&n.push("bc-prereq-tree__pill--target"),P(e,"span",{class:n.join(" "),text:t.glyph?`${t.glyph} ${r}`:r})}function U(e,r){return w(e,r,"neutral",{glyph:"?",soft:!0})}function de(e,r){let{doc:o}=r;if(e.kind==="all"||e.kind==="any"){if(e.of.length===0)return le(o,w(o,"Trivially satisfied","ok",{glyph:"\u2713"}));if(e.of.length===1)return de(e.of[0],r);let t=He(o);return Jr(t,e,r),t}if(e.kind==="course")return zo(e,r);if(e.kind==="when"){let t=le(o,U(o,`if ${Xo(e.condition)}`));return ue(t,e.then,r),t}return le(o,Vo(e,o))}function le(e,r){let o=He(e);return o.appendChild(r),o}function Vo(e,r){switch(e.kind){case"none":return w(r,jo,"ok",{glyph:"\u2713"});case"consent":return w(r,`${e.source} consent`,"warn");case"standing":return w(r,eo(e),"neutral",{soft:!0});case"topic":return U(r,e.topic);case"raw":return U(r,e.text);case"level-wildcard":return U(r,Ko(e));case"program":return U(r,`${e.relation.replace(/-/g," ")} ${e.name}`);case"program-membership":return U(r,`${e.negated?"not ":""}${e.program}`);case"placement":return U(r,`${e.exam} placement`);case"gpa":return U(r,`GPA \u2265 ${e.min}${e.scope?` (${e.scope})`:""}`)}}function zo(e,r){let o=le(r.doc,Jo(e,r));if(!r.parsedMap||r.collapsed||r.depth>=$o||e.recommended===!0)return o;let t=Xr(e);if(r.seen.has(t)||r.expanded.has(t)||Zr(e,r))return o;let n=Qo(r.parsedMap,e);return!n||n.kind==="none"||(r.expanded.add(t),ue(o,n,{...r,depth:r.depth+1,seen:new Set([...r.seen,t])})),o}function Jo(e,r){let o=Xr(e),t=e.minGrade?`${o} (\u2265 ${e.minGrade})`:o;if(e.recommended===!0)return w(r.doc,`${t} (rec.)`,"ok",{glyph:"\u2713",soft:!0});let n=r.history.get(o);if(n&&n.status==="In Progress")return w(r.doc,t,"warn",{glyph:"\u23F3"});let a=Kr(j(e,r.history).state),s=a==="ok"?"\u2713":a==="warn"?"\u23F3":void 0;return w(r.doc,t,a,{glyph:s})}function ue(e,r,o){if(r.kind==="all"||r.kind==="any"){if(r.of.length===1){ue(e,r.of[0],o);return}if(r.of.length>1){Jr(e,r,o);return}}e.appendChild(Wr(o.doc,null,!1)),e.appendChild(de(r,o))}function Jr(e,r,o){let t=r.kind==="any",n=t?Wo(r.of,o):-1,a=P(o.doc,"div",{class:`bc-prereq-tree__kids${t?" bc-prereq-tree__kids--any":""}`});r.of.forEach((s,i)=>{a.appendChild(de(s,t&&i!==n?{...o,collapsed:!0}:o))}),e.appendChild(Wr(o.doc,t?"one of":"all",t)),e.appendChild(a)}function Wr(e,r,o){let t=P(e,"span",{class:`bc-prereq-tree__link${o?" bc-prereq-tree__link--any":""}`});return r&&t.appendChild(P(e,"span",{class:"bc-prereq-tree__op",text:r})),t}function Zr(e,r){let o=j(e,r.history).state;return o==="ready"||o==="in-progress"}function Qr(e){return e.kind==="course"?!0:(e.kind==="all"||e.kind==="any")&&e.of.some(Qr)}function Wo(e,r){return e.some(o=>Zr(o,r))?-1:e.findIndex(Qr)}function Kr(e){switch(e){case"ready":case"no-data":return"ok";case"needs-consent":case"in-progress":return"warn";case"blocked":return"lock";default:return"neutral"}}function Xr(e){let r=e.section&&e.section!=="0"?`-${e.section}`:"";return`${e.subject} ${e.number}${r}`}function Zo(e){return`${e.subject} ${e.number.replace(/-0$/,"")}`}function Qo(e,r){let o=`${r.subject} ${r.number}-${r.section||"0"}`;return e.get(o)?.parsed??null}function eo(e){return`${e.scope&&"names"in e.scope?`${e.scope.names.join("/")} `:""}${e.level} standing${e.orAbove?"+":""}`}function Ko(e){let r=e.subjects.length>0?e.subjects.join("/"):"any subject",o=e.levels.map(a=>`${a}xx`).join("/"),t=e.orHigher?"+":"";return`${e.count&&e.count>1?`${e.count}\xD7 `:""}${r} ${o}${t}`}function Xo(e){switch(e.kind){case"program":return e.name;case"program-membership":return e.negated?`not ${e.program}`:e.program;case"standing":return eo(e);default:return"condition"}}function ro(e,r,o,t,n,a={}){let s=P(e,"div");o&&s.appendChild(P(e,"span",{class:"bc-tip-raw",text:o})),s.appendChild(et(e,r));let i=zr(e,t,n,a);s.appendChild(i.el);for(let c of r.notes)s.appendChild(P(e,"span",{class:"bc-tip-line",text:c}));return s}function et(e,r){let o=P(e,"span",{class:"bc-tip-line"}),t={ready:"All prerequisites met.","needs-consent":"Eligible with permission.","in-progress":"Prereq currently in progress.",blocked:"Prerequisites not met.",unknown:"Some requirements can't be verified automatically.","no-data":"No prerequisites \u2014 open to take."};return o.appendChild(P(e,"strong",{text:t[r.state]})),o}var rt=`
.${R} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  border: 1.5px solid var(--bc-color-border-strong);
  background: var(--bc-color-bg);
  color: var(--bc-color-text-strong);
  font-family: var(--bc-font-display);
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  cursor: help;
  user-select: none;
  flex-shrink: 0;
}

.${R}[data-state="ready"],
.${R}[data-state="no-data"] {
  color: var(--bc-color-gate-ok-text);
  background: var(--bc-color-gate-ok-bg);
  border-color: var(--bc-color-gate-ok-border);
}

.${R}[data-state="needs-consent"],
.${R}[data-state="in-progress"] {
  color: var(--bc-color-gate-warn-text);
  background: var(--bc-color-gate-warn-bg);
  border-color: var(--bc-color-gate-warn-border);
}

.${R}[data-state="blocked"] {
  color: var(--bc-color-gate-lock-text);
  background: var(--bc-color-gate-lock-bg);
  border-color: var(--bc-color-gate-lock-border);
}

.${R}[data-state="unknown"] {
  color: var(--bc-color-text-muted);
  background: var(--bc-color-bg-app);
  border-color: var(--bc-color-border-strong);
  border-style: dashed;
}

/* Grid surface: paper.nu's schedule cards use bg-opacity-60, and several
   gate-*-bg tokens are intentionally translucent in dark mode (rgba alpha
   ~0.3). Stacked, the badge bleeds through and reads as transparent. On
   the grid surface, force a solid background so the badge stays legible
   on top of the card \u2014 state color survives via the border + glyph text. */
.${R}[data-bc-prereq-surface="grid"] {
  background: var(--bc-color-bg);
}

[${Vr}="1"] {
  display: none !important;
}

/* Row that mounts above the search results list \u2014 holds two switches
   side by side: feature on/off (left) and the "Meets prereqs" filter
   (right). Both share the same knob+label visual so the strip reads
   as one cohesive control. */
#${jr} {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 12px 6px;
  font-family: var(--bc-font-body);
  font-size: 12px;
  color: var(--bc-color-text-strong);
}

/* Shared switch styling \u2014 applies to BOTH the feature toggle and the
   filter toggle. Mirrors the popup's .toggle visual (36\xD720 pill +
   sliding knob). */
#${L},
#${q} {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  background: transparent;
  border: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  user-select: none;
}

#${L} .bc-switch-label,
#${q} .bc-switch-label {
  font-weight: 600;
  letter-spacing: 0.01em;
}

#${L} .bc-switch-knob,
#${q} .bc-switch-knob {
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  border: none;
  flex-shrink: 0;
  background: var(--bc-color-border-strong);
  transition: background var(--bc-tx-base) var(--bc-easing);
}

#${L} .bc-switch-knob::after,
#${q} .bc-switch-knob::after {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bc-color-bg);
  box-shadow: var(--bc-shadow-toggle-knob);
  transition: left var(--bc-tx-base) var(--bc-easing);
}

#${L}[data-on="1"] .bc-switch-knob,
#${q}[data-on="1"] .bc-switch-knob {
  background: var(--bc-color-accent);
}

#${L}[data-on="1"] .bc-switch-knob::after,
#${q}[data-on="1"] .bc-switch-knob::after {
  left: 19px;
}

/* Filter switch carries the visible-count chip after its label. */
#${q} .bc-switch-count {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px;
  color: var(--bc-color-text-muted);
}

/* Info icon next to the feature switch \u2014 surfaces the experiment
   disclosure on hover. Same shape + size as the badge chips so the
   strip reads as a single typography rhythm. */
#${L} .bc-prereq-info {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-left: 2px;
  border-radius: 50%;
  border: 1px solid var(--bc-color-border-strong);
  background: var(--bc-color-bg);
  color: var(--bc-color-text-muted);
  font-family: var(--bc-font-display, serif);
  font-style: italic;
  font-size: 10px;
  font-weight: 700;
  line-height: 1;
  cursor: help;
  user-select: none;
  flex-shrink: 0;
  transition: background var(--bc-tx-base) var(--bc-easing),
              color var(--bc-tx-base) var(--bc-easing);
}

#${L} .bc-prereq-info:hover {
  background: var(--bc-color-accent);
  color: var(--bc-color-bg);
}

/* Info-tooltip body styles \u2014 same column layout as the prereq tooltip
   but no tree, just stacked lines. */
#${y} .bc-prereq-info-tip {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 320px;
}

#${y} {
  position: fixed;
  z-index: 2147483646;
  /* The tree grows sideways by depth and downward by breadth, so it
     normally fits; both axes scroll as a safety net for the widest and
     tallest courses. */
  max-width: calc(100vw - 24px);
  max-height: calc(100vh - 24px);
  width: max-content;
  overflow: auto;
  padding: 8px 10px;
  background: var(--bc-color-bg);
  color: var(--bc-color-text-strong);
  border: 1.5px solid var(--bc-color-text);
  border-radius: var(--bc-radius-lg);
  box-shadow: 2px 2px 0 var(--bc-color-text);
  font-family: var(--bc-font-body);
  font-size: 12px;
  line-height: 1.4;
  display: none;
}

/* Prereq tree: target on the left, each requirement group on a bracket
   to its right. Solid bracket = need all, dashed bracket = need one. */
.bc-prereq-tree {
  margin: 8px 0 4px;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 12px;
  line-height: 1.3;
}

.bc-prereq-tree__node {
  display: flex;
  align-items: center;
}

.bc-prereq-tree__pill {
  flex: none;
  padding: 3px 8px;
  border-radius: 7px;
  border: 1.5px solid var(--bc-color-border-strong);
  background: var(--bc-color-bg-app);
  color: var(--bc-color-text-muted);
  font-weight: 600;
  white-space: nowrap;
}

.bc-prereq-tree__pill--ok {
  background: var(--bc-color-gate-ok-bg);
  border-color: var(--bc-color-gate-ok-border);
  color: var(--bc-color-gate-ok-text);
}

.bc-prereq-tree__pill--warn {
  background: var(--bc-color-gate-warn-bg);
  border-color: var(--bc-color-gate-warn-border);
  color: var(--bc-color-gate-warn-text);
}

.bc-prereq-tree__pill--lock {
  background: var(--bc-color-gate-lock-bg);
  border-color: var(--bc-color-gate-lock-border);
  color: var(--bc-color-gate-lock-text);
}

.bc-prereq-tree__pill--soft {
  border-style: dashed;
  font-style: italic;
  font-weight: 500;
  white-space: normal;
  max-width: 160px;
}

.bc-prereq-tree__pill--neutral.bc-prereq-tree__pill--soft {
  background: transparent;
}

.bc-prereq-tree__pill--target {
  padding: 6px 12px;
  border-width: 2px;
  font-size: 14px;
  font-weight: 700;
}

.bc-prereq-tree__link {
  flex: none;
  display: flex;
  align-items: center;
  color: var(--bc-color-text-muted);
  font-size: 10.5px;
  font-weight: 500;
}

.bc-prereq-tree__link::before,
.bc-prereq-tree__link::after {
  content: "";
  width: 8px;
  border-top: 1.5px solid var(--bc-color-border-strong);
}

.bc-prereq-tree__link--any::before,
.bc-prereq-tree__link--any::after {
  border-top-style: dashed;
}

.bc-prereq-tree__op {
  padding: 0 4px;
}

.bc-prereq-tree__kids {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 3px 0 3px 10px;
  border-left: 1.5px solid var(--bc-color-border-strong);
  border-radius: 9px 0 0 9px;
}

.bc-prereq-tree__kids--any {
  border-left-style: dashed;
}

#${y}[data-visible="1"] {
  display: block;
}

#${y} .bc-tip-raw {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px;
  color: var(--bc-color-text-muted);
  margin-bottom: 6px;
  display: block;
  /* Cap the raw enrl_req string so a long single line wraps even when
     the tree below makes the tooltip very wide. Without this, the raw
     text stretches the full tooltip width and reads as one giant line
     across the entire viewport. */
  max-width: 520px;
  white-space: normal;
  overflow-wrap: anywhere;
}

#${y} .bc-tip-line {
  display: block;
  margin: 2px 0;
}

#${y} .bc-tip-line strong {
  font-weight: 700;
}
`;function oo(e){Yr(e,$r,rt)}var to=[["COMP_ENG 203-0","Introduction to Computer Engineering","","5050"],["COMP_ENG 205-0","Fundamentals of Computer System Software","COMP_SCI 111-0 or GEN_ENG 205-1; COMP_ENG 203-0 recommended","5050"],["COMP_ENG 295-0","Special Topics in Computer Engineering","",""],["COMP_ENG 303-0","Advanced Digital Design","COMP_ENG 203-0","5040"],["COMP_ENG 329-0","The Art of Multicore Concurrent Programming","COMP_SCI 110-0 or COMP_SCI 111-0","5010"],["COMP_ENG 334-0","Fundamentals of Blockchains and Decentralization","COMP_SCI 212-0 or ELEC_ENG 302-0 or equivalent or graduate standing and basic programming skills","5050"],["COMP_ENG 346-0","Microcontroller System Design","COMP_SCI 211-0 and (COMP_ENG 205-0 or COMP_SCI 213-0)","5050"],["COMP_ENG 347-1","Microprocessor Systems Project I","COMP_ENG 346-0","5050"],["COMP_ENG 347-2","Microprocessor Systems Project II","COMP_ENG 347-1","4940"],["COMP_ENG 355-0","ASIC and FPGA Design","COMP_ENG 303-0","5040"],["COMP_ENG 356-0","Introduction to Formal Specification & Verification","","5020"],["COMP_ENG 357-0","Design Automation in VLSI","COMP_SCI 214-0, COMP_ENG 303-0","4980"],["COMP_ENG 358-0","Introduction to Parallel Computing","COMP_SCI 211-0 or graduate standing","5050"],["COMP_ENG 361-0","Computer Architecture I","(COMP_ENG 205-0 or COMP_SCI 213-0) AND (COMP_ENG 303-0 or COMP_ENG 355-0)","5040"],["COMP_ENG 362-0","Computer Architecture Projects","COMP_ENG 361-0","5050"],["COMP_ENG 364-0","CyberPhysical Systems Design and Application","","5020"],["COMP_ENG 365-0","Internet-of-things Sensors, Systems, And Applications","","5040"],["COMP_ENG 366-0","Embedded Systems","","5050"],["COMP_ENG 368-0","Programming Massively Parallel Processors with CUDA","(COMP_SCI 213-0 and (COMP_SCI 211-0 or COMP_SCI 230-0)) or permission of instructor","5010"],["COMP_ENG 369-0","Introduction to Sensor Networks","COMP_SCI 343-0 or COMP_SCI 340-0",""],["COMP_ENG 391-0","CMOS VLSI Circuit Design","","5050"],["COMP_ENG 392-0","VLSI Systems Design Projects","COMP_ENG 391-0 or COMP_ENG 355-0","5020"],["COMP_ENG 393-0","Advanced Low Power VLSI and Mixed-signal IC Design","","5040"],["COMP_ENG 395-0","Special Topics in Computer Engineering","","5050"],["COMP_ENG 399-0","Projects","",""],["COMP_ENG 452-0","Adv Computer Architecture","COMP_ENG 361-0","5050"],["COMP_ENG 453-0","Parallel Architectures","COMP_ENG 361-0 or permission of instructor","5020"],["COMP_ENG 456-0","Modern Topics in Computer Architecture","COMP_ENG 361-0 or permission of instructor","4900"],["COMP_ENG 459-0","VLSI Algorithmics","COMP_SCI 336-0","5000"],["COMP_ENG 464-0","Cyber-Physical Systems Design and Application","","5020"],["COMP_ENG 465-0","Internet-of-things Sensors, Systems, And Applications","","5040"],["COMP_ENG 466-0","Embedded Systems","Senior or graduate standing in Computer Science or Computer Engineering","5050"],["COMP_ENG 468-0","Programming Massively Parallel Processors with CUDA","(COMP_SCI 213-0 and (COMP_SCI 211-0 or COMP_SCI 230-0)) or permission of instructor","5010"],["COMP_ENG 493-0","Advanced Low Power VLSI and Mixed-signal IC Design","","5040"],["COMP_ENG 495-0","Special Topics in Computer Engineering","","5050"],["COMP_ENG 499-0","Projects","",""],["COMP_ENG 510-0","Seminar","","4940"],["COMP_ENG 590-0","Research","",""],["COMP_SCI 101-0","Computer Science: Concepts, Philosophy, and Connections","",""],["COMP_SCI 110-0","Introduction to Computer Programming","","5040"],["COMP_SCI 111-0","Fundamentals of Computer Programming","","5030"],["COMP_SCI 130-0","Tools and Technology of the World-Wide Web","","4860"],["COMP_SCI 150-0","Fundamentals of Programming and Computational Problem Solving","COMP_SCI 110-0 or COMP_SCI 111-0 or GEN_ENG 205-1 or GEN_ENG 206-1","5050"],["COMP_SCI 211-0","Programming in Systems-Level Languages","COMP_SCI 111-0 or COMP_SCI 150-0","5050"],["COMP_SCI 212-0","Math Foundations of CS Part 1: Discrete Math for CS","(EECS 110 or EECS 111) and Math 228-1 or 230-0","5050"],["COMP_SCI 213-0","Introduction to Computer System","COMP_SCI 211-0","5050"],["COMP_SCI 214-0","Data Structures & Algorithms","COMP_SCI 111 and (COMP_SCI 150 or COMP_SCI 211)","5020"],["COMP_SCI 217-0","Applied Data Management","COMP_SCI 110-0 or COMP_SCI 111-0 or COMP_SCI 150-0 or COMP_SCI 211-0 or consent of instructor","5050"],["COMP_SCI 295-0","Special Topics in Computer Science","","5020"],["COMP_SCI 301-0","Introduction to Robotics Laboratory","COMP_SCI 110-0, COMP_SCI 111-0, or consent of instructor","5050"],["COMP_SCI 310-0","Scalable Software Architectures","COMP_SCI 213-0, COMP_SCI 214-0","5050"],["COMP_SCI 311-0","Inclusive Making","","5020"],["COMP_SCI 313-0","Tangible Interaction Design and Learning","COMP_SCI 110-0","5020"],["COMP_SCI 314-0","Technology and Human Interaction","","5050"],["COMP_SCI 315-0","Design, Technology, and Research","consent of instructor (by application only)","5050"],["COMP_SCI 321-0","Programming Languages","COMP_SCI 111 and, COMP_SCI 211, and COMP_SCI 214 or Graduate standing","5050"],["COMP_SCI 322-0","Compiler Construction","COMP_SCI 213-0 or consent of instructor","5050"],["COMP_SCI 323-0","Code Analysis and Transformation","COMP_SCI 213-0","4920"],["COMP_SCI 325-1","Artificial Intelligence Programming","COMP_SCI 110-0, COMP_SCI 111-0, or programming experience","4880"],["COMP_SCI 329-0","HCI Studio","COMP_SCI 214-0 or Graduate Standing or Consent of instructor","5050"],["COMP_SCI 330-0","Human Computer Interaction","COMP_SCI 211-0 or Graduate standing or Consent of instructor","5040"],["COMP_SCI 331-0","Introduction to Computational Photography","COMP_SCI 150 or COMP_SCI 211 or Consent of Instructor","4950"],["COMP_SCI 333-0","Interactive Information Visualization","COMP_SCI 214-0 or consent of instructor","5020"],["COMP_SCI 335-0","Introduction to the Theory of Computation","COMP_SCI 212-0 or consent of instructor","5050"],["COMP_SCI 336-0","Design & Analysis of Algorithms","COMP_SCI 111-0, COMP_SCI 212-0, or CS Graduate Standing or consent of instructor","5050"],["COMP_SCI 337-0","Natural Language Processing: Classical Approaches","COMP_SCI 348-0 or consent of instructor","5000"],["COMP_SCI 338-0","Practicum in Intelligent Information Systems","","5040"],["COMP_SCI 339-0","Introduction to Database Systems","COMP_SCI 214-0 and (COMP_SCI 213-0 or COMP_ENG 205-0) or CS Graduate Standing","5050"],["COMP_SCI 340-0","Introduction to Networking","COMP_SCI 214-0 and (COMP_SCI 213-0 or COMP_ENG 205-0)","5050"],["COMP_SCI 341-0","Social Networks Analysis","","5030"],["COMP_SCI 343-0","Operating Systems","COMP_SCI 214-0 and COMP_SCI 213-0, or COMP_SCI 214-0 and COMP_ENG 205-0","5050"],["COMP_SCI 344-0","Design of Computer Problem Solvers","COMP_SCI 348-0 and COMP_SCI 325-1 or equivalent LISP experience","5050"],["COMP_SCI 345-0","Distributed Systems","COMP_SCI 213-0 and COMP_SCI 214-0","5020"],["COMP_SCI 347-0","Conversational AI","COMP_SCI 371 or permission of instructor","5020"],["COMP_SCI 348-0","Introduction to Artificial Intelligence","COMP_SCI 111 and COMP_SCI 214 or COMP_SCI 111 and CogSci major or CS Graduate Standing","5050"],["COMP_SCI 349-0","Machine Learning","COMP_SCI grad standing OR (COMP_SCI 214 and (MATH 240-0 or GEN_ENG 205-1 or GEN_ENG 206-1) and (IEMS 201-0 or IEMS 303-0 or ELEC_ENG 302-0 or STAT 210-0 or MATH 310-1)","5050"],["COMP_SCI 350-0","Introduction to Computer Security","COMP_SCI 213-0 or equivalent or consent of instructor; COMP_SCI 340-0 highly recommended","5000"],["COMP_SCI 351-1","Introduction to Computer Graphics","COMP_SCI 214-0 or Graduate standing","5030"],["COMP_SCI 351-2","Intermediate Computer Graphics","COMP_SCI 214-0 and COMP_SCI 351-1 or Graduate standing","4890"],["COMP_SCI 352-0","Machine Perception of Music & Audio","COMP_SCI 211-0 and COMP_SCI 214-0","5050"],["COMP_SCI 354-0","Computer System Security","COMP_SCI 211-0 and COMP_SCI 213-0 or COMP_SCI 211-0 and COMP_ENG 205-0","5040"],["COMP_SCI 355-0","Digital Forensics and Incident Response","","4980"],["COMP_SCI 367-0","Wireless and Mobile Health (mHealth)","","5010"],["COMP_SCI 370-0","Computer Game Design","COMP_SCI 214-0; 1 unit of COMP_SCI 322-0, COMP_SCI 343-0, COMP_SCI 348-0, or COMP_SCI 351-1, COMP_SCI 351-2",""],["COMP_SCI 371-0","Knowledge Representation and Reasoning","COMP_SCI 348-0, COMP_SCI 325-1, or equivalent experience with artificial intelligence","5010"],["COMP_SCI 372-0","Designing and Constructing Models with Multi-Agent Languages","","5020"],["COMP_SCI 376-0","Computer Game Design and Development","COMP_SCI 214-0","5040"],["COMP_SCI 377-0","Game Design Studio","COMP_SCI 214 and COMP_SCI 376-0","5050"],["COMP_SCI 393-0","Software Construction","COMP_SCI 211-0 and COMP_SCI 214-0","4860"],["COMP_SCI 394-0","Agile Software Development","Consent of instructor","5050"],["COMP_SCI 396-0","Special Topics in Computer Science","","5050"],["COMP_SCI 397-0","Special Projects in Computer Science","","5050"],["COMP_SCI 399-0","Projects","",""],["COMP_SCI 401-0","Introduction to Graduate Studies","","5040"],["COMP_SCI 409-0","Swarms and Multi-Robot Systems","Permission of Instructor. Cross-listed with MECH_ENG 409-0","5040"],["COMP_SCI 410-0","Autonomous Quadrotor Design and Control","Permission of Instructor. Cross-listed with MECH_ENG 410-0","5020"],["COMP_SCI 413-0","Tangible Interaction Design and Learning","","5020"],["COMP_SCI 430-0","Design of Interactive Learning Environments","",""],["COMP_SCI 440-0","Advanced Networking","COMP_SCI 340-0 or permission of instructor","5040"],["COMP_SCI 441-0","Resource Virtualization","COMP_SCI 213-0",""],["COMP_SCI 443-0","Advanced Operating Systems","",""],["COMP_SCI 445-0","Internet-scale Experimentation","","5050"],["COMP_SCI 446-0","Kernel and Other Low-level Software Development","(COMP_SCI 213-0 or COMP_ENG 205-0) and (COMP_SCI 343-0 or COMP_ENG 361-0 or COMP_ENG 366-0 or COMP_ENG 466-0) or permission of Instructor","5020"],["COMP_SCI 447-0","Conversational AI","","5020"],["COMP_SCI 450-0","Internet Security","","5040"],["COMP_SCI 455-0","Distributed Computing Systems","COMP_SCI 343-0 or COMP_ENG 361-0",""],["COMP_SCI 457-0","Advanced Algorithms","COMP_SCI 336-0 or any algorithms course",""],["COMP_SCI 469-0","Machine Learning & Artificial Intelligence for Robotics","Graduate-level standing (or permission of instructor) for the maths.  Some programming experience (in Matlab okay). Undergraduate student enrollment by permission of instructor only","5000"],["COMP_SCI 472-0","Designing and Constructing Models with Multi-Agent Languages","","5020"],["COMP_SCI 473-1","NUvention: Web - Part 1","","4810"],["COMP_SCI 473-2","NUvention: Web - Part 2","","4820"],["COMP_SCI 474-0","Probabilistic Graphical Models","","4960"],["COMP_SCI 496-0","Special Topics in Computer Science","","4980"],["COMP_SCI 497-0","Special Projects in Computer Science","","4980"],["COMP_SCI 499-0","Projects","",""],["COMP_SCI 510-0","Seminar","",""],["COMP_SCI 590-0","Research","",""],["ELEC_ENG 100-0","Electrons, Photons, and Bits:  Adventures in Electrical and Computer Engineering","",""],["ELEC_ENG 195-0","Special Topics in Electrical Engineering","",""],["ELEC_ENG 202-0","Introduction to Electrical Engineering","","5040"],["ELEC_ENG 221-0","Fundamentals of Circuits","ELEC_ENG 202-0","5050"],["ELEC_ENG 222-0","Fundamentals of Signals & Systems","ELEC_ENG 202-0","5050"],["ELEC_ENG 223-0","Fundamentals of Solid State Engineering","ELEC_ENG 202-0; PHYSICS 135-3; MATH 228-2","5040"],["ELEC_ENG 224-0","Fund of Electromagnetics & Photonics","(ELEC_ENG 202-0 and ELEC_ENG 221-0 and PHYSICS 135-2 and MATH 228-2) or consent of instructor","5050"],["ELEC_ENG 225-0","Fundamentals of Electronics","ELEC_ENG 221-0, ELEC_ENG 223-0","5050"],["ELEC_ENG 250-0","Physical Electronics and Devices","ELEC_ENG 221-0; PHYSICS 135-2","4810"],["ELEC_ENG 295-0","Special Topics in Electrical Engineering","",""],["ELEC_ENG 302-0","Probabilistic Systems","","5040"],["ELEC_ENG 307-0","Communications Systems","ELEC_ENG 222-0, ELEC_ENG 302-0 or equivalent","5040"],["ELEC_ENG 308-0","Applied Electromagnetics and Photonics","ELEC_ENG 224-0","4810"],["ELEC_ENG 326-0","Electronic System Design I","Students must have completed (ELEC_ENG 225-0 and COMP_SCI 211-0), or MECH_ENG 333-0, or graduate standing, or instructor consent","5050"],["ELEC_ENG 327-0","Electronic System Design II: Project","ELEC_ENG 326-0 or instructor consent","5020"],["ELEC_ENG 328-0","Information Theory & Learning","Basic probability theory (ELEC_ENG 302-0 or equivalent)","4930"],["ELEC_ENG 331-0","Introduction to Computational Photography","COMP_SCI 150 or COMP_SCI 211 or Consent of Instructor",""],["ELEC_ENG 332-0","Introduction to Computer Vision","COMP_SCI 212-0 or ELEC_ENG 302-0 or equivalent or graduate standing","5040"],["ELEC_ENG 333-0","Introduction to Communication Networks","ELEC_ENG 302-0 or equivalent","4940"],["ELEC_ENG 334-0","Fundamentals of Blockchains and Decentralization","COMP_SCI 212-0 or ELEC_ENG 302-0 or equivalent or graduate standing and basic programming skills","5050"],["ELEC_ENG 335-0","Deep Learning Foundations from Scratch","","4940"],["ELEC_ENG 353-0","Digital Microelectronics","COMP_ENG 203-0, ELEC_ENG 225-0",""],["ELEC_ENG 359-0","Digital Signal Processing","ELEC_ENG 222-0","5040"],["ELEC_ENG 360-0","Introduction to Feedback Systems","ELEC_ENG 222-0 or MECH_ENG 390-0 or BMD_ENG 309-0 or equivalent","5050"],["ELEC_ENG 363-0","Digital Filtering","ELEC_ENG 359-0","5050"],["ELEC_ENG 372-1","Robot Design Studio","Consent of Instructor","5050"],["ELEC_ENG 372-2","Robot Design Studio","ELEC_ENG 372-1","5020"],["ELEC_ENG 373-0","Deep Reinforcement Learning","ELEC_ENG 375-0 and ELEC_ENG 335-0","5010"],["ELEC_ENG 374-0","Introduction to Digital Control","ELEC_ENG 360-0","5020"],["ELEC_ENG 375-0","Machine Learning: Foundations, Applications, and Algorithms","","5040"],["ELEC_ENG 378-0","Digital Communications","ELEC_ENG 302-0 or equivalent",""],["ELEC_ENG 379-0","Lasers and Coherent Optics","","5040"],["ELEC_ENG 380-0","Wireless Communications","ELEC_ENG 378-0","5050"],["ELEC_ENG 381-0","Electronic Properties of Materials","ELEC_ENG 223-0 or consent of instructor","5040"],["ELEC_ENG 382-0","Photonic Information Processing","ELEC_ENG 222-0 and ELEC_ENG 224-0 or consent of instructor","5020"],["ELEC_ENG 383-0","Fiber-Optic Communications","ELEC_ENG 223-0, ELEC_ENG 224-0","4850"],["ELEC_ENG 384-0","Solid State Electronic Devices","ELEC_ENG 381-0 or consent of instructor","5000"],["ELEC_ENG 385-0","Optoelectronics","ELEC_ENG 381-0 or consent of instructor","5020"],["ELEC_ENG 387-0","Advanced Digital Systems Design with FPGAs","",""],["ELEC_ENG 388-0","Nanotechnology","ELEC_ENG 223-0 or consent of instructor","5050"],["ELEC_ENG 389-0","Superconductivity and Its Applications","ELEC_ENG 381-0 or consent of instructor","5010"],["ELEC_ENG 390-0","Introduction to Robotics","COMP_SCI 230-0","4820"],["ELEC_ENG 395-0","Special Topics in Electrical Engineering","","5050"],["ELEC_ENG 398-0","Electrical Engineering Design","senior standing",""],["ELEC_ENG 399-0","Projects","",""],["ELEC_ENG 401-0","Fundamentals of Electronic Devices","ELEC_ENG 381-0 or ELEC_ENG 388-0","5040"],["ELEC_ENG 402-0","Advanced Electronic Devices","ELEC_ENG 381-0 or ELEC_ENG 384-0","5050"],["ELEC_ENG 403-0","Quantum Semiconductors","ELEC_ENG 381-0","5040"],["ELEC_ENG 404-0","Quantum Electronics","","5040"],["ELEC_ENG 405-0","Advanced Photonics","ELEC_ENG 381-0 or ELEC_ENG 401-0","4940"],["ELEC_ENG 406-0","Nonlinear Optics","ELEC_ENG 382-0 and ELEC_ENG 404-0 or permission of instructor","5020"],["ELEC_ENG 407-0","Quantum Optics","ELEC_ENG 404-0 and ELEC_ENG 406-0 or permission of instructor","5040"],["ELEC_ENG 408-1","Classical Electodynamics","ELEC_ENG 308-0",""],["ELEC_ENG 408-2","Computational Electrodynamics","",""],["ELEC_ENG 409-0","Semiconductor Lasers","ELEC_ENG 403-0 or ELEC_ENG 405-0","5020"],["ELEC_ENG 410-0","System Theory","ELEC_ENG 360-0","5040"],["ELEC_ENG 411-0","Fundamentals and Applications of Special Relativity","","5050"],["ELEC_ENG 413-0","Managing People and Workforce Diversity in Energy & Sustainability","",""],["ELEC_ENG 414-0","Advanced Topics in Quantum Electronics","","5020"],["ELEC_ENG 418-0","Advanced Digital Signal Processing","ELEC_ENG 359-0","5020"],["ELEC_ENG 420-0","Digital Image Processing","ELEC_ENG 359-0 or equivalent","4810"],["ELEC_ENG 421-0","Multimedia Signal Processing","ELEC_ENG 359-0",""],["ELEC_ENG 422-0","Random Processes in Communications and Control 1","One course in probability","5050"],["ELEC_ENG 423-0","Random Processes in Communications and Control 2","ELEC_ENG 422-0",""],["ELEC_ENG 424-0","Distributed Optimization","","4930"],["ELEC_ENG 425-0","Introduction to Nanoscale Lasers, Quantum Noise, Photons, and Measurement","ELEC_ENG 404-0 or permission of instructor",""],["ELEC_ENG 426-0","Signal Detection and Estimation","ELEC_ENG 307-0 and ELEC_ENG 422-0",""],["ELEC_ENG 427-0","Optical Communications","ELEC_ENG 307-0 and probability",""],["ELEC_ENG 428-0","Information Theory and Learning","","4930"],["ELEC_ENG 429-0","Selected Topics in Quantum Information Science and Technology","Knowledge of quantum mechanics and permission of instructor",""],["ELEC_ENG 431-0","Human Perception and Electronic Media","ELEC_ENG 359-0 or equivalent","5020"],["ELEC_ENG 432-0","Advanced Computer Vision","","5050"],["ELEC_ENG 433-0","Statistical Pattern Recognition","","5050"],["ELEC_ENG 435-0","Deep Learning: Foundations, Applications, and Algorithms","","4940"],["ELEC_ENG 436-0","Game Theory and Networked Systems","",""],["ELEC_ENG 454-0","Advanced Communication Networks","ELEC_ENG 302-0; ELEC_ENG 333-0 helpful but not required","5020"],["ELEC_ENG 463-0","Adaptive Filters","",""],["ELEC_ENG 473-0","Deep Reinforcement Learning","ELEC_ENG 475-0 and ELEC_ENG 435-0","5010"],["ELEC_ENG 475-0","Machine Learning: Foundations, Applications, and Algorithms","","5040"],["ELEC_ENG 478-0","Advanced Digital Communications","ELEC_ENG 359-0, ELEC_ENG 378-0 and ELEC_ENG 422-0",""],["ELEC_ENG 495-0","Special Topics in Electrical Engineering","","5050"],["ELEC_ENG 499-0","Projects","",""],["ELEC_ENG 510","Seminar","","5050"],["ELEC_ENG 590-0","Research","",""],["GEN_ENG 190-0","Engineering Freshman Seminar","","5030"],["GEN_ENG 195-1","Engineering Dialog","","4960"],["GEN_ENG 195-2","Engineering Discourse","","4970"],["GEN_ENG 195-3","Engineering Discussion","","4980"],["GEN_ENG 195-4","Engineering Dialog IV","","4940"],["GEN_ENG 196-1","Engineering Dialog","","4960"],["GEN_ENG 196-2","Engineering Discourse","","4970"],["GEN_ENG 196-3","Engineering Discussion","","4980"],["GEN_ENG 196-4","Engineering Discourse IV","","4940"],["GEN_ENG 205-1","Engineering Analysis I","","5010"],["GEN_ENG 205-2","Engineering Analysis II","C- or better in GEN_ENG 205-1; MATH 220-1","5020"],["GEN_ENG 205-3","Engineering Analysis III","C- or better in GEN_ENG 205-2","5040"],["GEN_ENG 205-4","Engineering Analysis IV","C- or better in GEN_ENG 205-2; MATH 220-2","5050"],["GEN_ENG 205-MG-1","Mentored Study Program","","5000"],["GEN_ENG 205-MG-2","Mentored Study Program","","5020"],["GEN_ENG 205-SG-1","Peer-Guided Study Group: Engineering Analysis I","","5010"],["GEN_ENG 205-SG-2","Peer-Guided Study Group: Engineering Analysis II","","5020"],["GEN_ENG 205-SG-3","Peer-Guided Study Group: Engineering Analysis III","","5040"],["GEN_ENG 205-SG-4","Peer-Guided Study Group: Engineering Analysis IV","","5040"],["GEN_ENG 206-1","Honor Engineering Analysis","consent of instructor","5000"],["GEN_ENG 206-2","Honors Engineering Analysis","consent of instructor",""],["GEN_ENG 206-3","Honors Engineering Analysis","consent of instructor",""],["GEN_ENG 206-4","Honors Engineering Analysis IV","consent of instructor","5020"],["GEN_ENG 220-1","Analy/Comp Graph","","5050"],["GEN_ENG 220-2","Analy/Comp Graph II","","5020"],["GEN_ENG 295-0","Special Topics in Engineering","",""],["GEN_ENG 355-0","Domestic Study Affiliated","",""],["GEN_ENG 395-0","Special Topics in Engineering","",""],["GEN_ENG 397-0","Selected Topics in Engineering","","4860"],["GEN_ENG 399-0","Independent Study","",""],["GEN_ENG 512-0","Continuous Registration","","5050"],["GEN_ENG 519-0","Responsible Conduct for Research Training","","5050"],["GEN_ENG 545-0","Teaching Experience","","5050"],["GEN_ENG 546-0","Teaching Experience","","5050"],["IEMS 201-0","Introduction to Statistics","","5030"],["IEMS 202-0","Probability","concurrent enrollment in MATH 228-2","4890"],["IEMS 225-0","Principles of Entrepreneurship","","5050"],["IEMS 295-0","Introductory Special Topics in IEMS","","5010"],["IEMS 303-0","Engineering Statistics","IEMS 202-0 or equivalent; COMP_SCI 150-0 or equivalent","5050"],["IEMS 304-0","Statistical Learning for Data Analysis","IEMS 303-0 and COMP_SCI 150-0 or equivalents","5050"],["IEMS 307-0","Quality Improvement by Experimental Design","IEMS 201-0, IEMS 303-0, or equivalent","5020"],["IEMS 308-0","Data Science and Analytics","IEMS 304-0; COMP_SCI 217-0","5010"],["IEMS 310-0","Operations Research","IEMS 201-0 or IEMS 202-0; GEN_ENG 205-1 or MATH 240-0","5040"],["IEMS 313-0","Linear Optimization for Decision Making","GEN_ENG 205-1; MATH 228-1; COMP_SCI 110-0 or COMP_SCI 111-0 or COMP_SCI 150-0; sophomore standing","5050"],["IEMS 315-0","Stochastic Models","IEMS 202-0; COMP_SCI 150-0; GEN_ENG 205-1; and prior completion of or concurrent enrollment in IEMS 303-0","5040"],["IEMS 317-0","Discrete Event Systems Simulation","IEMS 303-0; IEMS 310-0 or IEMS 315-0","5050"],["IEMS 325-0","Engineering Entrepreneurship","1 course in accounting or finance such as CIV_ENV 205-0 or ENTREP 330-1","5040"],["IEMS 340-0","Qualitative Methods in Engineering Systems","DSGN 106-1 and DSGN 106-2, or consent of instructor for non-McCormick students","5040"],["IEMS 341-0","Social Networks Analysis","","5030"],["IEMS 342-0","Organizational Behavior","","5050"],["IEMS 343-0","Project Management for Engineers","CIV_ENV 205-0 and IEMS 303-0","5040"],["IEMS 344-0","Whole-Brain Leadership","Junior standing","5020"],["IEMS 345-0","Negotiations and Conflict Resolution for Engineers","Junior standing","5050"],["IEMS 351-0","Optimization Methods in Data Science","COMP_SCI 111-0 and IEMS 303-0 and IEMS 313-0, or equivalent","5000"],["IEMS 365-0","Analytics for Social Good","","5050"],["IEMS 373-0","Intro to Financial Engineering","CIV_ENV 205-0, IEMS 202-0, IEMS 303-0 or equivalents, or consent of instructor","5020"],["IEMS 381-0","Supply Chain Modeling and Analysis","IEMS 313-0","5040"],["IEMS 382-0","Operations Engineering and Management","IEMS 202-0; IEMS 310-0 or IEMS 313-0","5050"],["IEMS 383-0","Service Engineering and Management","IEMS 313-0, IEMS 315-0","5020"],["IEMS 385-0","Introduction to Health Systems Management","IEMS 303-0, IEMS 313-0","5040"],["IEMS 393-1","Industrial Engineering Design Project","IEMS 313-0, IEMS 315-0, concurrent enrollment in IEMS 317-0, and senior standing",""],["IEMS 393-2","Industrial Engineering Design Project","IEMS 393-1",""],["IEMS 394-0","Industrial Engineering Client Project Challenge","IEMS 202-0, IEMS 303-0, IEMS 304-0, IEMS 313-0, IEMS 315-0, and IEMS 317-0","5040"],["IEMS 395-0","Special Topics in Industrial Engineering","","4980"],["IEMS 399-0","Independent Study in Industrial Engineering","",""],["IEMS 401-0","Applied Mathematical Statistics","IEMS 303-0 or equivalent","5040"],["IEMS 402-0","Statistical Learning","IEMS 401-0 or equivalent (i.e. graduate-level statistics and probability)","5050"],["IEMS 404-1","Predictive Analytics I","","5000"],["IEMS 404-2","Predictive Analytics II","","5010"],["IEMS 405-0","Mathematical Foundations of Statistical Learning","IEMS 401-0 or equivalent (i.e., graduate-level statistics and probability)",""],["IEMS 407-0","Uncertainty Quantification",'Prerequisites: An understanding of graduate level statistics and probability and being comfortable with a scripting language like python, R, or matlab will prove helpful."',"5020"],["IEMS 411-0","Field Research in Organizations","",""],["IEMS 434-0","Systems Methodology","",""],["IEMS 435-0","Stochastic Simulation","IEMS 202-0 and IEMS 303-0 or equivalent; previous programming experience in some language","5020"],["IEMS 436-0","Engineering Project Management","",""],["IEMS 441-0","Social Network Analysis","","5000"],["IEMS 443-0","Health Policy Modeling","",""],["IEMS 444-1","Healthcare Management Science","","4850"],["IEMS 445-0","Decision and Risk Analysis","IEMS 202-0 or equivalent",""],["IEMS 450-1","Mathematical Optimization I","Linear algebra and calculus","5040"],["IEMS 450-2","Mathematical Optimization II","Linear algebra and calculus","5050"],["IEMS 451-0","Stochastic Optimization","IEMS 450-1 and IEMS 401-0","5040"],["IEMS 452-0","Combinatorial Optimization","IEMS 450-1 or equivalent","4980"],["IEMS 453-0","Robust Optimization","IEMS 450-1 or equivalent","4820"],["IEMS 454-0","Large Scale Optimization","IEMS 450-1","5010"],["IEMS 455-0","Machine Learning","IEMS 202-0, IEMS 303-0 and IEMS 313-0 (or equivalent) and computer programming","4840"],["IEMS 457-0","Integer Programming","IEMS 450-1 or equivalent","4980"],["IEMS 459-0","Convex Optimization","IEMS 202-0, IEMS 303-0 (or equivalent), and  IEMS 450-1 or IEMS 450-2 (or equivalent)","5020"],["IEMS 460-1","Stochastic Processes I","Permission of instructor","5050"],["IEMS 460-2","Stochastic Processes II","Permission of instructor","5020"],["IEMS 463-0","Statistical Analysis","",""],["IEMS 464-0","Advanced Queueing Theory","IEMS 460-1 or equivalent","5010"],["IEMS 465-0","Simulation Experiment Design & Analysis","IEMS 435-0, IEMS 401-0 and IEMS 460-1, or equivalent",""],["IEMS 468-0","Stochastic Control","IEMS 460-1",""],["IEMS 469-0","Advanced Algorithms for Machine Learning","","5040"],["IEMS 471-1","Factory Physics I","",""],["IEMS 473-1","Financial Engineering I","","4860"],["IEMS 473-2","Financial Engineering II","IEMS 373-0",""],["IEMS 481-0","Logistics","","4960"],["IEMS 482-0","Operations","IEMS 450-1 and at least concurrent enrollment in IEMS 460-1","5010"],["IEMS 484-0","Inventory and Distribution Systems","IEMS 481-0 and IEMS 482-0",""],["IEMS 488-0","Economics and Decision Analysis","","5020"],["IEMS 490-0","Selected Topics in IE","","5050"],["IEMS 496-0","Graduate Topics in Industrial Engineering","","5010"],["IEMS 499-0","Projects","",""],["IEMS 519-0","Responsible Conduct of Research Training","",""],["IEMS 590-0","Research","",""],["MATH 100-0","Quantitative Reasoning","","4980"],["MATH 100-BR","Quantitative Reasoning","","4910"],["MATH 100-CN","Quantitative Reasoning","",""],["MATH 100-DL","Quantitative Reasoning","","5050"],["MATH 101-CN","Algebra","",""],["MATH 101-DL","Algebra","","5020"],["MATH 105-6","First-Year Seminar","","4890"],["MATH 110-0","Introduction to Mathematics","",""],["MATH 110-CN","Introduction to  Mathematics","",""],["MATH 113-CN","Precalculus Mathematics","",""],["MATH 202-0","Finite Mathematics","","5050"],["MATH 202-CN","Finite Mathematics","","4930"],["MATH 211-0","Short Course in Calculus","","5020"],["MATH 211-CN","Short Course in Calculus","",""],["MATH 218-1","Single-Variable Calculus with Precalculus","consent of the department","5050"],["MATH 218-2","Single-Variable Calculus with Precalculus","MATH 218-1 or consent of the department","5050"],["MATH 218-3","Single-Variable Calculus with Precalculus","MATH 218-2 or consent of the department","5040"],["MATH 218-SG-1","Peer-Guided Study Group: Single-Variable Calculus with Precalculus","","5040"],["MATH 218-SG-2","Peer-Guided Study Group: Single-Variable Calculus with Precalculus","","5010"],["MATH 218-SG-3","Peer-Guided Study Group: Single-Variable Calculus with Precalculus","","4900"],["MATH 220-1","Single-Variable Differential Calculus","","5050"],["MATH 220-2","Single-Variable Integral Calculus","MATH 218-2 or MATH 220-0 (former) or MATH 220-1","5050"],["MATH 220-A","Single-Variable Differential Calculus","","5040"],["MATH 220-A-DL","Single-Variable Differential Calculus","","5020"],["MATH 220-B","Single-Variable Integral Calculus","MATH 220-A","5050"],["MATH 220-B-DL","Single-Variable Integral Calculus","MATH 220-A, MATH 220-A-DL","5030"],["MATH 220-MG-2","Mentored Study Program","","5040"],["MATH 220-SG-1","Peer-Guided Study Group: Single-Variable Differential Calculus","","5040"],["MATH 220-SG-2","Peer-Guided Study Group: Single-Variable Integral Calculus","","5040"],["MATH 226-0","Sequences and Series","MATH 218-3 or MATH 220-2","5050"],["MATH 226-CN","Sequences and Series","MATH 220-B",""],["MATH 228-1","Multivariable Differential Calculus for Engineering","MATH 218-3 or MATH 214-0 (former) or MATH 220-2 or MATH 224-0 (former)","5050"],["MATH 228-2","Multivariable Integral Calculus for Engineering","MATH 228-1 or MATH 230-0 (former) or MATH 230-1 or MATH 281-1 or MATH 285-2 or MATH 290-2 or MATH 291-2 or ES_APPM 252-1","5050"],["MATH 228-SG-1","Peer-Guided Study Group: Multivariable Calculus for Engineering","","5040"],["MATH 230-1","Multivariable Differential Calculus","MATH 218-3 or MATH 214-0 (former) or MATH 220-2 or MATH 224-0 (former)","5050"],["MATH 230-2","Multivariable Integral Calculus","MATH 228-1 or MATH 230-0 (former) or MATH 230-1 or MATH 281-1 or MATH 285-2 or MATH 290-2 or MATH 291-2 or ES_APPM 252-1","5050"],["MATH 230-A","Multivariable Differential Calculus","MATH 220-B",""],["MATH 230-B","Multivariable Integral Calculus","MATH 230-A","4810"],["MATH 230-SG-1","Peer-Guided Study Group: Multivariable Differential Calculus","","5040"],["MATH 235-0","Series and Multiple Integrals","MATH 218\u20103 or MATH 220\u20102, and MATH 228\u20101 or MATH 230\u20101 or MATH 281\u20101 or MATH 285\u20102 or MATH 290\u20102 or MATH 291\u20102 or ES_APPM 252\u20101","5050"],["MATH 240-0","Linear Algebra","MATH 230-1 or MATH 230-0 (former) or MATH 281-1 or ES_APPM 252-1","5050"],["MATH 240-CN","Linear Algebra","MATH 230-A or equivalent","4820"],["MATH 250-0","Elementary Differential Equations","MATH 226-0 or MATH 281-2; and MATH 228-2 or MATH 230-2 or MATH 234-0 (former) or MATH 281-2 or MATH 285-3 or MATH 290-3 or MATH 291-3 or ES_APPM 252-2; and MATH 240-0 or MATH 285-1 or MATH 290-1 or MATH 291-1 or GEN_ENG 205-1 or GEN_ENG 206-1","5040"],["MATH 250-CN","Elementary Differential Equations","MATH 230-A, MATH 240-CN, or equivalents",""],["MATH 281-1","Accelerated Mathematics for ISP: First Year","first-year standing in ISP","5040"],["MATH 281-2","Accelerated Mathematics for ISP: First Year","MATH 281-1","5050"],["MATH 281-3","Accelerated Mathematics for ISP: First Year","MATH 281-2","5020"],["MATH 285-1","Accelerated Mathematics for MMSS","first-year standing in MMSS","5040"],["MATH 285-2","Accelerated Mathematics for MMSS","MATH 285-1","5050"],["MATH 285-3","Accelerated Mathematics for MMSS","MATH 285-2","5020"],["MATH 290-1","MENU: Linear Algebra and Multivariable Calculus","","5040"],["MATH 290-2","MENU: Linear Algebra and Multivariable Calculus","MATH 290-1","5050"],["MATH 290-3","MENU: Linear Algebra and Multivariable Calculus","MATH 290-2","5020"],["MATH 291-1","MENU: Intensive Linear Algebra and Multivariable Calculus","consent of the department","5040"],["MATH 291-2","MENU: Intensive Linear Algebra and Multivariable Calculus","MATH 291-1","5050"],["MATH 291-3","MENU: Intensive Linear Algebra and Multivariable Calculus","MATH 291-2","5020"],["MATH 300-0","Foundations of Higher Mathematics","MATH 240-0 or MATH 281-3 or MATH 285-1 or MATH 290-1 or MATH 291-1 or GEN_ENG 205-1 or GEN_ENG 206-1 or consent of the department","5050"],["MATH 300-BR","Foundations of Higher Mathematics","","5030"],["MATH 300-CN","Foundations of Higher Mathematics","MATH 240-CN",""],["MATH 306-0","Combinatorics & Discrete Mathematics","MATH 240-0 or MATH 281-3 or MATH 285-1 or MATH 290-1 or MATH 291-1 or GEN_ENG 205-1 or GEN_ENG 206-1","5050"],["MATH 306-CN","Combinatorics & Discrete Mathematics","MATH 240-CN",""],["MATH 308-0","Graph Theory","MATH 291-1 or MATH 300-0 or MATH 306-0","5020"],["MATH 310-1","Probability and Stochastic Processes","","5040"],["MATH 310-2","Probability and Stochastic Processes","MATH 240-0 or MATH 281-3 or MATH 285-1 or MATH 290-1 or MATH 291-1 or GEN_ENG 205-1 or GEN_ENG 206-1; and MATH 310-1 or MATH 311-1 or MATH 314-0 or MATH 385-0 or STAT 320-1 or STAT 383-0 or IEMS 202-0 or ELEC_ENG 302-0","5050"],["MATH 310-3","Probability and Stochastic Processes","MATH 310-2 or MATH 311-2","5020"],["MATH 310-A","Probability and Stochastic Processes","MATH 230-B","4820"],["MATH 310-B","Probability and Stochastic Processes","MATH 240-CN and MATH 310-A",""],["MATH 310-C","Probability and Stochastic Processes","MATH 310-B",""],["MATH 311-1","MENU: Probability and Stochastic Processes","MATH 226-0 or MATH 281-2; and MATH 291-3, or MATH 300-0 and any one of MATH 290-3, MATH 281-2, MATH 285-3 or ES_APPM 252-2; or consent of the department. Recommended: MATH 320-1 or MATH 321-1","5040"],["MATH 311-2","MENU: Probability and Stochastic Processes","MATH 311-1 or consent of the department","5050"],["MATH 311-3","MENU: Probability and Stochastic Processes","MATH 311-2 or consent of the department","4980"],["MATH 314-0","Probability and Statistics for Econometrics","","5040"],["MATH 320-1","Real Analysis","MATH 226-0 or MATH 281-2; and MATH 300-0 or MATH 291-3; or consent of the department","5040"],["MATH 320-2","Real Analysis","MATH 320-1 or MATH 321-1","5050"],["MATH 320-3","Real Analysis","MATH 320-2","5020"],["MATH 320-A","Introduction to Real Analysis","MATH 300-CN","4800"],["MATH 320-B","Real Analysis II","MATH 320-A",""],["MATH 320-C","Introduction to Real Analysis","MATH 320-B",""],["MATH 321-1","MENU: Real Analysis","consent of the department","5040"],["MATH 321-2","MENU: Real Analysis","MATH 321-1","5050"],["MATH 321-3","MENU: Real Analysis","MATH 321-2","5020"],["MATH 325-0","Complex Analysis","MATH 226-0 or MATH 281-2; and MATH 228-2 or MATH 230-2 or MATH 234-0 (former) or MATH 281-2 or MATH 285-3 or MATH 290-3 or MATH 291-3 or ES_APPM 252-2; and MATH 240-0 or MATH 281-3 or MATH 285-1 or MATH 290-1 or MATH 291-1 or GEN_ENG 205-1 or GEN_ENG 206-1","5020"],["MATH 325-CN","Complex Analysis","MATH 230-B",""],["MATH 327-0","Mechanics for Mathematicians","MATH 226-0 or MATH 281-3; and MATH 228-2 or MATH 230-2 or MATH 234-0 (former) or MATH 281-2 or MATH 285-3 or MATH 290-3 or MATH 291-3 or ES_APPM 252-2; and MATH 240-0 or MATH 281-3 or MATH 285-1 or MATH 290-1 or MATH 291-1 or GEN_ENG 205-1 or GEN_ENG 206-1","5020"],["MATH 330-1","Abstract Algebra","MATH 291-1 or MATH 300-0","5040"],["MATH 330-2","Abstract Algebra","MATH 330-1 or MATH 331-1","5050"],["MATH 330-3","Abstract Algebra","MATH 330-2 or MATH 331-2","5020"],["MATH 330-A","Abstract Algebra","MATH 300-CN",""],["MATH 331-1","MENU: Abstract Algebra","consent of the department","5040"],["MATH 331-2","MENU: Abstract Algebra","MATH 331-1","5050"],["MATH 331-3","MENU: Abstract Algebra","MATH 331-2","5020"],["MATH 334-0","Linear Algebra: Second Course","MATH 300-0 or MATH 291-2","5050"],["MATH 334-CN","Linear Algebra II: Second Course","MATH 300-CN",""],["MATH 336-1","Introduction to the Theory of Numbers","MATH 228-1 or MATH 230-1 or MATH 281-1 or MATH 285-2 or MATH 290-2 or MATH 291-2 or ES_APPM 252-1","5050"],["MATH 336-2","Introduction to the Theory of Numbers","MATH 336-1","5020"],["MATH 336-A","Introduction to the Theory of Numbers","MATH 230-A","4810"],["MATH 340-0","Geometry","MATH 300-0 or MATH 291-1","5020"],["MATH 340-CN","Geometry","MATH 300-CN",""],["MATH 342-0","Introduction to Differential Geometry","MATH 226-0 or MATH 281-2; and MATH 228-2 or MATH 230-2 or MATH 234-0 (former) or MATH 281-2 or MATH 285-3 or MATH 290-3 or MATH 291-3 or ES_APPM 252-2; and MATH 240-0 or MATH 281-3 or MATH 285-1 or MATH 290-1 or MATH 291-1 or GEN_ENG 205-1 or GEN_ENG 206-1","5040"],["MATH 344-1","Introduction to Topology","MATH 320-1 or MATH 321-1","5050"],["MATH 344-2","Introduction to Topology","MATH 344-1, and either MATH 330-1 or MATH 331-1","5020"],["MATH 351-0","Fourier Analysis and Boundary Value Problems","MATH 250-0 or MATH 281-3 or MATH 360-1 or GEN_ENG 206-4 or GEN_ENG 206-4","5040"],["MATH 353-0","Qualitative Theory of Differential Equations","MATH 250-0 or MATH 281-3 or MATH 360-1 or GEN_ENG 205-4 or GEN_ENG 206-4","4820"],["MATH 354-0","Chaotic Dynamical Systems","MATH 240-0 or MATH 281-3 or MATH 285-1 or MATH 290-1 or MATH 291-1 or GEN_ENG 205-1 or GEN_ENG 206-1","5040"],["MATH 360-1","MENU: Applied Analysis","MATH 226-0 or MATH 281-2; and MATH 290-3 or MATH 291-3","5000"],["MATH 360-2","MENU: Applied Analysis","MATH 360-1","4850"],["MATH 366-0","Mathematical Models in Finance","MATH 240-0 or MATH 281-3 or MATH 285-1 or MATH 290-1 or MATH 291-1 or GEN_ENG 205-1 or GEN_ENG 206-1; and MATH 310-1 or MATH 311-1 or MATH 314-0 or MATH 385-0 or STAT 320-1 or STAT 383-0 or IEMS 202-0 or ELEC_ENG 302-0","5050"],["MATH 366-A","Mathematical Models in Finance","MATH 240-CN",""],["MATH 368-0","Introduction to Optimization","MATH 226-0 or MATH 281-2; and MATH 291-3, or MATH 300-0 and one of MATH 228-2, MATH 230-2, MATH 234-0 (former), MATH 281-2, MATH 285-3, MATH 290-3, or ES_APPM 252-2","5050"],["MATH 370-0","Mathematical Logic","MATH 300-0 or MATH 291-3 or consent of the instructor",""],["MATH 381-0","Fourier Analysis and Boundary Value Problems for ISP","MATH 281-3 and PHYSICS 125-3","5040"],["MATH 382-0","Complex Analysis for ISP","MATH 281-3 and PHYSICS 125-3","5050"],["MATH 385-0","Probability and Statistics for MMSS","second-year standing in MMSS","5040"],["MATH 386-1","Econometrics for MMSS","MATH 385-0","5050"],["MATH 386-2","Econometrics for MMSS","MATH 386-1","5020"],["MATH 395-0","Undergraduate Seminar","consent of the department","5050"],["MATH 399-0","Independent Study","consent of the department",""],["MATH 399-CN","Independent Study","",""],["MATH 410-1","Analysis","","5040"],["MATH 410-2","Analysis","","5050"],["MATH 410-3","Introduction to Modern Analysis","","5020"],["MATH 413-1","Functions of a Complex Variable","",""],["MATH 414-0","Abstract Riemann Surfaces","",""],["MATH 415-1","Functional Analysis","",""],["MATH 415-2","Functional Analysis","",""],["MATH 420-1","Partial Differential Equations","Advanced calculus and linear algebra or permission of instructor","5040"],["MATH 420-2","Partial Differential Equations","Advanced calculus and linear algebra or permission of instructor",""],["MATH 420-3","Partial Differential Equations","Advanced calculus and linear algebra or permission of instructor",""],["MATH 425-1","Partial Differential Equations II","",""],["MATH 425-2","Partial Differential Equations II","",""],["MATH 425-3","Partial Differential Equations II","",""],["MATH 428-0","Geometric Measure Theory & Applications","",""],["MATH 429-0","Fourier Analysis","Permission of instructor","4800"],["MATH 430-1","Dynamical Systems","","5040"],["MATH 430-2","Dynamical Systems","","5050"],["MATH 430-3","Dynamical Systems","","4940"],["MATH 435-0","Ergodic Theory","MATH 410-1",""],["MATH 438-3","Interdisciplinary Nonlinear Dynamics","",""],["MATH 440-1","Geometry and Topology","","5040"],["MATH 440-2","Geometry and Topology","","5050"],["MATH 440-3","Geometry and Topology","MATH 440-2","5020"],["MATH 444-0","Hamiltonian Dynamics and Symplectic Geometry","",""],["MATH 445-1","Differential Geometry","","5000"],["MATH 445-2","Differential Geometry","",""],["MATH 445-3","Differential Geometry","",""],["MATH 450-1","Probability Theory & Stochastic Analysis","","5040"],["MATH 450-2","Probability Theory and Stochastic Analysis","","5050"],["MATH 450-3","Probability Theory and Stochastic Analysis","","5020"],["MATH 460-1","Algebraic Topology","","5000"],["MATH 460-2","Algebraic Topology","MATH 460-1","5010"],["MATH 460-3","Algebraic Topology","MATH 460-2",""],["MATH 465-1","Algebraic Topology II","",""],["MATH 465-2","Algebraic Topology II","",""],["MATH 465-3","Algebraic Topology II","",""],["MATH 468-0","Homological Algebra","",""],["MATH 470-1","Algebra","","5040"],["MATH 470-2","Algebra","","5050"],["MATH 470-3","Algebra","","5020"],["MATH 477-0","Commutative Algebra","MATH 470-1, MATH 470-2, MATH 470-3 or equivalent","5000"],["MATH 478-0","Representation Theory","","4920"],["MATH 482-1","Algebraic Number Theory","","5010"],["MATH 482-2","Algebraic Number Theory","",""],["MATH 483-1","Algebraic Geometry","","4970"],["MATH 483-2","Algebraic Geometry","","4980"],["MATH 483-3","Algebraic Geometry","","5020"],["MATH 484-0","Lie Theory","","5050"],["MATH 485-1","Modular Forms","","4970"],["MATH 486-1","Algebraic K-Theory","","4920"],["MATH 486-2","Algebraic K-Theory","",""],["MATH 486-3","Algebraic K-Theory","",""],["MATH 495-0","Statistical Phenomena in the Theory of Networks","",""],["MATH 499-0","Independent Study","",""],["MATH 511-1","Topics in Analysis","","5020"],["MATH 511-2","Topics in Analysis","","4820"],["MATH 511-3","Topics in Analysis","",""],["MATH 512-1","Topics in Partial Differential Equations","","4900"],["MATH 512-2","Topics in Partial Differential Equations","",""],["MATH 512-3","Topics in Partial Differential Equations","",""],["MATH 513-1","Topics in Dynamical Systems","","5040"],["MATH 513-2","Topics in Dynamical Systems","","4980"],["MATH 513-3","Topics in Dynamical Systems","",""],["MATH 514-1","Topics in Geometry","","4960"],["MATH 514-2","Topics in Geometry","","4970"],["MATH 514-3","Topics in Geometry","",""],["MATH 515-1","Topics in Geometry and Topology","","5050"],["MATH 515-2","Topics in Geometry and Topology","","5020"],["MATH 515-3","Topics in Geometry and Topology","",""],["MATH 516-1","Topics in Topology","","4920"],["MATH 516-2","Topics in Topology","","4930"],["MATH 517-1","Topics in Algebra","","5040"],["MATH 517-2","Topics in Algebra","","4940"],["MATH 517-3","Topics in Algebra","",""],["MATH 518-1","Topics in Number Theory","","4980"],["MATH 518-2","Topics in Number Theory","",""],["MATH 518-3","Topics in Number Theory","",""],["MATH 519-0","Responsible Conduct of Research Training","","5040"],["MATH 520-1","Topics in Mathematical Physics","","5040"],["MATH 520-3","Topics in Mathematical Physics","","4980"],["MATH 521-1","Topics in Representation Theory","","5050"],["MATH 521-2","Topics in Representation Theory","",""],["MATH 521-3","Topics in Representation Theory","",""],["MATH 580-0","Seminar in College Teaching","","5040"],["MATH 590-0","Research","",""],["STAT 101-6","First-Year Seminar","","4880"],["STAT 201-0","Introduction to Programming for Data Science","","5050"],["STAT 202-0","Introduction to Statistics and Data Science","","5050"],["STAT 202-CN","Introduction to Statistics and Data Science","","4900"],["STAT 202-DL","Introduction to Statistics and Data Science","","5050"],["STAT 202-SG","Peer-Guided Study Group: Introduction to Statistics and Data Science","","5040"],["STAT 210-0","Introduction to Probability and Statistics","strong background in high school algebra (calculus is not required)","5050"],["STAT 210-SG","Peer-Guided Study Group: Introduction to Probability and Statistics","","5040"],["STAT 228-0","Series and Multiple Integrals","MATH 218\u20103 or MATH 220\u20102, and MATH 228\u20101 or MATH 230\u20101 or MATH 281\u20101 or MATH 285\u20102 or MATH 290\u20102 or MATH 291\u20102 or ES_APPM 252\u20101","5050"],["STAT 232-0","Applied Statistics","STAT 202-0, STAT 210-0, or equivalent; MATH 220-1","4810"],["STAT 301-1","Data Science 1 with R","STAT 202-0 or STAT 210-0 or consent of the instructor","5040"],["STAT 301-2","Data Science 2 with R","STAT 301-1 or consent of instructor","5050"],["STAT 301-3","Data Science 3 with R","STAT 301-2 or consent of the instructor","5020"],["STAT 302-0","Data Visualization","STAT 202-0 or equivalent","5050"],["STAT 303-1","Data Science 1 with Python","STAT 202-0 or STAT 210-0 or consent of the instructor","5040"],["STAT 303-2","Data Science 2 with Python","STAT 303-1 or consent of the instructor","5050"],["STAT 303-3","Data Science 3 with Python","STAT 303-2 or consent of the instructor","5020"],["STAT 304-0","Introduction to Data Structures and Algorithms","STAT 202-0 or STAT 210-0 or STAT 232-0, and COMP_SCI 110-0 or COMP_SCI 111-0","5040"],["STAT 305-0","Information Management for Data Science","STAT 202-0 or STAT 210-0 or STAT 232-0, and COMP_SCI 110-0 or COMP_SCI 111-0","5050"],["STAT 320-1","Statistical Theory & Methods 1","","5050"],["STAT 320-2","Statistical Theory & Methods 2","STAT 320-1 or MATH 310-1","5050"],["STAT 320-3","Statistical Theory & Methods 3","STAT 320-2, MATH 240-0","5020"],["STAT 325-0","Survey Sampling","MATH 230-1 and 2 quarters of statistics, or consent of instructor","4800"],["STAT 328-0","Causal Inference","STAT 320-2, STAT 350-0","5050"],["STAT 330-1","Applied Statistics for Research 1","","4920"],["STAT 330-2","Applied Statistics for Research 2","",""],["STAT 332-0","Statistics for Life Sciences","1 introductory statistics course","5020"],["STAT 342-0","Statistical Data Mining","courses in probability and statistics comparable to STAT 320-1, STAT 320-2; a course in multiple regression comparable to STAT 350-0; familiarity with statistical computing software such as MINITAB or SPSS",""],["STAT 344-0","Statistical Computing","STAT 320-2 or equivalent","5040"],["STAT 345-0","Statistical Demography","STAT 350-0, MATH 240-0, or equivalent",""],["STAT 348-0","Applied Multivariate Analysis","STAT 320-2, MATH 240-0, and STAT 350-0","5040"],["STAT 350-0","Regression Analysis","","5050"],["STAT 351-0","Design and Analysis of Experiments","STAT 320-1 or equivalent","5020"],["STAT 352-0","Nonparametric Statistical Methods","STAT 350-0","4980"],["STAT 353-0","Advanced Regression","STAT 320-2 or 420-2 or MATH 310-2 and a first course in regression is required at the level of STAT 350-0","5050"],["STAT 354-0","Time Series Modeling","STAT 320-1. Corequisite: STAT 350-0","5010"],["STAT 355-0","Analysis of Qualitative Data","STAT 320-2 or equivalent",""],["STAT 356-0","Hierarchical Linear Models","STAT 320-2, STAT 350-0","4820"],["STAT 357-0","Introduction to Bayesian Statistics","STAT 320-1, STAT 320-2, STAT 301-2 or 350-0, or consent of instructor","4960"],["STAT 359-0","Topics in Statistics","consent of instructor","5010"],["STAT 362-0","Advanced Machine Learning for Data Science","STAT 301-3 or STAT 303-3, and STAT 304-0 or COMP_SCI 214-0, and co-requisite MATH 240-0","5050"],["STAT 365-0","Introduction to the Analysis of Financial Data","STAT 320-3, MATH 240-0","5050"],["STAT 370-0","Human Rights Statistics","Two of STAT 325-0, STAT 350-0, STAT 320-2, STAT 320-3; or ECON 381-1, ECON 381-2; or MATH 386-1, MATH 386-2; or IEMS 303-0, IEMS 304-0","4800"],["STAT 383-0","Probability and Statistics for ISP","MATH 281-1, MATH 281-2, MATH 281-3; PHYSICS 125-1, PHYSICS 125-2, PHYSICS 125-3","5010"],["STAT 390-0","Data Science Project","STAT 301-3 or STAT 303-3 or consent of instructor","5050"],["STAT 398-0","Undergraduate Seminar","","4980"],["STAT 399-0","Independent Study","",""],["STAT 399-CN","Independent Study","",""],["STAT 415-0","Introduction to Machine Learning","Math 240-0, Math 230-2, and STAT 320-2 or statistics graduate standing","5020"],["STAT 420-1","Introduction to Statistical Theory & Methodology-1","","5040"],["STAT 420-2","Introduction to Statistical Theory & Methodology-2","","5050"],["STAT 420-3","Introduction to Statistical Theory & Methodology-3","","5020"],["STAT 425-0","Sampling Theory and Applications","Two previous courses in probability and statistics, at least one at the 300 level in Statistics (other than STAT 330-1, STAT 330-2), Econometrics, IE/MS, Math; or permission of instructor",""],["STAT 430-1","Probability for Statistical Inference 1","MATH 320-1 and STAT 420-1","5040"],["STAT 430-2","Probability for Statistical Inference 2","STAT 430-1","5050"],["STAT 435-0","Mathematical Foundations of Machine Learning","420-1(recommended but not required)","5020"],["STAT 439-0","Meta-Analysis","A graduate-level course in statistics","4930"],["STAT 440-0","Applied Probability for Statistics","STAT 420-1, STAT 420-2, STAT 420-3, STAT 430-1, and STAT 430-2","5020"],["STAT 448-0","Multivariate Statistical Methods","",""],["STAT 451-0","Design & Analysis of Social Experiments","Permission of the instructor",""],["STAT 453-0","Survival Analysis","",""],["STAT 454-0","Time Series Analysis","",""],["STAT 455-0","Advanced Qualitative Data Analysis","STAT 350-0 and STAT 420-3","5000"],["STAT 456-0","Generalized Linear Models","STAT 350-0 and STAT 420-3","5040"],["STAT 457-0","Applied Bayesian Inference","STAT 350-0 and STAT 420-1 and STAT 420-2 and STAT 420-3 or equivalent or students who have earned a Master\u2019s degree in Statistics or permission of the instructor","4930"],["STAT 461-0","Advanced Topics in Statistics","","5020"],["STAT 465-0","Statistical Methods for Bioinformatics and Computational Biology","","5050"],["STAT 466-0","Likelihood Methods","STAT 420-2",""],["STAT 498-0","Advanced Practicum","",""],["STAT 499-0","Independent Study","",""],["STAT 519-0","Responsible Conduct of Research Training","","5050"],["STAT 590-0","Research","",""],["IEMS 462-1","Predictive Analytics I","","4840"],["COMP_SCI 230-0","Programming for Engineers","","4810"],["IEMS 462-2","Predictive Analytics II","","4850"],["MATH 220-MG-1","Mentored Study Program","","5040"],["MATH 230-MG-1","Mentored Study Program","","4980"],["COMP_SCI 332-0","Online Markets","","5000"],["COMP_SCI 368-0","Programming Massively Parallel Processors with CUDA","","5030"],["COMP_SCI 415-0","Design, Technology, and Research","","5050"],["COMP_SCI 449-0","Deep Learning","","5050"],["COMP_SCI 468-0","Programming Massively Parallel Processors with CUDA","","5010"],["MATH 520-2","Topics in Mathematical Physics","","5010"],["COMP_SCI 260-0","Introduction to Law and Digital Technologies","","5040"],["COMP_SCI 460-0","Introduction to Law and Digital Technologies","","5040"],["COMP_SCI 298-0","CS Research Track Program","","5040"],["COMP_SCI 307-0","Introduction to Cryptography","","5040"],["COMP_SCI 312-0","Data Privacy","","5020"],["COMP_SCI 325-0","Artificial Intelligence Programming","","5040"],["COMP_SCI 327-0","Generative Methods","","4920"],["COMP_SCI 392-0","Rapid Prototyping for Software Innovation","","5040"],["IEMS 302-0","Probability","","5050"],["MATH 105-7","College Seminar","","5040"],["STAT 101-7","College Seminar","","5040"],["STAT 595-0","Internship","","5050"],["COMP_ENG 387-0","Real-Time Digital Systems Design and Verification with FPGAs","","5050"],["COMP_SCI 388-0","Software Engineering Beyond Programming","","5010"],["MATH 105-8","First-Year Writing Seminar","","5050"],["COMP_SCI 262-0","Mathematical Foundations of Computer Science - Part 2","","4980"],["COMP_SCI 296-0","Intermediate Topics in Computer Science","","5020"],["MATH 365-0","Computational Methods in Mathematics","","5020"],["COMP_SCI 324-0","Dynamics of Programming Languages","","5020"],["COMP_SCI 326-0","Introduction to the Data Science Pipeline","","5050"],["COMP_SCI 424-0","Dynamics of Programming Languages","","5020"],["COMP_SCI 346-0","Microcontroller System Design","","5040"],["COMP_SCI 308-0","Foundations of Security","","5040"],["COMP_SCI 462-0","Foundations of Quantum Computing and Quantum Information","","5040"],["COMP_SCI 353-0","Natural & Artificial Vision","","5040"],["COMP_SCI 362-0","Foundations of Quantum Computing and Quantum Information","","5040"],["COMP_SCI 436-0","Graduate Algorithms","","5040"],["COMP_SCI 437-0","Approximation Algorithms","","5000"],["STAT 436-0","Reinforcement Learning","","5050"],["STAT 450-1","Advanced Statistical Theory I","","5000"],["COMP_SCI 374-0","Causal Graphical Models","","5010"],["COMP_SCI 407-0","Advanced Topics in Modern Cryptography","","5010"],["COMP_SCI 461-0","Large Language Models","","5040"],["STAT 360-0","Introduction to Generative AI","","4970"],["STAT 450-2","Advanced Statistical Theory II","","5010"],["COMP_SCI 302-0","Artifical Life","","5050"],["COMP_SCI 398-0","Research Track Practicum","","5050"],["COMP_SCI 303-0","Full Stack Software Engineering","","5010"],["COMP_SCI 358-0","Introduction to Parallel Computing","","5050"],["COMP_SCI 432-0","Mechanism Design","","4980"],["COMP_SCI 433-0","Wireless Protocols for the Internet of Things","","5020"],["ELEC_ENG 470-0","Introduction to Nonlinear Control Theory","","4980"],["IEMS 408-0","Decision Making in Dynamic Learning Environments","","4980"],["COMP_SCI 320-0","Proving Properties of Programs with Mechanized Logic","","4980"],["COMP_SCI 416-0","Mathematical Foundations of Machine Learning","","5020"],["MATH 218-MG-1","Mentored Study Program","","5040"],["COMP_SCI 111-SG","Computer Science 111-SG Peer-Guided Study Group","","5020"],["COMP_SCI 387-0","Responsible Software Engineering","","5050"],["COMP_SCI 316-1","CS Education Research in the Community I: Foundations","","5050"],["COMP_SCI 439-0","Advanced Database Systems","","5010"],["COMP_SCI 196-0","Special Topics in Computer Science","","5020"],["COMP_SCI 265-0","AI and International Security","","5020"],["COMP_SCI 316-2","CS Education Research in the Community II: Sports and Computer Science","","5020"],["COMP_SCI 375-0","Digital Musical Instrument Dsg","","5020"],["COMP_SCI 380-0","Software Quality Engineering","","5040"],["COMP_SCI 454-0","Computational Optics","","5020"],["COMP_SCI 463-0","Generative Deep Models","","5040"],["IEMS 301-0","Introduction to Statistical Learning","","5050"],["IEMS 305-0","Foundations of Modern Machine Learning","","5020"],["IEMS 486-0","Introduction to Smart Grid Systems","","5020"],["IEMS 447-0","Emerging Topics in Computational Social Science","","5020"],["COMP_SCI 208-0","Data Structures & Algorithms","","5040"],["COMP_SCI 381-0","Software Design Principles and Practices","","5040"],["GEN_ENG 150-0","Programming for Engineers","","5050"],["GEN_ENG 151-0","Honors Programming for Engineers","","5040"],["GEN_ENG 231-0","Probability and Statistics for Engineers","","5050"],["IEMS 314-0","Nonlinear Optimization for Decision Making","","5040"],["COMP_SCI 317-0","Sports, Technology and Learning","","5040"],["IEMS 370-0","Tech Investment & Enterprise Strategy","","5040"],["STAT 363-0","Deep Learning: Foundation, Methods, and Applications","","5040"],["GEN_ENG 231-SG","Peer-Guided Study Group: Probability & Statistics for Engineers","","5040"],["COMP_SCI 180-0","Software Design & Composition","","5050"],["COMP_SCI 238-0","Forge: AI in Practice Building AI Systems for Real Clients - Part 0","","5050"],["COMP_SCI 338-1","Forge: AI in Practice Building AI Systems for Real Clients - Part 1","","5050"],["COMP_SCI 338-2","Forge: AI in Practice Building Technical Ownership and Modeling Teamwork - Part 2","","5050"],["COMP_SCI 338-3","Forge: AI in Practice Leading Client Engagements and Team Operations - Part 3","","5050"],["GEN_ENG 211-0","Engineering Physics - Statics","","5050"],["GEN_ENG 241-0","Linear Algebra for Engineers","","5050"],["IEMS 294-0","Professional Practice Studio","","5050"],["IEMS 352-0","Foundations of Generative AI & Reasoning Systems","","5050"],["IEMS 446-0","Game Theory and Networked Systems","","5050"],["MATH 364-0","Mathematical Foundations of Deep Learning","","5050"],["MATH 560-0","Storytelling in Mathematics","","5050"],["STAT 364-0","Large Language Models: Foundations, Training, and Inference","","5050"]];Re(e=>"fonts/"+e);we("bright");oo(document);var tt=Rr,no=to.map(([e,r,o,t])=>{let[n,a]=e.split(" ");return{id:e,subject:n,catalog:a,name:r,units:"1.00",prereqs:o,terms:t?[t]:[]}}),Ne=new Map;for(let e of no){let r=tt[e.id]??e.prereqs??"";if(!r.trim()){Ne.set(e.id,{id:e.id,raw:"",parsed:{kind:"none"},warnings:[]});continue}let{parsed:o,warnings:t}=ce(r,e.subject);Ne.set(e.id,{id:e.id,raw:r,parsed:o,warnings:t})}var Oe=Pe(Ne,_e(no)),nt=[["COMP_SCI 111","Taken"],["COMP_SCI 150","Taken"],["COMP_SCI 211","Taken"],["COMP_SCI 214","Taken"],["COMP_SCI 213","In Progress"],["MATH 220-1","Taken"]],Ce=new Map;for(let[e,r]of nt){let o=e.includes("-")?e:e+"-0";Ce.set(K(o).replace(/-0$/,""),{status:r,grade:r==="Taken"?"A":""})}var ve=new URLSearchParams(location.search).get("course")??"COMP_SCI 343-0",be=Oe.get(ve),Se=be?j(be.parsed,Ce):{state:"no-data",missing:[],notes:[]},[at,st]=ve.split(" "),V=document.createElement("div");V.id=y;V.dataset.visible="1";V.appendChild(ro(document,Se,be?.raw||null,be?.parsed??null,Ce,{parsedMap:Oe,target:{subject:at,number:st,state:Se.state}}));document.body.appendChild(V);var ao=()=>{let e=V.getBoundingClientRect();window.parent.postMessage({pencilPrereq:{course:ve,state:Se.state,w:Math.ceil(e.width),h:Math.ceil(e.height)}},"*")};document.fonts.ready.then(ao);new ResizeObserver(ao).observe(V);window.__prereq={parsedMap:Oe,history:Ce,result:Se};})();
