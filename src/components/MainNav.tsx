"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Icons } from "./Icons"
import { ModeToggle } from "./ui/mode-toggle"
import { POSTS } from "@/lib/constants"

export const MainNav = ({ className }: { className?: string}) => {
  return (
		<div className={cn("flex items-center justify-between py-2 z-50", className)}>
			<Link href="/">
				<div className={cn("flex items-center text-xl space-x-2 font-bold")}>
					<Icons.logo className="h-12 w-12" />
					<span className="hidden md:inline">Christopher Talavera</span>
				</div>
			</Link>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Posts</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
								{POSTS.map((post) => (
									<ListItem
										key={post.title}
										title={post.title}
										href={post.href}
									>
										{post.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
            <Link href="https://christophertalavera.dev" legacyBehavior passHref>
							<NavigationMenuLink target="_blank" className={navigationMenuTriggerStyle()}>
								About
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
    	</NavigationMenu>
			<div className="flex items-center space-x-0 md:space-x-1 w-20">
				<ModeToggle />
				<Link href="/rss" className="hover:bg-accent hover:text-accent-foreground rounded-lg px-2 py-3 md:px-3">
					<Icons.rss className="h-4 w-4" />
				</Link>
			</div>
		</div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
