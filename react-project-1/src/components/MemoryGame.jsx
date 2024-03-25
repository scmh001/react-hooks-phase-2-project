import { useState } from "react"



const cardImages = [
  { "src": "https://png.pngtree.com/element_our/png_detail/20181014/drinks-icon-design-vector-png_124969.jpg" },
  { "src": "" },
  { "src": "" },
  { "src": "" },
  { "src": "" },
  { "src": "" }
]

function MemoryGame() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

    // shuffle cards
    const shuffleCards = () => {
      const shuffledCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }))

        setCards(shuffledCards)
        setTurns(0)
    }

    console.log(cards, turns)

  return (
    <div className="MemoryGame">
        <h1>Drink Match</h1>
        <button onClick={shuffleCards}>New Game</button>

       <div className="class-grid">
        {cards.map(card => (
          <div className="memory-card" key={card.id}>
          <div>
            <img className="front" src={card.src} alt="card front" />
            <img className="back" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-LfLh57aVUrixIifQaMzxVjO_0x52KJRsw&usqp=CAU" alt="card back" />
            </div>
          </div> 
        ))}
        </div> 
    </div>
  )
}


export default MemoryGame