import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon
} from '@heroicons/react/outline';
import{
    CalculatorIcon,
    ClockIcon,
    UsersIcon,
    DesktopComputerIcon,
    CalendarIcon
} from '@heroicons/react/solid'
import SidebarRow from '../components/SidebarRow';
import { useSession } from 'next-auth/react'

const Sidebar = () => {
    const {data : session} = useSession();
  return (
    <div className="p-2 mt-5 max-w-[300px] xl:min-w-[300px] sm:inline-block">
      <SidebarRow src={session.user.image} name={session.user.name}/>
      <SidebarRow Icon={UsersIcon} name='Friends'/>
      <SidebarRow Icon={UserGroupIcon} name='Groups'/>
      <SidebarRow Icon={ShoppingBagIcon} name='Marketplace'/>
      <SidebarRow Icon={DesktopComputerIcon} name='Watch'/>
      <SidebarRow Icon={CalendarIcon} name='Event'/>
      <SidebarRow Icon={ClockIcon} name='Memories'/>
      <SidebarRow Icon={ChevronDownIcon} name='See More'/>
    </div>
  )
}

export default Sidebar
