import { useState } from "react";

function Form() {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`user name is ${name}`);
        setName("")
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full h-screen flex justify-center items-center flex-col"
        >
            <label htmlFor="From">Input:</label>
            <input
                className="p-2 bg-gray-500"
                type="text"
                htmlFor="From"
                placeholder="Type you'r name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <button
                className="p-3 
              bg-red-600 
                rounded-xl"
                type="submit"
            >
                Submit
            </button>
        </form>
    );
}

export default Form;
