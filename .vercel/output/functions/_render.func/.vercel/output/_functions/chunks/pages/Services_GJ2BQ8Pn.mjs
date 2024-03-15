/* empty css                                 */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_u4BI4c7P.mjs';
import 'kleur/colors';
import { $ as $$Title } from './Certificates_L5pp2v77.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';

const Pruebas = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const services = [
    { id: 1, title: "Creación de software a la medida", description: "Descripción del Servicio 1" },
    { id: 2, title: "Instalación circuito de CCTV", description: "Descripción del Servicio 2" }
  ];
  const nextSlide = () => {
    setCurrentSlide((prevSlide2) => (prevSlide2 + 1) % services.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prevSlide2) => (prevSlide2 - 1 + services.length) % services.length);
  };
  return /* @__PURE__ */ jsx("div", { className: "container text-center", children: /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
    services.map((service, index) => /* @__PURE__ */ jsxs("div", { className: `${index === currentSlide ? "opacity-100" : "opacity-0"} transition-opacity duration-500 absolute left-0 right-0 mx-auto`, children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold font-signika tracking-wider dark:text-white", children: service.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-black dark:text-gray-200", children: service.description })
    ] }, service.id)),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full",
        onClick: prevSlide,
        children: "‹"
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full",
        onClick: nextSlide,
        children: "›"
      }
    )
  ] }) }) });
};

const $$Astro = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${renderComponent($$result, "Title", $$Title, { "title": "Servicios:" })} <!-- <section class="container">
    <div class="items-center lg:flex">
        <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
                <h1 class="text-2xl font-bold font-signika tracking-wider dark:text-white">Desarrollo de <br> software <span class="text-orange-400 ">a la medida</span></h1>
                
                <p class="mt-3 text-gray-600 dark:text-gray-400 font-roboto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                <div class="pt-5">
                    <BtnSendMenssage />
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img class="w-full h-full lg:max-w-3xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue-pana.svg">
        </div>
    </div>
</section> --> ${maybeRenderHead()}<section class="container w-full h-screen"> <div class="items-center lg:flex"> <div class="w-full lg:w-1/2 space-y-3"> ${renderComponent($$result, "Pruebas", Pruebas, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/laragon/laragon/www/PortfolioNoeE/src/components/React/Pruebas", "client:component-export": "default" })} </div> <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"> <img class="w-full h-full lg:max-w-3xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue-pana.svg"> </div> </div> </section>`;
}, "D:/laragon/laragon/www/PortfolioNoeE/src/pages/Services.astro", void 0);

const $$file = "D:/laragon/laragon/www/PortfolioNoeE/src/pages/Services.astro";
const $$url = "/Services";

export { $$Services as default, $$file as file, $$url as url };
