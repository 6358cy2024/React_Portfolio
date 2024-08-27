import WorkItem from '../components/WorkItem'

const apps = [
  {
    title: 'Employee Tracker',
    description: 'This uses SQL to create a terminal program that allows you to look/update/delete entries from a table of employees.',
    image: '/images/portfolio_ss.png',
    technologies: 'SQL | JS | pgAdmin4 '
  },
  {
    title: 'Tech Blog',
    description: 'A full stack blog application with authentication.',
    image: '/images/portfolio_ss.png',
    technologies: 'HTML | CSS | JS | DayJS | Express | Postgres | Sequelize | Sessions'
  },
  {
    title: 'Recipe Project App',
    description: 'An application that allows users to store their favorite recipes.',
    image: '/images/portfolio_ss.png',
    technologies: 'HTML | CSS | JS | DayJS | Express | MongoDB | Mongoose | JWT'
  }
]

function Home() {
  // Loop over the apps array and convert each object into a <WorkItem /> component tag
  const workItems = apps.map((workItemObj, index) => {
    return <WorkItem key={index} data={workItemObj} />
  })

  return (
    <>
      <section className="home-hero column align-center">
        <img src="/images/Christian.jpg" alt="Me" />

        <h1 className="text-center">Dev, Designer, Computer Engineer BS</h1>
      </section>

      <section className="work">
        {workItems}
      </section>
    </>
  )
}

export default Home