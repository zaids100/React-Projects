import { Link } from 'react-router-dom';

function Card({ obj }) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2 sm:mx-5 my-3">
            <Link to="">
                <img className="rounded-t-lg w-full" src={obj.image} alt="Insert Api url" />
            </Link>
            <div className="p-4 sm:p-5">
                <Link to="">
                    <h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{obj.title}</h5>
                </Link>
                <p className="mb-3 font-normal text-sm sm:text-base text-gray-700 dark:text-gray-400">{obj.description}</p>
                <a href={obj.url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default Card;
