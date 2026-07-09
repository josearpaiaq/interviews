import { useState } from 'react'
import './App.css'

type Color = { name: string; color: string; textColor?: string }

const COLORS: Color[] = [
  {name: 'red', color: '#ff0000', textColor: '#000'},
  {name: 'blue', color: '#0000ff', textColor: '#000'},
  {name: 'green', color: '#00ff00', textColor: '#000'},
  {name: 'yellow', color: '#ffff00', textColor: '#000'},
]

const getRandomColor = (currentColor: Color): Color => {
  const filterdColors = COLORS.filter(c => c.color !== currentColor.color)
  const randomIndex = Math.floor(Math.random() * filterdColors.length)
  return filterdColors[randomIndex]
}

function App() {
  const [currentColor, setCurrentColor] = useState<Color>(COLORS[0])
  const [score, setScore] = useState(0)

  const handleColorClick = (color: Color) => {
    if (color.color === currentColor.color) {
      setScore(prev => prev + 1)
      setCurrentColor(getRandomColor(currentColor))
    } else {
      setScore(prev => {
        if (prev > 0) {
          return prev - 1
        }
        return 0
      })
    }
  }

  return (
    <div className="App">
      <div>
        <h1>Color Matcher Game</h1>
      </div>

      <div>
        <h2>Instructions</h2>
        <p>Click on the squares to match the color.</p>
      </div>

      <div
        style={{
          height: '200px',
          width: '200px',
          backgroundColor: currentColor.color,
          color: currentColor.textColor,
          margin: '10px',
        }}
        className="cube"
      >
        <p>{currentColor.name}</p>
      </div>

      <div>
        <p>Score: {score}</p>
      </div>

      <div>
        {COLORS.map(c => (
          <button
            onClick={() => handleColorClick(c)}
            style={{
              backgroundColor: 'gray',
              border: 'none',
              color: '#000000',
              padding: '10px',
              margin: '10px',
            }}
            className="button"
          >{c.name}</button>
        ))}
      </div>
    </div>
  )
}

export default App
