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
        <title>Socialab | Innovación Social en América Latina</title>
        <meta name="description" content="Socialab es la plataforma líder en innovación social en LATAM. Aceleramos startups, brindamos consultoría de innovación y construimos comunidad de impacto." />
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
