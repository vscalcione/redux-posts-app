import React from 'react';
import { useDispatch } from 'react-redux';
import { ActionsTypes } from './redux/actions';
import { SearchAppBar } from './components/NavbarComponent';

export default function App() {
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <SearchAppBar />
      <div style={{ marginTop: 20 }}>
        <button
          onClick={() =>
            dispatch({ type: ActionsTypes.FETCH_POSTS_LIST_REQUEST })
          }
        >
          Dispatch Button
        </button>
      </div>
    </div>
  );
}
