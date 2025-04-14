
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="">
        <div class="bg-black w-full p-3 flex flex-wrap  justify-around text-white ">
          <img class="h-15 w-20" src="Ico.png" alt="" />
          <a class="flex p-4  hover:bg-white hover:text-black" href="#">
            Home
          </a>
          <a class="flex p-4  hover:bg-white hover:text-black" href="#">
            New Arrival
          </a>
          <a class="flex p-4  hover:bg-white hover:text-black" href="#">
            Best Seller
          </a>
          <button class="bg-gray-800 h-15 w-20 rounded-sm hover:bg-white hover:text-black">
            Login
          </button>
        </div>

        <div class="bg-[url(my_util_app\Landingage)] flex flex-wrap ">
          <img
            class="w-full h-60  bg-cover bg-center hover:scale-110 transition duration-500 ease-in-out"
            src="Shoes_Onpening_Bakground.jpeg"
            alt=""
          />
        </div>
        <p class="font-bold bg-black text-white hover:text-2xl hover:bg-white hover:text-black">
                        BE YOU MAKE FASHION
        </p>
        <div class="flex flex-wrap justify-center gap-4 py-6">
          <div class="border-2 w-60 h-50 border-black hover:bg-black cursor-pointer">
            <img class="flex align-top h-50 " src="P1.jpeg" alt="" />
          </div>
          <div class="border-2 w-60 h-50 border-black hover:bg-black cursor-pointer">
            <img class="flex align-top h-50" src="P2.jpeg" alt="" />
          </div>
          <div class="border-2 w-60 h-50 border-black hover:bg-black cursor-pointer">
            <img class="flex align-top h-50" src="P3.jpeg" alt="" />
          </div>
          <div class="border-2 w-60 h-50 border-black hover:bg-black cursor-pointer">
            <img class="flex align-top h-50" src="P4.jpeg" alt="" />
          </div>
          <div class="border-2 w-60 h-50 border-black hover:bg-black cursor-pointer">
            <img class="flex align-top h-63 " src="P12.jpeg" alt="" />
          </div>
          <div class="border-2 w-60 h-50 border-black hover:bg-black cursor-pointer">
            <img class="flex align-top h-50" src="P6.jpeg" alt="" />
          </div>
          <div class="border-2 w-60 h-50 border-black hover:bg-black cursor-pointer">
            <img class="flex align-top h-50" src="P15.jpeg" alt="" />
          </div>
          <div class="border-2 w-60 h-50 border-black hover:bg-black cursor-pointer">
            <img class="flex align-top h-50" src="P11.jpeg" alt="" />
          </div>
        </div>
        <p class="font-bold bg-black text-white hover:text-2xl hover:bg-white hover:text-black">
          MAKE WORLD FOLLOW YOUR LEAD
        </p>
        <footer>
          <div class="bg-slate-600 w-full h-auto flex flex-wrap justify-between my-2">
            <div class=" flex flex-col items-center p-2">
              <img
                class="w-12 h-12 flex flex-col "
                src="Ico.png"
                alt=""
              />
              <div class="bg-slate-600 w-full h-auto flex flex-wrap justify-between"></div>
              <a class="text-black font-semibold py-1" href="#">Contact us</a>
              <div class= "w-36 h-1 border-b-4 border-black"></div>
                
            </div>
            <div class=" flex flex-col mx-4 py-4">
                <a class="text-black font-semibold" href="">Our products</a>
                <div class= "w-36 h-1 border-b-4 border-black"></div>
                <a href="#" class="text-black font-semibold">About us</a>
                <div class= "w-36 h-1 border-b-4 border-black"></div>
                <a href="#" class="text-black font-semibold">Become a seller</a>
                <div class= "w-36 h-1 border-b-4 border-black"></div>
              </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
