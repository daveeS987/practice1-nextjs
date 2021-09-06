import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

/*
export const postApiData = createAsyncThunk(
  'example/postApiData',
  async (payload, thunkAPI) => {
    // use information from payload to make api Call
    await axios.post('/api url address goes here', {
      // request configs goes here //
    });
    thunkAPI.dispatch(getApiData());
  }
);

export const deleteApiData = createAsyncThunk(
  'example/deleteApiData',
  async (payload, thunkAPI) => {
    // use information from payload to make api Call
    await axios.delete('/api url address goes here', {
      // request configs goes here //
    });
    thunkAPI.dispatch(getApiData());
  }
);
*/

export const getApiData = createAsyncThunk(
  'example/getApiData',
  async (thunkAPI) => {
    const result = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return result.data.slice(0, 9);
  }
);

const initialState = {
  entities: {},
  sum: 0,
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    simpleIncrement(state, action) {
      state.sum += action.payload;
    },
    simpleDecrement(state, action) {
      state.sum -= action.payload;
    },
  },
  extraReducers: {
    [getApiData.fulfilled]: (state, action) => {
      console.log('line 60: ', action.payload);
      state.entities = action.payload.reduce((acc, cur) => {
        acc[cur.id] = cur;
        return acc;
      }, {});
    },
    // [postApiData.fulfilled]: (state, action) => {
    //   console.log('postApiData.fulfilled');
    //   // if you got here, the thunk was succesfull
    // },
    // [deleteApiData.fulfilled]: (state, action) => {
    //   console.log('deleteApiData.fulfilled');
    // if you got here, the thunk was succesfull
    // },
  },
});

const { actions, reducer } = exampleSlice;
export const { simpleIncrement, simpleDecrement } = actions;
export default reducer;
