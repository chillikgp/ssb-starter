export function getAllPosts() {
	const modules = import.meta.glob('/src/posts/*.md', { eager: true });
	const posts = Object.entries(modules)
		.map(([path, mod]) => {
			const slug = path.split('/').pop().slice(0, -3);
			const { metadata } = mod; // mdsvex exposes frontmatter as `metadata`
			return {
				slug,
				metadata,
				component: mod.default
			};
		})
		.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));
	return posts;
}

export function getPostBySlug(slug) {
	const mod = import.meta.glob('/src/posts/*.md', { eager: true })[`/src/posts/${slug}.md`];
	if (!mod) return null;
	return { slug, metadata: mod.metadata, component: mod.default };
}
