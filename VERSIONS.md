# Gully Cricket: Master Version Registry & Changelog

This document tracks the evolution of the **Office Gully Cricket** project across all past, present, and future releases. Each version folder inside `src/` also maintains its own detailed `VERSION.md`.

---

## 🧭 Semantic Versioning Guide for This Project

We use standard `MAJOR.MINOR.PATCH` versioning tailored for game development:

- **MAJOR (X.0.0)**: Big generational milestones (e.g. initial monolith -> modular engine -> online multiplayer).
- **MINOR (x.Y.0)**: Major feature releases (e.g. graphics overhaul, sound design, new tournament mode, new arena).
- **PATCH (x.y.Z)**: Bug fixes, physics balance tweaks, new player additions, or stat adjustments.

---

## 📜 Version History & Roadmap

| Version | Status | Release / Target | Theme & Description |
| :--- | :--- | :--- | :--- |
| **`v1.0.0`** | **Completed** | Oct 2026 | **The Monolith Genesis**<br>The original proof-of-concept in a single 7,575-line HTML file. Fully playable with Three.js 3D engine, Boca de Vaca arena, 12-joint stick figures, underarm bowling physics, wall-bounce rules, and 16-player Mortal Kombat draft. |
| **`v2.0.0`** | **In Progress** | Nov 2026 | **Modular Architecture & Foundation**<br>100% gameplay parity with v1.0.0, refactored into a modern TypeScript + Vite modular codebase. Solves technical debt, enables fast HMR development, and preserves single-file sharing via build packaging. |
| **`v2.1.0`** | *Planned* | Future | **Foley Audio & Visual Polish**<br>Real street cricket soundscape: bat-on-ball "thock", car alarm sirens, Goan ambient birds, crowd cheers/banter, umpire shouts, and lighting post-processing. |
| **`v2.2.0`** | *Planned* | Future | **Office Cup & Tournament Mode**<br>Knockout tournament bracket, persistent team fatigue, match history, and player awards (Orange Cap / Purple Cap). |
| **`v2.3.0`** | *Planned* | Future | **New Venues & Weather**<br>Alternate street arenas (e.g., Office Parking Lot, Terrace) and time-of-day settings (Goan Golden Hour, Evening floodlights). |
| **`v3.0.0`** | *Planned* | Future | **Online 1v1 Multiplayer**<br>Peer-to-peer real-time matches over WebRTC (PeerJS) / WebSockets so coworkers can play against each other from different computers. |

---

## 📁 Version Directory Map

- **[src/1.0.0/](file:///home/om/code/gully-cricket/src/1.0.0/)**
  - Read: [src/1.0.0/VERSION.md](file:///home/om/code/gully-cricket/src/1.0.0/VERSION.md)
  - Playable File: `gully_cricket.html`
- **[src/2.0.0/](file:///home/om/code/gully-cricket/src/2.0.0/)**
  - Read: [src/2.0.0/VERSION.md](file:///home/om/code/gully-cricket/src/2.0.0/VERSION.md)
  - Plan: [src/2.0.0/PLAN.md](file:///home/om/code/gully-cricket/src/2.0.0/PLAN.md)

