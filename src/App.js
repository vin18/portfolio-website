import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import { Header, Footer } from './components';

const App = () => {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '85vh' }} className="container mx-auto py-4 ">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
