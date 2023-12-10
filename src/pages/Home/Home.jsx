import React from 'react'
import './Home.css'
import ChatArea from '../../components/ChatArea/ChatArea'
import HomeFeedPost from '../../components/HomeFeedPost/HomeFeedPost'

const Users={
  User1:{
    userPfp:'Chirag-Sharma',
    userName: 'Chirag Sharma',
    userTag: 'MIT',

  },
  User2:{
    userPfp:'Rahul-Kumar',
    userName: 'Rahul Kumar',
    userTag: 'DTU 2018',

  },
  User3:{
    userPfp:'Ankur-Kumar2',
    userName: 'Ankur Kumar',
    userTag: 'MIT 2012',

  }
}
console.log(Users['User2']);

const postArray=[
  {
    user: Users['User2'],
    postTitle:'How to design a product that can grow itself 10x in year:',
    postDesc: 'Designing a product with the potential to grow exponentially—10x in a year—requires a strategic blend of scalability, user-centricity, and adaptable infrastructure. Firstly, understanding the core value proposition for users and foreseeing their evolving needs is crucial. Integrate scalable features and infrastructure that can accommodate rapid growth without compromising quality or user experience. Implement iterative development cycles to swiftly adapt to feedback and market demands. Additionally, fostering a robust community or network around the product can catalyze its organic growth through word-of-mouth and network effects. Creating a product capable of self-growth demands a blend of foresight, adaptability, and a relentless focus on delivering value.',
    postImg:'',

    postDetails: {
      likes: 100,
      comments: 83,
      reshares: 12,
      shares: 8,
      saves: 49
    }
  },
  {
    user: Users['User1'],
    postTitle:'Tech Trends Unveiled: Navigating the Ever-Evolving Landscape',
    postDesc: "In today's tech realm, the landscape is abuzz with transformative trends. The Metaverse is no longer a dream but a tech giant's investment in immersive digital worlds for gaming and social connections. AI's omnipresence reshapes industries, while blockchain extends beyond crypto to revamp trust paradigms in supply chains and voting systems. Edge computing's surge empowers real-time data processing, while quantum computing's potential looms large. Cybersecurity is pivotal amid evolving threats, and sustainability is a collective tech goal, from energy-efficient designs to remote work tools enhancing collaboration. These trends intersect, demanding adaptability and continuous learning to innovate at this evolving crossroads. Navigating this landscape requires curiosity, interdisciplinary collaboration, and harnessing these advancements to craft an inclusive, sustainable, and groundbreaking tech future. Embrace change, stay agile, and shape the future of tech at the convergence of these transformative technologies.",
    postImg:'/assets/pfp/Ankur-Kumar.png',
    postDetails: {
      likes: 120,
      comments: 43,
      reshares: 8,
      shares: 10,
      saves: 32
    }
  },
  {
    user: Users['User3'],
    postTitle:'Tech Trends Unveiled: Navigating the Ever-Evolving Landscape',
    postDesc: "In today's tech realm, the landscape is abuzz with transformative trends. The Metaverse is no longer a dream but a tech giant's investment in immersive digital worlds for gaming and social connections. AI's omnipresence reshapes industries, while blockchain extends beyond crypto to revamp trust paradigms in supply chains and voting systems. Edge computing's surge empowers real-time data processing, while quantum computing's potential looms large. Cybersecurity is pivotal amid evolving threats, and sustainability is a collective tech goal, from energy-efficient designs to remote work tools enhancing collaboration. These trends intersect, demanding adaptability and continuous learning to innovate at this evolving crossroads. Navigating this landscape requires curiosity, interdisciplinary collaboration, and harnessing these advancements to craft an inclusive, sustainable, and groundbreaking tech future. Embrace change, stay agile, and shape the future of tech at the convergence of these transformative technologies.",
    postImg:'',

    postDetails: {
      likes: 120,
      comments: 43,
      reshares: 8,
      shares: 10,
      saves: 32
    }
  },
  
]

const Home = () => {
  return (
    <div className='home flex flex-col gap-3'>
    {postArray.map((post, index) => (
      <HomeFeedPost key={index} {...post} />
    ))}
  </div>
  )
}

export default Home