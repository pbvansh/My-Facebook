import Image from "next/image"
import {useSession} from 'next-auth/react'
import { CameraIcon, EmojiHappyIcon, VideoCameraIcon } from "@heroicons/react/solid";

const InputBox = () => {

    const sendPost= (e)=>{
        e.preventDefault();
    }

  const {data:session} =useSession();

  return (
    <div className="bg-white rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex items-center space-x-4 p-4">
        <Image
            className=" rounded-full"
            src={session.user.image}
            height={40}
            width={40}
            layout='fixed'/>
            <form className="flex flex-1">
                <input type='text'
                 className="outline-none rounded-full bg-gray-100 h-10 px-5 flex-grow"
                 placeholder={`What's on your mind, ${session.user.name}`}/>
                 <button hidden type="submit" onClick={sendPost}>Submit</button>
            </form>
      </div>
      <div className="flex justify-center p-3 border-t">
        <div className="inputIcon">
            <VideoCameraIcon  className="h-7 w-7 text-red-500"/>
            <p className="text-xs sm:text-sm">Live Video</p>
        </div>
        <div className="inputIcon">
            <CameraIcon className="h-7 w-7 text-green-400"/>
            <p className="text-xs sm:text-sm">Photo/video</p>
        </div>
        <div className="inputIcon">
            <EmojiHappyIcon className="h-7 w-7 text-yellow-300"/>
            <p className="text-xs sm:text-sm">Feeling/activity</p>
        </div>
      </div>
    </div>
  )
}

export default InputBox
