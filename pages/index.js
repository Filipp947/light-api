import { useState } from "react"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

// put your endpoints here
const endpoints = [
  { name: "Jokes", url: "/api/jokes" },
  { name: "Quotes", url: "/api/quotes" },
  { name: "Facts", url: "/api/facts" },
  { name: "Horoscope", url: "/api/horoscope" },
]

export default function Home() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-black to-purple-950 text-white flex flex-col items-center p-6">
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Cosmic API
        </h1>
        <p className="mt-3 text-lg text-gray-300 flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-400" />
          Explore the universe of endpoints
        </p>
      </motion.div>

      {/* endpoint buttons */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {endpoints.map((ep, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelected(ep)}
            className="p-6 rounded-2xl bg-gradient-to-br from-indigo-800/40 to-purple-800/40 border border-indigo-500/30 hover:border-purple-400/50 transition shadow-lg"
          >
            <h2 className="text-xl font-bold">{ep.name}</h2>
            <p className="mt-2 text-sm text-gray-400">{ep.url}</p>
          </motion.button>
        ))}
      </div>

      {/* selected endpoint preview */}
      {selected && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 p-6 max-w-2xl w-full rounded-2xl bg-black/40 border border-purple-500/30 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-2">{selected.name}</h3>
          <p className="text-gray-300">Endpoint: <span className="text-purple-300">{selected.url}</span></p>
          <pre className="mt-4 p-3 bg-black/60 rounded-lg text-sm overflow-x-auto text-gray-200">
            fetch('{selected.url}')
            .then(r => r.json())
            .then(console.log)
          </pre>
        </motion.div>
      )}

      {/* footer */}
      <footer className="mt-16 text-gray-500 text-sm">
        ✦ Powered by the cosmos ✦
      </footer>
    </div>
  )
}
