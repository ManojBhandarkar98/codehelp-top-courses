import { FcLike } from "react-icons/fc"
const Card = ({course} ) => {
    console.log(course);
    return (
        <div className="card">
            <div>
                <img src={course.image.url}></img>
                <div>
                    <button>
                        <FcLike fontSize="1.75rem" />
                    </button>
                </div>
            </div>
            <div>
                <p>{course.title}</p>
                <p>{course.description}</p>
            </div>
        </div>
    );
}
export default Card;