<script>
	import { getAllPosts } from '$lib/posts.js';
	const posts = getAllPosts();
</script>

<div class="mx-auto max-w-5xl space-y-8 px-4 pt-32 pb-16">
	<h1 class="text-center text-4xl font-bold">All Blog Posts</h1>

	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each posts as post}
			<a
				href={`/posts/${post.slug}`}
				class="block rounded-xl border border-border bg-card p-6 shadow-md transition-shadow duration-300 hover:shadow-xl"
			>
				<h2 class="text-xl font-semibold text-primary">{post.metadata.title}</h2>
				<p class="mt-2 text-sm text-muted-foreground">{post.metadata.description}</p>
				<p class="mt-4 text-xs text-muted-foreground">
					Published on {new Date(post.metadata.date).toLocaleDateString()}
				</p>
			</a>
		{/each}
	</div>
</div>
