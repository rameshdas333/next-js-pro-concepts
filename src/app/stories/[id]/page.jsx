import Title from '@/app/components/Title';
import Link from 'next/link';
import React from 'react'

const StoryDetailsPage = async ({params}) => {
    const{id} = await params;
    console.log()
    const devstory = [
  {
    "id": 1,
    "name": "John Smith",
    "designation": "Frontend Developer",
    "company": "TechNova",
    "experience": "3 Years",
    "skills": ["React", "JavaScript", "Tailwind CSS"],
    "story": "John started his journey as a self-taught developer during college and quickly became passionate about building responsive and user-friendly web applications. Over the last three years, he has worked on several startup projects where he improved website performance, accessibility, and user experience. He enjoys learning modern frontend technologies and spends his free time contributing to open-source projects and mentoring beginner developers.",
    "image": "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    "id": 2,
    "name": "Sarah Johnson",
    "designation": "Backend Developer",
    "company": "CodeSphere",
    "experience": "5 Years",
    "skills": ["Node.js", "Express", "MongoDB"],
    "story": "Sarah specializes in backend architecture and scalable API development. She has worked with multiple enterprise applications handling thousands of daily users. Her expertise includes database optimization, authentication systems, and cloud deployment. Outside of work, Sarah enjoys writing technical blogs and exploring the latest trends in server-side development.",
    "image": "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    "id": 3,
    "name": "Michael Lee",
    "designation": "UI/UX Designer",
    "company": "PixelCraft",
    "experience": "4 Years",
    "skills": ["Figma", "Adobe XD", "Photoshop"],
    "story": "Michael is a creative designer with a strong passion for building modern and intuitive digital experiences. He has helped many startups improve their product designs through user research and interactive prototypes. His design philosophy focuses on simplicity, accessibility, and emotional connection between users and products.",
    "image": "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    "id": 4,
    "name": "Emily Davis",
    "designation": "Full Stack Developer",
    "company": "InnovateX",
    "experience": "6 Years",
    "skills": ["React", "Node.js", "PostgreSQL"],
    "story": "Emily has built and maintained full-stack applications for healthcare, education, and e-commerce industries. She enjoys solving complex problems and creating scalable software systems. Her strong communication skills allow her to collaborate effectively with both technical and non-technical teams.",
    "image": "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    "id": 5,
    "name": "Daniel Brown",
    "designation": "Software Engineer",
    "company": "NextWave",
    "experience": "2 Years",
    "skills": ["Python", "Django", "REST API"],
    "story": "Daniel is passionate about clean code and backend automation. Since joining NextWave, he has worked on several API integrations and workflow automation systems. He constantly experiments with new technologies and enjoys participating in hackathons and coding competitions.",
    "image": "https://randomuser.me/api/portraits/men/5.jpg"
  }
]
    const story = devstory.find(story=> story.id == id)
    if(!story){
        return <h2>Story not Found</h2>
    }
  return (
    <div >
      <Title>📖 Stories</Title> 
     <div className='grid grid-cols-3 gap-5 mt-20'>
         {
        [story].map((story) => (
          <div key={story.id} className="border  p-4 rounded-lg mb-4 flex items-center space-x-4">
            <img src={story.image} alt={story.name} className="w-16 h-16 rounded-full" />
            <div>
            <h3 className="text-xl font-semibold">{story.name}</h3>   
            <p className="text-gray-600">{story.designation} at {story.company}</p>  

                <p className="text-gray-500">{story.experience} experience</p>
                <p className="text-gray-700 mt-2">{story.story}</p> 
                    <Link href={`/stories/${story.id}`}>
                        <button className='mt-4 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg'>
                            View Profile
                        </button>
                    </Link>
                                   </div>   
                             </div>      ))  

      }
     </div>
    </div>
  )
}

export default StoryDetailsPage
