(()=>{function Et(){return[So(),Ro(),To(),Eo(),Ao(),ko(),Mo(),_o(),Io()].join(`
`)}function So(){return`
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
`}function Ro(){return`
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
`}function To(){return`
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
`}function Eo(){return`
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
`}function Ao(){return`
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
`}function ko(){return`
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
`}function Mo(){return`
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
`}function _o(){return`
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
`}function Io(){return`
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
`}function At(e){return[Po(e??(t=>`../assets/fonts/${t}`)),Lo(),Y(`:root,
[data-bc-theme="default"]`,Le),Y('[data-bc-theme="default"][data-bc-mode="dark"]',$e),Y('[data-bc-theme="pencil"]',No),Y('[data-bc-theme="pencil"][data-bc-mode="dark"]',Do),Y('[data-bc-theme="bright"]',Ho),Y('[data-bc-theme="bright"][data-bc-mode="dark"]',Oo)].join(`
`)}function Po(e){let t=(r,o,n,c="normal")=>`
@font-face {
  font-family: "${r}";
  font-style: ${c};
  font-weight: ${o};
  font-display: swap;
  src: url("${e(n)}") format("woff2");
}`;return[t("Special Elite",400,"special-elite-regular.woff2"),t("Caveat",400,"caveat-regular.woff2"),t("Caveat",600,"caveat-600.woff2"),t("Caveat",700,"caveat-700.woff2"),t("Inter",400,"inter-regular.woff2"),t("Inter",500,"inter-500.woff2"),t("Inter",600,"inter-600.woff2"),t("Inter",700,"inter-700.woff2"),t("JetBrains Mono",400,"jetbrains-mono-regular.woff2"),t("JetBrains Mono",500,"jetbrains-mono-500.woff2")].join(`
`)}function Lo(){return`
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
`}function $o(e,t){return`rgba(${e[0]}, ${e[1]}, ${e[2]}, ${t})`}function Z(e,t,r){return Object.entries(r).map(([o,n])=>`  --bc-color-${e}-${o}: ${$o(t,n)};`)}function Y(e,t){let r=[];r.push(...Z("accent-fill",t.accentRgb,t.accentFill)),r.push(...Z("accent-border",t.accentRgb,t.accentBorder)),r.push(...Z("warn-rose-fill",t.warnRoseRgb,t.warnRoseFill)),r.push(...Z("warn-rose-border",t.warnRoseRgb,t.warnRoseBorder)),r.push(...Z("ink-fill",t.inkFillRgb,t.inkFill)),r.push(`  --bc-color-ink-border-12: ${t.inkBorder12};`);for(let[o,n]of Object.entries(t.tokens))r.push(`  ${o}: ${n};`);return`
${e} {
${r.join(`
`)}
}
`}var Le={accentRgb:[102,2,60],accentFill:{"04":"0.04","05":"0.05","06":"0.06","08":"0.08",10:"0.10",12:"0.12",15:"0.15",18:"0.18",22:"0.22",24:"0.24",32:"0.32",45:"0.45"},accentBorder:{"08":"0.08",12:"0.12",14:"0.14",18:"0.18",22:"0.22",28:"0.28",32:"0.32",45:"0.45"},warnRoseRgb:[190,24,93],warnRoseFill:{12:"0.12",20:"0.20"},warnRoseBorder:{28:"0.28",32:"0.32"},inkFillRgb:[15,23,42],inkFill:{"04":"0.04","06":"0.06","08":"0.08","025":"0.025"},inkBorder12:"rgba(17, 24, 39, 0.12)",tokens:{"--bc-color-accent":"#66023c","--bc-color-accent-hover":"#500030","--bc-color-accent-pressed":"#3f0126","--bc-color-accent-on":"#ffffff","--bc-color-accent-soft":"#66023c","--bc-color-accent-soft-hover":"#500030","--bc-color-accent-soft-on":"#ffffff","--bc-color-accent-surface-faint":"#fff7fb","--bc-color-accent-surface-soft":"#fdeef5","--bc-color-accent-surface-tint":"#faf3f7","--bc-color-accent-surface-tile":"#f6ecf2","--bc-color-accent-surface-tile-2":"#f1ebef","--bc-color-accent-surface-row":"#faf7f9","--bc-color-accent-surface-row-border":"#f0e4eb","--bc-color-accent-mid-border":"#d8b6c8","--bc-color-warn-rose-text":"#9f1239","--bc-color-warn-rose-text-deep":"#881337","--bc-color-paper":"#4e2a84","--bc-color-paper-deep":"#3a1f63","--bc-color-paper-soft":"#f3eef9","--bc-color-bg":"#ffffff","--bc-color-bg-app":"#f3f4f6","--bc-color-bg-muted":"#fafafa","--bc-color-bg-inset":"var(--bc-color-accent-surface-row)","--bc-color-surface-hover":"#f7f7f8","--bc-color-surface-hover-strong":"#f3f3f5","--bc-color-surface-soft":"#f9fafb","--bc-color-border":"#e6e6ea","--bc-color-border-strong":"#d1d5db","--bc-color-border-divider":"#e5e7eb","--bc-color-surface-translucent-86":"rgba(255, 251, 253, 0.86)","--bc-color-surface-translucent-72":"rgba(255, 255, 255, 0.72)","--bc-color-surface-translucent-62":"rgba(255, 255, 255, 0.62)","--bc-color-surface-translucent-56":"rgba(255, 255, 255, 0.56)","--bc-color-surface-translucent-84":"rgba(255, 255, 255, 0.84)","--bc-color-surface-translucent-88":"rgba(255, 255, 255, 0.88)","--bc-color-surface-translucent-92":"rgba(255, 255, 255, 0.92)","--bc-color-surface-translucent-98":"rgba(255, 255, 255, 0.98)","--bc-color-surface-warm-grad-top":"rgba(255, 250, 252, 0.98)","--bc-color-text":"#1f2937","--bc-color-text-strong":"#111827","--bc-color-text-soft":"#4b5563","--bc-color-text-muted":"#6b7280","--bc-color-text-subtle":"#9ca3af","--bc-color-text-mauve":"#7a596a","--bc-color-text-mauve-soft":"#6b5a65","--bc-color-text-mauve-warm":"#5b4451","--bc-color-text-mauve-deep":"#2f1f29","--bc-color-text-mauve-panel":"#3f3340","--bc-color-text-mauve-pale":"#c9b4bf","--bc-color-text-mauve-cool":"#9b6b81","--bc-color-text-mauve-axis":"#9b8290","--bc-color-text-mauve-axis-strong":"#7a596a","--bc-color-text-body-warm":"#4b3a44","--bc-color-text-mauve-cool-alt":"#6b5a65","--bc-color-text-on-tooltip":"#f9fafb","--bc-color-text-on-histogram":"#3a2730","--bc-color-success":"#15803d","--bc-color-success-bg":"#dcfce7","--bc-color-success-bg-soft":"#ecfdf5","--bc-color-success-border":"#abefc6","--bc-color-success-text":"#054f31","--bc-color-success-deep":"#047857","--bc-color-success-distro-text":"#065f46","--bc-color-success-distro-bg":"#ecfdf5","--bc-color-warn":"#b45309","--bc-color-warn-bg":"#fef3c7","--bc-color-warn-bg-soft":"#fffaeb","--bc-color-warn-bg-page":"#fff7ed","--bc-color-warn-border":"#fedf89","--bc-color-warn-border-page":"#fdba74","--bc-color-warn-text":"#93370d","--bc-color-warn-text-page":"#7c2d12","--bc-color-warn-text-discipline":"#92400e","--bc-color-danger":"#b91c1c","--bc-color-danger-bg":"#fee2e2","--bc-color-danger-bg-soft":"#fef3f2","--bc-color-danger-bg-pill":"#fdecec","--bc-color-danger-border":"#fecdca","--bc-color-danger-text":"#912018","--bc-color-danger-text-pill":"#b03d3d","--bc-color-danger-deep":"#b91c1c","--bc-color-danger-rose":"#9f1239","--bc-color-info-bg":"#eef2ff","--bc-color-info-border":"#c7d2fe","--bc-color-info-text":"#1e1b4b","--bc-color-info-text-deep":"#3730a3","--bc-color-highlight":"#fef08a","--bc-color-highlight-text":"#713f12","--bc-color-highlight-mark":"rgba(254, 240, 138, 0.7)","--bc-color-star-base":"#c9b4bf","--bc-color-star-fill":"#d97706","--bc-color-hours-grad-start":"#a21caf","--bc-color-hours-grad-end":"#db2777","--bc-color-chart-trend-axis":"#f1ebef","--bc-color-chart-trend-text":"#9b8290","--bc-color-chart-trend-text-strong":"#7a596a","--bc-color-chart-axis-cool":"#475569","--bc-color-ink":"#1f2937","--bc-color-ink-deep":"#0f172a","--bc-color-ink-text":"#1f2937","--bc-color-ink-text-on-light":"#f9fafb","--bc-color-ink-instructor-pill-bg":"rgba(17, 24, 39, 0.06)","--bc-shadow-elev-1":"0 1px 2px rgba(15, 23, 42, 0.04)","--bc-shadow-elev-2":"0 2px 8px rgba(15, 23, 42, 0.05)","--bc-shadow-card-soft":"0 -1px 2px rgba(15, 23, 42, 0.04)","--bc-shadow-button":"0 2px 6px rgba(15, 23, 42, 0.18)","--bc-shadow-button-hover":"0 3px 8px rgba(15, 23, 42, 0.22)","--bc-shadow-add-cta":"0 2px 6px rgba(102, 2, 60, 0.22)","--bc-shadow-modal":"0 1px 2px rgba(0, 0, 0, 0.06), 0 30px 60px -10px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.04)","--bc-shadow-modal-status":"0 1px 2px rgba(0, 0, 0, 0.04)","--bc-shadow-auth-card":"0 28px 60px rgba(15, 23, 42, 0.32)","--bc-shadow-side-panel":"0 10px 28px rgba(102, 2, 60, 0.08)","--bc-shadow-tooltip":"0 8px 24px rgba(0, 0, 0, 0.18)","--bc-shadow-kpi-active-ring":"0 0 0 3px rgba(102, 2, 60, 0.08)","--bc-shadow-toggle-knob":"0 1px 3px rgba(0, 0, 0, 0.25)","--bc-shadow-input-focus-ring":"0 0 0 3px rgba(102, 2, 60, 0.18)","--bc-shadow-input-focus-inner":"inset 0 1px 2px rgba(15, 23, 42, 0.04)","--bc-color-overlay-modal":"rgba(15, 23, 42, 0.55)","--bc-color-overlay-auth":"rgba(15, 23, 42, 0.6)","--bc-color-overlay-on-light":"rgba(15, 23, 42, 0.08)","--bc-color-flash-pill-bg":"rgba(255, 255, 255, 0.65)","--bc-color-flash-action-bg":"rgba(255, 255, 255, 0.7)","--bc-color-flash-action-bg-hover":"rgba(255, 255, 255, 1)","--bc-color-sentiment-pos-fg":"#15803d","--bc-color-sentiment-pos-bg":"#ecfdf5","--bc-color-sentiment-neg-fg":"#9f1239","--bc-color-sentiment-neg-bg":"#fff1f2","--bc-color-sentiment-mix-fg":"#a16207","--bc-color-sentiment-mix-bg":"#fefce8","--bc-color-sentiment-neu-fg":"#7a596a","--bc-color-sentiment-neu-bg":"#f6ecf2","--bc-color-sentiment-all-dot":"#d8b6c8","--bc-color-kpi-fg-dark":"#f9fafb","--bc-color-panel-grad-top":"rgba(255, 250, 252, 0.98)","--bc-color-panel-grad-bottom":"rgba(255, 255, 255, 0.98)","--bc-color-card-outline":"rgba(17, 24, 39, 0.7)","--bc-color-card-divider-soft":"rgba(17, 24, 39, 0.12)","--bc-color-cart-bg":"#1f2937","--bc-color-cart-bg-hover":"#0f172a","--bc-color-cart-border":"rgba(15, 23, 42, 0.45)","--bc-color-cart-border-hover":"rgba(15, 23, 42, 0.7)","--bc-color-cart-text":"#f9fafb","--bc-color-cart-success-bg":"#047857","--bc-color-cart-success-border":"rgba(4, 120, 87, 0.65)","--bc-color-cart-success-text":"#ecfdf5","--bc-color-cart-error-bg":"#b91c1c","--bc-color-cart-error-border":"rgba(185, 28, 28, 0.7)","--bc-color-cart-error-text":"#fef2f2","--bc-color-cart-loading-bg":"#4b5563","--bc-color-cart-loading-border":"rgba(75, 85, 99, 0.65)","--bc-color-cart-loading-text":"#f3f4f6","--bc-color-comment-highlight-light":"rgba(250, 204, 21, 0.38)","--bc-color-comments-card-bg":"var(--bc-color-surface-hover)","--bc-color-disabled-bg":"#c7c2d6","--bc-color-gate-warn-bg":"#fff7ed","--bc-color-gate-warn-border":"#fdba74","--bc-color-gate-warn-text":"#7c2d12","--bc-color-gate-lock-bg":"#eef2ff","--bc-color-gate-lock-border":"#c7d2fe","--bc-color-gate-lock-text":"#1e1b4b","--bc-color-gate-ok-bg":"#ecfdf5","--bc-color-gate-ok-border":"#a7f3d0","--bc-color-gate-ok-text":"#064e3b","--bc-color-seat-full-bg":"#fde8e8","--bc-color-seat-full-border":"#f4a9a9","--bc-color-seat-full-ink":"#8c1d18","--bc-color-seat-waitlist-bg":"#fff0d9","--bc-color-seat-waitlist-border":"#f1c27a","--bc-color-seat-waitlist-ink":"#8a4b00","--bc-color-seat-info-bg":"#eef2ff","--bc-color-seat-info-border":"#c7d2fe","--bc-color-seat-info-ink":"#3730a3","--bc-color-seat-warn-bg":"#fff1df","--bc-color-seat-warn-border":"#f7c58a","--bc-color-seat-warn-ink":"#94410d","--bc-color-seat-tight-bg":"#fff8d9","--bc-color-seat-tight-border":"#eed46b","--bc-color-seat-tight-ink":"#7a5d00","--bc-color-seat-room-bg":"#eef8d7","--bc-color-seat-room-border":"#bfdc7d","--bc-color-seat-room-ink":"#4d6b00","--bc-color-seat-open-bg":"#e8f5e9","--bc-color-seat-open-border":"#b9ddbc","--bc-color-seat-open-ink":"#1b5e20","--bc-color-seat-warn-row-text":"#8a2e00","--bc-color-seat-warn-row-border":"#d99a66","--bc-color-seat-error-text":"#7a123f","--bc-color-seat-muted-text":"#5c4c56","--bc-color-trend-zone-1":"rgba(220, 38, 38, 0.08)","--bc-color-trend-zone-2":"rgba(234, 88, 12, 0.08)","--bc-color-trend-zone-3":"rgba(202, 138, 4, 0.08)","--bc-color-trend-zone-4":"rgba(101, 163, 13, 0.10)","--bc-color-trend-zone-5":"rgba(22, 163, 74, 0.10)","--bc-color-trend-zone-1-solid":"rgba(220, 38, 38, 0.85)","--bc-color-trend-zone-2-solid":"rgba(234, 88, 12, 0.85)","--bc-color-trend-zone-3-solid":"rgba(202, 138, 4, 0.85)","--bc-color-trend-zone-4-solid":"rgba(101, 163, 13, 0.85)","--bc-color-trend-zone-5-solid":"rgba(22, 163, 74, 0.85)","--bc-color-trend-zone-6-solid":"rgba(4, 120, 87, 0.92)"}},$e={accentRgb:[252,165,207],accentFill:{"04":"0.06","05":"0.06","06":"0.06","08":"0.08",10:"0.10",12:"0.12",15:"0.16",18:"0.16",22:"0.22",24:"0.22",32:"0.30",45:"0.40"},accentBorder:{"08":"0.12",12:"0.12",14:"0.14",18:"0.18",22:"0.22",28:"0.30",32:"0.36",45:"0.45"},warnRoseRgb:[251,113,133],warnRoseFill:{12:"0.14",20:"0.22"},warnRoseBorder:{28:"0.30",32:"0.40"},inkFillRgb:[248,250,252],inkFill:{"04":"0.04","06":"0.06","08":"0.08","025":"0.05"},inkBorder12:"rgba(255, 255, 255, 0.14)",tokens:{"--bc-color-season-fall":"#e0895a","--bc-color-season-winter":"#7fb0e6","--bc-color-season-spring":"#ec86ac","--bc-color-season-summer":"#f0bd45","--bc-shadow-sheet":"-18px 0 40px -24px rgba(0, 0, 0, 0.8)","--bc-color-sentiment-pos-fg":"#4ade80","--bc-color-sentiment-neg-fg":"#fb7185","--bc-color-sentiment-mix-fg":"#eab308","--bc-color-sentiment-neu-fg":"#a3a3a3","--bc-color-accent":"#d8b4fe","--bc-color-accent-hover":"#c084fc","--bc-color-accent-pressed":"#c084fc","--bc-color-accent-on":"#1f1147","--bc-color-accent-soft":"#fbcfe8","--bc-color-accent-soft-hover":"#f9a8d4","--bc-color-accent-soft-on":"#500030","--bc-color-accent-surface-faint":"rgba(168, 85, 247, 0.08)","--bc-color-accent-surface-soft":"rgba(216, 180, 254, 0.18)","--bc-color-accent-surface-tint":"rgba(252, 165, 207, 0.08)","--bc-color-accent-surface-tile":"rgba(252, 165, 207, 0.14)","--bc-color-accent-surface-tile-2":"rgba(252, 165, 207, 0.10)","--bc-color-accent-surface-row":"rgba(17, 24, 39, 0.30)","--bc-color-accent-surface-row-border":"rgba(252, 165, 207, 0.14)","--bc-color-accent-mid-border":"rgba(252, 165, 207, 0.30)","--bc-color-warn-rose-text":"#fecdd3","--bc-color-warn-rose-text-deep":"#fecdd3","--bc-color-bg":"#262626","--bc-color-bg-app":"#171717","--bc-color-bg-muted":"#171717","--bc-color-bg-inset":"#262626","--bc-color-surface-hover":"#404040","--bc-color-surface-hover-strong":"#525252","--bc-color-surface-soft":"#262626","--bc-color-border":"#404040","--bc-color-border-strong":"#525252","--bc-color-border-divider":"#404040","--bc-color-surface-translucent-86":"rgba(17, 24, 39, 0.26)","--bc-color-surface-translucent-72":"rgba(17, 24, 39, 0.32)","--bc-color-surface-translucent-62":"rgba(17, 24, 39, 0.22)","--bc-color-surface-translucent-56":"rgba(17, 24, 39, 0.22)","--bc-color-surface-translucent-84":"rgba(17, 24, 39, 0.35)","--bc-color-surface-translucent-88":"transparent","--bc-color-surface-translucent-92":"rgba(17, 24, 39, 0.40)","--bc-color-surface-translucent-98":"rgba(31, 24, 29, 0.98)","--bc-color-surface-warm-grad-top":"rgba(31, 24, 29, 0.98)","--bc-color-text":"#fafafa","--bc-color-text-strong":"#f9fafb","--bc-color-text-soft":"#d1d5db","--bc-color-text-muted":"#a3a3a3","--bc-color-text-subtle":"#737373","--bc-color-text-mauve":"#d4b9c5","--bc-color-text-mauve-soft":"#d8c7d0","--bc-color-text-mauve-warm":"#f3e5ed","--bc-color-text-mauve-deep":"#fff6fb","--bc-color-text-mauve-panel":"#f5e7ee","--bc-color-text-mauve-pale":"rgba(255, 227, 238, 0.36)","--bc-color-text-mauve-cool":"#c4b5fd","--bc-color-text-mauve-axis":"#a3a3a3","--bc-color-text-mauve-axis-strong":"#a3a3a3","--bc-color-text-body-warm":"#e8d3dc","--bc-color-text-mauve-cool-alt":"#d8c7d0","--bc-color-text-on-tooltip":"#fafafa","--bc-color-text-on-histogram":"#fafafa","--bc-color-success":"#6ee7b7","--bc-color-success-bg":"rgba(16, 78, 53, 0.32)","--bc-color-success-bg-soft":"rgba(16, 78, 53, 0.32)","--bc-color-success-border":"rgba(110, 231, 183, 0.36)","--bc-color-success-text":"#d1fadf","--bc-color-success-deep":"#6ee7b7","--bc-color-success-distro-text":"#d1fadf","--bc-color-success-distro-bg":"rgba(16, 78, 53, 0.32)","--bc-color-warn":"#fef3c7","--bc-color-warn-bg":"rgba(120, 53, 15, 0.32)","--bc-color-warn-bg-soft":"rgba(120, 53, 15, 0.32)","--bc-color-warn-bg-page":"rgba(120, 53, 15, 0.32)","--bc-color-warn-border":"rgba(254, 223, 137, 0.36)","--bc-color-warn-border-page":"rgba(254, 223, 137, 0.36)","--bc-color-warn-text":"#fef3c7","--bc-color-warn-text-page":"#fef3c7","--bc-color-warn-text-discipline":"#fef3c7","--bc-color-danger":"#fda4af","--bc-color-danger-bg":"rgba(127, 29, 29, 0.32)","--bc-color-danger-bg-soft":"rgba(127, 29, 29, 0.32)","--bc-color-danger-bg-pill":"rgba(127, 29, 29, 0.32)","--bc-color-danger-border":"rgba(254, 205, 202, 0.36)","--bc-color-danger-text":"#fee4e2","--bc-color-danger-text-pill":"#fda4af","--bc-color-danger-deep":"#fda4af","--bc-color-danger-rose":"#fda4af","--bc-color-info-bg":"rgba(168, 85, 247, 0.14)","--bc-color-info-border":"rgba(216, 180, 254, 0.32)","--bc-color-info-text":"#d8b4fe","--bc-color-info-text-deep":"#c4b5fd","--bc-color-highlight":"rgba(254, 240, 138, 0.85)","--bc-color-highlight-text":"#1f1147","--bc-color-highlight-mark":"rgba(254, 240, 138, 0.35)","--bc-color-star-base":"rgba(255, 227, 238, 0.36)","--bc-color-star-fill":"#fbbf24","--bc-color-hours-grad-start":"#d8b4fe","--bc-color-hours-grad-end":"#f9a8d4","--bc-color-chart-trend-axis":"#525252","--bc-color-chart-trend-text":"#a3a3a3","--bc-color-chart-trend-text-strong":"#a3a3a3","--bc-color-chart-axis-cool":"#a3a3a3","--bc-color-ink":"#d8b4fe","--bc-color-ink-deep":"#c084fc","--bc-color-ink-text":"#fafafa","--bc-color-ink-text-on-light":"#1f1147","--bc-color-ink-instructor-pill-bg":"rgba(255, 255, 255, 0.08)","--bc-shadow-elev-1":"0 1px 2px rgba(0, 0, 0, 0.4)","--bc-shadow-elev-2":"0 2px 8px rgba(0, 0, 0, 0.4)","--bc-shadow-card-soft":"0 -1px 2px rgba(0, 0, 0, 0.4)","--bc-shadow-button":"0 2px 6px rgba(0, 0, 0, 0.4)","--bc-shadow-button-hover":"0 3px 8px rgba(0, 0, 0, 0.5)","--bc-shadow-add-cta":"0 2px 6px rgba(216, 180, 254, 0.3)","--bc-shadow-modal":"0 1px 2px rgba(0, 0, 0, 0.4), 0 30px 60px -10px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.04)","--bc-shadow-modal-status":"0 1px 2px rgba(0, 0, 0, 0.4)","--bc-shadow-auth-card":"0 28px 60px rgba(0, 0, 0, 0.6)","--bc-shadow-side-panel":"0 10px 28px rgba(0, 0, 0, 0.22)","--bc-shadow-tooltip":"0 8px 24px rgba(0, 0, 0, 0.45)","--bc-shadow-kpi-active-ring":"0 0 0 3px rgba(216, 180, 254, 0.18)","--bc-shadow-toggle-knob":"0 1px 3px rgba(0, 0, 0, 0.45)","--bc-shadow-input-focus-ring":"0 0 0 3px rgba(216, 180, 254, 0.24)","--bc-shadow-input-focus-inner":"inset 0 1px 2px rgba(0, 0, 0, 0.3)","--bc-color-overlay-modal":"rgba(0, 0, 0, 0.55)","--bc-color-overlay-auth":"rgba(0, 0, 0, 0.6)","--bc-color-overlay-on-light":"rgba(255, 255, 255, 0.08)","--bc-color-panel-grad-top":"rgba(31, 24, 29, 0.98)","--bc-color-panel-grad-bottom":"rgba(23, 18, 22, 0.98)","--bc-color-card-outline":"rgba(248, 250, 252, 0.7)","--bc-color-card-divider-soft":"rgba(255, 255, 255, 0.14)","--bc-color-heatmap-rating-rgb":"216, 180, 254","--bc-color-heatmap-hours-rgb":"252, 165, 207","--bc-color-cart-bg":"#404040","--bc-color-cart-bg-hover":"#525252","--bc-color-cart-border":"#525252","--bc-color-cart-border-hover":"#737373","--bc-color-cart-text":"#fafafa","--bc-color-cart-success-bg":"#047857","--bc-color-cart-success-border":"#10b981","--bc-color-cart-success-text":"#ecfdf5","--bc-color-cart-error-bg":"#b91c1c","--bc-color-cart-error-border":"#ef4444","--bc-color-cart-error-text":"#fef2f2","--bc-color-cart-loading-bg":"#525252","--bc-color-cart-loading-border":"#737373","--bc-color-cart-loading-text":"#f3f4f6","--bc-color-comment-highlight-light":"rgba(250, 204, 21, 0.24)","--bc-color-disabled-bg":"#525252","--bc-color-gate-warn-bg":"rgba(120, 53, 15, 0.32)","--bc-color-gate-warn-border":"rgba(254, 223, 137, 0.36)","--bc-color-gate-warn-text":"#fef3c7","--bc-color-gate-lock-bg":"rgba(168, 85, 247, 0.14)","--bc-color-gate-lock-border":"rgba(216, 180, 254, 0.32)","--bc-color-gate-lock-text":"#d8b4fe","--bc-color-gate-ok-bg":"rgba(16, 78, 53, 0.32)","--bc-color-gate-ok-border":"rgba(110, 231, 183, 0.36)","--bc-color-gate-ok-text":"#d1fadf","--bc-color-trend-zone-1":"rgba(248, 113, 113, 0.16)","--bc-color-trend-zone-2":"rgba(251, 146, 60, 0.16)","--bc-color-trend-zone-3":"rgba(250, 204, 21, 0.16)","--bc-color-trend-zone-4":"rgba(132, 204, 22, 0.18)","--bc-color-trend-zone-5":"rgba(74, 222, 128, 0.18)","--bc-color-trend-zone-1-solid":"rgba(248, 113, 113, 0.90)","--bc-color-trend-zone-2-solid":"rgba(251, 146, 60, 0.90)","--bc-color-trend-zone-3-solid":"rgba(250, 204, 21, 0.90)","--bc-color-trend-zone-4-solid":"rgba(132, 204, 22, 0.90)","--bc-color-trend-zone-5-solid":"rgba(74, 222, 128, 0.90)","--bc-color-trend-zone-6-solid":"rgba(16, 185, 129, 0.95)"}},No={accentRgb:[208,95,120],accentFill:{"04":"0.05","05":"0.06","06":"0.07","08":"0.10",10:"0.12",12:"0.14",15:"0.18",18:"0.22",22:"0.26",24:"0.28",32:"0.36",45:"0.50"},accentBorder:{"08":"0.14",12:"0.20",14:"0.22",18:"0.28",22:"0.32",28:"0.40",32:"0.45",45:"0.55"},warnRoseRgb:[190,24,93],warnRoseFill:{12:"0.12",20:"0.20"},warnRoseBorder:{28:"0.28",32:"0.32"},inkFillRgb:[42,42,46],inkFill:{"04":"0.04","06":"0.06","08":"0.08","025":"0.025"},inkBorder12:"rgba(42, 42, 46, 0.12)",tokens:{"--bc-color-accent":"#d05f78","--bc-color-accent-hover":"#b54e63","--bc-color-accent-pressed":"#99425a","--bc-color-accent-on":"#fffaf3","--bc-color-accent-soft":"#a06a0c","--bc-color-accent-soft-hover":"#815509","--bc-color-accent-soft-on":"#fffaf3","--bc-color-accent-surface-faint":"#fffaf3","--bc-color-accent-surface-soft":"#ece4d6","--bc-color-accent-surface-tint":"#f1eadd","--bc-color-accent-surface-tile":"#ece4d6","--bc-color-accent-surface-tile-2":"#efe8db","--bc-color-accent-surface-row":"#f4ede0","--bc-color-accent-surface-row-border":"#d8cdba","--bc-color-accent-mid-border":"#b8ad97","--bc-color-warn-rose-text":"#9f1239","--bc-color-warn-rose-text-deep":"#881337","--bc-color-paper":"#4e2a84","--bc-color-paper-deep":"#3a1f63","--bc-color-paper-soft":"#f3eef9","--bc-color-bg":"#fdfbf6","--bc-color-bg-app":"#f6ecc0","--bc-color-bg-muted":"#f5f1ea","--bc-color-bg-inset":"#f3ebde","--bc-color-surface-hover":"#f0e9dc","--bc-color-surface-hover-strong":"#e7e0d0","--bc-color-surface-soft":"#faf6ef","--bc-color-border":"#d9cab4","--bc-color-border-strong":"#c8c0a4","--bc-color-border-divider":"#e3d6c4","--bc-color-surface-translucent-86":"rgba(255, 250, 243, 0.86)","--bc-color-surface-translucent-72":"rgba(255, 250, 243, 0.72)","--bc-color-surface-translucent-62":"rgba(255, 250, 243, 0.62)","--bc-color-surface-translucent-56":"rgba(255, 250, 243, 0.56)","--bc-color-surface-translucent-84":"rgba(255, 250, 243, 0.84)","--bc-color-surface-translucent-88":"rgba(255, 250, 243, 0.88)","--bc-color-surface-translucent-92":"rgba(255, 250, 243, 0.92)","--bc-color-surface-translucent-98":"rgba(255, 250, 243, 0.98)","--bc-color-surface-warm-grad-top":"rgba(255, 250, 243, 0.98)","--bc-color-text":"#2a2a2e","--bc-color-text-strong":"#1d1d20","--bc-color-text-soft":"#4a4d52","--bc-color-text-muted":"#7d8088","--bc-color-text-subtle":"#a09a86","--bc-color-text-mauve":"#6b5a55","--bc-color-text-mauve-soft":"#5c4d49","--bc-color-text-mauve-warm":"#4a3d39","--bc-color-text-mauve-deep":"#2a2a2e","--bc-color-text-mauve-panel":"#3a3330","--bc-color-text-mauve-pale":"#c8c0a4","--bc-color-text-mauve-cool":"#8a6f5e","--bc-color-text-mauve-axis":"#9b9080","--bc-color-text-mauve-axis-strong":"#6b5a55","--bc-color-text-body-warm":"#4a3d39","--bc-color-text-mauve-cool-alt":"#6b5a55","--bc-color-text-on-tooltip":"#fffaf3","--bc-color-text-on-histogram":"#2a2a2e","--bc-color-success":"#2a7a4a","--bc-color-success-bg":"#e3f2d9","--bc-color-success-bg-soft":"#effae0","--bc-color-success-border":"#b8d59a","--bc-color-success-text":"#1f5a36","--bc-color-success-deep":"#2a7a4a","--bc-color-success-distro-text":"#1f5a36","--bc-color-success-distro-bg":"#effae0","--bc-color-warn":"#b07a18","--bc-color-warn-bg":"#f5e8c4","--bc-color-warn-bg-soft":"#fbf6e3","--bc-color-warn-bg-page":"#fbf6e3","--bc-color-warn-border":"#e2d2a4","--bc-color-warn-border-page":"#d4a373","--bc-color-warn-text":"#7c5a14","--bc-color-warn-text-page":"#6b4d11","--bc-color-warn-text-discipline":"#8a6512","--bc-color-danger":"#b54e63","--bc-color-danger-bg":"#fbe1e6","--bc-color-danger-bg-soft":"#fdeef1","--bc-color-danger-bg-pill":"#fbe1e6","--bc-color-danger-border":"#f3b9c5","--bc-color-danger-text":"#8a3a4a","--bc-color-danger-text-pill":"#99425a","--bc-color-danger-deep":"#8a3a4a","--bc-color-danger-rose":"#9f1239","--bc-color-info-bg":"#e8e3f0","--bc-color-info-border":"#c4b8d6","--bc-color-info-text":"#2d2347","--bc-color-info-text-deep":"#3d3060","--bc-color-highlight":"#f5e8c4","--bc-color-highlight-text":"#5b4451","--bc-color-highlight-mark":"rgba(245, 200, 66, 0.45)","--bc-color-star-base":"#d9cab4","--bc-color-star-fill":"#d97706","--bc-color-hours-grad-start":"#d05f78","--bc-color-hours-grad-end":"#b08512","--bc-color-chart-trend-axis":"#ead9aa","--bc-color-chart-trend-text":"#9b9080","--bc-color-chart-trend-text-strong":"#6b5a55","--bc-color-chart-axis-cool":"#6b5a55","--bc-color-ink":"#2a2a2e","--bc-color-ink-deep":"#1d1d20","--bc-color-ink-text":"#2a2a2e","--bc-color-ink-text-on-light":"#fffaf3","--bc-color-ink-instructor-pill-bg":"rgba(42, 42, 46, 0.06)","--bc-shadow-elev-1":"0 1px 2px rgba(42, 42, 46, 0.08)","--bc-shadow-elev-2":"0 2px 8px rgba(42, 42, 46, 0.10)","--bc-shadow-card-soft":"0 -1px 2px rgba(42, 42, 46, 0.06)","--bc-shadow-button":"0 2px 6px rgba(42, 42, 46, 0.18)","--bc-shadow-button-hover":"0 3px 8px rgba(42, 42, 46, 0.22)","--bc-shadow-add-cta":"2px 2px 0 #d05f78","--bc-shadow-modal":"0 1px 2px rgba(42, 42, 46, 0.08), 0 30px 60px -10px rgba(42, 42, 46, 0.35), 0 0 0 1px rgba(42, 42, 46, 0.06)","--bc-shadow-modal-status":"0 1px 2px rgba(42, 42, 46, 0.06)","--bc-shadow-auth-card":"0 28px 60px rgba(42, 42, 46, 0.32)","--bc-shadow-side-panel":"0 10px 28px rgba(42, 42, 46, 0.10)","--bc-shadow-tooltip":"0 8px 24px rgba(42, 42, 46, 0.22)","--bc-shadow-kpi-active-ring":"0 0 0 3px rgba(208, 95, 120, 0.14)","--bc-shadow-toggle-knob":"0 1px 3px rgba(42, 42, 46, 0.32)","--bc-shadow-input-focus-ring":"0 0 0 3px rgba(208, 95, 120, 0.24)","--bc-shadow-input-focus-inner":"inset 0 1px 2px rgba(42, 42, 46, 0.06)","--bc-color-overlay-modal":"rgba(42, 42, 46, 0.55)","--bc-color-overlay-auth":"rgba(42, 42, 46, 0.6)","--bc-color-overlay-on-light":"rgba(42, 42, 46, 0.10)","--bc-color-panel-grad-top":"rgba(255, 250, 243, 0.98)","--bc-color-panel-grad-bottom":"rgba(252, 245, 230, 0.98)","--bc-color-card-outline":"rgba(42, 42, 46, 0.7)","--bc-color-card-divider-soft":"rgba(42, 42, 46, 0.12)","--bc-color-cart-bg":"#2a2a2e","--bc-color-cart-bg-hover":"#1d1d20","--bc-color-cart-border":"rgba(42, 42, 46, 0.45)","--bc-color-cart-border-hover":"rgba(42, 42, 46, 0.7)","--bc-color-cart-text":"#fffaf3","--bc-color-cart-success-bg":"#2a7a4a","--bc-color-cart-success-border":"rgba(42, 122, 74, 0.65)","--bc-color-cart-success-text":"#effae0","--bc-color-cart-error-bg":"#b54e63","--bc-color-cart-error-border":"rgba(181, 78, 99, 0.7)","--bc-color-cart-error-text":"#fdeef1","--bc-color-cart-loading-bg":"#6b5a55","--bc-color-cart-loading-border":"rgba(107, 90, 85, 0.65)","--bc-color-cart-loading-text":"#f7f1ea","--bc-color-comment-highlight-light":"rgba(245, 200, 66, 0.22)","--bc-color-comments-card-bg":"#eceae4","--bc-color-heatmap-rating-rgb":"42, 42, 46","--bc-color-heatmap-hours-rgb":"208, 95, 120","--bc-color-disabled-bg":"#d9cab4","--bc-color-gate-warn-bg":"#fdf3c4","--bc-color-gate-warn-border":"#d4a373","--bc-color-gate-warn-text":"#6b4d11","--bc-color-gate-lock-bg":"#e8e3f0","--bc-color-gate-lock-border":"#c4b8d6","--bc-color-gate-lock-text":"#2d2347","--bc-color-gate-ok-bg":"#effae0","--bc-color-gate-ok-border":"#b8d59a","--bc-color-gate-ok-text":"#1f5a36","--bc-color-seat-full-bg":"#fbe1e6","--bc-color-seat-full-border":"#f3b9c5","--bc-color-seat-full-ink":"#8a3a4a","--bc-color-seat-waitlist-bg":"#fbe89a","--bc-color-seat-waitlist-border":"#d4a373","--bc-color-seat-waitlist-ink":"#8a4b00","--bc-color-seat-info-bg":"#e8e3f0","--bc-color-seat-info-border":"#c4b8d6","--bc-color-seat-info-ink":"#3d3060","--bc-color-seat-warn-bg":"#fdf3c4","--bc-color-seat-warn-border":"#d4a373","--bc-color-seat-warn-ink":"#6b4d11","--bc-color-seat-tight-bg":"#fdf3c4","--bc-color-seat-tight-border":"#ead9aa","--bc-color-seat-tight-ink":"#7c5a14","--bc-color-seat-room-bg":"#effae0","--bc-color-seat-room-border":"#b8d59a","--bc-color-seat-room-ink":"#1f5a36","--bc-color-seat-open-bg":"#effae0","--bc-color-seat-open-border":"#b8d59a","--bc-color-seat-open-ink":"#1f5a36","--bc-color-seat-warn-row-text":"#6b4d11","--bc-color-seat-warn-row-border":"#d4a373","--bc-color-seat-error-text":"#8a3a4a","--bc-color-seat-muted-text":"#6b5a55","--bc-color-trend-zone-1":"rgba(220, 38, 38, 0.08)","--bc-color-trend-zone-2":"rgba(234, 88, 12, 0.08)","--bc-color-trend-zone-3":"rgba(202, 138, 4, 0.08)","--bc-color-trend-zone-4":"rgba(101, 163, 13, 0.10)","--bc-color-trend-zone-5":"rgba(22, 163, 74, 0.10)","--bc-color-trend-zone-1-solid":"rgba(220, 38, 38, 0.85)","--bc-color-trend-zone-2-solid":"rgba(234, 88, 12, 0.85)","--bc-color-trend-zone-3-solid":"rgba(202, 138, 4, 0.85)","--bc-color-trend-zone-4-solid":"rgba(101, 163, 13, 0.85)","--bc-color-trend-zone-5-solid":"rgba(22, 163, 74, 0.85)","--bc-color-trend-zone-6-solid":"rgba(4, 120, 87, 0.92)","--bc-font-display":'"Special Elite", "Courier Prime", ui-monospace, SFMono-Regular, Menlo, monospace',"--bc-font-hand":'"Caveat", "Patrick Hand", ui-rounded, "Comic Sans MS", cursive',"--bc-fw-display":"var(--bc-fw-regular)"}},Do={accentRgb:[245,163,180],accentFill:{"04":"0.06","05":"0.07","06":"0.08","08":"0.10",10:"0.12",12:"0.14",15:"0.18",18:"0.20",22:"0.24",24:"0.26",32:"0.32",45:"0.42"},accentBorder:{"08":"0.14",12:"0.16",14:"0.18",18:"0.22",22:"0.26",28:"0.32",32:"0.40",45:"0.50"},warnRoseRgb:[251,113,133],warnRoseFill:{12:"0.16",20:"0.22"},warnRoseBorder:{28:"0.30",32:"0.40"},inkFillRgb:[255,250,243],inkFill:{"04":"0.05","06":"0.07","08":"0.10","025":"0.04"},inkBorder12:"rgba(255, 250, 243, 0.14)",tokens:{"--bc-color-season-fall":"#e0895a","--bc-color-season-winter":"#7fb0e6","--bc-color-season-spring":"#ec86ac","--bc-color-season-summer":"#f0bd45","--bc-shadow-sheet":"-18px 0 40px -24px rgba(0, 0, 0, 0.8)","--bc-color-sentiment-pos-fg":"#86c98a","--bc-color-sentiment-neg-fg":"#f5a3b4","--bc-color-sentiment-mix-fg":"#e3b341","--bc-color-sentiment-neu-fg":"#b3a890","--bc-color-accent":"#f5a3b4","--bc-color-accent-hover":"#f7b8c5","--bc-color-accent-pressed":"#e88fa3","--bc-color-accent-on":"#2a1d22","--bc-color-accent-soft":"#f5c842","--bc-color-accent-soft-hover":"#ffd864","--bc-color-accent-soft-on":"#2a1d22","--bc-color-accent-surface-faint":"rgba(245, 163, 180, 0.08)","--bc-color-accent-surface-soft":"rgba(245, 200, 66, 0.16)","--bc-color-accent-surface-tint":"rgba(245, 163, 180, 0.10)","--bc-color-accent-surface-tile":"rgba(245, 163, 180, 0.14)","--bc-color-accent-surface-tile-2":"rgba(245, 163, 180, 0.10)","--bc-color-accent-surface-row":"rgba(43, 37, 28, 0.55)","--bc-color-accent-surface-row-border":"rgba(245, 163, 180, 0.16)","--bc-color-accent-mid-border":"rgba(245, 163, 180, 0.32)","--bc-color-warn-rose-text":"#fecdd3","--bc-color-warn-rose-text-deep":"#fecdd3","--bc-color-bg":"#2b251c","--bc-color-bg-app":"#211c14","--bc-color-bg-muted":"#1d1812","--bc-color-bg-inset":"#2b251c","--bc-color-surface-hover":"#3a3225","--bc-color-surface-hover-strong":"#4a3f30","--bc-color-surface-soft":"#2b251c","--bc-color-border":"#4a3f30","--bc-color-border-strong":"#5c4f3c","--bc-color-border-divider":"#4a3f30","--bc-color-surface-translucent-86":"rgba(33, 28, 20, 0.86)","--bc-color-surface-translucent-72":"rgba(33, 28, 20, 0.72)","--bc-color-surface-translucent-62":"rgba(33, 28, 20, 0.62)","--bc-color-surface-translucent-56":"rgba(33, 28, 20, 0.56)","--bc-color-surface-translucent-84":"rgba(33, 28, 20, 0.84)","--bc-color-surface-translucent-88":"rgba(33, 28, 20, 0.88)","--bc-color-surface-translucent-92":"rgba(33, 28, 20, 0.92)","--bc-color-surface-translucent-98":"rgba(33, 28, 20, 0.98)","--bc-color-surface-warm-grad-top":"rgba(43, 37, 28, 0.98)","--bc-color-text":"#f6ecc0","--bc-color-text-strong":"#fffaf3","--bc-color-text-soft":"#e3d6b8","--bc-color-text-muted":"#b3a890","--bc-color-text-subtle":"#8a8068","--bc-color-text-mauve":"#d8c8b0","--bc-color-text-mauve-soft":"#dcc9b6","--bc-color-text-mauve-warm":"#f3e3c8","--bc-color-text-mauve-deep":"#fffaf3","--bc-color-text-mauve-panel":"#f3e3c8","--bc-color-text-mauve-pale":"rgba(246, 236, 192, 0.40)","--bc-color-text-mauve-cool":"#f5a3b4","--bc-color-text-mauve-axis":"#b3a890","--bc-color-text-mauve-axis-strong":"#d8c8b0","--bc-color-text-body-warm":"#f3e3c8","--bc-color-text-mauve-cool-alt":"#dcc9b6","--bc-color-text-on-tooltip":"#fffaf3","--bc-color-text-on-histogram":"#fffaf3","--bc-color-success":"#9be3a8","--bc-color-success-bg":"rgba(31, 90, 54, 0.40)","--bc-color-success-bg-soft":"rgba(31, 90, 54, 0.32)","--bc-color-success-border":"rgba(155, 227, 168, 0.40)","--bc-color-success-text":"#d5f3da","--bc-color-success-deep":"#9be3a8","--bc-color-success-distro-text":"#d5f3da","--bc-color-success-distro-bg":"rgba(31, 90, 54, 0.40)","--bc-color-warn":"#f5c842","--bc-color-warn-bg":"rgba(124, 90, 20, 0.42)","--bc-color-warn-bg-soft":"rgba(124, 90, 20, 0.32)","--bc-color-warn-bg-page":"rgba(124, 90, 20, 0.32)","--bc-color-warn-border":"rgba(245, 200, 66, 0.40)","--bc-color-warn-border-page":"rgba(245, 200, 66, 0.40)","--bc-color-warn-text":"#fbe89a","--bc-color-warn-text-page":"#fbe89a","--bc-color-warn-text-discipline":"#fbe89a","--bc-color-danger":"#f5a3b4","--bc-color-danger-bg":"rgba(138, 58, 74, 0.40)","--bc-color-danger-bg-soft":"rgba(138, 58, 74, 0.32)","--bc-color-danger-bg-pill":"rgba(138, 58, 74, 0.40)","--bc-color-danger-border":"rgba(245, 163, 180, 0.40)","--bc-color-danger-text":"#fbe1e6","--bc-color-danger-text-pill":"#f5a3b4","--bc-color-danger-deep":"#f5a3b4","--bc-color-danger-rose":"#f5a3b4","--bc-color-info-bg":"rgba(196, 184, 214, 0.16)","--bc-color-info-border":"rgba(196, 184, 214, 0.32)","--bc-color-info-text":"#d6cae8","--bc-color-info-text-deep":"#b9a8da","--bc-color-highlight":"rgba(245, 200, 66, 0.85)","--bc-color-highlight-text":"#2a1d10","--bc-color-highlight-mark":"rgba(245, 200, 66, 0.30)","--bc-color-star-base":"rgba(246, 236, 192, 0.32)","--bc-color-star-fill":"#f5c842","--bc-color-hours-grad-start":"#f5a3b4","--bc-color-hours-grad-end":"#f5c842","--bc-color-chart-trend-axis":"#5c4f3c","--bc-color-chart-trend-text":"#b3a890","--bc-color-chart-trend-text-strong":"#d8c8b0","--bc-color-chart-axis-cool":"#b3a890","--bc-color-ink":"#f5a3b4","--bc-color-ink-deep":"#f7b8c5","--bc-color-ink-text":"#fffaf3","--bc-color-ink-text-on-light":"#2a1d22","--bc-color-ink-instructor-pill-bg":"rgba(255, 250, 243, 0.08)","--bc-shadow-elev-1":"0 1px 2px rgba(0, 0, 0, 0.45)","--bc-shadow-elev-2":"0 2px 8px rgba(0, 0, 0, 0.45)","--bc-shadow-card-soft":"0 -1px 2px rgba(0, 0, 0, 0.45)","--bc-shadow-button":"2px 2px 0 rgba(245, 163, 180, 0.85)","--bc-shadow-button-hover":"3px 3px 0 rgba(245, 163, 180, 0.95)","--bc-shadow-add-cta":"2px 2px 0 #f5a3b4","--bc-shadow-modal":"0 1px 2px rgba(0, 0, 0, 0.45), 0 30px 60px -10px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 250, 243, 0.05)","--bc-shadow-modal-status":"0 1px 2px rgba(0, 0, 0, 0.45)","--bc-shadow-auth-card":"0 28px 60px rgba(0, 0, 0, 0.6)","--bc-shadow-side-panel":"0 10px 28px rgba(0, 0, 0, 0.32)","--bc-shadow-tooltip":"0 8px 24px rgba(0, 0, 0, 0.50)","--bc-shadow-kpi-active-ring":"0 0 0 3px rgba(245, 163, 180, 0.20)","--bc-shadow-toggle-knob":"0 1px 3px rgba(0, 0, 0, 0.50)","--bc-shadow-input-focus-ring":"0 0 0 3px rgba(245, 163, 180, 0.30)","--bc-shadow-input-focus-inner":"inset 0 1px 2px rgba(0, 0, 0, 0.32)","--bc-color-overlay-modal":"rgba(0, 0, 0, 0.55)","--bc-color-overlay-auth":"rgba(0, 0, 0, 0.6)","--bc-color-overlay-on-light":"rgba(255, 250, 243, 0.08)","--bc-color-panel-grad-top":"rgba(43, 37, 28, 0.98)","--bc-color-panel-grad-bottom":"rgba(33, 28, 20, 0.98)","--bc-color-card-outline":"rgba(255, 250, 243, 0.7)","--bc-color-card-divider-soft":"rgba(255, 250, 243, 0.14)","--bc-color-heatmap-rating-rgb":"246, 236, 192","--bc-color-heatmap-hours-rgb":"245, 163, 180","--bc-color-on-saturated":"#2a1d22","--bc-color-cart-bg":"#4a3f30","--bc-color-cart-bg-hover":"#5c4f3c","--bc-color-cart-border":"#5c4f3c","--bc-color-cart-border-hover":"#7d6e58","--bc-color-cart-text":"#fffaf3","--bc-color-cart-success-bg":"#2a7a4a","--bc-color-cart-success-border":"#9be3a8","--bc-color-cart-success-text":"#d5f3da","--bc-color-cart-error-bg":"#8a3a4a","--bc-color-cart-error-border":"#f5a3b4","--bc-color-cart-error-text":"#fbe1e6","--bc-color-cart-loading-bg":"#5c4f3c","--bc-color-cart-loading-border":"#7d6e58","--bc-color-cart-loading-text":"#f3e3c8","--bc-color-comment-highlight-light":"rgba(245, 200, 66, 0.28)","--bc-color-comments-card-bg":"#3a3225","--bc-color-disabled-bg":"#5c4f3c","--bc-color-gate-warn-bg":"rgba(124, 90, 20, 0.38)","--bc-color-gate-warn-border":"rgba(245, 200, 66, 0.40)","--bc-color-gate-warn-text":"#fbe89a","--bc-color-gate-lock-bg":"rgba(196, 184, 214, 0.16)","--bc-color-gate-lock-border":"rgba(196, 184, 214, 0.32)","--bc-color-gate-lock-text":"#d6cae8","--bc-color-gate-ok-bg":"rgba(31, 90, 54, 0.38)","--bc-color-gate-ok-border":"rgba(155, 227, 168, 0.40)","--bc-color-gate-ok-text":"#d5f3da","--bc-color-trend-zone-1":"rgba(248, 113, 113, 0.16)","--bc-color-trend-zone-2":"rgba(251, 146, 60, 0.16)","--bc-color-trend-zone-3":"rgba(250, 204, 21, 0.16)","--bc-color-trend-zone-4":"rgba(132, 204, 22, 0.18)","--bc-color-trend-zone-5":"rgba(74, 222, 128, 0.18)","--bc-color-trend-zone-1-solid":"rgba(248, 113, 113, 0.90)","--bc-color-trend-zone-2-solid":"rgba(251, 146, 60, 0.90)","--bc-color-trend-zone-3-solid":"rgba(250, 204, 21, 0.90)","--bc-color-trend-zone-4-solid":"rgba(132, 204, 22, 0.90)","--bc-color-trend-zone-5-solid":"rgba(74, 222, 128, 0.90)","--bc-color-trend-zone-6-solid":"rgba(16, 185, 129, 0.95)"}},kt={"--bc-color-cta":"#f5c842","--bc-color-cta-hover":"#eebb25","--bc-color-cta-on":"#201a02","--bc-color-cta-soft":"#f5c842","--bc-color-cta-soft-hover":"#eebb25","--bc-color-cta-soft-on":"#201a02","--bc-font-display":"var(--bc-font-body)","--bc-color-heatmap-hours-rgb":"222, 160, 16","--bc-color-hours-grad-start":"#f2bd1d","--bc-color-hours-grad-end":"#e0486b","--bc-shadow-kpi-active-ring":"0 0 0 3px rgba(245, 200, 66, 0.5)","--bc-shadow-input-focus-ring":"0 0 0 3px rgba(245, 200, 66, 0.55)"},Ho={...Le,accentRgb:[23,23,26],inkFillRgb:[23,23,26],inkBorder12:"rgba(23, 23, 26, 0.12)",tokens:{...Le.tokens,...kt,"--bc-color-chart":"#d6456a","--bc-color-chart-fill-45":"rgba(214, 69, 106, 0.45)","--bc-color-chart-fill-05":"rgba(214, 69, 106, 0.05)","--bc-color-heatmap-rating-rgb":"214, 69, 106","--bc-color-accent":"#17171a","--bc-color-accent-hover":"#2c2c31","--bc-color-accent-pressed":"#000000","--bc-color-accent-on":"#ffffff","--bc-color-accent-soft":"#17171a","--bc-color-accent-soft-hover":"#2c2c31","--bc-color-accent-soft-on":"#ffffff","--bc-color-accent-surface-faint":"#fcfcfb","--bc-color-accent-surface-soft":"#f3f3f1","--bc-color-accent-surface-tint":"#f8f7f5","--bc-color-accent-surface-tile":"#f4f3f0","--bc-color-accent-surface-tile-2":"#f1f0ec","--bc-color-accent-surface-row":"#faf9f7","--bc-color-accent-surface-row-border":"#ebe9e4","--bc-color-accent-mid-border":"#bfbdb6","--bc-color-bg-app":"#fbfaf7","--bc-color-bg-muted":"#fbfaf8","--bc-color-surface-hover":"#f6f5f2","--bc-color-surface-hover-strong":"#efeeea","--bc-color-surface-soft":"#fbfaf8","--bc-color-border":"#e7e5e0","--bc-color-border-strong":"#d3d0c8","--bc-color-border-divider":"#ebe9e4","--bc-color-surface-translucent-86":"rgba(252, 252, 251, 0.86)","--bc-color-surface-warm-grad-top":"rgba(252, 252, 251, 0.98)","--bc-color-panel-grad-top":"rgba(252, 252, 251, 0.98)","--bc-color-text":"#26262b","--bc-color-text-strong":"#17171a","--bc-color-text-soft":"#53545c","--bc-color-text-muted":"#74757d","--bc-color-text-subtle":"#a1a2a9","--bc-color-text-mauve":"#6b6b72","--bc-color-text-mauve-soft":"#62636a","--bc-color-text-mauve-warm":"#4c4d54","--bc-color-text-mauve-deep":"#17171a","--bc-color-text-mauve-panel":"#33343a","--bc-color-text-mauve-pale":"#c4c2bb","--bc-color-text-mauve-cool":"#85868e","--bc-color-text-mauve-axis":"#94959c","--bc-color-text-mauve-axis-strong":"#6b6b72","--bc-color-text-body-warm":"#3f4046","--bc-color-text-mauve-cool-alt":"#62636a","--bc-color-text-on-histogram":"#26262b","--bc-color-star-base":"#cfcbc0","--bc-color-chart-trend-axis":"#eeebe3","--bc-color-chart-trend-text":"#94959c","--bc-color-chart-trend-text-strong":"#6b6b72","--bc-color-ink":"#26262b","--bc-color-ink-deep":"#17171a","--bc-color-ink-text":"#26262b","--bc-color-sentiment-neu-fg":"#6b6b72","--bc-color-sentiment-neu-bg":"#f1f0ec","--bc-color-sentiment-all-dot":"#bfbdb6","--bc-color-disabled-bg":"#d6d3cb","--bc-color-seat-muted-text":"#53545c","--bc-shadow-add-cta":"0 2px 6px rgba(60, 45, 0, 0.2)","--bc-shadow-side-panel":"0 10px 28px rgba(30, 25, 10, 0.08)"}},Oo={...$e,accentRgb:[244,244,245],tokens:{...$e.tokens,...kt,"--bc-color-chart":"#f5a3b4","--bc-color-chart-fill-45":"rgba(245, 163, 180, 0.45)","--bc-color-chart-fill-05":"rgba(245, 163, 180, 0.05)","--bc-color-heatmap-rating-rgb":"245, 163, 180","--bc-color-accent":"#f4f4f5","--bc-color-accent-hover":"#ffffff","--bc-color-accent-pressed":"#d4d4d8","--bc-color-accent-on":"#17171a","--bc-color-accent-soft":"#f4f4f5","--bc-color-accent-soft-hover":"#ffffff","--bc-color-accent-soft-on":"#17171a","--bc-color-accent-surface-faint":"#1f1f22","--bc-color-accent-surface-soft":"#2a2a2e","--bc-color-accent-surface-tint":"#26262a","--bc-color-accent-surface-tile":"#2c2c31","--bc-color-accent-surface-tile-2":"#303035","--bc-color-accent-surface-row":"#232326","--bc-color-accent-surface-row-border":"#3a3a40","--bc-color-accent-mid-border":"#52525b","--bc-color-text-mauve":"#d4d4d8","--bc-color-text-mauve-soft":"#c4c4cc","--bc-color-text-mauve-warm":"#e4e4e7","--bc-color-text-mauve-deep":"#fafafa","--bc-color-text-mauve-panel":"#e4e4e7","--bc-color-text-mauve-pale":"rgba(255, 255, 255, 0.3)","--bc-color-text-mauve-cool":"#a1a1aa","--bc-color-text-body-warm":"#e4e4e7","--bc-color-text-mauve-cool-alt":"#c4c4cc","--bc-color-sentiment-neu-fg":"#c4c4cc","--bc-color-sentiment-neu-bg":"#2c2c31","--bc-color-sentiment-all-dot":"#52525b"}};var Mt="bc-design-system";function Fo(e){return chrome.runtime.getURL(`assets/fonts/${e}`)}function _t(e){if(document.getElementById(Mt))return;let t=document.createElement("style");t.id=Mt,t.textContent=`${At(e??Fo)}
${Et()}`,(document.head??document.documentElement).appendChild(t)}function It(e){document.documentElement.setAttribute("data-bc-theme",e)}var Ne="better-caesar-paper-ctec-style",p="bc-paper-ctec",xe="bc-paper-ctec-status-bar",De="bc-paper-ctec-analytics-modal",Pt="bc-paper-ctec-side-tabs",Lt="bc-paper-ctec-analytics-panel";var Ce="bc-paper-no-hover-lift";function He(e,t,r){let o=e.getElementById(t);if(o instanceof HTMLStyleElement)return o.textContent!==r&&(o.textContent=r),o;let n=e.createElement("style");return n.id=t,n.textContent=r,(e.head??e.documentElement).appendChild(n),n}var Uo="bc-modal-styles";function $t(e=document){He(e,Uo,Go)}var Go=`
  .bc-modal {
    position: fixed;
    inset: 0;
    z-index: 2147483646;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: var(--bc-color-overlay-auth);
    animation: bc-modal-fade 140ms ease-out;
  }
  @keyframes bc-modal-fade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  /* Card, close button and title match the CTEC analytics modal so every
     Pencil dialog reads as the same product. */
  .bc-modal-card {
    position: relative;
    width: min(440px, 100%);
    padding: 28px 28px 24px;
    border-radius: var(--bc-radius-3xl);
    background: var(--bc-color-bg);
    color: var(--bc-color-text);
    box-shadow: var(--bc-shadow-modal);
    font-family: var(--bc-font-body);
    text-align: left;
  }
  .bc-modal-close {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 32px;
    height: 32px;
    padding: 0;
    display: grid;
    place-items: center;
    border: 1px solid var(--bc-color-border);
    border-radius: var(--bc-radius-lg);
    background: var(--bc-color-bg);
    color: var(--bc-color-text-muted);
    font-size: var(--bc-font-18);
    line-height: 1;
    cursor: pointer;
  }
  .bc-modal-close:hover {
    background: var(--bc-color-surface-hover);
    color: var(--bc-color-text);
  }
  .bc-modal-title {
    margin: 0 44px 10px 0;
    font-family: var(--bc-font-display);
    font-size: var(--bc-font-22);
    font-weight: var(--bc-fw-display);
    line-height: 1.15;
    letter-spacing: var(--bc-ls-tight);
    color: var(--bc-color-text-strong);
  }
  .bc-modal-body {
    margin: 0;
    font-size: var(--bc-font-14);
    line-height: 1.55;
    color: var(--bc-color-text-soft);
  }
  .bc-modal-note {
    margin: 16px 0 0;
    padding-top: 14px;
    border-top: 1px solid var(--bc-color-border-divider);
    font-size: var(--bc-font-13);
    line-height: 1.55;
    color: var(--bc-color-text-muted);
  }
  .bc-modal-link {
    color: inherit;
    text-decoration: underline;
    text-underline-offset: 2px;
    white-space: nowrap;
  }
  .bc-modal-link:hover {
    color: var(--bc-color-text);
  }
  /* Primary first in the DOM; it fills the row and the secondary stays
     compact beside it. */
  .bc-modal-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 22px;
  }
  .bc-modal-actions .bc-btn {
    padding: 11px 16px;
    font-size: var(--bc-font-14);
  }
  .bc-modal-actions .bc-btn--primary {
    flex: 1 1 auto;
  }
`;var zo={sm:640,md:720,lg:900,xl:1e3,xxl:1100};function Nt(e){return`(max-width: ${zo[e]}px)`}var h={aggregate:{recentTerms:3,ratingScaleMax:6,hoursGraphMax:20},selectors:{scheduleGrid:".schedule-grid-cols",scheduleCard:".schedule-grid-cols div.absolute.z-10.rounded-lg",actionHostExact:"div.absolute.right-7.top-4.flex.items-center.gap-1",actionHostFallback:"div.absolute.flex.items-center",sideCardPanel:"div.fixed.right-0.top-0.h-screen.w-screen div.rounded-xl.p-4.shadow-xl",sideCardHeader:"div.mb-6.flex.w-full.items-center.gap-2",sideCardItems:"div.my-4.rounded-lg.bg-gray-50.p-2.shadow-sm"},layout:{actionHostInsetRem:1.75},ui:{summaryChipIconSizePx:10,summaryChipStrokeWidth:1.8,summaryChipStarSizePx:8,summaryChipStarGapPx:1,ratingChipTones:[{minScore:.95,hue:116},{minScore:.85,hue:92},{minScore:.72,hue:58},{minScore:.55,hue:34},{minScore:.35,hue:18},{minScore:0,hue:4}],hoursChipTones:[{minScore:.84,hue:116},{minScore:.72,hue:92},{minScore:.58,hue:58},{minScore:.42,hue:34},{minScore:.26,hue:18},{minScore:0,hue:4}],statusIconSizePx:14,statusIconStrokeWidth:1.9,statusBarMinHeightPx:28,analyticsMetricMinWidthPx:120,analyticsTermMetricMinWidthPx:88,analyticsChartMinWidthPx:170,analyticsStarSizePx:14}};function Dt(){return`
    ${h.selectors.scheduleGrid} div.absolute.z-\\[31\\].-translate-y-1\\/2.whitespace-nowrap.rounded-md.bg-emerald-500.px-1\\.5.py-0\\.5.text-\\[10px\\].font-medium.text-white {
      display: none !important;
    }
    .${Ce} div.absolute.z-10.rounded-lg:hover {
      transform: none !important;
      box-shadow: none !important;
      outline: 2px solid var(--bc-color-card-outline);
      outline-offset: -1px;
    }
    .${Ce} div.absolute.z-10.rounded-lg.-translate-y-2 {
      transform: none !important;
      box-shadow: none !important;
    }
    .${p} {
      margin-top: 3px;
      padding-top: 3px;
      border-top: 1px solid var(--bc-color-card-divider-soft);
      min-height: 16px;
      color: inherit;
      pointer-events: auto;
    }
    .bc-paper-ctec-dense-card {
      display: flex;
      flex-direction: column;
      gap: 2px;
      /* Clip horizontally so long titles/instructor pills stay inside the
         card, but allow vertical overflow so the Load CTEC button at the
         bottom of the widget isn't cut off on 50-min timeslots (the chip
         button extends a few pixels below the card into the gap before the
         next slot). overflow-x:clip + overflow-y:visible is the one
         combination CSS allows without forcing the visible axis to auto. */
      overflow-x: clip !important;
      overflow-y: visible !important;
      min-height: 0;
    }
    .bc-paper-ctec-dense-card > .${p} {
      margin-top: auto;
    }
    .bc-paper-ctec-card-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
      min-width: 0;
    }
    .bc-paper-ctec-course-line {
      flex: 0 1 auto;
      min-width: 0;
      font-size: var(--bc-font-11) !important;
      line-height: 1.15 !important;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .bc-paper-ctec-title-line {
      font-size: var(--bc-font-11) !important;
      line-height: 1.2 !important;
      font-weight: var(--bc-fw-semibold);
      color: var(--bc-color-text-strong);
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    /* Instructor sits at the right of the course line as plain quiet text.
       No pill: the card is already a coloured box. */
    .bc-paper-ctec-instructor-line {
      flex: 0 0 auto;
      max-width: 44%;
      margin-left: auto !important;
      font-size: var(--bc-font-11) !important;
      font-weight: var(--bc-fw-regular) !important;
      line-height: 1.15 !important;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      opacity: 0.72 !important;
    }
    /* One line of facts under a hairline: the rating in its colour, then
       hours as plain text. Nothing here is boxed or uppercase. */
    .${p}-summary {
      display: flex;
      align-items: center;
      column-gap: 8px;
      row-gap: 2px;
      flex-wrap: wrap;
      min-width: 0;
      font-family: var(--bc-font-body);
      font-size: var(--bc-font-11);
      line-height: 16px;
      font-variant-numeric: tabular-nums;
    }
    .${p}-spinner {
      width: 10px;
      height: 10px;
      flex: 0 0 auto;
      border-radius: var(--bc-radius-circle);
      border: 1.5px solid var(--bc-color-ink-fill-08);
      border-top-color: currentColor;
      animation: bc-paper-ctec-widget-spin 900ms linear infinite;
    }
    @keyframes bc-paper-ctec-widget-spin {
      to { transform: rotate(360deg); }
    }
    .${p}-chip {
      display: inline-flex;
      align-items: baseline;
      gap: 3px;
      min-width: 0;
      max-width: 100%;
      white-space: nowrap;
      color: inherit;
    }
    .${p}-chip-label {
      font-size: var(--bc-font-11);
      opacity: 0.72;
    }
    .${p}-chip-value {
      font-size: var(--bc-font-11);
      font-weight: var(--bc-fw-semibold);
    }
    /* The rating number is the one coloured thing: red through amber to
       green, same scale as the CTEC sheet. */
    .${p}-chip.is-rating .${p}-chip-value {
      padding: 0 5px;
      border-radius: 5px;
      background: var(--bc-paper-ctec-chip-bg, var(--bc-color-ink-fill-06));
      color: var(--bc-paper-ctec-chip-fg, inherit);
    }
    [data-bc-mode="dark"] .${p}-chip.is-rating .${p}-chip-value {
      background: var(--bc-paper-ctec-chip-bg-dark, var(--bc-color-ink-fill-06));
      color: var(--bc-paper-ctec-chip-fg-dark, inherit);
    }
    .${p}-chip-scale {
      font-size: var(--bc-font-11);
      opacity: 0.6;
    }
    .${p}-chip-stars {
      display: inline-flex;
      align-items: center;
      align-self: center;
    }
    .${p}-chip-stars .bc-paper-ctec-stars {
      gap: ${h.ui.summaryChipStarGapPx}px;
    }
    .${p}-chip-stars .bc-paper-ctec-star {
      width: ${h.ui.summaryChipStarSizePx}px;
      height: ${h.ui.summaryChipStarSizePx}px;
    }
    .${p}-chip svg {
      width: ${h.ui.summaryChipIconSizePx}px;
      height: ${h.ui.summaryChipIconSizePx}px;
      flex: 0 0 auto;
      align-self: center;
      stroke-width: ${h.ui.summaryChipStrokeWidth};
    }
    .${p}-chip.is-muted {
      opacity: 0.72;
    }
    .${p}-chip.is-warn {
      color: var(--bc-color-warn-rose-text);
    }
    /* "Load CTEC": a quiet pill on the card's own colour. */
    button.${p}-chip-button {
      appearance: none;
      align-items: center;
      height: 18px;
      padding: 0 7px;
      border: 0;
      border-radius: 5px;
      background: var(--bc-color-ink-fill-06);
      color: inherit;
      font: inherit;
      font-weight: var(--bc-fw-medium);
      opacity: 1;
      cursor: pointer;
      transition: background var(--bc-tx-base) var(--bc-easing);
    }
    button.${p}-chip-button:hover {
      background: var(--bc-color-ink-border-12);
    }
    button.${p}-chip-button:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 1px;
    }
    /* Wrapped label so the text can truncate with an ellipsis when two
       classes share a timeslot and each card collapses to ~half width \u2014
       without the wrapper, white-space:nowrap on the chip lets "Load CTEC"
       spill past the card's right edge. */
    .${p}-chip-button-label {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    /* Actions wrapper: hangs from the bottom-right corner of the schedule
       card so its position never depends on the card's own width \u2014 using
       a fixed pixel offset for each button caused the cart pill to land
       mid-card on narrow timeslots and to overlap the analytics pill once
       its label expanded. Mounted as a direct child of the outer .absolute
       card host so it escapes the dense-card overflow:hidden. Pinned at
       one Y position with no hover-translate \u2014 animating Y on hover caused
       a flicker loop where the wrapper would jump up out from under the
       cursor, drop back, and re-trigger hover. */
    .${p}-actions-anchor {
      position: absolute;
      bottom: -13px;
      right: 6px;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      z-index: 12;
      pointer-events: auto;
    }
    /* On a half-width card (two classes side by side) the Analytics label
       would spill onto the neighbouring card's buttons, so it collapses to
       its icon there. */
    ${h.selectors.scheduleCard}:has(> .${p}-actions-anchor) {
      container-type: inline-size;
    }
    /* Both action buttons are the same small white control with a hairline
       edge. The cart button is icon-only until hover/focus or until it has
       something to say; the label animates via max-width while the icon
       stays at a fixed size. */
    button.${p}-analytics-btn,
    button.${p}-cart-btn {
      appearance: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 22px;
      min-width: 22px;
      padding: 0 6px;
      border: 1px solid var(--bc-color-border-strong);
      border-radius: 7px;
      background: var(--bc-color-bg);
      color: var(--bc-color-text-strong);
      cursor: pointer;
      font-family: var(--bc-font-body);
      font-size: var(--bc-font-11);
      font-weight: var(--bc-fw-medium);
      letter-spacing: 0;
      text-transform: none;
      line-height: 1;
      box-shadow: var(--bc-shadow-elev-1);
      transition: background var(--bc-tx-base) var(--bc-easing),
                  border-color var(--bc-tx-base) var(--bc-easing),
                  color var(--bc-tx-base) var(--bc-easing);
    }
    button.${p}-analytics-btn svg,
    button.${p}-cart-btn svg {
      width: 12px;
      height: 12px;
      stroke-width: 2;
      flex: 0 0 auto;
    }
    .${p}-analytics-btn-label,
    .${p}-cart-btn-label {
      display: inline-block;
      max-width: 0;
      overflow: hidden;
      white-space: nowrap;
      opacity: 0;
      margin-left: 0;
      transition: max-width var(--bc-tx-base) var(--bc-easing),
                  opacity var(--bc-tx-base) var(--bc-easing),
                  margin-left var(--bc-tx-base) var(--bc-easing);
    }
    .${p}-analytics-btn-label {
      max-width: 220px;
      opacity: 1;
      margin-left: 4px;
    }
    @container (max-width: 150px) {
      .${p}-analytics-btn-label {
        max-width: 0;
        opacity: 0;
        margin-left: 0;
      }
    }
    button.${p}-cart-btn:hover .${p}-cart-btn-label,
    button.${p}-cart-btn:focus-visible .${p}-cart-btn-label {
      max-width: 220px;
      opacity: 1;
      margin-left: 4px;
    }
    /* Mid-flight and one-shot finish states stay expanded so the user can
       read the status (Added, Retry, Adding\u2026) without hovering.
       Persistent badges (in-cart, enrolled) collapse to icon-only and
       expand on hover. */
    button.${p}-cart-btn[data-cart-state="success"] .${p}-cart-btn-label,
    button.${p}-cart-btn[data-cart-state="error"] .${p}-cart-btn-label,
    button.${p}-cart-btn[data-cart-state="loading"] .${p}-cart-btn-label {
      max-width: 220px;
      opacity: 1;
      margin-left: 4px;
    }
    button.${p}-analytics-btn:hover,
    button.${p}-cart-btn:hover:not(:disabled) {
      background: var(--bc-color-surface-hover);
      border-color: var(--bc-color-text-muted);
    }
    button.${p}-analytics-btn:focus-visible,
    button.${p}-cart-btn:focus-visible {
      outline: 2px solid var(--bc-color-accent);
      outline-offset: 1px;
    }
    /* Cart states keep the white control and change only the ink, so a
       green tick means "yours" and red means "try again". */
    button.${p}-cart-btn:disabled {
      cursor: default;
    }
    button.${p}-cart-btn[data-cart-state="success"],
    button.${p}-cart-btn[data-cart-state="in-cart"],
    button.${p}-cart-btn[data-cart-state="enrolled"] {
      color: var(--bc-color-success);
    }
    button.${p}-cart-btn[data-cart-state="enrolled"] {
      background: var(--bc-color-success-bg);
      border-color: var(--bc-color-success-border);
      color: var(--bc-color-success-text);
    }
    button.${p}-cart-btn[data-cart-state="error"] {
      border-color: var(--bc-color-danger-border);
      color: var(--bc-color-danger);
    }
    button.${p}-cart-btn[data-cart-state="loading"] {
      color: var(--bc-color-text-muted);
      cursor: progress;
    }
    /* Suppress paper.nu's card-hover effect while the cursor is on the
       actions wrapper \u2014 the wrapper visually overlaps the card so users
       are aiming at the pills, not the card itself. */
    ${h.selectors.scheduleCard}:has(> .${p}-actions-anchor:hover) {
      transform: none !important;
      box-shadow: none !important;
    }
    .${Ce} ${h.selectors.scheduleCard}:has(> .${p}-actions-anchor:hover) {
      outline-color: transparent !important;
    }
    /* Hover preview popup. Anchors below the schedule card outer host
       (sibling to the analytics anchor) so it escapes the dense card's
       overflow:hidden. Hidden by default and toggled via .is-visible
       from the per-card preview controller. */
    .${p}-preview-trigger {
      cursor: pointer;
    }
    .${p}-preview {
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 6px;
      width: 640px;
      max-width: 92vw;
      padding: 16px 18px 14px;
      border: 1px solid var(--bc-color-border);
      border-radius: var(--bc-radius-2xl);
      font-family: var(--bc-font-body);
      background: var(--bc-color-bg);
      box-shadow: var(--bc-shadow-tooltip);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      cursor: pointer;
      transition: opacity 80ms var(--bc-easing), visibility 80ms var(--bc-easing);
      z-index: 30;
    }
    .${p}-preview.is-above {
      top: auto;
      bottom: 100%;
      margin-top: 0;
      margin-bottom: 6px;
    }
    /* Invisible hover bridge over the 6px gap so the cursor never enters
       dead space between the chip and the popup. Without this, the
       popup's mouseenter only fires after the cursor crosses the gap,
       and a slow hand can lose the trigger before reaching it. Bridge
       flips with the popup when it's positioned above the card. */
    .${p}-preview::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 100%;
      height: 12px;
    }
    .${p}-preview.is-above::before {
      bottom: auto;
      top: 100%;
    }
    .${p}-preview.is-visible {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
    .${p}-preview-inner {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .${p}-preview-section {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .${p}-preview-section-title {
      font-size: var(--bc-font-13);
      font-weight: var(--bc-fw-semibold);
      color: var(--bc-color-text-strong);
    }
    .${p}-preview-methodology {
      font-size: var(--bc-font-12);
      line-height: 1.4;
      color: var(--bc-color-text-soft);
      margin: -2px 0 2px;
    }
    .${p}-preview-trend-svg {
      width: 100%;
      height: auto;
      display: block;
    }
    /* SVG fill/stroke colors are emitted by JS via style.* with
       var(--bc-color-*) references, so they switch with the active theme
       automatically \u2014 no per-attribute dark overrides needed here.
       (Chart-zone bands previously needed explicit dark-mode CSS rules;
       they now consume --bc-color-trend-zone-* vars that swap by theme.) */
    .${p}-preview-empty {
      font-size: var(--bc-font-12);
      color: var(--bc-color-text-muted);
      padding: 4px 0;
    }
    /* Keep the schedule card's own hover-lift effect from kicking in while
       the preview is open \u2014 same pattern as the analytics anchor. */
    ${h.selectors.scheduleCard}:has(> .${p}-preview.is-visible) {
      transform: none !important;
      box-shadow: none !important;
      z-index: 30;
    }
    @media ${Nt("lg")} {
      .bc-paper-ctec-instructor-line {
        max-width: 50%;
      }
    }
  `}function Ht(){return`
    .bc-sheet {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 2147483640;
      width: 464px;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      background: var(--bc-color-bg);
      border-left: 1px solid var(--bc-color-border);
      box-shadow: var(--bc-shadow-sheet);
      color: var(--bc-color-text);
      font: 14px/1.5 var(--bc-font-body);
      font-variant-numeric: tabular-nums;
      letter-spacing: normal;
      text-align: left;
      -webkit-font-smoothing: antialiased;
      animation: bc-sheet-in 140ms ease-out;
    }
    /* Inside Paper.nu's Section Info panel: no frame of its own, and the
       panel does the scrolling. */
    .bc-sheet.bc-sheet--inline {
      position: static;
      z-index: auto;
      width: auto;
      max-width: none;
      margin: 0 -16px;
      border: 0;
      background: transparent;
      box-shadow: none;
      animation: none;
    }
    .bc-sheet.bc-sheet--inline .bc-sheet-body {
      overflow: visible;
      padding-bottom: 8px;
    }
    .bc-sheet.bc-sheet--inline .bc-sheet-close {
      display: none;
    }
    @keyframes bc-sheet-in {
      from { transform: translateX(16px); opacity: 0; }
    }
    @media (prefers-reduced-motion: reduce) {
      .bc-sheet { animation: none; }
    }
    .bc-sheet *,
    .bc-sheet *::before,
    .bc-sheet *::after {
      box-sizing: border-box;
    }
    .bc-sheet :where(h2, h3, p, figure) {
      margin: 0;
      padding: 0;
      font: inherit;
      color: inherit;
    }
    .bc-sheet :where(button:not(.bc-btn)) {
      appearance: none;
      margin: 0;
      padding: 0;
      border: 0;
      border-radius: 0;
      background: none;
      box-shadow: none;
      color: inherit;
      font: inherit;
      letter-spacing: inherit;
      text-align: inherit;
      text-transform: none;
      cursor: pointer;
    }
    .bc-sheet :where(button, a):focus-visible {
      outline: 2px solid var(--bc-color-border-strong);
      outline-offset: 1px;
    }
    .bc-sheet .bc-icon {
      flex: none;
      display: block;
    }

    /* ---------- header ---------- */
    .bc-sheet .bc-sheet-top {
      position: relative;
      z-index: 3;
      padding: 16px 24px 12px;
      background: var(--bc-color-bg);
      border-bottom: 1px solid transparent;
      transition: border-color 150ms;
    }
    .bc-sheet .bc-sheet-top.is-raised {
      border-bottom-color: var(--bc-color-border);
    }
    .bc-sheet .bc-sheet-top-line {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 20px;
    }
    .bc-sheet .bc-sheet-code {
      font-size: 12.5px;
      font-weight: 500;
      color: var(--bc-color-text-muted);
      white-space: nowrap;
    }
    .bc-sheet .bc-sheet-top-right {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .bc-sheet .bc-sheet-icon-btn {
      width: 28px;
      height: 28px;
      display: grid;
      place-items: center;
      border-radius: 7px;
      color: var(--bc-color-text-soft);
    }
    .bc-sheet .bc-sheet-icon-btn:hover:not(:disabled) {
      background: var(--bc-color-surface-hover);
      color: var(--bc-color-text-strong);
    }
    .bc-sheet .bc-sheet-icon-btn:disabled {
      opacity: 0.45;
      cursor: default;
    }
    .bc-sheet .bc-sheet-close {
      margin-right: -6px;
    }
    .bc-sheet .bc-sheet-title {
      font-family: var(--bc-font-display);
      font-size: 20px;
      line-height: 1.25;
      font-weight: var(--bc-fw-display);
      letter-spacing: -0.01em;
      color: var(--bc-color-text-strong);
    }
    .bc-sheet .bc-sheet-meta {
      margin-top: 3px;
      font-size: 13px;
      color: var(--bc-color-text-soft);
    }
    .bc-sheet .bc-sheet-meta-sep {
      margin: 0 6px;
      color: var(--bc-color-text-subtle);
    }
    .bc-sheet .bc-sheet-link {
      color: var(--bc-color-text-strong);
      text-decoration: underline;
      text-decoration-color: var(--bc-color-border-strong);
      text-underline-offset: 3px;
    }
    .bc-sheet .bc-sheet-link:hover {
      text-decoration-color: var(--bc-color-text-strong);
    }
    .bc-sheet .bc-sheet-notice {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-top: 4px;
      font-size: 12.5px;
      color: var(--bc-color-text-muted);
    }
    .bc-sheet .bc-sheet-notice.is-error {
      color: var(--bc-color-sentiment-neg-fg);
    }
    .bc-sheet .bc-sheet-notice-x {
      flex: none;
      width: 18px;
      height: 18px;
      display: grid;
      place-items: center;
      border-radius: 5px;
      color: var(--bc-color-text-muted);
    }
    .bc-sheet .bc-sheet-notice-x svg {
      width: 10px;
      height: 10px;
    }
    .bc-sheet .bc-sheet-notice-x:hover {
      background: var(--bc-color-surface-hover);
      color: var(--bc-color-text-strong);
    }

    /* view menu: quiet, top right */
    .bc-sheet .bc-sheet-lens {
      position: relative;
    }
    .bc-sheet .bc-sheet-lens-btn {
      height: 28px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 0 8px;
      border-radius: 7px;
      font-size: 12.5px;
      color: var(--bc-color-text-soft);
      white-space: nowrap;
    }
    .bc-sheet .bc-sheet-lens-btn:hover,
    .bc-sheet .bc-sheet-lens.is-open .bc-sheet-lens-btn {
      background: var(--bc-color-surface-hover);
      color: var(--bc-color-text-strong);
    }
    .bc-sheet .bc-sheet-lens-btn svg {
      color: var(--bc-color-text-muted);
    }
    .bc-sheet .bc-sheet-lens-list {
      position: absolute;
      top: 32px;
      right: 0;
      min-width: 230px;
      padding: 4px;
      background: var(--bc-color-bg);
      border: 1px solid var(--bc-color-border);
      border-radius: 10px;
      box-shadow: var(--bc-shadow-tooltip);
    }
    .bc-sheet .bc-sheet-lens-opt {
      display: block;
      width: 100%;
      padding: 7px 10px;
      border-radius: 7px;
      font-size: 13px;
      color: var(--bc-color-text);
    }
    .bc-sheet .bc-sheet-lens-opt:hover {
      background: var(--bc-color-surface-hover);
    }
    .bc-sheet .bc-sheet-lens-opt.is-on {
      background: var(--bc-color-accent);
      color: var(--bc-color-accent-on);
    }
    .bc-sheet .bc-sheet-lens-note {
      display: block;
      font-size: 11.5px;
      color: var(--bc-color-text-muted);
    }
    .bc-sheet .bc-sheet-lens-opt.is-on .bc-sheet-lens-note {
      color: inherit;
      opacity: 0.7;
    }
    .bc-sheet .bc-sheet-lens-adjust {
      color: var(--bc-color-text-soft);
    }

    /* term switch */
    .bc-sheet .bc-sheet-terms {
      display: flex;
      gap: 2px;
      margin: 12px -24px 0;
      padding: 0 24px;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .bc-sheet .bc-sheet-terms::-webkit-scrollbar {
      display: none;
    }
    .bc-sheet .bc-sheet-term {
      flex: none;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      height: 28px;
      padding: 0 9px 0 7px;
      border-radius: 7px;
      font-size: 12.5px;
      color: var(--bc-color-text-soft);
      white-space: nowrap;
    }
    .bc-sheet .bc-sheet-term:first-child {
      margin-left: -8px;
      padding: 0 9px;
    }
    .bc-sheet .bc-sheet-term:hover:not(:disabled) {
      background: var(--bc-color-surface-hover);
      color: var(--bc-color-text-strong);
    }
    .bc-sheet .bc-sheet-term.is-on {
      background: var(--bc-color-accent);
      color: var(--bc-color-accent-on);
      --bc-icon-hole: var(--bc-color-accent);
      --bc-icon-wash: var(--bc-color-accent-on);
      --bc-icon-strength: 50%;
    }
    .bc-sheet .bc-sheet-term-more {
      padding: 0 9px;
      color: var(--bc-color-text-muted);
    }
    .bc-sheet .bc-sheet-term-more:disabled {
      cursor: default;
    }
    .bc-sheet .bc-sheet-termlabel {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      vertical-align: -2px;
    }
    .bc-sheet .bc-sheet-ctx-to {
      margin: 0 6px;
    }

    /* ---------- body ---------- */
    .bc-sheet .bc-sheet-body {
      position: relative;
      flex: 1;
      min-height: 0;
      overflow-y: auto;
      overscroll-behavior: contain;
      padding: 0 24px 40px;
      scrollbar-width: thin;
    }

    /* overall + hours pair */
    .bc-sheet .bc-sheet-sum {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 6px 0 14px;
      border-bottom: 1px solid var(--bc-color-border);
    }
    .bc-sheet .bc-sheet-sum-cell + .bc-sheet-sum-cell {
      padding-left: 20px;
      border-left: 1px solid var(--bc-color-border);
    }
    .bc-sheet .bc-sheet-sum-big {
      display: flex;
      align-items: baseline;
      gap: 6px;
    }
    .bc-sheet .bc-sheet-sum-chip,
    .bc-sheet .bc-sheet-sum-num {
      font-size: 26px;
      line-height: 36px;
      font-weight: 650;
      letter-spacing: -0.02em;
      color: var(--bc-color-text-strong);
    }
    .bc-sheet .bc-sheet-sum-chip {
      padding: 0 9px;
      border-radius: 9px;
      background: var(--bc-sheet-chip-bg);
      color: var(--bc-sheet-chip-fg);
    }
    [data-bc-mode="dark"] .bc-sheet .bc-sheet-sum-chip {
      background: var(--bc-sheet-chip-bg-dark);
      color: var(--bc-sheet-chip-fg-dark);
    }
    .bc-sheet .bc-sheet-sum-chip.is-empty {
      padding: 0;
      background: none;
      color: var(--bc-color-text-subtle);
    }
    .bc-sheet .bc-sheet-sum-unit {
      font-size: 13px;
      color: var(--bc-color-text-muted);
    }
    .bc-sheet .bc-sheet-sum-label {
      margin-top: 2px;
      font-size: 13px;
      color: var(--bc-color-text-soft);
    }

    /* sections */
    .bc-sheet .bc-sheet-sec {
      position: relative;
      padding: 13px 0 14px;
      border-bottom: 1px solid var(--bc-color-border);
    }
    .bc-sheet .bc-sheet-sec-head {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-bottom: 8px;
    }
    .bc-sheet .bc-sheet-sec-title {
      font-size: 14px;
      line-height: 1.5;
      font-weight: 600;
      color: var(--bc-color-text-strong);
    }
    .bc-sheet .bc-sheet-sec-ctx {
      display: inline-flex;
      align-items: center;
      font-size: 12px;
      color: var(--bc-color-text-muted);
    }
    .bc-sheet .bc-sheet-empty {
      padding: 14px 0 4px;
      font-size: 13px;
      color: var(--bc-color-text-muted);
    }
    .bc-sheet .bc-sheet-empty .bc-sheet-termlabel {
      color: var(--bc-color-text-soft);
    }

    /* rating rows */
    .bc-sheet .bc-sheet-rate {
      display: grid;
      grid-template-columns: 84px 1fr 30px 80px;
      align-items: center;
      column-gap: 12px;
      height: 26px;
    }
    .bc-sheet .bc-sheet-rate-label {
      font-size: 13px;
      color: var(--bc-color-text);
    }
    .bc-sheet .bc-sheet-rate-bar {
      position: relative;
      height: 6px;
      border-radius: 3px;
      background: var(--bc-color-surface-hover);
      overflow: hidden;
    }
    .bc-sheet .bc-sheet-rate-fill {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      border-radius: 3px;
      background: var(--bc-sheet-fill);
      transition: width 120ms;
    }
    [data-bc-mode="dark"] .bc-sheet .bc-sheet-rate-fill {
      background: var(--bc-sheet-fill-dark);
    }
    .bc-sheet .bc-sheet-rate-val {
      font-size: 13px;
      font-weight: 600;
      color: var(--bc-color-text-strong);
      text-align: right;
    }
    .bc-sheet .bc-sheet-rate-val.is-empty {
      font-weight: 400;
      color: var(--bc-color-text-subtle);
    }
    .bc-sheet .bc-sheet-rate-note {
      font-size: 11.5px;
      color: var(--bc-color-text-muted);
      text-align: right;
      white-space: nowrap;
    }
    .bc-sheet .bc-sheet-spark {
      display: block;
      overflow: visible;
      cursor: crosshair;
    }
    .bc-sheet .bc-sheet-spark-line {
      fill: none;
      stroke: var(--bc-color-text-soft);
      stroke-width: 1.4;
      stroke-linejoin: round;
      stroke-linecap: round;
    }
    .bc-sheet .bc-sheet-spark-dot {
      fill: var(--bc-color-text-strong);
    }
    .bc-sheet .bc-sheet-rates.is-scrub .bc-sheet-spark-line {
      stroke: var(--bc-color-text-subtle);
    }
    .bc-sheet .bc-sheet-rates.is-scrub .bc-sheet-rate-val {
      color: var(--bc-color-chart);
    }
    .bc-sheet .bc-sheet-spark-guide {
      position: absolute;
      top: 42px;
      bottom: 14px;
      width: 1px;
      background: var(--bc-color-border-strong);
      pointer-events: none;
    }
    .bc-sheet .bc-sheet-dist {
      display: block;
    }
    .bc-sheet .bc-sheet-dist-hit {
      fill: transparent;
    }
    .bc-sheet .bc-sheet-dist-bar.is-zero {
      opacity: 0.35;
    }
    .bc-sheet .bc-sheet-dist:hover .bc-sheet-dist-k:not(:hover) .bc-sheet-dist-bar {
      opacity: 0.4;
    }

    /* a chart we couldn't read into bars: the report's own picture */
    .bc-sheet .bc-sheet-original {
      margin-top: 10px;
    }
    .bc-sheet .bc-sheet-original figcaption {
      margin-bottom: 4px;
      font-size: 12px;
      color: var(--bc-color-text-muted);
    }
    .bc-sheet .bc-sheet-original img {
      display: block;
      max-width: 100%;
      height: auto;
      border-radius: 6px;
    }

    /* hours histogram */
    .bc-sheet .bc-sheet-hist {
      display: grid;
      gap: 6px;
    }
    .bc-sheet .bc-sheet-hist-col {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      text-align: center;
    }
    .bc-sheet .bc-sheet-hist-pct {
      height: 16px;
      font-size: 11.5px;
      line-height: 16px;
      color: var(--bc-color-text-soft);
    }
    .bc-sheet .bc-sheet-hist-track {
      position: relative;
      height: 40px;
      border-bottom: 1px solid var(--bc-color-border-strong);
    }
    .bc-sheet .bc-sheet-hist-bar {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 3px 3px 0 0;
      background: var(--bc-color-chart);
      opacity: 0.85;
    }
    .bc-sheet .bc-sheet-hist-bar.is-zero {
      background: none;
    }
    .bc-sheet .bc-sheet-hist-col:hover .bc-sheet-hist-bar {
      opacity: 1;
    }
    .bc-sheet .bc-sheet-hist-col:hover .bc-sheet-hist-pct {
      color: var(--bc-color-text-strong);
    }
    .bc-sheet .bc-sheet-hist-lab {
      margin-top: 5px;
      font-size: 11.5px;
      color: var(--bc-color-text-muted);
      white-space: nowrap;
    }

    /* ---------- comments ---------- */
    .bc-sheet .bc-sheet-com {
      padding-top: 4px;
    }
    .bc-sheet .bc-sheet-com-head {
      position: sticky;
      top: 0;
      z-index: 2;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      column-gap: 12px;
      row-gap: 8px;
      margin: 0 -24px;
      padding: 10px 24px;
      background: var(--bc-color-bg);
      border-bottom: 1px solid var(--bc-color-border);
    }
    .bc-sheet .bc-sheet-tones {
      display: flex;
    }
    .bc-sheet .bc-sheet-tone {
      height: 26px;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 0 6px;
      border-radius: 7px;
      font-size: 12.5px;
      color: var(--bc-color-text-soft);
    }
    .bc-sheet .bc-sheet-tone:hover {
      background: var(--bc-color-surface-hover);
      color: var(--bc-color-text-strong);
    }
    .bc-sheet .bc-sheet-tone-n {
      color: var(--bc-color-text-subtle);
    }
    .bc-sheet .bc-sheet-tone[data-tone="pos"] .bc-sheet-tone-name {
      color: var(--bc-color-sentiment-pos-fg);
    }
    .bc-sheet .bc-sheet-tone[data-tone="mix"] .bc-sheet-tone-name {
      color: var(--bc-color-sentiment-mix-fg);
    }
    .bc-sheet .bc-sheet-tone[data-tone="neu"] .bc-sheet-tone-name {
      color: var(--bc-color-sentiment-neu-fg);
    }
    .bc-sheet .bc-sheet-tone[data-tone="neg"] .bc-sheet-tone-name {
      color: var(--bc-color-sentiment-neg-fg);
    }
    .bc-sheet .bc-sheet-tone.is-on {
      background: var(--bc-color-accent);
      color: var(--bc-color-accent-on);
    }
    .bc-sheet .bc-sheet-tone.is-on .bc-sheet-tone-name {
      color: var(--bc-color-accent-on);
    }
    .bc-sheet .bc-sheet-tone.is-empty:not(.is-on) {
      opacity: 0.45;
    }

    .bc-sheet .bc-sheet-search {
      flex: 1 0 100%;
      height: 30px;
      display: flex;
      align-items: center;
      gap: 7px;
      margin: 0;
      padding: 0 10px;
      border-radius: 8px;
      background: var(--bc-color-surface-hover);
      color: var(--bc-color-text-muted);
      cursor: text;
    }
    .bc-sheet .bc-sheet-search:focus-within {
      background: var(--bc-color-bg);
      box-shadow: inset 0 0 0 1px var(--bc-color-border-strong);
      color: var(--bc-color-text-soft);
    }
    .bc-sheet .bc-sheet-search svg {
      flex: none;
    }
    .bc-sheet .bc-sheet-search input {
      appearance: none;
      flex: 1;
      min-width: 0;
      height: 100%;
      margin: 0;
      padding: 0;
      border: 0;
      border-radius: 0;
      outline: 0;
      box-shadow: none;
      background: none;
      font: inherit;
      font-size: 13px;
      color: var(--bc-color-text-strong);
    }
    .bc-sheet .bc-sheet-search input::placeholder {
      color: var(--bc-color-text-muted);
      opacity: 1;
    }
    .bc-sheet .bc-sheet-search input::-webkit-search-cancel-button {
      display: none;
    }
    .bc-sheet .bc-sheet-search-clear {
      display: none;
      flex: none;
      width: 20px;
      height: 20px;
      margin-right: -4px;
      place-items: center;
      border-radius: 5px;
      color: var(--bc-color-text-muted);
    }
    .bc-sheet .bc-sheet-search.has-value .bc-sheet-search-clear {
      display: grid;
    }
    .bc-sheet .bc-sheet-search-clear:hover {
      color: var(--bc-color-text-strong);
    }

    /* phrases that keep coming up; clicking one searches for it */
    .bc-sheet .bc-sheet-topics {
      padding: 12px 0 10px;
      border-bottom: 1px solid var(--bc-color-border);
    }
    .bc-sheet .bc-sheet-topics-title {
      margin-bottom: 7px;
      font-size: 12px;
      color: var(--bc-color-text-muted);
    }
    .bc-sheet .bc-sheet-topic-row {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .bc-sheet .bc-sheet-topic {
      height: 26px;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 0 10px 0 6px;
      border-radius: 13px;
      background: var(--bc-color-surface-hover);
      font-size: 12.5px;
      color: var(--bc-color-text);
      --bc-icon-hole: var(--bc-color-surface-hover);
    }
    .bc-sheet .bc-sheet-topic-n {
      color: var(--bc-color-text-muted);
    }
    .bc-sheet .bc-sheet-topic:hover {
      color: var(--bc-color-text-strong);
      box-shadow: inset 0 0 0 1px var(--bc-color-border-strong);
    }
    .bc-sheet .bc-sheet-topic.is-on {
      background: var(--bc-color-accent);
      color: var(--bc-color-accent-on);
      box-shadow: none;
      --bc-icon-hole: var(--bc-color-accent);
      --bc-icon-wash: var(--bc-color-accent-on);
      --bc-icon-strength: 45%;
      --bc-icon-tint: 0%;
    }
    .bc-sheet .bc-sheet-topic.is-on .bc-sheet-topic-n {
      color: inherit;
      opacity: 0.6;
    }

    .bc-sheet .bc-sheet-com-list {
      padding-top: 4px;
    }
    .bc-sheet .bc-sheet-c {
      display: grid;
      grid-template-columns: 16px 1fr;
      column-gap: 11px;
      padding: 9px 0;
    }
    .bc-sheet .bc-sheet-c > .bc-icon {
      margin-top: 2px;
    }
    .bc-sheet .bc-sheet-c-main {
      min-width: 0;
    }
    .bc-sheet .bc-sheet-c-prompt {
      margin-bottom: 1px;
      font-size: 12px;
      color: var(--bc-color-text-muted);
    }
    .bc-sheet .bc-sheet-c-text {
      font-size: 13.5px;
      line-height: 1.5;
      color: var(--bc-color-text);
      overflow-wrap: anywhere;
    }
    .bc-sheet .bc-sheet-c-meta {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 3px;
      font-size: 12px;
      color: var(--bc-color-text-muted);
    }
    /* search matches: ink underline, never a tint */
    .bc-sheet mark.bc-sheet-q {
      background: none;
      color: var(--bc-color-text-strong);
      font-weight: 600;
      text-decoration: underline 2px var(--bc-color-text-strong);
      text-underline-offset: 3px;
    }
    .bc-sheet .bc-sheet-more {
      margin-top: 8px;
      font-size: 12.5px;
      color: var(--bc-color-text-soft);
      text-decoration: underline;
      text-decoration-color: var(--bc-color-border-strong);
      text-underline-offset: 3px;
    }
    .bc-sheet .bc-sheet-more:hover {
      color: var(--bc-color-text-strong);
      text-decoration-color: var(--bc-color-text-strong);
    }

    /* ---------- nothing to show yet ---------- */
    .bc-sheet .bc-sheet-status,
    .bc-sheet .bc-sheet-wiz {
      padding: 10px 0 0;
      border-top: 1px solid var(--bc-color-border);
    }
    .bc-sheet .bc-sheet-status-title,
    .bc-sheet .bc-sheet-wiz-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      line-height: 1.5;
      font-weight: 600;
      color: var(--bc-color-text-strong);
    }
    .bc-sheet .bc-sheet-status-text,
    .bc-sheet .bc-sheet-wiz-text,
    .bc-sheet .bc-sheet-wiz-status {
      margin: 2px 0 12px;
      font-size: 13px;
      color: var(--bc-color-text-soft);
      overflow-wrap: anywhere;
    }

    /* ---------- "pick a broader view" ---------- */
    .bc-sheet .bc-sheet-wiz-back {
      margin-bottom: 4px;
      font-size: 12.5px;
      color: var(--bc-color-text-soft);
      text-decoration: underline;
      text-decoration-color: var(--bc-color-border-strong);
      text-underline-offset: 3px;
    }
    .bc-sheet .bc-sheet-wiz-back:hover {
      color: var(--bc-color-text-strong);
    }
    .bc-sheet .bc-sheet-wiz-head {
      margin: 18px 0 6px;
      font-size: 12.5px;
      font-weight: var(--bc-fw-regular);
      color: var(--bc-color-text-muted);
    }
    .bc-sheet .bc-sheet-wiz-terms {
      flex: none;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 12.5px;
      color: var(--bc-color-text-soft);
    }
    .bc-sheet .bc-sheet-wiz-term {
      display: inline-flex;
      align-items: center;
      gap: 3px;
    }
    .bc-sheet .bc-sheet-wiz-row--all .bc-sheet-wiz-row-title {
      font-weight: var(--bc-fw-regular);
      color: var(--bc-color-text-soft);
    }
    .bc-sheet .bc-sheet-wiz-list {
      border-bottom: 1px solid var(--bc-color-border);
    }
    .bc-sheet .bc-sheet-wiz-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      width: calc(100% + 16px);
      margin: 0 -8px;
      padding: 10px 8px;
      border-top: 1px solid var(--bc-color-border);
      cursor: pointer;
    }
    .bc-sheet .bc-sheet-wiz-row:hover:not(:disabled) {
      background: var(--bc-color-surface-hover);
    }
    .bc-sheet .bc-sheet-wiz-row:disabled {
      cursor: default;
    }
    .bc-sheet .bc-sheet-wiz-row:disabled .bc-sheet-wiz-row-title {
      color: var(--bc-color-text-muted);
    }
    .bc-sheet .bc-sheet-wiz-row-body {
      display: flex;
      flex-direction: column;
      min-width: 0;
      text-align: left;
    }
    .bc-sheet .bc-sheet-wiz-row-title {
      font-size: 13.5px;
      font-weight: var(--bc-fw-semibold);
      color: var(--bc-color-text-strong);
    }
    .bc-sheet .bc-sheet-wiz-row-about {
      font-size: 12.5px;
      color: var(--bc-color-text-soft);
    }
    .bc-sheet .bc-sheet-wiz-row-meta {
      flex: none;
      font-size: 12.5px;
      color: var(--bc-color-text-muted);
    }
    .bc-sheet .bc-sheet-wiz-preset {
      justify-content: flex-start;
      gap: 10px;
    }
    .bc-sheet .bc-sheet-wiz-preset input {
      flex: none;
      margin: 0;
      accent-color: var(--bc-color-accent);
    }
    .bc-sheet .bc-sheet-wiz-preset-body {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .bc-sheet .bc-sheet-wiz-preset-body > .bc-sheet-wiz-row-meta {
      margin-bottom: 4px;
    }
    .bc-sheet .bc-sheet-wiz-preview {
      display: grid;
      grid-template-columns: 104px 1fr;
      column-gap: 8px;
      align-items: center;
      min-height: 22px;
      font-size: 12.5px;
      color: var(--bc-color-text);
    }
    .bc-sheet .bc-sheet-wiz-preview-what {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--bc-color-text-soft);
    }
    .bc-sheet .bc-sheet-wiz-foot {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 12px;
    }
    .bc-sheet .bc-sheet-wiz-foot > span {
      flex: 1;
      font-size: 12.5px;
      color: var(--bc-color-text-muted);
    }

    /* Hours curve in the chip hover preview (hours-density.ts). */
    .bc-paper-ctec-modal-dist-empty {
      padding: 22px 18px;
      border-radius: var(--bc-radius-lg);
      background: var(--bc-color-surface-hover);
      color: var(--bc-color-text-muted);
      font-size: var(--bc-font-12);
      text-align: center;
    }
    .bc-paper-ctec-modal-hours-density {
      width: 100%;
    }
    .bc-paper-ctec-modal-hours-density-svg {
      display: block;
      width: 100%;
      height: auto;
      max-height: 220px;
    }
  `}function Ot(){return`
    /* Two quiet text tabs under Paper.nu's own header; the selected one
       is ink-filled. */
    .${Pt} {
      display: flex;
      gap: 2px;
      margin: 0 0 12px;
      font-family: var(--bc-font-body);
      position: relative;
      z-index: 2;
      pointer-events: auto;
    }
    .bc-paper-ctec-side-tab {
      height: 28px;
      padding: 0 10px;
      border: 0;
      border-radius: 7px;
      background: transparent;
      color: var(--bc-color-text-soft);
      font-family: inherit;
      font-size: 12.5px;
      cursor: pointer;
      transition: background var(--bc-tx-base) var(--bc-easing), color var(--bc-tx-base) var(--bc-easing);
      position: relative;
      z-index: 1;
      pointer-events: auto;
    }
    .bc-paper-ctec-side-tab:hover {
      background: var(--bc-color-surface-hover);
      color: var(--bc-color-text-strong);
    }
    .bc-paper-ctec-side-tab.is-active,
    .bc-paper-ctec-side-tab.is-active:hover {
      background: var(--bc-color-accent);
      color: var(--bc-color-accent-on);
    }
    /* The panel is not a card: it sits on Paper.nu's panel surface. */
    .${Lt} {
      margin: 0 0 12px;
      font-family: var(--bc-font-body);
      color: var(--bc-color-text);
    }
    .bc-paper-ctec-analytics-body {
      padding: 2px 0 0;
    }
    .bc-paper-ctec-analytics-title {
      font-size: var(--bc-font-14);
      font-weight: var(--bc-fw-semibold);
      color: var(--bc-color-text-strong);
    }
    .bc-paper-ctec-analytics-subtitle {
      margin-top: 4px;
      font-size: var(--bc-font-12);
      line-height: 1.4;
      color: var(--bc-color-text-mauve-soft);
    }
    .bc-paper-ctec-analytics-callout {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 12px;
      padding: 10px 0 0;
      border-top: 1px solid var(--bc-color-border-divider);
      font-size: var(--bc-font-12);
      line-height: 1.45;
    }
    .bc-paper-ctec-analytics-callout.is-warn {
      color: var(--bc-color-warn-rose-text-deep);
    }
    .bc-paper-ctec-analytics-callout.is-muted {
      color: var(--bc-color-text-muted);
    }
    .bc-paper-ctec-analytics-callout a {
      flex-shrink: 0;
      color: inherit;
      font-weight: var(--bc-fw-semibold);
      text-decoration: underline;
      text-underline-offset: 3px;
    }
    /* The CTECs tab needs more room than Paper.nu's 448px panel. Paper.nu
       caps the panel's wrapper with md:max-w-md; lift that while our tab
       is showing. */
    [data-bc-ctec-wide] {
      max-width: min(100vw, 520px) !important;
    }
  `}function Ft(){return`
    .bc-paper-ctec-analytics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(${h.ui.analyticsMetricMinWidthPx}px, 1fr));
      gap: 8px;
      margin-bottom: 0;
    }
    .bc-paper-ctec-analytics-group {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 16px;
      padding: 12px;
      border: 1px solid var(--bc-color-accent-border-12);
      border-radius: var(--bc-radius-3xl);
      background: var(--bc-color-surface-translucent-86);
    }
    .bc-paper-ctec-analytics-group-title {
      font-size: var(--bc-font-11);
      font-weight: var(--bc-fw-extrabold);
      letter-spacing: var(--bc-ls-widest);
      text-transform: uppercase;
      color: var(--bc-color-text-mauve);
    }
    .bc-paper-ctec-analytics-card {
      border-radius: var(--bc-radius-2xl);
      border: 1px solid var(--bc-color-accent-border-12);
      background: var(--bc-color-surface-translucent-72);
      padding: 10px;
    }
    .bc-paper-ctec-analytics-card-label {
      font-size: var(--bc-font-11);
      font-weight: var(--bc-fw-bold);
      letter-spacing: var(--bc-ls-wider);
      text-transform: uppercase;
      color: var(--bc-color-text-mauve);
    }
    .bc-paper-ctec-analytics-card-rating {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 8px;
    }
    .bc-paper-ctec-analytics-card-value {
      font-size: var(--bc-font-14);
      font-weight: var(--bc-fw-extrabold);
      color: var(--bc-color-text-mauve-deep);
      white-space: nowrap;
    }
    .bc-paper-ctec-analytics-card-hours {
      margin-top: 8px;
      font-size: var(--bc-font-15);
      font-weight: var(--bc-fw-extrabold);
      color: var(--bc-color-text-mauve-deep);
    }
    .bc-paper-ctec-stars {
      display: inline-flex;
      align-items: center;
      gap: 2px;
    }
    .bc-paper-ctec-star {
      position: relative;
      display: inline-flex;
      width: ${h.ui.analyticsStarSizePx}px;
      height: ${h.ui.analyticsStarSizePx}px;
      flex: 0 0 auto;
    }
    .bc-paper-ctec-star svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      stroke-width: 1.7;
    }
    .bc-paper-ctec-star-base {
      color: var(--bc-color-star-base);
    }
    .bc-paper-ctec-star-fill {
      position: absolute;
      inset: 0 auto 0 0;
      overflow: hidden;
      color: var(--bc-color-star-fill);
    }
    .bc-paper-ctec-hours-track {
      margin-top: 8px;
      height: 8px;
      border-radius: var(--bc-radius-pill);
      background: var(--bc-color-accent-fill-12);
      overflow: hidden;
    }
    .bc-paper-ctec-hours-fill {
      height: 100%;
      border-radius: inherit;
      background: linear-gradient(90deg, var(--bc-color-hours-grad-start), var(--bc-color-hours-grad-end));
    }
    .bc-paper-ctec-hours-meta {
      margin-top: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      font-size: var(--bc-font-11);
      line-height: 1.35;
      color: var(--bc-color-text-muted);
    }
    .bc-paper-ctec-analytics-section-title {
      margin: 16px 0 8px;
      font-size: var(--bc-font-12);
      font-weight: var(--bc-fw-extrabold);
      letter-spacing: var(--bc-ls-widest);
      text-transform: uppercase;
      color: var(--bc-color-text-mauve);
    }
    .bc-paper-ctec-analytics-term-toolbar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 10px;
    }
    .bc-paper-ctec-analytics-term-selector {
      display: flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
      flex: 1 1 auto;
    }
    .bc-paper-ctec-analytics-term-selector label {
      font-size: var(--bc-font-12);
      font-weight: var(--bc-fw-bold);
      color: var(--bc-color-text-mauve-soft);
      white-space: nowrap;
    }
    .bc-paper-ctec-analytics-term-select {
      min-width: 0;
      flex: 1 1 auto;
      border: 1px solid var(--bc-color-accent-border-14);
      border-radius: var(--bc-radius-xl);
      background: var(--bc-color-surface-translucent-84);
      color: var(--bc-color-text-mauve-deep);
      font-size: var(--bc-font-12);
      font-weight: var(--bc-fw-semibold);
      padding: 8px 10px;
    }
    .bc-paper-ctec-analytics-term-summary {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 10px;
      padding: 12px;
      border-radius: var(--bc-radius-2xl);
      border: 1px solid var(--bc-color-accent-border-08);
      background: var(--bc-color-surface-translucent-56);
    }
    .bc-paper-ctec-analytics-term-title {
      font-size: var(--bc-font-14);
      font-weight: var(--bc-fw-extrabold);
      color: var(--bc-color-text-mauve-deep);
    }
    .bc-paper-ctec-analytics-term-meta {
      margin-top: 4px;
      font-size: var(--bc-font-12);
      line-height: 1.45;
      color: var(--bc-color-text-muted);
    }
    .bc-paper-ctec-analytics-term-link {
      color: var(--bc-color-accent-soft);
      font-size: var(--bc-font-11);
      font-weight: var(--bc-fw-extrabold);
      text-decoration: underline;
      text-underline-offset: 3px;
      white-space: nowrap;
    }
    .bc-paper-ctec-analytics-state-note {
      font-size: var(--bc-font-12);
      line-height: 1.5;
      color: var(--bc-color-text-muted);
    }
    .bc-paper-ctec-analytics-metric-stack {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .bc-paper-ctec-analytics-metric-card {
      border-radius: var(--bc-radius-2xl);
      border: 1px solid var(--bc-color-accent-border-08);
      background: var(--bc-color-surface-translucent-62);
      padding: 12px;
    }
    .bc-paper-ctec-analytics-metric-card-top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 10px;
    }
    .bc-paper-ctec-analytics-metric-chart-btn {
      flex: 0 0 auto;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      padding: 0;
      border: 1px solid var(--bc-color-accent-border-12);
      border-radius: var(--bc-radius-pill);
      background: var(--bc-color-accent-fill-05);
      color: var(--bc-color-accent-soft);
      cursor: pointer;
    }
    .bc-paper-ctec-analytics-metric-chart-btn svg {
      width: 14px;
      height: 14px;
      stroke-width: 1.9;
    }
    .bc-paper-ctec-analytics-metric-chart-btn:hover {
      background: var(--bc-color-accent-fill-10);
    }
    .bc-paper-ctec-analytics-inline-chart {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid var(--bc-color-accent-border-08);
    }
    .bc-paper-ctec-analytics-inline-chart-head {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .bc-paper-ctec-analytics-chart-title {
      font-size: var(--bc-font-12);
      font-weight: var(--bc-fw-bold);
      line-height: 1.4;
    }
    .bc-paper-ctec-analytics-chart-image {
      width: 100%;
      border-radius: var(--bc-radius-xl);
      background: var(--bc-color-surface-translucent-88);
    }
    .bc-paper-ctec-analytics-comments-toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-top: 10px;
    }
    .bc-paper-ctec-analytics-comments-search {
      width: 100%;
      border: 1px solid var(--bc-color-accent-border-14);
      border-radius: var(--bc-radius-xl);
      background: var(--bc-color-surface-translucent-84);
      color: var(--bc-color-text-mauve-deep);
      font-size: var(--bc-font-12);
      font-weight: var(--bc-fw-semibold);
      padding: 8px 10px;
    }
    .bc-paper-ctec-analytics-comments-count {
      flex: 0 0 auto;
      font-size: var(--bc-font-11);
      font-weight: var(--bc-fw-bold);
      color: var(--bc-color-text-mauve-soft);
      white-space: nowrap;
    }
    .bc-paper-ctec-analytics-comments {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 10px;
    }
    .bc-paper-ctec-analytics-comment-group {
      border-radius: var(--bc-radius-2xl);
      border: 1px solid var(--bc-color-accent-border-08);
      background: var(--bc-color-surface-translucent-56);
      padding: 12px;
    }
    .bc-paper-ctec-analytics-comment-prompt {
      margin-bottom: 8px;
      font-size: var(--bc-font-12);
      font-weight: var(--bc-fw-extrabold);
      line-height: 1.45;
      color: var(--bc-color-text-mauve-warm);
    }
    .bc-paper-ctec-analytics-comment-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .bc-paper-ctec-analytics-comment-card {
      padding: 10px;
      border-radius: var(--bc-radius-xl);
      background: var(--bc-color-accent-fill-05);
      font-size: var(--bc-font-12);
      line-height: 1.5;
      color: var(--bc-color-text-soft);
      white-space: pre-wrap;
    }
    .bc-paper-ctec-comment-highlight {
      background: var(--bc-color-comment-highlight-light);
      color: inherit;
      border-radius: var(--bc-radius-xs);
      padding: 0 1px;
    }
    .bc-paper-ctec-analytics-refresh-toolbar {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin: 0 0 14px;
      padding: 12px;
      border-radius: var(--bc-radius-2xl);
      border: 1px dashed var(--bc-color-accent-border-22);
      background: var(--bc-color-accent-fill-04);
    }
    .bc-paper-ctec-analytics-refresh-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }
    .bc-paper-ctec-analytics-refresh-copy {
      flex: 1 1 180px;
      min-width: 0;
      font-size: var(--bc-font-12);
      font-weight: var(--bc-fw-bold);
      line-height: 1.45;
      color: var(--bc-color-text-mauve-warm);
    }
    .bc-paper-ctec-analytics-refresh-explainer {
      font-size: var(--bc-font-11);
      line-height: 1.4;
      color: var(--bc-color-text-mauve-soft);
    }
    .bc-paper-ctec-analytics-load-more {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin: 16px 0 8px;
      padding: 10px 12px;
      border-radius: var(--bc-radius-2xl);
      border: 1px dashed var(--bc-color-accent-border-22);
      background: var(--bc-color-accent-fill-04);
    }
    .bc-paper-ctec-analytics-load-more-copy {
      flex: 1 1 180px;
      min-width: 0;
      font-size: var(--bc-font-12);
      line-height: 1.4;
      color: var(--bc-color-text-mauve-warm);
    }
    .bc-paper-ctec-analytics-refresh-btn {
      padding: 6px 10px;
      border-radius: var(--bc-radius-pill);
      border: 1px solid var(--bc-color-accent-border-32);
      background: var(--bc-color-surface-translucent-72);
      color: var(--bc-color-accent-soft);
      font: inherit;
      font-size: var(--bc-font-11);
      font-weight: var(--bc-fw-bold);
      letter-spacing: var(--bc-ls-wide);
      cursor: pointer;
    }
    .bc-paper-ctec-analytics-refresh-btn:hover:not(:disabled) {
      background: var(--bc-color-accent-fill-12);
    }
    .bc-paper-ctec-analytics-refresh-btn:disabled {
      opacity: 0.55;
      cursor: default;
    }
    .bc-paper-ctec-analytics-load-more-btn {
      flex: 0 0 auto;
      padding: 6px 12px;
      border-radius: var(--bc-radius-pill);
      border: 1px solid var(--bc-color-accent-soft);
      background: var(--bc-color-accent-soft);
      color: var(--bc-color-accent-soft-on);
      font: inherit;
      font-size: var(--bc-font-11);
      font-weight: var(--bc-fw-bold);
      letter-spacing: var(--bc-ls-wide);
      cursor: pointer;
    }
    .bc-paper-ctec-analytics-load-more-btn:hover {
      background: var(--bc-color-accent-soft-hover);
      border-color: var(--bc-color-accent-soft-hover);
    }
  `}function Ut(){return`
    #${xe} {
      display: flex;
      align-items: center;
      gap: 7px;
      min-width: 0;
      width: auto;
      max-width: none;
      min-height: ${h.ui.statusBarMinHeightPx}px;
      padding: 0 8px 0 2px;
      color: var(--bc-color-text-soft);
      font-family: var(--bc-font-body);
      font-size: var(--bc-font-12);
      font-weight: var(--bc-fw-regular);
      font-variant-numeric: tabular-nums;
      line-height: 1;
      flex: 1 1 auto;
      box-sizing: border-box;
      overflow: hidden;
    }
    #${xe} svg {
      width: ${h.ui.statusIconSizePx}px;
      height: ${h.ui.statusIconSizePx}px;
      flex: 0 0 auto;
      stroke-width: 2.2;
    }
    .bc-paper-ctec-status-mark {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${h.ui.statusIconSizePx}px;
      flex-shrink: 0;
      color: var(--bc-color-text-muted);
    }
    #${xe}.is-ready .bc-paper-ctec-status-mark {
      color: var(--bc-color-success);
    }
    .bc-paper-ctec-status-spinner {
      width: 11px;
      height: 11px;
      box-sizing: border-box;
      border-radius: var(--bc-radius-circle);
      border: 1.5px solid var(--bc-color-border-strong);
      border-top-color: var(--bc-color-text-strong);
      animation: bc-paper-ctec-widget-spin 900ms linear infinite;
    }
    .bc-paper-ctec-status-copy {
      min-width: 0;
      flex: 1 1 auto;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `}function Gt(){if($t(),document.getElementById(Ne))return;let e=document.createElement("style");e.id=Ne,e.textContent=[Dt(),Ut(),Ot(),Ft(),Ht()].join(`
`),(document.head??document.documentElement).appendChild(e)}var je=globalThis,zt=e=>e,ye=je.trustedTypes,Bt=ye?ye.createPolicy("lit-html",{createHTML:e=>e}):void 0,qt="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,Qt="?"+D,Bo=`<${Qt}>`,B=document,te=()=>B.createComment(""),re=e=>e===null||typeof e!="object"&&typeof e!="function",Ke=Array.isArray,jo=e=>Ke(e)||typeof e?.[Symbol.iterator]=="function",Oe=`[ 	
\f\r]`,ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jt=/-->/g,Kt=/>/g,G=RegExp(`>|${Oe}(?:([^\\s"'>=/]+)(${Oe}*=${Oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wt=/'/g,Vt=/"/g,Jt=/^(?:script|style|textarea|title)$/i,We=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),b=We(1),_=We(2),Bs=We(3),oe=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Yt=new WeakMap,z=B.createTreeWalker(B,129);function Xt(e,t){if(!Ke(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bt!==void 0?Bt.createHTML(t):t}var Ko=(e,t)=>{let r=e.length-1,o=[],n,c=t===2?"<svg>":t===3?"<math>":"",s=ee;for(let i=0;i<r;i++){let a=e[i],l,u,d=-1,f=0;for(;f<a.length&&(s.lastIndex=f,u=s.exec(a),u!==null);)f=s.lastIndex,s===ee?u[1]==="!--"?s=jt:u[1]!==void 0?s=Kt:u[2]!==void 0?(Jt.test(u[2])&&(n=RegExp("</"+u[2],"g")),s=G):u[3]!==void 0&&(s=G):s===G?u[0]===">"?(s=n??ee,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,l=u[1],s=u[3]===void 0?G:u[3]==='"'?Vt:Wt):s===Vt||s===Wt?s=G:s===jt||s===Kt?s=ee:(s=G,n=void 0);let m=s===G&&e[i+1].startsWith("/>")?" ":"";c+=s===ee?a+Bo:d>=0?(o.push(l),a.slice(0,d)+qt+a.slice(d)+D+m):a+D+(d===-2?i:m)}return[Xt(e,c+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]},ne=class e{constructor({strings:t,_$litType$:r},o){let n;this.parts=[];let c=0,s=0,i=t.length-1,a=this.parts,[l,u]=Ko(t,r);if(this.el=e.createElement(l,o),z.currentNode=this.el.content,r===2||r===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=z.nextNode())!==null&&a.length<i;){if(n.nodeType===1){if(n.hasAttributes())for(let d of n.getAttributeNames())if(d.endsWith(qt)){let f=u[s++],m=n.getAttribute(d).split(D),x=/([.?@])?(.*)/.exec(f);a.push({type:1,index:c,name:x[2],strings:m,ctor:x[1]==="."?Ue:x[1]==="?"?Ge:x[1]==="@"?ze:Q}),n.removeAttribute(d)}else d.startsWith(D)&&(a.push({type:6,index:c}),n.removeAttribute(d));if(Jt.test(n.tagName)){let d=n.textContent.split(D),f=d.length-1;if(f>0){n.textContent=ye?ye.emptyScript:"";for(let m=0;m<f;m++)n.append(d[m],te()),z.nextNode(),a.push({type:2,index:++c});n.append(d[f],te())}}}else if(n.nodeType===8)if(n.data===Qt)a.push({type:2,index:c});else{let d=-1;for(;(d=n.data.indexOf(D,d+1))!==-1;)a.push({type:7,index:c}),d+=D.length-1}c++}}static createElement(t,r){let o=B.createElement("template");return o.innerHTML=t,o}};function q(e,t,r=e,o){if(t===oe)return t;let n=o!==void 0?r._$Co?.[o]:r._$Cl,c=re(t)?void 0:t._$litDirective$;return n?.constructor!==c&&(n?._$AO?.(!1),c===void 0?n=void 0:(n=new c(e),n._$AT(e,r,o)),o!==void 0?(r._$Co??=[])[o]=n:r._$Cl=n),n!==void 0&&(t=q(e,n._$AS(e,t.values),n,o)),t}var Fe=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:r},parts:o}=this._$AD,n=(t?.creationScope??B).importNode(r,!0);z.currentNode=n;let c=z.nextNode(),s=0,i=0,a=o[0];for(;a!==void 0;){if(s===a.index){let l;a.type===2?l=new ce(c,c.nextSibling,this,t):a.type===1?l=new a.ctor(c,a.name,a.strings,this,t):a.type===6&&(l=new Be(c,this,t)),this._$AV.push(l),a=o[++i]}s!==a?.index&&(c=z.nextNode(),s++)}return z.currentNode=B,n}p(t){let r=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}},ce=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,o,n){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=q(this,t,r),re(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==oe&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):jo(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&re(this._$AH)?this._$AA.nextSibling.data=t:this.T(B.createTextNode(t)),this._$AH=t}$(t){let{values:r,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=ne.createElement(Xt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(r);else{let c=new Fe(n,this),s=c.u(this.options);c.p(r),this.T(s),this._$AH=c}}_$AC(t){let r=Yt.get(t.strings);return r===void 0&&Yt.set(t.strings,r=new ne(t)),r}k(t){Ke(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,o,n=0;for(let c of t)n===r.length?r.push(o=new e(this.O(te()),this.O(te()),this,this.options)):o=r[n],o._$AI(c),n++;n<r.length&&(this._$AR(o&&o._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){let o=zt(t).nextSibling;zt(t).remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Q=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,o,n,c){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=c,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=y}_$AI(t,r=this,o,n){let c=this.strings,s=!1;if(c===void 0)t=q(this,t,r,0),s=!re(t)||t!==this._$AH&&t!==oe,s&&(this._$AH=t);else{let i=t,a,l;for(t=c[0],a=0;a<c.length-1;a++)l=q(this,i[o+a],r,a),l===oe&&(l=this._$AH[a]),s||=!re(l)||l!==this._$AH[a],l===y?t=y:t!==y&&(t+=(l??"")+c[a+1]),this._$AH[a]=l}s&&!n&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ue=class extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}},Ge=class extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}},ze=class extends Q{constructor(t,r,o,n,c){super(t,r,o,n,c),this.type=5}_$AI(t,r=this){if((t=q(this,t,r,0)??y)===oe)return;let o=this._$AH,n=t===y&&o!==y||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,c=t!==y&&(o===y||n);n&&this.element.removeEventListener(this.name,this,o),c&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Be=class{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}};var Wo=je.litHtmlPolyfillSupport;Wo?.(ne,ce),(je.litHtmlVersions??=[]).push("3.3.2");var Ve=(e,t,r)=>{let o=r?.renderBefore??t,n=o._$litPart$;if(n===void 0){let c=r?.renderBefore??null;o._$litPart$=n=new ce(t.insertBefore(te(),c),c,void 0,r??{})}return n._$AI(e),n};var Zt="caesar.ent.northwestern.edu",H=`https://${Zt}`;var er="northwestern.bluera.com",Vo=`https://${er}`;var Yo="my-northwestern-bc.bluera.com";function ve(e){let t;try{t=new URL(e)}catch{return e}return t.hostname.toLowerCase()!==er||t.pathname.toLowerCase().startsWith("/northwestern/")?e:(t.hostname=Yo,t.toString())}var tr="/psc/csnu/EMPLOYEE/SA/c/SA_LEARNER_SERVICES.CLASS_SEARCH.GBL",qo=`${tr}?Page=SSR_CLSRCH_ENTRY&Action=U`;var se="better-caesar:ctec-index:v1";function I(e){return e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function P(e){let t=e.trim().match(/^([A-Z][A-Z_]*)\s+(\d+)/);return t?`${t[1]} ${t[2]}`:e.split("-")[0]?.trim()??e}var Ye="var(--bc-icon-hole, var(--bc-color-bg))",cr=e=>`color: color-mix(in srgb, var(${e}) var(--bc-icon-strength, 100%), var(--bc-icon-wash, transparent))`,E=e=>e.toFixed(2),Qo=(()=>{let e="";for(let t=0;t<6;t++){let r=t*Math.PI/3-Math.PI/2,o=i=>`${E(8+Math.cos(r)*i)} ${E(8+Math.sin(r)*i)}`,n=8+Math.cos(r)*4.2,c=8+Math.sin(r)*4.2,s=i=>`${E(n+Math.cos(r+i)*2)} ${E(c+Math.sin(r+i)*2)}`;e+=`M${o(1.6)}L${o(6.6)}M${s(.75)}L${E(n)} ${E(c)}L${s(-.75)}`}return e})(),Jo=[0,1,2,3,4].map(e=>{let t=e*2*Math.PI/5-Math.PI/2;return{cx:E(8+Math.cos(t)*3.6),cy:E(8.2+Math.sin(t)*3.6)}}),Xo=(()=>{let e="";for(let t=0;t<8;t++){let r=t*Math.PI/4,o=t%2?6.4:7.2;e+=`M${E(8+Math.cos(r)*5)} ${E(8+Math.sin(r)*5)}L${E(8+Math.cos(r)*o)} ${E(8+Math.sin(r)*o)}`}return e})(),Zo={fall:_`<g transform="rotate(35 8 8)">
    <path d="M8 1.2C12.6 3.9 13.7 9 8 13.2 2.3 9 3.4 3.9 8 1.2z" fill="currentColor" />
    <path d="M8 12.4V4.6M8 9.4l2.1-1.7M8 7.2L6.1 5.8" fill="none" style="stroke: ${Ye}" stroke-width="1" stroke-linecap="round" />
    <path d="M8 13v2.2" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
  </g>`,winter:_`<path d=${Qo} fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="8" cy="8" r="1.3" fill="currentColor" />`,spring:_`${Jo.map(e=>_`<circle cx=${e.cx} cy=${e.cy} r="2.75" fill="currentColor" />`)}<circle cx="8" cy="8.2" r="1.85" style="fill: ${Ye}" />
    <circle cx="8" cy="8.2" r="0.9" fill="currentColor" />`,summer:_`<circle cx="8" cy="8" r="3.3" fill="currentColor" />
    <path d=${Xo} fill="none" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" />`},en={fall:"--bc-color-season-fall",winter:"--bc-color-season-winter",spring:"--bc-color-season-spring",summer:"--bc-color-season-summer"};function j(e){let t=e.match(/\b(fall|winter|spring|summer)\b/i);return t?t[1].toLowerCase():null}function J(e,t=14){return b`<svg
    class="bc-icon bc-icon-season"
    data-season=${e}
    width=${t}
    height=${t}
    viewBox="0 0 16 16"
    aria-hidden="true"
    style=${cr(en[e])}
  >${Zo[e]}</svg>`}var tn={positive:"M5.1 9.5Q8 12.6 10.9 9.5",neutral:"M5.5 10.5H10.5",mixed:"M5.1 10.7Q6.5 9.3 8 10.4T10.9 10.1",critical:"M5.3 11.5Q8 8.7 10.7 11.5"},rn={positive:"--bc-color-sentiment-pos-fg",mixed:"--bc-color-sentiment-mix-fg",neutral:"--bc-color-sentiment-neu-fg",critical:"--bc-color-sentiment-neg-fg"},ae={positive:"Positive",mixed:"Mixed",neutral:"Neutral",critical:"Critical"};function qe(e,t=16){return b`<svg
    class="bc-icon bc-icon-face"
    data-tone=${e}
    width=${t}
    height=${t}
    viewBox="0 0 16 16"
    role="img"
    aria-label=${ae[e]}
    style=${cr(rn[e])}
  >
    <circle
      cx="8"
      cy="8"
      r="6.6"
      style="fill: color-mix(in srgb, currentColor var(--bc-icon-tint, 13%), ${Ye}); stroke: currentColor; stroke-width: 1.3"
    />
    <circle cx="5.8" cy="6.5" r="0.95" fill="currentColor" />
    <circle cx="10.2" cy="6.5" r="0.95" fill="currentColor" />
    <path d=${tn[e]} fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" />
  </svg>`}function L(e){let t=j(e),r=e.match(/\b\d{4}\b/)?.[0];return!t||!r?e:`${t[0].toUpperCase()}${t.slice(1)} ${r}`}function Se(e){let t=e.match(/\b\d{4}\b/)?.[0];return t?`\u2019${t.slice(2)}`:e}function O(e,t=L(e)){let r=j(e);return b`<span class="bc-sheet-termlabel"
    >${r?J(r,13):""}<span>${t}</span></span
  >`}function M(e,t){return`${e} ${t}${e===1?"":"s"}`}var Qe=["pos","mix","neu","neg"],ie={pos:"positive",mix:"mixed",neu:"neutral",neg:"critical"};function on(e,t){return e.text.toLowerCase().includes(t)||e.topics.includes(t)}function nn(e){let t=new Map;for(let r of e)for(let o of r.topics){let n=t.get(o);n||(n={label:o,count:0,tally:{pos:0,mix:0,neu:0,neg:0}},t.set(o,n)),n.count+=1,n.tally[r.tone]+=1}return[...t.values()].filter(r=>r.count>=2).sort((r,o)=>o.count-r.count)}function cn(e){return Qe.reduce((t,r)=>e[r]>e[t]?r:t)}function sn(e,t){if(!t)return[e];let r=[],o=e.toLowerCase(),n=0,c;for(;(c=o.indexOf(t,n))!==-1;)c>n&&r.push(e.slice(n,c)),r.push(b`<mark class="bc-sheet-q">${e.slice(c,c+t.length)}</mark>`),n=c+t.length;return n<e.length&&r.push(e.slice(n)),r}var an="please summarize your reaction to this course focusing on the aspects that were most important to you";function ln(e){return e.prompt.toLowerCase().replace(/\s+/g," ").replace(/[.!?;:,]+$/u,"").trim()===an?"":e.prompt.trim()}var un=b`<svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
  <circle cx="7" cy="7" r="4.6" fill="none" stroke="currentColor" stroke-width="1.5" />
  <path d="M10.4 10.4L13.6 13.6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
</svg>`,dn=b`<svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
  <path d="M2 2l6 6M8 2L2 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>`;function sr(e){let{input:t,data:r,state:o,callbacks:n,term:c}=e,s=o.commentsQuery.trim(),i=s.toLowerCase(),a=c?r.comments.filter(g=>g.term===c.term):r.comments,l=i?a.filter(g=>on(g,i)):a,u=o.commentsSentimentFilter==="all"?l:l.filter(g=>g.tone===o.commentsSentimentFilter),d=u.slice(0,o.commentsVisibleCount),f=nn(a),m=()=>{let g=e.sheet()?.querySelector(".bc-sheet-com"),T=g?.parentElement;g&&T&&T.scrollTop>g.offsetTop&&(T.scrollTop=g.offsetTop)},x=g=>{o.commentsQuery=g,o.commentsVisibleCount=50,e.rerender(),m()},C=(g,T)=>{let k=g==="all"?l.length:l.filter(wo=>wo.tone===g).length,Tt=o.commentsSentimentFilter===g;return b`<button
      type="button"
      role="tab"
      class=${`bc-sheet-tone${Tt?" is-on":""}${k===0?" is-empty":""}`}
      data-tone=${g}
      aria-selected=${Tt?"true":"false"}
      @click=${()=>{n.onCommentsSentimentChange(g),m()}}
    ><span class="bc-sheet-tone-name">${T}</span
      ><span class="bc-sheet-tone-n">${k}</span></button>`},S=g=>t.strategy==="course"?g.instructor.trim():t.strategy==="instructor"?P(g.description):"",v=g=>{let T=ln(g),k=S(g);return b`<article class="bc-sheet-c">
      ${qe(ie[g.tone])}
      <div class="bc-sheet-c-main">
        ${T?b`<p class="bc-sheet-c-prompt">${T}</p>`:""}
        <p class="bc-sheet-c-text">${sn(g.text,i)}</p>
        ${!c||k?b`<div class="bc-sheet-c-meta">
              ${c?"":O(g.term)}${k?b`<span>${k}</span>`:""}
            </div>`:""}
      </div>
    </article>`},R;if(u.length===0){let g=i?`No comments mention \u201C${s}\u201D`:o.commentsSentimentFilter==="all"?"No comments":`No ${ae[ie[o.commentsSentimentFilter]].toLowerCase()} comments`;R=b`<p class="bc-sheet-empty">
      ${g}${c?b` in ${O(c.term)}`:""}
    </p>`}else R=d.map(v);let w=u.length-d.length;return b`<section class="bc-sheet-com">
    <div class="bc-sheet-com-head">
      <h3 class="bc-sheet-sec-title">Comments</h3>
      <div class="bc-sheet-tones" role="tablist" aria-label="Tone">
        ${C("all","All")}
        ${Qe.map(g=>C(g,ae[ie[g]]))}
      </div>
      <label class=${`bc-sheet-search${s?" has-value":""}`}>
        ${un}
        <input
          type="search"
          placeholder="Search comments"
          aria-label="Search comments"
          .value=${o.commentsQuery}
          @input=${g=>x(g.target.value)}
          @keydown=${g=>{g.key!=="Escape"?g.stopPropagation():o.commentsQuery&&(g.stopPropagation(),x(""))}}
        />
        <button
          type="button"
          class="bc-sheet-search-clear"
          aria-label="Clear search"
          @click=${g=>{g.preventDefault(),x(""),e.sheet()?.querySelector(".bc-sheet-search input")?.focus()}}
        >${dn}</button>
      </label>
    </div>
    ${f.length?b`<div class="bc-sheet-topics">
          <div class="bc-sheet-topics-title">Often mentioned</div>
          <div class="bc-sheet-topic-row">
            ${f.map(g=>{let T=i===g.label;return b`<button
                type="button"
                class=${`bc-sheet-topic${T?" is-on":""}`}
                aria-pressed=${T?"true":"false"}
                title=${Qe.filter(k=>g.tally[k]>0).map(k=>`${g.tally[k]} ${ae[ie[k]].toLowerCase()}`).join(", ")}
                @click=${()=>x(T?"":g.label)}
              >${qe(ie[cn(g.tally)],14)}<span>${g.label}</span
                ><span class="bc-sheet-topic-n">${g.count}</span></button>`})}
          </div>
        </div>`:""}
    <div class="bc-sheet-com-list">
      ${R}
      ${w>0?b`<button
            type="button"
            class="bc-sheet-more"
            @click=${()=>{o.commentsVisibleCount+=50,e.rerender()}}
          >Show ${Math.min(50,w)} more (${w} left)</button>`:""}
    </div>
  </section>`}var bn={"CHEM 210-1":"CHEM 215-1","CHEM 210-2":"CHEM 215-2","CHEM 210-3":"CHEM 215-3","CHEM 210-A":"CHEM 215-A","CHEM 210-B":"CHEM 215-B","CHEM 210-C":"CHEM 215-C","CHEM 212-1":"CHEM 217-1","CHEM 212-2":"CHEM 217-2","CHEM 212-3":"CHEM 217-3","CHEM 232-1":"CHEM 237-1","CHEM 232-2":"CHEM 237-2","BIOL_SCI 215-0":"BIOL_SCI 201-0","BIOL_SCI 215-CN":"BIOL_SCI 201-CN","BIOL_SCI 219-0":"BIOL_SCI 202-0","BIOL_SCI 219-CN":"BIOL_SCI 202-CN","BIOL_SCI 217-0":"BIOL_SCI 310-0","BIOL_SCI 220-0":"BIOL_SCI 233-0","BIOL_SCI 221-0":"BIOL_SCI 232-0","BIOL_SCI 222-0":"BIOL_SCI 234-0","BIOL_SCI 308-0":"BIOL_SCI 301-0","MATH 212-0":"MATH 218-1","MATH 213-0":"MATH 218-2","MATH 214-0":"MATH 218-3","MATH 220-0":"MATH 220-1","MATH 224-0":"MATH 220-2","MATH 230-0":"MATH 230-1","MATH 234-0":"MATH 230-2","ENVR_SCI 201-0":"EARTH 210-0","ENVR_SCI 202-0":"EARTH 212-0","ENVR_SCI 203-0":"EARTH 213-0","EARTH 201-0":"EARTH 214-0","EARTH 202-0":"EARTH 215-0","EARTH 203-0":"EARTH 210-0","PSYCH 205-0":"PSYCH 301-0","PSYCH 204-0":"PSYCH 213-0","PSYCH 212-0":"PSYCH 221-0","PSYCH 218-0":"PSYCH 244-0","PSYCH 245-0":"PSYCH 345-0","PSYCH 314-0":"PSYCH 350-0","PSYCH 316-0":"PSYCH 330-0","PSYCH 335-0":"PSYCH 373-0","PSYCH 357-0":"PSYCH 390-0","PSYCH 358-0":"PSYCH 391-0","PSYCH 359-0":"PSYCH 392-0","PSYCH 361-0":"PSYCH 328-0","PSYCH 363-0":"PSYCH 378-0","PSYCH 376-0":"PSYCH 308-0","PSYCH 377-0":"PSYCH 367-0","ASTRON 220-0":"ASTRON 220-1","ASTRON 425-0":"ASTRON 325-0","COMP_SCI 214-0":"COMP_SCI 208-0","COMP_SCI 111-0":"COMP_SCI 180-0","COMP_SCI 325-1":"COMP_SCI 325-0","EECS 317-0":"COMP_SCI 217-0","IEMS 202-0":"IEMS 302-0","SPANISH 197-0":"SPANISH 200-0","SPANISH 207-0":"SPANISH 200-0","SPANISH 203-0":"SPANISH 201-0","SPANISH 220-0":"SPANISH 204-0","FRENCH 101-A":"FRENCH 111-A","FRENCH 101-B":"FRENCH 111-B","FRENCH 101-C":"FRENCH 111-C","FRENCH 102-A":"FRENCH 121-A","FRENCH 102-B":"FRENCH 121-B","FRENCH 102-C":"FRENCH 121-C","PORT 121-3":"PORT 115-2","ARABIC 311-2":"ARABIC 211-3","GBL_HLTH 301-0":"GBL_HLTH 201-0","COMP_LIT 210-0":"ENGLISH 220-0","THEATRE 140-1":"THEATRE 160-1","THEATRE 140-2":"THEATRE 160-2","THEATRE 120-0":"THEATRE 160-3","THEATRE 364-1":"THEATRE 328-1","THEATRE 364-2":"THEATRE 328-2","THEATRE 364-3":"THEATRE 328-3","SESP 195-0":"SESP 195-1","MUS_TECH 259-0":"MUS_TECH 300-0","MUS_COMP 111-0":"MUS_COMP 211-0"},pn={AF_AM_ST:"BLK_ST",GNDR_ST:"GSS"};var ar=new Map;for(let[e,t]of Object.entries(bn))ar.set(t,[...ar.get(t)??[],e]);var Sa=new Map(Object.entries(pn).map(([e,t])=>[t,e]));function fn(e){return e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function ir(e){let t=[];for(let r of e.split(",")){let o=fn(r).split(" ").filter(i=>i.length>0);if(o.length===0)continue;let n=o.length-1;(o[n]==="jr"||o[n]==="sr")&&n>0&&(n-=1);let c=o[n]??"";if(c.length<2)continue;let s=n>0?o[0]?.[0]??null:null;t.push({last:c,firstInitial:s})}return t}function K(e,t){let r=ir(t);if(r.length===0)return!0;let o=ir(e);return o.length===0?!1:r.some(n=>o.some(c=>n.last!==c.last?!1:c.firstInitial&&n.firstInitial?c.firstInitial===n.firstInitial:!(c.firstInitial&&!n.firstInitial)))}function dr(e,t,r){let o=t.dryRun;if(!o)return"";let n=e.identity.subject,c=`${n} ${e.identity.catalog.replace(/-0$/,"")}`,s=e.identity.instructor.trim()||"this professor";return b`<section class="bc-sheet-wiz" aria-labelledby="bc-sheet-wiz-title">
    <h3 id="bc-sheet-wiz-title" class="bc-sheet-wiz-title">
      No CTECs for ${s} in ${c}
    </h3>
    <p class="bc-sheet-wiz-text">
      Reports only exist once a class has been taught and evaluated. Pick someone or something close.
    </p>
    ${e.courseLensRedundant?"":ur("course",`Who has taught ${c}`,o,e,r)}
    ${e.instructorLensRedundant?"":ur("instructor",`What else ${s} teaches in ${n}`,o,e,r)}
    <div class="bc-sheet-wiz-foot">
      <span></span>
      <button
        type="button"
        class="bc-btn bc-btn--ghost bc-btn--sm"
        @click=${()=>r.onDryRunCancel()}
      >Cancel</button>
    </div>
  </section>`}function ur(e,t,r,o,n){let c=e==="course"?r.coursePool:r.instructorPool,s=a=>{n.onDryRunChooseSource(e),n.onDryRunSelectPreset(a),n.onDryRunConfirm()},i;if(c.kind==="ready"){let a=hn(Cn(c.rows,e),e,{catalog:o.identity.catalog,instructor:o.identity.instructor}).filter(l=>l.kind==="by-instructor"||l.kind==="by-catalog");i=a.length===0?b`<p class="bc-sheet-wiz-status">
            ${e==="course"?"Nobody else on record.":"Nothing else on record."}
          </p>`:b`<div class="bc-sheet-wiz-list">
            ${a.map(l=>gn(l,c.rows,s))}
            ${a.length>1?b`<button
                  type="button"
                  class="bc-sheet-wiz-row bc-sheet-wiz-row--all"
                  data-bc-action-button="controller"
                  @click=${()=>s({kind:"recent"})}
                ><span class="bc-sheet-wiz-row-title"
                    >${e==="course"?"Everyone, latest first":"All of them, latest first"}</span
                  >${br(c.rows.map(l=>l.term))}</button>`:""}
          </div>`}else{let a=c.kind==="loading"?"Looking":c.kind==="empty"?e==="course"?"Nobody else on record.":"Nothing else on record.":c.kind==="no-access"?"You don't have access to CTECs.":c.kind==="auth-required"?"Sign in to Northwestern to see these.":c.message;i=b`<p class="bc-sheet-wiz-status">${a}</p>`}return b`<h4 class="bc-sheet-wiz-head">${t}</h4>
    ${i}`}function gn(e,t,r){let o=e.kind==="by-instructor"?t.filter(s=>K(s.instructor,e.instructor)):e.kind==="by-catalog"?t.filter(s=>s.catalogLabel===e.catalog):t,n=e.kind==="by-instructor"?e.instructor:e.kind==="by-catalog"?e.catalog:"",c=e.kind==="by-catalog"?e.title.trim():"";return b`<button
    type="button"
    class="bc-sheet-wiz-row"
    data-bc-action-button="controller"
    @click=${()=>r(e)}
  ><span class="bc-sheet-wiz-row-body"
      ><span class="bc-sheet-wiz-row-title">${n}</span
      >${c?b`<span class="bc-sheet-wiz-row-about">${c}</span>`:""}</span
    >${br(o.map(s=>s.term))}</button>`}var mn=4;function br(e){let t=[...new Set(e)],r=t.slice(0,mn),o=t.length-r.length;return b`<span class="bc-sheet-wiz-terms" aria-label=${t.map(L).join(", ")}
    >${r.map(n=>{let c=j(n);return b`<span class="bc-sheet-wiz-term" title=${L(n)}
        >${c?J(c,13):""}<span>${Se(n)}</span></span
      >`})}${o>0?b`<span class="bc-sheet-wiz-term">+${o}</span>`:""}</span
  >`}function hn(e,t,r){return e.filter(o=>!(t==="course"&&o.kind==="by-instructor"&&K(o.instructor,r.instructor)||t==="instructor"&&o.kind==="by-catalog"&&xn(o.catalog,r.catalog)))}function xn(e,t){let r=n=>n.match(/\d{3}/)?.[0],o=r(e);return o?o===r(t):!1}function Cn(e,t){if(e.length===0)return[{kind:"recent"}];if(t==="course"){let n=vn(e),c=[];for(let s of n.values()){let i=s[0];i&&c.push({kind:"by-instructor",instructor:i.instructor,count:s.length})}return c.length<=1?c.length===1?c:[{kind:"recent"}]:[{kind:"recent"},{kind:"diverse-instructors"},...c]}let r=yn(e),o=[];for(let n of r.values()){let c=n[0];c&&o.push({kind:"by-catalog",catalog:c.catalogLabel,title:wn(c.description),count:n.length})}return o.length<=1?o.length===1?o:[{kind:"recent"}]:[{kind:"recent"},...o]}function yn(e){let t=new Map;for(let r of e){let o=t.get(r.catalogLabel);o?o.push(r):t.set(r.catalogLabel,[r])}return t}function vn(e){let t=new Map;for(let r of e){let o=I(r.instructor),n=t.get(o);n?n.push(r):t.set(o,[r])}return t}function wn(e){let t=e.trim().match(/^[A-Z][A-Z_]*\s+\d+(?:-\d+)*\s+(.+?)\s*$/);return!t||!t[1]?"":Sn(t[1].trim())}function Sn(e){return e.toLowerCase().replace(/\b([a-z])/g,t=>t.toUpperCase()).replace(/\bFor\b/g,"for").replace(/\bAnd\b/g,"and").replace(/\bThe\b/g,"the").replace(/\bOf\b/g,"of")}var Rn="bc-debug";function pr(){try{return typeof localStorage<"u"&&localStorage.getItem(Rn)==="1"}catch{return!1}}function A(e,t){pr()&&console.warn(`[bc:${e}]`,t)}function Te(e,...t){pr()&&console.debug(`[bc:${e}]`,...t)}var le="better-caesar:ctec-no-access:v2";var Je=null;chrome.storage.local.get(le).then(e=>{Je=fr(e[le]),Te("ctec-access:hydrate","loaded from storage",{state:Je})}).catch(e=>A("ctec-access:hydrate",e));chrome.storage.onChanged.addListener((e,t)=>{t==="local"&&le in e&&(Je=fr(e[le]?.newValue))});function fr(e){if(!e||typeof e!="object")return null;let t=e;return t.kind==="confirmed"&&typeof t.confirmedAt=="number"?{kind:"confirmed",confirmedAt:t.confirmedAt}:t.kind==="denied"&&typeof t.deniedAt=="number"?{kind:"denied",deniedAt:t.deniedAt}:null}var Tn={version:1,subjects:{}},gr={version:1,subjects:{}};chrome.storage.local.get(se).then(e=>{gr=mr(e[se])});chrome.storage.onChanged.addListener((e,t)=>{t==="local"&&se in e&&(gr=mr(e[se]?.newValue))});function mr(e){if(!e||typeof e!="object")return{version:1,subjects:{}};let t=e;return t.version===1&&t.subjects&&typeof t.subjects=="object"?t:{...Tn}}var En="Can\u2019t reach CAESAR",Ya=`${En}. If you\u2019re off campus, connect to Northwestern\u2019s GlobalProtect VPN and try again.`;var An="37";var ti=new RegExp(`win${An}(?!\\d)`,"g");var hr=0;function kn(){return hr+=1,`bc-${Date.now().toString(36)}-${hr.toString(36)}`}async function xr(e,t,r){let o=kn(),n=()=>{let c={type:"abort-fetch",requestId:o};chrome.runtime.sendMessage(c).catch(()=>{})};t&&(t.aborted?n():t.addEventListener("abort",n,{once:!0}));try{let c=await chrome.runtime.sendMessage({type:"fetch-binary",url:e,requestId:o,timeoutMs:r?.timeoutMs});if(!c?.ok)throw new Error(c?.error||"Background binary fetch failed.");if(c.status<200||c.status>=300)throw new Error(`Binary fetch ${c.status}`);let s=atob(c.base64),i=new Uint8Array(s.length);for(let a=0;a<s.length;a+=1)i[a]=s.charCodeAt(a);return{buffer:i.buffer,contentType:c.contentType,finalUrl:c.finalUrl}}finally{t&&t.removeEventListener("abort",n)}}var Ze="better-caesar:features:v1",et="better-caesar:recent-agg-terms:v1",tt="better-caesar:ctec-strategy:v1",Cr="combo",Mn=new Set(["combo","course","instructor"]),yr=3,_n=1,In=50,Ae="group:master",rt="group:caesar",ot="group:paper",Pn={"seats-notes":"caesar","ctec-links":"caesar","enrollment-navigation":"caesar","caesar-go-to":"caesar","caesar-history":"caesar","class-search":"caesar","course-history-view":"caesar","paper-brand":"paper","paper-enrollment-dates":"paper","paper-ctec":"paper","paper-ctec-single-summary-card":"paper","paper-ctec-compact-cards":"paper","paper-ctec-compact-card-stars":"paper","paper-ctec-rating-percent":"paper","paper-card-border-on-hover":"paper","paper-combos":"paper","paper-combos-active":"paper","paper-hide-taken":"paper","paper-hide-taken-mount":"paper","paper-export-helper":"paper","prereq-filter":"paper","prereq-filter-mount":"paper","prereq-filter-unknown-as-eligible":"paper"},Xe={[Ae]:!0,[rt]:!0,[ot]:!0,"paper-ctec-compact-card-stars":!1,"paper-ctec-single-summary-card":!0,"paper-ctec-rating-percent":!1,"paper-card-border-on-hover":!0,"paper-combos":!0,"paper-combos-active":!1,"prereq-filter":!1,"prereq-filter-unknown-as-eligible":!1},ue={},vr=yr,nt=Cr;chrome.storage.local.get([Ze,et,tt]).then(e=>{let t=e[Ze];t&&typeof t=="object"&&(ue=t),vr=wr(e[et]),nt=Sr(e[tt])});chrome.storage.onChanged.addListener((e,t)=>{if(t!=="local")return;let r=e[Ze];if(r){let c=r.newValue;ue=c&&typeof c=="object"?c:{}}let o=e[et];o&&(vr=wr(o.newValue));let n=e[tt];if(n){let c=Sr(n.newValue),s=c!==nt;if(nt=c,s)for(let i of Ln)try{i(c)}catch{}}});var Ln=new Set;function wr(e){let t=typeof e=="number"?e:typeof e=="string"?Number.parseInt(e,10):Number.NaN;if(!Number.isFinite(t))return yr;let r=Math.floor(t);return Math.max(_n,Math.min(In,r))}function ct(e){if(e!==Ae&&e!==rt&&e!==ot){if(!(ue[Ae]??Xe[Ae]??!0))return!1;let t=Pn[e];if(t){let r=t==="caesar"?rt:ot;if(!(ue[r]??Xe[r]??!0))return!1}}return ue[e]??Xe[e]??!0}function Sr(e){return typeof e=="string"&&Mn.has(e)?e:Cr}var $n=.3;function Rr(e){let t=e.thresholdRatio??$n,r={version:1,credits:[]};typeof chrome<"u"&&chrome.storage?.local&&(chrome.storage.local.get(e.key).then(i=>{let a=i[e.key];if(a&&typeof a=="object"){let l=a;l.version===1&&Array.isArray(l.credits)&&(r={version:1,credits:l.credits.filter(u=>typeof u=="number")})}}).catch(i=>A(`credit-pool.${e.name}.init`,i)),chrome.storage.onChanged.addListener((i,a)=>{if(a!=="local")return;let l=i[e.key];if(!l)return;let u=l.newValue;u&&u.version===1&&Array.isArray(u.credits)?r={version:1,credits:u.credits.filter(d=>typeof d=="number")}:r={version:1,credits:[]}}));function o(i){let a=i-e.windowMs,l=r.credits.filter(u=>u>a);l.length!==r.credits.length&&(r.credits=l)}function n(){if(!(typeof chrome>"u"||!chrome.storage?.local))try{chrome.storage.local.set({[e.key]:r}).catch(i=>A(`credit-pool.${e.name}.persist`,i))}catch(i){A(`credit-pool.${e.name}.persist`,i)}}function c(i,a){if(!(typeof chrome>"u"||!chrome.runtime?.sendMessage))try{chrome.runtime.sendMessage({type:"credit-used",pool:e.name.toLowerCase(),remaining:i,cap:e.cap,owner:a}).catch(l=>A(`credit-pool.${e.name}.notify`,l))}catch(l){A(`credit-pool.${e.name}.notify`,l)}}function s(i){let a=r.credits.length,l=Math.max(0,e.cap-a),u=r.credits[0],d=u!==void 0?u+e.windowMs:i;return{remaining:l,resetAt:d}}return{cap:e.cap,windowMs:e.windowMs,tryConsume(i,a=Date.now()){if(o(a),r.credits.length>=e.cap){let m=r.credits[0]+e.windowMs;return{allowed:!1,remaining:0,resetAt:m,waitMs:Math.max(0,m-a)}}r.credits.push(a),n();let l=Math.max(0,e.cap-r.credits.length),d=r.credits[0]+e.windowMs;return c(l,i),{allowed:!0,remaining:l,resetAt:d,waitMs:0}},peek(i=Date.now()){return o(i),s(i)},format(i=Date.now()){o(i);let a=r.credits.length,l=Math.max(0,e.cap-a);if(l>Math.floor(e.cap*t))return null;let u=r.credits[0];if(u===void 0)return null;let d=Math.max(0,u+e.windowMs-i),f=Math.max(1,Math.ceil(d/6e4));return`${l} of ${e.cap} left, limit resets in ${f} min`},formatLimitReached(i){return e.limitReachedMessage(i)},clear(){r={version:1,credits:[]},n()}}}var Nn=1e3,Dn=1800*1e3,ai=Rr({key:"bc-seats-notes-rate-limit-v1",cap:Nn,windowMs:Dn,name:"PS",limitReachedMessage:e=>`Pencil paused its CAESAR requests after making far more than expected. Try again in ${Math.max(1,Math.ceil(e/6e4))} min.`}),Tr=1e3,Er=3600*1e3,Ar=Rr({key:"bc-ctec-load-credit-v1",cap:Tr,windowMs:Er,name:"CTEC",limitReachedMessage:e=>`Pencil paused its CTEC requests after making far more than expected. Try again in ${Math.max(1,Math.ceil(e/6e4))} min.`});var de=6e4;var Hn=[30,62,93,124,155,186],be=217,ke=8,On=3,kr=new Map;function st(e,t,r){let o=ve(e),n=`${o}|${t}`,c=kr.get(n);if(c)return c;let s=Fn(o,t,r).catch(i=>({ok:!1,reason:i instanceof Error?i.message:String(i)}));return kr.set(n,s),s}async function Fn(e,t,r){if(!Number.isFinite(t)||t<=0)return{ok:!1,reason:`bad total=${t}`};let{buffer:o,contentType:n,finalUrl:c}=await xr(e,r,{timeoutMs:de});if(o.byteLength<100)return{ok:!1,reason:`tiny response (${o.byteLength} bytes, type='${n}')`};let s=(n||"").toLowerCase();if(s&&!s.startsWith("image/")&&!s.includes("octet-stream")){let l=c&&c!==e?` \u2192 ${c}`:"";return{ok:!1,reason:`non-image response: '${n}' (likely auth redirect)${l}`}}let i=new Blob([o],{type:n||"image/png"}),a;try{a=await createImageBitmap(i)}catch(l){let u=l instanceof Error?l.message:String(l),d=Array.from(new Uint8Array(o.slice(0,8))).map(f=>f.toString(16).padStart(2,"0")).join(" ");return{ok:!1,reason:`decode failed: ${u} (${o.byteLength}B type='${n}' head=${d})`}}try{let l=a.width,u=a.height;if(u<be+1)return{ok:!1,reason:`image too short H=${u} (need ${be+1})`};let f=(typeof OffscreenCanvas<"u"?new OffscreenCanvas(l,u):Object.assign(document.createElement("canvas"),{width:l,height:u})).getContext("2d",{willReadFrequently:!0});if(!f)return{ok:!1,reason:"canvas getContext('2d') returned null"};f.drawImage(a,0,0);let m=f.getImageData(0,0,l,u).data;return Un(m,l,u,t)}finally{a.close?.()}}function Un(e,t,r,o){let n=jn(e,t);if(n.length<2)return{ok:!1,reason:`only ${n.length} gridline(s) detected (need \u22652)`};let c=(n[n.length-1]-n[0])/(n.length-1),s=Math.round(n[0]-c),i=Bn(e,t,s),a=n[n.length-1],l=a-i;if(l<=0)return{ok:!1,reason:`bad span ${l} (axisLeft=${i}, axisRight=${a})`};let u=[],d=[],f=[];for(let C of Hn){if(C+ke>=r)return{ok:!1,reason:`row center ${C} out of bounds (H=${r})`};let S=Kn(e,t,i,a,C,n),v=S===null?0:S-i+1;u.push(v),d.push(Math.round(v*o/l)),f.push(Math.round(1e3*v/l)/10)}let m=d.reduce((C,S)=>C+S,0),x=Math.max(3,o*.02);return Math.abs(m-o)>x?{ok:!1,reason:`sum=${m} \u2260 total=${o} (tol \xB1${x.toFixed(1)}); widths=[${u.join(",")}] span=${l} image=${t}x${r} axisLeft=${i} axisRight=${a}`}:{ok:!0,data:{counts:d,percentages:f,total:o}}}function Mr(e,t,r,o){let n=o*t+r<<2;return[e[n],e[n+1],e[n+2]]}function _r(e,t,r){return e>=245&&t>=245&&r>=245}function Gn(e,t,r){return Math.abs(e-t)>=15||Math.abs(t-r)>=15?!1:e>195&&e<235}function zn(e,t,r){return Math.abs(e-t)>=18||Math.abs(t-r)>=18||Math.abs(e-r)>=18?!1:e>=100&&e<=240}function Ir(e,t,r,o){return Math.abs(e[0]-t)+Math.abs(e[1]-r)+Math.abs(e[2]-o)}function Bn(e,t,r){let o=r,n=-1;for(let c=-2;c<=2;c+=1){let s=r+c;if(s<0||s>=t)continue;let i=0;for(let a=0;a<be;a+=1){let l=a*t+s<<2,u=e[l],d=e[l+1],f=e[l+2];Math.abs(u-d)<15&&Math.abs(d-f)<15&&u>=150&&u<=235&&(i+=1)}i>n&&(n=i,o=s)}return o}function jn(e,t){let r=[],o=be*.55;for(let i=0;i<t;i+=1){let a=0;for(let l=0;l<be;l+=1){let u=l*t+i<<2;Gn(e[u],e[u+1],e[u+2])&&(a+=1)}a>o&&r.push(i)}let n=[],c=-1,s=-1;for(let i of r)c<0?c=s=i:i-s<=2?s=i:(n.push(c+s>>1),c=s=i);return c>=0&&n.push(c+s>>1),n}function Kn(e,t,r,o,n,c){let s=r+1,i=Mr(e,t,s,n);if(_r(i[0],i[1],i[2]))return null;if(zn(i[0],i[1],i[2])){let a=Mr(e,t,Math.min(s+On,o-1),n);if(_r(a[0],a[1],a[2])||Ir(i,a[0],a[1],a[2])>60)return null;i=a}for(let a=o-1;a>r;a-=1){if(c.some(u=>Math.abs(u-a)<=1))continue;let l=0;for(let u=-ke;u<=ke;u+=1){let d=(n+u)*t+a<<2;Ir(i,e[d],e[d+1],e[d+2])<=60&&(l+=1)}if(l>=ke+1)return a}return s}var Xn=`${H}/psc/csnu/EMPLOYEE/SA/c/NUI_FRAMEWORK.PT_LANDINGPAGE.GBL?`;function Br(e,t){let r=0,o=0,n=0;for(let c of e){let s=t(c);s&&(r+=s.mean*s.responseCount,o+=s.responseCount,n+=1)}return{mean:o>0?r/o:0,totalResponses:o,evaluationCount:n}}function jr(e){let t=I(e);return t.includes("overall rating of the instruction")?"instruction":t.includes("overall rating of the course")?"course":t.includes("estimate how much you learned")?"learned":t.includes("challenging you intellectually")?"challenging":t.includes("stimulating your interest in the subject")?"stimulating":t.includes("average number of hours per week")?"hours":null}var Kr=new Set(["a","an","and","are","as","at","be","been","being","by","can","did","do","does","doing","for","from","get","got","had","has","have","having","he","her","him","his","how","i","if","in","into","is","it","its","just","like","me","much","my","no","nor","not","of","on","one","or","our","out","over","she","so","some","such","than","that","the","their","them","then","there","these","they","this","those","to","too","up","us","very","was","we","were","what","when","where","which","while","who","why","will","with","would","you","your","im","ive","id","youre","youll","youve","dont","didnt","doesnt","wasnt","werent","isnt","arent","havent","hasnt","wont","cant","couldnt","shouldnt","wouldnt","lot","lots","thing","things","way","ways","really","also","even"]);function Wr(e,t,r){let o=new Set,n=`${e.subject} ${e.catalogNumber} ${t} ${e.instructor}`;for(let c of pe(n))o.add(c);for(let c of r){for(let s of pe(c.instructor))o.add(s);for(let s of pe(c.prompt))o.add(s)}return o}function pe(e){return e.toLowerCase().replace(/['']/g,"").replace(/[^a-z0-9\s]+/g," ").split(/\s+/).filter(Boolean)}function Vr(e,t){if(e.length===0)return[];let r=new Map;for(let s of e){let i=pe(s),a=new Set;for(let l of pc(i,t))a.has(l)||(a.add(l),r.set(l,(r.get(l)??0)+1))}let o=Math.max(2,Math.floor(e.length*.7)),n=Array.from(r.entries()).filter(([,s])=>s>=2&&s<=o).sort((s,i)=>i[1]!==s[1]?i[1]-s[1]:i[0].length-s[0].length).map(([s])=>s),c=[];for(let s of n)if(!c.find(a=>s.includes(a)||a.includes(s))&&(c.push(s),c.length>=12))break;return c}function pc(e,t){let r=[];for(let o=0;o<e.length;o++)for(let n of[2,3]){if(o+n>e.length)continue;let c=e.slice(o,o+n),s=c[0],i=c[c.length-1];Kr.has(s)||Kr.has(i)||t.has(s)||t.has(i)||c.some(a=>a.length<3&&!/^\d/.test(a))||c.every(a=>/^\d+$/.test(a))||r.push(c.join(" "))}return r}function Yr(e,t){if(t.length===0)return[];let r=` ${pe(e).join(" ")} `;return t.filter(o=>r.includes(` ${o} `))}function qr(e){let t=new Map;for(let r of e)for(let o of r.topics){let n=t.get(o);n||(n={label:o,count:0,sentiments:{pos:0,neu:0,mix:0,neg:0}},t.set(o,n)),n.count+=1,n.sentiments[r.tone]+=1}return Array.from(t.values()).sort((r,o)=>o.count-r.count)}function Xr(e){if(!e.trim())return"neu";let t=fc(e),r=0,o=0;for(let l of t){let{pos:u,neg:d}=yc(l);r+=u,o+=d}let n=r+o;if(n===0)return"neu";let c=.15,s=r/n,i=o/n;return s>=c&&i>=c?"mix":s>i?"pos":i>s?"neg":"neu"}function fc(e){return e.split(/(?<=[.!?;])\s+|\n+/u).map(t=>t.trim()).filter(Boolean)}var gc=["but","however","although","though","thankfully","overall"],mc=.5,hc=1.5,xc=new Set(["not","no","never","none","nothing","nobody","neither","nor","cant","cannot","dont","didnt","doesnt","wasnt","werent","isnt","arent","wont","couldnt","shouldnt","wouldnt","havent","hasnt"]),Cc=3,Qr={very:1.5,really:1.4,extremely:1.7,incredibly:1.6,super:1.4,highly:1.4,totally:1.4,absolutely:1.5,completely:1.4,truly:1.3,quite:1.2,pretty:1.15,fairly:1.1},Jr={slightly:.6,somewhat:.7,barely:.5,hardly:.5,bit:.7,little:.7,kinda:.7,sorta:.7};function yc(e){let t=vc(e);if(t.length===0)return{pos:0,neg:0};let r=t.findIndex(a=>gc.includes(a)),o=a=>r<0?1:a<r?mc:a===r?1:hc,n=0,c=0,s=0,i=1;for(let a=0;a<t.length;a++){let l=t[a];if(xc.has(l)){s=Cc;continue}if(Qr[l]!=null){i*=Qr[l];continue}if(Jr[l]!=null){i*=Jr[l];continue}let u=Rc[l];if(u!=null){let d=u*i;s>0&&(d=-d);let f=d*o(a);f>0?n+=f:c-=f,i=1}s>0&&(s-=1)}return{pos:n,neg:c}}function vc(e){return e.toLowerCase().replace(/['']/g,"").replace(/[^a-z0-9\s]+/g," ").split(/\s+/).filter(Boolean)}var wc={amazing:3,awesome:3,excellent:3,fantastic:3,brilliant:3,wonderful:3,incredible:3,perfect:3,outstanding:3,phenomenal:3,great:2,good:2,love:2,loved:2,enjoy:2,enjoyed:2,enjoyable:2,fun:2,helpful:2,kind:2,patient:2,caring:2,passionate:2,recommended:2,recommend:2,smart:2,engaged:2,nice:1,fine:1,ok:1,okay:1,decent:1,solid:1,glad:1,thankful:1,appreciate:1,appreciated:1,like:1,liked:1,approachable:1,friendly:1,terrible:-3,awful:-3,horrible:-3,worst:-3,hated:-3,hate:-3,miserable:-3,useless:-3,atrocious:-3,dreadful:-3,bad:-2,boring:-2,frustrating:-2,frustrated:-2,annoying:-2,annoyed:-2,painful:-2,upset:-2,disappointing:-2,disappointed:-2,unfair:-2,unhelpful:-2,sucks:-2,sucked:-2,avoid:-2,meh:-1,weak:-1,slow:-1,dull:-1,repetitive:-1,dry:-1,rough:-1,lacking:-1,missing:-1,shaky:-1,brutal:-2,stressful:-2,harsh:-2,punishing:-2,waste:-2,best:3,favorite:3,favourite:3,rewarding:2,worthwhile:2,effective:2,supportive:2,accessible:2,knowledgeable:2,funny:2,hilarious:2,entertaining:2,enthusiastic:2,thoughtful:2,responsive:2,generous:2,straightforward:2,reasonable:2,valuable:2,cares:2,cared:2,saved:2,relevant:1,practical:1,steady:1,lenient:1,worth:1,learned:1,improved:1,nightmare:-3,condescending:-3,rude:-3,arbitrary:-2,vague:-2,unprepared:-2,unresponsive:-2,dismissive:-2,unreasonable:-2,impossible:-2,excessive:-2,worse:-2,poorly:-2,poor:-2,irrelevant:-2,regret:-2,outdated:-1,unnecessary:-1,struggled:-1,struggle:-1,lost:-1,clearer:-1},Sc={challenging:0,challenge:0,hard:0,difficult:0,demanding:0,rigorous:1,tough:0,easy:0,clear:2,organized:2,fair:2,engaging:2,interesting:2,manageable:2,useful:2,insightful:2,understandable:2,approachable:2,doable:2,busywork:-2,unclear:-2,disorganized:-3,unorganized:-3,rushed:-2,tedious:-2,inconsistent:-2,overwhelming:-2,confusing:-2,pointless:-2,monotonous:-1,course:0,class:0,professor:0,prof:0,lecture:0,homework:0,exam:0,midterm:0,final:0},Rc={...wc,...Sc};function Zr(e,t,r){let o=[];for(let s of e)for(let i of s.commentGroups)for(let a of i.comments){let l=a.trim();l&&o.push({term:s.term,instructor:s.instructor,description:s.description,prompt:i.prompt,text:l,tone:Xr(l),length:l.length})}let n=Wr(t,r,o),c=Vr(o.map(s=>s.text),n);return o.map(s=>({...s,topics:Yr(s.text,c)}))}var Tc="bc_paper_ctec_modal_cache",Ec=1,eo=16,Ac=800,W=new Map;var dt=null;function to(e,t){let r=W.get(e);if(!(!r||r.signature!==t))return r.accessedAt=Date.now(),oo(),{result:r.result}}function ro(e,t,r){W.set(e,{signature:t,result:r,accessedAt:Date.now()}),kc(),oo()}function kc(){if(W.size<=eo)return;let e=Array.from(W.entries()).sort((t,r)=>t[1].accessedAt-r[1].accessedAt);for(;W.size>eo&&e.length>0;){let[t]=e.shift();W.delete(t)}}function oo(){dt||(dt=setTimeout(()=>{dt=null,Mc()},Ac))}async function Mc(){let e={};for(let[r,o]of W)e[r]=o;let t={version:Ec,entries:e};try{await chrome.storage.local.set({[Tc]:t})}catch(r){A("paper-ctec.modal-cache.persist",r)}}var fe=["instruction","course","learned","challenging","stimulating"],bt={instruction:"Instruction",course:"Course",learned:"Learned",challenging:"Challenge",stimulating:"Interest",hours:"Hours"},co=["instruction","course","learned"];var _c={instruction:6,course:6,learned:6,challenging:6,stimulating:6,hours:20};function Ic(e,t,r,o,n){return`${e.subject}|${e.catalogNumber}|${e.instructor}|${t}|${r}|${o??"all"}|${Pc(n)}`}function Pc(e){return e?e.kind==="by-instructor"?`by-instructor:${I(e.instructor)}`:e.kind==="by-catalog"?`by-catalog:${e.catalog}`:e.kind:"none"}function Lc(e,t){if(!t||t.kind==="recent")return e;if(t.kind==="by-instructor")return e.filter(n=>K(n.instructor,t.instructor));if(t.kind==="by-catalog")return e.filter(n=>P(n.description)===t.catalog);let r=new Set,o=[];for(let n of e){let c=I(n.instructor);r.has(c)||(r.add(c),o.push(n))}return o}function $c(e){let t=[];for(let r of e.entries){let o=0;for(let n of r.commentGroups)o+=n.comments.length;t.push(`${r.url??""}#${r.status}#${r.commentGroups.length}#${o}`)}return t.join("|")}function so(e,t,r,o="combo",n,c=null){let s=Ic(t,r,o,n,c),i=$c(e),a=to(s,i);if(a)return a.result;let l=Nc(e,t,r,o,n,c);return ro(s,i,l),l}function Nc(e,t,r,o,n,c){let s=t.instructor,i=e.entries.filter(w=>w.status==="ready"),a;if(o==="combo"){let w=i.filter(g=>no(g.instructor)===no(s));a=w.length>0?w:i}else a=i;a=Lc(a,c);let l=n&&n>0?a.slice(0,n):a;if(l.length===0)return null;let u=l.map((w,g)=>Dc(w,g)),d=[...u].reverse(),f=Oc(d),m=Fc(u),x=Zr(l,t,r),C=qr(x),S=u.reduce((w,g)=>w+g.responses,0),v=r.split(/\s*-\s*/).map(w=>w.trim()).filter(Boolean),R=v[v.length-1]??r.trim();return{course:{subject:t.subject,catalog:t.catalogNumber,title:R,instructor:s,sectionTerm:u[0]?.term??"",reportUrl:u[0]?.reportUrl??null},terms:u,trendTerms:d,responses:S,metrics:f,aggregateHoursBuckets:m,comments:x,topics:C}}function Dc(e,t){let r=Uc(e),o={},n={};for(let i of[...fe,"hours"]){let a=e.metrics[i];a&&(o[i]=a.mean,a.responseCount>0&&(n[i]=a.responseCount))}let c=Hc(e.charts),s=e.metrics.hours?.buckets??[];return{id:`${e.term||"term"}-${t}`,term:e.term,instructor:e.instructor,description:e.description,responses:r,reportUrl:e.url,metrics:o,metricResponseCounts:n,charts:c,hoursBuckets:s}}function Hc(e){let t={};for(let r of e){let o=jr(r.question);o&&(t[o]||(t[o]={imageUrl:r.imageUrl,alt:r.alt,counts:r.counts}))}return t}function Oc(e){let t={};for(let r of[...fe,"hours"]){let o=[];for(let c of e){let s=c.metrics[r];typeof s=="number"&&o.push(s)}let n=o.length>0?o.reduce((c,s)=>c+s,0)/o.length:0;t[r]={mean:n,trend:o,scale:_c[r]}}return t}function Fc(e){let t=new Map,r=[];for(let o of e)for(let n of o.hoursBuckets)t.has(n.label)||r.push(n.label),t.set(n.label,(t.get(n.label)??0)+n.count);return t.size===0?[]:r.map(o=>({label:o,count:t.get(o)??0}))}function Uc(e){let t=[];for(let r of[...fe,"hours"]){let o=e.metrics[r];o?.responseCount&&t.push(o.responseCount)}return t.length===0?e.commentGroups.reduce((o,n)=>o+n.comments.length,0):Math.max(...t)}function no(e){return e.trim().toLowerCase().replace(/\s+/g," ")}var Gc="paper-ctec-rating-percent";function pt(){return ct(Gc)}function zc(e){let t=h.aggregate.ratingScaleMax,r=Math.max(0,Math.min(t,e));return`${Math.round(r/t*100)}%`}function ft(e){return pt()?zc(e):e.toFixed(1)}function Me(e,t,r){let o=Math.max(0,Math.min(1,t>0?e/t:0)),n=r?1-o:o,s=[...r?h.ui.hoursChipTones:h.ui.ratingChipTones].sort((a,l)=>a.minScore-l.minScore);if(n<=s[0].minScore)return s[0].hue;let i=s[s.length-1];if(n>=i.minScore)return i.hue;for(let a=0;a<s.length-1;a++){let l=s[a],u=s[a+1];if(n>=l.minScore&&n<=u.minScore){let d=u.minScore-l.minScore,f=d>0?(n-l.minScore)/d:0;return l.hue+f*(u.hue-l.hue)}}return i.hue}var ge=h.aggregate.ratingScaleMax,ao={instruction:"Overall rating of the instruction",course:"Overall rating of the course",learned:"How much you learned",challenging:"How intellectually challenging it was",stimulating:"How much it stimulated your interest",hours:"Hours per week spent on the course outside class"},Bc="Average of the Instruction, Course and Learned ratings, each out of 6.";function jc(e,t){let r=Br(e,o=>{let n=o.metrics[t];if(typeof n=="number")return{mean:n,responseCount:o.metricResponseCounts[t]??1}});return r.evaluationCount>0?r.mean:void 0}function mt(e,t,r=null){let{data:o,term:n}=e;return n?n.metrics[t]:r!=null?o.trendTerms[r]?.metrics[t]:jc(o.terms,t)}var io=e=>typeof e=="number"?e.toFixed(1):"n/a";function lo(e){let t=co.map(s=>mt(e,s)).filter(s=>typeof s=="number"),r=t.length?t.reduce((s,i)=>s+i,0)/t.length:void 0,o=mt(e,"hours"),n=typeof r=="number"?Me(r,ge,!1):null,c=n==null?"":`--bc-sheet-chip-bg: hsl(${n} 85% 80%); --bc-sheet-chip-fg: hsl(${n} 60% 16%);--bc-sheet-chip-bg-dark: hsl(${n} 55% 26%); --bc-sheet-chip-fg-dark: hsl(${n} 80% 90%);`;return b`<section class="bc-sheet-sum">
    <div class="bc-sheet-sum-cell" title=${Bc}>
      <div class="bc-sheet-sum-big">
        <span
          class=${`bc-sheet-sum-chip${n==null?" is-empty":""}`}
          style=${c}
          >${typeof r=="number"?ft(r):"n/a"}</span
        >${pt()?"":b`<span class="bc-sheet-sum-unit">/ ${ge}</span>`}
      </div>
      <div class="bc-sheet-sum-label">Overall rating</div>
    </div>
    <div class="bc-sheet-sum-cell" title=${ao.hours}>
      <div class="bc-sheet-sum-big">
        <span class="bc-sheet-sum-num">${io(o)}</span
        ><span class="bc-sheet-sum-unit">hrs</span>
      </div>
      <div class="bc-sheet-sum-label">Work per week</div>
    </div>
  </section>`}function uo(e,t,r){let o=t.charts[r];if(!o)return{kind:"none"};if(o.counts?.length)return{kind:"counts",counts:o.counts};if(!o.imageUrl)return{kind:"none"};let n=e.local.charts.get(o.imageUrl);if(Array.isArray(n))return{kind:"counts",counts:n};if(n==="failed")return{kind:"image",url:ve(o.imageUrl),alt:o.alt??`${bt[r]} answers, ${L(t.term)}`};if(n===void 0){let c=o.imageUrl;e.local.charts.set(c,"pending"),st(c,t.metricResponseCounts[r]??0).then(s=>{e.local.charts.set(c,s.ok?s.data.counts:"failed"),e.rerender()})}return{kind:"pending"}}function bo(e){return e.length===0?"":b`<div class="bc-sheet-originals">
    ${e.map(t=>b`<figure class="bc-sheet-original">
        <figcaption>${t.label}, from the original report</figcaption>
        <img src=${t.url} alt=${t.alt} loading="lazy" />
      </figure>`)}
  </div>`}var N=80,$=20,_e=3,Ie=11,Kc=(N-Ie*6)/5;function po(e){let{data:t,local:r}=e,o=t.trendTerms,n=o.length,c=e.term??(n===1?o[0]:null),s=c?null:r.scrub,i=m=>_e+m*(N-_e*2)/Math.max(1,n-1),a=[],l=fe.map(m=>{let x=bt[m],C=mt(e,m,s),S=typeof C=="number"?`width: ${Math.max(0,Math.min(100,(C-1)/(ge-1)*100))}%;--bc-sheet-fill: hsl(${Me(C,ge,!1)} 78% 44%);--bc-sheet-fill-dark: hsl(${Me(C,ge,!1)} 70% 52%);`:"width: 0",v="";if(c){let R=uo(e,c,m);R.kind==="counts"?v=Vc(e,x,R.counts):R.kind==="image"?(a.push({label:x,url:R.url,alt:R.alt}),v=b`<span class="bc-sheet-rate-note">Chart below</span>`):R.kind==="none"&&(v=b`<span class="bc-sheet-rate-note">No chart</span>`)}else v=Wc(o,m,i,s);return b`<div class="bc-sheet-rate" title=${ao[m]}>
      <span class="bc-sheet-rate-label">${x}</span>
      <span class="bc-sheet-rate-bar"
        ><span class="bc-sheet-rate-fill" style=${S}></span
      ></span>
      <span
        class=${`bc-sheet-rate-val${typeof C=="number"?"":" is-empty"}`}
        >${io(C)}</span
      >
      ${v}
    </div>`}),u;if(c)u=r.peek??"Answers 1 to 6";else if(s!=null&&o[s]){let m=o[s];u=O(m.term,`${L(m.term)} \xB7 ${M(m.responses,"response")}`)}else u=b`${O(o[0].term)}<span class="bc-sheet-ctx-to">to</span
      >${O(o[n-1].term)}`;let d=m=>{let x=m.target?.closest?.(".bc-sheet-spark");if(!x)return null;let C=x.getBoundingClientRect(),S=(m.clientX-C.left)/C.width*N;return Math.max(0,Math.min(n-1,Math.round((S-_e)/(N-_e*2)*(n-1))))},f=m=>{r.scrub!==m&&(r.scrub=m,e.rerender())};return b`<section
    class=${`bc-sheet-sec bc-sheet-rates${s!=null?" is-scrub":""}`}
    @pointermove=${m=>{c||f(d(m))}}
    @pointerleave=${()=>{c||f(null)}}
    @click=${m=>{if(c)return;let x=d(m),C=x==null?null:o[x];C&&(r.scrub=null,e.selectTerm(C.id))}}
  >
    <div class="bc-sheet-sec-head">
      <h3 class="bc-sheet-sec-title">Ratings</h3>
      <span class="bc-sheet-sec-ctx">${u}</span>
    </div>
    ${l}
    ${s!=null?b`<div class="bc-sheet-spark-guide" style=${`right: ${N-i(s)}px`}></div>`:""}
    ${bo(a)}
  </section>`}function Wc(e,t,r,o){let n=e.map((f,m)=>({i:m,value:f.metrics[t]})).filter(f=>typeof f.value=="number");if(n.length<2)return b`<span class="bc-sheet-rate-note"></span>`;let c=n.map(f=>f.value),s=Math.min(...c),i=Math.max(...c),a=(s+i)/2,l=Math.max(.5,(i-s)/2+.1),u=f=>$/2-(f-a)/l*($/2-3),d=o==null?void 0:n.find(f=>f.i===o);return b`<svg
    class="bc-sheet-spark"
    width=${N}
    height=${$}
    viewBox=${`0 0 ${N} ${$}`}
    aria-hidden="true"
  >
    <polyline
      class="bc-sheet-spark-line"
      points=${n.map(f=>`${r(f.i).toFixed(1)},${u(f.value).toFixed(1)}`).join(" ")}
    />
    ${d?_`<circle class="bc-sheet-spark-dot" r="2.25" cx=${r(d.i)} cy=${u(d.value)} />`:""}
  </svg>`}function Vc(e,t,r){let o=Math.max(1,...r),n=c=>{e.local.peek!==c&&(e.local.peek=c,e.rerender())};return b`<svg
    class="bc-sheet-dist"
    width=${N}
    height=${$}
    viewBox=${`0 0 ${N} ${$}`}
    role="img"
    aria-label=${`${t}: ${r.map((c,s)=>`${c} answered ${s+1}`).join(", ")}`}
  >
    ${[1,2,3,4,5,6].map(c=>{let s=r[c-1]??0,i=s?Math.max(2,s/o*($-2)):1,a=(c-1)*(Ie+Kc);return _`<g
        class="bc-sheet-dist-k"
        @pointerenter=${()=>n(`${t}: ${s} answered ${c}`)}
        @pointerleave=${()=>n(null)}
      >
        <rect class="bc-sheet-dist-hit" x=${a} y="0" width=${Ie} height=${$} />
        <rect
          class=${`bc-sheet-dist-bar${s?"":" is-zero"}`}
          x=${a}
          y=${$-i}
          width=${Ie}
          height=${i}
          rx="1.5"
          style=${`fill: var(--bc-color-trend-zone-${c}-solid)`}
        />
      </g>`})}
  </svg>`}var gt=["3 or less","4\u20137","8\u201311","12\u201315","16\u201319","20+"];function fo(e){let{data:t,term:r}=e,o=r?r.hoursBuckets:t.aggregateHoursBuckets,n=null,c=!1;if(r&&o.length===0){let a=uo(e,r,"hours");c=a.kind==="pending",a.kind==="counts"?o=a.counts.map((l,u)=>({label:gt[u]??String(u+1),count:l})):a.kind==="image"&&(n={label:"Hours per week",url:a.url,alt:a.alt})}let s=o.reduce((a,l)=>a+l.count,0),i;if(n)i=bo([n]);else if(c)i="";else if(s===0){if(!r)return"";i=b`<p class="bc-sheet-empty">
      No hours breakdown for ${O(r.term)}
    </p>`}else{let a=o.map(d=>d.count/s),l=Math.max(...a)||1,u=o.length===gt.length?gt:o.map(d=>d.label);i=b`<div
      class="bc-sheet-hist"
      style=${`grid-template-columns: repeat(${o.length}, 1fr)`}
    >
      ${a.map((d,f)=>{let m=Math.round(d*100);return b`<div
          class="bc-sheet-hist-col"
          title=${`${M(o[f].count,"response")}: ${o[f].label} hours`}
        >
          <span class="bc-sheet-hist-pct">${m}%</span>
          <div class="bc-sheet-hist-track">
            <div
              class=${`bc-sheet-hist-bar${m?"":" is-zero"}`}
              style=${`height: ${m?`${d/l*100}%`:"1px"}`}
            ></div>
          </div>
          <span class="bc-sheet-hist-lab">${u[f]}</span>
        </div>`})}
    </div>`}return b`<section class="bc-sheet-sec bc-sheet-work">
    <div class="bc-sheet-sec-head">
      <h3 class="bc-sheet-sec-title">Hours per week</h3>
      <span class="bc-sheet-sec-ctx">share of responses</span>
    </div>
    ${i}
  </section>`}function xt(e){let{doc:t}=e,r=null,o=null,n="",c=null,s={lensOpen:!1,scrub:null,peek:null,charts:new Map},i=()=>{!r||!o||Ve(Yc(o,s,()=>r,i),r)},a=u=>{if(!(u.key!=="Escape"||!o)){if(s.lensOpen){s.lensOpen=!1,i();return}o.callbacks.onClose()}},l=u=>{!s.lensOpen||u.target?.closest?.(".bc-sheet-lens")||(s.lensOpen=!1,i())};return{open(u,d,f){let m=!!c&&c.isConnected,x=m?c:t.body??t.documentElement;(!r||!r.isConnected)&&(r=t.createElement("aside"),r.id=De,t.addEventListener("keydown",a),t.addEventListener("pointerdown",l,!0)),r.parentElement!==x&&x.appendChild(r),r.className=m?"bc-sheet bc-sheet--inline":"bc-sheet";let C=`${u.identity.subject}|${u.identity.catalog}|${u.identity.instructor}|${u.strategy}`;C!==n&&(n=C,s.lensOpen=!1,s.scrub=null,s.peek=null),o={input:u,state:d,callbacks:f},r.setAttribute("aria-label",`${Pe(u)} evaluations`),i()},close(){t.removeEventListener("keydown",a),t.removeEventListener("pointerdown",l,!0),t.getElementById(De)?.remove(),r=null,o=null,n=""},isOpen(){return!!r&&r.isConnected},setHost(u){c=u}}}function Pe(e){return`${e.identity.subject} ${e.identity.catalog.replace(/-0$/,"")}`}function Yc(e,t,r,o){let{input:n,state:c,callbacks:s}=e,i=n.freshLensLoading?null:n.data,a=i&&c.selectedTermId?i.terms.find(d=>d.id===c.selectedTermId)??null:null,l=d=>{t.scrub=null,t.peek=null,s.onTermChange(d);let f=r()?.querySelector(".bc-sheet-body");f&&(f.scrollTop=0)},u;if(c.dryRun)u=dr(n,c,s);else if(i){let d={input:n,data:i,state:c,callbacks:s,local:t,term:a,sheet:r,rerender:o,selectTerm:l};u=b`${lo(d)}${po(d)}${fo(d)}${sr(d)}`}else u=rs(n,s);return b`<header class="bc-sheet-top">
      <div class="bc-sheet-top-line">
        <span class="bc-sheet-code">${Pe(n)}</span>
        <div class="bc-sheet-top-right">
          ${Xc(n,s,t,o)}
          ${n.canRefresh?b`<button
                type="button"
                class="bc-sheet-icon-btn"
                data-bc-action-button="controller"
                aria-label="Check for new CTECs"
                title="Check for new CTECs. Run this when a new round of evaluations comes out; what you see stays put while it looks."
                ?disabled=${n.backgroundRefreshing}
                @click=${()=>{n.backgroundRefreshing||s.onRefresh()}}
              >${Qc}</button>`:""}
          <button
            type="button"
            class="bc-sheet-icon-btn bc-sheet-close"
            aria-label="Close"
            @click=${()=>s.onClose()}
          >${mo}</button>
        </div>
      </div>
      <h2 class="bc-sheet-title">${qc(n)}</h2>
      ${Zc(n,i,a)}
      ${es(n,s)}
      ${i&&!c.dryRun?ts(n,i,a,l,s):""}
    </header>
    <div
      class="bc-sheet-body"
      @scroll=${d=>{let f=d.currentTarget;f.previousElementSibling?.classList.toggle("is-raised",f.scrollTop>2)}}
    >${u}</div>`}function qc(e){if(e.data?.course.title)return e.data.course.title;let t=e.identity.title.split(/\s+-\s+/).map(r=>r.trim()).filter(Boolean);return t[t.length-1]??Pe(e)}var mo=b`<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
  <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
</svg>`,Qc=b`<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
  <path
    d="M11.5 7a4.5 4.5 0 1 1-1.5-3.35M11.6 1.9v2.5H9.1"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`,Jc=b`<svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
  <path d="M2 3.5l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`,ht=[{id:"combo",label:"This professor, this course"},{id:"course",label:"Everyone who taught it"},{id:"instructor",label:"Everything they teach"}];function Xc(e,t,r,o){let n=ht.find(i=>i.id===e.strategy)??ht[0],c=()=>{r.lensOpen=!1,o()},s=i=>i==="course"&&e.courseLensRedundant?"No one else has":i==="instructor"&&e.instructorLensRedundant?`Nothing else in ${e.identity.subject}`:"";return b`<div class=${`bc-sheet-lens${r.lensOpen?" is-open":""}`}>
    <button
      type="button"
      class="bc-sheet-lens-btn"
      aria-haspopup="listbox"
      aria-expanded=${r.lensOpen?"true":"false"}
      @click=${()=>{r.lensOpen=!r.lensOpen,o()}}
    ><span>${n.label}</span>${Jc}</button>
    ${r.lensOpen?b`<div class="bc-sheet-lens-list" role="listbox">
          ${ht.map(i=>{let a=i.id===e.strategy,l=s(i.id);return b`<button
              type="button"
              role="option"
              class=${`bc-sheet-lens-opt${a?" is-on":""}`}
              aria-selected=${a?"true":"false"}
              @click=${()=>{c(),a||t.onStrategyChange(i.id)}}
            ><span>${i.label}</span>${l?b`<span class="bc-sheet-lens-note">${l}</span>`:""}</button>`})}
          ${e.strategy==="combo"?"":b`<button
                type="button"
                class="bc-sheet-lens-opt bc-sheet-lens-adjust"
                @click=${()=>{c(),t.onOpenDryRun()}}
              >Choose which sections</button>`}
        </div>`:""}
  </div>`}function go(e){return new Set(e.map(t=>t.trim().toLowerCase()).filter(Boolean)).size}function Zc(e,t,r){let o=[],n=e.identity.instructor.trim();if(r)r.instructor.trim()&&o.push(r.instructor.trim()),e.strategy==="instructor"&&o.push(P(r.description)),o.push(M(r.responses,"response")),r.reportUrl&&o.push(b`<a
        class="bc-sheet-link"
        href=${r.reportUrl}
        target="_blank"
        rel="noopener noreferrer"
      >Open original report</a>`);else if(t){if(e.strategy==="course"){let c=go(t.terms.map(s=>s.instructor));o.push(c===1?t.terms[0].instructor.trim():M(c,"professor"))}else n&&o.push(n),e.strategy==="instructor"&&o.push(M(go(t.terms.map(c=>P(c.description))),"course"));o.push(M(t.responses,"response"))}else n&&o.push(n);return b`<div class="bc-sheet-meta">
    ${o.map((c,s)=>b`${s>0?b`<span class="bc-sheet-meta-sep">·</span>`:""}<span>${c}</span>`)}
  </div>`}function es(e,t){let r=e.refreshFlash;if(!r)return e.backgroundRefreshing?b`<div class="bc-sheet-notice" role="status">Checking Northwestern for new CTECs</div>`:"";let o=r.kind==="error"?`Couldn't check for new CTECs. ${r.message}`:r.addedCount>0?`${M(r.addedCount,"new evaluation")} added`:"Up to date. Northwestern has no new CTECs for this course.";return b`<div
    class=${`bc-sheet-notice${r.kind==="error"?" is-error":""}`}
    role=${r.kind==="error"?"alert":"status"}
  >
    <span>${o}</span>
    <button
      type="button"
      class="bc-sheet-notice-x"
      aria-label="Dismiss"
      @click=${()=>t.onDismissRefreshFlash()}
    >${mo}</button>
  </div>`}function ts(e,t,r,o,n){let c=a=>{let l=(a?.id??null)===(r?.id??null);if(!a)return b`<button
        type="button"
        role="tab"
        class=${`bc-sheet-term${l?" is-on":""}`}
        aria-selected=${l?"true":"false"}
        @click=${()=>o(null)}
      >All terms</button>`;let u=j(a.term),d=[L(a.term),e.strategy==="course"?a.instructor.trim():"",e.strategy==="instructor"?P(a.description):""].filter(Boolean).join(", ");return b`<button
      type="button"
      role="tab"
      class=${`bc-sheet-term${l?" is-on":""}`}
      aria-selected=${l?"true":"false"}
      aria-label=${d}
      title=${d}
      @click=${()=>o(a.id)}
    >${u?J(u):""}<span
        >${u?Se(a.term):a.term}</span
      ></button>`},s=e.strategy==="combo"&&(e.canLoadMore||e.loading),i=e.remainingTerms>0?Math.min(e.loadMoreBatchSize,e.remainingTerms):e.loadMoreBatchSize;return b`<div class="bc-sheet-terms" role="tablist" aria-label="Term">
    ${c(null)}${t.terms.map(c)}
    ${s?b`<button
          type="button"
          class="bc-sheet-term bc-sheet-term-more"
          data-bc-action-button="controller"
          ?disabled=${e.loading||!e.canLoadMore}
          title=${`${M(e.parsedTermCount,"term")} loaded, ${e.remainingTerms} more available. Reports load a few at a time to go easy on Northwestern's servers.`}
          @click=${()=>{!e.loading&&e.canLoadMore&&n.onLoadMore()}}
        >${e.loading?"Loading":`${i} more`}</button>`:""}
  </div>`}function rs(e,t){let r=Pe(e),o=e.identity.instructor.trim()||"this professor",n=b`<button
    type="button"
    class="bc-btn bc-btn--secondary bc-btn--sm"
    @click=${()=>t.onOpenDryRun()}
  >See other reports</button>`,c,s,i="",a=!1;return e.freshLensLoading?(a=!0,c="Loading this view",s="Pulling fresh reports from Northwestern."):e.errorMessage?(c="Couldn't load CTEC reports",s=e.errorMessage,e.canRefresh&&(i=b`<button
        type="button"
        class="bc-btn bc-btn--secondary bc-btn--sm"
        data-bc-action-button="controller"
        ?disabled=${e.backgroundRefreshing}
        @click=${()=>{e.backgroundRefreshing||t.onRefresh()}}
      >${e.backgroundRefreshing?"Retrying":"Try again"}</button>`)):e.notFound?(i=n,e.strategy==="course"?(c=`No CTECs for ${r}`,s="Northwestern hasn't published any for this course yet."):e.strategy==="instructor"?(c=`No CTECs for ${o} in ${e.identity.subject}`,s="Northwestern hasn't published any for this professor in this subject yet."):(c=`No CTECs for ${o} in ${r}`,s="Reports only exist once a class has been taught and evaluated. The course with other professors, or this professor's other classes, can still tell you what to expect.")):e.loading?(a=!0,c="Loading CTEC reports",s=`Pulling the most recent ${M(e.loadMoreBatchSize,"term")} from Northwestern.`):(c="Nothing loaded for this view yet",s="Pick another view from the menu above, or look at other reports.",i=n),b`<section class="bc-sheet-status" role=${e.errorMessage?"alert":"status"}>
    <h3 class="bc-sheet-status-title">
      ${a?b`<span class="bc-spinner bc-spinner--xs" aria-hidden="true"></span>`:""}${c}
    </h3>
    <p class="bc-sheet-status-text">${s}</p>
    ${i}
  </section>`}var U=new URLSearchParams(location.search);_t(e=>"fonts/"+e);It("bright");Gt();var os={instruction:"Provide an overall rating of the instruction",course:"Provide an overall rating of the course",learned:"Estimate how much you learned in the course",challenging:"Rate the effectiveness of the course in challenging you intellectually",stimulating:"Rate the effectiveness of the instructor in stimulating your interest in the subject"},ns=["3 or fewer","4 - 7","8 - 11","12 - 15","16 - 19","20 or more"],cs=["Practice questions before each exam matched what was actually tested.","Office hours were the most useful part of the course. Go early in the quarter.","The content is interesting, but the pace picks up a lot after the midterm.","Lectures were organized and the slides went up ahead of time.","Weekly problem sets, two midterms and a final. No surprises.","The final covered material we barely touched in lecture. Really frustrating.","Homework is fair, though the feedback on problem sets could be clearer.","Workload was steady all quarter, which made it easy to plan around.","Best intro class I could have asked for. Clear, patient, and funny.","Grading on the group project felt arbitrary and took weeks to come back.","Attendance isn't taken but the clicker questions count for a few points.","The labs were genuinely useful and I still use what I learned.","Great lecturer, but the textbook is useless. Rely on the slides instead.","Exams are fair if you do the practice sets. Nothing comes out of nowhere.","Go to office hours. The TAs walk through the problem sets step by step.","The slides are all you need, and the practice sets are close to the exams.","The second midterm was much harder than the practice sets suggested.","Labs take longer than they say, but they're where it finally clicked.","Two midterms, weekly problem sets, and labs every other week.","Don't buy the textbook. We never opened it.","Office hours saved me before the midterm.","Clear slides, fair exams, and a professor who actually cares."],Ct=["2026 Fall","2026 Spring","2026 Winter","2025 Fall","2025 Spring"],me=Number(U.get("r")??5.2),ho=Number(U.get("h")??3.4),ss=U.get("code")??"STAT 210",yt=U.get("title")??"Introductory Statistics",[vt,wt]=ss.split(" "),X={instruction:me+.2,course:me-.1,learned:me+.1,challenging:me-.4,stimulating:me-.2},as=(()=>{let e=[2,5.5,9.5,13.5,17.5,22].map(r=>Math.exp(-((r-ho)**2)/30)),t=e.reduce((r,o)=>r+o,0);return e.map(r=>r/t)})(),is=Ct.map((e,t)=>{let r=[0,-.1,.1,-.3,-.2][t],o=[62,48,55,71,44][t],n=i=>({mean:Math.min(6,+(i+r).toFixed(2)),responseCount:o}),c=i=>{let a=[1,2,3,4,5,6].map(u=>Math.exp(-((u-(i+r))**2)/1.2)),l=a.reduce((u,d)=>u+d,0);return a.map(u=>Math.round(u/l*o))},s=as.map((i,a)=>({label:ns[a],count:Math.round(i*o)}));return{term:e,description:`${vt} ${wt}-0-20 ${yt}`,instructor:"Sample Instructor",url:"https://example.com/"+t,status:"ready",metrics:{instruction:n(X.instruction),course:n(X.course),learned:n(X.learned),challenging:n(X.challenging),stimulating:n(X.stimulating),hours:{mean:+(ho+[.1,-.1,.2,-.2,0][t]).toFixed(1),responseCount:o,buckets:s}},charts:Object.entries(os).map(([i,a])=>({question:a,imageUrl:"",alt:null,counts:c(X[i])})),commentGroups:[{prompt:"Please summarize your reaction to this course focusing on the aspects that were most important to you.",comments:cs.filter((i,a)=>a%Ct.length===t)}]}}),ls={recentAggregate:{},entries:is,allFetched:!0,pendingDiscoveryCount:0},St=so(ls,{subject:vt,catalogNumber:wt+"-0",instructor:"Sample Instructor"},yt,"combo"),xo=e=>e==null||e===""?null:St?.terms[+e]?.id??null,Co=xt({doc:document}),V=document.createElement("div");V.className="si-panel";V.innerHTML=`<div class="si-head"><p>SECTION INFO</p>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"/></svg>
  <button type="button" class="si-x" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 18 18 6M6 6l12 12"/></svg></button></div>
  <div class="bc-paper-ctec-side-tabs"><button type="button" class="bc-paper-ctec-side-tab si-paper">Paper.nu</button><button type="button" class="bc-paper-ctec-side-tab is-active">CTECs</button></div>
  <section class="bc-paper-ctec-analytics-panel"></section>`;document.body.append(V);Co.setHost(V.querySelector("section"));var F={selectedTermId:xo(U.get("term")),commentsQuery:U.get("q")??"",commentsSentimentFilter:"all",commentsVisibleCount:50,dryRun:null,dryRunDismissed:!1,activePreset:null},yo={identity:{subject:vt,catalog:wt+"-0",title:yt,instructor:"Sample Instructor",sectionTerm:"2027 Winter"},data:St,loading:!1,errorMessage:null,notFound:!1,canRefresh:!0,canLoadMore:!1,loadMoreBatchSize:3,remainingTerms:0,parsedTermCount:Ct.length,backgroundRefreshing:!1,refreshFlash:null,strategy:"combo",freshLensLoading:!1,courseLensRedundant:!1,instructorLensRedundant:!1},Rt=e=>window.parent.postMessage({pencilCtec:e},"*"),us=()=>{},he=()=>Co.open(yo,F,ds),ds=new Proxy({onClose:()=>Rt("close"),onTermChange:e=>{F.selectedTermId=e,F.commentsVisibleCount=50,he();let t=St?.terms.findIndex(r=>r.id===e)??-1;window.parent.postMessage({pencilCtec:"term",term:t<0?null:t},"*")},onCommentsSentimentChange:e=>{F.commentsSentimentFilter=e,he()},onStrategyChange:e=>{yo.strategy=e,he()}},{get:(e,t)=>e[t]??us}),vo=e=>requestAnimationFrame(()=>{let t=document.querySelector(".bc-sheet-com");V.scrollTo({top:e==="comments"&&t?t.offsetTop+96:0,behavior:"smooth"})});he();V.querySelector(".si-x")?.addEventListener("click",()=>Rt("close"));V.querySelector(".si-paper")?.addEventListener("click",()=>Rt("close"));U.get("focus")&&vo(U.get("focus"));window.addEventListener("message",e=>{let t=e.data?.pencilCtec;!t||typeof t!="object"||(F.selectedTermId=xo(t.term),F.commentsQuery=t.q??"",F.commentsSentimentFilter="all",F.commentsVisibleCount=50,he(),vo(t.focus??"top"))});})();
/*! Bundled license information:

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
