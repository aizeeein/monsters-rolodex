import {useState} from "react";

const ChangeName = () => {
    const [name, setName] = useState("");
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(input)
    }

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <h1>Hello {name}</h1>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
            <input type='submit' />
        </div>
        </form>
    )
}

export default ChangeName;