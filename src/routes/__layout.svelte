<script>
	import '$css/app.scss';
	import Background from '$components/background.svelte';
</script>

<svelte:head>
	<script src="https://js.churchcenter.com/modal/v1"></script>
</svelte:head>

<Background />
<slot />
