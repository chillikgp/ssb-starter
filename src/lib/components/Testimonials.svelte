<script>
	import { cn } from '$lib/utils.js';

	// You can manage this data in a separate file (e.g., testimonials.js) for a cleaner structure
	const testimonials = [
		{
			text: 'Divya’s coaching helped me ace SSB!',
			author: 'Student A',
			rating: 5
		},
		{
			text: 'Excellent guidance and materials.',
			author: 'Student B',
			rating: 4
		}
		// Add more testimonials here to fill the grid
	];

	function renderStars(rating) {
		let stars = '';
		for (let i = 0; i < 5; i++) {
			if (i < rating) {
				// Gold star
				stars += `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>`;
			} else {
				// Gray star
				stars += `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>`;
			}
		}
		return stars;
	}
</script>

<section class="bg-gray-50 py-16 dark:bg-gray-900">
	<div class="mx-auto max-w-7xl px-4">
		<div class="mb-10 text-center">
			<h2 class="text-4xl font-bold tracking-tight text-foreground">What Students Say</h2>
			<p class="mt-2 text-lg text-muted-foreground">
				Hear from our students who have experienced success.
			</p>
		</div>
		<div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{#each testimonials as testimonial}
				<div
					class="relative flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-md transition-shadow duration-300 hover:shadow-xl"
				>
					<div class="flex items-center justify-between">
						<div class="flex">
							{@html renderStars(testimonial.rating)}
						</div>
						<div class="rounded-full bg-gray-100 p-2 dark:bg-gray-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6 text-gray-400"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"></path>
								<circle cx="12" cy="7" r="4"></circle>
							</svg>
						</div>
					</div>

					<p class="mt-4 text-lg text-card-foreground italic">"{testimonial.text}"</p>

					<div class="mt-6 flex items-center space-x-4">
						<div class="h-10 w-10 rounded-full bg-gray-200"></div>
						<div>
							<p class="text-sm font-semibold text-foreground">{testimonial.author}</p>
							<p class="text-xs text-muted-foreground">Student since 2024</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
