<script>
</script>

<svelte:head>
	<title>Zimbabwe Peniel Centre Sponsorship | Westwoods Community Church</title>
	<meta
		name="description"
		content="The Peniel Center in Zimbabwe houses, feeds and provides educational opportunities for Zimbabwe's disadvantaged youth."
	/>
</svelte:head>

<main>
	<h1>
		The Peniel Centre is a Christian organisation that provides education, shelter and food to
		Zimbabwe's disadvantaged youth. The centre is located in the heart of the Bulowayo district,
		where the majority of the population lives.
	</h1>
	<p>To sponsor a child or make a one time donation please click the button below.</p>

	<a href="/sponsorship"><p class="donate">Donate</p></a>
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		color: #fff;
		width: 90vw;
		max-width: 1170px;
		margin: 0 auto 5vh;
		min-height: 80vh;
	}
	h1 {
		font-size: clamp(20px, 5vw, 40px);
	}
	p {
		font-size: clamp(16px, 2.5vw, 24px);
	}
	a {
		text-decoration: none;
	}
	.donate {
		background: var(--green);
		border-radius: 5px;
		padding: 10px 20px;
		font-weight: 500;
		font-size: clamp(16px, 2.5vw, 24px);
		width: 200px;
		text-align: center;
		color: #fff;
		text-transform: uppercase;
		cursor: pointer;
	}
</style>
