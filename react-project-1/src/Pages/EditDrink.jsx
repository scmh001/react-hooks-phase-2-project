import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditProject() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({});

	useEffect(() => {
		fetch(`http://localhost:4000/drinks/${id}`)
			.then((res) => res.json())
			.then((data) => setFormData(data));
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch(`http://localhost:4000/drinks/${id}`, {
			method: "PATCH",
			body: JSON.stringify({
				...formData,
				cheers: parseInt(formData.claps),
			}),
			headers: {
				"content-type": "application/json",
			},
		})
			.then((res) => res.json())
			.then(() => navigate(`/drink/${id}`));
	};

	const handleOnChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow" autoComplete="off">
            <h3 className="text-2xl font-bold mb-6">Edit Project</h3>

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

            <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleOnChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients</label>
                <textarea
                    id="ingredients"
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleOnChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
            </div>

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

            <div className="mb-4">
                <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">Instructions</label>
                <textarea
                    id="instructions"
                    name="instructions"
                    value={formData.instructions}
                    onChange={handleOnChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
            </div>

            <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:shadow-outline">
                Update Drink
            </button>
        </form>
    );
}

export default EditProject;