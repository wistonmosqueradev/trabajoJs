const open=document.getElementById('open')
const modal_con=document.getElementById('modal_con')
const cerrar=document.getElementById('cerar')


open.addEventListener('click',()=>{
    modal_con.classList.add('show');
})
cerrar.addEventListener('click',()=>{
    modal_con.classList
    .remove('show');
    
})

// cambiar fondo de la pagina 
const cambia=document.getElementById('cambia')
const cambiaColor =document.getElementById('cambiaColor')

cambia.addEventListener('click',()=>{
  let seguardaLocal= cambiaColor.classList.toggle("cambiaColor")
  localStorage.setItem("cambia",seguardaLocal)
})

let guarda=localStorage.getItem("cambia")

if (guarda=="true") {
    cambiaColor.classList.add('cambiaColor')
    
} else {
    cambiaColor.classList.remove('cambiaColor')
    
    
}


//guardar  en local storage


const usuario=document.getElementById('usuario')
const contrasena=document.getElementById('contrasena')
const boton=document.getElementById('boton')


boton.addEventListener('click',()=>{
    
    guardar()
})

const guardar=()=>{

    //cactura los datos 
    usuario.contrasena=contrasena.value
    usuario.usuario=usuario.value

    let jsonUsuario=JSON.stringify(usuario)
    let jsonContrasena=JSON.stringify(contrasena)

//limpia lac  casillas 
    document.getElementById("usuario").value = "";
    document.getElementById("contrasena").value = "";


    localStorage.setItem(contrasena.value, jsonContrasena)
    localStorage.setItem(usuario.value, jsonUsuario)
    document.getElementById("nombre").innerHTML = contrasena;
        document.getElementById("apellido").innerHTML = usuario

    alert("se guardado")

    

}

// boton para subir al inicio
 irArriba=()=>{
    window.addEventListener('scroll',()=>{
        const scroll=document.documentElement.scrollTop;
        const botonArriba=document.getElementById('botonArriba');

// validamos la distancia del scroll
        if (scroll > 300){
            botonArriba.style.right =20 +"px";
        }else{
            botonArriba.style.right = -100 +"px";
        
        }
    })

    }
        

irArriba()
