const API_URL = 'http://localhost:8000/api/expenses/';
const lista = document.getElementById('lista-despesas');
const form = document.getElementById('expense-form');
const filtro = document.getElementById('filtro-categoria');

let editingId = null;

// Listar despesas
async function carregarDespesas(categoria = '') {
  let url = API_URL;
  if (categoria) url += `?categoria=${categoria}`;
  const res = await fetch(url);
  const despesas = await res.json();
  lista.innerHTML = '';
  despesas.forEach(d => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span><strong>R$${d.valor}</strong> - ${d.descricao} [${d.categoria}]</span>
      <span>
        <button onclick="editarDespesa(${d.id}, '${d.valor}', '${d.descricao}', '${d.categoria}')">✏️</button>
        <button onclick="deletarDespesa(${d.id})">🗑️</button>
      </span>
    `;
    lista.appendChild(li);
  });
}

form.onsubmit = async (e) => {
  e.preventDefault();
  const valor = document.getElementById('valor').value;
  const descricao = document.getElementById('descricao').value;
  const categoria = document.getElementById('categoria').value;

  const data = { valor, descricao, categoria };

  if (editingId) {
    await fetch(API_URL + editingId + '/', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    editingId = null;
  } else {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  }

  form.reset();
  carregarDespesas(filtro.value);
};

function editarDespesa(id, valor, descricao, categoria) {
  document.getElementById('valor').value = valor;
  document.getElementById('descricao').value = descricao;
  document.getElementById('categoria').value = categoria;
  editingId = id;
}

async function deletarDespesa(id) {
  await fetch(API_URL + id + '/', { method: 'DELETE' });
  carregarDespesas(filtro.value);
}

filtro.onchange = () => carregarDespesas(filtro.value);

carregarDespesas();
