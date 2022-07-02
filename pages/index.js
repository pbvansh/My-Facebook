import Head from 'next/head'
import Header from '../components/Header'
import {useSession} from 'next-auth/react'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'

export default function Home() {
  const { data: session } = useSession()
  if(!session) return <Login/>;

  return (
    <div>
      <Head>
        <title>
          Facebook
        </title>
      </Head>
     <Header/>
     <main className='flex'>
     {/* sidebar */}
     <Sidebar/>
      {/* feed */}
      <Feed/>
      {/* widgets */}
      </main>
    </div>
  )
}

