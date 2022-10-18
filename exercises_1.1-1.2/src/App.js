
const Hello = (prop) => {
  return (
    <div> My name is {prop.name} and I'm {prop.age} years old</div>
  )
}

//note: a component can be reused more than one time

const App = () => {

  const dateToday = new Date();

  const name = 'Jackson';
  const age = 26;

  return (
    <div>
      <h1>Greetings</h1>

      <p>Hello World the date today is {dateToday.toISOString()}</p>

      <Hello name= 'Peter' age={10 + 16}/>
      
      <Hello name= {name} age={age}/>

    </div>
  );

}

export default App;
