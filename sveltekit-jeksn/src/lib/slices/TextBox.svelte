<script>
  import * as prismicH from '@prismicio/helpers';

  export let slice;
    // Check if the emoji should be at right or left
  const reverse = slice.slice_label === 'emoji_right';
</script>

<!-- Conditionally apply a class -->
<article class:reverse>
  <div class="emoji">{slice.primary.emoji}</div>
  <div class="text">
    {@html prismicH.asHTML(slice.primary.text)}
  </div>
</article>

<style>
  article {
    display: flex;
    align-items: flex-start;
    gap: 1.2rem;
    padding: 2rem 2rem 2rem 1.4rem;
  }

  .emoji {
    font-size: 2rem;
  }
</style>