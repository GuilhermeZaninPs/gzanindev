import Banner from "./components/banner/Banner"
import Cta from "./components/cta/Cta"
import Experience from "./components/experience/Experience"
import Footer from "./components/footer/Footer"
import HeaderNav from "./components/header/HeaderNav"
import Skills from "./components/skills/Skills"
export default function Home() {
  return (
    <div>
      <HeaderNav />
      <main>
        <Banner />
        <Skills />
        <Experience />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
