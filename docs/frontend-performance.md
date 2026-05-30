## Frontend Performance Notes

The landing page is mostly static after first paint. The only routine UI state
today lives in the header and mobile menu inside `src/Sketchbook.jsx`.

Because of that:

- Keep the marketing mocks in `src/Mocks.jsx` pure and memoized.
- Treat those mocks as static fixtures unless a change truly depends on live
  props or local state.
- If a future change adds live data to one of the mocks, re-check whether
  `memo(...)` still reflects the real update path.

That rule keeps small header interactions from re-rendering the full gallery of
below-the-fold demo surfaces.
