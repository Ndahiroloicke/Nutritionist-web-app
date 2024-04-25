import Bigscreen from './components/Bigscreen'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'
import Uppertab from './components/Uppertab'
import Blogsforhome from './components/blogs/blogsrep'
import Feature from './components/features'
import Foot from './components/footer'
import Price from './components/pricing'

function App() {
  return (
    <>
    <Uppertab/>
    <Navbar/>
    <Bigscreen/>
    <Feature/>
    <Blogsforhome/>
    <Testimonials/>
    <Price/>
    <Foot/>
    </>
  )
}

export default App
