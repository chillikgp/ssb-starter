<script>
	import { getPostBySlug } from '$lib/posts.js';
	import { page } from '$app/stores';

	// Extract the slug from the URL parameters
	const { slug } = $page.params;

	// Fetch the post data
	const post = getPostBySlug(slug);

	// Handle the case where the post is not found
	if (!post) {
		// SvelteKit automatically handles 404s for undefined data in +page files
		// You can also use a custom error page here
	}
</script>

{#if post}
	<article class="mx-auto max-w-3xl px-4 py-16">
		<h1 class="text-4xl font-bold">{post.metadata.title}</h1>
		<p class="mt-2 text-sm text-muted-foreground">
			Published on {new Date(post.metadata.date).toLocaleDateString()}
		</p>
		<hr class="my-6" />

		<div class="prose max-w-none">
			<svelte:component this={post.component} />
		</div>
	</article>
{:else}
	<div class="py-16 text-center">
		<h1 class="text-3xl font-bold">404 - Post Not Found</h1>
		<p class="mt-4">The blog post you are looking for does not exist.</p>
	</div>
{/if}
