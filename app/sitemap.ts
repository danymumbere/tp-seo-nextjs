import type { MetadataRoute } from "next"; 
export default function sitemap(): MetadataRoute.Sitemap { 
	return [{ url: "https://deeptraining.vercel.app/", priority: 1 }];
} 