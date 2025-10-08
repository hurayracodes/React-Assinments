import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const myName = "Abu Huraira";
const currentDate = new Date();

function FormHadling() {
  const [user, setUser] = useState({
    img: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);
  function inputChages(dets) {
    let a = dets.target.name;
    let b = dets.target.value;
    setUser({ ...user, [a]: b });
    // console.log('a ke value: '+ a , 'b ke value: ' + b );
  }
  function submitData(dets) {
    dets.preventDefault();
    // console.log(user);
    if (
      lastName !== "" &&
      firstName !== "" &&
      email !== "" &&
      password !== ""
    ) {
      setUsers([...users, user]);
      setUser({
        img: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      toast.success("Successfully toasted!");
    }
  }
  return (
    <section className="bg-gradient-to-r from-cyan-800 to-sky-900 flex flex-col gap-4">
      <div className="w-full h-screen flex justify-center">
        <form
          onSubmit={submitData}
          className=" bg-white p-10 rounded cursor-pointer w-1/3 mx-auto my-auto flex flex-wrap flex-col gap-3"
        >
          <div>
            <label
              for="image"
              className="block text-sm font-medium text-w mb-1 group-hover:text-black transition duration-200"
            >
              Your Image
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-user text-gray-400 group-hover:text-black transition duration-200"></i>
              </div>
              <input
                type="text"
                value={user.img}
                onChange={inputChages}
                name="img"
                id="userImage"
                className="w-full pl-10 pr-4 py-3 border outline-none border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 group-hover:border-black"
                placeholder="Your image Url"
                required
              />
            </div>
          </div>
          {/* Name Fields */}
          <div>
            <div>
              <label
                for="firstName"
                className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-black transition duration-200"
              >
                First Name
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-user text-gray-400 group-hover:text-black transition duration-200"></i>
                </div>
                <input
                  type="text"
                  value={user.firstName}
                  onChange={inputChages}
                  name="firstName"
                  id="firstName"
                  className="w-full pl-10 pr-4 py-3 border outline-none border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 group-hover:border-white"
                  placeholder="John"
                  required
                />
              </div>
            </div>

            <div>
              <label
                for="lastName"
                className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-white transition duration-200"
              >
                Last Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-user text-gray-400 group-hover:text-white transition duration-200"></i>
                </div>
                <input
                  type="text"
                  id="lastName"
                  value={user.lastName}
                  name="lastName"
                  onChange={inputChages}
                  className="w-full groupfirst pl-10 pr-4 py-3 border outline-none border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 group-hover:border-white"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label
              for="email"
              className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-white transition duration-200"
            >
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-envelope text-gray-400 group-hover:text-white transition duration-200"></i>
              </div>
              <input
                type="email"
                value={user.email}
                name="email"
                onChange={inputChages}
                id="email"
                className="w-full pl-10 pr-4 py-3 border outline-none border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 group-hover:border-white"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label
              for="password"
              className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-white  transition duration-200"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-lock text-gray-400 group-hover:text-white transition duration-200"></i>
              </div>
              <input
                type="password"
                value={user.password}
                name="password"
                onChange={inputChages}
                id="password"
                className="w-full pl-10 pr-10 py-3 border outline-none border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 group-hover:border-white"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                id="togglePassword"
              >
                <i className="fas fa-eye text-gray-400 hover:text-gray-600 group-hover:text-white group-hover:hover:text-gray-200 transition duration-200"></i>
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 shadow-md"
          >
            Create Account
          </button>
        </form>
      </div>
      <div className="Container flex flex-wrap gap-3 w-11/12 mx-auto p-6">
        {users.map((dets) => {
          return (
            <Card
              className="bg-slate-100 p-5 rounded-lg shadow-xl"
              style={{ width: "30%" }}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img className="bg-cover" src={dets.img} alt="Usr Image" />
              </div>
              <Card.Body>
                <Card.Title className="text-2xl font-semibold">
                  {dets.firstName}
                </Card.Title>
                <Card.Title>{dets.lastName}</Card.Title>
                <Card.Text>{dets.email}</Card.Text>
                <Button variant="primary">{dets.password}</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    <footer className="flex p-9">
      <p className="text-orange-200"> Copyright , {currentDate.getFullYear()} <b className="text-amber-400">hurayracodes</b> <span>Built by {myName}</span></p>
      </footer>  
    </section>
  );
}

export default FormHadling;
