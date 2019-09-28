class Articulo{
    constructor(nombre, marca, modelo, num_serie){
        this.nombre = nombre, 
        this.marca = marca,
        this.modelo = modelo,
        this.num_serie = num_serie;
    }
}

class Almacen{
    constructor(nombre,ubicacion){
        this.nombre = nombre,
        this.ubicacion = ubicacion,
        this.articulos=[];
    }
}

var almacen  = new Almacen('computo','norte');

function registrar(){

    const txtNombre  = document.getElementById('nombre').value;
    const txtModelo  = document.getElementById('modelo').value;
    const txtMarca  = document.getElementById('marca').value;
    const txtSerie  = document.getElementById('num-serie').value;


    let articulo = new Articulo(txtNombre,txtMarca,txtModelo,txtSerie);
    almacen.articulos.push(articulo);
    display();
}

function display(){
    
    var tbody = document.getElementById('tabla-body');
    var list = document.getElementsByClassName('art');

    while(list[0]){
        
        tbody.removeChild(list[0]);
    }

    for(var i=0;i<almacen.articulos.length; i++){
        var renglon = document.createElement('tr');
        renglon.setAttribute('class','art');
       
        var nombreart = document.createElement('td');
        var txtNombre = document.createTextNode(almacen.articulos[i].nombre);
        nombreart.appendChild(txtNombre);
        renglon.appendChild(nombreart);

        var marca = document.createElement('td');
        var txtMarca = document.createTextNode(almacen.articulos[i].marca);
        marca.appendChild(txtMarca);
        renglon.appendChild(marca);

        var modelo = document.createElement('td');
        var txtModelo = document.createTextNode(almacen.articulos[i].modelo);
        modelo.appendChild(txtModelo);
        renglon.appendChild(modelo);

        var serie = document.createElement('td');
        var txtSerie = document.createTextNode(almacen.articulos[i].num_serie);
        serie.appendChild(txtSerie);
        renglon.appendChild(serie);

        var eliminar = document.createElement('td');
        var btn = document.createElement('button');
        btn.setAttribute('onclick','eliminar('+i+');');
        btn.innerHTML='Eliminar';
        eliminar.appendChild(btn);
        renglon.appendChild(eliminar);

        tbody.appendChild(renglon);
    }
    $(document).ready( function () {
        $('#tabla-articulos').DataTable();
        } );
}
function eliminar(index){
    almacen.articulos.splice(index,1);
    console.log(almacen.articulos);
    display();
}
