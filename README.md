# BabySmash TS

Electron + TypeScript reimagining of the classic BabySmash idea: mash keys or tap to spawn animated SVG shapes with simple beeps. Based on Scott Hanselman's original project: https://github.com/shanselman/babysmash

## Stack
- Electron for the desktop shell
- Vanilla TypeScript for both main/preload and renderer
- Pure SVG + CSS animations; Web Audio API for sounds

## Prerequisites
- Node.js 18+
- npm (bundled with Node.js)

## Install
```bash
npm install
```

## Build
- `npm run build` — compiles Electron main/preload and renderer TypeScript. Outputs to `dist/` and copies `index.html`/`style.css` for the renderer.
- `npm run lint` — type-check both main and renderer projects.

## Run (Electron)
```bash
npm start
```
This builds everything, then launches Electron against the compiled bundle in `dist/`.

## Run renderer in a browser (no Electron)
```bash
npm run build
open dist/renderer/index.html  # or double-click the file
```
The renderer is static after build; no dev server is required.

## Project layout
- `src/main` — Electron main process code
- `src/preload` — preload script (IPC bridge placeholder, contextIsolation on)
- `src/renderer` — UI logic, shapes, sounds, and styles

## Notes
- Security posture: `contextIsolation` on, `nodeIntegration` off; preload kept minimal for future IPC.
- Sounds are generated via Web Audio; no external media files.
