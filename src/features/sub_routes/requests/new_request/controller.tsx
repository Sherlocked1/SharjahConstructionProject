import { useState } from "react";
import { useNavigate } from "react-router";

const useNewRequestController = () => {


    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [location, setLocation] = useState<string>("");

    const navigate = useNavigate();

    const addClicked = () => {
        navigate(`/payment/${title}/${description}/${location}`)
    }

    return{
        title,
        description,
        location,
        addClicked,
        setTitle,
        setDescription,
        setLocation
    }
}

export default useNewRequestController;