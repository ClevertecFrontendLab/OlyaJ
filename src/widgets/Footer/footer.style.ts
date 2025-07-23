export const footerBoxStyle = {
    display: "flex",
    flexDirection: "column", 
    w:{base:"328px", md:"760px", lg:"1360px"},
    mt:{base:"32px", md:"32px", lg:"40px"},
    px:{base:"16px", md:"2px",lg:"256px"}
} as const 


export const titleDescriptionBoxStyle = {
    display: "flex", 
    flexDirection: { base: "column", md: "column", lg: "row" }, 
    justifyContent: { md: "space-between", lg: "space-between" },
    w:{base:"328px", md:"760px", lg:"1360px"},
    mb:{base:"16px", md:"16px", lg:"24px"}
} as const


export const textFooterStyle = {
    fontSize: {base: "14px", md:"14px", lg:"16px"},
    display:"flex",
    w:{base:"328px", md:"728px", lg:"668px"},
    flex:1
}


export const textCardsFooterStyle = {
    display:"flex",
    flexDirection:{base:"column", md:"row", lg:"row"}, 
    gap:{base:"12px", md:"12px", lg:"24px"},
} as const 


