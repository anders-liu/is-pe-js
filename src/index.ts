export type BufferType = Uint8Array;

export function isPE(buf: BufferType): boolean {
    return ((attr(buf) & IS_VALID) != 0);
}

export function isPE32(buf: BufferType): boolean {
    return ((attr(buf) & MASK_64) == IS_VALID);
}

export function isPE64(buf: BufferType): boolean {
    return ((attr(buf) & MASK_64) == MASK_64);
}

export function isExe(buf: BufferType): boolean {
    return ((attr(buf) & MASK_DLL) == IS_VALID);
}

export function isExe32(buf: BufferType): boolean {
    return ((attr(buf) & MASK_DLL_64) == IS_VALID);
}

export function isExe64(buf: BufferType): boolean {
    return ((attr(buf) & MASK_DLL_64) == MASK_64);
}

export function isDll(buf: BufferType): boolean {
    return ((attr(buf) & MASK_DLL) == MASK_DLL);
}

export function isDll32(buf: BufferType): boolean {
    return ((attr(buf) & MASK_DLL_64) == MASK_DLL);
}

export function isDll64(buf: BufferType): boolean {
    return ((attr(buf) & MASK_DLL_64) == MASK_DLL_64);
}

export function isManagedPE(buf: BufferType): boolean {
    return ((attr(buf) & MASK_MGD) == MASK_MGD);
}

export function isManagedPE32(buf: BufferType): boolean {
    return ((attr(buf) & MASK_MGD_64) == MASK_MGD);
}

export function isManagedPE64(buf: BufferType): boolean {
    return ((attr(buf) & MASK_MGD_64) == MASK_MGD_64);
}

export function isManagedExe(buf: BufferType): boolean {
    return ((attr(buf) & MASK_MGD_DLL) == MASK_MGD);
}

export function isManagedExe32(buf: BufferType): boolean {
    return ((attr(buf) & MASK_MGD_DLL_64) == MASK_MGD);
}

export function isManagedExe64(buf: BufferType): boolean {
    return ((attr(buf) & MASK_MGD_DLL_64) == MASK_MGD_64);
}

export function isManagedDll(buf: BufferType): boolean {
    return ((attr(buf) & MASK_MGD_DLL) == MASK_MGD_DLL);
}

export function isManagedDll32(buf: BufferType): boolean {
    return ((attr(buf) & MASK_MGD_DLL_64) == MASK_MGD_DLL);
}

export function isManagedDll64(buf: BufferType): boolean {
    return ((attr(buf) & MASK_MGD_DLL_64) == MASK_MGD_DLL_64);
}

const IS_VALID = 1;
const IS_DLL = 2;
const IS_64 = 4;
const IS_MGD = 8;

const MASK_DLL = IS_VALID | IS_DLL;
const MASK_DLL_64 = IS_VALID | IS_DLL | IS_64;
const MASK_64 = IS_VALID | IS_64;
const MASK_MGD = IS_VALID | IS_MGD;
const MASK_MGD_64 = IS_VALID | IS_MGD | IS_64;
const MASK_MGD_DLL = IS_VALID | IS_MGD | IS_DLL;
const MASK_MGD_DLL_64 = IS_VALID | IS_MGD | IS_DLL | IS_64;

function attr(buf: BufferType): number {
    let result = 0;

    // Basic checking.
    if (!buf || buf.byteLength < 0x40 /* PE signature @ 0x3C+4 */) {
        return 0;
    }

    // DOS signature.
    if (buf[0] != 0x4D || buf[1] != 0x5A) {
        return 0;
    }

    // PE signature.
    const peSigPtr = buf[0x3C] | (buf[0x3D] << 8) | (buf[0x3E] << 16) | (buf[0x3F] << 24);
    if (buf.byteLength < peSigPtr + 4) {
        return 0;
    }

    if (!(buf[peSigPtr] == 0x50 && buf[peSigPtr + 1] == 0x45 && buf[peSigPtr + 2] == 0 && buf[peSigPtr + 3] == 0)) {
        return 0;
    }

    // Characteristics
    const cPtr = peSigPtr + 22;
    if (buf.byteLength < peSigPtr + 2) {
        return 0;
    }

    const ch = buf[cPtr] | (buf[cPtr + 1] << 8);
    if (ch & 0x2000) {
        result |= IS_DLL;
    }

    // Magic number.
    const magicPtr = peSigPtr + 24;
    if (buf.byteLength < magicPtr + 2) {
        return 0;
    }

    if (buf[magicPtr] == 0x0B && buf[magicPtr + 1] == 0x01) {
        // 32-bit, nothing to set;
    } else if (buf[magicPtr] == 0x0B && buf[magicPtr + 1] == 0x02) {
        result |= IS_64;
    } else {
        return 0;
    }

    // Data directories.
    const optSzPtr = peSigPtr + 20;
    const optSz = buf[optSzPtr] | (buf[optSzPtr + 1] << 8);
    const optEnd = magicPtr + optSz;

    if (buf.byteLength < optEnd) {
        return 0;
    }

    const ddComPtr = optEnd - 16;
    if (buf[ddComPtr] != 0 || buf[ddComPtr + 1] != 0 || buf[ddComPtr + 2] != 0 || buf[ddComPtr + 3] != 0
        || buf[ddComPtr + 4] != 0 || buf[ddComPtr + 5] != 0 || buf[ddComPtr + 6] != 0 || buf[ddComPtr + 7] != 0) {
        result |= IS_MGD;
    }

    return result | IS_VALID;
}