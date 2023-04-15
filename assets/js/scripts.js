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
        let nContador = 0 ;
        let textoTarjeta = '' ;
        let textoNombre= '';

        for (let i = 0; i < listaDigimon.length; i++) {

            textoTarjeta = listaDigimon[i].level == 'In Training' ? 'a' + 'InTraining': 'a' + listaDigimon[i].level;

            if (textoTarjeta == 'aFresh') {
                nContador = nFresh
            } else if (textoTarjeta == 'aInTraining'){
                nContador = nInTraining
            } else if (textoTarjeta == 'aRookie'){
                nContador = nRookie
            } else if (textoTarjeta == 'aChampion'){
                nContador = nChampion
            } else if (textoTarjeta == 'aUltimate'){
                nContador = nUltimate
            } else if (textoTarjeta == 'aMega'){
                nContador = nMega
            }

            let crearTarjeta = document.createElement ('div');
            crearTarjeta.setAttribute('class', textoTarjeta);
            crearTarjeta.setAttribute('onmouseover','this.style.transform = "scale(1.25)"');
            crearTarjeta.setAttribute('onmouseout','this.style.transform = "scale(0.85)"');
            document.getElementsByClassName('contenido')[0].appendChild(crearTarjeta);

            let creandoImg = document.createElement('img');
            creandoImg.src = listaDigimon[i].img;
            creandoImg.alt = '';
            creandoImg.style.maxWidth = '90px';
            document.getElementsByClassName(textoTarjeta)[nContador].appendChild(creandoImg);

            let creandoNombre = document.createElement('p');
            creandoNombre.setAttribute ('class','nombre');
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

            textoNombre =  listaDigimon[i].name
            let creandoLista = document.createElement('option');
            creandoLista.setAttribute('value', textoNombre);
            creandoLista.innerHTML = listaDigimon[i].name;
            document.getElementById('digimons').appendChild(creandoLista);

        }
    })
    .catch(error => { console.log(error) });
};

function soloFresh () {

  let trabajarContenido = document.getElementsByClassName('contenido')
  trabajarContenido[0].style.justifyContent = 'space-around';
  trabajarContenido[0].style.padding = '2%';
  let trabajarTarjetaGrande = document.getElementsByClassName('tarjetaGrande')
  trabajarTarjetaGrande[0].style.display = 'none';
  
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

  let trabajarContenido = document.getElementsByClassName('contenido')
  trabajarContenido[0].style.justifyContent = 'space-around';
  trabajarContenido[0].style.padding = '2%';
  let trabajarTarjetaGrande = document.getElementsByClassName('tarjetaGrande')
  trabajarTarjetaGrande[0].style.display = 'none';
  
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

  let trabajarContenido = document.getElementsByClassName('contenido')
  trabajarContenido[0].style.justifyContent = 'space-around';
  trabajarContenido[0].style.padding = '2%';
  let trabajarTarjetaGrande = document.getElementsByClassName('tarjetaGrande')
  trabajarTarjetaGrande[0].style.display = 'none';
  
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

  let trabajarContenido = document.getElementsByClassName('contenido')
  trabajarContenido[0].style.justifyContent = 'space-around';
  trabajarContenido[0].style.padding = '2%';
  let trabajarTarjetaGrande = document.getElementsByClassName('tarjetaGrande')
  trabajarTarjetaGrande[0].style.display = 'none';

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

    let trabajarContenido = document.getElementsByClassName('contenido')
    trabajarContenido[0].style.justifyContent = 'space-around';
    trabajarContenido[0].style.padding = '2%';
    let trabajarTarjetaGrande = document.getElementsByClassName('tarjetaGrande')
    trabajarTarjetaGrande[0].style.display = 'none';

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

    let trabajarContenido = document.getElementsByClassName('contenido')
    trabajarContenido[0].style.justifyContent = 'space-around';
    trabajarContenido[0].style.padding = '2%';
    let trabajarTarjetaGrande = document.getElementsByClassName('tarjetaGrande')
    trabajarTarjetaGrande[0].style.display = 'none';

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
    let trabajarContenido = document.getElementsByClassName('contenido')
    trabajarContenido[0].style.justifyContent = 'space-around';
    trabajarContenido[0].style.padding = '2%';
    let trabajarTarjetaGrande = document.getElementsByClassName('tarjetaGrande')
    trabajarTarjetaGrande[0].style.display = 'none';

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

function consultarDigimon() {

  fetch('https://digimon-api.vercel.app/api/digimon')
  .then(response => response.json())
  .then(listaDigimon =>{  
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
        bMega[i].style.display = "none";
      }

    let trabajarContenido = document.getElementsByClassName('contenido')
    trabajarContenido[0].style.justifyContent = 'center';
    trabajarContenido[0].style.padding = '5%';

    
    let trabajarTarjetaGrande = document.getElementsByClassName('tarjetaGrande')
    trabajarTarjetaGrande[0].style.display = 'flex';

    let imagenDigimon = document.getElementById ('img2')
    let nombreDigimon = document.getElementById ('nombre2')
    let nivelDigimon = document.getElementById ('nivel2')
    
    let nombreParaBuscar = document.getElementById('digimons').value
    for(let i = 0; i < listaDigimon.length; i++){

      if (listaDigimon[i].name == nombreParaBuscar){

        imagenDigimon.src = listaDigimon[i].img;
        nombreDigimon.innerHTML = listaDigimon[i].name;
        nivelDigimon.innerHTML = listaDigimon[i].level;
      }

    }

  })
  .catch(error => { console.log(error) });
};