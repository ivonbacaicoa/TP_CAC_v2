let select = document.querySelector("#select");
let divTotal = document.querySelector(".total");
let cantidad = document.querySelector(".cantidad");
let nameInput = document.querySelector(".name");
let surname = document.querySelector(".surname");
let email = document.querySelector(".email");
let resume = document.querySelector(".resume");

let total = (cantidad, categoria, div) => {
  if (!Number.isInteger(cantidad) || cantidad <= 0) {
    div.textContent = "Cantidad inválida";
    return;
  }

  if (categoria === "1") {
    div.textContent = `Total a pagar: $ ${200 * cantidad * 0.2}`;
  }

  if (categoria === "2") {
    div.textContent = `Total a pagar: $ ${200 * cantidad * 0.5}`;
  }

  if (categoria === "3") {
    div.textContent = `Total a pagar: $ ${200 * cantidad * 0.85}`;
  }
};

let emptyInput = (input) => {
  if (input.value === "") {
    input.style.borderColor = "red";
    return true;
  } else {
    input.style.borderColor = "green";
    return false;
  }
};

select.addEventListener("change", (e) => {
  if (e.target.value === "Seleccione categoria") {
    divTotal.textContent = "Total a pagar: $";
  }
  total(parseInt(cantidad.value), e.target.value, divTotal);
});

cantidad.addEventListener("input", (e) => {
  const cantidadValue = parseInt(e.target.value);
  if (isNaN(cantidadValue) || !Number.isInteger(cantidadValue)) {
    divTotal.textContent = "Cantidad inválida";
  } else {
    total(cantidadValue, select.value, divTotal);
  }
});

resume.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    !emptyInput(nameInput) &&
    !emptyInput(surname) &&
    !emptyInput(email) &&
    !emptyInput(cantidad) &&
    Number.isInteger(parseInt(cantidad.value)) &&
    parseInt(cantidad.value) > 0
  ) {
    Swal.fire({
      icon: "success",
      title: "Gracias por realizar tu compra",
      html: `<p>${nameInput.value} ${surname.value}</p>
      <p>Hemos enviado la informacion a: ${email.value}</p>
      <p>${divTotal.textContent}</p>`,
      confirmButtonText: "Continuar",
    }).then((result) => {
      if (result.isConfirmed) {
       window.location.href = "./index.html";
      }
    });
  }
});
