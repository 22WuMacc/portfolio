import { createClient } from "@sanity/client";

export const client = createClient({
	projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || "ymzxjfdz",
	dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
	apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION || "2024-01-01",
	useCdn: false,
});
