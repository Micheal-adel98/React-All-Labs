import { users } from "./users";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetPosts } from "../../hooks";
import { Navbar } from "../../components/Navbar";
export const Users = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = useGetPosts();
  useEffect(() => {
    getPosts().then(setPosts);
  }, []);
  if (!posts.length) return <h1>Loading...</h1>;
  
  return (
    <>
      <h1>Users-Page</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">TITLE</th>
            <th scope="col">BODY</th>
            
          </tr>
        </thead>
        <tbody>
          {posts.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.title}</td>
              <td>{user.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
