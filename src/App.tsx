import { useState, useEffect } from 'react';
import { TimeLeft } from './types/TimeLeft';

// birthday를 컴포넌트 바깥에 상수로 정의합니다.
const BIRTHDAY = new Date('2024-03-24').getTime();

function App() {
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const diff = BIRTHDAY - now;

    return {
      daysLeft: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hoursLeft: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutesLeft: Math.floor((diff / 1000 / 60) % 60),
      secondsLeft: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
      <>
        <div>
          <p>2024년 3월 24일까지 얼마나 남았냐면요...</p>
          <p className="text-center">{timeLeft.daysLeft} 일 {timeLeft.hoursLeft} 시간 {timeLeft.minutesLeft} 분 {timeLeft.secondsLeft} 초</p>
        </div>
      </>
  );
}

export default App;
