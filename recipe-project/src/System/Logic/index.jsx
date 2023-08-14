import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImxhbmdnZW5nIiwiZW1haWwiOiJsa2FudWdyYWhhbkBnbWFpbC5jb20iLCJjcmVhdGVkX2F0IjoiMjAyMy0wNy0yNVQwMToxNDo1Mi40NDlaIiwiaWF0IjoxNjkxOTIwNjE2fQ.LtQOfaa8dv164Hdv-uGmtTu_bprdwS5jRTZWH6cwqi0";

export function GetData() {
  const [page, setPage] = useState(1);
  // const [order, setOrder] = useState("recipe.id")
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  // increase page
  const Increase = () => {
    setPage((count) => count + 1);
  };
  // decrease page
  const Decrease = () => {
    setPage((count) => count - 1);
  };

  // search something
  const Searching = (e) => {
    setSearch(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      Axios();
    }
  };

  const Axios = () => {
    axios
      .get("http://localhost:3000/recipe/detail", {
        params: {
          page: 1,
          //   order: order || "recipe.id",
          //   sort: sort || "ASC",
          search: search,
          // searchBy: "category_id",
          limit: 10,
          offset: 0,
        },
      })
      .then((res) => {
        console.log(res);
        setResult(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteData = (id) => {
    axios
      .delete(`http://localhost:3000/recipe/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        console.log("berhasil");
        Axios();
      })
      .catch((err) => {
        console.log(err);
        console.log("gagal");
        Axios();
      });
  };

  return {
    page,
    Increase,
    Decrease,
    search,
    Searching,
    result,
    handleKeyDown,
    deleteData,
  };
}

export const PostData = () => {
  const [inputData, setInputData] = useState({
    "recipe_name": "",
    "recipe_desc": "apa aja",
    "recipe_ingredients":"",
    "category_id":1,
    "recipe_image":""
    
  });
  const [imageData, setImageData] = useState();

  const handlerPost = (event) => {
    event.preventDefault();
    let bodyFormData = new FormData();
    bodyFormData.append("recipe_name", inputData.recipe_name);
    bodyFormData.append("recipe_desc", inputData.recipe_desc);
    bodyFormData.append("recipe_ingredients", inputData.recipe_ingredients);
    bodyFormData.append("category_id", inputData.category_id);
    bodyFormData.append("recipe_image", imageData);

    console.log(bodyFormData);

    axios
      .post("http://localhost:3000/recipe", bodyFormData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changePostData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  };

  const changeImagePost = (e) => {
    setImageData(e.target.files[0]);
    e.target.files[0] &&
      setInputData({
        ...inputData,
        recipe_image: URL.createObjectURL(e.target.files[0]),
      });
    console.log(e.target.files);
  };

  return {
    handlerPost,
    changePostData,
    changeImagePost,
    inputData

  }
};

export const UpdateData=()=> {
  const {ids} = useParams()
    const [imageUpdate,setImageUpdate] = useState()
    const [updateData, setUpdateData] = useState({
        recipe_name:"",
        recipe_desc: "",
        recipe_ingredients:"",
        category_id:"",
        recipe_image:""
    }) 

    const getData = () =>{
        axios.get(`http://localhost:3000/recipe/${ids}`,{headers :{
            Authorization : `Bearer ${token}`
        }})
        .then((res)=>{
            console.log(res)
            setUpdateData({...updateData,recipe_name:res.data.data.recipe_name,recipe_ingredients:res.data.data.recipe_ingredients,recipe_image:res.data.data.recipe_image})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        console.log(ids)
        getData()
    },[])

    const handlerUpdate = (event) => {
        event.preventDefault();
        let bodyFormData = new FormData()
        bodyFormData.append("recipe_name",updateData.recipe_name)
        bodyFormData.append("recipe_ingredients",updateData.recipe_ingredients)
        bodyFormData.append("category_id",updateData.category_id)
        bodyFormData.append("recipe_image",imageUpdate)

        console.log(bodyFormData)

        axios.put(`http://localhost:3000/recipe/${ids}`,bodyFormData, {headers :{
            Authorization : `Bearer ${token}`,
            "Content-Type": 'multipart/form-data'
        }})
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const changeUpdateData = (e) => {
        setUpdateData({...updateData,
        [e.target.name]:e.target.value
        })
        console.log(updateData)
    }
    const changeImageUpdate = (e) => {
        setImageUpdate(e.target.files[0])
        e.target.files[0] && setUpdateData({...updateData,recipe_image:URL.createObjectURL(e.target.files[0])})
        console.log(e.target.files)

    }

  return {
    handlerUpdate,
    changeUpdateData,
    changeImageUpdate,
    updateData
  }
}
