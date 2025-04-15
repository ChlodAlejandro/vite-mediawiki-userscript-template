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
		strictPort: true,
		// You should always set these two configuration options to a specific set of domains!
		allowedHosts: true,
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	}
} );
