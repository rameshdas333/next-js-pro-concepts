import React from 'react'
import Title from '../components/Title'
import Link from 'next/link'

const Stories = () => {
const devStories = [
  {
    "id": 1,
    "name": "John Smith",
    "designation": "Frontend Developer",
    "company": "TechNova",
    "experience": "3 Years",
    "skills": ["React", "JavaScript", "Tailwind CSS"],
    "story": "Passionate frontend developer who loves building responsive web applications.",
    "image": "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    "id": 2,
    "name": "Sarah Johnson",
    "designation": "Backend Developer",
    "company": "CodeSphere",
    "experience": "5 Years",
    "skills": ["Node.js", "Express", "MongoDB"],
    "story": "Backend engineer focused on scalable API development.",
    "image": "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    "id": 3,
    "name": "Michael Lee",
    "designation": "UI/UX Designer",
    "company": "PixelCraft",
    "experience": "4 Years",
    "skills": ["Figma", "Adobe XD", "Photoshop"],
    "story": "Creative designer who turns ideas into modern interfaces.",
    "image": "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    "id": 4,
    "name": "Emily Davis",
    "designation": "Full Stack Developer",
    "company": "InnovateX",
    "experience": "6 Years",
    "skills": ["React", "Node.js", "PostgreSQL"],
    "story": "Experienced full stack engineer with startup experience.",
    "image": "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    "id": 5,
    "name": "Daniel Brown",
    "designation": "Software Engineer",
    "company": "NextWave",
    "experience": "2 Years",
    "skills": ["Python", "Django", "REST API"],
    "story": "Software engineer passionate about automation and clean code.",
    "image": "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    "id": 6,
    "name": "Olivia Wilson",
    "designation": "Data Analyst",
    "company": "DataCore",
    "experience": "3 Years",
    "skills": ["SQL", "Power BI", "Excel"],
    "story": "Analyzes business data to discover growth opportunities.",
    "image": "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    "id": 7,
    "name": "James Taylor",
    "designation": "DevOps Engineer",
    "company": "CloudSync",
    "experience": "7 Years",
    "skills": ["Docker", "Kubernetes", "AWS"],
    "story": "Cloud and infrastructure expert ensuring smooth deployments.",
    "image": "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    "id": 8,
    "name": "Sophia Martinez",
    "designation": "Mobile App Developer",
    "company": "AppNest",
    "experience": "4 Years",
    "skills": ["Flutter", "Dart", "Firebase"],
    "story": "Builds cross-platform apps with modern mobile technologies.",
    "image": "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    "id": 9,
    "name": "William Anderson",
    "designation": "Cybersecurity Specialist",
    "company": "SecureNet",
    "experience": "8 Years",
    "skills": ["Ethical Hacking", "Network Security", "Linux"],
    "story": "Protects systems from cyber threats and vulnerabilities.",
    "image": "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    "id": 10,
    "name": "Emma Thomas",
    "designation": "AI Engineer",
    "company": "BrainTech",
    "experience": "5 Years",
    "skills": ["Python", "TensorFlow", "Machine Learning"],
    "story": "Develops intelligent AI models for real-world applications.",
    "image": "https://randomuser.me/api/portraits/women/10.jpg"
  },
  {
    "id": 11,
    "name": "David White",
    "designation": "Project Manager",
    "company": "VisionSoft",
    "experience": "9 Years",
    "skills": ["Agile", "Scrum", "Leadership"],
    "story": "Manages software teams and delivers projects on time.",
    "image": "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    "id": 12,
    "name": "Ava Harris",
    "designation": "QA Engineer",
    "company": "TestFlow",
    "experience": "4 Years",
    "skills": ["Selenium", "Cypress", "Manual Testing"],
    "story": "Ensures product quality with effective testing strategies.",
    "image": "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    "id": 13,
    "name": "Joseph Martin",
    "designation": "Cloud Engineer",
    "company": "SkyNet Solutions",
    "experience": "6 Years",
    "skills": ["AWS", "Azure", "Terraform"],
    "story": "Specialized in cloud migration and infrastructure automation.",
    "image": "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    "id": 14,
    "name": "Mia Thompson",
    "designation": "Graphic Designer",
    "company": "DesignPro",
    "experience": "3 Years",
    "skills": ["Illustrator", "Photoshop", "Branding"],
    "story": "Creates attractive visual identities for brands.",
    "image": "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    "id": 15,
    "name": "Christopher Garcia",
    "designation": "Database Administrator",
    "company": "DataWorks",
    "experience": "7 Years",
    "skills": ["MySQL", "Oracle", "Database Security"],
    "story": "Maintains secure and optimized database systems.",
    "image": "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    "id": 16,
    "name": "Charlotte Robinson",
    "designation": "Business Analyst",
    "company": "InsightCorp",
    "experience": "5 Years",
    "skills": ["Requirement Analysis", "SQL", "Documentation"],
    "story": "Bridges business goals with technical solutions.",
    "image": "https://randomuser.me/api/portraits/women/16.jpg"
  },
  {
    "id": 17,
    "name": "Matthew Clark",
    "designation": "System Administrator",
    "company": "NetSecure",
    "experience": "6 Years",
    "skills": ["Linux", "Windows Server", "Networking"],
    "story": "Keeps enterprise systems running efficiently.",
    "image": "https://randomuser.me/api/portraits/men/17.jpg"
  },
  {
    "id": 18,
    "name": "Amelia Lewis",
    "designation": "Content Strategist",
    "company": "MediaPulse",
    "experience": "4 Years",
    "skills": ["SEO", "Content Writing", "Marketing"],
    "story": "Creates engaging digital content for online growth.",
    "image": "https://randomuser.me/api/portraits/women/18.jpg"
  },
  {
    "id": 19,
    "name": "Benjamin Walker",
    "designation": "Machine Learning Engineer",
    "company": "AI Labs",
    "experience": "5 Years",
    "skills": ["PyTorch", "NLP", "Deep Learning"],
    "story": "Builds predictive AI systems and recommendation engines.",
    "image": "https://randomuser.me/api/portraits/men/19.jpg"
  },
  {
    "id": 20,
    "name": "Harper Hall",
    "designation": "Frontend Engineer",
    "company": "BrightCode",
    "experience": "2 Years",
    "skills": ["Vue.js", "CSS", "JavaScript"],
    "story": "Focused on creating fast and interactive user interfaces.",
    "image": "https://randomuser.me/api/portraits/women/20.jpg"
  },
  {
    "id": 21,
    "name": "Ethan Allen",
    "designation": "Software Architect",
    "company": "FutureStack",
    "experience": "10 Years",
    "skills": ["Microservices", "Java", "System Design"],
    "story": "Designs enterprise-grade scalable software solutions.",
    "image": "https://randomuser.me/api/portraits/men/21.jpg"
  },
  {
    "id": 22,
    "name": "Evelyn Young",
    "designation": "Digital Marketer",
    "company": "AdBoost",
    "experience": "3 Years",
    "skills": ["Facebook Ads", "Google Ads", "Analytics"],
    "story": "Helps brands grow through digital marketing campaigns.",
    "image": "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    "id": 23,
    "name": "Alexander King",
    "designation": "Blockchain Developer",
    "company": "CryptoWave",
    "experience": "4 Years",
    "skills": ["Solidity", "Web3", "Ethereum"],
    "story": "Develops decentralized blockchain applications.",
    "image": "https://randomuser.me/api/portraits/men/23.jpg"
  },
  {
    "id": 24,
    "name": "Abigail Scott",
    "designation": "Technical Writer",
    "company": "DocuTech",
    "experience": "5 Years",
    "skills": ["Documentation", "API Docs", "Markdown"],
    "story": "Simplifies technical concepts into easy guides.",
    "image": "https://randomuser.me/api/portraits/women/24.jpg"
  },
  {
    "id": 25,
    "name": "Henry Green",
    "designation": "Network Engineer",
    "company": "LinkNet",
    "experience": "6 Years",
    "skills": ["Cisco", "Routing", "Firewall"],
    "story": "Designs and maintains secure network infrastructures.",
    "image": "https://randomuser.me/api/portraits/men/25.jpg"
  },
  {
    "id": 26,
    "name": "Ella Adams",
    "designation": "HR Manager",
    "company": "PeopleFirst",
    "experience": "7 Years",
    "skills": ["Recruitment", "Communication", "Management"],
    "story": "Builds strong company culture and hiring processes.",
    "image": "https://randomuser.me/api/portraits/women/26.jpg"
  },
  {
    "id": 27,
    "name": "Sebastian Baker",
    "designation": "Game Developer",
    "company": "GameVerse",
    "experience": "5 Years",
    "skills": ["Unity", "C#", "Game Design"],
    "story": "Creates immersive gaming experiences for players.",
    "image": "https://randomuser.me/api/portraits/men/27.jpg"
  },
  {
    "id": 28,
    "name": "Scarlett Nelson",
    "designation": "SEO Specialist",
    "company": "SearchMax",
    "experience": "3 Years",
    "skills": ["SEO", "Keyword Research", "Content Strategy"],
    "story": "Improves website visibility on search engines.",
    "image": "https://randomuser.me/api/portraits/women/28.jpg"
  },
  {
    "id": 29,
    "name": "Jack Carter",
    "designation": "IT Support Engineer",
    "company": "HelpDesk Pro",
    "experience": "2 Years",
    "skills": ["Troubleshooting", "Hardware", "Networking"],
    "story": "Provides technical support and solves IT issues.",
    "image": "https://randomuser.me/api/portraits/men/29.jpg"
  },
  {
    "id": 30,
    "name": "Grace Mitchell",
    "designation": "Product Manager",
    "company": "LaunchPad",
    "experience": "8 Years",
    "skills": ["Product Strategy", "Leadership", "Analytics"],
    "story": "Leads product development from idea to launch.",
    "image": "https://randomuser.me/api/portraits/women/30.jpg"
  }
]
  return (
    <div >
      <Title>📖 Stories</Title> 
     <div className='grid grid-cols-3 gap-5 mt-20'>
         {
        devStories.map((story) => (
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

export default Stories
