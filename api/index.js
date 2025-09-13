import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

export default async function handler(req, res) {
  try {
    const route = req.url.split("?")[0].replace(/^\/api\/?/, "");
    const q = new URL(req.url, `http://${req.headers.host}`).searchParams.get("q") || "";

    const filePath = path.join(process.cwd(), "files", `${route}.js`);
    if (!fs.existsSync(filePath)) return res.status(404).json({ error: "Unknown endpoint" });

    const mod = await import(pathToFileURL(filePath).href);
    const fn = mod.default || mod; // <-- support both ESM & CommonJS
    if (typeof fn !== "function") return res.status(500).json({ error: "Module does not export a function" });

    if (fn.length >= 2) {
      return fn(req, res); // req,res style
    } else {
      const result = await fn(q); // q style
      return res.status(200).json(result);
    }

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
