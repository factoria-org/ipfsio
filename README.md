# ipfsio

> a simple library to write to nft.storage

```javascript
const { I } = require('ipfsio')
const ipfs = new IPFSIO(<nft.storage key>)
await ipfs.url("https://imgur.com/sdfsdf")        // Import file from HTTP URL
await ipfs.object({                               // Write objec
  name: "gm",
  description: "hello world"
})
await ipfs.buffer(Buffer.from("fdadsfadsfasdf"))  // Write buffer
await ipfs.file(filePath)                         // Write file at path
await ipfs.folder(folderPath)                     // Write folder at path
```
