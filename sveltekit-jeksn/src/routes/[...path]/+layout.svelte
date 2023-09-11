<script>
   import pico from '@picocss/pico';
   import * as prismicH from '@prismicio/helpers';
   import { page } from '$app/stores';
 
   export let data;
 
   const { navigation } = data; </script>
 
 <div id="page">
   <nav class="center">
      {#each navigation as item}
        {@const activeLink = item.link.url === $page.url.pathname}
        {#if activeLink}
          <span>{item.link_label}</span>
        {:else}
          <a href={prismicH.asLink(item.link)}>{item.link_label}</a>
        {/if}
      {/each}
    </nav>
 
   <main class="center">
     <slot />
   </main>
 
   <footer class="center">© Acme Corporation 2022</footer>
 </div>
 
 <style>
   :global(html) {
     overflow-y: scroll;
   }
 
   #page {
     display: flex;
     flex-direction: column;
     min-height: 100vh;
     gap: 5vw;
   }
 
   .center {
     padding-left: max(1rem, calc(50vw - 350px));
     padding-right: max(1rem, calc(50vw - 350px));
   }
 
   nav,
   footer {
     text-transform: uppercase;
     font-size: 0.7rem;
     letter-spacing: 0.1px;
   }
 
   nav {
     background: rgba(0, 0, 0, 0.4);
     font-weight: 500;
     padding-top: 1rem;
     padding-bottom: 1rem;
   }
 
   footer {
     text-align: center;
     padding: 3rem 0;
     color: #777;
     margin-top: auto;
   }
 </style>