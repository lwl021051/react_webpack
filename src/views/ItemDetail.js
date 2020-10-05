import React,{useEffect, useState} from 'react';
import '../App.css';

function ItemDetail({match}) {

    const [item_data, setItem_data] = useState({
        item:{
            images:{
                
            }
        }
    });

    useEffect(()=>{
        fetchItem();
    },[])

    const fetchItem = async ()=>{
        const data_item =await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const item = await data_item.json();
        setItem_data(item.data);
    }

  return (
    <div className="App">
        <div className="item_detail">
            <h1>{item_data.item.name}</h1>
            <img src={item_data.item.images.icon} alt={item_data.item.name}/>
        </div>
    </div>
  );
}

export default ItemDetail;
