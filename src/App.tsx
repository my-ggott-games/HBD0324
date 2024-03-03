import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountDownPage from './components/CountDownPage';
import BirthdayPage from './components/BirthdayPage';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CountDownPage />} />
          <Route path="/birthday" element={<BirthdayPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
