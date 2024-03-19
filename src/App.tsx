import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountDownPage from './components/CountDownPage';
import BirthdayPage from './components/BirthdayPage';

function App() {
  return (
      <div className="bg-periwinkle h-screen flex flex-col justify-center items-center mx-auto text-center select-none">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CountDownPage />} />
          <Route path="/happy-birthday" element={<BirthdayPage />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
