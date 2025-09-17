<script>
	import { SITE } from '$lib/config.js';
	import { page } from '$app/stores';

	const navLinks = [
		{ href: '/', text: 'Home' },
		{ href: '/about', text: 'About' },
		{ href: '/blog', text: 'Blog' },
		{ href: '/contact', text: 'Contact' }
	];
</script>

<header class="absolute z-10 w-full py-6">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4">
		<a href="/" class="text-2xl font-bold text-white transition-opacity hover:opacity-80">
			{SITE.title}
		</a>
		<div class="hidden rounded-full bg-white/95 p-2 shadow-lg backdrop-blur-sm md:block">
			<nav class="flex items-center">
				{#each navLinks as link}
					<a
						href={link.href}
						class="rounded-full px-5 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
						class:!bg-gray-900={$page.url.pathname === link.href}
						class:!text-white={$page.url.pathname === link.href}
						class:hover:!text-white={$page.url.pathname === link.href}
					>
						{link.text}
					</a>
				{/each}
				<a
					href={SITE.calendly}
					target="_blank"
					class="ml-2 rounded-full border border-gray-400 px-5 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
				>
					Book a Call
				</a>
			</nav>
		</div>
	</div>
</header>
