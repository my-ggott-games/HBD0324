import {useEffect, useRef, useState} from 'react';
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';
import AudioPlayer from './AudioPlayer';
import BirthdayCake from "./BirthdayCake";
import CartoonModal from './CartoonModal';

import {TConductorInstance} from "react-canvas-confetti/dist/types";

function BirthdayPage() {
    const controller = useRef<TConductorInstance | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onInitHandler = ({conductor}: { conductor: TConductorInstance }) => {
        controller.current = conductor;
    };

    const onShoot = () => {
        if (controller.current) {
            controller.current.shoot();
        }
    };

    useEffect(() => {
        if (controller.current) {
            controller.current.run({speed: 0.3, duration: 3});
        }
    }, []);

    return (
        <div
            className="w-screen bg-white flex flex-col justify-center items-center mx-auto py-8 text-center select-none gap-4">
            <Fireworks onInit={onInitHandler}/>
            <button
                className="p-4 rounded-full bg-violet-100 shadow-xl absolute bottom-5 right-5 font-pyeongchang-light focus:outline-none"
                onClick={onShoot}>🎉
            </button>
            <p className="text-3xl font-pyeongchang-bold">Happy Birthday!</p>
            <p className="text-xl font-pyeongchang-light">나의 별은 너였고, 지금도, 앞으로도,
                <br/>변함없이 너야.
            </p>
            <BirthdayCake/>

            <button onClick={() => setIsModalOpen(true)} className="p-2 bg-violet-400 text-white rounded">깟툰 보기</button>
            <CartoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>

            <AudioPlayer/>

        </div>
    );
}

export default BirthdayPage;
