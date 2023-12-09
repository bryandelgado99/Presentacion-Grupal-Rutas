//Importamos Express y lo exportamos con CommonJS
const express = require("express");
const path = require("path");
const app = express();

// Configuraciones
app.listen(3000,()=>{
    console.log('Server on port 3000');
});

app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Variables globales
const lista_integrantes = [
    {
    Nombre: "Eduardo Almachi",
    Rol: "Desarrollador Backend",
    },
    {
    Nombre: "Bryan Delgado",
    Rol: "Desarrollador de Interfaces",
    },
    {
    Nombre: "Brittany Espinel",
    Rol: "Desarrolladora Frontend",
    },
    {
    Nombre: "Mateo Miño",
    Rol: "Tester y desarrollador de seguridad",
    },
    {
    Nombre: "Melany Sangucho",
    Rol: "Desarrollador SQL",
    },
    {
    Nombre: "David Vallejo",
    Rol: "Desarrollador Backend",
    },
    {
    Nombre: "Erick Villarroel",
    Rol: "Desarrollador Fontend",
    },
    {
    Nombre: "Danny Yanacallo",
    Rol: "Desarrollador backend",
    },
];

/*Rutas Públicas*/
//Ruta "/" o raíz
app.get("/", (req, res) => {
    res.send(`
        <br>
        <h1 align="center">Servidor de Pruebas para Rutas</h1>
        <p align="center">Esta página muestra los elementos de las rutas a las que se puede acceder:</p> 
        <hr>
        <h3>Enlaces de la página:</h3>
        <ul>
            <li>"/ ":Es la ruta raíz, de la página principal</li>
            <li>"/home": Contiene información del grupo 1</li>
            <li>"/infor-group":Contiene información de los integrantes del grupo 1</li>
            <li>"/products": Contiene una lista de productos</li>
        </ul>
        <hr>
        <img src="https://th.bing.com/th/id/R.bc8b0cd17106308f06816cb5ae5db398?rik=gtcfguwUFbGDJw&pid=ImgRaw&r=0">
        <p align="center">Visita mi repositorio con la información de este proyecto: <a href="https://github.com/bryandelgado99/Presentacion-Grupal-Rutas/tree/main">🤓-Bryan Delgado</a></p>
        `);
});

//Ruta con la información del grupo
app.get("/home", (req, res) => {
    res.send(`
        <br>
        <h1 align="center"><font face="Arial">👨‍💻 Grupo 1 - Bienvenido al Landing Page 🦉</font></h1>
        <hr>
        <div align="center"><img src="https://media1.tenor.com/images/f016efdfb2ff6689d2dc6c921b8a7f3c/tenor.gif?itemid=8749684"></div>
        <hr>
        <p align="center">¡Disfrute del laboratorio realizado!</p>
        <div align="center"><img src="https://th.bing.com/th/id/OIP.wOkZH9AqBjzAQ48_eDF3FQHaEK?rs=1&pid=ImgDetMain"></div>
    `);
});

//Ruta con información sobre integrantes en JSON
app.get("/infor-group", (req, res) => {
  //Elementos para POST
    /*const {Nombre, Rol} = req.body
    res.send(`El nombre del integrante es ${Nombre} y su rol es ${Rol}`)
    console.log(req.body)*/
    res.json(lista_integrantes);
});

//Ruta para lista de productos
app.get("/products", (req, res) => {
    res.send(`
            <h1 align="center">Catálogo de productos - Grupo 1 🎮</h1>
                <h3 align="center">Bienvenidos</h3>
                <hr>
                <ul>
                    <font face="Arial" size="5px">
                        <li>PlayStation 5</li>
                            <div align="center"><img src="https://th.bing.com/th?id=OIF.%2fbSK6ABj1K0wd4iq1taXcg&rs=1&pid=ImgDetMain" width="250px"></div>
                        <li>Xbox Series X</li>
                            <div align="center"><img src="https://th.bing.com/th/id/OIP.8qO2bGJ-HXxOIDjQ2ON2gQHaGZ?rs=1&pid=ImgDetMain" width="250px"></div>
                        <li>Nintendo Switch</li>
                            <div align="center"><img src="https://th.bing.com/th/id/R.16d5dd6488594960869bfe7a446d297e?rik=0i68wEW%2b8e02tQ&pid=ImgRaw&r=0" width="250px"></div>
                        <li>Atari 2600</li>
                            <div align="center"><img src="https://th.bing.com/th/id/R.8f739228ad1df1e900bf0217d149320b?rik=jWxG1%2f6HTDL3TA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fd%2fde%2fAtari-2600-Console.jpg&ehk=mecPA1Nhp3wJJ%2fzf9VWj1TZKjsII3e1Y%2fqw5G0tj86A%3d&risl=1&pid=ImgRaw&r=0" width="250px"></div>
                        <li>Sega Dreamcast</li>
                            <div align="center"><img src="https://th.bing.com/th/id/R.6795427b7b916d0d7aa449a58e4db969?rik=jOQTA7OSUXXdPw&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fa%2fa0%2fSega-dreamcast-set.png&ehk=IgpsrGmMKmDYhvo5ndlgftMFSnTSFbTD9nVB6IsGlEg%3d&risl=1&pid=ImgRaw&r=0" width="250px"></div>    
                    </font>
                </ul>
    `);
});

/*Rutas Privadas*/

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));
