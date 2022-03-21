<script>
	import EndlessExtrasInfo from "./endless-extras-info.svelte";
	import freeFaster from "./modal-pages/free-faster";
	import freeFreebies from "./modal-pages/free-freebies";
	import orderPay from "./modal-pages/order-pay";
</script>

<section class="w-full grid justify-center grid-cols-1 md:grid-cols-[repeat(3,minmax(0,385px))] gap-y-8 md:gap-y-4 gap-x-12 grid-flow-row px-6 py-20 md:py-32 font-fira">
	<h1 class="font-medium text-[1.8rem] col-start-1 col-end-[-1] text-center">
		Endless Extras
	</h1>
	
	<p class="col-start-1 col-end-[-1] w-full max-w-[75ch] justify-self-center text-center mb-8">
		Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.
	</p>

	<EndlessExtrasInfo 
	   options={freeFreebies}
	   src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg" 
	   title="Fun freebies" 
	   description="Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills." 
	/>

	<EndlessExtrasInfo 
	   options={orderPay}
	   src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg" 
	   title="Order & pay ahead" 
	   description="Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores." 
	/>

	<EndlessExtrasInfo
       options={freeFaster}
	   src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg" 
	   title="Get to free faster" 
	   description="Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores." 
	/>
</section>
