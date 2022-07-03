<script>
  export let showOnPx = 150;
  let hidden = true;

  function goTop() {
    document.body.scrollIntoView();
  }

  function scrollContainer() {
    return document.documentElement || document.body;
  }

  function handleOnScroll() {
    if (!scrollContainer()) {
      return;
    }

    if (scrollContainer().scrollTop > showOnPx) {
      hidden = false;
    } else {
      hidden = true;
    }
  }
</script>
<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/mono-icons@1.0.5/iconfont/icons.css" >
</svelte:head>

<style>
  .mi{
    font-size: 2.5rem;
    transform: translate(-50%, -50%);
    position: absolute;

    top:58%;
    left: 50%;

  }
  .back-to-top {
    width: 50px;
    height: 50px;
    opacity: 1;
    transition: opacity 1.5s, visibility 0.5s;
    position: fixed;
    z-index: 99;
    right: 20px;
    user-select: none;
    bottom: 20px;
    background-color:aliceblue;
    border-radius: 50%;
    color:#582f0e ;


  }

  .back-to-top.hidden {
    opacity: 0;
    visibility: hidden;
  }
  .back-to-top:hover{
    background: #FFFFFF;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.25);
border-radius: 13px;
  }
</style>

<svelte:window on:scroll={handleOnScroll} />

<div class="back-to-top" on:click={goTop} class:hidden> <i class="mi mi-circle-arrow-up" ></i></div>


