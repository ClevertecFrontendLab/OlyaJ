export const blogBoxStyle = {
    w:{ base:"328px",md:"728px",lg:"1360px"},
    borderRadius: "16px",
    background: "var(--Lime-300, #C4FF61)",
    display: "flex",
    flexDirection: "column",
    p: {base:"12px",md:"12px",lg:"24px"},
    gap:{base:"2px", md:"2px", lg:"32px"},
    mt:"64px"
} as const 


export const headingButtonBlogBoxStyle = {
    display: "grid",
    gridTemplateColumns: { base: "1fr", lg: "1fr 1fr" },
    alignItems: "center",
    textAlign: { base: "center", lg: "left" },
    mb: "12px"
} as const;  


export const headingBlogStyle = {
    fontFamily: "Inter",
    fontSize: {base:"24px", md:"24px", lg:"32px"},
    fontWeight: {base:"500", md:"500", lg:"400"}, 
    lineHeight: "40px",
    justifySelf:{base: "start",  md:"start", lg: "start" },
}


export const linkStyle = {
    fontFamily: "Inter",
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "28px",
    justifySelf: {base: "center", md:"center", lg: "flex-end" }
}


export const cardsBlogBoxStyle = {
    display:"flex", 
    flexDirection:{base:"column", md:"row", lg:"row"}, 
    gap:{base:"12px", md:"12px", lg:"16px"}
} as const 


export const mobileLinkBoxStyle = {
    display:{ base: "flex", lg: "none" },
    justifyContent:"center",
    mt:"8px"
}



