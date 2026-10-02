import { About } from './components/About'
import { Booking } from './components/Booking'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Hours } from './components/Hours'
import { Location } from './components/Location'
import { MenuBrowser } from './components/MenuBrowser'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero /><MenuBrowser /><About /><Location /><Hours /><Booking />
      </main>
      <Footer />
    </>
  )
}
