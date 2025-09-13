import fs from "fs";
import path from "path";

export default function handler(req, res) {
    const filePath = path.join(process.cwd(), "ff.json"); // put your ff.json in /data

    try {
        const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        if (!Array.isArray(data) || data.length === 0) {
            return res.status(500).json({ error: "No facts available." });
        }

        const randomFact = data[Math.floor(Math.random() * data.length)];
        res.status(200).json({ fact: randomFact });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to read facts file." });
    }
}
