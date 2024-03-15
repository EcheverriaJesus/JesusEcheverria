/* empty css                                 */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_u4BI4c7P.mjs';
import 'kleur/colors';
import { $ as $$Title } from './Certificates_L5pp2v77.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        setActiveTab((prevTab) => prevTab < 3 ? prevTab + 1 : 1);
      } else if (event.key === "ArrowLeft") {
        setActiveTab((prevTab) => prevTab > 1 ? prevTab - 1 : 3);
      } else if (event.key === "Home") {
        setActiveTab(1);
      } else if (event.key === "End") {
        setActiveTab(3);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs(
      "div",
      {
        role: "tablist",
        className: "inline-flex  justify-center bg-slate-200 rounded-[20px] p-1 mb-7",
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              id: "tab-1",
              className: `flex-1 text-sm font-medium h-8 px-4 rounded-2xl whitespace-nowrap focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out ${activeTab === 1 ? "bg-white text-slate-900" : "text-slate-600 hover:text-slate-900"}`,
              tabIndex: activeTab === 1 ? 0 : -1,
              "aria-selected": activeTab === 1,
              "aria-controls": "tabpanel-1",
              onClick: () => handleTabChange(1),
              children: "Componentes Web"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              id: "tab-2",
              className: `flex-1 text-sm font-medium h-8 px-4 rounded-2xl whitespace-nowrap focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out ${activeTab === 2 ? "bg-white text-slate-900" : "text-slate-600 hover:text-slate-900"}`,
              tabIndex: activeTab === 2 ? 0 : -1,
              "aria-selected": activeTab === 2,
              "aria-controls": "tabpanel-2",
              onClick: () => handleTabChange(2),
              children: "Blogs"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              id: "tab-3",
              className: `flex-1 text-sm font-medium h-8 px-4 rounded-2xl whitespace-nowrap focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out ${activeTab === 3 ? "bg-white text-slate-900" : "text-slate-600 hover:text-slate-900"}`,
              tabIndex: activeTab === 3 ? 0 : -1,
              "aria-selected": activeTab === 3,
              "aria-controls": "tabpanel-3",
              onClick: () => handleTabChange(3),
              children: "Videos"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "w-full md:max-w-[870px]", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col", children: [
      /* @__PURE__ */ jsx(
        "article",
        {
          id: "tabpanel-1",
          className: `animate animate-expand-vertically w-full bg-white rounded-2xl shadow-xl ${activeTab === 1 ? "block" : "hidden"}`,
          role: "tabpanel",
          tabIndex: "0",
          "aria-labelledby": "tab-1",
          children: /* @__PURE__ */ jsx("article", { className: "w-full bg-white rounded-2xl shadow-xl flex", children: /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col justify-center p-5", children: [
            /* @__PURE__ */ jsx("div", { className: "flex border-b pb-3 justify-between", children: /* @__PURE__ */ jsxs("header", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-caveat text-lg font-signika text-sky-800", children: "Componentes Web." }),
              /* @__PURE__ */ jsx("span", { className: "font-roboto text-center", children: "He creado algunos componentes para el desarrollo web, etos componentes estan realizados con la tecnología Tailwind css." })
            ] }) }),
            /* @__PURE__ */ jsx("a", { href: "https://uiverse.io/profile/EcheverriaJesus", target: "_blank", rel: "noopener noreferrer", className: "text-base font-bold text-blue-600 animate-bounce pt-2", children: "UIVERSE ->" }),
            /* @__PURE__ */ jsx("div", { className: "text-slate-600 line-clamp-3 my-2", children: "Plataforma donde puedes crear componentes HTML, CSS Y TAILWIND." }),
            /* @__PURE__ */ jsx("div", { className: "flex pt-3 w-full justify-center", children: /* @__PURE__ */ jsx("img", { className: "w-auto md:w-1/2 rounded-md", src: "/imgs/iu.png" }) })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "article",
        {
          id: "tabpanel-2",
          className: `animate animate-expand-vertically w-full bg-white rounded-2xl shadow-xl ${activeTab === 2 ? "block" : "hidden"}`,
          role: "tabpanel",
          tabIndex: "0",
          "aria-labelledby": "tab-2",
          children: /* @__PURE__ */ jsx("article", { className: "w-full bg-white rounded-2xl shadow-xl flex", children: /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col justify-center p-5", children: [
            /* @__PURE__ */ jsx("div", { className: "flex border-b pb-3 justify-between", children: /* @__PURE__ */ jsxs("header", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-caveat text-lg font-signika text-sky-800", children: "Blogs sobre configuraciones de librerías." }),
              /* @__PURE__ */ jsx("span", { className: "font-roboto text-center", children: "Pequeños blogs con experiencia en la configuración o mejora de codigo." })
            ] }) }),
            /* @__PURE__ */ jsx("a", { href: "https://dev.to/echeverriajesus", target: "_blank", rel: "noopener noreferrer", className: "text-base font-bold text-blue-600 animate-bounce pt-2", children: "DEV.TO ->" }),
            /* @__PURE__ */ jsx("div", { className: "text-slate-600 line-clamp-3 my-2", children: "Plataforma donde puedes realizar blogs." }),
            /* @__PURE__ */ jsx("div", { className: "flex pt-3 w-full justify-center", children: /* @__PURE__ */ jsx("img", { className: "w-auto md:w-1/2 rounded-md", src: "/imgs/devto.png" }) })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "article",
        {
          id: "tabpanel-3",
          className: `animate animate-expand-vertically w-full bg-white rounded-2xl shadow-xl ${activeTab === 3 ? "block" : "hidden"}`,
          role: "tabpanel",
          tabIndex: "0",
          "aria-labelledby": "tab-3",
          children: /* @__PURE__ */ jsx("article", { className: "w-full bg-white rounded-2xl shadow-xl flex", children: /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col justify-center p-5", children: [
            /* @__PURE__ */ jsx("div", { className: "flex border-b pb-3 justify-between", children: /* @__PURE__ */ jsxs("header", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-caveat text-lg font-signika text-sky-800", children: "Videos tutoriales sobre programación." }),
              /* @__PURE__ */ jsx("span", { className: "font-roboto text-center", children: "Realicé algunos videos sencillos pero interesantes para la programación." })
            ] }) }),
            /* @__PURE__ */ jsx("a", { href: "https://dev.to/echeverriajesus", target: "_blank", rel: "noopener noreferrer", className: "text-base font-bold text-blue-600 animate-bounce pt-2", children: "YOUTUBE ->" }),
            /* @__PURE__ */ jsx("div", { className: "text-slate-600 line-clamp-3 my-2", children: "Plataforma YouTube." }),
            /* @__PURE__ */ jsx("div", { className: "flex pt-3 w-full justify-center", children: /* @__PURE__ */ jsx("img", { className: "w-auto md:w-1/2 rounded-md", src: "/imgs/youtube.png" }) })
          ] }) })
        }
      )
    ] }) })
  ] });
};

const $$Astro = createAstro();
const $$Recursos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Recursos;
  return renderTemplate`${renderComponent($$result, "Title", $$Title, { "title": "Recursos:" })} ${maybeRenderHead()}<section class="w-full lg:-mt-5"> ${renderComponent($$result, "TabsComponente", TabsComponent, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/laragon/laragon/www/PortfolioNoeE/src/components/React/TabsComponent", "client:component-export": "default" })} </section>`;
}, "D:/laragon/laragon/www/PortfolioNoeE/src/pages/Recursos.astro", void 0);

const $$file = "D:/laragon/laragon/www/PortfolioNoeE/src/pages/Recursos.astro";
const $$url = "/Recursos";

export { $$Recursos as default, $$file as file, $$url as url };
