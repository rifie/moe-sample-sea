<script>

import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input, Modal } from 'flowbite-svelte';
   
    let clicked = false;
  let moe = null;
 

  // handle

  function handleClick() {
      clicked = true;
      const uniqueId = Math.random().toString(36).substring(2, 10);
      Moengage.add_unique_user_id(uniqueId);
      MoEngage.track_event("Login");
      location.reload();
    }
   
  

  function handleDestroyMoe() {
    if (clicked) {
     
    } else {
      clicked = true;
      Moengage.destroy_session();
    }
  }
  
  </script>
  


  
  <Navbar>
    <NavBrand href="/">
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Moengage sample</span>
    </NavBrand>
    <div class="flex md:order-2">
      <Button on:click={handleClick} size="sm" class="mr-4">Get unique ID</Button>
      <Button outline on:click={handleDestroyMoe} size="sm">logout</Button>

      <NavHamburger />
    </div>
    <NavUl class="order-1">
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/cards">Cards</NavLi>
      <NavLi href="/webp">WebP</NavLi>
    </NavUl>
  </Navbar>


  <Modal id="modal1" title="Alert">
    <p>You need to logout first</p>
=      <Button color="secondary" data-bs-dismiss="modal">Close</Button>
    </Modal>
