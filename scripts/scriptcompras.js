function capturarDatosSK(){

    let producto1SK = document.getElementById('producto1SK').value;
    let producto2SK = document.getElementById('producto2SK').value;
    let producto3SK = document.getElementById('producto3SK').value;
    let producto4SK = document.getElementById('producto4SK').value;
    let producto5SK = document.getElementById('producto5SK').value;
    let producto6SK = document.getElementById('producto6SK').value;


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

function capturarDatosYamaha(){

    let producto1YM = document.getElementById('producto1YM').value;
    let producto2YM = document.getElementById('producto2YM').value;
    let producto3YM = document.getElementById('producto3YM').value;
    let producto4YM = document.getElementById('producto4YM').value;
    let producto5YM = document.getElementById('producto5YM').value;
    let producto6YM = document.getElementById('producto6YM').value;


    guardarYamaha(producto1YM,producto2YM,producto3YM,producto4YM,producto5YM,producto6YM);

}

function guardarYamaha(p1,p2,p3,p4,p5,p6){

    let YamahaPedidos ={
        producto1: p1,
        producto2: p2,
        producto3: p3,
        producto4: p4,
        producto5: p5,
        producto6: p6
    }
    
    localStorage.setItem("PedidoYamaha",JSON.stringify(YamahaPedidos));
    
}

function capturarDatosOtros(){

    let producto1Ot = document.getElementById('producto1Ot').value;
    let producto2Ot = document.getElementById('producto2Ot').value;
    let producto3Ot = document.getElementById('producto3Ot').value;
    let producto4Ot = document.getElementById('producto4Ot').value;
    let producto5Ot = document.getElementById('producto5Ot').value;
    let producto6Ot = document.getElementById('producto6Ot').value;


    guardarOtros(producto1Ot,producto2Ot,producto3Ot,producto4Ot,producto5Ot,producto6Ot);

}

function guardarOtros(p1,p2,p3,p4,p5,p6){

    let OtrosPedidos ={
        producto1: p1,
        producto2: p2,
        producto3: p3,
        producto4: p4,
        producto5: p5,
        producto6: p6
    }
    
    localStorage.setItem("PedidoOtros",JSON.stringify(OtrosPedidos));
    
}

function capturarDatosOfertas(){

    let producto1Oferta = document.getElementById('producto1Oferta').value;
    let producto2Oferta = document.getElementById('producto2Oferta').value;
    let producto3Oferta = document.getElementById('producto3Oferta').value;
    let producto4Oferta = document.getElementById('producto4Oferta').value;
    let producto5Oferta = document.getElementById('producto5Oferta').value;
    let producto6Oferta = document.getElementById('producto6Oferta').value;


    guardarOferta(producto1Oferta,producto2Oferta,producto3Oferta,producto4Oferta,producto5Oferta,producto6Oferta);

}

function guardarOferta(p1,p2,p3,p4,p5,p6){

    let OfertaPedidos ={
        producto1: p1,
        producto2: p2,
        producto3: p3,
        producto4: p4,
        producto5: p5,
        producto6: p6
    }
    
    localStorage.setItem("PedidoOfertas",JSON.stringify(OfertaPedidos));
    
}