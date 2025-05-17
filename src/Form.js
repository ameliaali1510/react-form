import { useState } from "react"

const Form = () => {
    const [persons, setPersons] = useState([])
    const [userInput, setUserInput] = useState('')
    const [ageInput, setAgeInput] = useState('')

    const handleClick = (index) => {
        let storedPersons = [...persons]
        storedPersons.splice(index, 1)
        setPersons(storedPersons)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //  getting all previous values, adding a new object at the end
        setPersons([...persons, { name: userInput, age: parseInt(ageInput) }])
        setUserInput("")
        setAgeInput("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your name:
                    <input
                        type="text"
                        value={userInput}
                        onChange={(event) => setUserInput(event.target.value)}
                    />
                </label>
                <label>
                    Enter your age:
                    <input
                        type="text"
                        value={ageInput}
                        onChange={(event) => setAgeInput(event.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>
            <div>
                {persons.map((individual, index) => {
                    return (
                        <>
                            <h2>name: {individual.name}</h2>
                            <h2>age: {individual.age}</h2>
                            <button onClick={() => handleClick(index)}>delete</button>
                        </>
                    )
                })}
            </div>
        </div>
    )
}
export default Form