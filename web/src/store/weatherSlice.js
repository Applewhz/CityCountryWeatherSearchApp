import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentWeather } from "../../../shared/api/weather";
import { formatWeatherResponse } from "../../../shared/util/formatWeatherResponse";

export const fetchWeather = createAsyncThunk(
   "weather/fetchWeather",
   async ({ cityCountryName }, { rejectWithValue }) => {
      try {
         const response = await getCurrentWeather(cityCountryName);
         return formatWeatherResponse(response);
      } catch (err) {
         return rejectWithValue(err.message);
      }
   },
);

const weatherSlice = createSlice({
   name: "weather",
   initialState: {
      data: null,
      status: "idle", // idle | loading | succeeded | failed
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchWeather.pending, (state) => {
            state.status = "loading";
            state.error = null;
         })
         .addCase(fetchWeather.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.data = action.payload;
         })
         .addCase(fetchWeather.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload || action.error.message;
         });
   },
});
export const selectWeatherData = (state) => state.weather.data;
export const selectWeatherStatus = (state) => state.weather.status;
export const selectWeatherError = (state) => state.weather.error;
export default weatherSlice.reducer;
