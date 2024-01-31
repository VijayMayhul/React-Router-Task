import Card from "./Card";


function FullStackDev() {
  let fsdContent = [
    {
      id: 1,
      title:
        "Web Components: A Deep Dive into Reusable and Custom Elements [2024]",
      description:
        "As a full-stack developer, have you ever got bored of using the same HTML, CSS,",
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-6.webp",
      date: '22 January 2024',
      comment : 'No Comments'
    },
    {
      id: 2,
      title: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      description:
        "When you’re hiring a full-stack developer, what are the most important things you look for?",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      date: '15 November 2023',
      comment : 'No Comments'
    },
    {
      id: 3,
      title: "Top Differences: Full Stack Developer vs Software Engineer 2024",
      description:
        "A Full Stack Developer is a tech all-rounder. They work on both the front and",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
      date: '15 November 2023',
      comment : 'No Comments'
    },
    {
      id: 4,
      title:
        "Horizontal vs Vertical Scaling for Efficient System Design",
      description:
        "In the world of system design, envision a digital skyscraper – a multifaceted structure built",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
      date: '10 November 2023',
      comment : 'No Comments'
    },
    {
      id: 5,
      title:
        "Best Books to Learn Full-Stack Development",
      description:
        "Are you interested in becoming a full-stack developer but not sure where to start? In",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
      date: '9 November 2023',
      comment : 'No Comments'
    },
    {
      id: 6,
      title:
        "Top 10 Product-Based Companies for Full-Stack Developers [2024]",
      description:
        "In the dynamic landscape of technology, full-stack developers are the architects of the digital world,",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
      date: '8 November 2023',
      comment : 'No Comments'
    },
    {
      id: 7,
      title: "7 Best Full-Stack Development Online Courses [2024]",
      description:
        "Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      date: '31 August 2023',
      comment : 'No Comments'
    },
    {
      id: 8,
      title:
        "Top Full Stack Development Webinars and Workshops",
      description:
        "Are you keen to elevate your web development skills and master the art of Full",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-Full-Stack-Development-Webinars-and-Workshops.jpg",
      date: '29 July 2023',
      comment : 'No Comments'
    },
    {
      id: 9,
      title: "The Future & Scope of Full-Stack Developers in India",
      description:
        "Have you ever wondered about the future of full stack developers in India? These talented",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/24746653_7002417-1-1536x1024.jpg",
      date: '27 July 2023',
      comment : 'No Comments'
    },
    {
      id: 10,
      title: "Best Ways to Learn Full Stack Development in 2024",
      description:
        "Full stack development is and will be a promising and in-demand career in the upcoming",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-1536x804.webp",
      date: '4 August 2023',
      comment : 'No Comments'
    },
    {
      id: 11,
      title: "How Long Would It Take to Be a Full Stack Developer?",
      description:
        "Have you ever wondered how much time it would take to become a skilled Full",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp",
      date: '4 August 2023',
      comment : 'No Comments'
    },
    {
      id: 12,
      title: "Top 10 Full-Stack Developer Frameworks in 2024",
      description:
        "In the ever-evolving world of technology, the demand for full stack developers is at an",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person.jpg",
      date: '27 July 2023',
      comment : 'No Comments'
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row py-5 d-flex justify-content-center">
          {fsdContent.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
        </div>
      </div>
    </>
  )
}

export default FullStackDev