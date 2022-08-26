<script>
  import Character from "./lib/Character.svelte";
  import logo from "./assets/svelte-logo.jpeg";

  let characters = [];
  let page = 1;

  async function loadCharacters() {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await response.json();
    console.log(data);
    characters = data.results;
  }

  loadCharacters();

  function nextPage() {
    page++;
    loadCharacters();
  }

  function previusPage() {
    page--;
    loadCharacters();
  }
</script>

<div class="container">
  <a href="https://svelte.dev/" target="_blank">
    <img src={logo} alt="logo-svelte" class="logo" />
  </a>
  <h1 class="title">Rick & Morty API</h1>
  <div class="btns">
    <button class="btn" on:click={previusPage} disabled={page === 1}
      >Previus</button
    >
    <button class="btn" on:click={nextPage}>Next</button>
  </div>
  <div class="grid">
    {#each characters as character}
      <Character {character} />
    {/each}
  </div>
</div>
