/// <reference path="../def/is-pe.d.ts" />

import * as fs from "fs";
import * as it from "is-pe";

function loadFixture(name: string): Uint8Array {
    return fs.readFileSync(`./test/fixtures/${name}.FAKE_IMAGE`);
}

describe("is-pe tests", () => {
    const DLL_32 = loadFixture("DLL_32");
    const DLL_64 = loadFixture("DLL_64");
    const EXE_32 = loadFixture("EXE_32");
    const EXE_64 = loadFixture("EXE_64");
    const MGD_DLL_32 = loadFixture("MGD_DLL_32");
    const MGD_DLL_64 = loadFixture("MGD_DLL_64");
    const MGD_EXE_32 = loadFixture("MGD_EXE_32");
    const MGD_EXE_64 = loadFixture("MGD_EXE_64");

    // isPE
    test("isPE on DLL_32", () => { expect(it.isPE(DLL_32)).toBe(true); });
    test("isPE on DLL_64", () => { expect(it.isPE(DLL_64)).toBe(true); });
    test("isPE on EXE_32", () => { expect(it.isPE(EXE_32)).toBe(true); });
    test("isPE on EXE_64", () => { expect(it.isPE(EXE_64)).toBe(true); });
    test("isPE on MGD_DLL_32", () => { expect(it.isPE(MGD_DLL_32)).toBe(true); });
    test("isPE on MGD_DLL_64", () => { expect(it.isPE(MGD_DLL_64)).toBe(true); });
    test("isPE on MGD_EXE_32", () => { expect(it.isPE(MGD_EXE_32)).toBe(true); });
    test("isPE on MGD_EXE_64", () => { expect(it.isPE(MGD_EXE_64)).toBe(true); });

    // isPE32
    test("isPE32 on DLL_32", () => { expect(it.isPE32(DLL_32)).toBe(true); });
    test("isPE32 on DLL_64", () => { expect(it.isPE32(DLL_64)).toBe(false); });
    test("isPE32 on EXE_32", () => { expect(it.isPE32(EXE_32)).toBe(true); });
    test("isPE32 on EXE_64", () => { expect(it.isPE32(EXE_64)).toBe(false); });
    test("isPE32 on MGD_DLL_32", () => { expect(it.isPE32(MGD_DLL_32)).toBe(true); });
    test("isPE32 on MGD_DLL_64", () => { expect(it.isPE32(MGD_DLL_64)).toBe(false); });
    test("isPE32 on MGD_EXE_32", () => { expect(it.isPE32(MGD_EXE_32)).toBe(true); });
    test("isPE32 on MGD_EXE_64", () => { expect(it.isPE32(MGD_EXE_64)).toBe(false); });

    // isPE64
    test("isPE64 on DLL_32", () => { expect(it.isPE64(DLL_32)).toBe(false); });
    test("isPE64 on DLL_64", () => { expect(it.isPE64(DLL_64)).toBe(true); });
    test("isPE64 on EXE_32", () => { expect(it.isPE64(EXE_32)).toBe(false); });
    test("isPE64 on EXE_64", () => { expect(it.isPE64(EXE_64)).toBe(true); });
    test("isPE64 on MGD_DLL_32", () => { expect(it.isPE64(MGD_DLL_32)).toBe(false); });
    test("isPE64 on MGD_DLL_64", () => { expect(it.isPE64(MGD_DLL_64)).toBe(true); });
    test("isPE64 on MGD_EXE_32", () => { expect(it.isPE64(MGD_EXE_32)).toBe(false); });
    test("isPE64 on MGD_EXE_64", () => { expect(it.isPE64(MGD_EXE_64)).toBe(true); });

    // isExe
    test("isExe on DLL_32", () => { expect(it.isExe(DLL_32)).toBe(false); });
    test("isExe on DLL_64", () => { expect(it.isExe(DLL_64)).toBe(false); });
    test("isExe on EXE_32", () => { expect(it.isExe(EXE_32)).toBe(true); });
    test("isExe on EXE_64", () => { expect(it.isExe(EXE_64)).toBe(true); });
    test("isExe on MGD_DLL_32", () => { expect(it.isExe(MGD_DLL_32)).toBe(false); });
    test("isExe on MGD_DLL_64", () => { expect(it.isExe(MGD_DLL_64)).toBe(false); });
    test("isExe on MGD_EXE_32", () => { expect(it.isExe(MGD_EXE_32)).toBe(true); });
    test("isExe on MGD_EXE_64", () => { expect(it.isExe(MGD_EXE_64)).toBe(true); });

    // isExe32
    test("isExe32 on DLL_32", () => { expect(it.isExe32(DLL_32)).toBe(false); });
    test("isExe32 on DLL_64", () => { expect(it.isExe32(DLL_64)).toBe(false); });
    test("isExe32 on EXE_32", () => { expect(it.isExe32(EXE_32)).toBe(true); });
    test("isExe32 on EXE_64", () => { expect(it.isExe32(EXE_64)).toBe(false); });
    test("isExe32 on MGD_DLL_32", () => { expect(it.isExe32(MGD_DLL_32)).toBe(false); });
    test("isExe32 on MGD_DLL_64", () => { expect(it.isExe32(MGD_DLL_64)).toBe(false); });
    test("isExe32 on MGD_EXE_32", () => { expect(it.isExe32(MGD_EXE_32)).toBe(true); });
    test("isExe32 on MGD_EXE_64", () => { expect(it.isExe32(MGD_EXE_64)).toBe(false); });

    // isExe64
    test("isExe64 on DLL_32", () => { expect(it.isExe64(DLL_32)).toBe(false); });
    test("isExe64 on DLL_64", () => { expect(it.isExe64(DLL_64)).toBe(false); });
    test("isExe64 on EXE_32", () => { expect(it.isExe64(EXE_32)).toBe(false); });
    test("isExe64 on EXE_64", () => { expect(it.isExe64(EXE_64)).toBe(true); });
    test("isExe64 on MGD_DLL_32", () => { expect(it.isExe64(MGD_DLL_32)).toBe(false); });
    test("isExe64 on MGD_DLL_64", () => { expect(it.isExe64(MGD_DLL_64)).toBe(false); });
    test("isExe64 on MGD_EXE_32", () => { expect(it.isExe64(MGD_EXE_32)).toBe(false); });
    test("isExe64 on MGD_EXE_64", () => { expect(it.isExe64(MGD_EXE_64)).toBe(true); });

    // isDll
    test("isDll on DLL_32", () => { expect(it.isDll(DLL_32)).toBe(true); });
    test("isDll on DLL_64", () => { expect(it.isDll(DLL_64)).toBe(true); });
    test("isDll on EXE_32", () => { expect(it.isDll(EXE_32)).toBe(false); });
    test("isDll on EXE_64", () => { expect(it.isDll(EXE_64)).toBe(false); });
    test("isDll on MGD_DLL_32", () => { expect(it.isDll(MGD_DLL_32)).toBe(true); });
    test("isDll on MGD_DLL_64", () => { expect(it.isDll(MGD_DLL_64)).toBe(true); });
    test("isDll on MGD_EXE_32", () => { expect(it.isDll(MGD_EXE_32)).toBe(false); });
    test("isDll on MGD_EXE_64", () => { expect(it.isDll(MGD_EXE_64)).toBe(false); });

    // isPE
    test("isPE on DLL_32", () => { expect(it.isPE(DLL_32)).toBe(true); });
    test("isPE on DLL_64", () => { expect(it.isPE(DLL_64)).toBe(true); });
    test("isPE on EXE_32", () => { expect(it.isPE(EXE_32)).toBe(true); });
    test("isPE on EXE_64", () => { expect(it.isPE(EXE_64)).toBe(true); });
    test("isPE on MGD_DLL_32", () => { expect(it.isPE(MGD_DLL_32)).toBe(true); });
    test("isPE on MGD_DLL_64", () => { expect(it.isPE(MGD_DLL_64)).toBe(true); });
    test("isPE on MGD_EXE_32", () => { expect(it.isPE(MGD_EXE_32)).toBe(true); });
    test("isPE on MGD_EXE_64", () => { expect(it.isPE(MGD_EXE_64)).toBe(true); });

    // isDll32
    test("isDll32 on DLL_32", () => { expect(it.isDll32(DLL_32)).toBe(true); });
    test("isDll32 on DLL_64", () => { expect(it.isDll32(DLL_64)).toBe(false); });
    test("isDll32 on EXE_32", () => { expect(it.isDll32(EXE_32)).toBe(false); });
    test("isDll32 on EXE_64", () => { expect(it.isDll32(EXE_64)).toBe(false); });
    test("isDll32 on MGD_DLL_32", () => { expect(it.isDll32(MGD_DLL_32)).toBe(true); });
    test("isDll32 on MGD_DLL_64", () => { expect(it.isDll32(MGD_DLL_64)).toBe(false); });
    test("isDll32 on MGD_EXE_32", () => { expect(it.isDll32(MGD_EXE_32)).toBe(false); });
    test("isDll32 on MGD_EXE_64", () => { expect(it.isDll32(MGD_EXE_64)).toBe(false); });

    // isDll64
    test("isDll64 on DLL_32", () => { expect(it.isDll64(DLL_32)).toBe(false); });
    test("isDll64 on DLL_64", () => { expect(it.isDll64(DLL_64)).toBe(true); });
    test("isDll64 on EXE_32", () => { expect(it.isDll64(EXE_32)).toBe(false); });
    test("isDll64 on EXE_64", () => { expect(it.isDll64(EXE_64)).toBe(false); });
    test("isDll64 on MGD_DLL_32", () => { expect(it.isDll64(MGD_DLL_32)).toBe(false); });
    test("isDll64 on MGD_DLL_64", () => { expect(it.isDll64(MGD_DLL_64)).toBe(true); });
    test("isDll64 on MGD_EXE_32", () => { expect(it.isDll64(MGD_EXE_32)).toBe(false); });
    test("isDll64 on MGD_EXE_64", () => { expect(it.isDll64(MGD_EXE_64)).toBe(false); });

    // isManagedPE
    test("isManagedPE on DLL_32", () => { expect(it.isManagedPE(DLL_32)).toBe(false); });
    test("isManagedPE on DLL_64", () => { expect(it.isManagedPE(DLL_64)).toBe(false); });
    test("isManagedPE on EXE_32", () => { expect(it.isManagedPE(EXE_32)).toBe(false); });
    test("isManagedPE on EXE_64", () => { expect(it.isManagedPE(EXE_64)).toBe(false); });
    test("isManagedPE on MGD_DLL_32", () => { expect(it.isManagedPE(MGD_DLL_32)).toBe(true); });
    test("isManagedPE on MGD_DLL_64", () => { expect(it.isManagedPE(MGD_DLL_64)).toBe(true); });
    test("isManagedPE on MGD_EXE_32", () => { expect(it.isManagedPE(MGD_EXE_32)).toBe(true); });
    test("isManagedPE on MGD_EXE_64", () => { expect(it.isManagedPE(MGD_EXE_64)).toBe(true); });

    // isManagedPE32
    test("isManagedPE32 on DLL_32", () => { expect(it.isManagedPE32(DLL_32)).toBe(false); });
    test("isManagedPE32 on DLL_64", () => { expect(it.isManagedPE32(DLL_64)).toBe(false); });
    test("isManagedPE32 on EXE_32", () => { expect(it.isManagedPE32(EXE_32)).toBe(false); });
    test("isManagedPE32 on EXE_64", () => { expect(it.isManagedPE32(EXE_64)).toBe(false); });
    test("isManagedPE32 on MGD_DLL_32", () => { expect(it.isManagedPE32(MGD_DLL_32)).toBe(true); });
    test("isManagedPE32 on MGD_DLL_64", () => { expect(it.isManagedPE32(MGD_DLL_64)).toBe(false); });
    test("isManagedPE32 on MGD_EXE_32", () => { expect(it.isManagedPE32(MGD_EXE_32)).toBe(true); });
    test("isManagedPE32 on MGD_EXE_64", () => { expect(it.isManagedPE32(MGD_EXE_64)).toBe(false); });

    // isManagedPE64
    test("isManagedPE64 on DLL_32", () => { expect(it.isManagedPE64(DLL_32)).toBe(false); });
    test("isManagedPE64 on DLL_64", () => { expect(it.isManagedPE64(DLL_64)).toBe(false); });
    test("isManagedPE64 on EXE_32", () => { expect(it.isManagedPE64(EXE_32)).toBe(false); });
    test("isManagedPE64 on EXE_64", () => { expect(it.isManagedPE64(EXE_64)).toBe(false); });
    test("isManagedPE64 on MGD_DLL_32", () => { expect(it.isManagedPE64(MGD_DLL_32)).toBe(false); });
    test("isManagedPE64 on MGD_DLL_64", () => { expect(it.isManagedPE64(MGD_DLL_64)).toBe(true); });
    test("isManagedPE64 on MGD_EXE_32", () => { expect(it.isManagedPE64(MGD_EXE_32)).toBe(false); });
    test("isManagedPE64 on MGD_EXE_64", () => { expect(it.isManagedPE64(MGD_EXE_64)).toBe(true); });

    // isManagedExe
    test("isManagedExe on DLL_32", () => { expect(it.isManagedExe(DLL_32)).toBe(false); });
    test("isManagedExe on DLL_64", () => { expect(it.isManagedExe(DLL_64)).toBe(false); });
    test("isManagedExe on EXE_32", () => { expect(it.isManagedExe(EXE_32)).toBe(false); });
    test("isManagedExe on EXE_64", () => { expect(it.isManagedExe(EXE_64)).toBe(false); });
    test("isManagedExe on MGD_DLL_32", () => { expect(it.isManagedExe(MGD_DLL_32)).toBe(false); });
    test("isManagedExe on MGD_DLL_64", () => { expect(it.isManagedExe(MGD_DLL_64)).toBe(false); });
    test("isManagedExe on MGD_EXE_32", () => { expect(it.isManagedExe(MGD_EXE_32)).toBe(true); });
    test("isManagedExe on MGD_EXE_64", () => { expect(it.isManagedExe(MGD_EXE_64)).toBe(true); });

    // isManagedExe32
    test("isManagedExe32 on DLL_32", () => { expect(it.isManagedExe32(DLL_32)).toBe(false); });
    test("isManagedExe32 on DLL_64", () => { expect(it.isManagedExe32(DLL_64)).toBe(false); });
    test("isManagedExe32 on EXE_32", () => { expect(it.isManagedExe32(EXE_32)).toBe(false); });
    test("isManagedExe32 on EXE_64", () => { expect(it.isManagedExe32(EXE_64)).toBe(false); });
    test("isManagedExe32 on MGD_DLL_32", () => { expect(it.isManagedExe32(MGD_DLL_32)).toBe(false); });
    test("isManagedExe32 on MGD_DLL_64", () => { expect(it.isManagedExe32(MGD_DLL_64)).toBe(false); });
    test("isManagedExe32 on MGD_EXE_32", () => { expect(it.isManagedExe32(MGD_EXE_32)).toBe(true); });
    test("isManagedExe32 on MGD_EXE_64", () => { expect(it.isManagedExe32(MGD_EXE_64)).toBe(false); });

    // isManagedExe64
    test("isManagedExe64 on DLL_32", () => { expect(it.isManagedExe64(DLL_32)).toBe(false); });
    test("isManagedExe64 on DLL_64", () => { expect(it.isManagedExe64(DLL_64)).toBe(false); });
    test("isManagedExe64 on EXE_32", () => { expect(it.isManagedExe64(EXE_32)).toBe(false); });
    test("isManagedExe64 on EXE_64", () => { expect(it.isManagedExe64(EXE_64)).toBe(false); });
    test("isManagedExe64 on MGD_DLL_32", () => { expect(it.isManagedExe64(MGD_DLL_32)).toBe(false); });
    test("isManagedExe64 on MGD_DLL_64", () => { expect(it.isManagedExe64(MGD_DLL_64)).toBe(false); });
    test("isManagedExe64 on MGD_EXE_32", () => { expect(it.isManagedExe64(MGD_EXE_32)).toBe(false); });
    test("isManagedExe64 on MGD_EXE_64", () => { expect(it.isManagedExe64(MGD_EXE_64)).toBe(true); });

    // isManagedDll
    test("isManagedDll on DLL_32", () => { expect(it.isManagedDll(DLL_32)).toBe(false); });
    test("isManagedDll on DLL_64", () => { expect(it.isManagedDll(DLL_64)).toBe(false); });
    test("isManagedDll on EXE_32", () => { expect(it.isManagedDll(EXE_32)).toBe(false); });
    test("isManagedDll on EXE_64", () => { expect(it.isManagedDll(EXE_64)).toBe(false); });
    test("isManagedDll on MGD_DLL_32", () => { expect(it.isManagedDll(MGD_DLL_32)).toBe(true); });
    test("isManagedDll on MGD_DLL_64", () => { expect(it.isManagedDll(MGD_DLL_64)).toBe(true); });
    test("isManagedDll on MGD_EXE_32", () => { expect(it.isManagedDll(MGD_EXE_32)).toBe(false); });
    test("isManagedDll on MGD_EXE_64", () => { expect(it.isManagedDll(MGD_EXE_64)).toBe(false); });

    // isManagedDll32
    test("isManagedDll32 on DLL_32", () => { expect(it.isManagedDll32(DLL_32)).toBe(false); });
    test("isManagedDll32 on DLL_64", () => { expect(it.isManagedDll32(DLL_64)).toBe(false); });
    test("isManagedDll32 on EXE_32", () => { expect(it.isManagedDll32(EXE_32)).toBe(false); });
    test("isManagedDll32 on EXE_64", () => { expect(it.isManagedDll32(EXE_64)).toBe(false); });
    test("isManagedDll32 on MGD_DLL_32", () => { expect(it.isManagedDll32(MGD_DLL_32)).toBe(true); });
    test("isManagedDll32 on MGD_DLL_64", () => { expect(it.isManagedDll32(MGD_DLL_64)).toBe(false); });
    test("isManagedDll32 on MGD_EXE_32", () => { expect(it.isManagedDll32(MGD_EXE_32)).toBe(false); });
    test("isManagedDll32 on MGD_EXE_64", () => { expect(it.isManagedDll32(MGD_EXE_64)).toBe(false); });

    // isManagedDll64
    test("isManagedDll64 on DLL_32", () => { expect(it.isManagedDll64(DLL_32)).toBe(false); });
    test("isManagedDll64 on DLL_64", () => { expect(it.isManagedDll64(DLL_64)).toBe(false); });
    test("isManagedDll64 on EXE_32", () => { expect(it.isManagedDll64(EXE_32)).toBe(false); });
    test("isManagedDll64 on EXE_64", () => { expect(it.isManagedDll64(EXE_64)).toBe(false); });
    test("isManagedDll64 on MGD_DLL_32", () => { expect(it.isManagedDll64(MGD_DLL_32)).toBe(false); });
    test("isManagedDll64 on MGD_DLL_64", () => { expect(it.isManagedDll64(MGD_DLL_64)).toBe(true); });
    test("isManagedDll64 on MGD_EXE_32", () => { expect(it.isManagedDll64(MGD_EXE_32)).toBe(false); });
    test("isManagedDll64 on MGD_EXE_64", () => { expect(it.isManagedDll64(MGD_EXE_64)).toBe(false); });
});