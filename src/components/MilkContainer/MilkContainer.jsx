import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyMilk } from '../../features/milk/milkSlice';

const MilkContainer = () => {
  const [milkCount, setMilkCount] = useState(1);

  const dispatch = useDispatch();
  const milkCountState = useSelector((state) => state.milk.numOfMilk);

  const countChangeHandler = (e) => {
    setMilkCount(e.target.value);
  };

  const buyHandler = () => {
    dispatch(buyMilk(milkCount));
    setMilkCount(1);
  };
  return (
    <div>
      <h2>number of milk : {milkCountState}</h2>
      <input
        value={milkCount}
        onChange={(e) => countChangeHandler(e)}
        type="number"
      />
      <button onClick={buyHandler}>buy</button>
    </div>
  );
};

export default MilkContainer;
