import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteItem } from "../../assets/types";
const initialState = {
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
};

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<NoteItem>) => {
            state.items.push(action.payload);
        },
        deleteItem: (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
            state.items = state.items.filter((item) => item.id !== itemId);
        },
        deleteAllItems: (state) => {
            state.items = [];
        }
    },
});
//action
export const { addItem, deleteItem, deleteAllItems } = notesSlice.actions;
//reducer
export default notesSlice.reducer;
