import { useEffect, useRef, useState } from 'react'
import style from './Tetris.module.css'

interface SquareTetris {
    number:number
}

const SquareTetris = ({number}:SquareTetris) => {
    
    const initialized = useRef<boolean>(false)
    const [bgColor, setBgColor] = useState("")
    
    useEffect(() => {
        if (!initialized.current){
            switch(number){
                case 0:
                    setBgColor("")
                    break;
                case 1:
                    setBgColor("#ff0000")
                    break;
                case 2:
                    setBgColor("#00ff00")
                    break;
                case 3:
                    setBgColor("#800080")
                    break;
                case 4:
                    setBgColor("#ffff00")
                    break;
                case 5:
                    setBgColor("#00ffff")
                    break;
                case 6:
                    setBgColor("#0000ff")
                    break;
                case 7:
                    setBgColor("#ff7f00")
                    break
            }
        }
    },[number])
    
  return (
    <div
        className={`${style.square}`}
        style={{borderColor: bgColor}}
    />
  )
}

export default SquareTetris