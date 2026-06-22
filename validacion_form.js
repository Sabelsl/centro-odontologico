const servicio = document.getElementById("servicio");
const campoDolor = document.getElementById("campo_dolor");
const nivelDolor = document.getElementById("nivel_dolor");
const valorDolor = document.getElementById("valor_dolor");

servicio.addEventListener("change", function () {
    if (servicio.value == "Emergencia odontológica") {
        campoDolor.style.display = "block";
    } else {
        campoDolor.style.display = "none";
        nivelDolor.value = 5;
        valorDolor.textContent = 5;
    }
});

nivelDolor.addEventListener("input", function () {
    valorDolor.textContent = nivelDolor.value;
});

const edad = document.getElementById("edad");
const valorEdad = document.getElementById("valorEdad");

edad.addEventListener("input", function () {
    valorEdad.textContent = edad.value;
});

const formulario = document.getElementById("formulario_hada_dental");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre_completo").value.trim();
    const documento = document.getElementById("documento").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();
    const fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    const edadIngresada = parseInt(document.getElementById("edad").value);
    const sexoSeleccionado = document.querySelector('input[name="sexo"]:checked');
    const servicioSeleccionado = document.getElementById("servicio").value;
    const diasSeleccionados = document.querySelectorAll('input[name="dias"]:checked');
    const aceptaDatos = document.getElementById("acepta_datos");

    const patronNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const patronTelefono = /^[0-9]{10}$/;
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const patronDocumento = /^[0-9]{8,11}$/;

    if (nombre == "") {
        alert("Debe ingresar el nombre completo.");
        return;
    }

    if (!patronNombre.test(nombre)) {
        alert("El nombre solo debe contener letras y espacios.");
        return;
    }

    if (documento == "") {
    alert("Debe ingresar el documento de identidad.");
    return;
    }

    if (!patronDocumento.test(documento)) {
        alert("El documento debe ser válido.");
        return;
    }
    
    if (correo == "") {
        alert("Debe ingresar el correo electrónico.");
        return;
    }

    if (!patronCorreo.test(correo)) {
        alert("Debe ingresar un correo electrónico válido.");
        return;
    }

    if (telefono == "") {
        alert("Debe ingresar el teléfono.");
        return;
    }

    if (!patronTelefono.test(telefono)) {
        alert("El teléfono debe tener exactamente 10 dígitos.");
        return;
    }

    if (contrasena == "") {
        alert("Debe ingresar una contraseña.");
        return;
    }

    if (contrasena.length < 5) {
        alert("La contraseña debe tener mínimo 5 caracteres.");
        return;
    }

    if (fechaNacimiento == "") {
        alert("Debe seleccionar la fecha de nacimiento.");
        return;
    }
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);

    let edadCalculada = hoy.getFullYear() - nacimiento.getFullYear();

    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (
        mes < 0 ||
        (mes === 0 && hoy.getDate() < nacimiento.getDate())
    ) {
        edadCalculada--;
    }

    if (Math.abs(edadIngresada - edadCalculada) > 1) {
        alert("La edad no coincide con la fecha de nacimiento.");
        return;
    }

    if (sexoSeleccionado == null) {
        alert("Debe seleccionar el sexo.");
        return;
    }

    if (servicioSeleccionado == "") {
        alert("Debe seleccionar un servicio odontológico.");
        return;
    }

    if (diasSeleccionados.length == 0) {
        alert("Debe seleccionar al menos un día de preferencia para la cita.");
        return;
    }

    if (!aceptaDatos.checked) {
        alert("Debe aceptar el tratamiento de datos personales.");
        return;
    }

    const resumenPaciente = document.getElementById("resumen_paciente");

    resumenPaciente.innerHTML =
        "<h2>Resumen del Paciente Registrado</h2>" +
        "<p><strong>Nombre:</strong> " + nombre + "</p>" +
        "<p><strong>Documento:</strong> " + documento + "</p>" +
        "<p><strong>Correo:</strong> " + correo + "</p>" +
        "<p><strong>Teléfono:</strong> " + telefono + "</p>" +
        "<p><strong>Fecha de nacimiento:</strong> " + fechaNacimiento + "</p>" +
        "<p><strong>Edad:</strong> " + edadIngresada + "</p>" +
        "<p><strong>Sexo:</strong> " + sexoSeleccionado.value + "</p>" +
        "<p><strong>Servicio odontológico:</strong> " + servicioSeleccionado + "</p>";


    alert("Paciente registrado correctamente.");
    formulario.reset();

        valorEdad.textContent = 50;
        edad.value = 50;

        campoDolor.style.display = "none";
        nivelDolor.value = 5;
        valorDolor.textContent = 5;
});
    const botonLimpiar = document.querySelector('input[type="reset"]');

    botonLimpiar.addEventListener("click", function () {
        document.getElementById("resumen_paciente").innerHTML = "";

        campoDolor.style.display = "none";

        valorEdad.textContent = 50;
        edad.value = 50;

        nivelDolor.value = 5;
        valorDolor.textContent = 5;
    });