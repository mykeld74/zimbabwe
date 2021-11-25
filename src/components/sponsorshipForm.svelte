<script>
	import Children from '$data/zimkids.json';

	const Kids = Children.child;
	let fields = { firstName: '', lastName: '', email: '', phone: '', sponsoredChild: '' };
	let errors = { firstName: '', lastName: '', email: '', phone: '', sponsoredChild: '' };
	let formIsValid = false;

	const handleSubmit = (e) => {
		formIsValid = true;

		if (fields.firstName.length < 3) {
			formIsValid = false;
			errors.firstName = 'First name must be at least 3 characters long';
		} else {
			errors.firstName = '';
		}

		if (fields.lastName.length < 3) {
			formIsValid = false;
			errors.lastName = 'Last name must be at least 3 characters long';
		} else {
			errors.lastName = '';
		}

		if (fields.email.length < 3) {
			formIsValid = false;
			errors.email = 'Email must be at least 3 characters long';
		} else {
			errors.email = '';
		}

		if (fields.phone.length < 3) {
			formIsValid = false;
			errors.phone = 'Phone must be at least 3 characters long';
		} else {
			errors.phone = '';
		}

		if (fields.sponsoredChild !== 'Select One:') {
			formIsValid = false;
			errors.sponsoredChild = 'Please select a child to sponsor';
		} else {
			errors.sponsoredChild = '';
		}

		const scriptURL =
			'https://script.google.com/macros/s/AKfycbzIAZ85k8Tv8ffm9I_wXEaiTMXfuXAfRYRsNLcforilZk2sXa24GgythlB7in9pL9PPZw/exec';
		const form = document.forms['zimbabweSponsorship'];
		e.preventDefault();
		if (formIsValid) {
			fetch(scriptURL, { method: 'POST', body: new FormData(form) })
				.then((response) => console.log('Success!', response))
				.catch((error) => console.error('Error!', error.message));
			form.reset();
		}
	};
</script>

<div class="formContainer">
	<form name="zimbabweSponsorship" class="zimForm">
		<input
			name="firstName"
			type="text"
			placeholder="First Name"
			bind:value={fields.firstName}
			required
		/>
		<input
			name="lastName"
			type="text"
			placeholder="Last Name"
			bind:value={fields.lastName}
			required
		/>
		<input name="email" type="email" placeholder="Email" bind:value={fields.email} required />
		<input name="phone" type="tel" placeholder="Phone" bind:value={fields.phone} required />
		<select name="sponsoredChild" bind:value={fields.sponsoredChild} required>
			<option selected>Select One:</option>
			{#each Kids as kid}
				{#if !kid.sponsored}
					<option value={kid.name}>{kid.name}</option>
				{/if}
			{/each}
		</select>
		<button type="submit" on:click={handleSubmit}>Send</button>
	</form>
</div>

<style lang="scss">
	.formContainer {
		width: 90vw;
		max-width: 500px;
		background: rgba(255, 255, 255, 0.8);
		padding: 20px;
	}
	.zimForm {
		display: flex;
		flex-direction: column;
		input,
		select {
			height: 40px;
			border: none;
			border-radius: 5px;
			margin-bottom: 15px;
		}
		button {
			height: 40px;
			border: none;
			border-radius: 5px;
			background: var(--green);
		}
	}
</style>
