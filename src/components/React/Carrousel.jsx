import React, { useState } from 'react';

const Carrousel = () => {

    const images =
        ['https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg',
            'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg',
            'https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg',
        'https://solid-tailwind.preview.uideck.com/images/hero-dark.png'];
    const [currentImage, setCurrentImage] = useState(0);
    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };
    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative">
            <div className="overflow-hidden w-full h-[520px] rounded-xl">
                <div
                    className="flex transition-transform ease-in-out duration-700 transform w-full"
                    style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`slide-${index}`}
                            className="w-full h-auto object-top"
                        />
                    ))}
                </div>
            </div>

            <button className="w-9 absolute top-1/2 -left-5 -translate-y-1/2 bg-white p-1.5 rounded-full text-gray-500 font-bold text-xl hover:text-black hover:cursor-pointer dark:dark:bg-gray-100" onClick={prevImage}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>

            <button className="w-9 absolute top-1/2 -right-5 -translate-y-1/2 bg-white p-1.5 rounded-full text-gray-500 font-bold text-xl hover:text-black hover:cursor-pointer dark:dark:bg-gray-100" onClick={nextImage}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
        </div>
    );
};

export default Carrousel;
