import React, { useState, useEffect } from 'react';
import { iu } from '../../../public/imgs/iu.png';

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setActiveTab((prevTab) => (prevTab < 3 ? prevTab + 1 : 1));
      } else if (event.key === 'ArrowLeft') {
        setActiveTab((prevTab) => (prevTab > 1 ? prevTab - 1 : 3));
      } else if (event.key === 'Home') {
        setActiveTab(1);
      } else if (event.key === 'End') {
        setActiveTab(3);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        <div
          role="tablist"
          className="inline-flex  justify-center bg-slate-200 rounded-[20px] p-1 mb-7"
        >
          {/* Button #1 */}
          <button
            id="tab-1"
            className={`flex-1 text-sm font-medium h-8 px-4 rounded-2xl whitespace-nowrap focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out ${activeTab === 1 ? 'bg-white text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
            tabIndex={activeTab === 1 ? 0 : -1}
            aria-selected={activeTab === 1}
            aria-controls="tabpanel-1"
            onClick={() => handleTabChange(1)}
          >
            Componentes Web
          </button>
          {/* Button #2 */}
          <button
            id="tab-2"
            className={`flex-1 text-sm font-medium h-8 px-4 rounded-2xl whitespace-nowrap focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out ${activeTab === 2 ? 'bg-white text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
            tabIndex={activeTab === 2 ? 0 : -1}
            aria-selected={activeTab === 2}
            aria-controls="tabpanel-2"
            onClick={() => handleTabChange(2)}
          >
            Blogs
          </button>
          {/* Button #3 */}
          <button
            id="tab-3"
            className={`flex-1 text-sm font-medium h-8 px-4 rounded-2xl whitespace-nowrap focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out ${activeTab === 3 ? 'bg-white text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
            tabIndex={activeTab === 3 ? 0 : -1}
            aria-selected={activeTab === 3}
            aria-controls="tabpanel-3"
            onClick={() => handleTabChange(3)}
          >
            Videos
          </button>
        </div>
      </div>

      <div className="w-full md:max-w-[870px]">
        <div className="relative flex flex-col">
          {/* Panel #1 */}
          <article
            id="tabpanel-1"
            className={`animate animate-expand-vertically w-full bg-white rounded-2xl shadow-xl ${activeTab === 1 ? 'block' : 'hidden'}`}
            role="tabpanel"
            tabIndex="0"
            aria-labelledby="tab-1"
          >
            <article className="w-full bg-white rounded-2xl shadow-xl flex">
              <div className="w-full flex flex-col justify-center p-5">
                <div className="flex border-b pb-3 justify-between">
                  <header>
                    <div className="font-caveat text-lg font-signika text-sky-800">Componentes Web.</div>
                    <span className="font-roboto text-center">He creado algunos componentes para el desarrollo web, etos componentes estan realizados con la tecnología Tailwind css.</span>
                  </header>
                </div>
                <a href='https://uiverse.io/profile/EcheverriaJesus' target='_blank' rel='noopener noreferrer' className="text-base font-bold text-blue-600 animate-bounce pt-2">UIVERSE -&gt;</a>
                <div className="text-slate-600 line-clamp-3 my-2">Plataforma donde puedes crear componentes HTML, CSS Y TAILWIND.</div>
                <div className="flex pt-3 w-full justify-center">
                  <img className="w-auto md:w-1/2 rounded-md" src={iu}/>
                </div>
              </div>
            </article>
          </article>

          {/* Panel #2 */}
          <article
            id="tabpanel-2"
            className={`animate animate-expand-vertically w-full bg-white rounded-2xl shadow-xl ${activeTab === 2 ? 'block' : 'hidden'}`}
            role="tabpanel"
            tabIndex="0"
            aria-labelledby="tab-2"
          >
            <article className="w-full bg-white rounded-2xl shadow-xl flex">
              <div className="w-full flex flex-col justify-center p-5">
                <div className="flex border-b pb-3 justify-between">
                <header>
                    <div className="font-caveat text-lg font-signika text-sky-800">Blogs sobre configuraciones de librerías.</div>
                    <span className="font-roboto text-center">Pequeños blogs con experiencia en la configuración o mejora de codigo.</span>
                  </header>
                </div>
                <a href='https://dev.to/echeverriajesus' target='_blank' rel='noopener noreferrer' className="text-base font-bold text-blue-600 animate-bounce pt-2">DEV.TO -&gt;</a>
                <div className="text-slate-600 line-clamp-3 my-2">Plataforma donde puedes realizar blogs.</div>
                <div className="flex pt-3 w-full justify-center">
                  <img className="w-auto md:w-1/2 rounded-md" src="../../../public/imgs/devto.png"/>
                </div>
              </div>
            </article>
          </article>

          {/* Panel #3 */}
          <article
            id="tabpanel-3"
            className={`animate animate-expand-vertically w-full bg-white rounded-2xl shadow-xl ${activeTab === 3 ? 'block' : 'hidden'}`}
            role="tabpanel"
            tabIndex="0"
            aria-labelledby="tab-3"
          >
            <article className="w-full bg-white rounded-2xl shadow-xl flex">
              <div className="w-full flex flex-col justify-center p-5">
                <div className="flex border-b pb-3 justify-between">
                <header>
                    <div className="font-caveat text-lg font-signika text-sky-800">Videos tutoriales sobre programación.</div>
                    <span className="font-roboto text-center">Realicé algunos videos sencillos pero interesantes para la programación.</span>
                  </header>
                </div>
                <a href='https://dev.to/echeverriajesus' target='_blank' rel='noopener noreferrer' className="text-base font-bold text-blue-600 animate-bounce pt-2">YOUTUBE -&gt;</a>
                <div className="text-slate-600 line-clamp-3 my-2">Plataforma YouTube.</div>
                <div className="flex pt-3 w-full justify-center">
                  <img className="w-auto md:w-1/2 rounded-md" src="../../../public/imgs/youtube.png"/>
                </div>
              </div>
            </article>
          </article>
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
