import Image from "next/image"

const SidebarRow = ({src,Icon , name}) => {
  return (
    <div className="flex space-x-2 hover:bg-gray-100 p-3 rounded-2xl items-center">
        {src && 
            <Image src={src} width={35} height={35}
            className='rounded-full' layout="fixed"/>
        }
        {Icon && 
            <Icon className="text-blue-500 h-8 w-8"/>
        }   
        <p className="text-black font-semibold hidden sm:inline-flex">{name}</p>
    </div>
  )
}

export default SidebarRow
