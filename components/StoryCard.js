import Image from "next/image"

const StoryCard = ({story}) => {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-14 lg:h-56 lg:w-20
                    cursor-pointer overflow-x p-3">
      <Image
      className="rounded-full absolute opacity-0 lg:opacity-100 z-50 top-10"
        src={story.profile}
        height={40}
        width={40}
        />
        <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
          src={story.src}
          layout='fill'
        />
    </div>
  )
}

export default StoryCard
