import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : "app",
    initialState : {
        isMenuOpen : true
    },
    reducers : {
        toggleSideBar : (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        closeSideBar : (state) => {
            state.isMenuOpen = false
        }
    }
})
export const {toggleSideBar, closeSideBar} = appSlice.actions;
export default appSlice.reducer;
