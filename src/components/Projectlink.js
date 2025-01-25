
const Projectlink = ({projectImage, projectName, projectTools}) =>{

    return (
        <div>
            <img src={projectImage} alt="projectImage"/>
            <h1 style={{fontSize: "20px",padding:"20px 0 7px 0"}}>{projectName}</h1>
            <h1 style={{fontSize: "12px"}}>{projectTools}</h1>
        </div>
    )
}

export default Projectlink;