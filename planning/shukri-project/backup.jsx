import { useState } from 'react';

export default function NewPost() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'ingredients':
        setIngredients(value);
        break;
      case 'imageUrl':
        setImageUrl(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle the form submission, 
    // Send data to a server or displaying it on the page.
    console.log({ name, category, ingredients, imageUrl });
  };

  return (
    <div className="form-container">
    <div className="form-wrapper"> 
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={category}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Ingredients:
        <textarea
          name="ingredients"
          value={ingredients}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="imageUrl"
          value={imageUrl}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Create Post</button>
    </form>
    </div>
    </div>
  );
}

// --------------------------------------------------------------------------------------------------------------------------