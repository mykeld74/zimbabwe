<script>
	import '$css/app.scss';
	import Background from '$components/background.svelte';
	import Image from '$components/image.svelte';
</script>

<svelte:head>
	<script src="https://js.churchcenter.com/modal/v1"></script>
</svelte:head>

<Background />
<slot />

<footer>
	<div class="logoContainer">
		<a href="https://westwoodscc.org" target="_blank" rel="noopener noreferrer"
			><Image source="wwLogo" altText="Westwoods Community Church Logo" /></a
		>
	</div>
	<a href="https://westwoodscc.org" target="_blank" rel="noopener noreferrer"
		><p class="ww">Westwoods Community Church</p></a
	>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0 20px;
	}
	.logoContainer {
		width: 120px;
	}
	.ww {
		color: #fff;
	}
</style>
