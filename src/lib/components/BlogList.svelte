<script>
	// Import the function you need
	import { getAllPosts } from '$lib/posts.js';

	// Call the function to get the posts
	const posts = getAllPosts();
</script>

<section>
	<h2>Latest Blog Posts</h2>
	<ul>
		{#each posts as post}
			<li>
				<a href={`/posts/${post.slug}`}>
					<h3>{post.metadata.title}</h3>
					<p>{post.metadata.description}</p>
				</a>
			</li>
		{/each}
	</ul>
</section>
