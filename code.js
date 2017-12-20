
function resultado(){
    var precio=document.getElementById("precio");
    var valorPrecio= precio.options[precio.selectedIndex].value;
    // alert(valorPrecio);
    var apartado=document.getElementById("apartado");
    var valorApartado= apartado.options[apartado.selectedIndex].value;
    // alert(valorApartado);




    switch(valorPrecio) {
        case 'op1':
            // alert("Has entrado en el switch por op1");

            switch(valorApartado) {
                case 'camara':
                    alert("Samsung Galaxy J5 2017 y Xiaomi Mi A1 por la doble cámara");
                    break;
                case 'bateria':
                    alert("Xiaomi Redmi Note 4");
                    break;
                case 'multimedia':
                    alert("Samsung Galaxy J5 2017");
                    break;
                case 'rendimiento':
                    alert("Xiaomi Mi A1 y Moto G5s Plus");
                    break;
                case 'equilibrio':
                    alert("Xiaomi Mi A1");
                    break;
                
            }
            break;
        case 'op2':
            // alert("Has entrado en el switch por op2");
            switch(valorApartado) {
                case 'camara':
                    alert("Samsung Galaxy A5 2017");
                    break;
                case 'bateria':
                    alert("Huawei P10 Lite");
                    break;
                case 'multimedia':
                    alert("BQ Aquaris X Pro");
                    break;
                case 'rendimiento':
                    alert("BQ Aquaris X Pro y Xiaomi Mi A1");
                    break;
                case 'equilibrio':
                    alert("Xiaomi Mi A1");
                    break;
                
            }



            break;
        case 'op3':
            // alert("Has entrado en el switch por op3");
            switch(valorApartado) {
                case 'camara':
                    alert("Samsung Galaxy S7 y Xiaomi Mi 6 por el modo retrato");
                    break;
                case 'bateria':
                    alert("Xiaomi Mi Note 2, Honor 8 Pro");
                    break;
                case 'multimedia':
                    alert("LG G6, Samsung Galaxy S7, Xiaomi Mi Mix 2");
                    break;
                case 'rendimiento':
                    alert("En esta gama de precios todos los teléfonos tienen muy buen rendimiento, te recomiendo que elijas otra opción.");
                    break;
                case 'equilibrio':
                    alert("Xiaomi Mi 6");
                    break;
                
            }
            break;
        case 'op4':
            // alert("Has entrado en el switch por op4");
            switch(valorApartado) {
                case 'camara':
                    alert("Google Pixel 2 XL");
                    break;
                case 'bateria':
                    alert("Asus Zenfone 3 Zoom");
                    break;
                case 'multimedia':
                    alert("iPhone X, Samsung Galaxy Note 8");
                    break;
                case 'rendimiento':
                    alert("OnePlus 5T y Google Pixel 2 XL");
                    break;
                case 'equilibrio':
                    alert("OnePlus 5T");
                    break;
                
            }
            break;
        
    }
}

