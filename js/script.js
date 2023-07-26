const priceForm = document.getElementById('priceForm');
const calcular = document.getElementById('calcular');
const resultadoDiv = document.getElementById('resultado');

let products = [];

calcular.addEventListener('click', calculatePrice);

function calculatePrice() {
    const nombreProducto = document.getElementById('nombreProducto').value;
    const precioOriginal = parseFloat(document.getElementById('precioOriginal').value);
    const porcentaje = parseFloat(document.getElementById('porcentaje').value);
    const action = document.querySelector('input[name="action"]:checked').value;

    if (precioOriginal < 0 || porcentaje < 0) {
        showError("Los valores deben ser positivos.");
        return;
    }

    let nuevoPrecio;

    if (action === 'aumentar') {
        nuevoPrecio = precioOriginal * (1 + porcentaje / 100);
    } else {
        nuevoPrecio = precioOriginal * (1 - porcentaje / 100);
    }

    products.push({
        nombreProducto,
        precioOriginal,
        nuevoPrecio
    });

    displayResultado(nombreProducto, nuevoPrecio);
    clearForm();
}

function displayResultado(nombreProducto, nuevoPrecio) {
    resultadoDiv.innerHTML = `<p>Producto: ${nombreProducto}</p><p>Nuevo precio: $${nuevoPrecio.toFixed(2)}</p>`;
}

function clearForm() {
    document.getElementById('nombreProducto').value = '';
    document.getElementById('precioOriginal').value = '';
    document.getElementById('porcentaje').value = '';
}

function showError(errorMessage) {
    alert(errorMessage);
}

priceForm.addEventListener('submit', (event) => {
    event.preventDefault();
});