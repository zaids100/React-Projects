import React from "react";
import Card from "../Card/Card";
import { useLoaderData } from "react-router-dom";

function Business() {
    const data=useLoaderData();
    return (
        <div className="cards-list grid grid-cols-4 gap-4">
            {
                data.map((obj, id) => (
                    <Card key={id} obj={obj} />
                ))
            }
        </div>
    );
}

export default Business;

export const businessInfoLoader = async () => {
    const response = await fetch('https://api.currentsapi.services/v1/latest-news?category=business&apiKey=mPn-n2zxSkYcGMSdkS5SYTcaeWuxW7fzjC4eU5oxUd4eqc4f');
    const news = await response.json();

    // Filter the news items to include only those with valid images
    const newsWithImages = news.news.filter(item => item.image && item.image !== 'None');

    return newsWithImages;
}
