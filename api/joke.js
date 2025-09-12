import fs from "fs"
import path from "path"

export default async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "reddit_jokes.json")
    const stat = fs.statSync(filePath)
    const fileSize = stat.size

    // pick a random start offset, leave margin to avoid trailing ']'
    const offset = Math.floor(Math.random() * (fileSize - 1024 * 1024))

    const fd = fs.openSync(filePath, "r")
    const buffer = Buffer.alloc(1024 * 1024) // 1 MB
    fs.readSync(fd, buffer, 0, buffer.length, offset)
    fs.closeSync(fd)

    const chunk = buffer.toString("utf-8")

    // find first { after our offset
    const start = chunk.indexOf("{")
    // find closing } after that
    const end = chunk.indexOf("}", start)

    if (start === -1 || end === -1) {
      return res.status(500).json({ error: "could not locate full object" })
    }

    // try to parse just that one object
    const rawObj = chunk.slice(start, end + 1)

    let joke
    try {
      joke = JSON.parse(rawObj)
    } catch (e) {
      console.error("parse failed", e)
      return res.status(500).json({ error: "failed to parse object" })
    }

    res.status(200).json(joke)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "unexpected error" })
  }
}
