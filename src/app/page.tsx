import LatestPosts from "@/components/home/LatestPosts";
import { MainNav } from "@/components/MainNav";
import Container from "@/components/Container";
import TopCategories from "@/components/home/TopCategories";
import PopularPosts from "@/components/home/PopularPosts";

export default function Home() {
  return (
    <>
      <Container>
        <MainNav />
        <main className={"flex flex-col items-start justify-evenly mt-16 md:flex-row" /*"py-20"*/}>
          <div className="mr-5">
            <LatestPosts />
          </div>
          <div className="h-screen border-l-2 pl-5 sticky top-0">
            <div>
              <h1 className="font-bold mb-4">TOP CATEGORIES</h1>
              <TopCategories />
            </div>
            <div className="mt-10">
                <h1 className="font-bold mb-4">POPULAR POSTS</h1>
                <PopularPosts />
            </div>
          </div>
        </main>
      </Container>
    </>
  );
}
