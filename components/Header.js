import Image from "next/image"
import { BellIcon,
        ChartBarIcon,
        ChatIcon,
        ChevronDownIcon,
        UserGroupIcon,
        ViewGridIcon ,
        } from '@heroicons/react/solid'
import {
    HomeIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
    UsersIcon
} from '@heroicons/react/outline'
import HeaderIcon from "./HeaderIcon"
import { useSession, signIn, signOut } from "next-auth/react"


function Header(){
  const {data : session} = useSession()
  console.log(session);
  return (
    <div className="flex bg-white items-center p-2 sticky z-50 top-0 shadow-md lg:px-5">
      <div className="flex items-center">
        <Image src={'https://links.papareact.com/5me'}
               height={40}
               width={40}
               layout='fixed'
        />
        <div className="flex bg-gray-100 rounded-full items-center ml-2 p-2">
           <SearchIcon className="h-6 text-gray-500"/>
           <input className="hidden md:inline-flex items-center flex-shrink bg-transparent outline-none ml-2 placeholder-gray-500"
                  type='text' placeholder="Search Facebook"/>
        </div>
      </div>
      {/* center part */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon}/>
          <HeaderIcon Icon={UsersIcon}/>
          <HeaderIcon Icon={PlayIcon}/>
          <HeaderIcon Icon={ShoppingCartIcon}/>
          <HeaderIcon Icon={UserGroupIcon}/>
        </div>
      </div>
      {/* right side */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* profice pic */}
        <Image onClick={signOut}
               src={session.user.image} className='rounded-full cursor-pointer'
               height={40}
               width={40}
               layout='fixed'
        />
        <p className="whitespace-nowrap font-semibold pr-3 ml-2">{session.user.name}</p>
        <ViewGridIcon className="icon"/>
        <ChatIcon className="icon"/>
        <BellIcon className="icon"/>
        <ChevronDownIcon className="icon"/>
      </div>
    </div>
  )
}
/* https://links.papareact.com/5me */
export default Header
