import type { MetadataRoute } from "next"; 
export default function sitemap(): MetadataRoute.Sitemap { 
	return [{ url: "https://deeptraining-lilac.vercel.app/", priority: 1 }];
} 