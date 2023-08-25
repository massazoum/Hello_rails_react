import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { receiveMessage } from '../redux/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.greeting);
  useEffect(() => {
    dispatch(receiveMessage());
  }, [dispatch]);

  return (
    <div>
      <h1>{message.greeting}</h1>
      <button type="button" onClick={() => dispatch(receiveMessage())}>
        Greeting Message
      </button>
    </div>
  );
};

export default Greeting;
