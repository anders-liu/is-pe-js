declare module "is-pe" {
    export = IsPE;
}

declare namespace IsPE {
    export type BufferType = Uint8Array;
    export function isPE(buf: BufferType): boolean;
    export function isPE32(buf: BufferType): boolean;
    export function isPE64(buf: BufferType): boolean;
    export function isExe(buf: BufferType): boolean;
    export function isExe32(buf: BufferType): boolean;
    export function isExe64(buf: BufferType): boolean;
    export function isDll(buf: BufferType): boolean;
    export function isDll32(buf: BufferType): boolean;
    export function isDll64(buf: BufferType): boolean;
    export function isManagedPE(buf: BufferType): boolean;
    export function isManagedPE32(buf: BufferType): boolean;
    export function isManagedPE64(buf: BufferType): boolean;
    export function isManagedExe(buf: BufferType): boolean;
    export function isManagedExe32(buf: BufferType): boolean;
    export function isManagedExe64(buf: BufferType): boolean;
    export function isManagedDll(buf: BufferType): boolean;
    export function isManagedDll32(buf: BufferType): boolean;
    export function isManagedDll64(buf: BufferType): boolean;
}