import { useState, useEffect } from "react";

// array of card images 
const cardImages = [
  { "src": "https://static.vecteezy.com/system/resources/previews/025/421/836/non_2x/boba-milk-tea-cartoon-icon-illustration-food-and-drink-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg" },
  { "src": "https://static.vecteezy.com/system/resources/previews/034/711/173/non_2x/soft-drink-icon-illustration-junk-food-icon-concept-orange-isolated-flat-cartoon-style-suitable-for-web-landing-page-banner-flyer-sticker-card-background-vector.jpg" },
  { "src": "https://static.vecteezy.com/system/resources/previews/019/636/565/non_2x/drink-cup-illustration-cold-drink-concept-icon-warm-ready-to-drink-vector.jpg" },
  { "src": "https://static.vecteezy.com/system/resources/previews/006/429/768/non_2x/soda-drink-cartoon-icon-illustration-food-drink-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg" },
  { "src": "https://static.vecteezy.com/system/resources/previews/008/124/026/original/juice-cup-cartoon-icon-illustration-food-and-drink-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg" },
  { "src": "https://img.freepik.com/premium-vector/glass-cup-juice-orange-juice-illustration_884500-24004.jpg" }
];

// Define the MemoryGame functional component
function MemoryGame() {
  // State hooks for managing cards, turns, and choices
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // Function to shuffle cards and reset game state
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages] // Duplicate the cardImages array to have pairs
      .sort(() => Math.random() - 0.5) // Shuffle the array
      .map((card) => ({ ...card, id: Math.random() })); // Assign a random id to each card

    setCards(shuffledCards);
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  // Function to handle card click events
  const handleCardClick = (card) => {
    if (!disabled) {
      card.isFlipped = !card.isFlipped; // Toggle the isFlipped property
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card); // Set the choice based on whether a card has already been chosen
    }
  };

  // useEffect hook to compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true); // Disable further clicks
      if (choiceOne.src === choiceTwo.src) { // Check if the cards match
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }; // Mark matched cards
            } else {
              return card;
            }
          });
        });
        resetTurn(); // Reset choices and increment turn counter
      } else {
        setTimeout(() => { // Flip the cards back over after a delay if they don't match
          setCards(prevCards => {
            return prevCards.map(card => {
              return { ...card, isFlipped: card.matched || false }; // Only flip back unmatched cards
            });
          });
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]); // This effect depends on choiceOne and choiceTwo

  // Function to reset choices and increment the turn counter
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  };

  // Render the MemoryGame component
  return (
    <div className="MemoryGame bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl text-white font-bold mb-10">Drink Match</h1>
      <button
        onClick={shuffleCards}
        className="mb-8 bg-purple-200 text-purple-800 px-8 py-3 rounded-lg font-semibold hover:bg-purple-300 transition duration-300 ease-in-out"
      >
        New Game
      </button>

      <div className="grid grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`memory-card transform transition duration-500 ease-in-out ${
              card.isFlipped ? 'rotate-y-180' : ''
            } rounded-lg  cursor-pointer`}
            onClick={() => handleCardClick(card)}
          >
            <div className="relative w-40 h-56">
              <img
                className={`absolute top-0 left-0 w-full h-full rounded-lg ${
                  card.isFlipped ? 'opacity-0' : 'opacity-100'
                }`}
                src="https://png.pngtree.com/png-vector/20190901/ourlarge/pngtree-stop-watch-icon-design-vector-png-image_1711939.jpg"
                alt="card back"
              />
              <img
                className={`absolute top-0 left-0 w-full h-full rounded-lg ${
                  card.isFlipped ? 'opacity-100' : 'opacity-0'
                }`}
                src={card.src}
                alt="card front"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 text-white text-xl font-semibold">
        Turns: {turns}
      </div>
    </div>
  );
}

// Export the MemoryGame component 
export default MemoryGame;