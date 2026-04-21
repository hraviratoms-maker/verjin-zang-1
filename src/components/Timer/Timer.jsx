import { useEffect, useRef, useState } from 'react';
import './timer.css';

const Timer = () => {
    const [timerDays, setTimerDays] = useState("");
    const [timerHours, setTimerHours] = useState("");
    const [timerMinutes, setTimerMinutes] = useState("");
    const [timerSeconds, setTimerSeconds] = useState("");

    let initerval = useRef();

    const startTimer = () => {
        const countDownDate = new Date("May 22, 2026").getTime();

        initerval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(initerval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000)
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(initerval.current);
        }
    }, []);

    return (
        <div className="timer">
            <p className="tr">
                {timerDays < 10 ? "0" + timerDays : timerDays} | {timerHours < 10 ? "0" + timerHours : timerHours} | {timerMinutes < 10 ? "0" + timerMinutes : timerMinutes} | {timerSeconds < 10 ? "0" + timerSeconds : timerSeconds}</p>
        </div>
    )
}

export default Timer;