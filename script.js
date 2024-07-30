let productos = [];
let btnAgregarProducto = document.querySelector('#btnAgregarProducto');
let btnCalcularTotal = document.querySelector('#btnCalcularTotal');
btnAgregarProducto.addEventListener('click', function(){
    let cuerpoTabla = document.querySelector('#cuerpoTabla');
    let txtCodigoProducto = document.querySelector('#txtCodigoProducto');
    let txtNombreProducto = document.querySelector('#txtNombreProducto');
    let txtDescripcion = document.querySelector('#txtDescripcion');
    let txtPrecioUnitario = document.querySelector('#txtPrecioUnitario');
    let txtCantidad = document.querySelector('#txtCantidad');
    let cadenaDatos = '';
    let producto = {
        codigoProducto: txtCodigoProducto.value,
        nombreProducto: txtNombreProducto.value,
        descripcion: txtDescripcion.value,
        precioUnitario: txtPrecioUnitario.value,
        cantidad: txtCantidad.value
    }
    productos.push(producto);
    for(let i = 0 ; i < productos.length ; i++){
        cadenaDatos = cadenaDatos + `<tr>
                                        <td>${productos[i].codigoProducto}</td>
                                        <td>${productos[i].nombreProducto}</td>
                                        <td>${productos[i].descripcion}</td>
                                        <td>${productos[i].precioUnitario}</td>
                                        <td>${productos[i].cantidad}</td>
                                        <td>${(productos[i].precioUnitario * productos[i].cantidad) * 0.19}</td>
                                        <td>${((productos[i].precioUnitario * productos[i].cantidad) * 1.19)}</td>
                                    </tr>`;
    }
    cuerpoTabla.innerHTML = cadenaDatos;
});

btnCalcularTotal.addEventListener('click', function(){
    let total = 0;
    let contenedorResultado = document.querySelector('#contenedorResultado');
    for(let i = 0 ; i < productos.length ; i++){
        let totalDetalle = ((productos[i].precioUnitario * productos[i].cantidad) * 1.19);
        total = total + totalDetalle;
    }
    contenedorResultado.innerHTML = `<p class="container"> El total de la boleta es: ${total}</p>`;
});