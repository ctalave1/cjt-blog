import { notFound } from "next/navigation";
import { getBlogPosts } from "../utils";
import Link from "next/link";
import CardCategory from "@/components/CardCategory";
import Container from "@/components/Container";
import Header from "@/components/Header";

export const generateStaticParams = () => {
  let posts = getBlogPosts();

  return posts.map (post => ({
    category: post.metadata.category
  }))
};

const Page = ({ params }: { params: { category: string }}) => {
  let posts = getBlogPosts().filter(post => post.metadata.category === params.category);

  console.log({ posts });

  if (!posts.length) {
    notFound();
  } 

  return (
    <>
      <Header>
        <Container>
          <h1 className="title font-semibold text-2xl tracking-wider mt-4 uppercase">
            {posts[0]?.metadata.category}
          </h1>
        </Container>
      </Header>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {posts.sort((a, b) => {
            if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
              return -1;
            }

            return 1;
          }).map((post) => (
            <Link
              key={post.metadata.title}
              href={`/blog/${post.metadata.category}/${post.slug}`}>
                <CardCategory
                  title={post.metadata.title}
                  summary={post.metadata.summary}
                  date={post.metadata.publishedAt}
                />
            </Link>)
          )}
        </div>
      </Container>
    </>
  );
};

export default Page;