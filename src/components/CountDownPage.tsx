import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TimeLeft } from '../types/TimeLeft';

const BIRTHDAY = new Date('2024-03-23T15:00:00Z').getTime();

const CountDownPage = () => {
    const navigate = useNavigate();

    const [remainingSeconds, setRemainingSeconds] = useState(() => Math.floor((BIRTHDAY - new Date().getTime()) / 1000));

    const calculateTimeLeft = (): TimeLeft => {
        const totalSeconds = Math.abs(remainingSeconds); // 음수 시간도 처리
        const seconds = totalSeconds % 60;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const days = Math.floor(totalSeconds / (3600 * 24));

        // 음수인 경우 '-' 표시를 추가
        const sign = remainingSeconds < 0 ? "-" : "";

        return {
            daysLeft: sign + days,
            hoursLeft: sign + hours,
            minutesLeft: sign + minutes,
            secondsLeft: sign + seconds,
        };
    };

    useEffect(() => {
        if (remainingSeconds == 0) {
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
        <div className="w-screen bg-white flex flex-col justify-center items-center mx-auto py-8 text-center select-none gap-4">
            <p className="text-5xl font-pyeongchang-bold">
                2024년<br/>
                3월 24일까지<br/>
                앞으로
            </p>
            <p className="font-pyeongchang-light text-2xl">{timeLeft.daysLeft} 일 {timeLeft.hoursLeft} 시간 {timeLeft.minutesLeft} 분 {timeLeft.secondsLeft} 초</p>
            <button className="font-pyeongchang-light focus:outline-none" onClick={skipTimeLeft}>생일 3초 전</button>
        </div>
    );
};

export default CountDownPage;
