# Gully Cricket 2.0: Modular Game Architecture & Migration Plan

> **Note for the Vibe Coder:** You do **not** need to learn JavaScript, Vite, npm, or terminal build tooling. Your role remains the creative director—setting the rules, player quirks, visual vibe, and game features. The AI handles 100% of the code, file modularization, build configurations, and technical plumbing.

---

## 1. Vision & Objectives

Version 1.0.0 (`src/1.0.0/gully_cricket.html`) is a working 7,575-line masterpiece. It proves that the physics, Goan venue storytelling, Mortal Kombat player draft, and house rules work together.

**The goal of Version 2.0.0:**
1. **Maintain 100% Zero-Regression**: Keep all existing physics, animations, camera angles, car alarms, and rules working exactly as they do now.
2. **Break the 7.5k Monolith into Neat "Departments"**: Organize code into clean, dedicated modules so adding a player, changing a sound, or tweaking bowling spin takes 10 seconds without risking breaking the rest of the game.
3. **Preserve Single-File Sharing**: Running a simple build command will automatically produce **one single self-contained `.html` file** in `dist/` that you can send over WhatsApp/Slack just like you do today.
4. **Unlock Future Superpowers**: Lay the technical groundwork for real audio (bat crack, crowd banter, car sirens), tournament cup modes, controller support, and instant web links (GitHub Pages / Vercel).

---

## 2. Project Layout (`src/2.0.0`)

Instead of one 7,500-line file, the new project is structured like a proper indie game studio repo:

```text
gully-cricket/
├── src/
│   ├── 1.0.0/                         # Preserved original version (never touched, safe backup)
│   └── 2.0.0/                         # The modern modular game engine
│       ├── index.html                 # Clean entry point (only ~30 lines)
│       ├── package.json               # Project manifest & build scripts
│       ├── vite.config.ts             # Bundler setup (includes single-file HTML generator)
│       ├── tsconfig.json              # TypeScript type configuration
│       │
│       ├── public/                    # Raw assets folder
│       │   ├── textures/              # Pavers, laterite stone, banners
│       │   ├── portraits/             # Player 160x160 pixel portraits (from /static/Pics)
│       │   └── audio/                 # Sound fx (bat hits, car alarms, crowd reactions)
│       │
│       └── app/                       # Source code organized by department
│           ├── main.ts                # Bootstrap & main game loop
│           │
│           ├── core/                  # Engine foundation
│           │   ├── GameState.ts       # Innings, score, wickets, chase target state machine
│           │   ├── EventBus.ts        # Signal bus (e.g. ball hit -> trigger car alarm)
│           │   └── Clock.ts           # Game loop tick & delta-time manager
│           │
│           ├── scene/                 # 3D visuals & camera
│           │   ├── World.ts           # Three.js scene, renderer, sunlight, and soft shadows
│           │   ├── CameraController.ts# Bat Cam, Bowl Cam, Side Cam, High Cam
│           │   └── arena/
│           │       ├── BocaDeVaca.ts  # Portuguese spring pavilion, Nandi medallion, fountain
│           │       ├── Environment.ts # Paver pitch, Goan colonial building, palm trees
│           │       ├── Vehicles.ts    # Ford Endeavour & Suzuki Baleno with alarm systems
│           │       └── Audience.ts    # Rock spectators & funny reactive emote animations
│           │
│           ├── entities/              # 3D objects
│           │   ├── Human.ts           # 12-joint skeletal stick figure rig & animation poses
│           │   ├── Ball.ts            # Ball 3D mesh, shadow projection, and motion trail
│           │   └── Stumps.ts          # Crease markings and neon plastic stumps
│           │
│           ├── physics/               # Ball dynamics & contact math
│           │   ├── Trajectory.ts      # Underarm release, gravity, and ground bounce physics
│           │   ├── SpinBreak.ts       # Leg-spin & off-spin pitch deflection math
│           │   ├── BatContact.ts      # Sweet-spot timing, contact angles, shot power
│           │   └── Collisions.ts      # Front wall (4), far wall (2), near wall (1), fielder catches
│           │
│           ├── gameplay/              # Rules & match logic
│           │   ├── BattingEngine.ts   # Stance, swing triggers, safe tap vs. lofted drives
│           │   ├── BowlingEngine.ts   # Paver aiming, oscillating needle slider, delivery release
│           │   ├── RulesEngine.ts     # Gully rules: direct hit OUT, one-drop catch, dead ball window
│           │   └── AI.ts              # CPU batting decisions & CPU bowler field setups
│           │
│           ├── data/                  # Game data & configs (easy for vibe coders to edit)
│           │   ├── players.ts         # 16 player roster: stats, taglines, batting/bowling styles
│           │   └── courtConfig.ts     # Boundary wall dimensions, pitch coordinates, run values
│           │
│           ├── audio/                 # Sound effects manager
│           │   └── SoundManager.ts    # Bat cracks, sirens, crowd laughter, umpire calls
│           │
│           └── ui/                    # Visual overlays & screens
│               ├── hud/               # TV broadcast top bar, ball dots, broadcast toasts
│               ├── draft/             # Mortal Kombat 4x4 draft grid & 3D character spotlight
│               └── modals/            # Match prep lineup modal & end-of-match summary
```

