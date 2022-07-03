
import Stories from "./Stories"
import InputBox from "./InputBox"
import Posts
 from "./Posts"
const Feed = () => {
  return (
    <div className="flex-grow h-screen pb-44 mr-4 xl:mr-40 overflow-y-auto">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl mt-8">
        {/* strories */}
        <Stories/>
        {/* input box */}
        <InputBox/>
        {/* posts */}
        <Posts/>
        </div>
    </div>
  )
}

export default Feed
