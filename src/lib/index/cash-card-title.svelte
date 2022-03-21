<script lang="ts">
	export let stars: number
	export let description: string
</script>

<div class="font-fira col-start-1 col-end-2">
	<h2 class="font-medium text-[1.6rem]">{stars}★ per dollar</h2>
	<p class="text-[0.95rem]">{description}</p>
</div>
