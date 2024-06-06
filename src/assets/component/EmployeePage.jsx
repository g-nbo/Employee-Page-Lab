import Header from "./Header"
function EmployeePage() {
    return (
        <>

            <div style={{textAlign: 'left'}}>
                <Header text="Employee"/>
                <li>
                    <div>
                        <img src="/avatar_icon_placeHolder.png" alt="avatar Icon" style={{width: "90px"}}/>
                    </div>
                    <div>
                        Julie Taylor
                        <br />
                        VP of Marketing
                    </div>
                </li>
                <br />


                <hr />
                Call Office
                <br />
                781-000-0002
                <hr />
                Call Mobile
                <br />
                617-000-0002
                <hr />
                SMS
                <br />
                617-000-0002
                <hr />
                Email
                <br />
                jtaylor@fakemail.com
                <hr />
            </div>
        </>
    )
}

export default EmployeePage