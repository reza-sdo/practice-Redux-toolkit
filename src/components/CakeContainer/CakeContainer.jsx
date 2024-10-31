import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../../features/cake/cakeSlice';

const CakeContainer = () => {
  const [cakeCount, setCakeCount] = useState(1);

  const dispatch = useDispatch();
  const cakeCountState = useSelector((state) => state.cake.numOfCake);

  const countChangeHandler = (e) => {
    setCakeCount(e.target.value);
  };

  const buyHandler = () => {
    dispatch(buyCake(cakeCount));
    setCakeCount(1);
  };
  return (
    <div>
      <h2>number of Cake is:{cakeCountState}</h2>
      <input
        value={cakeCount}
        onChange={(e) => countChangeHandler(e)}
        type="number"
      />
      <button onClick={buyHandler}>buy</button>
    </div>
  );
};

export default CakeContainer;
