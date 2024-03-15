/* empty css                                 */
import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_u4BI4c7P.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"archivo-con-markdowm\">Archivo con Markdowm</h1>\n<p>Prrafo en el archivo Markdowm</p>";

				const frontmatter = {};
				const file = "D:/laragon/laragon/www/PortfolioNoeE/src/pages/Markdowm/Notas.md";
				const url = "/Markdowm/Notas";
				function rawContent() {
					return "# Archivo con Markdowm\r\n\r\nPrrafo en el archivo Markdowm";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"archivo-con-markdowm","text":"Archivo con Markdowm"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
