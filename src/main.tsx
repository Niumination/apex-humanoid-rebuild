import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { pasangReducedMotion } from './lib/a11y'

// StrictMode sengaja TIDAK dipakai: bundle produksi hanya mount sekali. Di dev,
// StrictMode menjalankan effect dua kali → AudioContext + cue audio ganda
// (250 vs 125 osilator) yang membuat gerbang langkah 4 gagal palsu.
pasangReducedMotion()

// Landmark + judul tingkat-1 untuk pembaca layar. Keduanya tidak mengubah tata letak:
// #root sudah `position: fixed; inset: 0`, dan <main> memakai kotak yang sama.
createRoot(document.getElementById('root')!).render(
  <main style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }}>
    <h1 className="sr-only">Apex Humanoid</h1>
    <App />
  </main>
)
