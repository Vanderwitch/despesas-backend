const API_URL = 'https://despesas-backend-o37s.onrender.com/api';
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

  const valor = parseFloat(document.getElementById('valor').value);
  const descricao = document.getElementById('descricao').value;
  const categoria = document.getElementById('categoria').value;
  const data = { valor, descricao, categoria };

  try {
    let res;

    if (editingId) {
      res = await fetch(`${API_URL}${editingId}/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      editingId = null;
    } else {
      res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    }

    if (!res.ok) {
      const text = await res.text();
      console.error("Erro ao salvar:", text);
      alert("Erro ao salvar despesa. Verifique os campos.");
      return;
    }

    form.reset();
    carregarDespesas(filtro.value);
  } catch (err) {
    console.error("Erro geral:", err);
    alert("Erro inesperado ao conectar à API.");
  }
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
