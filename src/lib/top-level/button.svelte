<script lang="ts">
	export let href = "/"
</script>

<a class="font-fira transition-colors custom-font-weight tracking-[1px] text-[length:var(--font-size,0.8rem)] text-[color:var(--text-color,inherit)] px-4 py-[7px] bg-[color:var(--bg,white)] hover:bg-[color:var(--bg-hover,#f1f8f6)] rounded-[50px] border border-[color:var(--border-color,#000)]" {href}>
	<slot />
</a>

<style>
	.custom-font-weight {
		font-weight: var(--font-weight,600);
	}
</style>
