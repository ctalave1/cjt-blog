import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "../../utils";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { BreadcrumbWithCustomSeparator as Breadcrumb } from "@/components/Breadcrumb";
import CustomMDX from "@/components/CustomMDX";
import ReportViews from "@/components/ReportViews";
import { baseUrl } from "@/app/sitemap";

export const generateStaticParams = () => {
  let posts = getBlogPosts();

  return posts.map(post => ({
    slug: post.slug
  }));
};

export const generateMetadata = ({ params }: {params: { category: string, slug: string }} ) => {
  let { category, slug } = params;

  let post = getBlogPosts().find(post => post.slug === slug);

  if (!post) {
    return;
  }

  let { title, publishedAt: publishedTime, summary: description, image } = post.metadata;

  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.metadata.category}/${post.slug}`,
      images: [
        {
          url: ogImage
        }
      ]
    }
  };
  
  return {
    title: slug.toLocaleUpperCase(),
    description: `All articles regarding ${category}`
  };
};

const Page = ({ params }: { params: { category: string, slug: string } }) => {
  let post = getBlogPosts().find(post => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
    <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.metadata.category}/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Christopher Talavera Blog",
            },
          }),
        }}
      />
      <ReportViews
        category={post.metadata.category}
        title={post.metadata.title}
        slug={post.slug}
      />
      <Header>
        <Container>
          <Breadcrumb 
            category={post.metadata.category}
            slug={post.slug}
          />
          <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
            {post.metadata.title}
          </h1>
          <div className="flex justify-between items-center mt-2 mb-4 text-sm">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">{formatDate(post.metadata.publishedAt)}</p>
          </div>
        </Container>
      </Header>
      <Container>
        <article className="prose">
          <CustomMDX source={post.content}/>
        </article>
      </Container>
    </>
  );
};

export default Page;