---

## 3. Step-by-Step Implementation Roadmap

### Step 1: Scaffolding & Build Pipeline
- Initialize `package.json` with **Three.js** and **Vite**.
- Configure `vite-plugin-singlefile` so that running `npm run build` outputs a single, self-contained `dist/index.html` file with all code and assets baked in.
- Verify the dev server boots and can bundle cleanly.

### Step 2: Data & Configurations Extraction
- Extract `PLAYERS` roster (Amrit, Darren, Maverick, Melroy, Neeraj, Nihal, Om, Prabhakar, Pradeep, Prasad, Ralph, Sahil, Shubham, Sweenal, Sweeten, Travis) into `src/2.0.0/app/data/players.ts`.
- Extract pitch dimensions, wall coordinates, and boundary run values into `src/2.0.0/app/data/courtConfig.ts`.

### Step 3: 3D Environment & Static Arena
- Port Three.js scene setup and 4 camera modes (`Bat Cam`, `Bowl Cam`, `Side Cam`, `High Cam`).
- Port Boca De Vaca historic spring pavilion, iron gates, guard booth, and jungle hillside.
- Port parked Ford Endeavour SUV & Suzuki Baleno with custom headlight LED glows and alarm colliders.
- Port palm trees and the Goan boulder spectator stand with animated audience figures.

### Step 4: Human Rig & Animation System
- Port the 12-joint articulated `Human` stickman class.
- Port batting stances (righty/lefty), underarm bowling animation, directional swing poses, celebrations (dab, bhangra twirl, air guitar), and fielder dives.

### Step 5: Physics, Bowling, Batting & Gully Rules
- Port the interactive pitch-drop marker and speed/timing slider.
- Port ball trajectory, spin-break math, and contact physics (safe tap vs power drive).
- Port gully cricket rules:
  - 1 bounce direct front wall = 4 runs
  - 1 bounce far side wall = 2 runs
  - 1 bounce near side wall = 1 run
  - Direct hit wall without ground bounce = OUT
  - Direct catch or one-drop catch = OUT
  - Underarm only, knee-height no-balls, wides, and 3-second Dead-Ball reaction hotkey.

### Step 6: TV Broadcast HUD & Mortal Kombat Draft Screen
- Port the floating glassmorphic scoreboard, ball-tracker dots, broadcast toast notifications, and player mini-portraits.
- Port the 4x4 Mortal Kombat fighter selection grid with real player pixel portraits and 3D preview spotlight.

### Step 7: Sound & Audio Upgrade
- Integrate Web Audio / Howler.js for:
  - Crack of the bat (safe wood tap vs power hit).
  - Concrete/paving stone bounce sounds.
  - Car alarm siren when boundary shots strike the Endeavour or Baleno.
  - Audience clapping on 4s and banter/arguing on wickets.

### Step 8: Build Verification & Single-File Test
- Run `npm run build` to generate `dist/index.html`.
- Test that the generated single HTML file opens locally in any browser without a web server and plays with 100% parity to version 1.0.0.

---

## 4. How the Vibe Coder Uses This (Daily Workflow)

You never have to touch config files or terminal plumbing. You simply instruct the AI using your usual style:

1. **When you want to test the game locally:**
   - Command: `npm run dev`
   - You open `http://localhost:5173` in your browser. Any change made by the AI updates on your screen in real time without refreshing.

2. **When you want to share a playable file with friends/coworkers:**
   - Command: `npm run build`
   - A single file is created: `dist/index.html`. Send this file over Slack/WhatsApp—recipients just double-click to play!

3. **When you want to tweak gameplay (Vibe Prompts):**
   - *"Make Om bowl a vicious off-spinner that breaks sharply towards off-stump."*
   - *"Add an extra fielder near the red Endeavour car."*
   - *"Add a new sound effect when someone hits a direct-wall out."*
   - *"Add a 5-over tournament mode where players carry fatigue over."*

The AI will know exactly which modular file to edit without risk of corrupting other parts of the game.

---

## 5. Safety & Backups
- Your existing Version 1.0.0 is preserved intact at `src/1.0.0/gully_cricket.html`. It will remain completely untouched and runnable at any time.
- All new modular work lives exclusively in `src/2.0.0/`.

