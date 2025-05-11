const Header = ({ course }) => <h1>{course}</h1>

// const Part = ({ name, exercises}) => (
//       <p>{name} {exercises}</p>
// )

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
)

const Content = ({ parts }) => (
  <div>
    <Part name={parts[0].name} exercises={parts[0].exercises}/>
    <Part name={parts[1].name} exercises={parts[1].exercises}/>
    <Part name={parts[2].name} exercises={parts[2].exercises}/>
  </div>
)

// const Content = ({ part1, part2, part3 }) => (
//   <div>
//     <Part name={part1.name} exercises={part1.exercises}/>
//     <Part name={part2.name} exercises={part2.exercises}/>
//     <Part name={part3.name} exercises={part3.exercises}/>
//   </div>
// )

const Total = ({ parts }) => (
  <p>
    Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
  </p>
)

// const Total = ({ part1, part2, part3 }) => (
//   <p>
//     Number of exercises {part1.exercises + part2.exercises + part3.exercises}
//   </p>
// )

const App = () => {
  // const course = 'Half Stack application development'
  // const parts = [
  //   {
  //     name: 'Fundamentals of React',
  //     exercises: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14
  //   }
  // ]

  // const course = 'Half Stack application development'
  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }

  // const parts = [{part1}, {part2}, {part3}]
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
  
}

export default App