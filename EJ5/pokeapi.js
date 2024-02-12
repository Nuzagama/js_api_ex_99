https://pokeapi.co/api/v2/pokemon/pikachu

// Path: EJ5/pokeapi.js
// Vamos a consumir esta API para obtener información sobre Pokémon.
document.addEventListener('DOMContentLoaded', () => {
    const inputPokemon = document.getElementById('inputPokemon'); // Corregido para coincidir con el ID correcto
    const pokemonInfo = document.getElementById('pokemonInfo');
    const pokemonImage = document.getElementById('pokemonImage');
    const pokemonTypes = document.getElementById('pokemonTypes');
    const pokemonAbilities = document.getElementById('pokemonAbilities');
    
    // Agregado un controlador de eventos al formulario para prevenir el comportamiento predeterminado
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        const pokemonName = inputPokemon.value.trim().toLowerCase();
        if (pokemonName) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => response.json())
            .then(pokemon => {
                pokemonInfo.textContent = '';
                pokemonImage.innerHTML = '';
                pokemonTypes.textContent = '';
                pokemonAbilities.textContent = '';
                
                pokemonInfo.textContent = pokemon.name;
                pokemonImage.innerHTML = `<img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" style="max-width: 100px;">`;
                
                pokemon.types.forEach(type => {
                    const typeElement = document.createElement('span');
                    typeElement.textContent = type.type.name;
                    pokemonTypes.appendChild(typeElement);
                });
                
                pokemon.abilities.forEach(ability => {
                    const abilityElement = document.createElement('span');
                    abilityElement.textContent = ability.ability.name;
                    pokemonAbilities.appendChild(abilityElement);
                });
            })
            .catch(error => {
                pokemonInfo.textContent = 'No se ha encontrado el Pokémon';
                pokemonImage.innerHTML = '';
                pokemonTypes.textContent = '';
                pokemonAbilities.textContent = '';
            });
        } else {
            pokemonInfo.textContent = '';
            pokemonImage.innerHTML = '';
            pokemonTypes.textContent = '';
            pokemonAbilities.textContent = '';
        }
    });
});
