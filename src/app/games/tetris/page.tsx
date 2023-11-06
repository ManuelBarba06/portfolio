'use client'

import Layout from "@/components/Layout/Layout"
import Title from "@/components/Title/Title"

import style from './page.module.css'
import TetrisBoard from "@/components/Tetris/TetrisBoard"
import Button from "@/components/Button/Button"
import { useTetris } from "@/hooks/useTetris"
import { useEffect } from "react"

const page = () => {
  const {matrixTetris, generateObject} = useTetris();
  
  return (
    <Layout>
        <div className={style.container}>
            <Title name="Tetris"/>
            <TetrisBoard
              elements={matrixTetris}
            />
            <br/>
            <Button
              name="START"
              onClick={() => generateObject()}
            />
        </div>
    </Layout>
  )
}

export default page