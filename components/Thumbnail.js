import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef((props, ref) => {
    const url = 'http://image.tmdb.org/t/p/original'
    return (
    <div ref={ref} className="group cursor-pointer p-2 
        transition duration-200 ease-in transform 
        sm:hover:scale-105 hover:z-50">
        <Image 
        src={!props.result.backdrop_path?"/logo512.png":
            url + props.result.backdrop_path 
            || props.result.poster_path 
            || url + props.result.poster_path 
            }
        alt={props.result.id} 
        className="rounded-lg" 
        layout='responsive' 
        height={1080} 
        width={1920}
        priority
        />
        <div className="p-2">
            <h2 className="mb-1 text-2xl text-white 
                transition-all duration-100 ease-in-out 
                group-hover:font-bold">
                {props.result.title || props.result.original_name}
            </h2>
            <p className="max-w-md line-clamp-2">{props.result.overview}</p>
            <p className="flex items-center opacity-0 group-hover:opacity-100">
                {console.log(props.result)}
                <span className="text-purple-500">
                    <span className="p-2">Release Date:</span>
                    {props.result.release_date || props.result.first_air_date}
                </span>
                <span className="text-orange-500">
                    <span className="p-2 pl-5">Score:</span> {props.result.vote_average} <span>/10</span>
                </span>
                <span className="text-blue-500 flex">
                    <ThumbUpIcon className="h-5 ml-5 mx-2"/> {props.result.vote_count}
                </span>
            </p>
        </div>
    </div>
    )
})
export default Thumbnail;
