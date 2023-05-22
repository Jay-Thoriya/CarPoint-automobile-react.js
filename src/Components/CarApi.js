import { useEffect, useState } from "react";
//"https://imdb-api.com/en/API/Top250Movies/k_dhngf99h" api 250 info


function CarApi() {
    const [CarData, setData] = useState([]);

    let API = "http://localhost:8000/Car";

    async function fetchAPIData(url) {
        try {
            const result = await fetch(url);
            const CarData = await result.json();
            setData(CarData);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        fetchAPIData(API);
    }, [API]);


    return { CarData }

}

export { CarApi };