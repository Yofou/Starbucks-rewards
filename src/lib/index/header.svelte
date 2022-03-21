<script>
	import Button from "$lib/top-level/button.svelte";
</script>

<header class="w-full bg-green-300 flex flex-col gap-4 md:justify-center items-start h-[120vw] md:h-[810px] pl-6 md:px-[210px] font-fira bg-header-mobile md:bg-header-desktop bg-no-repeat bg-cover bg-[position:50%] md:bg-[position:50%] md:bg-[length:auto_100%]">
	<h1 class="mt-10 md:mt-0 text-black-full uppercase text-[2rem] md:text-[2.5rem] font-medium w-full md:max-w-[270px] leading-[1.3]">Free Coffee is a tap away</h1>
	<p class="md:text-[1.2rem]">Join now to start earning Rewards</p>
	<Button --bg="#00754a" --bg-hover="#00754a" --font-size=".9rem" --font-weight="700" --text-color="white" --border-color="#00754a">Join now</Button>
	<p class="md:text-[1.2rem] text-black-600">
		Or <a href="/" class="underline">join in the app</a> for the best experience
	</p>
</header>
