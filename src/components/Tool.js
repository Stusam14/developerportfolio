
const Tool = ({title, noYearExperience}) => {

    return (
        <div style={{ height: "98px" , width:"345px", marginTop: "72px" }}>
            <h1 style={{
                width: "124px",
                height: "56px",
                fontSize: "48px",

            }}
            >
                {title}
            </h1>
            <p style={{textDecorationColor: "red",fontSize:"18px", marginTop: "14px"}}>
                {noYearExperience}
            </p>

        </div>
    )
}

export default Tool;