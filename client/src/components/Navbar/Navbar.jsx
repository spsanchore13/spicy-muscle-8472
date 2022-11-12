import { Link } from "react-router-dom";
import "./Navbar.css";
import bag from "./bag.png";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { get_data } from "../../Redux/action";
import { useEffect, useState } from "react";
import axios from "axios";
export const Navbar = () => {
  const navigate = useNavigate();

  const [count, setcount] = useState();

  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const cart = useSelector((state) => state?.CartReducer?.items);
  

  var getdata = () => {
    axios
      .get("https://anthropologie-application.herokuapp.com/cart")
      .then(function (response) {
        // handle success
        setcount(response.data.length);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  useEffect(() => {
    getdata();
  }, [count]);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      dispatch(get_data(e.target.value));
      navigate("/search");
    }
  }

  console.log(count);

  return (
    <div className="mainNavbar">
      <div className="navTop">
        <div>Language</div>
        <span>
          <Link className="auth" to="/login">
            sign in
          </Link>{" "}
          /{" "}
          <Link className="auth" to="/register">
            sign up
          </Link>
        </span>
      </div>
      <div className="navMid">
        <div className="midLeft">
          <Link className="homeicon" to="/">
            BETTERMART
          </Link>
          <Link className="homeicon" to="/home2">
            BETTERLivinghome
          </Link>
        </div>
        <div className="midRight">
          <div className="midSearch">
            <input
              onKeyDown={handleKeyDown}
              className="Nav-searchbar"
              type="text"
              name="search"
              placeholder="SEARCH BETTERMART"
            />
          </div>
          <Link to="/cart" className="cart-logo">
            <FaShoppingCart />
            
          </Link>
        </div>
      </div>
      <div className="cart-count">{count}</div>
      <div className="navBottom">
        <Link className="nav-link" to="/new!">
          <button>New!</button>
        </Link>
        <Link className="nav-link" to="/giftsformom">
          <button>Gifts for Mom</button>
        </Link>
        <Link className="nav-link" to="/dresses">
          <button>Dresses</button>
        </Link>
        <Link className="nav-link" to="/clothing">
          <button>Clothing</button>
        </Link>
        <Link className="nav-link" to="/shoes">
          <button>Shoes</button>
        </Link>
        <Link className="nav-link" to="/accessories">
          <button>Accessories</button>
        </Link>
        <Link className="nav-link" to="/home&furniture">
          <button>Home & Furniture</button>
        </Link>
        <Link className="nav-link" to="/beauty&wellness">
          <button>Beauty & Wellness</button>
        </Link>
        <Link className="nav-link" to="/garden&outdoor">
          <button>Garden & Outdoor</button>
        </Link>
        <Link className="nav-link" to="/weddings">
          <button>Weddings</button>
        </Link>
        <Link className="nav-link" to="/sale">
          <button>Sale</button>
        </Link>
      </div>
    </div>
  );
};
