
const Tool = ({title, noYearExperience}) => {

    return (
        <div style={{ }}>
            <h1 style={{
                width: "124px",
                height: "56px",
                fontSize: "48px",

            }}
        >
                {title}
            </h1>
            <p style={{textDecorationColor: "black"}}>
                {noYearExperience}
            </p>

        </div>
    )
}

export default Tool;