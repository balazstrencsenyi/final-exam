import books from "./data.js";

const root = document.getElementById("root");

const headerContainer = document.createElement("div");
headerContainer.setAttribute("class", "header-container");
root.appendChild(headerContainer);

const headerTitle = document.createElement("h1");
headerTitle.setAttribute("class", "header-title");
headerTitle.textContent = books.logo;
headerContainer.appendChild(headerTitle);

const headerButton = document.createElement("button");
headerButton.setAttribute("class", "header-button");
headerButton.textContent = books.button;
headerContainer.appendChild(headerButton);

function createCard(book) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h2");
  title.textContent = book.title;
  card.appendChild(title);

  const subtitle = document.createElement("h3");
  subtitle.textContent = book.sub;
  card.appendChild(subtitle);

  const text = document.createElement("p");
  text.textContent = book.text;
  card.appendChild(text);

  return card;
}

function populateCards() {
  const root = document.getElementById("root");

  if (books.cards) {
    books.cards.forEach((book) => {
      const card = createCard(book);
      root.appendChild(card);
    });
  }
}

populateCards();
