
const Header = (props) => {
  console.log(props.course);
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}


const Part = (props) => {
  return (
    <div>
      <p> {props.part} {props.exercise}</p>
    </div>
  )
}


const Content = (props) => {
  console.log(props.part[0].name, props.part[0].exercises)
  return (
    <>
      <Part part = {props.part[0].name} exercise = {props.part[0].exercises} />
      <Part part = {props.part[1].name} exercise = {props.part[1].exercises}/>
      <Part part = {props.part[2].name} exercise = {props.part[2].exercises}/>
    </>
  )
}



const Total = (props) => {
  console.log(props.courseExercise[0].exercises, props.courseExercise[1].exercises, props.courseExercise[2].exercises);
  return (
    <div>
      <p>
        Number of exercises {props.courseExercise[0].exercises +  props.courseExercise[1].exercises + props.courseExercise[2].exercises}
      </p>
    </div>
  )
}

const App = () => {

const course = {
  name: 'Half Stack application development',
  parts :[
    {
      name:'Fundamentals of React',
      exercises: 10
    },
    {
      name:'Using props to pass data',
      exercises: 7
    },
    {
      name:'State of a component',
      exercises: 14
    }
  ]
}

  return (
    <div>
      <Header course = {course.name}/>
      <Content part = {course.parts} />
      <Total courseExercise = {course.parts} />
    </div>
  )
}

export default App