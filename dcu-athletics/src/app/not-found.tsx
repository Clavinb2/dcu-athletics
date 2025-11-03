export default function NotFound() {
	return (
		<div className="text-center py-20">
			<h1 className="text-4xl font-bold text-blue-700 dark:text-yellow-300">Page not found</h1>
			<p className="mt-3 text-gray-600 dark:text-gray-400">We couldn't find what you're looking for.</p>
			<div className="mt-6">
				<a href="/" className="inline-block rounded bg-blue-700 text-white px-5 py-2 hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Go home</a>
			</div>
		</div>
	);
}


