import Image from "next/image"
import {useSession} from 'next-auth/react'
import { CameraIcon, EmojiHappyIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import {firestore, storage} from '../firebase'
import firebase from "firebase";

const InputBox = () => {

  const {data:session} =useSession();
  const [imageToPost,setImageToPost] = useState();

  const inputRef = useRef(null);
  const imageRef = useRef(null);
    const sendPost = (e)=>{
        e.preventDefault();
        if(!inputRef.current.value) return;
        firestore.collection('posts').add({
          msg:inputRef.current.value,
          name:session.user.name,
          email:session.user.email,
          image:session.user.image,
          timestamp:firebase.firestore.FieldValue.serverTimestamp()
        }).then((doc)=>{
          if(imageToPost){
            const upTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost,'data_url');

            removeImage();

            upTask.on('state_change',
            null,
            (error)=> console.error(error),
            ()=>{
              storage.ref('posts').child(doc.id).getDownloadURL().then(url=>{
                firestore.collection('posts').doc(doc.id).set({
                  postImage:url
                },{merge:true})
              })
            })
          }
        }); 

        inputRef.current.value="";
    }

  const addImageToPost = (e) => {
    const reader = new FileReader()
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (e) =>{
      setImageToPost(e.target.result)
    }
  };
  const removeImage=()=>{
    setImageToPost(null);
  }
 
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
                 ref={inputRef}
                 className="outline-none rounded-full bg-gray-100 h-10 px-5 flex-grow"
                 placeholder={`What's on your mind, ${session.user.name}`}/>
                 <button hidden type="submit" onClick={sendPost}>Submit</button>
            </form>
            {
              imageToPost && (
                <div onClick={removeImage}
                    className="flex flex-col filter hover:brightness-110 transition duration-150 transform
                                hover:scale-105 cursor-pointer">
                  <img className="h-10 object-contain" src={imageToPost} alt=""/>
                  <p className="text-red-500 text-xs text-center">Remove</p>
                </div>
              )
            }
      </div>
      <div className="flex justify-center p-3 border-t">
        <div className="inputIcon">
            <VideoCameraIcon  className="h-7 w-7 text-red-500"/>
            <p className="text-xs sm:text-sm">Live Video</p>
        </div>
        <div className="inputIcon" onClick={()=>imageRef.current.click()}>
            <CameraIcon className="h-7 w-7 text-green-400"/>
            <p className="text-xs sm:text-sm">Photo/video</p>
            <input onChange={addImageToPost} ref={imageRef} type='file' hidden/>
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
