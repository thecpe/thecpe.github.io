# growwithjo Member Dashboard — Ideas & Approaches

**Date:** 2026-09-17 · **For:** becs (runs growwithjo community) · **From:** Fizz
**Status:** Brainstorm only — nothing gets built until becs picks a direction.

## What growwithjo is (research)

- Women-focused home-workout membership, ~13,000+ members ("Homies")
- Platform: Uscreen (app id `tv.uscreen.growwithjo` — iOS/Android/TV apps + web)
- Content: 800+ on-demand workouts (walking, HIIT, tabata, pilates, strength), 20–30 min, beginner/postpartum-friendly
- Extras: "Done With Diets" nutrition course, custom meal maps, live group calls with Jo, streak tracking + progress logs
- Pricing: ~$198.99/yr annual, monthly option; membership managed from account dashboard

Sources: [growwithjo.com](https://growwithjo.com/), [membership page](https://growwithjo.com/pages/membership), [Google Play listing](https://play.google.com/store/apps/details?id=tv.uscreen.growwithjo&hl=en_US), [App Store listing](https://apps.apple.com/us/app/growwithjo-home-workouts/id6477621228)

## First: which "dashboard"?

Three different products hide inside the word — becs should pick one to start:

**A. Member home screen** — each Homie opens it and sees *her own* week: streak, workouts done, today's suggested workout, next live call, current milestone. Value = personal momentum. This is what most members would call "valuable."

**B. Community pulse board** — collective stats: total workouts this week, challenge leaderboard, shout-outs, milestones wall ("Sarah hit 100 workouts!"). Value = accountability + belonging, which is growwithjo's whole brand.

**C. Ops dashboard for becs/Jo** — engagement, retention, at-risk members (streak just broke, no login 14 days), challenge participation. Not member-facing, but often the highest-leverage first build because it tells you what members actually do.

## Three approaches (any of the above)

### 1. Squeeze Uscreen first (lowest lift)
Uscreen already tracks watch history, streaks, and progress, and has an API + webhooks + Zapier. Before building anything: audit what Uscreen's member area and analytics already show, and what's just turned off or unstyled. Maybe 60% of the dream dashboard is a settings/config exercise.
**Good when:** becs wants value in days, not months. **Limit:** stuck with Uscreen's layout.

### 2. Manual-first pilot (validate before building)
A weekly "Homie Scoreboard" — becs (with agent help) exports Uscreen data weekly, and we generate a styled page/email: community totals, streak stars, challenge standings. Zero software to maintain; proves what members actually open and care about.
**Good when:** unsure what members want. **Limit:** weekly, not live; manual step.

### 3. Companion web dashboard (custom build)
Small web app (e.g., Next.js + Supabase) fed by Uscreen API/webhooks. Members log in and see A + B above; becs gets C as an admin view. Fully on-brand, can add things Uscreen never will (habit calendar, non-scale-victory journal, buddy pairing, monthly challenge engine).
**Good when:** a validated concept deserves a real home. **Limit:** biggest lift; needs API access check first.

## Fizz's recommendation

Sequence them: **1 → 2 → 3.** Audit Uscreen this week, run the manual scoreboard as a 3–4 week pilot during a challenge, then build the companion app around whatever members demonstrably love. Metric of success: % of members who check the dashboard weekly and workout-completion lift during the pilot.

## Open questions for becs

1. **The big one:** when a Homie opens the dashboard, what should she *feel* — "I'm on a roll" (personal), "we're in this together" (community), or should it tell becs/Jo who needs a nudge (ops)?
2. What are becs's existing ideas? (Yatu said she has some — they should anchor this.)
3. Does she have Uscreen admin access, and does her plan include API access?
4. Is there a recurring challenge (e.g., monthly walking challenge) a pilot could ride on?
