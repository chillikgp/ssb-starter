<script>
	import Hero from '$lib/components/Hero.svelte';
	import Program from '$lib/components/Program.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import RegisterUPI from '$lib/components/RegisterUPI.svelte';
	import BlogList from '$lib/components/BlogList.svelte';
</script>

<main class="mx-auto max-w-5xl space-y-20 p-4">
	<Hero
		title="SSB Coaching by Divya"
		subtitle="A descriptive subtitle for your hero section."
		ctaText="Book a 15 min Call"
		ctaHref="https://calendly.com/chillichacha/talktome"
	/>
	<Program />
	<Testimonials />
	<RegisterUPI />
	<BlogList />
</main>
