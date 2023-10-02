const partidas = [
   {
      avatar: '<img src="img/account-avatar-profile-user-7-svgrepo-com.svg" width="50"></img>' ,
      nick: 'RAMON' ,
      puntos: 35 ,
      fecha: '23 FEBRERO 1997' 
  },
  {
      avatar: '<img src="img/account-avatar-profile-user-13-svgrepo-com.svg" width="50"></img>' ,
      nick: 'JORDI' ,
      puntos: 60 ,
      fecha: '4 MAYO 2010'
  },
  {
      avatar: '<img src="img/account-avatar-profile-user-svgrepo-com.svg" width="50"></img>' ,
      nick: 'MIGUEL' ,
      puntos: 100 ,
      fecha: '22 JULIO 2002'
  },
]
  
const datosEjemploPartida = {
    avatar:'<img src="img/account-avatar-profile-user-5-svgrepo-com.svg" width="50"></img>',
    nick: 'CONSUELO' ,
    puntos: 1000,
    fecha:'21 MAYO 2023' 
}
    
function pintaRanking(){
  let tabla=` 
  <h2 class="text-center text-light">Ranking</h2>
  <table class="table table-dark align-middle">
    <theader>
      <tr class="bg-dark">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </theader>
    <tbody>
      <tr>
        <td class="fs-2">1</td>
        <td><img src="" alt="avatar" /></td>
        <td>ANDER</td>
        <td>1255</td>
      </tr>
      <tr>
        <td class="fs-2">2</td>
        <td><img src="" alt="avatar" /></td>
        <td>ANDER</td>
        <td>1255</td>
      </tr>
      <tr>
        <td class="fs-2">3</td>
        <td><img src="" alt="avatar" /></td>
        <td>ANDER</td>
        <td>1255</td>
      </tr>
    </tbody>
    <tfoot></tfoot>
  </table>
  `
  document.querySelector("#ranking").innerHTML=tabla;
  console.log(tabla);
}


function pintaTaula(partidas){
  let tabla= 
    `
      <h2 class="text-center text-light">Partidas</h2>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Buscador"
          aria-label="Buscador"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
      <table class="table table-dark">
        <theader>
          <tr>
            <td></td>
            <td>Nick <i class="bi bi-arrow-up-square"></i></td>
            <td>Puntuación <i class="bi bi-arrow-up-square"></i></td>
            <td>Fecha <i class="bi bi-arrow-up-square"></i></td>
          </tr>
        </theader>
        <tbody>
    `
    partidas.forEach(element => {
    tabla += `<tr><td>${element.avatar}</td><td>${element.nick}</td>
    <td>${element.puntos}</td><td>${element.fecha}</td></tr>`
    });

    tabla+=
    `
        </tbody>
        <tfoot></tfoot>
      </table>
    `
    document.querySelector("#partidas").innerHTML=tabla;
    console.log(tabla);
}

function insertaNuevaPartida(datosEjemploPartida){
  console.log("GUARDANDO PARTIDA...!!!")
  console.log(datosEjemploPartida.avatar)
  console.log(datosEjemploPartida.nick)
  console.log(datosEjemploPartida.puntos)
  console.log(datosEjemploPartida.fecha)

  partidas.push(datosEjemploPartida)
  partidas.forEach(element => {
    console.log(element.avatar)
    console.log(element.nick)
    console.log(element.puntos)
    console.log(element.fecha)
    });
}

function pintaDatosPartida(datosEjemploPartida) {
  console.log("Datos de la partida:")
  console.log("Avatar: " + datosEjemploPartida.avatar)
  console.log("Jugador: " + datosEjemploPartida.nick)
  console.log("Puntuación: " + datosEjemploPartida.puntos)
  console.log("Fecha: " + datosEjemploPartida.fecha)

  const mensaje = `
    Avatar: ${datosEjemploPartida.avatar}
    Jugador: ${datosEjemploPartida.nick}
    Puntuación: ${datosEjemploPartida.puntos}
    Fecha: ${datosEjemploPartida.fecha} 
    ¿Deseas guardar la partida?
  `

  const guardarPartida = confirm(mensaje);
  if (guardarPartida) {
    insertaNuevaPartida(datosEjemploPartida)
    pintaTaula(partidas)
  }
}

pintaDatosPartida(datosEjemploPartida)
pintaRanking()
