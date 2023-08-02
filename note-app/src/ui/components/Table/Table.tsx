//style
import "./style.css";
//img icon
import archiveIcon from "../../icons/archive.png";
import deleteIcon from "../../icons/delete.png";
import editIcon from "../../icons/edit.png";
//Core
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../engine/init/store";
import {
    deleteItem,
    deleteAllItems,
} from "../../../engine/core/notes/notesSlice";
//Components
import { ArchiveTable } from "../ArchiveTable";
import { StatusTable } from "../StatusTable";
import { Modal } from "../Modal";
//Utils
import { parseDate } from "../../../engine/utils/parseDate";

export const Table: React.FC = () => {
    const items = useSelector((state: RootState) => state.notes.items);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleDeleteItem = (itemId: number) => {
        dispatch(deleteItem(itemId));
    };
    const handleDeleteAllItems = () => {
        dispatch(deleteAllItems());
    };

    useEffect(() => {}, [items]);

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
                                    onClick={handleDeleteAllItems}
                                />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.created}</td>
                                <td>{item.category}</td>
                                <td>{item.content}</td>
                                <td>{parseDate(item.content)}</td>
                                <td>
                                    {!item.isArchived ? (
                                        <img
                                            className="js--edit"
                                            src={editIcon}
                                            alt="Edit"
                                        />
                                    ) : (
                                        ""
                                    )}
                                    <img
                                        className="js--archive"
                                        src={archiveIcon}
                                        alt="Archive"
                                    />
                                    {!item.isArchived ? (
                                        <img
                                            className="js--delete"
                                            src={deleteIcon}
                                            alt="Delete"
                                            onClick={() =>
                                                handleDeleteItem(item.id)
                                            }
                                        />
                                    ) : (
                                        ""
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="submit" onClick={handleOpenModal}>
                    Create Note
                </button>
            </form>
            {isModalOpen && <Modal onClose={handleCloseModal} />}
            <ArchiveTable />
            <StatusTable />
        </div>
    );
};
