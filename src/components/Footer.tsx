import { POSTS } from "@/lib/constants";
import { Icons } from "./Icons";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
	return (
		<footer className="bg-gray-100 py-8 dark:bg-gray-800 mt-10">
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
					<div className="space-y-4">
						<div className="flex items-center space-x-2">
							<Icons.logo className="h-6 w-6" />
							<span className="text-md font-semibold">Christopher Talavera</span>
						</div>
						<p className="text-gray-500 dark:text-gray-400 text-sm">
							Stay up to date with the latest news and insights from this blog.
						</p>
						<div className="flex space-x-4">
							<a href="https://www.linkedin.com/in/christopher-talavera-9a7651130/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
								<Icons.linkedIn className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"/>
							</a>
							<a href="https://github.com/ctalave1" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
								<Icons.github className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"/>
							</a>
							<a href="https://christophertalavera.dev" target="_blank" rel="noopener noreferrer" aria-label="My Portfolio/Resume Website">
								<Icons.logoAlt1 className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"/>
							</a>
						</div>
					</div>
					<div className="space-y-4">
						<h3 className="text-md font-semibold">Blog</h3>
						<ul className="space-y-2 text-sm">
							{POSTS.map((post, idx) => (
								<li key={`footer-post-${idx}`}>
									<Link href={post.href} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
										{post.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="space-y-4">
						<h3 className="text-md font-semibold">Links</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="mailto:talavera.christopher@yahoo.com" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
									Contact
								</a>
							</li>
							<li>
								<Link href="/terms-of-service" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
									Terms of Service
								</Link>
							</li>
							<li>
								<Link href="/privacy-policy" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
									Privacy Policy
								</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-4">
						<h3 className="text-md font-semibold">Newsletter</h3>
						<p className="text-gray-500 dark:text-gray-400 text-sm">Subscribe to our newsletter to stay up to date with the latest news and updates.</p>
            <form>
              <div className="flex space-x-2">
                <Input className="flex space-x-2" type="email" placeholder="Enter your email" />
                <Button>
                  Subscribe
                </Button>
              </div>
            </form>
					</div>
				</div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
          &copy; 2025 Christopher Talavera. All rights reserved.
        </div>
			</div>
		</footer>
	);
};
export default Footer;