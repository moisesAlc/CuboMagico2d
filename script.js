let cores = {
    "amarela": "#ffff00ff",
    "branca": "#ffffffff",
    "verde": "#37c837ff",
    "vermelha": "#ff0000ff",
    "laranja": "#ff6600ff",
    "azul": "#0000ffff"
};

faces = ["topo", "esquerda", "direita"];

setas = ["giraEsquerda", "giraTopo", "giraBaixo", "giraDireita"];

coordenadasCubinhos = [
    "NW", "N", "NE",
    "W", "C", "E",
    "SW", "S", "SE",
];

let corAtual = "";

var escolheCor = (cor) => {
    corAtual = cores[cor];
}

//-------------------------------------------------------

let setaCorCubinho = (cor, idCubo) => {
    document.getElementById(idCubo).style.fill = cor;
}

let setaCorFace = (cor, face) => {
    coordenadasCubinhos.forEach(coordenada => {
        document.getElementById(face + coordenada).style.fill = cores[cor];
    });
}

/* configura a mudança da cor do cubinho pela cor atual 
(definida pela última cor escolhida pelo mouse)*/
let configClickCubinho = (id) => {
    document.getElementById(id).onclick = () => {
        /*console.log("Clicou no " + id);
        console.log(corAtual);*/

        // se corAtual não for vazia (o valor com o qual é inicializada, pinta o cubinho com o id definido no param)
        if (corAtual != "") document.getElementById(id).style.fill = corAtual;
    }
}

// ---------------------------
// INÍCIO CONFIG SETAS
// ---------------------------

// só para fins de teste da(s) seta(s) de giro
let configSetasGiro = () => {
    document.getElementById("giraEsquerda").onclick = () => {
        //console.log("Girou Esquerda");
        setaCorFace("vermelha", "esquerda");
        setaCorFace("azul", "direita");
    };
    document.getElementById("giraTopo").onclick = () => {
        //console.log("Girou Topo");
        setaCorFace("laranja", "topo");
        setaCorFace("amarela", "direita");
    }
    document.getElementById("giraDireita").onclick = () => {
        //console.log("Girou Esquerda");
        setaCorFace("vermelha", "esquerda");
        setaCorFace("azul", "direita");
    }
}

// as setas só serão configuradas no próximo commit
// por enquanto, vão ficar invisíveis
setas.forEach(seta => {
    document.getElementById(seta).style.display = "none";
});


configSetasGiro();

// ---------------------------
// FIM CONFIG SETAS
// ---------------------------


faces.forEach(face => {
    coordenadasCubinhos.forEach(coordenada => {
        configClickCubinho(face + coordenada);
    });
});

let inicializaCores = () => {

    coordenadasCubinhos.forEach(coordenada => {
        setaCorCubinho(cores.branca, "topo" + coordenada);
    });

    coordenadasCubinhos.forEach(coordenada => {
        setaCorCubinho(cores.azul, "esquerda" + coordenada);
    });

    coordenadasCubinhos.forEach(coordenada => {
        setaCorCubinho(cores.laranja, "direita" + coordenada);
    });

}

inicializaCores();