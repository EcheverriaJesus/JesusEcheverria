/* empty css                                 */
import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_u4BI4c7P.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"2-años-de-experiencia-en-desarrollo-web-full-stack\">+2 años de experiencia en desarrollo web full stack.</h1>";

				const frontmatter = {};
				const file = "D:/laragon/laragon/www/PortfolioNoeE/src/pages/Markdowm/Description.md";
				const url = "/Markdowm/Description";
				function rawContent() {
					return "# +2 años de experiencia en desarrollo web full stack.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"2-años-de-experiencia-en-desarrollo-web-full-stack","text":"+2 años de experiencia en desarrollo web full stack."}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
