<script>
	import { cn } from '$lib/utils.js';

	const benefitsLeft = [
		{
			title: 'Personalised Coaching',
			description: 'Receive one-on-one attention tailored to your specific needs and weaknesses.',
			icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-gray-400">
                    <path d="M12 18h.01"></path>
                    <path d="M17 18h.01"></path>
                    <path d="M7 18h.01"></path>
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            `
		},
		{
			title: 'Interactive Classes',
			description:
				'Engage in dynamic and interactive sessions to improve your communication skills.',
			icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-gray-400">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            `
		}
	];

	const benefitsRight = [
		{
			title: 'Daily Psych Homework',
			description: 'Enhance your mental skills with daily assignments and personalized feedback.',
			icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-gray-400">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <line x1="10" y1="9" x2="8" y2="9"></line>
                </svg>
            `
		},
		{
			title: '3D GTO Exercises',
			description:
				'Practice real-life GTO scenarios in a 3D virtual environment for better readiness.',
			icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-gray-400">
                    <path d="M12 2l-8 4v10l8 4 8-4v-10l-8-4z"></path>
                    <path d="M20 6.5l-8-4v10l8 4-8-4v-10l-8 4-8 4v-10l8-4"></path>
                </svg>
            `
		}
	];
</script>

<section class="bg-gray-50 py-16 dark:bg-gray-900">
	<div class="mx-auto max-w-7xl px-4">
		<div class="mb-10 text-center">
			<div class="flex items-center justify-center space-x-2 text-primary">
				<span class="h-px w-8 bg-primary"></span>
				<h2 class="text-xs font-bold tracking-widest uppercase">Why Our Course?</h2>
				<span class="h-px w-8 bg-primary"></span>
			</div>
			<h3 class="mt-2 text-4xl font-bold tracking-tight text-foreground">
				Built and Taught by a Recommended Mentor
			</h3>
			<p class="mt-2 text-lg text-muted-foreground">
				Explore the incredible advantages of enrolling in our course with Divya Lata.
			</p>
		</div>

		<div class="grid gap-8 lg:grid-cols-3">
			<div class="grid h-full w-full gap-6">
				{#each benefitsLeft as benefit}
					<div
						class="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
					>
						<div class="relative z-10 flex flex-col items-start space-y-4">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700"
							>
								{@html benefit.icon}
							</div>
							<h4 class="text-xl font-semibold text-foreground">{benefit.title}</h4>
							<p class="text-sm text-muted-foreground">{benefit.description}</p>
						</div>
					</div>
				{/each}
			</div>

			<div class="relative flex h-full w-full items-center justify-center p-6 lg:p-0">
				<div
					class="relative flex h-full max-w-sm flex-col items-center justify-start overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-lg dark:border-gray-700 dark:bg-gray-800"
				>
					<div
						class="relative h-40 w-40 overflow-hidden rounded-full border-4 border-gray-300 dark:border-gray-600"
					>
						<img src="/mentor.jpg" alt="Divya Lata" class="h-full w-full object-cover" />
					</div>

					<h4 class="mt-4 text-xl font-bold text-foreground">Divya Lata</h4>
					<p class="text-sm text-muted-foreground">Mentor</p>

					<p class="mt-4 text-sm text-muted-foreground italic">
						"I started my journey helping SSB aspirants in 2018. Through hands-on coaching, I
						simplify challenging topics and make them accessible for everyone."
					</p>
				</div>
			</div>

			<div class="grid h-full w-full gap-6">
				{#each benefitsRight as benefit}
					<div
						class="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
					>
						<div class="relative z-10 flex flex-col items-start space-y-4">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700"
							>
								{@html benefit.icon}
							</div>
							<h4 class="text-xl font-semibold text-foreground">{benefit.title}</h4>
							<p class="text-sm text-muted-foreground">{benefit.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
