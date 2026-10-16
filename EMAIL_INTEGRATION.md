# Como Implementar Envio de E-mails para o Site Dzainer Marcenaria

Este documento explica como implementar a funcionalidade de envio de e-mails para o formulário de orçamento do site, utilizando ferramentas gratuitas que funcionam bem com e-mails brasileiros.

## ✅ Opções Recomendadas (Grátis e Compatível com Brasil)

### 1. **Formspree** (Recomendado)
- **Vantagens**: Grátis até 50 envios/mês, muito fácil de integrar, funciona com e-mails brasileiros
- **Como usar**: 
  1. Crie uma conta em [formspree.io](https://formspree.io)
  2. Crie um novo formulário
  3. Copie o endpoint URL (ex: https://formspree.io/f/seu-id)
  4. Substitua no atributo `action` do formulário no index.html
- **Limite gratuito**: 50 envios/mês (suficiente para pequeno negócio)
- **Exemplo de implementação**:
  ```html
  <form action="https://formspree.io/f/seu-form-id" method="POST" class="budget-form">
  ```

### 2. **Getform.io**
- **Vantagens**: Grátis até 50 envios/mês, interface simples, bom suporte
- **Como usar**:
  1. Crie conta em [getform.io](https://getform.io)
  2. Crie um formulário e copie o endpoint
  3. Substitua no atributo `action`
- **Limite gratuito**: 50 envios/mês

### 3. **Formsubmit.co**
- **Vantagens**: Totalmente gratuito, sem limite de envios (com atribuição)
- **Como usar**:
  1. Não precisa de cadastro
  2. Use diretamente: `action="https://formsubmit.co/seu-email@dominio.com.br"`
  3. Confirme o e-mail clicando no link de confirmação que receberá
- **Limite gratuito**: Ilimitado (mostra pequeno rodapé "Powered by Formsubmit")
- **Exemplo**:
  ```html
  <form action="https://formsubmit.co/contato@dzainermarcenaria.com.br" method="POST" class="budget-form">
  ```

### 4. **EmailJS** (Para quem quer mais controle)
- **Vantagens**: Grátis até 200 e-mails/mês, permite usar seu próprio serviço de e-mail (Gmail, etc.)
- **Como usar**:
  1. Crie conta em [emailjs.com](https://www.emailjs.com)
  2. Configure um serviço de e-mail (Gmail, Outlook, etc.)
  3. Crie um template de e-mail
  4. Use o SDK JavaScript para enviar
- **Limite gratuito**: 200 e-mails/mês
- **Requer mais configuração**, mas oferece maior flexibilidade

## 📝 Passo a Passo para Implementar com Formspree (Recomendado)

### 1. Criar conta no Formspree
- Acesse [https://formspree.io](https://formspree.io)
- Clique em "Sign Up" e registre-se com seu e-mail
- Confirme seu e-mail clicando no link de confirmação

### 2. Criar um novo formulário
- Após fazer login, clique em "New Form"
- Dê um nome ao formulário (ex: "Orçamento Dzainer Marcenaria")
- O Formspree gerará um endpoint único (ex: https://formspree.io/f/abcd1234)

### 3. Atualizar o formulário no site
- Abra o arquivo `index.html`
- Localize a tag `<form>` na seção de orçamento
- Substitua o atributo `action` pelo endpoint do Formspree
- Exemplo:
  ```html
  <!-- ANTES -->
  <form action="https://formspree.io/f/your-form-id" method="POST" class="budget-form">
  
  <!-- DEPOIS -->  
  <form action="https://formspree.io/f/abcd1234" method="POST" class="budget-form">
  ```

### 4. Testar o formulário
- Salve o arquivo `index.html`
- Abra em um navegador e teste o formulário
- Preencha os campos e clique em "Enviar Solicitação"
- Você receberá o e-mail no endereço associado à sua conta Formspree

### 5. Configurar e-mail de notificação (opcional)
- No painel do Formspree, vá em "Plugin" ou "Email"
- Configure para receber notificações por e-mail quando receber uma submissão
- Você pode definir o endereço de e-mail onde deseja receber as notificações

## 🛠️ Personalizando o Formulário para Melhor Funcionalidade

### Campos Recomendados para o Formulário de Orçamento
O formulário atual já inclui os campos essenciais:
- Nome completo (obrigatório)
- E-mail (obrigatório)
- Telefone (opcional)
- Tipo de móvel desejado (obrigatório - dropdown)
- Descrição do projeto (obrigatório - textarea)
- Prazo desejado para entrega (opcional - date input)

### Dicas para Melhorar a Taxa de Conversão
1. **Seja claro sobre o que você precisa**: No campo "Descreva seu projeto", dê exemplos específicos
2. **Use máscaras para telefone**: Considere adicionar JavaScript para formatar o telefone como (XX) XXXXX-XXXX
3. **Validação do lado do cliente**: O HTML5 já fornece validação básica, mas você pode melhorar com JavaScript
4. **Mensagem de sucesso clara**: Após o envio, mostre uma mensagem confirmando o recebimento

## 📱 Considerações para E-mails Brasileiros

### Características Importantes
- **Suporte a acentos**: Todas as opções recomendadas acima suportam caracteres especiais do português brasileiro (á, é, í, ó, ú, ç, ã, õ)
- **Formato de data**: O campo `<input type="date">` funciona no formato internacional (YYYY-MM-DD), mas os usuários brasileiros verão no formato local em navegadores modernos
- **Codificação UTF-8**: O site já está configurado com UTF-8 no `<head>` (`<meta charset="UTF-8">`), garantindo que caracteres especiais sejam enviados corretamente

### Testando com E-mails Brasileiros
1. Teste com e-mails de diferentes provedores brasileiros:
   - Gmail (@gmail.com)
   - Outlook/Hotmail (@outlook.com, @hotmail.com)
   - Yahoo (@yahoo.com.br)
   - Terra (@terra.com.br)
   - UOL (@uol.com.br)
   - Provedores corporativos (@empresa.com.br)

2. Verifique se:
   - Os e-mails chegam corretamente
   - Os caracteres especiais (acentos, ç) são preservados
   - O formato da data é compreensível
   - Não há problemas de codificação

## 🔒 Segurança e Privacidade

### Medidas de Segurança Recomendadas
1. **Proteção contra spam**: O Formspree e similares já incluem proteção básica contra spam
2. **Não coletar dados sensíveis**: Não peça CPF, RG ou dados bancários no formulário inicial
3. **Política de privacidade**: Considere adicionar um link para sua política de privacidade perto do botão de envio
4. **Consentimento explícito**: Adicione uma checkbox para consentimento de uso de dados (LGPD)

### Exemplo de Adição de Consentimento LGPD
```html
<div class="form-group">
    <div class="form-check">
        <input type="checkbox" id="lgpd" name="lgpd" required>
        <label for="lgpd">Concordo que a Dzainer Marcenaria utilize meus dados para entrar em contato conforme nossa <a href="#" target="_blank">política de privacidade</a>.</label>
    </div>
</div>
```

## 💰 Custos e Escalabilidade

### Plano Grátis vs Pago
| Serviço | Grátis | Pago (a partir de) | Limite Grátis |
|---------|--------|-------------------|---------------|
| Formspree | ✅ | $10/mês | 50 envios/mês |
| Getform.io | ✅ | $10/mês | 50 envios/mês |
| Formsubmit.co | ✅ (com atribuição) | $5/mês (sem atribuição) | Ilimitado |
| EmailJS | ✅ | $5/mês | 200 e-mails/mês |

### Quando Considerar Atualizar
- Se você receber mais de 50 solicitações de orçamento por mês
- Se precisar de recursos avançados (como upload de arquivos para plantas ou fotos)
- Se quiser remover atribuições de marca
- Se precisar de integração com CRM ou outros sistemas

## 📞 Suporte e Recursos Adicionais

### Documentação Oficial
- **Formspree**: https://formspree.io/docs
- **Getform.io**: https://getform.io/help
- **Formsubmit.co**: https://formsubmit.co/doc

### Comunidades e Suporte
- Stack Overflow (tag: formspree, getform, etc.)
- Grupos de desenvolvimento web no Facebook/WhatsApp
- Fóruns de empreendedores e pequenos negócios

### Próximos Passos Sugeridos
1. Implementar uma das soluções acima
2. Testar com diferentes tipos de e-mails e navegadores
3. Adicionar confirmação de envio mais elaborada
4. Considerar adicionar upload de arquivos (plantas, fotos do ambiente) para orçamentos mais precisos
5. Implementar respostas automáticas de agradecimento

---

**Nota Importante**: Para sites comerciais, mesmo usando serviços gratuitos, é importante ter uma política de privacidade clara e cumprir com a LGPD (Lei Geral de Proteção de Dados) brasileira ao coletar e processar dados pessoais de clientes.