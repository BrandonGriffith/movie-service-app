import Thumbnail from "./Thumbnail";

const Core = (props) => {
    return (
        <div>
            {props.results.map(result => (
                <Thumbnail key={result.id} result={result}/>
            ))}
        </div>
    )
}
export default Core;
