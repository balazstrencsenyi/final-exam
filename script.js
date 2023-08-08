import books from "./data.js";

const root = document.getElementById("root");

const headerContainer = document.createElement("div");
headerContainer.setAttribute("class", "header-container");
root.appendChild(headerContainer);

const headerTitle = document.createElement("h1");
headerTitle.setAttribute("class", "header-title");
headerTitle.textContent = books.logo;
headerContainer.appendChild(headerTitle);

const headerButton = document.createElement("div");
headerButton.setAttribute("class", "header-button");
headerButton.textContent = books.button;
headerContainer.appendChild(headerButton);

function createCard(cardIndex, book) {
  const card = document.createElement("div");
  card.classList.add("card");

  // Create a div for the card number
  const cardNumber = document.createElement("div");
  cardNumber.textContent = cardIndex + 1; // Adding 1 to the index to display 1-based numbering
  cardNumber.classList.add("card-number");
  card.appendChild(cardNumber);

  const subtitle = document.createElement("h3");
  subtitle.textContent = book.sub;
  card.appendChild(subtitle);

  const title = document.createElement("h2");
  title.textContent = book.title;
  card.appendChild(title);

  const text = document.createElement("p");
  text.textContent = book.text;
  card.appendChild(text);

  return card;
}

function populateCards() {
  const cardsContainer = document.createElement("div");
  cardsContainer.setAttribute("class", "cards-container");

  if (books.cards) {
    books.cards.forEach((book, index) => {
      const card = createCard(index, book); // Pass the index to createCard
      cardsContainer.appendChild(card);
    });
  }

  root.appendChild(cardsContainer);
}

populateCards();
