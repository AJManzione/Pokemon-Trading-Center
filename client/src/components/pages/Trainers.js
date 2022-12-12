import React, {useState, useEffect} from 'react'

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

  return (
    <div>
        {JSONdata.map((trainers, i) => {
            return (
            <img 
                width='50px'
                src={trainers.trainer_sprite}>
            </img>
            )
        })}
    </div>
  )
}
