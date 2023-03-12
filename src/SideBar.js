import {BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/bs';
import {FaFire, FaPoo} from 'react-icons/fa';

export default function SideBar() {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary shadow">
            <SideBarIcon icon={<FaFire size="28"/>}/>
            <SideBarIcon icon={<BsPlus size="32"/>}/>
            <SideBarIcon icon={<BsFillLightningFill size="20"/>}/>
            <SideBarIcon icon={<FaPoo size="20"/>}/>
        </div>
    );

    function SideBarIcon({icon, text = 'tooltip 💡' }) {
        return (
            <div className="sidebar-icon relative flex items-center justify-center h-12 w-12 my-2 mx-0 ml-1.5
            shadow-lg bg-gray-800 text-green-500 hover:bg-green-600 hover:text-white rounded-3xl hover:rounded-xl hover:cursor-pointer
            transition-all duration-300 ease-linear group">{icon}
            <span className='sidebar-tooltip absolute w-auto p-2 m-2 min-w-max left-24 rounded-md shadow-md text-white bg-gray-900
            text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100'>
                {text}
                </span>
            </div>
        )
    }
}