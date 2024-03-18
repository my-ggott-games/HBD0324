import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TimeLeft } from '../types/TimeLeft';

const BIRTHDAY = new Date('2024-03-24').getTime();

const CountDownPage = () => {
    const navigate = useNavigate();

    const [remainingSeconds, setRemainingSeconds] = useState(() => Math.floor((BIRTHDAY - new Date().getTime()) / 1000));

    const calculateTimeLeft = (): TimeLeft => {
        const seconds = remainingSeconds % 60;
        const minutes = Math.floor(remainingSeconds / 60) % 60;
        const hours = Math.floor(remainingSeconds / 3600) % 24;
        const days = Math.floor(remainingSeconds / (3600 * 24));

        return {
            daysLeft: days,
            hoursLeft: hours,
            minutesLeft: minutes,
            secondsLeft: seconds,
        };
    };

    useEffect(() => {
        if (remainingSeconds <= 0) {
            navigate('/happy-birthday');
            return;
        }

        const interval = setInterval(() => {
            setRemainingSeconds(seconds => seconds - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [remainingSeconds, navigate]);

    const skipTimeLeft = () => {
        setRemainingSeconds(3);
    };

    const timeLeft = calculateTimeLeft();

    return (
        <div className="w-screen flex flex-col justify-center items-center mx-auto text-center gap-4">
            <p className="font-pyeongchang-bold text-5xl">
                2024년<br/>
                3월 24일까지<br/>
                앞으로
            </p>
            <p className="font-pyeongchang-light text-2xl">{timeLeft.daysLeft} 일 {timeLeft.hoursLeft} 시간 {timeLeft.minutesLeft} 분 {timeLeft.secondsLeft} 초</p>
            <button onClick={skipTimeLeft}>Skip!</button>
        </div>
    );
};

export default CountDownPage;
