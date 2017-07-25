import * as it from "is-pe";

export function handleFileInputChange(files: FileList | null) {
    if (!files || files.length == 0)
        return;

    const msg = document.getElementById("msg");
    msg && (msg.innerHTML = "");

    const reader = new FileReader();

    reader.onload = function (evt: Event) {
        const fileData = this.result;
        const buffer = new Uint8Array(fileData);

        const results: any = {
            isPE: it.isPE(buffer),
            isPE32: it.isPE32(buffer),
            isPE64: it.isPE64(buffer),
            isExe: it.isExe(buffer),
            isExe32: it.isExe32(buffer),
            isExe64: it.isExe64(buffer),
            isDll: it.isDll(buffer),
            isDll32: it.isDll32(buffer),
            isDll64: it.isDll64(buffer),
            isManagedPE: it.isManagedPE(buffer),
            isManagedPE32: it.isManagedPE32(buffer),
            isManagedPE64: it.isManagedPE64(buffer),
            isManagedExe: it.isManagedExe(buffer),
            isManagedExe32: it.isManagedExe32(buffer),
            isManagedExe64: it.isManagedExe64(buffer),
            isManagedDll: it.isManagedDll(buffer),
            isManagedDll32: it.isManagedDll32(buffer),
            isManagedDll64: it.isManagedDll64(buffer),
        };

        const table = msg && msg.appendChild(document.createElement("table"));
        for (const x of Object.getOwnPropertyNames(results)) {
            const row = table && table.appendChild(document.createElement("tr"));
            const tdKey = row && row.appendChild(document.createElement("td"));
            tdKey && (tdKey.innerText = x);
            const tdVal = row && row.appendChild(document.createElement("td"));
            tdVal && (tdVal.innerText = results[x]);
        }
    }
    reader.readAsArrayBuffer(files[0]);
}
