const Cards = ({courses}) => {
    let allCourses=[];
    //all courses data in one array
    const getAllCourses =()=>{
        Object.values(courses).forEach( (courseCategory) => {
            courseCategory.forEach( (course)=>{
                allCourses.push(course);
            })
        });
    }
    return (
        <div>
            courses.map
        </div>
    );
}
export default Cards;