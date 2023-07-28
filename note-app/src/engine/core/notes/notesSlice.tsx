import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name: "notes",
    initialState: {
        items: [
            {
                id: Date.now() + 1,
                name: "Shopping list",
                created: "20-03-2021",
                category: "Task",
                content: "Tomatoes,bread",
                dates: "",
                isArchived: false,
            },
            {
                id: Date.now() + 2,
                name: "The theory",
                created: "27-03-2021",
                category: "Random thought",
                content: "Evolution",
                dates: "",
                isArchived: false,
            },
            {
                id: Date.now() + 3,
                name: "New Feature",
                created: "05-05-2021",
                category: "Idea",
                content: "Implement new feature on the 07.05.2021",
                dates: "07.05.2021",
                isArchived: false,
            },
            {
                id: Date.now() + 4,
                name: "William Gaddis",
                created: "07-03-2021",
                category: "Idea",
                content: "You shell not pass",
                dates: "",
                isArchived: false,
            },
            {
                id: Date.now() + 5,
                name: "Books",
                created: "15-05-2021",
                category: "Task",
                content: "Learn new language",
                dates: "",
                isArchived: false,
            },
            {
                id: Date.now() + 6,
                name: "Go in bar",
                created: "20-07-2021",
                category: "Random thought",
                content: "Drink",
                dates: "",
                isArchived: false,
            },
            {
                id: Date.now() + 7,
                name: "Take a shower",
                created: "21-02-2021",
                category: "Random thought",
                content: "Oh, yeah",
                dates: "",
                isArchived: false,
            },
        ],
    },
    reducers: {
        // add: (state) => {
        //     state.items =;
        // },
        // delete: (state) => {
        //     state.items =;
        // },
    },
});
//selectors
//export const value = state => state.notes.items;
//action
//export const {add, delete} = notesSlice.actions;
//reducer
export default notesSlice.reducer;
