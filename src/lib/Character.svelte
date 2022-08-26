<script>
  export let character;
</script>

<div class="character">
  <img src={character.image} alt={character.name} />
  <h3>{character.name}</h3>
  <h4>{character.species}</h4>
</div>
