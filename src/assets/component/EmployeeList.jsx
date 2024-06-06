import EmployeeListItem from "./EmployeeListItem"

const Employees = [
    {
        Name: "James King",
        Description: "President and CEO"
    },
    {
        Name: "Julie Taylor",
        Description: "VP of Marketing"
    },
    {
        Name: "Eugene Lee",
        Description: "CFO"
    },
    {
        Name: "John Williams",
        Description: "VP of Engineering"
    },
    {
        Name: "Ray Moore",
        Description: "VP of Sales"
    },
    {
        Name: "Paul Jones",
        Description: "QA Manager"
    }
]

function EmployeeList () {
    return (
        <>
          <ul>
            {Employees.map((e) => {
                return <EmployeeListItem name={e.Name} description={e.Description}/>
            })}
            
          </ul>
        </>
    )
}


console.log("Hello World!");







export default EmployeeList