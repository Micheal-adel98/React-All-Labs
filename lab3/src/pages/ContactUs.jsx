import { useState } from "react";
import { Input } from "../components/Input";
import { useHistory } from "react-router-dom";

export const ContactUs = (props) => {
  let history = useHistory();
  const [title, setTitle] = useState("Please enter email address");
  const [body, setBody] = useState("Please enter email body");
  const HomeButton = () => {
    history.push("/users");
  };

  return (
    <div className="card p-3 m-2" style={{ height: "95vh" }}>
      <h1>Contact Us</h1>
      <Input value={title} setValue={setTitle} label="email" />
      <Input value={body} setValue={setBody} label="Body" />
      <br />

      <button onClick={HomeButton} className="btn btn-primary">
        Send Email
      </button>
    </div>
  );
};
