import Head from 'next/head'
import Navbar from '@components/Navbar'
import Hero from '@components/Hero'
import Services from '@components/Services'
import About from '@components/About'
import Contact from '@components/Contact'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mallplaza Impulsa — Ecosistema de innovación urbana</title>
        <meta name="description" content="Mallplaza Impulsa: el laboratorio de las ciudades del futuro. Cada centro se convierte en un espacio vivo donde probar, escalar e implementar innovación." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
