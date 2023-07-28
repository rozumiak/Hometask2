import archiveIcon from "../../icons/archive.png";
export const ArchiveTable: React.FC = () => {
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
                            />
                        </th>
                    </tr>
                </thead>
                <tbody className="js--tbody-archive">
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
