export const footerTextCardStyle = {
    display: "flex",
    flexDirection: "column",
    w: {base:"328px", md:"232px", lg:"282px"},
    h:{base:"168px", md:"168px", lg:"192px"},
    borderRadius: "8px",
    border: "1px solid var(--blackAlpha-200, rgba(0, 0, 0, 0.08))",
    background: "var(--white, #FFF)",
    gap:"24px",
    p:{base:"12px", md:"12px", lg:"16px"}
} as const 


export const titleDescriptionBoxStyle = {
    display: "flex",
    flexDirection:"column",
    gap:"8px",
    w: {base: "304px", md:"208px", lg:"250px"}
} as const 


export const titleFooterStyle = {
    fontSize: {base:"16px", md:"16px", lg:"20px"},
    fontWeight: "500",
    lineHeight: {base: "20px", md:"20px", lg:"28px"},
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
} 


export const cardsFooterBoxStyle = {
    display: "flex",
    w:{base:"328px",md:"728px",lg:"1360px"},
    flexDirection: {base:"column", md:"row", lg:"row"},
    justifyContent: "space-between",
    gap: {base:"12px"}
} as const 


export const descriptionFooterStyle = {
    h: "64px",
    w: { base: "304px", md: "208px", lg: "250px" },
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    webkitLineClamp: 3,
    webkitBoxOrient: "vertical",
} as const


export const categoryIconsFooterBoxStyle = {
    display:"flex",
    flexDirection:"row",
    justifyContent: "space-between",
    w:{base:"304px", md:"208px", lg:"244px"},
} as const 


export const longCardsBoxStyle = {
    display: "flex",
    flexDirection: "column",
    gap:{base:"12px", md:"6px", lg:"12px"},
} as const 
