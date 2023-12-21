<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input, Modal, Heading } from 'flowbite-svelte';
    import { onMount } from 'svelte';

    import { Alert } from 'flowbite-svelte';
  import HomeCards from '$lib/components/HomeCards.svelte';
  import Header from '$lib/components/Header.svelte';


  
  
  </script>
  
<style>
  .main_cont { margin :  80px auto; max-width: 880px;}

  .front-image { margin : auto; background-color: #c8c8c8; height : 300px;}
</style>

  <Header />





    <div class="main_cont">

      <!-- image banner -->

      <div class="front-image">

        <Heading tag="h4" class="text-center pt-2">Image here for all users</Heading>
        <img src="https://www.rifie.com/images/calm-sea.jpg" />



      </div>

    </div>