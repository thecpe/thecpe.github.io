# Programmable E-Ink Watches for Paragonday Horizon Time

Researched 2026-08-14 for the Clock channel. Goal: hardware that can run a custom
Horizon Time watch face (sun-arc / sunrise–sunset rendering) on an always-on e-ink display.

## Top picks

### 1. Pebble Time 2 — best polished option
- **$225, in stock (ships within 48h)** from [repebble.com/watch](https://repebble.com/watch)
- 1.5" **64-color e-paper** touchscreen, ~30-day battery, heart rate, speaker
- Runs **PebbleOS, now 100% open source** (OS + mobile apps + SDK on GitHub) — write watchfaces in C or JavaScript, no permission needed ([ericmigi.com](https://ericmigi.com/blog/pebble-watch-software-is-now-100percent-open-source/), [linuxiac.com](https://linuxiac.com/pebble-is-back-introducing-two-open-source-smartwatches/))
- 10,000+ existing watchfaces/apps on the Pebble Appstore, so distribution of a Horizon Time face to other users is easy
- Siblings: **Pebble Round 2** ($199, 1.3" color e-paper, round, pre-order ships September) and **Pebble 2 Duo** ($149, 1.2" B/W e-paper, currently sold out/waitlist)

### 2. Watchy by SQFMI — best fully-hackable option
- **~$50** kit + injection-molded case; sold via [Crowd Supply](https://www.crowdsupply.com/sqfmi/watchy), [Mouser](https://www.mouser.com/new/sqfmi/sqfmi-watchy-kit/), SparkFun
- 1.54" 200×200 **monochrome e-paper**, ESP32-S3, WiFi + BLE, accelerometer, RTC
- Fully open hardware + firmware ([github.com/sqfmi/Watchy](https://github.com/sqfmi/Watchy), [watchy.sqfmi.com](https://watchy.sqfmi.com/)); program in Arduino/C++, MicroPython, or ESP-IDF
- WiFi means the watch itself can fetch sunrise/sunset or sync with the Paragonday backend — no phone app needed
- Rich community of custom faces; a Horizon Time face is a single C++ class drawing to a 200×200 canvas

### 3. LILYGO T-Wrist — cheapest prototyping board
- **$13–26** bare-board wearable: 1.54" 200×200 e-paper + ESP32, optional GPS ([lilygo.cc](https://lilygo.cc/products/t-wrist-e-paper-1-54-inch-display))
- Community firmware [qpaperOS](https://github.com/qewer33/qpaperOS) + free 3D-printed case designs on Printables
- Good for testing the Horizon Time rendering cheaply before committing to nicer hardware

## Circular options

Round e-ink is rare — **Pebble Round 2 is effectively the only circular programmable
e-paper watch on the market** (updated 2026-08-14):

- **$199, pre-order, ships September 2026** at [repebble.com/watch](https://repebble.com/watch)
- 1.3" **round 64-color e-paper touchscreen**, 260×260 at 283 DPI, bezel much thinner than the 2016 original ([androidauthority hands-on](https://www.androidauthority.com/pebble-round-2-hands-on-ces-2026-3629613/), [specs](https://gadgetsandwearables.com/technical-specs/pebble-round-2/))
- 41.5 mm × 8.1 mm, 316 stainless steel; Matte Black / Brushed Silver / Polished Rose Gold
- 10–14 day battery, 3 ATM, accelerometer, compass, dual mics, LED backlight
- Same fully open-source PebbleOS + SDK as the Time 2 — a Horizon Time face ports directly
- A round dial is arguably the *best* canvas for Horizon Time: the sun arc maps naturally onto a circular face (same instinct as the paragonday-calendar sun-dial explorations)

DIY round e-ink is a dead end for now: round e-paper modules are essentially not sold
(Waveshare's round modules are LCD, e.g. the 1.28" GC9A01 — [waveshare.com](https://www.waveshare.com/product/displays/e-paper/epaper-1.htm)), so there's no
Watchy-style circular build path.

## Fit with Horizon Time

- E-ink is ideal for Horizon Time: always-on, updates once a minute, and the sun-arc only
  changes slowly through the day — perfect for partial-refresh e-paper.
- **Color + polish + distribution** → Pebble Time 2. Watchface SDK supports canvas drawing;
  the phone app can feed location/sunrise data.
- **Standalone + hackable + cheap** → Watchy. Direct WiFi to sunrise APIs or Paragonday's
  backend; we control every pixel and the deep-sleep cycle.
- Suggested path: prototype the face rendering once (200×200 mono for Watchy) and port the
  same arc math to a PebbleOS face.

## Not e-ink but adjacent (excluded)
- Bangle.js 2, PineTime — always-on transflective LCD / memory-in-pixel, not e-paper.
- Garmin Instinct — MIP display, closed-ish Connect IQ SDK.

## Sources
- https://repebble.com/watch
- https://ericmigi.com/blog/pebble-watch-software-is-now-100percent-open-source/
- https://linuxiac.com/pebble-is-back-introducing-two-open-source-smartwatches/
- https://watchy.sqfmi.com/ · https://github.com/sqfmi/Watchy
- https://www.crowdsupply.com/sqfmi/watchy · https://www.mouser.com/new/sqfmi/sqfmi-watchy-kit/
- https://lilygo.cc/products/t-wrist-e-paper-1-54-inch-display · https://github.com/qewer33/qpaperOS
