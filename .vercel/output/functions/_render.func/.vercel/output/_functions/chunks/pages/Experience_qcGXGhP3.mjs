/* empty css                                 */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent } from '../astro_u4BI4c7P.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { $ as $$Title } from './Certificates_L5pp2v77.mjs';

function ExperienceSection() {
  const [experience, setExperience] = useState(0);
  const handlePrevClick = () => {
    setExperience((PrevExperience) => Math.max(0, PrevExperience - 1));
  };
  const handleNextClick = () => {
    setExperience((PrevExperience) => Math.min(1, PrevExperience + 1));
  };
  return /* @__PURE__ */ jsxs("section", { className: "flex w-full h-[370px] 2xl:h-[400px]", children: [
    /* @__PURE__ */ jsx("button", { onClick: handlePrevClick, disabled: experience === 0, children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 hover:stroke-blue-500 dark:hover:stroke-yellow-300 dark:stroke-white mr-2", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5 8.25 12l7.5-7.5" }) }) }),
    /* @__PURE__ */ jsxs("article", { className: `animate animate-expand-vertically relative flex flex-col px-5 justify-center w-full h-auto bg-transparent border border-slate-300 rounded-xl shadow-2xl py-7 dark:border-slate-600 ${experience === 0 ? "block" : "hidden"}`, children: [
      /* @__PURE__ */ jsxs("h4", { className: "text-sm lg:text-base 2xl:text-lg dark:text-white font-normal font-signika", children: [
        "💼 Consultora de software ",
        /* @__PURE__ */ jsx("b", { className: "text-orange-700 dark:text-yellow-400", children: "NISSIAPP" }),
        " - Desarrollador web FullStack."
      ] }),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "text-sm lg:text-base 2xl:text-lg dark:text-white font-normal font-signika pb-3",
          children: "🗓️Agosto de 2023 - Actual."
        }
      ),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-7 lg:pl-10 text-sm text-gray-800 lg:text-base 2xl:text-lg dark:text-white font-normal font-signika space-y-1", children: [
        /* @__PURE__ */ jsx("li", { children: "Lenguajes Javascript y PHP." }),
        /* @__PURE__ */ jsx("li", { children: "Equipos de desarrollo gestionado en jira." }),
        /* @__PURE__ */ jsx("li", { children: "Control de versiones con git en github y bitbucket." }),
        /* @__PURE__ */ jsx("li", { children: "MySQL y Oracle." }),
        /* @__PURE__ */ jsx("li", { children: "Landing page y consumo de Api's con react." }),
        /* @__PURE__ */ jsx("li", { children: "Api rest con Laravel." }),
        /* @__PURE__ */ jsx("li", { children: "Tailwind y Boostrap" }),
        /* @__PURE__ */ jsx("li", { children: "Conversacion y presentacion con clientes." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("article", { className: `animate animate-expand-vertically relative flex flex-col px-5 justify-center w-full h-auto bg-transparent border border-slate-300 rounded-xl shadow-2xl py-7 dark:border-slate-600 ${experience === 1 ? "block" : "hidden"}`, children: [
      /* @__PURE__ */ jsxs("h4", { className: "text-sm lg:text-base 2xl:text-lg dark:text-white font-normal font-signika", children: [
        "💼 Tecnológico Nacional de México campus iguala ",
        /* @__PURE__ */ jsx("b", { className: "text-orange-700 dark:text-yellow-400", children: "ITI" }),
        " - Desarrollador web y administrador de laboratorios."
      ] }),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "text-sm lg:text-base 2xl:text-lg dark:text-white font-normal font-signika pb-3",
          children: "🗓️Enero de 2023 - Agosto de 2023."
        }
      ),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-7 lg:pl-10 text-sm text-gray-800 lg:text-base 2xl:text-lg dark:text-white font-normal font-signika space-y-2", children: [
        /* @__PURE__ */ jsx("li", { children: "Mantenimiento a la página web del departamento Sistemas y Computación." }),
        /* @__PURE__ */ jsx("li", { children: "Mantenimiento a los equipos de computo en los laboratorios." }),
        /* @__PURE__ */ jsx("li", { children: "Control de acceso a los laboratorios." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("button", { onClick: handleNextClick, disabled: experience === 1, children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 hover:stroke-blue-500 dark:hover:stroke-yellow-300 dark:stroke-white ml-2", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m8.25 4.5 7.5 7.5-7.5 7.5" }) }) })
  ] });
}

const $$Astro = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Experience;
  return renderTemplate`${maybeRenderHead()}<section class="relative flex flex-col items-center"> ${renderComponent($$result, "Title", $$Title, { "title": "Experiencia:" })} ${renderComponent($$result, "ExperienceSection", ExperienceSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/laragon/laragon/www/PortfolioNoeE/src/components/React/ExperienceSection.jsx", "client:component-export": "default" })} </section>`;
}, "D:/laragon/laragon/www/PortfolioNoeE/src/pages/Experience.astro", void 0);

const $$file = "D:/laragon/laragon/www/PortfolioNoeE/src/pages/Experience.astro";
const $$url = "/Experience";

export { $$Experience as default, $$file as file, $$url as url };
