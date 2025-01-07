import Card from "./Card";

const Cards = ({ courses }) => {
    let allCourses = [];
    //all courses data in one array
    const getAllCourses = () => {
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })
        });
        return allCourses;
    }
    return (
        <div>
            {
                allCourses.map((course) => {
                    <Card course={course}/>
                })
            }
        </div>
    );
}
export default Cards;