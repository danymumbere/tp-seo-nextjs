import type { MetadataRoute } from "next"; 
export default function robots(): MetadataRoute.Robots { 
	return {
		rules: { userAgent: "*", allow: "/" }, 
		sitemap: "https://deeptraining.vercel.app/sitemap.xml", 
	}; 
}