/*const App = () => {
  const now = new Date()
  const a = 10
  const b = 30

  console.log(now, a+b)
  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>{a} mas {b} es igual a {a+b}</p>
    </div>
  )
}*/

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, tu tienes {props.age} años</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>

      <Hello name={name} age={age}/>
      <Hello name='Pablo' age={10+26}/>  
      <Hello name='Dani' age={55}/>

    </div>
  )
}

export default App
