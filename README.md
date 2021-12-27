# ipfsio

> a simple library to write to nft.storage

```javascript
const { I } = require('ipfsio')
const i = new I(<nft.storage key>)
await i.url("https://imgur.com/sdfsdf")        // Import file from HTTP URL
await i.object({                               // Write object
  name: "gm",
  description: "hello world"
})
await i.buffer(Buffer.from("fdadsfadsfasdf"))  // Write buffer
await i.file(filePath)                         // Write file at path
await i.folder(folderPath)                     // Write folder at path
```
