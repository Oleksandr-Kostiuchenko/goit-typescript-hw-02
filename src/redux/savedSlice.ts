//* TS
import { ImageDataType } from "../App.types";
type InitStateType = {
  savedImages: ImageDataType[];
};

//* Slice
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
const initialState: InitStateType = {
  savedImages: [],
};

const slice = createSlice({
  name: "savedImages",
  initialState,
  reducers: {
    toggleImage: (state, action: PayloadAction<ImageDataType>) => {
      let isInSaved: boolean = false;

      state.savedImages.forEach((el) => {
        if (el.id === action.payload.id) {
          isInSaved = true;
        }
      });

      if (!isInSaved) {
        state.savedImages.push(action.payload);
      } else {
        state.savedImages = state.savedImages.filter(
          (el) => el.id !== action.payload.id
        );
      }
    },
  },
});

export const { toggleImage } = slice.actions;
export default slice.reducer;

//* Selectors
export const selectSavedImages = (state: RootState) =>
  state.savedImages.savedImages;
