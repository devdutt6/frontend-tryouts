import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { RegisterForm } from "./components/register/Register";
import { LoginForm } from "./components/login/Login";
import { CreateJobForm } from "./components/createJob/CreateJob";
import { ApplyForm } from "./components/apply/Apply";
import { Provider } from "react-redux";
import store from "../app/store";
// import store from "../store/store";
import { IceCream } from "./components/IceCream";
import { CakeHook } from "./components/CakeHook";
import { NewCake } from "./components/NewCake";
import { Users } from "./components/Users";
import { CakeView } from "../features/cake/CakeView";
import { IcecreamView } from "../features/icecream/IcecreamView";
import { UserView } from "../features/user/UserView";
// import Cake from "./components/Cake";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
    // <RegisterForm />
    // <LoginForm />
    // <CreateJobForm />
    // <ApplyForm />
    // <Cake />
    // <Provider store={store}>
    //   <CakeHook />
    //   <IceCream />
    //   <NewCake />
    //   <Users />
    // </Provider>
    <Provider store={store}>
      <CakeView />
      <IcecreamView />
      <UserView />
    </Provider>
    // <ApplyForm />
  );
}

export default App;
