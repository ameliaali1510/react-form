import { useState } from "react";
import './Form.css';

const Form = () => {
    const [persons, setPersons] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [ageInput, setAgeInput] = useState('');
    const [error, setError] = useState('');

    const handleDelete = (index) => {
        const updatedPersons = persons.filter((_, i) => i !== index);
        setPersons(updatedPersons);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!userInput.trim() || !ageInput.trim()) {
            setError("Both fields are required.");
            return;
        }
        if (isNaN(ageInput) || parseInt(ageInput) <= 0) {
            setError("Age must be a valid positive number.");
            return;
        }

        setPersons([...persons, { name: userInput.trim(), age: parseInt(ageInput) }]);
        setUserInput("");
        setAgeInput("");
        setError("");
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Add a Person</h2>
                {error && <p className="error">{error}</p>}

                <div className="input-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Age:</label>
                    <input
                        type="number"
                        placeholder="30"
                        value={ageInput}
                        onChange={(e) => setAgeInput(e.target.value)}
                    />
                </div>

                <button type="submit">Add Person</button>
            </form>

            <div className="person-list">
                {persons.length === 0 ? (
                    <p>No persons added yet.</p>
                ) : (
                    persons.map((person, index) => (
                        <div key={index} className="person-card">
                            <p><strong>Name:</strong> {person.name}</p>
                            <p><strong>Age:</strong> {person.age}</p>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Form;
