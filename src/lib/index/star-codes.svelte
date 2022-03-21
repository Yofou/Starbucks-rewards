<script lang="ts">
	import StarCodesTextInput from "./star-codes-text-input.svelte";
</script>

<section class="w-full px-6 md:px-[210px] py-16 md:py-32 flex flex-col items-start gap-4 font-fira">
	<h1 class="font-medium text-[1.9rem]">Star Codes</h1>
	<p>Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll add Stars to your account.</p>

	<form class="w-full md:max-w-[50%] grid grid-flow-row gap-5" on:submit|preventDefault>
		<StarCodesTextInput />
		<button class="justify-self-end font-fira border border-black-full hover:bg-white-light rounded-full text-[1rem] tracking-[1px] font-medium px-4 py-[7px]">Submit</button>
	</form>

	<div>
		<p>Have a receipt but don't have a code?</p>
		<p>Go to <a class="text-green-600 underline" href="/">starbucks-stars.com</a> to upload your receipt and collect your Stars.</p>
	</div>

	<h1 class="font-medium text-[1.9rem]">Questions?</h1>
	<p>
		We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked questions right over here.
	</p>
</section>
