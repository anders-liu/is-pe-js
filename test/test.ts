/// <reference path="../def/is-pe.d.ts" />

import * as IT from "is-pe";

describe("is-pe tests", () => {
    test("isPE: SimpleExe", () => {
        expect(IT.isPE(new Buffer(1))).toBe(true);
    });
});