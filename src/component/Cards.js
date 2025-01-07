import Card from "./Card";

const Cards = ({ courses }) => {
    console.log(courses);
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
                getAllCourses().map((course) => {
                   return <Card key={course.id} course={course}/>
                })
            }
        </div>
    );
}
export default Cards;