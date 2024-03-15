/* empty css                                 */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, e as renderComponent } from '../astro_u4BI4c7P.mjs';
import 'kleur/colors';
import { $ as $$Title } from './Certificates_L5pp2v77.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$CardProyect = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardProyect;
  const { url = "ValorDefault", title = "ValorDefault", description = "ValorDefault", date = "ValorDefault" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="w-full flex flex-col bg-white rounded-lg shadow-md px-4 py-5 flex-shrink-0 lg:flex-shrink hover:scale-95 hover:duration-300 border border-slate-300 dark:border-slate-700 dark:bg-[#152730fd]"> <img class="rounded-md pb-5"${addAttribute(url, "src")} alt="ImagenProyecto"> <h5 class="font-bold font-signika border-t pt-2 dark:text-white">${title}</h5> <p class="text-gray-800 text-base dark:text-slate-200">${description}</p> <span class="text-gray-600 font-semibold dark:text-slate-300">${date}</span> </article>`;
}, "D:/laragon/laragon/www/PortfolioNoeE/src/components/CardProyect.astro", void 0);

const $$Astro = createAstro();
const $$Proyects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Proyects;
  return renderTemplate`${renderComponent($$result, "Title", $$Title, { "title": "Proyectos" })} ${maybeRenderHead()}<section class="flex w-full overflow-x-auto gap-6 bg-slate-100 lg:overflow-hidden md:grid md:grid-cols-2 2xl:grid-cols-3 dark:bg-[#192d38fd] rounded-xl p-12"> ${renderComponent($$result, "CardProyect", $$CardProyect, { "url": "https://echeverriajesus.github.io/JesusEcheverria.github.io/static/media/Cinteotl3.901a531b9fc9db2659e6.png", "title": "CINTEOLT", "description": "Sitio web de un restaurante", "date": "Agosto 2023" })} ${renderComponent($$result, "CardProyect", $$CardProyect, { "url": "https://echeverriajesus.github.io/JesusEcheverria.github.io/static/media/SCHOOLBOOK2.b2ac0ffbaa3fb470bfe0.png", "title": "SCHOOLBOOK", "description": "Control escolar web de nivel secundaria.", "date": "Agosto 2023" })} ${renderComponent($$result, "CardProyect", $$CardProyect, { "url": "https://echeverriajesus.github.io/JesusEcheverria.github.io/static/media/PosSystem6.23f1848049a28011d88f.png", "title": "POS SYSTEM", "description": "Systema punto de venta.", "date": "Agosto 2023" })} ${renderComponent($$result, "CardProyect", $$CardProyect, { "url": "https://echeverriajesus.github.io/JesusEcheverria.github.io/static/media/Cinteotl3.901a531b9fc9db2659e6.png", "title": "CINTEOLT", "description": "Sitio web de un restaurante", "date": "Agosto 2023" })} ${renderComponent($$result, "CardProyect", $$CardProyect, { "url": "https://echeverriajesus.github.io/JesusEcheverria.github.io/static/media/SCHOOLBOOK2.b2ac0ffbaa3fb470bfe0.png", "title": "SCHOOLBOOK", "description": "Control escolar web de nivel secundaria.", "date": "Agosto 2023" })} ${renderComponent($$result, "CardProyect", $$CardProyect, { "url": "https://echeverriajesus.github.io/JesusEcheverria.github.io/static/media/PosSystem6.23f1848049a28011d88f.png", "title": "POS SYSTEM", "description": "Systema punto de venta.", "date": "Agosto 2023" })} </section>`;
}, "D:/laragon/laragon/www/PortfolioNoeE/src/pages/Proyects.astro", void 0);

const $$file = "D:/laragon/laragon/www/PortfolioNoeE/src/pages/Proyects.astro";
const $$url = "/Proyects";

export { $$Proyects as default, $$file as file, $$url as url };
