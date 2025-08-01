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
    w:{base:"328px",md:"480px", lg:"783px"}
} as const 


export const recipeCategoriesStyle = {
    display: "flex", 
    flexDirection: { base: "column", md: "row", lg: "row"},
    gap: {base:"2px", md:"6px",lg:"8px"}, 
    flexWrap: "wrap", 
} as const;






