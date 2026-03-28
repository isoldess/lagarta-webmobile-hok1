document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = form.querySelector('input[name="Nome:"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const telefone = form.querySelector('input[name="telephone"]').value.trim();
        const tipoSelecionado = form.querySelector('input[name="tipo"]:checked');

        const erros = [];

        if (nome === "") {
            erros.push("Nome é obrigatório.");
        }

        if (email === "") {
            erros.push("E-mail é obrigatório.");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            erros.push("E-mail inválido.");
        }

        if (telefone === "") {
            erros.push("Telefone é obrigatório.");
        } else if (!/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(telefone)) {
            erros.push("Telefone inválido. Use o formato (11) 99999-9999.");
        }

        if (!tipoSelecionado) {
            erros.push("Selecione o tipo de animal.");
        }

        if (erros.length > 0) {
            alert("Por favor, corrija os erros:\n\n" + erros.join("\n"));
        } else {
            alert("Formulário enviado com sucesso!");
            form.reset();
        }
    });
});
