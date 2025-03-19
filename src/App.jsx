import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './pages/NotFound';
import DashBoard from './pages/DashBoard';
import Home from './pages/Home';
import Ads from './pages/Ads';
import Events from './pages/Events';
import Settings from './pages/Settings';
import { Route, Router, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="container my-3">

      <Routes>
        {/* المسار الأساسي للوحة التحكم */}
        <Route path="/" element={<DashBoard />}>
          <Route index element={<Home />} />
          <Route path='/ads' element={<Ads />} />
          <Route path='/events' element={<Events />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='*' element={<NotFound />} />

        </Route>
      </Routes>
    </div>

  )
}

export default App
