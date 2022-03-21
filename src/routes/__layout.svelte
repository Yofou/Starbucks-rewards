<script lang="ts">
	import "$lib/global.css"
import Footer from "$lib/top-level/footer.svelte";
	import Navbar from "$lib/top-level/navbar.svelte";
</script>

<Navbar />
<slot />
<Footer />
