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
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  const card = document.createElement("div");
  card.classList.add("card");

  const cardNumber = document.createElement("div");
  cardNumber.textContent = cardIndex + 1;
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

  cardContainer.appendChild(card);

  const button = document.createElement("button");

  const cardButtonText = document.createElement("div");
  cardButtonText.classList.add("card-button-text");
  cardButtonText.innerText = "Read More";

  const arrow = document.createElement("i");
  arrow.classList.add("arrow");
  arrow.innerText = "→";

  button.append(cardButtonText, arrow);
  cardContainer.appendChild(button);

  return cardContainer;
}

function populateCards() {
  const cardsContainer = document.createElement("div");
  cardsContainer.setAttribute("class", "cards-container");

  if (books.cards) {
    books.cards.forEach((book, index) => {
      const card = createCard(index, book);
      cardsContainer.appendChild(card);
    });
  }

  root.appendChild(cardsContainer);
}

populateCards();
