import { popularPosts } from "@/lib/placeholder";
import { Icons } from "../Icons";

const PopularPosts = () => {
	return (
		<ul className="overflow-auto">
			{popularPosts.map((post, idx) => (
				<li key={`post-${idx}`} className="flex items-center gap-2 group cursor-pointer py-2">
					<Icons.arrow className="h-6 w-6 group-hover:translate-x-1 transition-all"/>
					{post.title}
				</li>
			))}
		</ul>
	);
};

export default PopularPosts;