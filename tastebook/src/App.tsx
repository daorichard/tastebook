import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import RecipeLandingPage from './pages/recipe-landing-page';
import AuthPages from './pages/Auth';
function App() {
  return (
    <Routes>
      <Route path="/" element={<RecipeLandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/auth" element={<AuthPages />} />
    </Routes>
  );
}

export default App;
