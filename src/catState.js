// <2
import { createSlice } from "@reduxjs/toolkit";

export const catSlice = createSlice({
  name: "cats",
  initialState: {
    cats: [],
    isLoading: false
  },
  reducers: {
    getCatsFetch: (state) => {
      state.isLoading = true;
    },
    getCatsSuccess: (state, action) => {
      state.cats = action.payload;
      state.isLoading = false;
    },
    getCatsFailure: (state) => {
      // aca se manejaria el error
      state.isLoading = false;
    }
  }
});

export const { getCatsFetch, getCatsSuccess , getCatsFailure }  = catSlice.actions; // OJO CON EXPORTAR NOMBRES REPETIDOS
// export const {getCatsSuccess, getCatsSuccess, getCatsFailure} = catState.actions; // Cometio un error aca y lo corrigio luego

export default catSlice.reducer; // ojo es reducer y NO reducers
// <2
