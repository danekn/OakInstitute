function getPokemon () {
	
	document.getElementById("bt").style.display='none';
	
	//alert(index);
document.getElementById("result_img").src="./pokeball_2.gif";

var myTimer = setTimeout(function(){showPokemon()}, 3000);
}

function showPokemon () {
	var index= Math.random()*79;
	//alert(index);
	index=Math.floor(index);
	
document.getElementById("result_img").src="./pokedex/poke"+index+".png";
document.getElementById("result_img").onload=alert("pippo");
var names =
["Bulbasaur",
"Charmander",
"Squirtle",
"Caterpie",
"Weedle",
"Pidgey",
"Rattata",
"Spearow",
"Ekans",
"Pikachu",
"Sandshrew",
"Nidoran♀",
"Nidoran♂",
"Clefairy",
"Vulpix",
"Jigglypuff",
"Zubat",
"Oddish",
"Paras",
"Venonat",
"Diglett",
"Meowth",
"Psyduck",
"Mankey",
"Growlithe",
"Poliwag",
"Abra",
"Machop",
"Bellsprout",
"Tentacool",
"Geodude",
"Ponyta",
"Slowpoke",
"Magnemite",
"Farfetch'",
"Doduo",
"Seel",
"Grimer",
"Shellder",
"Gastly",
"Onix",
"Drowzee",
"Krabby",
"Voltorb",
"Exeggcute",
"Cubone",
"Hitmonlee",
"Hitmonchan",
"Lickitung",
"Koffing",
"Rhyhorn",
"Chansey",
"Tangela",
"Kangaskhan",
"Horsea",
"Goldeen",
"Staryu",
"Mr. Mime",
"Scyther",
"Jynx",
"Electabuzz",
"Magmar",
"Pinsir",
"Tauros",
"Magikarp",
"Lapras",
"Ditto",
"Eevee",
"Porygon",
"Omanyte",
"Kabuto",
"Aerodactyl",
"Snorlax",
"Articuno",
"Zapdos",
"Moltres",
"Dratini",
"Mewtwo",
"Mew",];
document.getElementById("name").textContent = names[index];
}
//.style.display = 'block';