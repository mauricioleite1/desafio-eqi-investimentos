import Head from 'next/head'
import Simulador from '../components/Simulador';
import ResultadoDaSimulacao from '../components/ResultadoDaSimulacao';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <header>
          <h1>Simulador de Investimentos</h1>
        </header>
        
        <section>
          <Simulador />
          <ResultadoDaSimulacao />
        </section>
      </main>
    </div>
  )
}
