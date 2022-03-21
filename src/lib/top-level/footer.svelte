<script>
	import FooterItem from "./footer-item.svelte";
	import FooterLinks from "./footer-links.svelte";
	import FooterMedia from "./footer-media.svelte";
</script>

<footer class="w-full py-16 md:py-32 px-6 md:px-[210px] grid grid-flow-row md:grid-cols-[repeat(4,minmax(0,190px)),1fr] gap-8 shadow-inner">
	<FooterItem title="About Us">
		<a href="/">Our Company</a>
		<a href="/">Our Coffee</a>
		<a href="/">Stories and News</a>
		<a href="/">Starbucks Archive</a>
		<a href="/">Investor Relations</a>
		<a href="/">Customer Service</a>
	</FooterItem>

	<FooterItem title="Careers">
		<a href="/">Culture and Values</a>
		<a href="/">Inclusion, Diveristy, and Equity</a>
		<a href="/">College Achievement plan</a>
		<a href="/">Alumni Community</a>
		<a href="/">U.S. Careers</a>
		<a href="/">International Careers</a>
	</FooterItem>

	<FooterItem title="Social Items">
		<a href="/">Social Impact</a>
		<a href="/">People</a>
		<a href="/">Planet</a>
		<a href="/">Environmental and Social Impact Reporting</a>
	</FooterItem>

	<FooterItem title="For Business Partners">
		<a href="/">Landlord Support Center</a>
		<a href="/">Suppliers</a>
		<a href="/">Corporates Gift Card Sales</a>
		<a href="/">Office and Foodservice Coffee</a>
	</FooterItem>

	<FooterItem title="Order and Pickup">
		<a href="/">Order on the App</a>
		<a href="/">Order on the Web</a>
		<a href="/">Delivery</a>
		<a href="/">Order and Pickup Options</a>
		<a href="/">Explore and Find Coffee for Home</a>
	</FooterItem>

	<hr class="text-[#000]/20 border border-[#000]/20 col-start-[1] col-end-[-1]">
	<FooterMedia />
	<FooterLinks />
	<p class="text-black-600 text-[0.9rem] col-start-1 col-end-[-1]">© 2022 Starbucks Coffee Company. All rights reserved.</p>
</footer>
