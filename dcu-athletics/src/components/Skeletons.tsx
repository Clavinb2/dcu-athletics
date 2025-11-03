export function SkeletonLine({ className = "" }: { className?: string }) {
	return <div className={`animate-pulse rounded bg-gray-200 dark:bg-gray-800 ${className}`} />;
}

export function SkeletonCard() {
	return (
		<div className="rounded-xl border border-gray-100 dark:border-gray-800 p-5">
			<SkeletonLine className="h-6 w-1/3 mb-3" />
			<SkeletonLine className="h-4 w-1/2 mb-2" />
			<SkeletonLine className="h-40 w-full mb-3" />
			<SkeletonLine className="h-4 w-full mb-1" />
			<SkeletonLine className="h-4 w-5/6" />
		</div>
	);
}
