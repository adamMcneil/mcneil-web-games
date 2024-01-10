<script>
	import weighty_inquiries_logo from '$lib/assets/weighty_inquiries_logo.png';
	import brains_and_bets_logo from '$lib/assets/brains_and_bets_logo.png';
	import favicon from '$lib/assets/favicon.png';
	import { onMount } from 'svelte';

	let brains_server = 'https://brains-and-bets.onrender.com/api/v1/heartbeat/';
	let weighty_server = 'https://weight-inquiries.onrender.com/api/v1/heartbeat/';

	async function hit_weighty() {
		const response = await fetch(weighty_server, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		return response;
	}

	async function hit_brains_and_bets() {
		const response = await fetch(brains_server, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		return response;
	}

	onMount(() => {
		console.log('onMount'); 
		hit_weighty();
		hit_brains_and_bets();
	});
</script>

<link rel="icon" type="image/jpg" href={favicon}/>

<section>
	<h1>
		McNeil Web Games	
	</h1>
	<div>
		<a href="https://adammcneil.github.io/weighty-inquiry/">
			<img alt="Weighty Inquiries" src={weighty_inquiries_logo} href="https://adammcneil.github.io/weighty-inquiry/"/>
		</a>
	</div>
	<div>
		<a href="https://davidmcneil.github.io/brains-and-bets/">
			<img alt="Brains and Bets" src={brains_and_bets_logo} href="https://davidmcneil.github.io/brains-and-bets/" />
		</a>
	</div>
</section>

<style>
	img {
		padding: 10px;
		border-radius: 10%;
		scale: 90%;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		color: white;
		font-size: xxx-large;
		width: 100%;
		font-family: 'Dyuthi';
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
