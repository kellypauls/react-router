import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NewColorForm.css"

function NewColorForm({addColor}) {
    const [form, updateForm] = useState({
        name: "",
        hex: "#000000"
    })
    const navigate = useNavigate();

    function handleChange(e) {
        e.persist();
        updateForm(f => ({ ...f, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        addColor({ [form.name]: form.hex });
        navigate("/colors");
    }

    const {hex, name} = form;

    return (
        <div className="AddColor">
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Color Name</label>
                <input
                name="name"
                id="name"
                placeholder="Enter Color Name"
                onChange={handleChange}
                value={name}
                />
            </div>
            <div>
                <label htmlFor="hex">Color Value</label>
                <input
                type="color"
                name="hex"
                id="hex"
                onChange={handleChange}
                value={hex}
                />
            </div>
            <input className="submit" type="Submit" value="add this color" readOnly />
            <div className="return">
                <Link to="/">Return to Color Selector</Link>
                </div>
            </form>
        </div>
    );
}

export default NewColorForm;