import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {

    const navigate = useNavigate();

    const [profile, setProfile] = useState(null);

    const [tasks, setTasks] = useState([]);

    const [editingTaskId, setEditingTaskId] = useState(null);

    const [taskData, setTaskData] = useState({
        title: "",
        description: "",
    });

    const fetchProfile = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "http://localhost:5000/api/v1/users/profile",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setProfile(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    const fetchTasks = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "http://localhost:5000/api/v1/tasks",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setTasks(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    const handleTaskChange = (e) => {

        setTaskData({
            ...taskData,
            [e.target.name]: e.target.value,
        });
    };

    const createTask = async () => {

        try {

            const token = localStorage.getItem("token");

            await axios.post(
                "http://localhost:5000/api/v1/tasks",
                taskData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setTaskData({
                title: "",
                description: "",
            });

            fetchTasks();

        } catch (error) {
            console.log(error);
        }
    };

    const updateTask = async () => {

        try {

            const token = localStorage.getItem("token");

            await axios.put(
                `http://localhost:5000/api/v1/tasks/${editingTaskId}`,
                taskData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setEditingTaskId(null);

            setTaskData({
                title: "",
                description: "",
            });

            fetchTasks();

        } catch (error) {
            console.log(error);
        }
    };

    const deleteTask = async (id) => {

        try {

            const token = localStorage.getItem("token");

            await axios.delete(
                `http://localhost:5000/api/v1/tasks/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            fetchTasks();

        } catch (error) {
            console.log(error);
        }
    };

    const handleLogout = () => {

        localStorage.removeItem("token");

        navigate("/login");
    };

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
            return;
        }

        fetchProfile();
        fetchTasks();

    }, []);

    return (

        <div>

            <h1>Dashboard</h1>

            <button onClick={handleLogout}>
                Logout
            </button>

            <br /><br />

            {profile && (

                <div>

                    <h3>Name: {profile.name}</h3>

                    <h3>Email: {profile.email}</h3>

                    <h3>Role: {profile.role}</h3>

                </div>

            )}

            <hr />

            <h2>
                {editingTaskId ? "Update Task" : "Create Task"}
            </h2>

            <input
                type="text"
                name="title"
                placeholder="Task Title"
                value={taskData.title}
                onChange={handleTaskChange}
            />

            <br /><br />

            <input
                type="text"
                name="description"
                placeholder="Task Description"
                value={taskData.description}
                onChange={handleTaskChange}
            />

            <br /><br />

            {editingTaskId ? (
                <button onClick={updateTask}>
                    Update Task
                </button>
            ) : (
                <button onClick={createTask}>
                    Create Task
                </button>
            )}

            <hr />

            <h2>My Tasks</h2>

            {tasks.map((task) => (

                <div key={task._id}>

                    <h4>{task.title}</h4>

                    <p>{task.description}</p>

                    <button
                        onClick={() => {

                            setEditingTaskId(task._id);

                            setTaskData({
                                title: task.title,
                                description: task.description,
                            });
                        }}
                    >
                        Edit
                    </button>

                    <button
                        onClick={() => deleteTask(task._id)}
                    >
                        Delete
                    </button>

                    <hr />

                </div>

            ))}

        </div>
    );
}

export default Dashboard;