import Bigscreen from '../src/components/Home/Bigscreen'
import Navbar from '../src/components/Home/Navbar'
import Testimonials from '../src/components/Home/Testimonials'
import Uppertab from '../src/components/Home/Uppertab'
import Blogsforhome from '../src/components/Home/blogs/blogsrep'
import Feature from '../src/components/Home/features'
import Foot from '../src/components/Home/footer'
import Price from '../src/components/Home/pricing'

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
