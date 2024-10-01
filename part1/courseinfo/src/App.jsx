const Header = ({course}) =>{
  return (
      <h1>{course}</h1>
    )
}

const Content = ({parts}) =>{
  const Part = ({part}) => (<p>{part.title} {part.exercises}</p>)
  return (
    <>
      <Part part={parts[0]}/>
      <Part part={parts[1]}/>
      <Part part={parts[2]}/>
    </>
  )
}

const Total = ({parts}) =>{
  let sum = 0
  parts.forEach(element => sum += element.exercises);
  return (
    <p>Number of exercises {sum}</p>
  )
}

const App = () => {
  const course = {
    course: 'Half Stack application development',
    parts: [
      {
        title: 'Fundamentals of React',
        exercises: 10
      },
      {
        title: 'Using props to pass data',
        exercises: 7
      },
      {
        title: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
      <div>
        <Header course={course.course}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
  )
}

export default App
