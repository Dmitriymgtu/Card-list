import { createAsyncThunk } from '@reduxjs/toolkit';

import { Range } from './slice';

export const getCredits = createAsyncThunk(
  'credits/getCredits',
  async (queryParams: string) => {
    const response = await fetch('http://localhost:3000/' + queryParams);
    const result = await response.json();
    return result;
  }
);

export const fetchNewCredits = createAsyncThunk(
  'credits/fetchNewCredits',
  async (range: Range<number>) => {
    const response = await fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(range),
    });
    const result = await response.json();
    return result;
  }
);

export const fetchCurrentCredit = createAsyncThunk(
  'credits/fetchCurrentCredit',
  async (alias: string) => {
    const response = await fetch('http://localhost:3000/programs/' + alias);
    const result = await response.json();
    return result;
  }
);
