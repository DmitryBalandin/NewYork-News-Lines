// import '../src/styles/reset.scss'
import { Main } from './components/Main'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import '../src/styles/global.scss'
import styles from '../src/styles/styles.module.scss'


function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.appMain}>
        <Main />
      </div>
      <Footer />
    </div>
  )
}

export default App
