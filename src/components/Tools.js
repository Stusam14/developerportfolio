import Tool from "./Tool";

const Tools = ()=>{


    const toolData = [
        {
            key:1,
            title: "HTML",
            noYearExperience: "4 Years Experience",
        },
        {   
            key:2,
            title: "CSS",
            noYearExperience: "4 Years Experience",
        },
        {   
            key:3,
            title: "JavaScript",
            noYearExperience: "4 Years Experience",
        },
        {
            key:4,
            title: "Accessibility",
            noYearExperience: "4 Years Experience",
        },
        {   
            key:5,
            title: "React",
            noYearExperience: "3 Years Experience",
        },
        {
            key:6,
            title: "Sass",
            noYearExperience: "3 Years Experience",
        }
    ];
    return (
        <div style={{
            display: "grid" , 
            gridTemplateColumns: "1fr 1fr 1fr", 
            justifyContent: "space-between",
            borderTop: "3px solid #979797", 
            marginTop:"72px"}}>
            {toolData.map((tool)=>
                <Tool key={tool.key} title={tool.title} noYearExperience={tool.noYearExperience}/>
            )}
        </div>
    )
}

export default Tools;