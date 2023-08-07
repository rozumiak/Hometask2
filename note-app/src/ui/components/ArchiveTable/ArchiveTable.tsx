//Img icon
import archiveIcon from "../../icons/archive.png";
//core
import {
    unarchiveItem,
    unarchiveAllItems,
} from "../../../engine/core/notes/notesSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../engine/init/store";
//assets
import { NoteItem } from "../../../engine/assets/types";
//utils
import { parseDate } from "../../../engine/utils/parseDate";

export const ArchiveTable: React.FC = () => {
    const archivedItems = useSelector(
        (state: RootState) => state.notes.archivedItems
    ) as NoteItem[];
    const dispatch = useDispatch();

    const handleUnarchiveItem = (itemId: number) => {
        dispatch(unarchiveItem(itemId));
    };
    const handleUnarchiveAllItems = () => {
        dispatch(unarchiveAllItems());
    };

    return (
        <div>
            <table className="table-archive">
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
                                onClick={handleUnarchiveAllItems}
                            />
                        </th>
                    </tr>
                </thead>
                <tbody className="js--tbody-archive">
                    {archivedItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.created}</td>
                            <td>{item.category}</td>
                            <td>{item.content}</td>
                            <td>{parseDate(item.content)}</td>
                            <td>
                                <img
                                    className="js--archive"
                                    src={archiveIcon}
                                    alt="Unarchive"
                                    onClick={() => handleUnarchiveItem(item.id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
