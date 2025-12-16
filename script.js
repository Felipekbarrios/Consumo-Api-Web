const API_URL = 'http://localhost:8000/api/naruto'; 

const container = document.getElementById('cards-container');

async function fetchNarutos() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Erro na resposta da API');
    const narutos = await response.json();

    container.innerHTML = '';

    if (narutos.length === 0) {
      container.innerHTML = '<p>Nenhum personagem encontrado.</p>';
      return;
    }

    narutos.forEach(naruto => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h2>${naruto.nome}</h2>
        <p><strong>Aldeia:</strong> <span>${naruto.aldeia || '-'}</span></p>
        <p><strong>Rank:</strong> <span>${naruto.rank || '-'}</span></p>
        <p><strong>Natureza do Chakra:</strong> <span>${naruto.natureza_chakra || '-'}</span></p>
        <p><strong>Clã:</strong> <span>${naruto.cla || '-'}</span></p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = '<p>Erro ao carregar dados da API.</p>';
    console.error(error);
  }
}

fetchNarutos();
