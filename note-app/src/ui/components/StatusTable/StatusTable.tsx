//style
import "./style.css";
//core
import { useSelector } from "react-redux";
import {
    selectActiveItemsByCategory,
    selectArchivedItemsByCategory,
} from "../../../engine/core/notes/notesSlice";

export const StatusTable: React.FC = () => {
    const activeIdeaCount = useSelector(selectActiveItemsByCategory("Idea"));
    const archivedIdeaCount = useSelector(
        selectArchivedItemsByCategory("Idea")
    );
    const activeTaskCount = useSelector(selectActiveItemsByCategory("Task"));
    const archivedTaskCount = useSelector(
        selectArchivedItemsByCategory("Task")
    );
    const activeThoughtCount = useSelector(
        selectActiveItemsByCategory("Random thought")
    );
    const archivedThoughtCount = useSelector(
        selectArchivedItemsByCategory("Random thought")
    );
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Note Category</th>
                        <th>Active</th>
                        <th>Archived</th>
                    </tr>
                </thead>
                <tbody className="js--status-table-body">
                    <tr>
                        <td>Idea</td>
                        <td className="js--count-active-idea">
                            {activeIdeaCount}
                        </td>
                        <td className="js--count-archive-idea">
                            {archivedIdeaCount}
                        </td>
                    </tr>
                    <tr>
                        <td>Task</td>
                        <td className="js--count-active-task">
                            {activeTaskCount}
                        </td>
                        <td className="js--count-archive-task">
                            {archivedTaskCount}
                        </td>
                    </tr>
                    <tr>
                        <td>Random thought</td>
                        <td className="js--count-active-thought">
                            {activeThoughtCount}
                        </td>
                        <td className="js--count-archive-thought">
                            {archivedThoughtCount}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
