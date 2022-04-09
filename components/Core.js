import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Core = (props) => {
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 
        xxxl:flex flex-wrap justify-center">
            {props.results.map(result => (
                <Thumbnail key={result.id} result={result}/>
            ))}
        </FlipMove>
    )
}
export default Core;
