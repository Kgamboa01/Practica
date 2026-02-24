const pokemonData = [
  {
    "nombre": "Pikachu",
    "tipo": "Eléctrico",
    "altura": 0.4,
    "peso": 6.0,
    "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  },
  {
    "nombre": "Charmander",
    "tipo": "Fuego",
    "altura": 0.6,
    "peso": 8.5,
    "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  {
    "nombre": "Squirtle",
    "tipo": "Agua",
    "altura": 0.5,
    "peso": 9.0,
    "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  },
  {
    "nombre": "Bulbasaur",
    "tipo": "Planta/Veneno",
    "altura": 0.7,
    "peso": 6.9,
    "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  {
    "nombre": "Eevee",
    "tipo": "Normal",
    "altura": 0.3,
    "peso": 6.5,
    "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
  },
  {
    "nombre": "Jigglypuff",
    "tipo": "Normal/Hada",
    "altura": 0.5,
    "peso": 5.5,
    "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
  },
  {
    "nombre": "Gengar",
    "tipo": "Fantasma/Veneno",
    "altura": 1.5,
    "peso": 40.5,
    "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
  },
  {
    "nombre": "Snorlax",
    "tipo": "Normal",
    "altura": 2.1,
    "peso": 460.0,
    "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
  },
  {
    "nombre": "Mewtwo",
    "tipo": "Psíquico",
    "altura": 2.0,
    "peso": 122.0,
    "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
  },
  {
    "nombre": "Lucario",
    "tipo": "Lucha/Acero",
    "altura": 1.2,
    "peso": 54.0,
    "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png"
  }
];

let cuerpoTabla = document.getElementById("cuerpoTabla");
let listaPokemon = document.getElementById("listaPokemon");
let seccionCartas = document.getElementById("sct-cartas");

function llenarTabla(){
    pokemonData.forEach(pokemon =>{
        let fila = document.createElement("tr");

        let celdaNombre = document.createElement("td");
        celdaNombre.textContent = pokemon.nombre;

        let celdaTipo = document.createElement("td")
        celdaTipo.textContent = pokemon.tipo;

        let celdaAltura = document.createElement("td")
        celdaAltura.textContent = pokemon.altura;

        let celdaPeso = document.createElement("td")
        celdaPeso.textContent = pokemon.peso;

        let imagen = document.createElement("img");
        imagen.src = pokemon.imagen;

        
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaTipo);
        fila.appendChild(celdaAltura);
        fila.appendChild(celdaPeso);
        fila.appendChild(imagen);

        cuerpoTabla.appendChild(fila);
    });
};

function llenarSelect(){
    pokemonData.forEach(pokemon =>{
        listaPokemon.options.add(new Option(pokemon.nombre, pokemon.nombre));
    });
};

function llenarCartas(){
    pokemonData.forEach(pokemon =>{
        let divCarta = document.createElement("div");
        let divEncabezado = document.createElement("div");

        let imagen = document.createElement("img");
        imagen.src = pokemon.imagen;


        let divContenido = document.createElement("div");
        
        let tituloNombre = document.createElement("h4");
        tituloNombre.textContent = pokemon.nombre;

        let infoTipo = document.createElement("p");
        infoTipo.textContent = pokemon.tipo;

        let infoAltura = document.createElement("p");
        infoAltura.textContent = "Altura: " + pokemon.altura;

        let infoPeso = document.createElement("p");
        infoPeso.textContent = "Peso: " + pokemon.peso;

        divEncabezado.appendChild(imagen);

        divContenido.appendChild(tituloNombre);
        divContenido.appendChild(infoTipo);
        divContenido.appendChild(infoAltura);
        divContenido.appendChild(infoPeso);

        divCarta.appendChild(divEncabezado);
        divCarta.appendChild(divContenido);

        seccionCartas.appendChild(divCarta);
       
    });
};

llenarCartas();

llenarSelect();

llenarTabla();

//Crear cards para cada pokemon
