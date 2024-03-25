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
		<form onSubmit={handleSubmit} className="form" autoComplete="off">
			<h3>Edit Project</h3>

			<label htmlFor="name">Name</label>
			<input
				type="text"
				id="name"
				name="name"
				value={formData.name}
				onChange={handleOnChange}
			/>

			<label htmlFor="category">Category</label>
			<input
				type="text"
				id="category"
				name="category"
				value={formData.category}
				onChange={handleOnChange}
			/>

			<label htmlFor="ingredients">Ingredients</label>
			<textarea
				id="ingredients"
				name="ingredients"
				value={formData.ingredients}
				onChange={handleOnChange}
			/>

			<label htmlFor="image">Image</label>
			<input
				type="text"
				id="image"
				name="image"
				value={formData.image}
				onChange={handleOnChange}
			/>
            
            <label htmlFor="cheers">Image</label>
			<input
				type="number"
				id="cheers"
				name="cheers"
				value={formData.cheers}
				onChange={handleOnChange}
			/>

            <label htmlFor="history">History</label>
			<textarea
				id="history"
				name="history"
				value={formData.history}
				onChange={handleOnChange}
			/>

            <label htmlFor="instructions">Instructions</label>
			<textarea
				id="instructions"
				name="instructions"
				value={formData.instructions}
				onChange={handleOnChange}
			/>

			<button type="submit">Update Drink</button>
		</form>
	);
}

export default EditProject;