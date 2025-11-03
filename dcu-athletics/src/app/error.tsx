"use client";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	return (
		<div className="max-w-5xl mx-auto p-6">
			<div role="alert" className="rounded-xl border border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950 p-6">
				<h1 className="text-2xl font-bold text-red-700 dark:text-red-300">Something went wrong</h1>
				<p className="mt-2 text-gray-700 dark:text-gray-300">{error.message || "An unexpected error occurred."}</p>
				{error.digest && <p className="text-xs text-gray-500 mt-1">Error id: {error.digest}</p>}
				<button onClick={reset} className="mt-4 rounded bg-blue-700 text-white px-4 py-2 hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
					Try again
				</button>
			</div>
		</div>
	);
}


