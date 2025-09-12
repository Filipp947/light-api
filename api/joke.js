import fs from "fs"
import path from "path"

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "reddit_jokes.json")
    const data = fs.readFileSync(filePath, "utf-8")
    const jokes = JSON.parse(data)

    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
    res.status(200).json(randomJoke)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "failed to load joke" })
  }
}
