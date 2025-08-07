export const newRecipeDesktopCardStyle = {
    w: "322px",
    minH: "424px",
    borderRadius: "8px",
    border: "1px solid var(--blackAlpha-200, rgba(0, 0, 0, 0.08))",   
    display: "flex",
    flexDirection: "column",
    overflow:"hidden",
    gap: "8px",
    pb:"8px"
} as const


export const imageDesktopStyle = {
    h:"230px",
}


export const descriptionBoxStyle = {
    display: "flex",
    flexDirection: "column",
    gap:"24px",
    px: "24px",
} as const 


export const titleDescriptionStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
} as const


export const titleStyle = {
    fontSize: "20px",
    fontWeight: "500",
    lineHeight: "28px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
} 


export const descriptionStyle = {
    h:"64px",
    w: "274px",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
} as const


export const categoryIconsBoxStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    w: "274px",
} as const


export const categoriesBoxStyle = {
    display: "flex",
    flexWrap: "wrap",        
    gap: "4px",              
    alignItems: "flex-start", 
} as const 


export const boxTextStyle = {
    display:"inline-block",
    borderRadius: "4px",   
    background: "var(--Lime-150, #D7FF94)",
    py: "1px",
    px: "4px",
} 


export const iconStyle = {
    w: {base:"12px", md:"12px", lg:"16px"},
    h: {base:"12px", md:"12px", lg:"16px"},
  }
  

export const categoryStyle = {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
}


export const likeSaveIconsBox = {
    display: "flex",
    flexDirection: "row",
    gap: "8px",
    minW: "74px",
} as const


export const iconLikeSaveBoxStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "6px",
    alignItems: "center",
} as const


