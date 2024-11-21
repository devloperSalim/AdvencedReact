import axios from "axios"; // Importing Axios for making HTTP requests
import { useEffect, useState } from "react"; // Importing React hooks
import customAxios from "./axios/customAxios"; // Importing a custom Axios instance

export default function TodoList() {
    const url = 'https://jsonplaceholder.typicode.com/todos?start=0&_limit=6'; // API endpoint to fetch todos
    const [todos, setTodos] = useState([]); // State to store the list of todos

    // Function to fetch data using the Fetch API
    const fetchDataWhitFetchApi = async () => {
        const response = await fetch(url); // Making an HTTP GET request
        const data = await response.json(); // Parsing the JSON response
        setTodos(data); // Updating the state with the fetched data
        console.log(data); // Logging the data for debugging
    };

    
    // ---1 Function to fetch data using Axios
    // const fetchDataAxiosApi = async ()=>{
        // const data = await customAxios.get('/todos?start=0&_limit=6')
        // const users = await customAxios.get('/users?start=0&_limit=2')
        // setTodos(data.data, users.data)
        // console.log(data ,users)

    //     axios.all([
    //          customAxios.get('/todos?start=0&_limit=6'),
    //          customAxios.get('/users?start=0&_limit=2')
    //     ]).then(axios.spread((data,users)=>{

    //         setTodos(data.data)
    //         // console.log(data.data ,users.data)
    //     }))
    // }

    // ---2 Function to fetch data using Axios
    const fetchDataWithAxios = async () => {
        // Using axios.all for simultaneous API requests
        axios.all([
            customAxios.get('/todos'), // Fetching todos
        ]).then(
            // Using axios.spread to handle the responses
            axios.spread((data) => {
                setTodos(data.data); // Updating state with the fetched todos
                console.log(data)
            })  
        );
    };

    // useEffect to call the Axios fetch function on component mount
    useEffect(() => {
        fetchDataWithAxios(); // Calling the Axios fetch function
    }, []); // Empty dependency array ensures it runs only once

    return (
        <>
            <h2 className="text-primary">Todo list</h2> {/* Component heading */}
            <hr />
            <table className="table table-responsive text-center"> {/* Bootstrap-styled responsive table */}
                <thead className="thead-inverse">
                    <tr>
                        <th>Id</th> {/* Column for todo ID */}
                        <th>Title</th> {/* Column for todo title */}
                        <th>Completed</th> {/* Column for todo completion status */}
                    </tr>
                </thead>
                <tbody>
                    {/* Iterating over todos to render each as a table row */}
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td> {/* Displaying the todo ID */}
                            <td>{todo.title}</td> {/* Displaying the todo title */}
                            <td>
                                {/* Displaying a badge: green for completed, red otherwise */}
                                <span
                                    className={`badge bg-${todo.completed ? 'success' : 'danger'} rounded-5 border-1`}
                                >
                                    &nbsp;
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
