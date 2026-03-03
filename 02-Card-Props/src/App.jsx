
import Card from './components/Card'

const App = () => {
  const userCards = [
  {
    profileImage: "https://images.unsplash.com/photo-1771924310799-930349452c76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D",
    username: "john_doe",
    role: "Developer",
    bio: "Full-stack developer passionate about building scalable web applications."
  },
  {
    profileImage: "https://images.unsplash.com/photo-1771503735122-22405ba958f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
    username: "sarah_smith",
    role: "UI/UX Designer",
    bio: "Designer focused on creating intuitive and beautiful user experiences."
  },
  {
    profileImage: "https://images.unsplash.com/photo-1770701195265-8af0dc148446?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
    username: "mike_johnson",
    role: "Project Manager",
    bio: "Experienced project manager ensuring timely delivery and team collaboration."
  },
  {
    profileImage: "https://plus.unsplash.com/premium_photo-1768288662582-24c46f53d290?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
    username: "emily_clark",
    role: "Data Scientist",
    bio: "Data enthusiast who loves turning complex data into actionable insights."
  },
    {
    profileImage: "https://example.com/images/user5.jpg",
    username: "alex_turner",
    role: "Backend Developer",
    bio: "Specializes in building secure and high-performance APIs."
  },
  {
    profileImage: "https://example.com/images/user6.jpg",
    username: "nina_patel",
    role: "Frontend Developer",
    bio: "Loves crafting responsive and interactive web interfaces."
  },
  {
    profileImage: "https://example.com/images/user7.jpg",
    username: "david_lee",
    role: "DevOps Engineer",
    bio: "Automating infrastructure and optimizing CI/CD pipelines."
  },
  {
    profileImage: "https://example.com/images/user8.jpg",
    username: "olivia_wilson",
    role: "QA Engineer",
    bio: "Ensures product quality through detailed testing and automation."
  }
];
  return (
    <div className='parent'>
      {
        userCards.map((elem,idx)=>{
        return <div key={idx}>
          <Card userPfp={elem.profileImage} userName={elem.username} role={elem.role} bio={elem.bio}/>
        </div>
      })
      }
    </div>
  )
}

export default App