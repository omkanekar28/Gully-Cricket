# Version 1.0.0: The Monolith Genesis

**Release Date:** October 2026  
**Status:** Completed & Archived (Reference Baseline)  
**Main File:** `gully_cricket.html` (7,575 lines)

---

## 🎯 What is Version 1.0.0?
Version 1.0.0 is the original proof-of-concept and full game prototype built as a single, self-contained HTML file. It established the complete vision, rules, aesthetics, and mechanics of our office gully cricket matches at the Boca de Vaca arena in Goa.

---

## 🏏 Key Features Included in 1.0.0

### 1. 3D Street Arena & Environmental Storytelling
- **Boca De Vaca Spring Pavilion:** Historic Portuguese facade, twin owl-eye portals, copper fountain basin, water spout, Nandi cow relief medallion, blue-yellow signboard, iron security gate, and jungle hillside.
- **Goan Street Layout:** Interlocking terracotta and buff stone pavers, Goan red laterite retaining walls with painted boundary markings, colonial building with balconies and shuttered windows, and swaying palm trees.
- **Parked Vehicles with Alarms:** Dark Red Ford Endeavour SUV and Arctic White Suzuki Baleno hatchback with custom LED DRL headlights, manufacturer badges, and collision alarm sirens (hazard flashers + horn).
- **Rock Spectators:** Goan boulder spectator stand with 4 animated stick figures reacting to match events (cheering 4s, arguing on wickets, ducking on car hits).

### 2. Character Rigs & Animation
- Articulated 12-joint procedural 3D stick figures (`Human` class).
- Underarm bowling animation with run-up.
- Directional batting swings, forward defensive push, stance adjustments (righty & lefty).
- Celebration & rage emotes: dab, bhangra twirl, air guitar, bat slam, fielder tantrums.

### 3. Authentic Gully Cricket Physics & House Rules
- **Underarm delivery only** with realistic single-bounce pitch trajectory and ball elevation shadow.
- **Spin bowling:** Leg-spin and off-spin breaks based on pitch-drop aiming paver.
- **Timing Slider:** Oscillating speed/timing needle with sweet-spot release and bowler fatigue errors.
- **Batting contact:** Safe ground push vs. lofted boundary drives.
- **Boundary wall scoring:**
  - Front wall (after 1+ ground bounce) = 4 runs
  - Far side wall (after 1+ ground bounce) = 2 runs
  - Near side wall (after 1+ ground bounce) = 1 run
- **Dismissals:**
  - Direct hit on any wall without ground bounce = **OUT**
  - Direct hit over any wall = **OUT**
  - Direct catch or one-drop catch = **OUT**
  - Clean bowled
- **Extras & House calls:** Wides, knee-height no-balls, double-bounce dead-balls, and an interactive 3-second **"Call Dead"** hotkey `[D]`.

### 4. UI & Presentation
- **Mortal Kombat Fighter Select Draft:** 4x4 grid featuring 16 real office players with 160x160 retro pixel-art portraits, balanced stats, taglines, and an animated 3D character spotlight.
- **TV Broadcast HUD:** Floating glassmorphic scoreboard, live over/ball tracker dots, batter/bowler mini-portraits, and broadcast toast banners.
- **Dual Controls:** Full keyboard hotkeys + touch/mouse buttons for mobile and laptop play.

---

## ⚠️ Why Move Beyond 1.0.0?
While fully playable, stuffing 7,575 lines of CSS, HTML templates, 3D math, animation logic, and game rules into one file creates major bottlenecks:
- Impossible to add new features (like sound or tournaments) without risking breaking existing mechanics.
- Cannot easily collaborate or use modern game development tools.
- Slow to maintain and prone to merge conflicts.

