export type RepeatMode='off'|'one'|'all';
export interface Track{id:string;title:string;artist:string;album:string;albumArtist:string;genre:string;year?:number;trackNumber?:number;duration:number;artwork?:string;source:'folder'|'file'|'project';fileName:string;path?:string;file?:File;handle?:FileSystemFileHandle;addedAt:number;lastPlayedAt?:number;playCount:number}
export interface Playlist{id:string;name:string;trackIds:string[];createdAt:number;updatedAt:number}
export interface PersistedLibraryItem extends Omit<Track,'file'>{handle?:FileSystemFileHandle}