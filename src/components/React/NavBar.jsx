import React, { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';
import CvJesus from '../../../public/documents/CV_JESUS_ECHEVERRIA_24.pdf';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [theme, setTheme] = useState("dark");
    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }
    const [abierto, setAbierto] = useState(false);
    const status = () => {
        setAbierto(!abierto);
    };

    const closeMenu = () => {
        setAbierto(false)
    }

    let Links = [
        { name: "Experiencia", section: "Experience" },
        { name: "Proyectos", section: "Proyects" },
        { name: "Recursos", section: "Recursos" },
        { name: "Contacto", section: "Contact" }
    ]

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    // Función para manejar el cambio de sección activa
    const handleSetActive = (to) => {
        setActiveSection(to);
    };

    return (
        <nav className='flex w-full z-50 justify-center fixed bottom-1.5 left-0 lg:top-0 lg:h-12'>
            <div className='flex flex-col justify-center w-1/2 mb-3 lg:mb-0 lg:w-full lg:flex-row lg:items-center lg:h-12 lg:bg-white dark:lg:bg-[#0623339d] lg:backdrop-blur-sm lg:drop-shadow-sm'>
                <Link
                    to="Header"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onSetActive={handleSetActive}
                    className={`${activeSection == "Header" ? '': 'text-black dark:text-white'}`}
                >
                    <img className='hidden lg:flex w-7 rounded-full mr-3 hover:cursor-pointer hover:scale-110 hover:duration-300' src='https://echeverriajesus.github.io/JesusEcheverria.github.io/static/media/PerfilN.817844543df566342ba7.jpg' />
                </Link>

                <ul className={`animate animate-expand-vertically ${abierto ? 'block' : 'hidden'} py-5 px-4 bg-white rounded-xl drop-shadow-lg lg:py-0 lg:flex lg:bg-transparent lg:drop-shadow-none dark:lg:bg-transparent dark:bg-[#0e1c24]`}>
                    <li className='flex flex-col gap-3 lg:gap-10 lg:flex-row lg:items-center'>
                        {
                            Links.map((link, index) => (
                                <Link
                                    key={index}
                                    to={link.section}
                                    spy={true}
                                    smooth={true}
                                    offset={window.innerWidth >= 1024 ? -65 : -20}
                                    duration={500}
                                    onSetActive={handleSetActive}
                                    onClick={closeMenu}
                                    className={`${activeSection == link.section ? 'text-orange-500 dark:text-yellow-300' : 'text-black dark:text-white'} duration-200 lg:text-sm font-cantora lg:hover:text-orange-500 lg:hover:dark:text-yellow-300 cursor-pointer`}>{link.name}</Link>
                            ))
                        }
                    </li>
                    <div className='flex gap-3 pt-3 lg:pt-0 lg:pl-7'>
                        <a href='https://github.com/EcheverriaJesus' target='_blank' rel="noopener noreferrer">
                            <svg className='w-6 hover:cursor-pointer hover:scale-125 hover:fill-orange-600 hover:duration-200' viewBox="0 0 32 32"><g id="Layer_6" /><g id="Layer_4_copy_2"><g><circle cx="16" cy="16" fill="#D3D3D3" r="16" /><circle cx="16" cy="16" fill="#FFFFFF" r="13.809" /><circle cx="16" cy="16" r="11.597" /></g></g><g id="Official_copy_3"><path d="M18.29,23.86h-2.094H14.1c0,0,0.006-1.243,0-2.096c-2.868,0.617-3.668-1.572-3.668-1.572   c-0.524-1.048-1.048-1.572-1.048-1.572c-1.048-0.622,0-0.524,0-0.524c1.048,0,1.572,1.048,1.572,1.048   c0.92,1.561,2.556,1.31,3.144,1.048c0-0.524,0.23-1.316,0.524-1.572c-2.289-0.258-4.194-1.572-4.194-4.192s0.526-3.144,1.05-3.668   c-0.106-0.258-0.544-1.213,0.016-2.62c0,0,1.03,0,2.078,1.572c0.519-0.519,2.096-0.524,2.62-0.524c0.523,0,2.1,0.005,2.619,0.524   c1.048-1.572,2.08-1.572,2.08-1.572c0.56,1.407,0.122,2.362,0.016,2.62c0.524,0.524,1.048,1.048,1.048,3.668   s-1.903,3.934-4.192,4.192c0.295,0.256,0.524,1.157,0.524,1.572L18.29,23.86L18.29,23.86z" fill="#FFFFFF" id="Cat_1_" /></g></svg>
                        </a>

                        <a href='https://www.linkedin.com/in/jesus-echeverria/' target='_blank' rel="noopener noreferrer">
                            <svg className='w-6 hover:cursor-pointer hover:scale-125 hover:fill-orange-600 hover:duration-200' viewBox="0 0 32 32"><g id="Layer_6" /><g id="Layer_4_copy_2"><g><circle cx="16" cy="16" fill="#D3D3D3" r="16" /><circle cx="16" cy="16" fill="#FFFFFF" r="13.809" /><circle cx="16" cy="16" r="11.597" /></g></g><g id="Official_copy_3"><path d="M22.774,21.474v-5.01c0-2.684-1.433-3.933-3.343-3.933c-1.542,0-2.232,0.848-2.617,1.443v-1.238h-2.904   c0.038,0.82,0,8.737,0,8.737h2.904v-4.88c0-0.26,0.019-0.521,0.096-0.708c0.21-0.522,0.687-1.062,1.489-1.062   c1.051,0,1.471,0.801,1.471,1.975v4.675L22.774,21.474L22.774,21.474z M10.85,11.545c1.012,0,1.643-0.672,1.643-1.51   c-0.019-0.857-0.631-1.509-1.624-1.509s-1.643,0.652-1.643,1.509c0,0.839,0.63,1.51,1.605,1.51H10.85z M12.302,21.474v-8.737H9.398   v8.737H12.302z" fill="#FFFFFF" /></g></svg>
                        </a>

                        <a href='https://www.facebook.com/jesus.echeverria.10441861/' target='_blank' rel="noopener noreferrer">
                            <svg className='w-6 hover:cursor-pointer hover:scale-125 hover:fill-orange-600 hover:duration-200' viewBox="0 0 32 32"><g id="Layer_6" /><g id="Layer_4_copy_2"><g><circle cx="16" cy="16" fill="#D3D3D3" r="16" /><circle cx="16" cy="16" fill="#FFFFFF" r="13.809" /><circle cx="16" cy="16" r="11.597" /></g></g><g id="Official_copy_3"><path d="M14.113,23.273h3.005v-7.273h2.005l0.266-2.506h-2.27l0.003-1.255c0-0.653,0.062-1.004,1-1.004h1.253V8.727   h-2.005c-2.409,0-3.256,1.216-3.256,3.261v1.505h-1.501V16h1.501V23.273z" fill="#FFFFFF" /></g></svg>
                        </a>

                        <a href='https://www.instagram.com/jesus_echeverria_01/' target='_blank' rel="noopener noreferrer">
                            <svg className='w-6 hover:cursor-pointer hover:scale-125 hover:fill-orange-600 hover:duration-200' viewBox="0 0 32 32"><g id="Layer_6" /><g id="Layer_4_copy_2"><g><circle cx="16" cy="16" fill="#D3D3D3" r="16" /><circle cx="16" cy="16" fill="#FFFFFF" r="13.809" /><circle cx="16" cy="16" r="11.597" /></g></g><g id="Official_copy_3"><path d="M21.012,9.317H10.988c-0.944,0-1.671,0.727-1.671,1.671v10.024c0,0.943,0.727,1.671,1.671,1.671h10.024   c0.943,0,1.671-0.728,1.671-1.671V10.988C22.683,10.044,21.955,9.317,21.012,9.317z M16.01,13.375c1.482,0,2.684,1.164,2.684,2.6   c0,1.436-1.201,2.6-2.684,2.6c-1.481,0-2.683-1.165-2.683-2.6C13.327,14.539,14.529,13.375,16.01,13.375z M21.012,20.594   c0,0.293-0.125,0.418-0.418,0.418h-9.189c-0.292,0-0.418-0.125-0.418-0.418v-5.847l1.041,0.226   c-0.112,0.363-0.172,0.748-0.172,1.147c0,2.221,1.86,4.024,4.153,4.024c2.294,0,4.153-1.802,4.153-4.024   c0-0.399-0.061-0.783-0.172-1.147l1.021-0.226V20.594z M21.012,13.076c0,0.231-0.187,0.418-0.418,0.418h-1.671   c-0.231,0-0.418-0.187-0.418-0.418v-1.671c0-0.231,0.187-0.418,0.418-0.418h1.671c0.231,0,0.418,0.187,0.418,0.418V13.076z" fill="#FFFFFF" /></g></svg>
                        </a>

                        <a href='https://www.youtube.com/@DevNova-eu8vk/featured' target='_blank' rel='noopener noreferrer'>
                            <svg className='w-6 hover:cursor-pointer hover:scale-125 hover:fill-orange-600 hover:duration-200' viewBox="0 0 32 32"><g id="Layer_6" /><g id="Layer_4_copy_2"><g><circle cx="16" cy="16" fill="#D3D3D3" r="16" /><circle cx="16" cy="16" fill="#FFFFFF" r="13.809" /><circle cx="16" cy="16" r="11.597" /></g></g><g id="Official_copy_3"><g><path d="M23.331,12.81c0,0-0.146-1.1-0.594-1.585c-0.569-0.635-1.207-0.639-1.499-0.675    c-2.094-0.162-5.234-0.162-5.234-0.162h-0.007c0,0-3.14,0-5.234,0.162c-0.292,0.036-0.929,0.04-1.499,0.675    C8.816,11.71,8.669,12.81,8.669,12.81s-0.15,1.291-0.15,2.582v1.21c0,1.292,0.15,2.583,0.15,2.583s0.146,1.1,0.594,1.584    c0.57,0.635,1.316,0.616,1.649,0.682C12.11,21.574,16,21.612,16,21.612s3.144-0.006,5.237-0.166    c0.292-0.037,0.93-0.041,1.499-0.676c0.448-0.484,0.594-1.583,0.594-1.583s0.15-1.291,0.15-2.583v-1.21    C23.48,14.101,23.331,12.81,23.331,12.81z M14.132,18.806v-5.612L18.808,16L14.132,18.806z" fill="#FFFFFF" /></g></g></svg>
                        </a>
                    </div>
                </ul>
                <div className='flex items-center justify-around w-full py-1.5 rounded-full bg-[#67676b31] lg:bg-transparent lg:w-auto lg:py-0 dark:lg:bg-transparent gap-2'>
                    <button id='text' onClick={status} className='flex text-black dark:text-white lg:hidden'>
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
                    <li className='list-none hover:cursor-pointer' onClick={handleThemeSwitch}>
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
                    <a href={CvJesus} target='_blank' rel='noopener noreferrer' className='list-none hover:cursor-pointer'>
                        <svg className="h-6 w-6 lg:h-6 lg:w-6 stroke-slate-600 dark:stroke-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                    </a>
                    <Link
                        to={"Header"}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        onSetActive={handleSetActive}
                        onClick={closeMenu}>
                        <img className='flex w-7 rounded-full lg:hidden' src='https://echeverriajesus.github.io/JesusEcheverria.github.io/static/media/PerfilN.817844543df566342ba7.jpg' alt="FotoPerfil" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;