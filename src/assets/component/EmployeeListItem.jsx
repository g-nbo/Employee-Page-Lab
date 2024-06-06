


function EmployeeListItem(props) {
    return (
        <>

            <li>
                <div>
                    <img src="/avatar_icon_placeHolder.png" alt="avatar Icon" />
                </div>
                <div>
                    {props.name}
                    <br />
                    {props.description}
                </div>

            </li>
            <br />
        </>
    )
}

export default EmployeeListItem