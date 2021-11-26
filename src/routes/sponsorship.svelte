<script>
	import Form from '$components/sponsorshipForm.svelte';
</script>

<svelte:head>
	<title>Zimbabwe Sponsorship Form</title>
</svelte:head>

<main>
	<div>
		<h1>Sponsorship</h1>
	</div>
	<Form />

	<div class="oneTimeDonation">
		<p class="oneTime">Looking to make a one-time donation? Click the button below.</p>
		<a
			href="https://westwoods.churchcenter.com/giving/to/zimbabwe-sponsorship?open-in-church-center-modal=true"
			target="_blank"
		>
			<button class="button" id="linkToDonate">
				<span>One Time Donation</span>
			</button>
		</a>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		min-height: 100vh;
	}
	h1 {
		color: #fff;
	}
	.oneTimeDonation {
		width: 90vw;
		max-width: 500px;
		background: rgba(255, 255, 255, 0.8);
		padding: 20px;
		margin-top: 20px;
	}
	button {
		width: 100%;
	}
</style>
