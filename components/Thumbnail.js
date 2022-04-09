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
        layout='responsive' 
        height={1080} 
        width={1920}
        priority
        />
        <div className="p-2">
            <p className="truncate max-w-md">{props.result.overview}</p>
            <h2 className="mt-1 text-2xl text-white 
                transition-all duration-100 ease-in-out 
                group-hover:font-bold">
                {props.result.title || props.result.original_name}
            </h2>
            <p className="flex items-center opacity-0 group-hover:opacity-100">
                {props.result.media_type} <span>__</span>
                {props.result.release_date || props.result.first_air_date}
                <ThumbUpIcon className="h-5 ml-5 mx-2"/> {props.result.vote_count}
            </p>
        </div>
    </div>
    )
})
export default Thumbnail;
