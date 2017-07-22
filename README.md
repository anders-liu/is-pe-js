# is-pe-js
A JavaScript/Node.js module to check whether a given buffer is in PE (Portable Executable) format, and to check some basic information, for example, is it exe or dll? Is it 32-bit or 64-bit? Is it managed (Microsoft .NET executable)?

## Build and Test

### Prerequisites

For reducing workspace size, most dev dependencies should be installed globally.

- Basic Tools
    - **gulp**, for building.
    - **typescript**, for compiling TypeScript sources.
    - **webpack**, for packaging universal JavaScript module.
- Webpack Dependencies
    - **ts-loader**, for loading TypeScript sources.
    - **source-map-loader**, for loading and merging source maps.
- Gulp Dependencies
    - **gulp-webpack**, for calling webpack.
    - **gulp-json-editor**, for editing package.json.
    - **gulp-clean**, for cleaning output directory.
    - **merge2**, for merging multiple pipe streams.
