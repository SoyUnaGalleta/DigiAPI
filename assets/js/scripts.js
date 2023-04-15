function consumoDigiAPI () {

    fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(listaDigimon =>{   

        let nFresh = 0;
        let nInTraining = 0;
        let nRookie = 0;
        let nChampion = 0;
        let nUltimate = 0;
        let nMega = 0;

        for (let i = 0; i < listaDigimon.length; i++) {

            var textoTarjeta = listaDigimon[i].level === 'In Training' ? 'a' + 'InTraining': 'a' + listaDigimon[i].level;

            if (textoTarjeta == 'aFresh') {
                var nContador = nFresh
            } else if (textoTarjeta == 'aInTraining'){
                var nContador = nInTraining
            } else if (textoTarjeta == 'aRookie'){
                var nContador = nRookie
            } else if (textoTarjeta == 'aChampion'){
                var nContador = nChampion
            } else if (textoTarjeta == 'aUltimate'){
                var nContador = nUltimate
            } else if (textoTarjeta == 'aMega'){
                var nContador = nMega
            }

            let crearTarjeta = document.createElement ('div');
            crearTarjeta.setAttribute('class', textoTarjeta);
            crearTarjeta.setAttribute('onmouseover','this.style.transform = "scale(1.25)"');
            crearTarjeta.setAttribute('onmouseout','this.style.transform = "scale(0.85)"');
            document.getElementsByClassName('contenido')[0].appendChild(crearTarjeta);

            let creandoImg = document.createElement('img');
            creandoImg.src = listaDigimon[i].img;
            creandoImg.style.maxWidth = '90px';
            document.getElementsByClassName(textoTarjeta)[nContador].appendChild(creandoImg);

            let creandoNombre = document.createElement('p');
            creandoNombre.setAttribute ('class','nombre')
            creandoNombre.innerHTML = listaDigimon[i].name + '<br>';
            document.getElementsByClassName(textoTarjeta)[nContador].appendChild(creandoNombre);

            let creandoNivel = document.createElement('p');
            creandoNivel.setAttribute('class','nivel')
            creandoNivel.innerHTML = listaDigimon[i].level;
            document.getElementsByClassName(textoTarjeta)[nContador].appendChild(creandoNivel);
            

            if (textoTarjeta == 'aFresh') {
                nFresh = nFresh + 1
            } else if (textoTarjeta == 'aInTraining'){
                nInTraining = nInTraining + 1
            } else if (textoTarjeta == 'aRookie'){
                nRookie = nRookie + 1
            } else if (textoTarjeta == 'aChampion'){
                nChampion = nChampion + 1
            } else if (textoTarjeta == 'aUltimate'){
                nUltimate = nUltimate + 1
            } else if (textoTarjeta == 'aMega'){
                nMega = nMega + 1
            }

        }
    })
    .catch();
};

function soloFresh () {
    let bFresh = document.getElementsByClassName('aFresh')

    for (var i = 0; i < bFresh.length; i++) {
        bFresh[i].style.display = "flex";
      }

    let bInTraining = document.getElementsByClassName('aInTraining')
    for (var i = 0; i < bInTraining.length; i++) {
        bInTraining[i].style.display = "none";
      }

    let bRookie = document.getElementsByClassName('aRookie')
    for (var i = 0; i < bRookie.length; i++) {
        bRookie[i].style.display = "none";
      }

    let bChampion = document.getElementsByClassName('aChampion')
    for (var i = 0; i < bChampion.length; i++) {
        bChampion[i].style.display = "none";
      }

    let bUltimate = document.getElementsByClassName('aUltimate')
    for (var i = 0; i < bUltimate.length; i++) {
        bUltimate[i].style.display = "none";
      }

    let bMega = document.getElementsByClassName('aMega')
    for (var i = 0; i < bMega.length; i++) {
        bMega[i].style.display = "none";
      }
}


function soloInTraining () {
    let bFresh = document.getElementsByClassName('aFresh')

    for (var i = 0; i < bFresh.length; i++) {
        bFresh[i].style.display = "none";
      }

    let bInTraining = document.getElementsByClassName('aInTraining')
    for (var i = 0; i < bInTraining.length; i++) {
        bInTraining[i].style.display = "flex";
      }

    let bRookie = document.getElementsByClassName('aRookie')
    for (var i = 0; i < bRookie.length; i++) {
        bRookie[i].style.display = "none";
      }

    let bChampion = document.getElementsByClassName('aChampion')
    for (var i = 0; i < bChampion.length; i++) {
        bChampion[i].style.display = "none";
      }

    let bUltimate = document.getElementsByClassName('aUltimate')
    for (var i = 0; i < bUltimate.length; i++) {
        bUltimate[i].style.display = "none";
      }

    let bMega = document.getElementsByClassName('aMega')
    for (var i = 0; i < bMega.length; i++) {
        bMega[i].style.display = "none";
      }
}

