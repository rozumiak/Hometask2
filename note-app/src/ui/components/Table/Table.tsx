// interface TableProps {
//     data: string
// }
//export const Table: React.FC<TableProps> = ({data}) => {
import "./style.css";
import archiveIcon from "../../icons/archive.png";
import deleteIcon from "../../icons/delete.png";
import editIcon from "../../icons/edit.png";
import { ArchiveTable } from "../ArchiveTable";
import { StatusTable } from "../StatusTable";
import { Modal } from "../Modal";
import { useState, useEffect } from "react";

export const Table: React.FC = () => {
    const [notes, setNotes] = useState([
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
    ]);
    return (
        <div className="container">
            <h1>Note Taking App</h1>
            <form action="#" className="js--form">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Created</th>
                            <th>Category</th>
                            <th>Content</th>
                            <th>Dates</th>
                            <th>
                                <img
                                    className="js--archive-all"
                                    src={archiveIcon}
                                    alt="ArchiveAll"
                                />
                                <img
                                    className="js--delete-all"
                                    src={deleteIcon}
                                    alt="DeleteAll"
                                />
                            </th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <button type="submit">Create Note</button>
                <Modal />
            </form>
            <ArchiveTable />
            <StatusTable />
        </div>
    );
};
