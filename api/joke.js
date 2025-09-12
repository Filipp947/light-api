import fs from "fs"
import path from "path"

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "reddit_jokes.json")
    const stat = fs.statSync(filePath)
    const fileSize = stat.size

    // pick a random offset, leaving 1 MB margin at the end
    const offset = Math.floor(Math.random() * (fileSize - 1024 * 1024))

    const fd = fs.openSync(filePath, "r")
    const buffer = Buffer.alloc(1024 * 1024) // 1 MB
    fs.readSync(fd, buffer, 0, buffer.length, offset)
    fs.closeSync(fd)

    const chunk = buffer.toString("utf-8")

    // extract all top-level objects in chunk
    let objs = []
    let depth = 0
    let start = -1

    for (let i = 0; i < chunk.length; i++) {
      const c = chunk[i]

      if (c === "{") {
        if (depth === 0) start = i
        depth++
      } else if (c === "}") {
        depth--
        if (depth === 0 && start !== -1) {
          const raw = chunk.slice(start, i + 1)
          try {
            const obj = JSON.parse(raw)
            objs.push(obj)
          } catch {
            // ignore broken objects
          }
          start = -1
        }
      }
    }

    

    // pick a truly random joke from the chunk
    const randomJoke = objs[Math.floor(Math.random() * objs.length)]
    res.status(200).json(randomJoke)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "unexpected error" })
  }
}
