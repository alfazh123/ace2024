"use client";

import { useState, useEffect } from "react";

export default function Countdown() {
    const [timeOut, setTimeOut] = useState(false);
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const countDownDate = new Date("Jan 27, 2024 07:00:00").getTime();
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setDay(days);
            setHour(hours);
            setMinute(minutes);
            setSecond(seconds);

            if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
                clearInterval(interval);
                setTimeOut(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    });

    const time = [
        { time: day, text: "Day" },
        { time: hour, text: "Hour" },
        { time: minute, text: "Minute" },
        { time: second, text: "Second" },
    ];

    return (
        <div>
            {timeOut ? (
                <div></div>
            ) : (
                <div className="flex flex-col text-center space-y-5">
                    <h1 className="font-bold text-2xl">Countdown Event</h1>
                    <div className="flex flex-col justify-between bg-sage md:px-10 md:py-4 px-4 py-3 rounded-lg">
                        <div className="flex">
                            {time.map((item, index) => (
                                <div key={index}>
                                    <div className="flex justify-center items-center">
                                        <p className="bg-pewter rounded-md sm:px-4 sm:py-3 px-3 py-2 md:text-2xl sm:text-xl font-semibold">
                                            {item.time < 10
                                                ? `0${item.time}`
                                                : item.time}
                                        </p>
                                        <p
                                            className={`${
                                                item.text === "Second"
                                                    ? "hidden"
                                                    : ""
                                            } font-semibold md:text-xl text-lg md:mx-4 sm:mx-3 mx-2`}
                                        >
                                            :
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between items-center text-center">
                            {time.map((item, index) => (
                                <div
                                    key={index}
                                    className="justify-center items-center text-center flex"
                                >
                                    <p
                                        className={`md:font-semibold md:text-lg text-xs pt-2 ${
                                            item.text === "Day"
                                                ? "md:px-4 px-2"
                                                : ""
                                        }`}
                                    >
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
