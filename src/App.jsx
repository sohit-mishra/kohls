import { Routes ,Route } from 'react-router-dom'
import Home from './component/Home';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
