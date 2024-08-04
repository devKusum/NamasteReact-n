import UserClass from "./UserClass";


const About = () => {

    return (

        <div className="about">
                    <h1 className="aboutTitle">About us</h1>
                    <h2 className="aboutTeam">Our team members:</h2>
                    <UserClass name = {"kussu"} location = {"Hyderabad, dipija prvt lmtd."}/>
        </div>
    );


};

export default About;
