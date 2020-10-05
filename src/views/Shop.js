import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Shop() {

    useEffect(()=>{
        fetchItems();
    },[])

    const [item_list, setItem_list] = useState([]);

    const fetchItems = async()=>{
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const data_items = await data.json();
        console.log(data_items);
        setItem_list(data_items.data);
    }

  return (
    <div className="App">
       {item_list.map((data)=>{
           const {images} = data.item
            return(
                <Link to={`/shop/${data.itemId}`} key={data.itemId}>
                    <div className="item_list">
                        <img src={images.icon} alt={data.item.name}/>
                        <h2>{data.item.name}</h2>
                    </div>
                </Link>
            )
       })}
    </div>
  );
}

export default Shop;
