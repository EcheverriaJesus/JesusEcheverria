/* empty css                                 */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent } from '../astro_u4BI4c7P.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$2 = createAstro();
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Title;
  const { title = "ValorDefaul" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h3 class="text-2xl font-bold font-signika tracking-wider dark:text-white text-center"> ${title} </h3> <div class="flex justify-center mx-auto mt-3 mb-9 lg:pb-7"> <span class="inline-block w-40 h-1 bg-orange-500 rounded-full"></span> <span class="inline-block w-5 h-1 mx-1 bg-orange-500 rounded-full"></span> <span class="inline-block w-1 h-1 bg-orange-500 rounded-full"></span> </div>`;
}, "D:/laragon/laragon/www/PortfolioNoeE/src/components/Title.astro", void 0);

const $$Astro$1 = createAstro();
const $$CardCertificate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardCertificate;
  const { title = "valueDafault", nameCertificate = "valueDafault", plataforma = "valueDafault", date = "valueDafault" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="w-full bg-white rounded-2xl shadow-xl flex lg:hover:scale-95 lg:hover:duration-300"> <div class="w-full flex flex-col justify-center p-5"> <div class="flex border-b pb-3 justify-between"> <header> <div class="font-caveat text-lg font-signika text-sky-600">${title}</div> <span class="text-base font-semibold font-roboto text-slate-900">${nameCertificate}</span> </header> <a href="/" class="shrink-0 h-[30px] w-[30px] border border-slate-200 hover:border-slate-300 rounded-full shadow inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out" aria-label="Like"> <svg class="w-5 stroke-red-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path> </svg> </a> </div> <h5 class="text-base font-bold text-slate-900">${plataforma}</h5> <div class="text-slate-600 text-sm line-clamp-3 my-2">🗓️ ${date}</div> </div> </article>`;
}, "D:/laragon/laragon/www/PortfolioNoeE/src/components/CardCertificate.astro", void 0);

const $$Astro = createAstro();
const $$Certificates = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Certificates;
  return renderTemplate`${renderComponent($$result, "Title", $$Title, { "title": "Certificados:" })} ${maybeRenderHead()}<div class="grid grid-cols-1 w-full gap-7 drop-shadow-md md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"> ${renderComponent($$result, "CardCertificate", $$CardCertificate, { "title": "Constancia:", "nameCertificate": "Ingl\xE9s B1", "plataforma": "Tecnol\xF3gico de Iguala", "date": "Agosto 2023" })} ${renderComponent($$result, "CardCertificate", $$CardCertificate, { "title": "Constancia:", "nameCertificate": "Curso Laravel", "plataforma": "Tecnol\xF3gico de Iguala", "date": "Agosto 2023" })} ${renderComponent($$result, "CardCertificate", $$CardCertificate, { "title": "Certificado:", "nameCertificate": "Introducci\xF3n a la programaci\xF3n", "plataforma": "Open Bootcamp", "date": "Agosto 2023" })} ${renderComponent($$result, "CardCertificate", $$CardCertificate, { "title": "Certificado:", "nameCertificate": "HTML & CSS", "plataforma": "Open Bootcamp", "date": "Agosto 2023" })} ${renderComponent($$result, "CardCertificate", $$CardCertificate, { "title": "Certificado:", "nameCertificate": "Electron.js", "plataforma": "ED Team", "date": "Agosto 2023" })} </div>`;
}, "D:/laragon/laragon/www/PortfolioNoeE/src/pages/Certificates.astro", void 0);

const $$file = "D:/laragon/laragon/www/PortfolioNoeE/src/pages/Certificates.astro";
const $$url = "/Certificates";

const Certificates = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Certificates,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Title as $, Certificates as C, $$Certificates as a };
