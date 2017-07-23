# is-pe-js
A JavaScript/Node.js module to check whether a given buffer is *potentially* in PE (Portable Executable) format, and to check some basic information, for example, is it exe or dll? Is it 32-bit or 64-bit? Is it managed (Microsoft .NET executable)?

> **Note**, this lib only checks some key points against a PE file, and even one of the APIs returns `true`, it only means such file is *potentially* in PE format; there might be certain files that pass these key points check but is *not* a valid PE file.
>
> And, there're certain tricky exe file can be very very tiny, they may reduce file size by overlapping PE header and DOS header and pruning many unnecessary structures; through these files are 'runnable' exe files, the APIs return `false` against them.

## Build and Test

* Build source codes and tests: `gulp` and check output at `./out/built`
* Build npm package: `gulp dist` and check output at `./out/dist`
* Clean up all outputs: `gulp clean`
* Run tests: `npm test` or `jest`