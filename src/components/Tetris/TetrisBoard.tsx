import SquareTetris from './SquareTetris'

import style from './Tetris.module.css'

interface TetrisBoard {
    elements: number[][]
}

const TetrisBoard = ({elements}:TetrisBoard) => {
  return (
    <div className={style.containerBoard}>
        {
            elements.map((elem,index) =>
                elem.map((n,i) => 
                    <SquareTetris
                        key={(index+"-"+i)}
                        number={elements[index][i]}
                    />
                )
            )
        }
    </div>
  )
}

export default TetrisBoard