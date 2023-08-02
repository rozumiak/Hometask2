//style
import "./style.css";

export const StatusTable: React.FC = () => {
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
                        <td className="js--count-active-idea"></td>
                        <td className="js--count-archive-idea"></td>
                    </tr>
                    <tr>
                        <td>Task</td>
                        <td className="js--count-active-task"></td>
                        <td className="js--count-archive-task"></td>
                    </tr>
                    <tr>
                        <td>Random thought</td>
                        <td className="js--count-active-thought"></td>
                        <td className="js--count-archive-thought"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
