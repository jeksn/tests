<script>
  import { SliceZone } from '@prismicio/svelte'
  import { dev } from '$app/environment'
	import * as prismicH from '@prismicio/helpers';
  import * as components from '$lib/slices'

  export let data
</script>
<svelte:head>
	<title>{prismicH.asText(data?.document?.data?.title)}</title>
</svelte:head>
<SliceZone slices={data?.document?.data?.body} {components} {dev} />
