import React, { useState } from 'react';

const Pruebas = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    { id: 1, title: 'Creación de software a la medida', description: 'Descripción del Servicio 1' },
    { id: 2, title: 'Instalación circuito de CCTV', description: 'Descripción del Servicio 2' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + services.length) % services.length);
  };

  return (
    <div className="container text-center">
      <div className="relative">
        <div className="flex">
          {services.map((service, index) => (
            <div key={service.id} className={`${index === currentSlide ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-500 absolute left-0 right-0 mx-auto`}>
              <h1 className="text-2xl font-bold font-signika tracking-wider dark:text-white">{service.title}</h1>

              <p className="mt-4 text-black dark:text-gray-200">{service.description}</p>
            </div>
          ))}

          <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={prevSlide}
        >
          &#8249;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={nextSlide}
        >
          &#8250;
        </button>

        </div>
        
      </div>
    </div>
  );
};

export default Pruebas;