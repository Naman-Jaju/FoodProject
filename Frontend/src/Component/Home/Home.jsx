import React from 'react';
import {Link} from "react-router-dom"
import Button from '../Button/Button.jsx';

const Home = () => {
  return (
    
    <div  className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url(https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709856000&semt=ais)] bg-cover bg-no-repeat">
    <div className="w-full space-y-5 lg:w-2/3">
    <h1 className="text-white font-semibold text-5xl" >Food so good, it'll make you drool. Recipes that bring families to the table.</h1>
    <p className="text-yellow-200 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dignissimos repellendus cumque debitis ipsa ullam nesciunt consequatur dolores? Laboriosam aliquam, aut similique modi unde ipsa? Asperiores voluptatem soluta quasi laboriosam.</p>
    <div className='w-[150px]'>
        <Button title = "Order now"/>
    </div>
  </div>
</div>
  )
}

export default Home;