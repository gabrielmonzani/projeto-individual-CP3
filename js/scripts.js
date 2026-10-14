// Aguarda o carregamento completo do DOM para executar os scripts
document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================================
     1. FEATURE INTERATIVA: TEMA CLARO / ESCURO (localStorage)
     ========================================================== */
  const btnTema = document.getElementById("btn-tema");
  const body = document.body;

  // Verifica se o utilizador já tinha guardado um tema anteriormente
  const temaSalvo = localStorage.getItem("tema_preferido");
  if (temaSalvo === "escuro") {
    body.classList.add("modo-escuro");
  }

  // Evento de clique para alternar o tema
  if (btnTema) {
    btnTema.addEventListener("click", () => {
      body.classList.toggle("modo-escuro");

      // Guarda a preferência atual no localStorage
      if (body.classList.contains("modo-escuro")) {
        localStorage.setItem("tema_preferido", "escuro");
      } else {
        localStorage.setItem("tema_preferido", "claro");
      }
    });
  }


  /* ==========================================================
     2. VALIDAÇÃO DO FORMULÁRIO E FEEDBACK VISÍVEL AO UTILIZADOR
     ========================================================== */
  const formContato = document.getElementById("form-contato");
  const mensagemFeedback = document.getElementById("mensagem-feedback");

  if (formContato) {
    formContato.addEventListener("submit", (evento) => {
      // Previne o recarregamento padrão da página
      evento.preventDefault();

      // Captura os valores dos campos
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      // Validação simples
      if (nome === "" || email === "" || mensagem === "") {
        mostrarFeedback("Por favor, preencha todos os campos do formulário.", "erro");
        return;
      }

      // Validação básica de e-mail (contém '@' e '.')
      if (!email.includes("@") || !email.includes(".")) {
        mostrarFeedback("Por favor, introduza um endereço de e-mail válido.", "erro");
        return;
      }

      // Se passar em todas as validações:
      mostrarFeedback(`Obrigado, ${nome}! A sua mensagem foi enviada com sucesso.`, "sucesso");
      
      // Opcional: limpar o formulário após o envio bem-sucedido
      formContato.reset();
    });
  }

  // Função auxiliar para gerir o aspeto do feedback no HTML
  function mostrarFeedback(texto, tipo) {
    if (!mensagemFeedback) return;
    
    mensagemFeedback.textContent = texto;
    mensagemFeedback.className = "feedback " + tipo; // Adiciona classe 'sucesso' ou 'erro' para estilizar no CSS
  }

});