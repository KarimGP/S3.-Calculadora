//Declaramos las operaciones en una función
function operacions(op) {

    const ops = {
        sumar: function sumarNumeros(n1, n2) {
            return (parseFloat(n1) + parseFloat(n2));
        },

        restar: function restarNumeros(n1, n2) {
            return (parseFloat(n1) - parseFloat(n2));
        },

        multiplicar: function multiplicarNumeros(n1, n2) {
            return (parseFloat(n1) * parseFloat(n2));
        },

        dividir: function dividirNumeros(n1, n2) {
            return (parseFloat(n1) / parseFloat(n2));
        }

    };

    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;

    //Comprobamos si se ha introducido números en las cajas
    if (isNaN(parseFloat(document.getElementById('valor1').value))) {
        document.getElementById('resultado').innerHTML = "<span style='color: red;'>Por favor, escriba un número 1</span>";
        document.getElementById("valor1").innerText = "0";
        document.getElementById("valor1").focus();
    } else if (isNaN(parseFloat(document.getElementById('valor2').value))) {
        document.getElementById('resultado').innerHTML = "<span style='color: red;'>Por favor, escriba un número 2</span>";
        document.getElementById("valor2").innerText = "0";
        document.getElementById("valor2").focus();
    }
    else {
        //Si se han introducido los números en ámbas cajas, operamos:
        switch (op) {
            case 'sumar':
                var resultado = ops.sumar(valor1, valor2);
                document.getElementById('resultado').innerHTML = "<span style='color: green;'>" + resultado + "</span>";
                break;
            case 'restar':
                var resultado = ops.restar(valor1, valor2);
                document.getElementById('resultado').innerHTML = "<span style='color: green;'>" + resultado + "</span>";
                break;
            case 'multiplicar':
                var resultado = ops.multiplicar(valor1, valor2);
                document.getElementById('resultado').innerHTML = "<span style='color: green;'>" + resultado + "</span>";
                break;
            case 'dividir':
                var resultado = ops.dividir(valor1, valor2);
                document.getElementById('resultado').innerHTML = "<span style='color: green;'>" + resultado + "</span>";
                break;
        }
    }
}