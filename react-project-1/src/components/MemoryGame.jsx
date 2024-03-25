import { useState, useEffect } from "react";

const cardImages = [
  { "src": "https://static.vecteezy.com/system/resources/previews/025/421/836/non_2x/boba-milk-tea-cartoon-icon-illustration-food-and-drink-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg" },
  { "src": "https://static.vecteezy.com/system/resources/previews/034/711/173/non_2x/soft-drink-icon-illustration-junk-food-icon-concept-orange-isolated-flat-cartoon-style-suitable-for-web-landing-page-banner-flyer-sticker-card-background-vector.jpg" },
  { "src": "https://static.vecteezy.com/system/resources/previews/019/636/565/non_2x/drink-cup-illustration-cold-drink-concept-icon-warm-ready-to-drink-vector.jpg" },
  { "src": "https://static.vecteezy.com/system/resources/previews/006/429/768/non_2x/soda-drink-cartoon-icon-illustration-food-drink-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg" },
  { "src": "https://static.vecteezy.com/system/resources/previews/008/124/026/original/juice-cup-cartoon-icon-illustration-food-and-drink-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg" },
  { "src": "https://img.freepik.com/premium-vector/glass-cup-juice-orange-juice-illustration_884500-24004.jpg" }
];

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  // handle a card click
  const handleCardClick = (card) => {
    if (!disabled) {
      card.isFlipped = !card.isFlipped;
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }
  };

  // compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          setCards(prevCards => {
            return prevCards.map(card => {
              return { ...card, isFlipped: card.matched || false };
            });
          });
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <div className="MemoryGame bg-gradient-to-r from-blue-400 to-indigo-600 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="font-sans text-4xl text-white font-bold mb-8">Drink Match</h1>
      <button
        onClick={shuffleCards}
        className="font-sans mb-6 bg-white text-indigo-600 px-6 py-2 rounded shadow-lg hover:bg-indigo-100 transition duration-300"
      >
        New Game
      </button>

      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`memory-card transform transition duration-500 ease-in-out ${
              card.isFlipped ? 'rotate-y-180' : ''
            }`}
            onClick={() => handleCardClick(card)}
          >
            <div className="relative w-32 h-48">
              <img
                className={`absolute top-0 left-0 w-full h-full rounded-lg shadow-md ${
                  card.isFlipped ? 'opacity-0' : 'opacity-100'
                }`}
                src="https://png.pngtree.com/png-vector/20190901/ourlarge/pngtree-stop-watch-icon-design-vector-png-image_1711939.jpg"
                alt="card back"
              />
              <img
                className={`absolute top-0 left-0 w-full h-full rounded-lg shadow-md ${
                  card.isFlipped ? 'opacity-100' : 'opacity-0'
                }`}
                src={card.src}
                alt="card front"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Turn Counter */}
      <div className="mt-4 text-white text-lg font-sans font-bold">
        Turns: {turns}
      </div>
    </div>
  );
}

export default MemoryGame;