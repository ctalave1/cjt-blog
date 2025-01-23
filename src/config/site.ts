type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    portfolio: string;
  }
};

export const siteConfig: SiteConfig = {
  name: "Christopher Talavera Blog",
  description: "A blog of my thoughts on various topics that interest me. Built using Next.js 14 with shadcn/ui, prisma, and markdown.",
  url: "https://cjt-blog.vercel.app/",
  ogImage: "https://cjt-blog.vercel.app/og",
  links: {
    github: "https://github.com/ctalave1",
    portfolio: "https://christophertalavera.dev"
  }
};