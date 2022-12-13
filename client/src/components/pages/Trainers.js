import React, {useState, useEffect} from 'react'
import { UPDATE_SPRITE } from "../../utils/mutations";

export default function Trainers() {


    const [JSONdata, setJSONData] = useState([]);

    const getData = () => {
        fetch("./trainers.json", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            setJSONData(myJson);
        });
    };
    useEffect(() => {
        getData();
    }, []);

    const [updateSprite, { updateSpriteError, updateSpriteData }] = useMutation(UPDATE_SPRITE);

  return (

    <div className='dashboard-bg'>
        <div className='user-menu-bg container p-1'>
            <h4 className='text-center mt-5'>Choose A Sprite!</h4>
            <div className='container m-5'>
        {JSONdata.map((trainers, i) => {
                    return (               
                            <img 
                                style={{cursor: 'pointer'}}
                                className='m-1'
                                width='100px'
                                src={trainers.trainer_sprite}
                                onClick={() => console.log(`working` + i)}>
                            </img>
                    )
                })}
            </div>
        </div>
    </div>


  )
}



