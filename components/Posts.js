
import { firestore } from '../firebase';
import Post from './Post'
import { useState,useEffect } from 'react';

const Posts = () => {

  const [info , setInfo] = useState([]);

// Fetch the required data using the get() method
useEffect(()=>{
    firestore.collection("posts").get().then((querySnapshot) => {
         
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach(element => {
            var data = element.data();
            setInfo(arr => [...arr,data]);  
        });
    })
 },[]);

  return (
    <div>
      {
         info.map((data) => (
          <Post key={data.image} post={data}/>
          )) 
      }
    </div>
  )
}

export default Posts;
