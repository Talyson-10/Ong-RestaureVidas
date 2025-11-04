
 ONG Restaurar Vidas
💡 Sobre o Projeto

O site Restaurar Vidas foi desenvolvido com o objetivo de divulgar os projetos sociais da ONG e incentivar o cadastro de voluntários dispostos a ajudar pessoas em situação de vulnerabilidade.
O sistema apresenta seções explicativas, imagens ilustrativas e um formulário de inscrição para novos colaboradores.

🧱 Estrutura do Projeto
Ong-RestaureVidas/
│
├── index.html              # Página principal (Sobre Nós)
├── projetos.html           # Página com os projetos sociais
├── cadastro.html           # Página de cadastro de voluntários
│
├── css/
│ └── index.css       # Estilo principal
│
├── script.js/
│   └── index.js         # Funções de validação e interação
│
└── Imagem/
    ├── Projetos/           # Imagens da página de projetos
    └── Cadastro/           # Imagem do cabeçalho do cadastro

🖥️ Tecnologias Utilizadas

HTML5 → Estrutura e conteúdo das páginas.

CSS3 (Flex e Grid Layout) → Estilização e responsividade.

JavaScript → Interatividade e validações do formulário.

Google Fonts (Cabin) → Tipografia moderna e legível.

🧩 Funcionalidades

✔️ Página inicial com informações sobre a ONG.
✔️ Sessão de projetos sociais com imagens e descrições.
✔️ Formulário de cadastro de voluntários com campos obrigatórios.
✔️ Validação de senha e email via JavaScript.
✔️ Alerta de confirmação ao enviar o formulário.
✔️ Layout totalmente responsivo para celular, tablet e desktop.

🧠 Lógica do JavaScript

O arquivo script.js adiciona:

Verificação se todos os campos foram preenchidos.

Checagem se a senha tem no mínimo 6 caracteres.

Exibição de alerta amigável confirmando o envio dos dados.

Exemplo:

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("idname").value;
  const senha = document.getElementById("idpassword").value;

  if (senha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres!");
  } else {
    alert(`Cadastro realizado com sucesso! Bem-vindo(a), ${nome}!`);
  }
});

📸 Pré-visualização

https://talyson-10.github.io/Ong-RestaureVidas/


👨‍💻 Autor

Talyson Souza
Aluno de Análise e Desenvolvimento de Sistemas
📧 contato: talysonsouzagomes10@gmail.com

💻 GitHub: github.com/Talyson-10
