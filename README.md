# Pulse — Personal Music Player

A production-oriented, local-first personal music library/player built with React, TypeScript, Vite, Zustand and Dexie.

## Implemented
- Dedicated Album, Artist and Genre collection/detail views
- Playlist CRUD: create, rename, delete, add/remove songs and drag-and-drop reorder
- Persistent queue with drag-and-drop reorder and clear/remove controls
- Multi-file import and recursive Folder Picker import
- `/music/` project scan fallback for deployments that expose a directory listing
- Duplicate detection by stable file signature
- Large-library import progress, cooperative yielding and failed-file reporting
- Metadata and embedded artwork extraction
- Audio blobs/file handles persisted in IndexedDB for reload playback when browser storage permits
- Recently Played and Most Played tracking
- Persistent volume, queue, favorites and catalog metadata
- Professional Now Playing overlay and optional Web Audio spectrum visualizer
- Search across title, artist, album, album artist and genre
- Sort by recent, title, artist, duration and play count
- Context menus, keyboard controls and responsive desktop/tablet/mobile UI
- Loading/import, empty, error and success states
- Local Admin / Library Management area with statistics, import/scan, metadata editing, song removal, recent-history controls, import errors, visualizer settings and full local reset

## Run locally
```bash
npm install
npm run dev
```
Open the Vite URL in Chrome or Edge for the best Folder Picker support.

## Production verification
```bash
npm run typecheck
npm run build
npm run preview
```

## Importing music
**Import Folder** uses the File System Access API and recursively scans supported audio files. **Add Files** works as the cross-browser fallback.

For a project-owned library, place audio under `public/music/`. The app can attempt to scan `/music/` when the server exposes a directory listing. Static hosts often disable directory listings, so Folder Picker remains the reliable workflow.

## Admin / Library Management
Open **Admin** from the sidebar or press **Ctrl + Alt + A**. On first access you create a local PIN; later access asks for that PIN. This is intentionally client-side protection only — it is not equivalent to server-side authentication.

## Privacy
No backend, uploads, analytics or streaming service are required. Library metadata, audio blobs/handles, playlists, favorites and playback history are stored locally in browser storage. Browser storage quotas and File System Access permissions still apply.

## Browser support
Chrome/Edge are recommended. Individual file import works in more browsers where the browser supports the selected audio format. Web Audio visualization is enabled only where the browser supports the required APIs.
