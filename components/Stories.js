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
        name:"Jeff Bezoz",
        src:"https://links.papareact.com/4zn",
        profile:"https://links.papareact.com/kxk"   
    },
    {
        name:"Mark Zuckerberg",
        src:"https://links.papareact.com/xql",
        profile:"https://links.papareact.com/snf"   
    },
    {
        name:"Sonny Sangha",
        src:"https://links.papareact.com/4u4",
        profile:"https://links.papareact.com/zvy"   
    }
]

import StoryCard from "./StoryCard"

const Stories = () => {
  return (
    <div className="flex justify-center space-x-5 mx-auto">
       {stories.map(story => <StoryCard key={story.src} story={story}/>)}
    </div>
  )
}

export default Stories
