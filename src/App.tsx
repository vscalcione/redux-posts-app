import React from 'react';
import { useDispatch } from 'react-redux';
import { ActionsTypes } from './redux/actions';

export default function App() {
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <button
        onClick={() =>
          dispatch({ type: ActionsTypes.FETCH_POSTS_LIST_REQUEST })
        }
      >
        Dispatch Button
      </button>
    </div>
  );
}
