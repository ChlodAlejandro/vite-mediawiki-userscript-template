import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { readFileSync } from 'fs';
import mediawikiUserscript from 'vite-plugin-mediawiki-userscript';

// https://vitejs.dev/config/
export default defineConfig( {
	plugins: [
		vue(),
		vueJsx(),
		mediawikiUserscript( {
			name: 'codex-test',
			entry: './src/main.ts',
			using: [
				'vue',
				'@wikimedia/codex'
			],
			banner: readFileSync( './BANNER.txt', 'utf8' )
		} )
	],
	resolve: {
		alias: {
			'@': fileURLToPath( new URL( './src', import.meta.url ) )
		}
	},
	server: {
		hmr: true,
		strictPort: true
	}
} );
