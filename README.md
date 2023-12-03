# Vite
![GIF showing working hot module reload](https://phab.wmfusercontent.org/file/data/lnb2yvjhd6al34lp3g2h/PHID-FILE-j2jkxi47l64q7qih2avt/phpstorm64_9bAKvZkKHr.gif)

This is a template and proof-of-concept for the development of
Vite-based userscripts.

This template works by forming a standard Vue project, marking
`vue` and `@wikimedia/codex` (and possibly more packages, see
`vite.config.ts` for the full list) as external dependencies,
building the project, wrapping the result in a `mw.loader.using`
call. [vite-plugin-mediawiki-userscript](https://www.npmjs.com/package/vite-plugin-mediawiki-userscript)
lets this magic happen.

HMR **is** supported. More instructions can be found when you
visit the web server shown when running `npm run dev`.

`src/main.ts` is the entrypoint. From here, standard bundler
dependency crawling occurs, and the result is a single-file
userscript. Additional ResourceLoader modules, such as `vue`
and `@wikimedia/codex` are not bundled, decreasing overall
size.
