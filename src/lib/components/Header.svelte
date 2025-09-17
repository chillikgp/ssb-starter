<script>
	import { SITE } from '$lib/config.js';
	import { page } from '$app/stores';

	let isMobileMenuOpen = false;

	const navLinks = [
		{ href: '/', text: 'Home' },
		{ href: '/about', text: 'About' },
		{ href: '/blog', text: 'Blog' },
		{ href: '/contact', text: 'Contact' }
	];

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}
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

		<div class="md:hidden">
			<button
				on:click={toggleMobileMenu}
				class="rounded-full bg-white/95 p-2 text-gray-900 shadow-lg"
				aria-label="Open menu"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-6 w-6"
				>
					<line x1="3" y1="12" x2="21" y2="12"></line>
					<line x1="3" y1="6" x2="21" y2="6"></line>
					<line x1="3" y1="18" x2="21" y2="18"></line>
				</svg>
			</button>
		</div>
	</div>

	{#if isMobileMenuOpen}
		<div class="mt-4 md:hidden">
			<div class="mx-4 rounded-lg bg-white/95 p-4 shadow-lg backdrop-blur-sm">
				<nav class="flex flex-col space-y-2">
					{#each navLinks as link}
						<a
							href={link.href}
							class="rounded-md px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100"
							on:click={() => (isMobileMenuOpen = false)}>{link.text}</a
						>
					{/each}
					<a
						href={SITE.calendly}
						target="_blank"
						class="mt-2 rounded-md bg-gray-900 px-4 py-2 text-center text-sm font-semibold text-white"
					>
						Book a Call
					</a>
				</nav>
			</div>
		</div>
	{/if}
</header>
