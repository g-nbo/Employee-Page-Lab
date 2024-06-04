import EmployeeList from "./EmployeeList"
import SearchBar from "./SearchBar"
import Header from "./Header"

function Homepage() {
    return (
        <>
            <div>
                <Header />
                <SearchBar />
                <EmployeeList />
            </div>
        </>
    )
}

export default Homepage