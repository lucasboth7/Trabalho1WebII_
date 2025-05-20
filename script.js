function filtrar() {
    const termo = document.getElementById("campoBusca").value.toLowerCase(); //converte pra minusculo
    const pizzas = document.querySelectorAll(".quadradoPizzas"); //ele pega as div que tem o nome 
    let encontrou = false; //um boolean que sai de inicio como false

    pizzas.forEach(pizza => {
        const texto = pizza.textContent.toLowerCase(); //converte dnv
        if (texto.includes(termo)) {
            pizza.style.display = "block"; //mostrar o que foi encontrado
            encontrou = true;
        } else {
            pizza.style.display = "none"; //pra tirar da tela
        }
    });

    document.getElementById("mensagemErro").style.display = encontrou ? "none" : "block";
}

