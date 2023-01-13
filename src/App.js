import React from 'react'
import "./App.css";
import { useDispatch, useSelector } from 'react-redux';
import { counterAction } from './Store/counter-slice';

const App = () => {

  // it alternative to the useContext hooks in react / consumer from context API
  const countState = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
   console.log(countState);

  return (
    <>
      <div className="main-div">


        <div class="container">

          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div class="quantity">
            <button class="quantity__minus" title="Decrement" onClick={()=>{dispatch(counterAction.decrement(5))}}><span>-</span></button>
            <input name="quantity" type="text" class="quantity__input" value={countState} />
            <button class="quantity__plus" title="Increment" onClick={()=>dispatch(counterAction.increment(5))} ><span>+</span></button>
          </div>

        </div>

       
      
      </div>
    </>
  )
}

export default App
