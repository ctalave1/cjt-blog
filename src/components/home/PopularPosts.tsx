'use client';

import { Icons } from "@/components/Icons";
import useSWR from "swr";
import { fetcher, fetchUrl } from "@/lib/utils";
import Link from "next/link";
import PopularPostsSkeleton from "@/components/skeleton/PopularPostsSkeleton";

const PopularPosts = () => {
  const { data, error, isLoading } = useSWR(fetchUrl, fetcher);

  if (error) return <div>Failed to load</div>;

  if(isLoading) return <PopularPostsSkeleton />;

	return (
		<ul className="overflow-auto">
			{data?.map((post: { category: string, slug: string, title: string }) => (
        <Link key={post.title} href={`/blog/${post.category}/${post.slug}`}>
          <li className="flex items-center gap-2 group cursor-pointer py-2">
            <Icons.arrow className="h-6 w-6 group-hover:translate-x-1 transition-all"/>
            {post.title}
          </li>
        </Link>
			))}
		</ul>
	);
};

export default PopularPosts;