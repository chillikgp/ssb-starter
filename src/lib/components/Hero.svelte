<script>
	export let title;
	export let subtitle;
	export let ctaText;
	export let ctaHref;
</script>

<section class="bg-gray-100 py-20 text-center dark:bg-gray-900">
	<div class="mx-auto max-w-4xl px-4">
		<h1 class="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">{title}</h1>
		<p class="mt-4 text-xl text-muted-foreground">{subtitle}</p>
		<a
			href={ctaHref}
			class="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-primary/90"
		>
			{ctaText}
		</a>
	</div>
</section>
