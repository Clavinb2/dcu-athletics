import { SkeletonCard } from "../../components/Skeletons";

export default function NewsLoading() {
	return (
		<div className="space-y-6" aria-busy="true" aria-live="polite">
			<SkeletonCard />
			<SkeletonCard />
		</div>
	);
}


