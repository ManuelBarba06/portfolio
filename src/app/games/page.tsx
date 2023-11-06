import Layout from '@/components/Layout/Layout'
import Title from '@/components/Title/Title'
import Card from '@/components/Card/Card'
import TetrisIcon from '@/icon/TetrisIcon/TetrisIcon'

import styles from './page.module.css'

import '../page.module.css'

const page = () => {
  return (
    <Layout>
        <div className={styles.container}>
            <Title name='Games'/>
            <div>
                <Card
                    name='TETRIS'
                    description=''
                    href="/games/tetris"
                >
                    <TetrisIcon/>
                </Card>
            </div>
        </div>
    </Layout>
  )
}

export default page