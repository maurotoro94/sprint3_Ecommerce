const fila= document.querySelector('.contenedor-carousel');
const motos=document.querySelectorAll('.motos');
const flechaizq=document.getElementById('flecha-izq');
const flechader=document.getElementById('flecha-der');


flechader.addEventListener('click',()=>{

    fila.scrollLeft += fila.offsetWidth;

});

flechaizq.addEventListener('click',()=>{

    fila.scrollLeft -= fila.offsetWidth;

});

function capturarDatosSK(){

    let producto1SK = document.getElementById('producto1SK');
    let producto2SK = document.getElementById('producto2SK');
    let producto3SK = document.getElementById('producto3SK');
    let producto4SK = document.getElementById('producto4SK');
    let producto5SK = document.getElementById('producto5SK');
    let producto6SK = document.getElementById('producto6SK');

    guardarSuzuki(producto1SK,producto2SK,producto3SK,producto4SK,producto5SK,producto6SK);

}

function guardarSuzuki(p1,p2,p3,p4,p5,p6){

    let SuzukiPedidos ={
        producto1: p1,
        producto2: p2,
        producto3: p3,
        producto4: p4,
        producto5: p5,
        producto6: p6
    }
    
    localStorage.setItem("PedidoSuzuki",JSON.stringify(SuzukiPedidos));
    

}