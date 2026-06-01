import { useEffect, useState } from "react";
import axios from "axios";

function Home()  {

    const [message, setMessage] = useState("");

    useEffect(() => {

        const fetchData = async () => {
            
            try {

                const response = await axios.get(
                    "http://localhost:5000/api/test"
                );

                setMessage(response.data.message);

            } catch (error) {
                console.log(error);
            }

        };

        fetchData();
    }, []);

    return (

        <div>

            <h1>{message}</h1>

        </div>
    );
}

export default Home;