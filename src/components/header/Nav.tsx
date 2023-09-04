import {FiSettings} from 'react-icons/fi'
import {IoNotificationsOutline} from 'react-icons/io5'
import { profile } from '../../assets'
import { AiOutlineMenu } from 'react-icons/ai'
export default function Nav() {
  return (
    <div className="w-full py-8 px-4 lg:px-12 flex justify-between items-center border-b border-[#EAECF0]">
        <h2 className='text-xl font-bold leading-6'>ToDo</h2>
        <div className='lg:flex justify-start gap-5 items-center hidden'>
            <FiSettings size={25}/>
            <IoNotificationsOutline size={25}/>
            <div className="w-10 h-10 rounded-full">
                <img src={profile} className='w-full h-full object-cover' alt="" />
            </div>
        </div>

        <AiOutlineMenu size={30} className="lg:hidden"/>
    </div>
  )
}
