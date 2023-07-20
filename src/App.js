import Expenses from "./components/Expenses";

function App(props) {

  return (
    <div>
      <h2>Let's get started!</h2>
      <div className='expenses'>
        <Expenses id={props.id} title={props.title} amount={props.amount} date={props.date}/>
      </div>
    </div>
  );
}

export default App;
