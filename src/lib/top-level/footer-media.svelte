<script>
	import Facebook from "$lib/icons/facebook.svelte";
	import Instagram from "$lib/icons/instagram.svelte";
	import Pintrest from "$lib/icons/pintrest.svelte";
	import Spotify from "$lib/icons/spotify.svelte";
import Twitter from "$lib/icons/twitter.svelte";
import Youtube from "$lib/icons/youtube.svelte";
	import FooterIcon from "./footer-icon.svelte";
</script>

<div class="flex gap-4 col-start-1 col-end-[-1]">
	<FooterIcon> <Spotify /> </FooterIcon>
	<FooterIcon> <Facebook /> </FooterIcon>
	<FooterIcon> <Pintrest /> </FooterIcon>
	<FooterIcon> <Instagram /> </FooterIcon>
	<FooterIcon> <Youtube /> </FooterIcon>
	<FooterIcon> <Twitter /> </FooterIcon>
</div>
