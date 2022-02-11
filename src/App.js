import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, About } from './pages';

const App = () => {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '85vh' }} className="container mx-auto py-4 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
