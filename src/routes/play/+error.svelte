<script lang="ts">
	import { invalidateAll } from '$app/navigation';
</script>

<h1>Well that was unfortunate...</h1>

<button onclick={invalidateAll}> Try again </button>
