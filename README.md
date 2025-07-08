# 💸 Sistema de Registro de Despesas Pessoais

Este projeto é uma aplicação web para registrar, consultar, editar e excluir **despesas pessoais**. É uma ferramenta prática para gerenciar seus gastos diários, categorizando-os e acompanhando sua evolução. Foi desenvolvida como atividade da disciplina **Desenvolvimento Web**.

---

## 🚀 Deploy

- 🔗 **Página do GitHub**: [https://github.com/Vanderwitch/despesas-pessoais]
- 🔗 **Aplicação online**: [https://despesas-pessoais-uern.netlify.app/]
- 🔗 **API (back-end)**: [https://despesas-backend-o37s.onrender.com/api/expenses/]
- 📹 **Vídeo demonstrativo**: [https://drive.google.com/file/d/1DFoT7kDxf8eE8Am2TNXiAAGL_IiXQHpw/view?usp=sharing]

---

## ⚙️ Tecnologias Utilizadas

### 🖥️ Front-end:
- HTML5
- CSS3
- JavaScript (Vanilla)
- Fetch API (AJAX)
- Responsividade com CSS puro

### 🌐 Back-end:
- Python 3.11
- Django 5
- Django REST Framework
- SQLite (banco de dados local para simplicidade)
- Render (serviço de hospedagem gratuito para o back-end)

---

## 📦 Como rodar o projeto localmente

### 🔹 Pré-requisitos

- Python 3 instalado
- Git
- Node.js e um servidor estático (apenas se quiser rodar o front com live reload, como o Live Server do VS Code)

---

### 🔹 Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/Vanderwitch/despesas-pessoais
   cd seu-repositorio

2. Crie e ative o ambiente virtual:
    ```bash
    python -m venv venv
    .\venv\Scripts\Activate.ps1  # no Windows
    source venv/bin/activate  # no Linux/Mac

3. Instale as dependências:
    ```bash
    pip install -r requirements.txt
    
4.  Rode as migrações:
    ```bash
    python manage.py migrate

5. Inicie o servidor:
    ```bash
    python manage.py runserver

6. Abra index.html no navegador (está na pasta frontend/)
ou use um plugin como o Live Server para rodar em http://localhost:5500;

✅ Funcionalidades Implementadas
📋 Listagem de despesas (valor, descrição e categoria)

➕ Cadastro de nova despesa

✏️ Edição de despesa existente

🗑️ Exclusão de despesa

🎯 Filtragem por categoria

📱 Responsividade para dispositivos móveis

🔄 Interações dinâmicas com Fetch API (sem recarregar a página)

🔧 API RESTful com Django REST Framework

💾 Persistência das despesas no banco de dados (SQLite)

☁️ Deploy do back-end no Render


🗂 Estrutura do Projeto
```bash
despesas-pessoais/
├── backend/            # Configurações do Django
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── expenses/           # App principal com models, views e serializers
│   └── migrations/
├── frontend/           # Interface do usuário (HTML, CSS, JS)
│   ├── index.html
│   ├── app.js
│   └── style.css
├── entrypoint.sh       # Script de inicialização no Render
├── manage.py
├── requirements.txt
└── render.yaml         # Configuração do deploy automático no Render
```





Desenvolvido por: Paulo Eduardo Cunha

Disciplina: Desenvolvimento Web - 4º Prova

Docente: Raul Benites Paradeda
