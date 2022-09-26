import './App.scss';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground'
function App() {
  return (
    <div className='App'><ParticlesBackground/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