function soloRookie () {
    let bFresh = document.getElementsByClassName('aFresh')

    for (var i = 0; i < bFresh.length; i++) {
        bFresh[i].style.display = "none";
      }

    let bInTraining = document.getElementsByClassName('aInTraining')
    for (var i = 0; i < bInTraining.length; i++) {
        bInTraining[i].style.display = "none";
      }

    let bRookie = document.getElementsByClassName('aRookie')
    for (var i = 0; i < bRookie.length; i++) {
        bRookie[i].style.display = "flex";
      }

    let bChampion = document.getElementsByClassName('aChampion')
    for (var i = 0; i < bChampion.length; i++) {
        bChampion[i].style.display = "none";
      }

    let bUltimate = document.getElementsByClassName('aUltimate')
    for (var i = 0; i < bUltimate.length; i++) {
        bUltimate[i].style.display = "none";
      }

    let bMega = document.getElementsByClassName('aMega')
    for (var i = 0; i < bMega.length; i++) {
        bMega[i].style.display = "none";
      }
}


function soloChampion () {
    let bFresh = document.getElementsByClassName('aFresh')

    for (var i = 0; i < bFresh.length; i++) {
        bFresh[i].style.display = "none";
      }

    let bInTraining = document.getElementsByClassName('aInTraining')
    for (var i = 0; i < bInTraining.length; i++) {
        bInTraining[i].style.display = "none";
      }

    let bRookie = document.getElementsByClassName('aRookie')
    for (var i = 0; i < bRookie.length; i++) {
        bRookie[i].style.display = "none";
      }

    let bChampion = document.getElementsByClassName('aChampion')
    for (var i = 0; i < bChampion.length; i++) {
        bChampion[i].style.display = "flex";
      }

    let bUltimate = document.getElementsByClassName('aUltimate')
    for (var i = 0; i < bUltimate.length; i++) {
        bUltimate[i].style.display = "none";
      }

    let bMega = document.getElementsByClassName('aMega')
    for (var i = 0; i < bMega.length; i++) {
        bMega[i].style.display = "none";
      }
}


function soloUltimate () {
    let bFresh = document.getElementsByClassName('aFresh')

    for (var i = 0; i < bFresh.length; i++) {
        bFresh[i].style.display = "none";
      }

    let bInTraining = document.getElementsByClassName('aInTraining')
    for (var i = 0; i < bInTraining.length; i++) {
        bInTraining[i].style.display = "none";
      }

    let bRookie = document.getElementsByClassName('aRookie')
    for (var i = 0; i < bRookie.length; i++) {
        bRookie[i].style.display = "none";
      }

    let bChampion = document.getElementsByClassName('aChampion')
    for (var i = 0; i < bChampion.length; i++) {
        bChampion[i].style.display = "none";
      }

    let bUltimate = document.getElementsByClassName('aUltimate')
    for (var i = 0; i < bUltimate.length; i++) {
        bUltimate[i].style.display = "flex";
      }

    let bMega = document.getElementsByClassName('aMega')
    for (var i = 0; i < bMega.length; i++) {
        bMega[i].style.display = "none";
      }
}


function soloMega () {
    let bFresh = document.getElementsByClassName('aFresh')

    for (var i = 0; i < bFresh.length; i++) {
        bFresh[i].style.display = "none";
      }

    let bInTraining = document.getElementsByClassName('aInTraining')
    for (var i = 0; i < bInTraining.length; i++) {
        bInTraining[i].style.display = "none";
      }

    let bRookie = document.getElementsByClassName('aRookie')
    for (var i = 0; i < bRookie.length; i++) {
        bRookie[i].style.display = "none";
      }

    let bChampion = document.getElementsByClassName('aChampion')
    for (var i = 0; i < bChampion.length; i++) {
        bChampion[i].style.display = "none";
      }

    let bUltimate = document.getElementsByClassName('aUltimate')
    for (var i = 0; i < bUltimate.length; i++) {
        bUltimate[i].style.display = "none";
      }

    let bMega = document.getElementsByClassName('aMega')
    for (var i = 0; i < bMega.length; i++) {
        bMega[i].style.display = "flex";
      }
}


function allAll () {
    let bFresh = document.getElementsByClassName('aFresh')

    for (var i = 0; i < bFresh.length; i++) {
        bFresh[i].style.display = "flex";
      }

    let bInTraining = document.getElementsByClassName('aInTraining')
    for (var i = 0; i < bInTraining.length; i++) {
        bInTraining[i].style.display = "flex";
      }

    let bRookie = document.getElementsByClassName('aRookie')
    for (var i = 0; i < bRookie.length; i++) {
        bRookie[i].style.display = "flex";
      }

    let bChampion = document.getElementsByClassName('aChampion')
    for (var i = 0; i < bChampion.length; i++) {
        bChampion[i].style.display = "flex";
      }

    let bUltimate = document.getElementsByClassName('aUltimate')
    for (var i = 0; i < bUltimate.length; i++) {
        bUltimate[i].style.display = "flex";
      }

    let bMega = document.getElementsByClassName('aMega')
    for (var i = 0; i < bMega.length; i++) {
        bMega[i].style.display = "flex";
      }
}