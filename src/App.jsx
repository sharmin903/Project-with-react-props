import React from 'react'
import Card from './components/card.jsx'

const App = () => {
  const jobs = [
    {
      company: "Amazon",
      logoUrl: "public/img/amazon.jpg",
      jobTitle: "Senior UI/UX Designer",
      jobType: ["Part-Time", "Senior Level"],
      payment: "$120/hr",
      location: "Mumbai, India",
      postedAgo: "5 days ago",
      saved: false,
    },
    {
      company: "Google",
      logoUrl: "public/img/google.jpg",
      jobTitle: "Graphic Designer",
      jobType: ["Part-Time", "Flexible Schedule"],
      payment: "$150–220k",
      location: "Kochi, India",
      postedAgo: "30 days ago",
      saved: true,
    },
    {
      company: "Dribbble",
      logoUrl: "public/img/dribbble.jpg",
      jobTitle: "Senior Motion Designer",
      jobType: ["Contract", "Remote"],
      payment: "$85/hr",
      location: "Chennai, India",
      postedAgo: "18 days ago",
      saved: false,
    },
    {
      company: "Figma",
      logoUrl: "public/img/figma.jpg",
      jobTitle: "UX Designer",
      jobType: ["Full-Time", "In Office"],
      payment: "$200–250k",
      location: "Bangalore, India",
      postedAgo: "5 days ago",
      saved: true,
    },
    {
      company: "Airbnb",
      logoUrl: "public/img/airbnb.jpg",
      jobTitle: "Junior UI/UX Designer",
      jobType: ["Contract", "Remote"],
      payment: "$100/hr",
      location: "Delhi, India",
      postedAgo: "5 days ago",
      saved: false,
    },
    {
      company: "Apple",
      logoUrl: "public/img/apple.jpg",
      jobTitle: "Graphic Designer",
      jobType: ["Full-Time", "Flexible Schedule"],
      payment: "$85–120k",
      location: "Kerala, India",
      postedAgo: "5 days ago",
      saved: true,
    },
  ];
  console.log(jobs)
  return (
    <>
      <div className="parents">
        {jobs.map(function (elem) {
          return <Card
            key={elem.company}
            company={elem.company}
            logoUrl={elem.logoUrl}
            jobTitle={elem.jobTitle}
            jobType={elem.jobType}
            payment={elem.payment}
            location={elem.location}
            postedAgo={elem.postedAgo}
            saved={elem.saved}
          />

        })}
      </div>
    </>
  )
}

export default App