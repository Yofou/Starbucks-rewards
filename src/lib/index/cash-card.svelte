<script>
	import CashCardItem from "./cash-card-item.svelte";
	import CashCardTitle from "./cash-card-title.svelte";
</script>

<section class="w-full bg-white-cream px-6 md:px-[210px] py-12 grid grid-cols-1 md:grid-cols-[repeat(3,minmax(0,max-content)),1fr] gap-y-4 gap-x-12 grid-flow-row-dense font-fira">
	<h1 class="col-start-1 col-end-[-1] text-center font-medium text-[1.9rem]">Cash or card, you earn Stars</h1>
	<p class="col-start-1 col-end-[-1] text-center max-w-[70ch] justify-self-center mb-12">No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</p>

	<CashCardTitle stars={1} description="Pay as you go" />
	<CashCardItem src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png" title="Scan and pay separately">
		Use cash or credit/debit card at the register.
	</CashCardItem>
	<CashCardItem src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png" title="Save payment in the app">
		Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.
	</CashCardItem>
	<hr class="">
	
	<CashCardTitle stars={2} description="Add funds in the app" />
	<CashCardItem src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png" title="Preload">
		To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.
	</CashCardItem>
	<CashCardItem src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png" title="Register your gift card">
		Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.
	</CashCardItem>
	<hr class="">
	
	<CashCardTitle stars={3} description="With Starbucks® Rewards Visa® Card" />
	<CashCardItem src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/3A.png" title="Earn Stars even faster">
		Earn Stars on all purchases you make with our <a href="/">credit card</a>
		in and outside of Starbucks. Earn 1 Star per $1 when you digitally preload your Starbucks Card with your Starbucks® Rewards Visa® Card, and earn 2 Stars per $1 when you pay with that preloaded Starbucks Card.
	</CashCardItem>
</section>

<style>
	h1,p,hr {
		@apply col-start-1 col-end-[-1];
	}

	hr {
		@apply border-[rgba(0,0,0,.1)] mb-8;
	}

	a {
		@apply underline text-green-900;
	}
</style>
