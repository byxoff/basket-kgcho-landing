# Турнир КГЧО - Лендинг

Легкий и удобный лендинг для турнира по баскетболу 3x3 на Кубок Губернатора Челябинской области.

## 🎯 Управление контентом

**Вся информация по редактированию контента находится в [`CONTENT_MANAGEMENT.md`](./CONTENT_MANAGEMENT.md)**

### Быстрый старт для редакторов:

1. **Через Keystatic (UI как в WordPress):**
   - Запусти `pnpm dev`
   - Открой `http://localhost:5100/keystatic`
   - Редактируй контент через красивую админку

2. **Прямое редактирование файлов:**
   - Весь контент в папке `src/content/`
   - Редактируй JSON файлы напрямую (`.json`, не `.yaml`)

**Принцип:** Content is Data. Контент отдельно, дизайн отдельно.

---

# blackspike astro landing page (оригинальный README)

[<img src="public/theme-preview/github-preview.jpg" alt="screens showing theme parts on iPads" style="max-width: 100%; height: auto; width: 100%;" width="1600">](public/theme-preview/github-preview.jpg)

## A free, modern, [Astro](https://astro.build/) landing page theme made with [Tailwind](https://tailwindcss.com/) to help kick start your next Astro project

We built this page as the first version of our own website, [blackspike.com](https://www.blackspike.com), but switched to a different design later.

Rather than let it gather dust, we decided to modernise it, try out some fresh new CSS features and give it back to the Astro community.

You can read more about how we built it and the cool new tech we used [on our blog post](https://www.blackspike.com/blog/blackspike-free-astro-tailwind-theme/).

Now available as an official Astro theme! [Download it from the Astro themes page](https://astro.build/themes/details/blackspike-astro-landing-page/)

## Live demo https://astro-theme.blackspike.com

We hope you find it useful!

## License

Theme and 3D images are licensed under a [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/).

Created by blackspike [blackspike design](https://www.blackspike.com) – a web design & development team specialising in Astro, Vue, Nuxt & Wordpress websites

## Astro 5 Features

- [Image component](https://docs.astro.build/en/guides/images/#display-optimized-images-with-the-image--component) for optimised AVIF images
- All-[JSX](https://docs.astro.build/en/reference/astro-syntax/) native astro components
- SVGs imported as [SVG components](https://docs.astro.build/en/guides/images/#svg-components)
- JSON-powered content (easy to edit UI text or hook up a CMS!)
- Experimental [Fonts API](https://docs.astro.build/en/reference/experimental-flags/fonts/)

## CSS & HTML Features

- [Tailwind 4](https://tailwindcss.com/blog/tailwindcss-v4)
- HTML modal dialog
- JS-free scroll-linked animations
- JS-free exclusive accordions with details/summary (animated!)
- Container queries
- Linear easing for bouncing / springing
- Text wrap pretty / balance

## JS Features

- [swiper.js](https://swiperjs.com/) carousel

## Previews

[<img src="public/theme-preview/blackspike-theme-1.jpg" alt="screenshot of dark theme landing page on desktop and on ipad browsers" style="max-width: 100%; height: auto; width: 100%;" width="1600">](public/theme-preview/blackspike-theme-1.jpg)

[<img src="public/theme-preview/blackspike-theme-2.jpg" alt="screenshot of dark theme carousel slides with 3D backgrounds" style="max-width: 100%; height: auto; width: 100%;" width="1600">](public/theme-preview/blackspike-theme-2.jpg)

[<img src="public/theme-preview/blackspike-theme-4.jpg" alt="screens showing theme parts" style="max-width: 100%; height: auto; width: 100%;" width="1600">](public/theme-preview/blackspike-theme-4.jpg)

[<img src="public/theme-preview/blackspike-theme-5.jpg" alt="dark theme pricing section on laptop and iPhone browsers" style="max-width: 100%; height: auto; width: 100%;" width="1600">](public/theme-preview/blackspike-theme-5.jpg)

[<img src="public/theme-preview/blackspike-theme-full.webp" alt="full page preview" style="max-width: 100%; height: auto; width: 100%;" width="1600">](public/theme-preview/blackspike-theme-full.webp)

## Credits

- Fake logos by [uicontent.co](https://uicontent.co/svg-dummy-logo/)
- Quote avatar person by [thispersondoesnotexist.com](https://thispersondoesnotexist.com/)
- Misc icons and logo from [icones.js.org](https://icones.js.org/) by [@antfu](https://github.com/antfu)
- Carousel powered by [swiperjs.com](https://swiperjs.com/)
- Inter font by [rsms.me](https://rsms.me/inter/)

## Tags

#tailwind #tailwind4 #astro #landingPage #css #html #swiper #dark #theme

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

