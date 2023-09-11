<script>
  import * as prismicH from '@prismicio/helpers';

  export let slice;

  const { src, srcset } = prismicH.asImageWidthSrcSet(slice.primary.image);
</script>


<div class="layout box">
	<img {src} {srcset} alt={slice.primary.image.alt} />
	<ul>
		{#each slice.items as item}
			<li>{prismicH.asHTML(item.bullet, null, { paragraph: ({ children }) => children })}</li>
		{/each}
	</ul>
</div>

<style>
  img {
    width: 40%;
    border-radius: 0.3rem;
    aspect-ratio: 0.9;
    object-fit: cover;
    flex: 1.2;
  }

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin-top: 5vw;
    margin-bottom: 5vw;
  }

  ul {
    margin: 0;
    padding-left: 2rem;
    flex: 1;
    list-style-type: disc;
  }

  .box li {
    font-weight: 500;
    color: white;
    padding-left: 0.5rem;
    margin-bottom: 1rem;
  }

  .box li:last-child {
    margin-bottom: 0;
  }
</style>