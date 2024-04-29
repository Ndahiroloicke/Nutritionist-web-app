import Trinity from './threefirst'
import Tritity from './threelast'

const Feature = () => {
  return (
    <div>
        <div className='features-head'>
        <h1 className='sticky top-0 font-extrabold text-3xl'>Features</h1>
        <p>Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.</p>
        </div>
        <div className='features'>
        <div className='three-1-components'>
    <Trinity/>
        </div>
        <div className='three-2-components'>
            <Tritity/>
        </div>
        </div>
    </div>
  )
}

export default Feature