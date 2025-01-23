import { cn } from "@/lib/utils";

const Container = ({ className, children }: {className?: string, children: React.ReactNode}) => {
	return (
		<div className={cn(/*"mx-auto w-full max-w-screen-xl px-2.5 md:px-20"*/"px-8 md:px-16 lg:px-24", className)}>
			{children}
		</div>
	);
};

export default Container;