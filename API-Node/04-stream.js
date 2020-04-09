const fs = require('fs');
const zlib = require('zlib');

const rs = fs.createReadStream('./package.json');
const gzip = zlib.createGzip();
const ws = fs.createWriteStream('./package.json.zip');

// ReadStream : lecture seule
// WriteStream : écriture seule
// DuplexStream : lecture et écriture
// TransformStream: lecture -> transform -> écriture

rs.pipe(gzip).pipe(ws);
// cat package.json | gzip > ./package.json.copy
