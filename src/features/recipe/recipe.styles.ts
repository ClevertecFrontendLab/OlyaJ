export const recipePageStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    mt:{base:"16px", md:"18px", lg:"56px"},
    maxW:{base:"328px", md:"728px", lg:"1360px"}
} as const 


export const pictureDescriptionBoxStyle = {
    display: "flex",
    flexDirection: {base:"column", md:"row", lg:"row"},
    gap:{base:"16px", md:"16px", lg:"24px"},
} as const 


export const descriptionBoxStyle = {
    display: "flex",
    flexDirection:"column",
    h:{base:"344px", md:"224px", lg:"410px"},
    justifyContent: "space-between",
} as const


export const imageRecipeStyle = {
    w:{base:"328px", md:"232px", lg:"553px"},
    h:{base:"224px", md:"224px", lg:"410px"},
    borderRadius: "8px",
    background: "rgba(0, 0, 0, 0.08)",
}


export const categoriesIconsStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"start", 
    w:{base:"328px",md:"480px", lg:"783px"}
} as const 


export const recipeCategoriesStyle = {
    display: "flex", 
    flexDirection: { base: "column", md: "row", lg: "row"},
    gap: {base:"2px", md:"6px",lg:"8px"}, 
    flexWrap: "wrap", 
} as const;


export const categoryBoxStyle = {
    display:"inline-block",
    borderRadius: "4px",   
    background: "#FFFFD3",
    py: "1px",
    px: "4px",
    fontSize:"14px"
} 


export const titleDescriptionBoxStyle = {
    display: "flex",
    flexDirection:"column",
    gap:{base:"16px", md:"16px", lg:"24px"},
    w:{base:"328px", md:"480px", lg:"503px"}
} as const 


export const titleRecipeStyle = {
    fontSize:{base:"24px", md:"24px", lg:"48px" },
    fontWeight:"700",
    lineHeight:{base:"32px", md:"32px", lg:"48px"},
}


export const descriptionRecipeStyle = {
    fontSize:"14px",
    fontWeight:"400",
}




