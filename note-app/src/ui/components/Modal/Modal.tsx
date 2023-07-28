export const Modal: React.FC = () => {
    return (
        <div>
            <div className="modal">
                <div className="modal-content">
                    <h2>Add note</h2>
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" required />

                        <select name="category" id="category">
                            <option value="Idea">Idea</option>
                            <option value="Task" selected>
                                Task
                            </option>
                            <option value="Random thought">
                                Random thought
                            </option>
                        </select>

                        <label htmlFor="content">Content:</label>
                        <textarea
                            id="content"
                            required
                            cols={20}
                            rows={10}
                        ></textarea>

                        <button type="submit">Add/Edit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
