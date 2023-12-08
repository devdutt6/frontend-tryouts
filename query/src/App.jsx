import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Cake } from "./features/cake/Cake";
import { Posts } from "./features/posts/Posts";
import { User } from "./features/users/Users";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <>
        {/* zustand */}
        <Routes>
          <Route path="/cake" element={<Cake />} />
          <Route path="/users" element={<User />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
        {/* tanstack */}
      </>
    </QueryClientProvider>
  );
}

export default App;
