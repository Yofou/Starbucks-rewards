<script>
	import GetStartedStep from "./get-started-step.svelte";
</script>

<section class="font-fira grid md:grid-cols-[repeat(3,minmax(0,385px))] gap-y-4 gap-x-6 grid-flow-row justify-center px-4 py-20 md:py-32">
	<h1 class="font-semibold text-[1.8rem] text-center col-start-1 col-end-[-1]">Getting started is easy</h1>
	<p class="col-start-1 col-end-[-1] text-center mb-8">Earn Stars and get rewarded in a few easy steps.</p>

	<GetStartedStep count={1} title="Create an account">
		To get started, join now. You can also Join in the app to get access to the full range of Starbucks® Rewards benefits.
	</GetStartedStep>
	
	<GetStartedStep count={2} title="Order and pay how you’d like">
		Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how
	</GetStartedStep>

	<GetStartedStep count={3} title="Earn Stars, get Rewards">
		As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!
	</GetStartedStep>
</section>
