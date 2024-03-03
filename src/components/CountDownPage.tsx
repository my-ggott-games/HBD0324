import { useState, useEffect } from 'react';
import { TimeLeft } from '../types/TimeLeft';
import { useNavigate } from 'react-router-dom';

const BIRTHDAY = new Date('2024-03-24').getTime();

const CountDownPage = () => {
    const navigate = useNavigate();
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
            const newTimeLeft = calculateTimeLeft();
            setTimeLeft(calculateTimeLeft());

            if (newTimeLeft.daysLeft === 0 && newTimeLeft.hoursLeft === 0 && newTimeLeft.minutesLeft === 0 && newTimeLeft.secondsLeft === 0) {
                navigate('/happy-birthday'); // '/happy-birthday' 경로로 이동합니다.
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p>2024년 3월 24일까지 얼마나 남았냐면요...</p>
            <p className="text-center">{timeLeft.daysLeft} 일 {timeLeft.hoursLeft} 시간 {timeLeft.minutesLeft} 분 {timeLeft.secondsLeft} 초</p>
        </div>
    );
};

export default CountDownPage;
