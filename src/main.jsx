import { createRoot } from 'react-dom/client'
import './index.css'
import FormHadling from './projects/FormHadling'
import { SpeedInsights } from "@vercel/speed-insights/next"
// import App from './App.jsx'
// import Counter from './projects/counter.jsx'
// import ColorChange from './projects/ColorChange.jsx'

createRoot(document.getElementById('root')).render(
    <>
    <FormHadling />
    </>
)
