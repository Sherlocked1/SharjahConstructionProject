import { useState } from "react";
import { useNavigate } from "react-router";
import { FormFields } from "../../../core/models/formFields";

const useNewRequestController = () => {


    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [location, setLocation] = useState<string>("");

    const [errors,setErrors] = useState<Partial<FormFields>>({});

    const navigate = useNavigate();

    const validate = (): Partial<FormFields> => {
        const validationErrors: Partial<FormFields> = {};

        if (!title) {
            validationErrors.title = 'Title is required';
        }

        if (!description) {
            validationErrors.description = 'Description is required';
        }

        if (!location) {
            validationErrors.location = 'Location is required';
        }

        return validationErrors;
    };

    const addClicked = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0 ){
            navigate(`/payment/${title}/${description}/${location}`)
        }else{
            setErrors(validationErrors);
        }
    }

    return{
        title,
        description,
        location,
        addClicked,
        setTitle,
        setDescription,
        setLocation,
        errors,
    }
}

export default useNewRequestController;