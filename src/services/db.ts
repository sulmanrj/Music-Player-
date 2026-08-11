import Dexie,{type Table} from 'dexie';
import type {ImportError,PersistedLibraryItem,Playlist} from '../types/music';
export interface LibrarySettings{theme:'dark'|'light'|'system';pinHash?:string;visualizer:boolean;scanProject:boolean}
class MusicDB extends Dexie{tracks!:Table<PersistedLibraryItem,string>;playlists!:Table<Playlist,string>;errors!:Table<ImportError,number>;settings!:Table<{id:string}&LibrarySettings,string>;
constructor(){super('pulse-music-db');this.version(2).stores({tracks:'id,artist,album,genre,addedAt,lastPlayedAt,playCount',playlists:'id,updatedAt',errors:'++at,fileName',settings:'id'})}}
export const db=new MusicDB();
export const saveTrack=(t:PersistedLibraryItem)=>db.tracks.put(t);export const saveTracks=(t:PersistedLibraryItem[])=>db.tracks.bulkPut(t);export const removeTrack=(id:string)=>db.tracks.delete(id);export const loadTracks=()=>db.tracks.toArray();export const clearTracks=()=>db.tracks.clear();
export const savePlaylist=(p:Playlist)=>db.playlists.put(p);export const removePlaylist=(id:string)=>db.playlists.delete(id);export const loadPlaylists=()=>db.playlists.toArray();export const clearPlaylists=()=>db.playlists.clear();
export const addImportError=(e:ImportError)=>db.errors.put(e);export const loadImportErrors=()=>db.errors.orderBy('at').reverse().toArray();export const clearImportErrors=()=>db.errors.clear();
export const saveSettings=(s:LibrarySettings)=>db.settings.put({id:'app',...s});export const loadSettings=async()=>{const s=await db.settings.get('app');if(!s)return undefined;const {id,...rest}=s;return rest};
export const resetLibrary=async()=>Promise.all([db.tracks.clear(),db.playlists.clear(),db.errors.clear()]);
