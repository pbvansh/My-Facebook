import Image from "next/image"


const Post = ({post}) => {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img
          className="rounded-full"
          src={post.image}
          width={40}
          height={40}
          alt=""/>
        <div>
          <p className="font-medium">{post.name}</p>
          <p className="text-xs text-gray-400">
            {new Date(post.timestamp?.toDate()).toLocaleString()}
          </p>
        </div>
      </div>
      <p className="p-4">{post.msg}</p>
    </div>
      {
        post.postImage && (
          <div className="relative h-56 md:h-96 bg-white">
            <Image src={post.postImage} objectFit='contain' layout="fill"/>
            </div>
        )
      }
    </div>
  )
}

export default Post
