<script lang="ts">
	let value: string
	let isFocused = false

	let hasFocused = false
	$: if (!hasFocused && isFocused) hasFocused = true 

	let defaultColor = "rgba(0,0,0,.54)"
	$: color = hasFocused ? (!value?.length ? "var(--color-red)" : "var(--color-green)") : defaultColor
</script>

<div 
	class="relative w-full max-w-[var(--max-w,100%)] z-0" 
	style:--top={isFocused || value?.length ? "1%" : "50%"} 
	style:--scale={isFocused || value?.length ? 0.7 : 1}
	style:--color={color}
>
	<input 
	 	class="w-full px-4 py-3 border-2 rounded-md border-[color:var(--color)] z-0 focus:outline-none" 
	 	type="text"
		bind:value
		on:focus={() => isFocused = true}
		on:blur={() => isFocused = false} 
	>
</div>

<style>
	div { --color-red: #d62b1f; --color-green: #1e3932; }

	div::after {
		@apply absolute bg-white-full text-[1.3rem] transition-all top-[var(--top,50%)] scale-[var(--scale,1)] left-4 transform -translate-y-1/2 origin-left px-2;
		color: var(--color);
		content: "* Enter your star code";
		pointer-events: none;
	}
</style>
