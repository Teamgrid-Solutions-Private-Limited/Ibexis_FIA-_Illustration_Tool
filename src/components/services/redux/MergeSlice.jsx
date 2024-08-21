import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API, request_meta, headers } from '../API';

const initialState = {
  pdf: [],
  status: 'idle',
  error: null,
  pdfList: [],
};

export const mergePdf = createAsyncThunk('mergePdf', async (request_data) => {
  try {
    const { data } = await axios.post(API, { request_data, request_meta }, { headers });
   
    return data.response_data.outputs;
  } catch (err) {
    return Promise.reject(err.message);
  }
});

const mergeSlice = createSlice({
  name: 'mergePdf',
  initialState,
  reducers: {
    setPdfList: (state, action) => {
      state.pdfList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(mergePdf.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(mergePdf.fulfilled, (state, action) => {
        state.status = 'idle';
        state.pdf = action.payload;
      })
      .addCase(mergePdf.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload;
      });
  },
});

export const { setPdfList } = mergeSlice.actions;

export default mergeSlice.reducer;
