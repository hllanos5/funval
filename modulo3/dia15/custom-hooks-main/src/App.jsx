import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Home from "./pages/Home";


export default function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:id" element={<h1>La otra</h1>} />
      </Routes>

    </div>
  )
}


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-16 px-6 bg-sky-300 font-medium">
      <figure>
        <figcaption className="text-3xl font-bold">H</figcaption>
      </figure>

      <ul className="flex gap-6">
        <li className="hover:text-gray-700 hover:underline">
          <Link to="/?a=Alcoholic" >Alcoholics</Link>
        </li>
        <li className="hover:text-gray-700 hover:underline">

          <Link to="/?a=Non_Alcoholic" >Non - Alcoholics</Link>
        </li>
      </ul>
    </nav>
  )
}