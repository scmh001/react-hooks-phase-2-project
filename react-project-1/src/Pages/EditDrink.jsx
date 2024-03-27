import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditDrink() {
    // Retrieve the 'id' from the URL parameters
    const { id } = useParams();
    // Hook to navigate programmatically
    const navigate = useNavigate();
    // State to hold form data
    const [formData, setFormData] = useState({});

    // Fetch the drink data when the component mounts
    useEffect(() => {
        fetch(`http://localhost:4000/drinks/${id}`)
            .then((res) => res.json())
            .then((data) => setFormData(data));
    }, [id]); // Dependency array with 'id' to refetch when it changes

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Send a PATCH request to update the drink
        fetch(`http://localhost:4000/drinks/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                ...formData,
                cheers: parseInt(formData.cheers), // Ensure 'cheers' is an integer
            }),
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then(() => navigate(`/drink/${id}`)); // Navigate to the drink's page after update
    };

    // Update form data as user types
    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow" autoComplete="off">
                <h3 className="text-2xl font-bold mb-6">Edit {formData.name}</h3>

                {/* Input for drink name */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleOnChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>

                {/* Dropdown for drink category */}
                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleOnChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        <option value={"Alcoholic"}>Alcoholic</option>
                        <option value={"Non-Alcoholic"}>Non-Alcoholic</option>
                        <option value={"Coffee"}>Coffee</option>
                        <option value={"Smoothie"}>Smoothie</option>
                    </select>
                </div>

                {/* Textarea for ingredients, with instructions to separate them with a period */}
                <div className="mb-4">
                    <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
                        Ingredients 
                        <span className="italic text-xs">  (Please separate ingredients with a period)</span></label>
                    <textarea
                        id="ingredients"
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={handleOnChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>

                {/* Input for drink image URL */}
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleOnChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                
                {/* Input for cheers count */}
                <div className="mb-4">
                    <label htmlFor="cheers" className="block text-sm font-medium text-gray-700">Cheers</label>
                    <input
                        type="number"
                        id="cheers"
                        name="cheers"
                        value={formData.cheers}
                        onChange={handleOnChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>

                {/* Textarea for drink history */}
                <div className="mb-4">
                    <label htmlFor="history" className="block text-sm font-medium text-gray-700">History</label>
                    <textarea
                        id="history"
                        name="history"
                        value={formData.history}
                        onChange={handleOnChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>

                {/* Textarea for drink instructions, with instructions to separate them with a period */}
                <div className="mb-4">
                    <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">
                        Instructions
                        <span className="italic text-xs">  (Please separate instructions with a period)</span>
                        </label>
                    <textarea
                        id="instructions"
                        name="instructions"
                        value={formData.instructions}
                        onChange={handleOnChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>

                {/* Submit button */}
                <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:shadow-outline">
                    Update Drink
                </button>
            </form>
            {/* Footer with copyright and design credit */}
            <footer className="text-center text-gray-600 py-4 border-t-2 border-gray-200 mt-8">
                <div className="max-w-5xl m-auto">
                    <p>© {new Date().getFullYear()} Drinks Galore. All rights reserved.</p>
                    <p>Designed with 💖 by the Drinks Galore Team</p>
                </div>
            </footer>
        </>
    );
}

export default EditDrink;