export const newRecipeBoxCardStyle = {
    display: "flex",
    flexDirection: "column",
    w:"158px",
    h:"220px",
    borderRadius: "8px",
    border: "1px solid var(--blackAlpha-200, rgba(0, 0, 0, 0.08))",
    background: "var(--white, #FFF)",
    overflow: "hidden",
} as const 


export const imageRecipeBoxCardStyle ={
    w: "158px",
    h:"128px"
}


export const titleIconsBoxStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    h:"48px",
    p:"8px",
} as const 



export const titleRecipeBoxStyle = {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "24px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    h:"48px"
} 
