// Readable Streams / Writable Streams

// No node toda porta de entrada e saída é uma streams

// stdin - streams de leitura 
// stdout - streams de escrita

// Streams -> 
// process.stdin
//   .pipe(process.stdout)

import { Readable, Writable, Transform } from "node:stream"

class MultiPlyByTenStream extends Writable {
  _write(chunk, encoding, callback){
    console.log(Number(chunk.toString()) * 10)
    callback()
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1

    callback(null, Buffer.from(String(transformed)))
  }
}

class OneToHundredStream extends Readable {
  index = 1
  
  _read() {
    const i = this.index++

    setTimeout(() => {
      if(i > 100) {
        this.push(null)
      }else {
        const buf = Buffer.from(String(i))
        this.push(buf)
      }
    }, 1000)

    
  }
}

new OneToHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiPlyByTenStream())