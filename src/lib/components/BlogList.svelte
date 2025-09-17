<script>
	import { getAllPosts } from '$lib/posts.js';

	// Get all posts and slice to show only the first 3
	const posts = getAllPosts().slice(0, 3);
</script>

<section class="bg-gray-100 py-16 dark:bg-gray-900">
	<div class="mx-auto max-w-5xl px-4">
		<h2 class="mb-10 text-center text-4xl font-bold text-foreground">Latest Blog Posts</h2>
		<div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
			{#each posts as post}
				<a
					href={`/posts/${post.slug}`}
					class="block rounded-xl border border-border bg-card p-6 shadow-md transition-shadow duration-300 hover:shadow-xl"
				>
					<h3 class="text-xl font-semibold text-primary">{post.metadata.title}</h3>
					<p class="mt-2 text-sm text-muted-foreground">{post.metadata.description}</p>
				</a>
			{/each}
		</div>
		<div class="mt-10 text-center">
			<a
				href="/blog"
				class="inline-block text-lg font-semibold text-primary underline transition-opacity hover:opacity-80"
			>
				See all blog posts →
			</a>
		</div>
	</div>
</section>
