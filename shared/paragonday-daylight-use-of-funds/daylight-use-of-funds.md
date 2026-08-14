---
title: "Daylight Computer — use of funds"
tags: [paragonday, daylight-computer, month-offline, funding, donor-reporting]
status: draft — for Yatú's review
created: 2026-08-14
---

# Daylight Computer — use of funds

$10,000 donated to Paragonday, held by Other Internet as fiscal sponsor. This
document is the frame for telling Daylight what happened to it. The first $500
is the Month Offline DC stipend; the rest is unallocated and the allocation
below is a proposal, not a decision.

## The one-paragraph version

> Daylight's $10,000 is being spent on getting Horizon Time out of the software
> and into people's hands. The first $500 went to Aaron Z Lewis to bring it into
> Month Offline's DC cohort — 30 people who have given up their smartphones for
> September. They'll carry a paper time card instead of a calendar app, text a
> number to ask when the sun sets, and walk to the water at an hour nobody
> picked. That is the first time Paragonday has been used by people who aren't
> building it.

That paragraph is the whole report if Daylight only reads one thing. Everything
below exists to make it defensible.

## Why this is the right first spend

Daylight builds a device you can read in direct sunlight — a company whose
entire product thesis is that screens should submit to daylight rather than
compete with it. Paragonday's thesis is that *time* should do the same. Month
Offline is where those two arguments meet a room full of people who have already
volunteered to stop looking at a phone.

Three things make it worth funding rather than just doing:

1. **It's the first external adoption.** Everyone who has used Horizon Time so
   far built it. A DC cohort of strangers is the first real test.
2. **It produces artifacts.** Printed cards, sunset drawings, participant
   quotes. Fundable work that leaves nothing behind is hard to report on; this
   leaves a wall of drawings.
3. **It's cheap.** $500 buys the pilot. The materials are already written.

## What the $500 buys

| Component | State today | What the stipend covers |
|---|---|---|
| Time Card | Built, rendered as PDF (Brooklyn) | Regeneration for DC, printing, distribution to the cohort |
| Text service | Spec + full script deck; not built | Aaron's spec input and pilot operation; message fees are ~$6–10/cohort |
| Sunset field trip | Facilitator run-of-show written | Site selection in DC, facilitation, the outing itself |
| Horizon time habit | Practice spec + facilitation script | Introduction at the Week 1 meetup, tracking through the month |

Recipient: **Aaron Z Lewis**, organizer of the Month Offline DC cohort and a
time designer whose work predates this collaboration. Amount raised by him on
the call, not by us — he framed it as "a way of leaving a paper trail of the
collaboration," which is exactly the right instinct for a donor-funded pilot.

## The calendar Daylight can be told about

- **Sep 3, 2026** — DC cohort begins. 30 days without smartphones.
- **Sep 17–24, 2026** — the week on time. All four interventions live.
- **Sunsets that week (DC):** 7:14p → 7:03p, 11 minutes earlier across seven
  days. Across the full cohort, Sep 3 → Oct 3, sunset walks back **47 minutes**.
- **Early Oct** — Graduation and Exhibition weeks. The drift reveal, and the
  drawings go on a wall.
- **Mid-Oct** — evidence collected, report to Daylight.

That 47-minute figure is the most reportable number we have. Participants will
follow a habit tethered to sunset for a month and it will move nearly an hour
without any of them noticing while it happens. It is the cleanest demonstration
of the Horizon Time argument that exists, and it costs $500 to run.

## Evidence to collect

Set this expectation with Aaron now, gently, rather than asking for it in
October (the email draft does this):

- Photographs of the printed time cards in use
- Scans or photos of the horizon drawings from the field trip
- 2–3 participant quotes about their experience of time
- Aaron's own reflection, including what failed
- Text service logs — how many people texted `SUNSET`, and when

Five artifacts, none of which require anyone to fill in a form.

## Proposed allocation for the remaining $9,500

**Draft. Yatú's call.** Offered so the conversation with Daylight can start from
a shape rather than a blank.

| Line | Amount | Rationale |
|---|---|---|
| Month Offline DC pilot (Aaron) | $500 | **Committed.** Above. |
| Further cohort adoptions | $1,500 | Three more cohorts at $500 if DC works. Seattle, Austin, Philadelphia, Oakland, Las Vegas are all live Aug–Oct 2026. |
| Time Together gathering | $3,000 | Yatú's stated primary intent: get people physically together around Horizon Time. Also the first chance the contributor team meets in person. |
| Editorial / records of thought | $2,000 | The gap named repeatedly on the call — we don't tell people what we're doing. Covers writing, photography, the video work Norm is prototyping. |
| Wearable clock prototyping | $2,000 | The most-demanded artifact by direct report from three separate people. One e-ink unit has already been bought at $700. |
| Contingency | $500 | |

Two live threads that could change this: the Zeno Satellites conversation
(precise offline positioning, which would let a wearable compute local sunset
with no internet) and whether the text service runs on our Twilio or on Month
Offline's existing toll-free line. Neither needs a decision this week.

## How to report back

One page, mid-October, in this shape:

1. The paragraph at the top of this document, updated to past tense.
2. Three photographs.
3. Two participant quotes.
4. A table: what we said the money was for, what it actually did.
5. What we learned that we didn't expect — including the failures. A donor
   report with no failures in it is a marketing document, and Daylight will
   read it as one.
6. What's next, and what it would cost.

## Open questions for Yatú

1. **Is there a grant agreement with Daylight?** If the $10k came with reporting
   terms or a restricted purpose, the allocation above needs checking against
   them. I don't have that document.
2. **Who is the reader at Daylight?** A founder skims a paragraph and looks at
   pictures. A program manager wants the table. This is written for the founder.
3. **Does Other Internet report separately?** As fiscal sponsor they may have
   their own obligation, in which case ours should not contradict theirs.
4. **Is the remaining allocation something to share with Daylight now**, or only
   after DC proves out? Sharing a plan invites input; not sharing keeps
   flexibility.

## Sources

- Paragonday Systems call, 2026-08-14 — Yatú, Norm O'Hagan, Corey/Chaz, Aaron Z Lewis
- `PLANS/MONTH_OFFLINE_CONCEPTS.md` — the four concepts and their build state
- `OUTBOX/MONTH_OFFLINE/` — TIME_CARD.pdf, run-of-show, text service spec
- Sunset figures computed with `OUTBOX/MONTH_OFFLINE/solar.py` (NOAA algorithm,
  verified against api.sunrise-sunset.org within 45 seconds)
- https://offline.community/ — cohort cities and weekly themes (read 2026-08-14)
