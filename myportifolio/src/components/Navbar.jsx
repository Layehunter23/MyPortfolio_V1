import Education from "../pages/Education";
import Experience from "../pages/Experience";
import Profile from "../pages/Profile";
import Skills from "../pages/Skills";

const NavBar = () =>{

return (
<>
<div className="flex flex-row justify-end bg-amber-400 rounded-2xl gap-5 w-fit p-2 mt-5 ml-auto mr-10">
    <a><h3>Profile</h3></a>
    <a><h3>Education</h3></a>
    <a><h3>Experiences</h3></a>
    <a ><h3>Skills</h3></a>
    <a><h3>Contact</h3></a>
</div>
</>
);

}

export default NavBar