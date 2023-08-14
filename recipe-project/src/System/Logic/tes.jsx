import axios from "axios";
import { useState } from "react";
export function Tes() {
    const [id, setId] = useState()
    const Iid = (e) => [
        setId(e.target.value)
    ]


  const Axios = () => {
    axios
      .get(`http://localhost:3000/recipe/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Axios></Axios>
      <input type="text" onChange={Iid} value={id}/>
    </>
  );
}
