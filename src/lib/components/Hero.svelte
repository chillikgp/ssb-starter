<script>
	export let title;
	export let subtitle;
	export let ctaText;
	export let ctaHref;
</script>

<section class="py-12">
	<div class="mx-auto max-w-3xl text-center">
		<h1 class="text-4xl font-bold">{title}</h1>
		<p class="mt-4 text-lg">{subtitle}</p>
		<a href={ctaHref} class="mt-6 inline-block rounded bg-indigo-600 px-6 py-3 text-white"
			>{ctaText}</a
		>
	</div>
</section>
