import React from "react";
import Card from "../Card/Card";
import { useLoaderData } from "react-router-dom";
function Technology() {
    const data=useLoaderData();
    return (
        <>
            <div className="cards-list grid auto-cols-fr gap-4">
                 {
                    data.map((obj,id)=>(
                        <Card key={id} obj={obj}/>
                    ))
                 }
            </div>
        </>
    );
}

export default Technology;

export const technologyInfoLoader=async()=>{
    const response = await fetch('https://api.currentsapi.services/v1/latest-news?category=technology&apiKey=mPn-n2zxSkYcGMSdkS5SYTcaeWuxW7fzjC4eU5oxUd4eqc4f');
    const news = await response.json();

    // Filter the news items to include only those with valid images
    const newsWithImages = news.news.filter(item => item.image && item.image !== 'None');

    return newsWithImages;
}
