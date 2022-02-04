import Head from 'next/head'
import Simulacao from '../components/Simulador';
import ResultadoDaSimulacao from '../components/ResultadoDaSimulacao';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Calculadora de Investimentos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.content}>
        <header>
          <h1>Simulador de Investimentos</h1>
        </header>
        <section>
          <Simulacao />
          <ResultadoDaSimulacao />
        </section>
      </main>
    </div>
  )
}
