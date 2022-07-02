const stories = [
    {
        name:"Sonny Sangha",
        src:"https://links.papareact.com/zof",
        profile:"https://links.papareact.com/l4v"   
    },
    {
        name:"Elone Musk",
        src:"https://links.papareact.com/4zn",
        profile:"https://links.papareact.com/kxk"   
    },
    {
        name:"Pratik Vansh",
        src:"https://links.papareact.com/zof",
        profile:"https://links.papareact.com/l4v"   
    },
    {
        name:"Sonny Sangha",
        src:"https://links.papareact.com/zof",
        profile:"https://links.papareact.com/l4v"   
    },
    {
        name:"Sonny Sangha",
        src:"https://links.papareact.com/zof",
        profile:"https://links.papareact.com/l4v"   
    },
]

import StoryCard from "./StoryCard"

const Stories = () => {
  return (
    <div className="flex justify-center space-x-5 mx-auto">
       {stories.map(story => <StoryCard story={story}/>)}
    </div>
  )
}

export default Stories
