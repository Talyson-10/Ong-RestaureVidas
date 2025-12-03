document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // impede o envio até a validação passar

        // Campos
        const nome = document.getElementById("idname");
        const email = document.getElementById("idemail");
        const senha = document.getElementById("idpassword");
        const data = document.getElementById("iddate");
        const motivo = document.getElementById("idtext");
        const projeto = document.getElementById("idselect");

        let mensagemErro = "";

        // Validações
        if (nome.value.trim() === "") {
            mensagemErro += "⚠️ O campo Nome é obrigatório.\n";
        }

        if (email.value.trim() === "" || !email.value.includes("@")) {
            mensagemErro += "⚠️ Informe um e-mail válido.\n";
        }

        if (senha.value.length < 6) {
            mensagemErro += "⚠️ A senha deve ter pelo menos 6 caracteres.\n";
        }

        if (data.value === "") {
            mensagemErro += "⚠️ Informe sua data de nascimento.\n";
        }

        if (motivo.value.trim().length < 10) {
            mensagemErro += "⚠️ Explique melhor por que deseja ser voluntário (mínimo 10 caracteres).\n";
        }

        if (projeto.value === "") {
            mensagemErro += "⚠️ Selecione um projeto.\n";
        }

        // Exibe resultado
        if (mensagemErro !== "") {
            alert("Por favor, corrija os seguintes erros:\n\n" + mensagemErro);
        
        } else {
            // Mostra o alerta primeiro
            alert("✅ Cadastro enviado com sucesso! Obrigado por se voluntariar 💙");

            // Depois de mostrar o alerta, limpa o formulário
            setTimeout(() => {
                form.reset();
            }, 100);
        }
    });
});
