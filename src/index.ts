export type BufferType = Uint8Array;

export function isPE(buf: BufferType): boolean {
    return true;
}

export function isPE32(buf: BufferType): boolean {
    return true;
}

export function isPE64(buf: BufferType): boolean {
    return true;
}

export function isExe(buf: BufferType): boolean {
    return true;
}

export function isExe32(buf: BufferType): boolean {
    return true;
}

export function isExe64(buf: BufferType): boolean {
    return true;
}

export function isDll(buf: BufferType): boolean {
    return true;
}

export function isDll32(buf: BufferType): boolean {
    return true;
}

export function isDll64(buf: BufferType): boolean {
    return true;
}

export function isManagedPE(buf: BufferType): boolean {
    return true;
}

export function isManagedPE32(buf: BufferType): boolean {
    return true;
}

export function isManagedPE64(buf: BufferType): boolean {
    return true;
}

export function isManagedExe(buf: BufferType): boolean {
    return true;
}

export function isManagedExe32(buf: BufferType): boolean {
    return true;
}

export function isManagedExe64(buf: BufferType): boolean {
    return true;
}

export function isManagedDll(buf: BufferType): boolean {
    return true;
}

export function isManagedDll32(buf: BufferType): boolean {
    return true;
}

export function isManagedDll64(buf: BufferType): boolean {
    return true;
}

const enum PEAttr {
    INVALID = 0,
    IS_VALID = 1,
    IS_DLL = 2,
    IS_64 = 4,
    IS_MGD = 8,
}

function getAttr(buf: BufferType): PEAttr {
    // Basic checking.
    if (!buf || buf.byteLength < 0x40 /* PE signature @ 0x3C+4 */) {
        return PEAttr.INVALID;
    }

    // DOS signature.
    if (buf[0] != 0x4D || buf[1] != 0x5A) {
        return PEAttr.INVALID;
    }

    // PE signature.
    const pe_ptr = buf[0x3C] | buf[0x3D] << 8 | buf[0x3E] << 16 | buf[0x3F] << 24;
    if (buf.byteLength < pe_ptr + 4) {
        return PEAttr.INVALID;
    }

    if (buf[pe_ptr] != 0x50 || buf[pe_ptr + 1] != 0x45 || buf[pe_ptr + 2] != 0 || buf[pe_ptr + 3] != 0) {
        return PEAttr.INVALID;
    }

    return 0;
}