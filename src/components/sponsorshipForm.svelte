<script>
	import Children from '$data/zimkids.json';

	const Kids = Children.child;
	let fields = { firstName: '', lastName: '', email: '', phone: '', sponsoredChild: 'Select One:' };
	let errors = { firstName: '', lastName: '', email: '', phone: '', sponsoredChild: '' };
	let formIsValid = false;
	let formIsSubmitted = false;

	const handleSubmit = (e) => {
		formIsValid = true;
		const emailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,6}$/;

		if (fields.firstName.length < 2) {
			formIsValid = false;
			errors.firstName = 'Please enter your first name.';
		} else {
			errors.firstName = '';
		}

		if (fields.lastName.length < 2) {
			formIsValid = false;
			errors.lastName = 'Please enter your last name.';
		} else {
			errors.lastName = '';
		}

		if (emailTest.test(fields.email) === false) {
			formIsValid = false;
			errors.email = 'Please enter a valid email address.';
		} else {
			errors.email = '';
		}

		if (fields.phone.length < 3) {
			formIsValid = false;
			errors.phone = 'Phone enter your phone number.';
		} else {
			errors.phone = '';
		}

		if (fields.sponsoredChild === 'Select One:') {
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
			formIsSubmitted = true;
			fetch(scriptURL, { method: 'POST', body: new FormData(form) })
				.then((response) => {
					console.log('Success!', response),
						(fields = {
							firstName: '',
							lastName: '',
							email: '',
							phone: '',
							sponsoredChild: 'Select One:'
						});
					document.getElementById('linkToDonate').click();
					formIsSubmitted = false;
				})
				.catch((error) => console.error('Error!', error.message));
		}
	};
</script>

<div class="formContainer">
	<p class="formTitle">Zimbabwe Sponsorship Form</p>
	<p class="formSubtitle">*All fields are required.</p>
	<form name="zimbabweSponsorship" class="zimForm">
		<label for="firstName">First Name*:</label>
		<input
			id="firstName"
			name="firstName"
			type="text"
			placeholder="First Name"
			bind:value={fields.firstName}
			required
		/>
		<p class="error">{errors.firstName}</p>
		<label for="lastName">Last Name*:</label>
		<input
			id="lastName"
			name="lastName"
			type="text"
			placeholder="Last Name"
			bind:value={fields.lastName}
			required
		/>
		<p class="error">{errors.lastName}</p>
		<label for="email">Email address*:</label>
		<input
			id="email"
			name="email"
			type="email"
			placeholder="Email"
			bind:value={fields.email}
			required
		/>
		<p class="error">{errors.email}</p>
		<label for="phone">Phone Number*:</label>
		<input
			id="phone"
			name="phone"
			type="tel"
			placeholder="Phone"
			bind:value={fields.phone}
			required
		/>
		<p class="error">{errors.phone}</p>
		<label for="sponsoredChild">Child you would like to sponsor*:</label>
		<select id="sponsoredChild" name="sponsoredChild" bind:value={fields.sponsoredChild} required>
			<option disabled value="Select One:">Select One:</option>
			{#each Kids as kid}
				{#if !kid.sponsored}
					<option value={kid.name}>{kid.name}</option>
				{/if}
			{/each}
		</select>
		<p class="error">{errors.sponsoredChild}</p>
		<button type="submit" on:click={handleSubmit} disabled={formIsSubmitted}>Submit Form</button>
	</form>
</div>

<style lang="scss">
	.formContainer {
		width: 90vw;
		max-width: 500px;
		background: rgba(255, 255, 255, 0.8);
		padding: 20px;
	}
	.formTitle {
		font-size: 26px;
		margin: 0;
	}
	.formSubtitle {
		font-size: 14px;
		margin: 0;
		color: var(--green);
	}
	.zimForm {
		display: flex;
		flex-direction: column;

		label {
			margin-top: 15px;
			margin-bottom: 5px;
		}
		input,
		select {
			height: 40px;
			border: none;
			border-radius: 5px;
			padding: 0 10px;
			&:focus {
				outline: solid var(--green) 2px;
			}
		}
	}
	button {
		&:disabled {
			opacity: 0.5;
		}
	}
	.error {
		color: red;
		font-size: 14px;
		margin: 5px 0 0 0;
	}
</style>
