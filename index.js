const { NFTStorage, Blob, File } = require('nft.storage')
const fs = require('fs')
const path = require('path')
/////////////////////////////////////////////////////////////////////////////
//
// const { I } = require('ipfsio')
// const ipfs = new IPFSIO(<nft.storage key>)
// await ipfs.url("https://imgur.com/sdfsdf")
// await ipfs.object({ name: "gm", description: "hello world" })
// await ipfs.buffer(Buffer.from("fdadsfadsfasdf"))
// await ipfs.file(filePath)
// await ipfs.folder(folderPath)
//
/////////////////////////////////////////////////////////////////////////////
class I {
  constructor(key) {
    this.storage = new NFTStorage({ token: key })
  }
  async url(url) {
    const { data, headers } = await axios({
      method: 'get',
      url: url,
      responseType: 'arraybuffer'
    }).then((r) => {
      return Buffer.from(r.data)
    })
    const cid = await this.storage.storeBlob(new Blob([data]))
    return cid
  }
  async object(o) {
    const data = Buffer.from(JSON.stringify(o, null, 2))
    const cid = await this.buffer(data)
    return cid
  }
  async buffer(b) {
    const cid = await this.storage.storeBlob(new Blob([b]))
    return cid
  }
  async file(filePath) {
    const data = await fs.promises.readFile(filePath)
    const cid = await this.storage.storeBlob(new Blob([data]))
    return cid
  }
  async folder(folderPath) {
    const filelist = await fs.promises.readdir(folderPath)
    const files = []
    for(let f of filelist) {
      files.push(new File([await fs.promises.readFile(path.resolve(folderPath, f))], f))
    }
    const cid = await this.storage.storeDirectory(files)
    return cid
  }
}
module.exports = { I }
