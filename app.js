const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

playerLivesCount.textContent = playerLives;

const getData = () => [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1652911366928-55177cc649d4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974",
    name: "pic1",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1653054822679-58df73f6137b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744",
    name: "pic2",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1652904429112-432f2905f2a1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965",
    name: "pic3",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1653060303041-032d8257b522?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
    name: "pic4",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1652949845332-e7a6a6e230fe?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
    name: "pic5",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1652972601446-b246cb1a6e21?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764s://images.unsplash.com/photo-1652946337008-066993cd7e11?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
    name: "pic6",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1652911366928-55177cc649d4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974",
    name: "pic1",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1653054822679-58df73f6137b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744",
    name: "pic2",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1652904429112-432f2905f2a1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965",
    name: "pic3",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1653060303041-032d8257b522?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
    name: "pic4",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1652949845332-e7a6a6e230fe?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
    name: "pic5",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1653051898488-080c49db3588?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974",
    name: "pic7",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1653051898488-080c49db3588?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974",
    name: "pic7",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1652990739281-f708cc5e520e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689",
    name: "pic8",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1652990739281-f708cc5e520e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689",
    name: "pic8",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1652972601446-b246cb1a6e21?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764s://images.unsplash.com/photo-1652946337008-066993cd7e11?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
    name: "pic6",
  },
];

const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

//Card Generator function
const cardGenerator = () => {
  const cardData = randomize();

  //Generate HTML
  cardData.forEach((item) => {
    // console.log(item);
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    //Attach the cards info to the cards
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);
    //Attach the cards to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", function (e) {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });

    const checkCards = (e) => {
      console.log(e);
      const clickedCard = e.target;
      clickedCard.classList.add("flipped");
      const flippedCards = document.querySelectorAll(".flipped");
      const toggleCard = document.querySelectorAll(".toggleCard")
      
      //LOGIC
      if (flippedCards.length === 2) {
        if (
          flippedCards[0].getAttribute("name") ===
          flippedCards[1].getAttribute("name")
        ) {
          flippedCards.forEach((card) => {
            card.classList.remove("flipped");
            card.style.pointerEvents = "none";
          });
        } else {
          console.log("wrong");
          flippedCards.forEach((card) => {
            card.classList.remove("flipped");
            setTimeout(() => card.classList.remove("toggleCard"), 1000);
          });
          playerLives--;
          playerLivesCount.textContent = playerLives;
          if (playerLives === 0) {
            gameRestart("Try Again ");
          }
        }
      }

      //RUN A CHECK IF WE WON A GAME 
      if (toggleCard.length === 16) {
        gameRestart('Winner')
      }
    };
    
  });
};

//game Restart
const gameRestart = (text) => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");

  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    //Ramdomize
    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });
  playerLives = 6;
  playerLivesCount.textContent = playerLives;
  setTimeout(() => {
    window.alert(text);
  }, 100);
};

cardGenerator();
