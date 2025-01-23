import Tool from "./Tool";

const Tools = ()=>{


    const toolData = [
        {
            title: "HTML",
            noYearExperience: "4 Years Experience",
        },
        {
            title: "CSS",
            noYearExperience: "4 Years Experience",
        },
        {
            title: "JavaScript",
            noYearExperience: "4 Years Experience",
        },
        {
            title: "Accessibility",
            noYearExperience: "4 Years Experience",
        },
        {
            title: "React",
            noYearExperience: "3 Years Experience",
        },
        {
            title: "Sass",
            noYearExperience: "3 Years Experience",
        }
    ];
    return (
        <div>
            {toolData.map((tool)=>
                <Tool title={tool.title} noYearExpereince={tool.noYearExperience}/>
            )}
        </div>
    )
}

export default Tools;