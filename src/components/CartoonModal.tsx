import React, { useState } from 'react';
import donation from '../assets/img/donation.jpg'
import happycat1 from '../assets/img/happy_cat1.jpg'
import happycat2 from '../assets/img/happy_cat2.jpg'
import meang from '../assets/img/meang.jpg'
import pilates1 from '../assets/img/pilates1.jpg'
import pilates2 from '../assets/img/pilates2.jpg'
import shouting from '../assets/img/shouting_dila.jpg'
import sleeping from '../assets/img/sleeping_seestar.jpg'

import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";


interface CartoonModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const imageFiles = [shouting, happycat1, sleeping, meang, donation, happycat2, pilates1, pilates2];

const CartoonModal: React.FC<CartoonModalProps> = ({ isOpen, onClose, children }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageFiles.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageFiles.length) % imageFiles.length);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed w-screen h-screen bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="relative bg-white drop-shadow-md mx-8 my-16 p-5 rounded-lg flex justify-center items-center">
                <div onClick={onClose} className="absolute top-0 right-0 p-5">
                    <IoCloseSharp size={20}/>
                </div>
                <img className="w-5/6 md:w-1/2" src={imageFiles[currentImageIndex]} alt="깟툰"/>
                <div>
                    <div onClick={prevImage} className="absolute top-1/2 left-5 transform -translate-y-1/2">
                        <IoIosArrowDropleftCircle size={30}/>
                    </div>
                    <div onClick={nextImage} className="absolute top-1/2 right-5 transform -translate-y-1/2">
                        <IoIosArrowDroprightCircle size={30}/>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default CartoonModal;
