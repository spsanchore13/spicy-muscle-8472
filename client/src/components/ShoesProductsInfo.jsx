import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ShoesProductsInfo = ({item, location}) => {
    const navigate = useNavigate()
    const [ig, setIg] = useState(true);
    const handleHover = () => {
        setIg(!ig);
    };
    const handleOut = () => {
        setIg(!ig);
    };
    const handleClick=(id)=>{
        navigate(`/${location}/${id}`);
    }
  return (
    <div>
        <div style={{cursor:"pointer"}} >
            <div
            onClick={()=>handleClick(item.id)}
            // className={styles.image}
            key={item.id}
            style={{ position: "relative",
            // border:"1px solid red"
            }}
            >
                <img
                onMouseOver={handleHover}
                onMouseOut={handleOut}
                style={{
                    height: "350px",
                    width: "80%",
                    // border:" 1px solid red"
                }}
                // src={ig ? item.product_images[0] : item.product_images[0]}
                src={item.product_images[0].image}
                alt="image"
                />
                <p>{item.name} </p>
                <p>${item.product_price}</p>
                <p>${item.colors[0].color}</p>
                <div>Quickshop</div>
            </div>
        </div>
        </div>
  )
}

export default ShoesProductsInfo