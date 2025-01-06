const Filter = ({ filterData }) => {
    return (
        <div className="filter-bar">
            {
                filterData.map((data) => {
                    return ( <button key={data.id} > {data.title} </button> );
                })
            }
        </div >
    );
}
export default Filter;