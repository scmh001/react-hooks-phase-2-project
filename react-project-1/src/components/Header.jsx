

const Header = () => {
  return (
    <>
<header class="bg-gray-200 p-4">
  <div class="container mx-auto flex items-center justify-between">
    <img src="https://cdn-icons-png.flaticon.com/512/5821/5821067.png" alt="Placeholder" class="h-10 w-10" />
    <nav>
      <ul class="flex">
       
        <li class="mr-4">
          <a href="#" class="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800">Link 1</a>
        </li>
        <li class="mr-4">
          <a href="#" class="bg-blue-300 text-white py-2 px-4 rounded hover:bg-blue-400">Link 2</a>
        </li>
        <li class="mr-4">
          <a href="#" className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800">Link 3</a>
        </li>
      </ul>
    </nav>
  </div>
</header>
</>
  );
};

export default Header;