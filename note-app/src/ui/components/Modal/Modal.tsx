//style
import "./style.css";
//Core
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../engine/core/notes/notesSlice";
//Assets
import { NoteItem } from "../../../engine/assets/types";

interface ModalProps {
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = (props) => {
    const { onClose } = props;
    const initialFormData: NoteItem = {
        id: Date.now(),
        name: "",
        created: new Date().toJSON().slice(0, 10),
        category: "Task",
        content: "",
        dates: "",
        isArchived: false,
    };
    const [formData, setFormData] = useState<NoteItem>(initialFormData);

    const dispatch = useDispatch();

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { id, value } = e.target;
        console.log(e.target.id);
        console.log(e.target.value);

        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // Перевіряємо, чи подія спрацювала саме на елементі накладення (темному фоні)
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newItem = {
            id: Date.now(),
            name: formData.name,
            created: formData.created,
            category: formData.category,
            content: formData.content,
            dates: "",
            isArchived: false,
        };
        dispatch(addItem(newItem));
        setFormData(initialFormData); // Очищення форми після збереження
        onClose();
    };

    return (
        <div className="modal" onClick={handleOverlayClick}>
            <div className="modal-content">
                <h2>Add note</h2>
                <form className="modal-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        required
                        defaultValue={formData.name}
                        onChange={handleChange}
                    />

                    <select
                        name="category"
                        id="category"
                        defaultValue={formData.category}
                        onChange={handleChange}
                    >
                        <option value="Idea">Idea</option>
                        <option value="Task">Task</option>
                        <option value="Random thought">Random thought</option>
                    </select>

                    <label htmlFor="content">Content:</label>
                    <textarea
                        defaultValue={formData.content}
                        onChange={handleChange}
                        id="content"
                        required
                        cols={20}
                        rows={10}
                    ></textarea>

                    <button type="submit">Add/Edit</button>
                </form>
            </div>
        </div>
    );
};
