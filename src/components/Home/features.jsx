import Trinity from './threefirst'
import Tritity from './threelast'

const Feature = () => {
  return (
    <div>
        <div className=''>
        <h1 className='text-[28px] font-bold md:text-[38px] md:mt-[100px] md:mx-[670px] mx-[130px] my-[16px]'>Features</h1>
        <p className='w-[330px] md:w-[780px] md:mx-[400px] md:mb-[60px] mx-[30px]'>Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.</p>
        </div>
        <div className='flex flex-col m-0 md:flex-row md:mx-[150px] md:justify-between '>
        <div className=''>
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