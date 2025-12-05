📘 Documentação do Widget — Custom Control (Kommo CRM)
📌 Descrição

O Custom Control é um widget para o Kommo CRM que permite ao administrador:

Bloquear o acesso de determinados usuários aos menus Início e WhatsApp;

Adicionar CSS personalizado ao CRM;

Adicionar JavaScript personalizado ao CRM;

Criar um ambiente visual mais controlado e seguro.

O widget serve como uma camada de personalização e restrição dentro do CRM.

📂 Estrutura de Arquivos
widget-kommo-control/
 ├── manifest.json
 ├── script.js
 └── styles.css

manifest.json

Define:

Nome e descrição do widget

Versão

Local onde o widget aparece

Campos de configuração

Scripts e estilos carregados

script.js

Contém:

Lógica para bloquear menus

Leitura do usuário logado

Injeção de CSS e JS personalizados

styles.css

Estilos básicos do widget.

🚀 Como Hospedar o Widget

O Kommo exige que todos os arquivos estejam hospedados PUBLICAMENTE.

Você pode usar:

1) Vercel (Recomendado)

Crie um repositório no GitHub

Suba os arquivos

Vá no site da Vercel → New Project

Conecte ao repositório

Faça o deploy

A URL final será algo como:

https://seu-projeto.vercel.app/manifest.json

2) GitHub Pages

Vá em Settings → Pages

Point para branch main

A URL será algo como:

https://seuusuario.github.io/custom-control-widget/manifest.json

3) Servidor próprio

Basta colocar os arquivos em uma pasta pública acessível por HTTPS.

🛠 Instalação no Kommo CRM

Acesse o CRM

Vá em Configurações → Integrações

Clique em Instalar por URL

Insira a URL do manifest.json

Clique em Instalar

Se tudo estiver correto, a integração aparecerá na lista.

⚙ Configuração Dentro do Kommo

Ao acessar a integração instalada, você verá três campos:

1️⃣ IDs de Usuários Bloqueados

Exemplo:

12345, 67890


Esses usuários NÃO verão:

Menu Início

Menu WhatsApp

2️⃣ CSS Personalizado

Insira qualquer código CSS para modificar o visual do CRM.

Exemplo:

body {
    background: #f5f5f5 !important;
}

3️⃣ JS Personalizado

Insira JavaScript executado no carregamento do CRM.

Exemplo:

console.log("JS personalizado carregado!");

👤 Como Obter o ID do Usuário no Kommo

Vá em Configurações → Usuários

Clique no usuário

Na URL do navegador aparecerá:

https://SEU-KOMMO.com/settings/users/12345


➡ O número 12345 é o ID do usuário.

🧪 Testes
🔒 Teste de Bloqueio

Adicione um ID ao campo “Usuários bloqueados”

Faça login com esse usuário

Os menus “Início” e “WhatsApp” devem desaparecer

🎨 Teste de CSS

Cole:

body { background: #e3e3e3 !important; }


Recarregue o CRM → o fundo deve mudar.

⚙ Teste de JavaScript

Cole:

alert("JS carregado!");


Recarregue o CRM → o alerta deve aparecer.

📝 Considerações Finais

O widget Custom Control foi criado para fornecer:

Controle de permissões baseado no usuário

Personalização visual ilimitada

Extensões funcionais via JavaScript

Facilidade de administração

Ele não modifica dados sensíveis e não interfere nas operações internas do CRM além das configurações definidas pelo administrador.

📄 Suporte

Se você quiser:

Adicionar editor avançado (Monaco/ACE)

Criar novos recursos

Expandir as restrições de menus

Criar um painel visual interativo

Basta solicitar.
