<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the pencil.nu landing page. The project is a React + Vite single-page application. PostHog was initialized in `src/main.jsx` using `posthog-js` and `@posthog/react`, wrapping the app with `PostHogProvider`. Event capture calls were added throughout `src/Sketchbook.jsx` using the `usePostHog` hook, tracking the five key user actions across all relevant page locations. Environment variables are stored in `.env` and referenced via `import.meta.env`.

## Files changed

| File | Change |
|------|--------|
| `src/main.jsx` | Added `posthog.init` and `PostHogProvider` wrapper |
| `src/Sketchbook.jsx` | Added `usePostHog` hook and `posthog.capture()` calls on all CTA/link clicks |

## Events instrumented

| Event name | Description | File |
|-----------|-------------|------|
| `chrome_install_clicked` | User clicked any "Add to Chrome" CTA (hero, top_nav, top_nav_mobile, mobile_menu, footer) | `src/Sketchbook.jsx` |
| `feedback_clicked` | User clicked the "leave feedback" link (top_nav, top_nav_mobile, mobile_menu, footer) | `src/Sketchbook.jsx` |
| `github_clicked` | User clicked the GitHub link (top_nav, footer) | `src/Sketchbook.jsx` |
| `paper_nu_link_clicked` | User clicked the external paper.nu link (paper_section, footer) | `src/Sketchbook.jsx` |
| `schedule_section_viewed` | User clicked "when does mine unlock?" — top of the rollout funnel (hero) | `src/Sketchbook.jsx` |

All events include a `location` property indicating where on the page the interaction occurred.

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics:** https://us.posthog.com/project/412658/dashboard/1552555
- **Chrome Install Clicks Over Time** (daily trend): https://us.posthog.com/project/412658/insights/7c1A6Foi
- **Chrome Install Clicks by Location** (breakdown by page section): https://us.posthog.com/project/412658/insights/6ufafl9U
- **Schedule → Chrome Install Conversion Funnel**: https://us.posthog.com/project/412658/insights/5D4mVXft
- **External Link Engagement** (feedback / GitHub / paper.nu): https://us.posthog.com/project/412658/insights/G7s6XvyK
- **Total Landing Page Engagement** (all events, weekly): https://us.posthog.com/project/412658/insights/TkCwRpPS

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
