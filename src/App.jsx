import './App.css'

const Cars = ({cars, model}) => {
  const carsData = cars.find(car => car.model === model);
  return (
    <div>
      <h2>Cars Data</h2>
      <p>car model: {carsData.model}</p>
      <p>car make: {carsData.make}</p>
      <p>car Year: {carsData.year}</p>
    </div>
  )
}

const Gyms = ({gyms, location}) => {
  const gymsData = gyms.find(gym => gym.location === location);
  return (
    <div>
      <h2>Gyms Data</h2>
      <p>gym model: {gymsData.name}</p>
      <p>gym Location: {gymsData.location}</p>
      <p>gym Rating: {gymsData.rating}</p>
    </div>
  )
}

const Travels = ({travels, destination}) => {
  const travelsData = travels.find(travel => travel.destination === destination)
  return (
    <div>
      <h2>Travel Data</h2>
      <p>travel destination: {travelsData.destination}</p>
      <p>travel duration: {travelsData.duration}</p>
      <p>travel activities: {travelsData.activities.join(', ')}</p>
    </div>
  )
}

const Laptops = ({laptops, processor}) => {
  const laptopsData = laptops.find(laptop => laptop.processor === processor);
  return (
    <div>
      <h2>Laptop data</h2>
      <p>Laptop brand: {laptopsData.brand}</p>
      <p>Laptop Processor: {laptopsData.processor}</p>
      <p>Laptop RAM: {laptopsData.ram}</p>
    </div>
  )
}

const Recipes = ({recipes, dish}) => {
  const recipeData = recipes.find(recipe => recipe.dish === dish);
  return (
    <div>
      <h2>Recipe Data</h2>
      <p>Dish: {recipeData.dish}</p>
      <p>Cuisines: {recipeData.cuisine}</p>
      <p>Ingredients: {recipeData.ingredients.join(', ')}</p>
    </div>
  )
}

const BlogPosts = ({blogs, title}) => {
  const blogPostData = blogs.find(blog => blog.title === title);
  return (
    <div>
      <h2>Blog Post Data</h2>
      <p>Title: {blogPostData.title}</p>
      <p>Content: {blogPostData.content}</p>
      <p>Category: {blogPostData.category}</p>
    </div>
  )
}

export default function App() {
  const cars = [
    { model: "Car 1", make: "Make 1", year: 2022 },
    { model: "Car 2", make: "Make 2", year: 2021 },
    { model: "Car 3", make: "Make 3", year: 2023 },
  ];
  const gyms = [
    { name: "Gym 1", location: "Location 1", rating: 4.7 },
    { name: "Gym 2", location: "Location 2", rating: 4.2 },
    { name: "Gym 3", location: "Location 3", rating: 4.5 },
  ];
  const travels = [
    {
      destination: "Travel 1",
      duration: "5 days",
      activities: ["Hiking", "Sightseeing"],
    },
    {
      destination: "Travel 2",
      duration: "7 days",
      activities: ["Beach", "Shopping"],
    },
    {
      destination: "Travel 3",
      duration: "3 days",
      activities: ["Cultural Tours", "Photography"],
    },

  ];
  const laptops = [
    { brand: "Laptop 1", processor: "Intel i5", ram: "8GB" },
    { brand: "Laptop 2", processor: "AMD Ryzen 7", ram: "16GB" },
    { brand: "Laptop 3", processor: "Apple M1", ram: "12GB" },
  ];
  const recipes = [
    {
      dish: "Recipe 1",
      cuisine: "Italian",
      ingredients: ["Tomatoes", "Pasta", "Cheese"],
    },
    {
      dish: "Recipe 2",
      cuisine: "Mexican",
      ingredients: ["Beans", "Rice", "Avocado"],
    },
    {
      dish: "Recipe 3",
      cuisine: "Indian",
      ingredients: ["Curry", "Rice", "Naan"],
    },
  ];
  const blogPosts = [
    { id: 1, title: 'Blog Post 1', content: 'Content 1', category: 'Technology' },
    { id: 2, title: 'Blog Post 2', content: 'Content 2', category: 'Food' },
    { id: 3, title: 'Blog Post 3', content: 'Content 3', category: 'Fashion' }
  ];


  return (
    <main>
      <Cars cars={cars} model='Car 2'/>
      <Gyms gyms={gyms} location='Location 2'/>
      <Travels travels={travels} destination='Travel 3'/>
      <Laptops laptops={laptops} processor='Apple M1'/>
      <Recipes recipes={recipes} dish='Recipe 2'/>
      <BlogPosts blogs={blogPosts} title='Blog Post 3' />
    </main>
  )
}
