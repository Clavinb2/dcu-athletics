import { SkeletonCard } from "../components/Skeletons";

export default function RootLoading() {
	return (
		<div className="space-y-6" aria-busy="true" aria-live="polite">
			<SkeletonCard />
			<SkeletonCard />
			<SkeletonCard />
		</div>
	);
}


