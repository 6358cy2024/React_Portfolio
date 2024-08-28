function WorkItem(props) {
  const imageObj = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .4)), url(${props.data.image})`
  }
// each box directs you to a new tab where you can check out the github repo. Easy for navigation!
  return (
    <>
      <a href={props.data.github} target="_blank">
        <article className="work-item" style={imageObj}>
          <h4 className="text-center">{props.data.title}</h4>
          <p>{props.data.description}</p>
          <p className="technologies">{props.data.technologies}</p>
        </article>
      </a>
    </>
  )
}

export default WorkItem