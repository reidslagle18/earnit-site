# EarnIt marketing site

Paid-traffic landing page for [EarnIt](https://parentalcontrol-one.vercel.app) with
Meta (Facebook) Pixel + Conversions API tracking built in.

## Funnel events

| Step | Event | Where it fires |
|---|---|---|
| Page loads | `PageView` + `ViewContent` | This site (Pixel + CAPI, deduped) |
| Any "Start free" click | `Lead` | This site (Pixel + CAPI, deduped) |
| Account created | `CompleteRegistration` | EarnIt app backend (CAPI) |
| iOS trial starts | `StartTrial` | EarnIt app backend (CAPI) |
| Trial survives 7 days | `Subscribe` | EarnIt app backend (CAPI) |

CTA links pass `fbclid` and `utm_*` through to the app so late events attribute
back to the ad click.

## Setup

1. Meta Events Manager → create a Pixel/Dataset → copy the ID.
2. Pixel Settings → Conversions API → **Generate access token**.
3. Set env vars on Vercel (see `.env.example`):
   `NEXT_PUBLIC_META_PIXEL_ID`, `META_CAPI_ACCESS_TOKEN`, optionally
   `META_TEST_EVENT_CODE` while testing (Events Manager → Test Events).
4. Redeploy. Verify events arrive in Events Manager → Test Events, then remove
   the test code.

Without the env vars the site runs fine and tracking silently no-ops.
