<script lang="ts">
	import GetFavouritesControls from "./get-favourites-controls.svelte";
	import GetFavouritesView from "./get-favourites-view.svelte";
	import { favourites, type Favourite } from "$lib/index/favourites"

	let selected: Favourite
	let onHover = false
</script>

<section 
	class="flex flex-col w-full"
	on:mouseenter={() => onHover = true}
	on:mouseleave={() => onHover = false}
>
	<GetFavouritesControls bind:selected bind:onHover stars={favourites} />
	<GetFavouritesView {...selected} />
</section>
