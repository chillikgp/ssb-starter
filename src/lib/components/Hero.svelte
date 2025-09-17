<script>
	export let title;
	export let subtitle;
	export let ctaText;
	export let ctaHref;
</script>

<section
	class="relative h-[80vh] w-full bg-cover bg-center text-white"
	style="background-image: url('/hero-bg.jpg');"
>
	<div class="absolute inset-0 bg-black opacity-60"></div>

	<div class="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4">
		<div class="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			<div class="flex flex-col justify-center space-y-6 md:col-span-2">
				<h1 class="text-5xl font-extrabold tracking-tight sm:text-6xl">{title}</h1>
				<p class="text-xl text-gray-300">{subtitle}</p>
				<div class="flex space-x-4">
					<a
						href={ctaHref}
						class="rounded-lg bg-primary px-8 py-3 font-semibold transition-colors hover:bg-primary/90"
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

			<div class="lg:col-span-1">
				<div class="mt-8 rounded-lg bg-white p-6 text-black shadow-lg md:mt-0">
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
