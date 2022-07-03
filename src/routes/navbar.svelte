<script>
	import TopAppBar, { Row, Section } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';

	let visualization = true;
	let visualization2 = false;

	function handleClick() {
		visualization = !visualization;
		visualization2 = !visualization2;

	}
</script>

<TopAppBar style="background:transparent;z-index:999999; " >
		<Row>
		<Section >
			<div class:visualization2>
				<IconButton  class="material-icons" on:click={handleClick} style="color:#1c1c1c;"  >menu</IconButton>
			</div>
			<div class:visualization>
				<IconButton  class="material-icons" on:click={handleClick} style="color:#1c1c1c;"  >close</IconButton>
			</div>
		</Section>
	</Row>
</TopAppBar>
<div class:visualization>
	<div class="menu">
		<br />
		<span><a href="#ambiente">Ambiente</a> </span><br />
		<span> <a href="#territorio"> Territorio</a></span><br />
		<span> <a href="#salute"> Salute</a></span><br />
		<span> <a href="#contatti"> Contatti</a></span><br />

	</div>
</div>


<style>
  
  .visualization{
        display: none;
	
    }
	.visualization2{
        display: none;
	
    }

.menu{
	display: flex;
flex-direction: column;
align-items: flex-start;
padding: 4%;
gap: 1px;

position: absolute;
width: 253px;
height: 180px;
left: 16px;
top: 79px;

/* surface */

background: #FFFFFF;
/* 04 dp */

box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);
border-radius: 4px;
z-index: 100;

    }
    .menu a{

        text-decoration: none;
        color:#1c1c1c;
    }
</style>