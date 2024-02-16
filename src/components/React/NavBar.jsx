import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [theme, setTheme] = useState("dark");
    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }
    const [abierto, setAbierto] = useState(false);
    const status = () => {
        setAbierto(!abierto);
    };

    let Links = [
        { name: "Experiencia", section: "Experiencia" },
        { name: "Proyectos", section: "Proyectos" },
        { name: "Recursos", section: "Recursos" },
        { name: "Servicios", section: "Servicios" },
        { name: "Contacto", section: "contacto" }
    ]
    let Svgs = [
        { path: "M5 1a4 4 0 0 0 -4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4 -4V5a4 4 0 0 0 -4 -4H5Zm1.815 5.11a7.99 7.99 0 0 1 5.182 -1.903 7.99 7.99 0 0 1 2.531 15.572c-0.405 0.077 -0.535 -0.159 -0.535 -0.372v-2.212a1.893 1.893 0 0 0 -0.546 -1.473c1.78 -0.197 3.648 -0.871 3.648 -3.942a3.086 3.086 0 0 0 -0.822 -2.146 2.87 2.87 0 0 0 -0.08 -2.114s-0.666 -0.214 -2.194 0.82a7.561 7.561 0 0 0 -4.002 0C8.472 7.306 7.8 7.52 7.8 7.52a2.867 2.867 0 0 0 -0.078 2.114 3.09 3.09 0 0 0 -0.823 2.144c0 3.063 1.866 3.748 3.64 3.95a1.705 1.705 0 0 0 -0.508 1.065 1.702 1.702 0 0 1 -2.325 -0.664 1.678 1.678 0 0 0 -1.224 -0.823s-0.78 -0.01 -0.054 0.487c0.426 0.271 0.74 0.686 0.887 1.168 0 0 0.459 1.535 2.682 1.053 0.003 0.504 0.002 0.929 0 1.19l0 0.2c0 0.21 -0.126 0.445 -0.525 0.375A7.99 7.99 0 0 1 6.815 6.11Z" },
        { path: "M5 1a4 4 0 0 0 -4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4 -4V5a4 4 0 0 0 -4 -4H5Zm1.205 6.91a1.705 1.705 0 1 0 0 -3.41 1.705 1.705 0 0 0 0 3.41ZM7.909 19.5V9.273H4.5V19.5h3.41Zm4.432 -10.227H9.273V19.5h3.068v-6.17c0.395 -0.642 1.077 -1.33 2.045 -1.33 1.364 0 1.705 1.364 1.705 2.046V19.5H19.5v-5.454c0 -1.828 -0.797 -4.773 -3.75 -4.773 -1.878 0 -2.92 0.685 -3.41 1.327V9.273Z" },
        { path: "M5 1a4 4 0 0 0 -4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4 -4V5a4 4 0 0 0 -4 -4H5Zm4.682 6.273A3.273 3.273 0 0 1 12.954 4h2.91c0.2 0 0.363 0.163 0.363 0.364v2.909c0 0.2 -0.163 0.363 -0.363 0.363h-1.455a1.09 1.09 0 0 0 -1.09 1.091v1.091h2.545a0.364 0.364 0 0 1 0.352 0.452l-0.727 2.91a0.363 0.363 0 0 1 -0.353 0.274h-1.818v6.182a0.364 0.364 0 0 1 -0.364 0.364h-2.909a0.364 0.364 0 0 1 -0.363 -0.364v-6.181H7.864a0.364 0.364 0 0 1 -0.364 -0.364v-2.91c0 -0.2 0.163 -0.363 0.364 -0.363h1.818V7.273Z" },
        { path: "M5 1a4 4 0 0 0 -4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4 -4V5a4 4 0 0 0 -4 -4H5Zm-0.5 8A4.5 4.5 0 0 1 9 4.5h6A4.5 4.5 0 0 1 19.5 9v6a4.5 4.5 0 0 1 -4.5 4.5H9A4.5 4.5 0 0 1 4.5 15V9ZM9 5.5A3.5 3.5 0 0 0 5.5 9v6A3.5 3.5 0 0 0 9 18.5h6a3.5 3.5 0 0 0 3.5 -3.5V9A3.5 3.5 0 0 0 15 5.5H9Zm8 2.667a0.833 0.833 0 1 1 -1.667 0 0.833 0.833 0 0 1 1.667 0ZM8.167 12a3.833 3.833 0 1 1 7.666 0 3.833 3.833 0 0 1 -7.666 0ZM12 9.167a2.833 2.833 0 1 0 0 5.666 2.833 2.833 0 0 0 0 -5.666Z" },
        { path: "M5 1a4 4 0 0 0 -4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4 -4V5a4 4 0 0 0 -4 -4H5Zm-0.5 11c0 -1.074 0.05 -2.087 0.117 -2.937a2.541 2.541 0 0 1 2.36 -2.358A71.231 71.231 0 0 1 12 6.545c2.157 0 3.812 0.074 5.023 0.16a2.541 2.541 0 0 1 2.36 2.358c0.066 0.85 0.117 1.863 0.117 2.937 0 1.113 -0.054 2.16 -0.124 3.028 -0.1 1.239 -1.044 2.185 -2.262 2.27a74.905 74.905 0 0 1 -5.114 0.157c-2.178 0 -3.89 -0.072 -5.114 -0.157 -1.218 -0.085 -2.162 -1.031 -2.262 -2.27A38.237 38.237 0 0 1 4.5 12Zm5.636 -2.545L14.386 12l-4.25 2.546V9.454Z" }
    ]


    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <nav className='flex w-full z-50 justify-center fixed bottom-1.5 left-0 lg:top-0 lg:h-12'>
            <div className='flex flex-col justify-center w-1/2 mb-3 lg:mb-0 lg:w-full lg:flex-row lg:items-center lg:h-12 lg:bg-white dark:lg:bg-[#062333] lg:drop-shadow-sm'>
                <ul className={`animate animate-expand-vertically ${abierto ? 'block' : 'hidden'} py-5 px-4 mb-2 bg-white rounded-xl drop-shadow-lg lg:py-0 lg:flex lg:bg-transparent lg:drop-shadow-none dark:lg:bg-transparent dark:bg-[#0e1c24]`}>
                    <li className='flex flex-col gap-3 lg:gap-10 lg:flex-row lg:items-center'>
                        {
                            Links.map((link, index) => (
                                <a key={index} href='/' className='text-gray-600 duration-200 lg:text-black lg:text-sm dark:text-white font-cantora lg:hover:text-orange-500'>{link.name}</a>
                            ))
                        }
                    </li>
                    <div className='flex gap-3 pt-3 lg:pt-0 lg:pl-7'>
                        {
                            Svgs.map((svg, index) => (
                                <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 fill-gray-600 cursor-pointer hover:translate-y-1 duration-300 dark:fill-white">
                                    <path fillRule="evenodd"
                                        d={svg.path}
                                        clipRule="evenodd">
                                    </path>
                                </svg>
                            ))
                        }
                    </div>
                </ul>
                <div className='flex items-center justify-around w-full py-1.5 rounded-full bg-[#67676b31] lg:bg-transparent lg:w-auto lg:py-0 dark:lg:bg-transparent gap-2'>
                    <button onClick={status} className='flex text-black dark:text-white lg:hidden'>
                        <svg className='h-6 w-6' fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'>
                            {abierto ? (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M6 18L18 6M6 6l12 12' />
                            ) : (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M4 6h16M4 12h16M4 18h16' />
                            )}
                        </svg>
                    </button>
                    <li className='list-none hover:cursor-pointer lg:pb-2' onClick={handleThemeSwitch}>
                        <svg className='h-6 w-6 lg:h-6 lg:w-6 stroke-slate-600 dark:stroke-white' fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'>
                            {theme === "dark" ? (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z' />
                            ) : (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z' />
                            )}
                        </svg>
                    </li>
                    <li className='list-none hover:cursor-pointer lg:pb-2'>
                        <svg className="h-6 w-6 lg:h-6 lg:w-6 stroke-slate-600 dark:stroke-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                    </li>
                    <img className='flex w-7 rounded-full lg:hidden' src='https://echeverriajesus.github.io/JesusEcheverria.github.io/static/media/PerfilN.817844543df566342ba7.jpg' alt="FotoPerfil" />
                </div>
            </div>
        </nav>
    );
};
export default Navbar;