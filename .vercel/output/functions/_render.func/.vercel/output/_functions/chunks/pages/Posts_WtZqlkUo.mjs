/* empty css                                 */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_u4BI4c7P.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Posts;
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  console.log(response);
  console.log(posts);
  return renderTemplate`${/* Mapeo de los resultados de la Api iterandolos como Post */
  posts.map((post) => renderTemplate`${maybeRenderHead()}<div>
/* Uso de los datos de la Api en etiquetas HTML */
<h1>${post.userId}</h1><h3>${post.title}</h3><p>${post.body}</p></div>`)}`;
}, "D:/laragon/laragon/www/PortfolioNoeE/src/pages/Posts.astro", void 0);

const $$file = "D:/laragon/laragon/www/PortfolioNoeE/src/pages/Posts.astro";
const $$url = "/Posts";

export { $$Posts as default, $$file as file, $$url as url };
