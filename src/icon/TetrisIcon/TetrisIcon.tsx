import style from './TetrisIcon.module.css'

const TetrisIcon = () => {
  return (
    <div
        className={style.tetris}
    >
        <div className={style.squaresContainer}>
            <div className={style.square}/>
            <div className={style.square}/>
            <div className={style.square}/>
        </div>
        <div className={style.square}/>
    </div>
  )
}

export default TetrisIcon