import { useEffect, useRef, useState } from "react"

export const useTetris = () => {
    
    const [matrixTetris,setMatrixTetris] = useState<number[][]>(Array(20).fill(Array(10).fill(0)))
    const initialized = useRef<boolean>(false)
    const square = [[4,5],[4,5]]
    
    useEffect(() => {
        console.log(matrixTetris)
    },[JSON.stringify(matrixTetris)])
    
    const generateObject = () => {
        const random = Math.floor(Math.random() * (8 - 1) + 1)
        let matrixAux = matrixTetris;
        square.forEach((elements,index)=>{
            elements.forEach((number) => {
                matrixAux[index+1][number] = random
            })
        })
        setMatrixTetris(matrixAux)
        console.log(JSON.stringify(matrixTetris))
    }
    
    return {
        matrixTetris,
        generateObject
    }
}