import { useState } from 'react';
import './App.css';
import { DotType } from './types/dotType';
const App: React.FC = () => {

  const [dots, setDots] = useState<DotType[]>([]);
  const [redoDots, setRedoDots] = useState<DotType[]>([]);

  const handlePlacement = (e: React.MouseEvent<HTMLDivElement>): void => {
    let dot: DotType = {
      x: e.clientX,
      y: e.clientY
    }
    setDots([...dots, dot]);
    setRedoDots([...redoDots, dot]);
  }

  const handleUndo = (): void => {
    setDots(prevDot => prevDot.slice(0, -1))
  }

  const handleRedo = (): void => {
    if (dots.length !== redoDots.length) {
      setDots(prevDot => [...prevDot, redoDots[prevDot.length]]);
    }
  }

  return (

    <>

      <header>
        <button onClick={handleUndo}>Undo</button><button onClick={handleRedo} >Redo</button>
      </header>
      <div id="dots" onClick={(e) => { handlePlacement(e) }}>
        {

          dots.length !== 0 &&
          dots.map((d) =>
            <div key={d.x} className="dots-placed" style={{ position: 'absolute', left: `${d.x}px`, top: `${d.y}px` }}>
            </div>
          )

        }
      </div>
    </>

  )

}
export default App
