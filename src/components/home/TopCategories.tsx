import { catergories } from "@/lib/placeholder";
import { Button } from "../ui/button";
import Link from "next/link";

const TopCategories = () => {
	return (
		<div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
			{catergories.map((category => (
				<Button key={category} className="hover:scale-110 transition-all" asChild>
					<Link href={`/blog/${category}`}>
						{category}
					</Link>
				</Button>
			)))}
		</div>
	);
};

export default TopCategories;