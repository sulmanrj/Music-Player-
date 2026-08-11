export type RepeatMode='off'|'one'|'all';
export type Source='folder'|'file'|'project';
export interface Track{id:string;title:string;artist:string;album:string;albumArtist:string;genre:string;year?:number;trackNumber?:number;duration:number;artwork?:string;source:Source;fileName:string;path?:string;file?:File;handle?:FileSystemFileHandle;size:number;addedAt:number;lastPlayedAt?:number;playCount:number}
export interface Playlist{id:string;name:string;trackIds:string[];createdAt:number;updatedAt:number}
export interface ImportError{fileName:string;reason:string;at:number}
export interface PersistedLibraryItem extends Omit<Track,'file'>{file?:File;handle?:FileSystemFileHandle}
