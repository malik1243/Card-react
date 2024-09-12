import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [data, setData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
    <div>Product # {id}</div>
    <div className='flex justify-center align-middle ml-7 shadow-xl' style={{
        border:"2px solid black",
        borderRadius:"20px",
        width:"360px"
    }}>
        {data ? (
            <div className=''>
                <img className='relative left-[76px]' width={"160"} src={data.image} alt="" />
            <h1 className='pl-2'>Category:{data.category}</h1>
            <p className='pl-2 font-semibold'>Description:{data.description}</p>
            <p className='pl-2 font-bold'>Price:{data.price}</p>
            </div>
        ): <h1>Loading...</h1>}
    </div>
    </>
    )
  }
export default SingleProduct;