import Link from "next/link";
const AboutStudent=()=>{
    return (
        <div>
            <h1>About Student</h1><br/>
            <Link href={"/about"}>go to about page</Link>
        </div>
    )
}

export default AboutStudent;