//core
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../init/store";
//assets
import { NoteItem } from "../../assets/types";

interface State {
    items: NoteItem[];
    archivedItems: NoteItem[];
}
const initialState: State = {
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
    archivedItems: [],
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
        },
        updateItem: (state, action: PayloadAction<NoteItem>) => {
            const updatedItem = action.payload;
            const itemIndex = state.items.findIndex(
                (item) => item.id === updatedItem.id
            );
            if (itemIndex !== -1) {
                state.items[itemIndex] = updatedItem;
            }
        },
        archiveItem: (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
            const itemIndex = state.items.findIndex(
                (item) => item.id === itemId
            );
            if (itemIndex !== -1) {
                state.items[itemIndex].isArchived = true;
                state.archivedItems.push(state.items[itemIndex]);
                state.items.splice(itemIndex, 1); // Видаляємо елемент з основного списку
            }
        },
        archiveAllItems: (state) => {
            state.items.forEach((item) => {
                item.isArchived = true;
                state.archivedItems.push(item);
            });
            state.items = [];
        },

        unarchiveItem: (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
            const itemIndex = state.archivedItems.findIndex(
                (item) => item.id === itemId
            );
            if (itemIndex !== -1) {
                state.archivedItems[itemIndex].isArchived = false;
                state.items.push(state.archivedItems[itemIndex]);
                state.archivedItems.splice(itemIndex, 1); // Видаляємо елемент зі списку архівованих елементів
            }
        },
        unarchiveAllItems: (state) => {
            state.archivedItems.forEach((item) => {
                item.isArchived = false;
                state.items.push(item);
            });
            state.archivedItems = [];
        },
    },
});
//action
export const {
    addItem,
    deleteItem,
    deleteAllItems,
    updateItem,
    archiveItem,
    unarchiveItem,
    archiveAllItems,
    unarchiveAllItems,
} = notesSlice.actions;
//reducer
export default notesSlice.reducer;

export const selectActiveItemsByCategory =
    (category: string) => (state: RootState) => {
        return state.notes.items.filter(
            (item) => item.category === category && !item.isArchived
        ).length;
    };

export const selectArchivedItemsByCategory =
    (category: string) => (state: RootState) => {
        return state.notes.archivedItems.filter(
            (item) => item.category === category
        ).length;
    };
