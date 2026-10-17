// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	redirects: {
		"/studio": {
			status: 301,
			destination:
				"https://www.sanity.io/@o1k0qyt1x/studio/dy5smixk8otqm2220gtg6xg5/default/structure",
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
