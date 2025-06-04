## ✅ O QUE VOCÊ VAI PRECISAR
Conta no EmailJS (grátis).

Criar um template de email lá.

Copiar os IDs necessários (service ID, template ID, public key).

Adicionar a biblioteca do EmailJS no HTML.

Usar o script que envia o email com os dados do pedido.

## ✅ PASSO A PASSO COMPLETO
🧩 1. Criar conta no EmailJS
Acesse: https://www.emailjs.com
→ Clique em "Start for free"
→ Crie sua conta com email e senha.

🏗️ 2. Criar um Service
Vá em Email Services

Clique em “Add Service”

Escolha por exemplo o Gmail

Faça login e aceite permissões

Agora você tem um Service ID

📝 3. Criar Template de Email
Vá em Email Templates

Clique em Create New Template

Dê um nome e personalize o corpo (por exemplo):

text
Copy
Edit
Novo pedido de doces!

Email do cliente: {{user_email}}

Itens:
{{mensagem}}

Total: R$ {{total}}
Salve e pegue o Template ID.

🔑 4. Obtenha sua PUBLIC KEY
Vá em Account > API Keys

Copie sua Public Key (ex: Y4fKXXXXXXXXXXXXXXXXXXX)

💻 5. Atualizar seu código HTML
Adicione essa linha no <head> do seu HTML:

html
Copy
Edit
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
  (function(){
    emailjs.init("SUA_PUBLIC_KEY_AQUI");
  })();
</script>
🔁 6. Substituir função finalizarCompra() no script.js
Troque a função antiga por esta nova:

javascript
Copy
Edit
function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Carrinho vazio!");
    return;
  }

  const emailCliente = prompt("Digite seu email:");
  if (!emailCliente || !emailCliente.includes('@')) {
    alert("Email inválido.");
    return;
  }

  let mensagem = "";
  carrinho.forEach(item => {
    mensagem += `${item.nome} - Quantidade: ${item.quantidade} - Valor: R$ ${item.total.toFixed(2)}\n`;
  });

  const templateParams = {
    user_email: emailCliente,
    mensagem: mensagem,
    total: total.toFixed(2)
  };

  emailjs.send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', templateParams)
    .then(function(response) {
       alert('Pedido enviado com sucesso!');
       carrinho = [];
       total = 0;
       document.getElementById('caixa-doces').innerHTML = '';
    }, function(error) {
       alert('Erro ao enviar. Tente novamente.\n' + JSON.stringify(error));
    });
}
✅ Exemplo de valores para copiar:
js
Copy
Edit
emailjs.init("PÚBLICA_KEY_AQUI");
emailjs.send("service_teste", "template_pedido", templateParams);
📌 IMPORTANTE
Os campos {{user_email}}, {{mensagem}}, e {{total}} precisam existir no seu template do EmailJS.

Você pode adicionar {{para_email}} se quiser mandar sempre uma cópia para você.

✅ Quer que eu te envie o projeto pronto com isso integrado?
Posso montar um .zip com tudo configurado (basta você colar seus IDs do EmailJS).

Quer que eu prepare isso pra você?