# Pulse — Personal Music Player

A private, local-first Spotify-inspired personal music player built with React, TypeScript and Vite.

## Features
- Local Windows folder import through the File System Access API
- Multi-file audio import fallback
- MP3, WAV, OGG, M4A/AAC and FLAC where browser-supported
- Metadata and embedded artwork extraction
- Search, sorting, favorites and recently played history
- Persistent playlists and library metadata with IndexedDB
- Queue, shuffle, repeat, seek, volume and mute
- Keyboard shortcuts: Space, M, N, Left/Right arrows
- Responsive premium dark UI
- No backend, uploads, tracking, analytics or external streaming

## Run locally
```bash
npm install
npm run dev
```
Open the Vite URL in Chrome or Edge.

## Import music
Use **Import Folder** to select a local Windows music directory. The browser requests permission and the app recursively scans supported audio files. Use **Add Files** when folder access is unavailable.

The `public/music/` directory is included as a project-owned location. Browsers cannot silently enumerate arbitrary deployed folders for security reasons; for personal local folders, Import Folder is the reliable workflow.

## Privacy
Audio files are not uploaded. Listening data, favorites, playlists and metadata stay in browser storage.

## Production
```bash
npm run build
npm run preview
```

## Browser
Chrome and Edge are recommended because they support the File System Access API. Other modern browsers can still use individual file import where their audio support allows it.