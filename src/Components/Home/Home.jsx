import React from 'react';

const Home = () => {
  const recipes = [
    {
      id: 1,
      title: 'Pasta Carbonara',
      image: 'https://example.com/pasta-carbonara.jpg',
      description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper.',
    },
    {
      id: 2,
      title: 'Chicken Tikka Masala',
      image: 'https://example.com/chicken-tikka-masala.jpg',
      description: 'A popular Indian dish made with marinated chicken pieces cooked in a spiced tomato-based sauce.',
    },
    // Add more recipes here
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to NeutritionsHub Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div className="bg-white rounded shadow p-4" key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover mb-4" />
            <h2 className="text-lg font-bold mb-2">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
