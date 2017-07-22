# is-pe-js
A JavaScript/Node.js module to check whether a given buffer is in PE (Portable Executable) format, and to check some basic information, for example, is it exe or dll? Is it 32-bit or 64-bit? Is it managed (Microsoft .NET executable)?

## Build and Test

* Build source codes and tests: `gulp` and check output at `./out/built`
* Build npm package: `gulp dist` and check output at `./out/dist`
* Clean up all outputs: `gulp clean`
* Run tests: `npm test` or `jest`