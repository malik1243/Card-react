import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const singleUser = (item) => {
    navigate(`singleProduct/${item.id}`);
  };
  return (
    <>
     <h1 className='text-center'>Hello students</h1>
    <div style={{
      width:"360px"
    }} className='flex-wrap flex'>
    {
      data ? data.map((item)=>{
        return <div key={item.id} style={{
          border: "1px solid black",
          margin: "20px",
          padding: "20px"
        }}>
          <img width={"160"} src={item.image} alt="" />
          <h3>{item.category}</h3>
          <p>{item.description}</p>
          <button className='border rounded-lg capitalize  mt-4 p-3   font-bold bg-stone-400 text-black hover:bg-white hover:text-teal-950 hover:border-gray-600 hover:border-2' onClick={()=> singleUser(item)}>show more</button>
        </div>
      }): <h1>Loading..</h1>
    
    }
    </div>
    </>
  );
};

export default Home;