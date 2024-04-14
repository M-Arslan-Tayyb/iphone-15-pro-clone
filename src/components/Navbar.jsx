
import appleImg from '../assets/images/apple.svg'
import search from '../assets/images/search.svg'
import bag from '../assets/images/bag.svg'

const Navbar = () => {
  return (

    <header className='w-full flex  px-5 py-5 sm:px-10 justify-between '>
      <img src={appleImg} alt="apple" width={18} height={18}/>
      <ul className='flex opacity-0 sm:opacity-100'>
        <li className='cursor-pointer px-4 hover:text-gray transition-all duration-400'>Phones</li>
        <li className='cursor-pointer px-4 hover:text-gray transition-all duration-400'>MacBooks</li>
        <li className='cursor-pointer px-4 hover:text-gray transition-all duration-400'>Tablets</li>
        <li className='cursor-pointer px-4 hover:text-gray transition-all duration-400'>AirPods</li>

      </ul>
      <div className='  flex gap-4 cursor-pointer'>
        <img src={search} alt='bag' width={18} height={18}></img>

        <img src={bag} alt='bag' width={18} height={18}></img>
      </div>
      
    </header>
  )
}

export default Navbar