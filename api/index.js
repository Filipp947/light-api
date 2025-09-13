import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const { pathname, searchParams } = new URL(req.url, `http://${req.headers.host}`);
  const route = pathname.replace(/^\/api\/?/, ""); // e.g. "ttm"
  const q = searchParams.get("q") || "";

  try {
    const filePath = path.join(process.cwd(), "files", `${route}.js`);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "unknown endpoint sowwy :/" });
    }

    const mod = await import(`../../files/${route}.js`);
    const result = await mod.default(q);
    res.status(200).json(result);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
