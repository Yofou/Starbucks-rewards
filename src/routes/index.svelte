<script>
	import CashCard from "$lib/index/cash-card.svelte";
	import EndlessExtras from "$lib/index/endless-extras.svelte";
	import GeneralInfo from "$lib/index/general-info.svelte";
	import GetFavourites from "$lib/index/get-favourites.svelte";
	import GetStarted from "$lib/index/get-started.svelte";
	import Header from "$lib/index/header.svelte";
	import StarCodes from "$lib/index/star-codes.svelte";
</script>

<svelte:head>
	<title>Starbucks® Rewards - Order Ahead, Endless Extras, Free Coffee: Starbucks Coffeee Company</title>
</svelte:head>

<h1 class="fixed z-10 top-[75px] md:top-[107px] left-0 bg-green-900 text-white-full uppercase font-fira font-bold tracking-[2px] py-3 px-6 md:px-[210px] w-full">Starbucks® Rewards</h1>

<main class="mt-[123px] md:mt-[155px]">
	<Header />
	<GetStarted />
	<GetFavourites />
	<EndlessExtras />
	<CashCard />
	<StarCodes />
	<GeneralInfo />
</main>
