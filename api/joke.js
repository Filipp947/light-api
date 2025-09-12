import fs from "fs"
import path from "path"

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "reddit_jokes.json")
  const stream = fs.createReadStream(filePath, { encoding: "utf-8" })

  let buffer = ""
  const objects = []
  let depth = 0
  let start = -1

  stream.on("data", chunk => {
    buffer += chunk

    for (let i = 0; i < buffer.length; i++) {
      const c = buffer[i]

      if (c === "{") {
        if (depth === 0) start = i
        depth++
      } else if (c === "}") {
        depth--
        if (depth === 0 && start !== -1) {
          const raw = buffer.slice(start, i + 1)
          try {
            const obj = JSON.parse(raw)
            objects.push(obj)
          } catch {
            // ignore invalid objects
          }
          start = -1
        }
      }
    }

    // keep only the last incomplete part in buffer
    buffer = depth > 0 && start !== -1 ? buffer.slice(start) : ""
  })

  stream.on("end", () => {
    if (objects.length === 0) {
      return res.status(500).json({ error: "no objects found" })
    }
    const randomJoke = objects[Math.floor(Math.random() * objects.length)]
    res.status(200).json(randomJoke)
  })

  stream.on("error", err => {
    console.error(err)
    res.status(500).json({ error: "failed to read file" })
  })
}
