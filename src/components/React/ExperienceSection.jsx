import React, { useState } from 'react'

export default function ExperienceSection() {
    const [experience, setExperience] = useState(0);
    const handlePrevClick = () => {
        setExperience((PrevExperience) => Math.max(0, PrevExperience - 1))
    }
    const handleNextClick = () => {
        setExperience((PrevExperience) => Math.min(1, PrevExperience + 1))
    }

    return (
        <section className="flex w-full h-[370px] 2xl:h-[400px]">
            <button onClick={handlePrevClick} disabled={experience === 0}>
                <svg className='w-6 h-6 hover:stroke-blue-500 dark:hover:stroke-yellow-300 dark:stroke-white mr-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>

            <article className={`animate animate-expand-vertically relative flex flex-col px-5 justify-center w-full h-auto bg-transparent border border-slate-300 rounded-xl shadow-2xl py-7 dark:border-slate-600 ${experience === 0 ? 'block' : 'hidden'
                }`}>
                <h4 className="text-sm lg:text-base 2xl:text-lg dark:text-white font-normal font-signika">💼 Consultora de software <b className="text-orange-700 dark:text-yellow-400">NISSIAPP</b> - Desarrollador web FullStack.</h4>
                <span className="text-sm lg:text-base 2xl:text-lg dark:text-white font-normal font-signika pb-3"
                >🗓️Agosto de 2023 - Marzo de 2024.</span>
                <ul className="list-disc pl-7 lg:pl-10 text-sm text-gray-800 lg:text-base 2xl:text-lg dark:text-white font-normal font-signika space-y-1">
                    <li>Lenguajes Javascript y PHP.</li>
                    <li>Equipos de desarrollo gestionado en jira.</li>
                    <li>Control de versiones con git en github y bitbucket.</li>
                    <li>MySQL y Oracle.</li>
                    <li>Landing page y consumo de Api's con react.</li>
                    <li>Api rest con Laravel.</li>
                    <li>Tailwind y Boostrap</li>
                    <li>Conversacion y presentacion con clientes.</li>
                </ul>
            </article>

            <article className={`animate animate-expand-vertically relative flex flex-col px-5 justify-center w-full h-auto bg-transparent border border-slate-300 rounded-xl shadow-2xl py-7 dark:border-slate-600 ${experience === 1 ? 'block' : 'hidden'
                }`}>
                <h4 className="text-sm lg:text-base 2xl:text-lg dark:text-white font-normal font-signika">💼 Tecnológico Nacional de México campus iguala <b className="text-orange-700 dark:text-yellow-400">ITI</b> - Desarrollador web y administrador de laboratorios.</h4>
                <span className="text-sm lg:text-base 2xl:text-lg dark:text-white font-normal font-signika pb-3"
                >🗓️Enero de 2023 - Agosto de 2023.</span>
                <ul className="list-disc pl-7 lg:pl-10 text-sm text-gray-800 lg:text-base 2xl:text-lg dark:text-white font-normal font-signika space-y-2">
                    <li>Mantenimiento a la página web del departamento Sistemas y Computación.</li>
                    <li>Mantenimiento a los equipos de computo en los laboratorios.</li>
                    <li>Control de acceso a los laboratorios.</li>
                </ul>
            </article>

            <button onClick={handleNextClick} disabled={experience === 1}>
                <svg className='w-6 h-6 hover:stroke-blue-500 dark:hover:stroke-yellow-300 dark:stroke-white ml-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </section>
    )
}
