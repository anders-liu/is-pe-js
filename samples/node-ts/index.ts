import * as fs from "fs";
import * as it from "is-pe";

if (process.argv.length !== 3) {
    console.log("Usage: node . <pe-file-path>");
    process.exit(1);
}

const file = fs.readFileSync(process.argv[2]);
const results = {
    isPE: it.isPE(file),
    isPE32: it.isPE32(file),
    isPE64: it.isPE64(file),
    isExe: it.isExe(file),
    isExe32: it.isExe32(file),
    isExe64: it.isExe64(file),
    isDll: it.isDll(file),
    isDll32: it.isDll32(file),
    isDll64: it.isDll64(file),
    isManagedPE: it.isManagedPE(file),
    isManagedPE32: it.isManagedPE32(file),
    isManagedPE64: it.isManagedPE64(file),
    isManagedExe: it.isManagedExe(file),
    isManagedExe32: it.isManagedExe32(file),
    isManagedExe64: it.isManagedExe64(file),
    isManagedDll: it.isManagedDll(file),
    isManagedDll32: it.isManagedDll32(file),
    isManagedDll64: it.isManagedDll64(file),
};

console.log(JSON.stringify(results, null, 4));
