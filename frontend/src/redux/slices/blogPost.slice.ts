import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Item {
  id: number;
  name: string;
}

export const fetchData = createAsyncThunk<Item[], number>('data/fetchData', async (page) => {
  const response = await fetch(`/post/getAllPost?page=${1}&perPage=${5}`);
  const data: Item[] = await response.json();
  console.log(data)
  return data;
});

const blogPostSlice = createSlice({
  name: 'BlogPostSlice',
  initialState: { data: [] as Item[], status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = [...state.data, ...action.payload];
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default blogPostSlice;
