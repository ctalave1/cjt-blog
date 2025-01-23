import { baseUrl } from "./sitemap";

const robots = () => {
  return {
    rules: [
      {
        userAgent: "*"
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`
  }
};

export default robots;