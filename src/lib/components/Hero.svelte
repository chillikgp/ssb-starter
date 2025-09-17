<script>
	export let title;
	export let subtitle;
	export let ctaText;
	export let ctaHref;
</script>

<section
	class="relative w-full bg-cover bg-center text-white"
	style="background-image: url('/hero-bg.jpg');"
>
	<div class="absolute inset-0 bg-black opacity-60"></div>

	<div class="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-end px-4 py-16">
		<div class="flex w-full flex-col items-start justify-end space-y-8">
			<div class="max-w-xl space-y-4">
				<h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
				<p class="text-xl text-gray-300">{subtitle}</p>
				<div class="flex space-x-4">
					<a
						href={ctaHref}
						class="hover:bg-opacity-90 rounded-lg bg-[#ff6c22] px-8 py-3 font-semibold text-white transition-colors"
					>
						{ctaText}
					</a>
					<a
						href="/about"
						class="rounded-lg border border-white px-8 py-3 font-semibold transition-colors hover:bg-white hover:text-black"
					>
						Visit Us
					</a>
				</div>
			</div>

			<div class="absolute right-4 bottom-16 md:right-16">
				<div class="max-w-sm rounded-lg bg-white p-6 text-black shadow-lg">
					<p class="text-sm italic">
						"Your coaching helped me ace the SSB interviews! It's more than just a class, it's a
						lifestyle."
					</p>
					<p class="mt-4 text-right text-xs font-semibold">— Divya, Student since 2025</p>
				</div>
			</div>
		</div>
	</div>
</section>
