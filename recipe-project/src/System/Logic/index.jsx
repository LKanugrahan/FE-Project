import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom"
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";
import axios from "axios";


// TODO: Login
export const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [inputLogin, setLogin] = useState({
    email: "",
    password: "",
  });

  const saveLogin = (e) => {
    e.preventDefault();
    dispatch(login(inputLogin,navigate))

  };
  const changeLogin = (e) => {
    setLogin({ ...inputLogin, [e.target.name]: e.target.value });
  };

  return {
    inputLogin,
    saveLogin,
    changeLogin,
  };
};

// TODO: Data Recipe

export function GetData() {
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState();
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [searchBy, setSearchBy] = useState();
  const [sort, setSort] = useState();
  const [limit, setLimit] = useState(5);

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
  // order something
  const Ordering = (e) => {
    setOrder(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      Axios();
    }
  };

  useEffect(() => {
    Axios;
  }, [page, order, sort, search, searchBy, limit]);

  const params = new URLSearchParams({
    page: page,
    limit: limit,
    search: search,
})
  const Axios = () => {
    axios
      .get(`http://localhost:3000/recipe/detail?${params}`)
      .then((res) => {
        console.log(res);
        setResult(res.data.data);
        console.log(res.request.responseURL)
      })
      .catch((err) => {
        console.log(err);
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
    order,
    Ordering,
  };
}

// TODO: GetDataProfileMenu

export const GetDataProfile = () => {
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState();
  const [result, setResult] = useState([]);
  const [sort, setSort] = useState();
  const [limit, setLimit] = useState();

  // increase page
  const Increase = () => {
    setPage((count) => count + 1);
  };
  // decrease page
  const Decrease = () => {
    setPage((count) => count - 1);
  };

  // order something
  const Ordering = (e) => {
    setOrder(e.target.value);
  };

  const Axios = () => {
    axios
      .get("http://localhost:3000/recipe/detail", {
        params: {
          page: page,
          order: order,
          sort: sort,
          limit: 4,
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

  useEffect(() => {
    Axios();
  }, [page, order, sort]);

  // TODO: DELETE RECIPE

  const deleteData = (id) => {
    axios
      .delete(`http://localhost:3000/recipe/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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
    result,
    deleteData,
  };
};

// TODO: POST RECIPE

export const PostData = () => {
  const navigate = useNavigate()
  const [inputData, setInputData] = useState({
    recipe_name: "",
    recipe_ingredients: "",
    category_id: "",
    recipe_image: "",
  });
  const [imageData, setImageData] = useState();

  const handlerPost = (event) => {
    event.preventDefault();
    let bodyFormData = new FormData();
    bodyFormData.append("recipe_name", inputData.recipe_name);
    bodyFormData.append("recipe_ingredients", inputData.recipe_ingredients);
    bodyFormData.append("category_id", inputData.category_id);
    bodyFormData.append("recipe_image", imageData);

    console.log(bodyFormData);

    axios
      .post("http://localhost:3000/recipe", bodyFormData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        navigate(`/detail/${inputData.id}`)
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
    inputData,
  };
};

// TODO: UPDATE RECIPE

export const UpdateData = () => {
  const { id } = useParams();
  const [imageUpdate, setImageUpdate] = useState();
  const [updateData, setUpdateData] = useState({
    recipe_name: "",
    recipe_desc: "",
    recipe_ingredients: "",
    category_id: "",
    recipe_image: "",
  });

  const getData = () => {
    axios
      .get(`http://localhost:3000/recipe/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setUpdateData({
          ...updateData,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(id);
    getData();
  }, []);

  const handlerUpdate = (event) => {
    event.preventDefault();
    let bodyFormData = new FormData();
    bodyFormData.append("recipe_name", updateData.recipe_name);
    bodyFormData.append("recipe_ingredients", updateData.recipe_ingredients);
    bodyFormData.append("category_id", updateData.category_id);
    bodyFormData.append("recipe_image", imageUpdate);

    console.log(bodyFormData);

    axios
      .put(`http://localhost:3000/recipe/${id}`, bodyFormData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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

  const changeUpdateData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    console.log(updateData);
  };
  const changeImageUpdate = (e) => {
    setImageUpdate(e.target.files[0]);
    e.target.files[0] &&
      setUpdateData({
        ...updateData,
        recipe_image: URL.createObjectURL(e.target.files[0]),
      });
    console.log(e.target.files);
  };

  return {
    handlerUpdate,
    changeUpdateData,
    changeImageUpdate,
    updateData,
  };
};

// TODO: GET RECIPE ID

export const GetDataId = () => {
  const { id } = useParams();
  const [resultId, setResultId] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/recipe/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setResultId(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return {
    resultId,
    setResultId,
  };
};

// TODO: Data Category

export function GetCategory() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    Axios();
  }, []);

  const Axios = () => {
    axios
      .get("http://localhost:3000/category/")
      .then((res) => {
        console.log(res);
        setCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    category,
  };
}
