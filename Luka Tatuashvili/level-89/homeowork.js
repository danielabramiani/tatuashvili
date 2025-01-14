const cardsData = [
    { title: 'Card 1', number: 85, image: 'https://via.placeholder.com/250' },
    { title: 'Card 2', number: 65, image: 'https://via.placeholder.com/250' },
    { title: 'Card 3', number: 75, image: 'https://via.placeholder.com/250' },
    { title: 'Card 4', number: 55, image: 'https://via.placeholder.com/250' },
    { title: 'Card 5', number: 95, image: 'https://via.placeholder.com/250' },
    { title: 'Card 6', number: 45, image: 'https://via.placeholder.com/250' },
    { title: 'Card 7', number: 70, image: 'https://via.placeholder.com/250' },
    { title: 'Card 8', number: 90, image: 'https://via.placeholder.com/250' },
    { title: 'Card 9', number: 60, image: 'https://via.placeholder.com/250' },
    { title: 'Card 10', number: 50, image: 'https://via.placeholder.com/250' }
  ];

  const cardsContainer = document.getElementById('cards');

  function renderCards(data) {
    cardsContainer.innerHTML = '';
    data.forEach(card => {
      cardsContainer.innerHTML += `
        <div class="card">
          <img src="${card.image}" alt="${card.title}">
          <h2>${card.title}</h2>
          <p class="number">${card.number}</p>
        </div>
      `;
    });
  }

  function filterBelowAverage() {
    const average = cardsData.reduce((sum, card) => sum + card.number, 0) / cardsData.length;
    const filtered = cardsData.filter(card => card.number >= average);
    renderCards(filtered);
  }

  function sortAscending() {
    const sorted = [...cardsData].sort((a, b) => a.number - b.number);
    renderCards(sorted);
  }

  function sortDescending() {
    const sorted = [...cardsData].sort((a, b) => b.number - a.number);
    renderCards(sorted);
  }

  function sortRandom() {
    const shuffled = [...cardsData].sort(() => Math.random() - 0.5);
    renderCards(shuffled);
  }

  renderCards(cardsData);
//     <div id="buttons">
//         <form>
//             <input type="number" placeholder="Enter number">
//             <button>Submit</button>
//         </form>
//         <button id="low-max">from low to max</button>
//         <button id="max-low">from max to low</button>
//         <button id="random">Random</button>
//     </div>

// body.innerHTML += `
//     <div id="buttons">
//         <form>
//             <input type="number" placeholder="Enter number">
//             <button>Submit</button>
//         </form>
//         <button id="low-max">from low to max</button>
//         <button id="max-low">from max to low</button>
//         <button id="random">Random</button>
//     </div>
//     <div id="main">
//         <div class="cards" id="movie-1">
//             <p class="name">${movies[0].name}</p>
//             <img src="${movies[0].img}" class="img">
//             <p class="rating">Rating: ${movies[0].rating}</p>
//         </div>
//         <div class="cards" id="movie-2">
//             <p class="name">${movies[1].name}</p>
//             <img src="${movies[1].img}" class="img">
//             <p class="rating">Rating: ${movies[1].rating}</p>
//         </div>
//         <div class="cards" id="movie-3">
//             <p class="name">${movies[2].name}</p>
//             <img src="${movies[2].img}" class="img">
//             <p class="rating">Rating: ${movies[2].rating}</p>
//         </div>
//         <div class="cards" id="movie-4">
//             <p class="name">${movies[3].name}</p>
//             <img src="${movies[3].img}" class="img">
//             <p class="rating">Rating: ${movies[3].rating}</p>
//         </div>
//         <div class="cards" id="movie-5">
//             <p class="name">${movies[4].name}</p>
//             <img src="${movies[4].img}" class="img">
//             <p class="rating">Rating: ${movies[4].rating}</p>
//         </div>
//         <div class="cards" id="movie-6">
//             <p class="name">${movies[5].name}</p>
//             <img src="${movies[5].img}" class="img">
//             <p class="rating">Rating: ${movies[5].rating}</p>
//         </div>
//         <div class="cards" id="movie-7">
//             <p class="name">${movies[6].name}</p>
//             <img src="${movies[6].img}" class="img">
//             <p class="rating">Rating: ${movies[6].rating}</p>
//         </div>
//         <div class="cards" id="movie-8">
//             <p class="name">${movies[7].name}</p>
//             <img src="${movies[7].img}" class="img">
//             <p class="rating">Rating: ${movies[7].rating}</p>
//         </div>
//         <div class="cards" id="movie-9">
//             <p class="name">${movies[8].name}</p>
//             <img src="${movies[8].img}" class="img">
//             <p class="rating">Rating: ${movies[8].rating}</p>
//         </div>
//         <div class="cards" id="movie-10">
//             <p class="name">${movies[9].name}</p>
//             <img src="${movies[9].img}" class="img">
//             <p class="rating">Rating: ${movies[9].rating}</p>
//         </div>
//         <div class="cards" id="movie-11">
//             <p class="name">${movies[10].name}</p>
//             <img src="${movies[10].img}" class="img">
//             <p class="rating">Rating: ${movies[10].rating}</p>
//         </div>
//         <div class="cards" id="movie-12">
//             <p class="name">${movies[11].name}</p>
//             <img src="${movies[11].img}" class="img">
//             <p class="rating">Rating: ${movies[11].rating}</p>
//         </div>
//     </div>
// `