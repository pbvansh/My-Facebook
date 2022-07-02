

const HeaderIcon = ({Icon}) => {
  return (
    <div className="flex cursor-pointer items-center sm:h-14 md:hover:bg-gray-100 md:px-10
                    rounded-xl group">
      <Icon className='h-5 text-gray-500 group-hover:text-blue-500'/>
    </div>
  )
}

export default HeaderIcon
