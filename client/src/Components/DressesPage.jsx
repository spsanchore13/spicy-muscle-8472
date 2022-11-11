import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const getDresses = () => {
  return axios("http://localhost:8080/products");
};
const DressesPage = () => {
  const [dresses, setDresses] = useState([]);

  // const dispatch = useDispatch()

  useEffect(() => {
    getDresses().then((res) => {
      console.log(res);
    });
  }, []);

  return <div>DressesPage</div>;
};

export default DressesPage;
