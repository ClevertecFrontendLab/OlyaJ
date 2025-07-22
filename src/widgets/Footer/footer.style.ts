export const footerBoxStyle = {
    display: "flex",
    flexDirection: "column", 
    mt:{base:"32px", md:"32px", lg:"40px"},
    w:{lg:"1360px"},
    px:{base:"16px", md:"2px",lg:"256px"}
} as const 


export const titleDescriptionBoxStyle = {
    display:"flex", 
    flexDirection: {base:"column", md:"row", lg:"row"}, 
    justifyContent:"space-between",
} as const 