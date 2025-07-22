export const blogBoxCard = {
    w:{base:"304px", md:"226px", lg:"426px"},
    borderRadius: "8px",
    border: "1px solid var(--blackAlpha-200, rgba(0, 0, 0, 0.08))",
    background: "var(--white, #FFF)",
    display: "flex",
    flexDirection:"column",
    p:{base:"16px", md:"16px", lg:"24px"},
    gap:{base:"8px", md:"8px", lg:"12px"},
} as const 


export const avatarNameBox = {
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    gap:{base:"8px", md:"8px", lg:"12px"},
    w:{base:"272px", md:"194px", lg:"378px"}
} as const 


export const avatarStyle = {
    w: {base:"32px", md:"32px", lg:"48px"},
    h: {base:"32px", md:"32px", lg:"48px"},
    borderRadius: "50%", 
    background: "var(--gray-400, #A0AEC0)",
}


export const nameEmailStyle = {
    w:{base:"232px", md:"154px", lg:"318px"},
    display: "flex",
    flexDirection:"column",
} as const 


export const nameStyle = {
    fontFamily: "Inter",
    fontSize: {base:"16px", md:"16px", lg:"18px"},
    fontWeight: "500",
    lineHeight: {base:"24px", md:"24px", lg:"28px"},
    whiteSpace: "nowrap", 
    overflow:"hidden",
    textOverflow:"ellipsis"
}


export const emailStyle = {
    fontFamily: "Inter",
    fontSize: {base:"12px", md:"12px", lg:"14px"},
    fontWeight: "400",
    lineHeight: {base:"16px", md:"16px", lg:"20px"},
    whiteSpace: "nowrap", 
    overflow:"hidden",
    textOverflow:"ellipsis",
    color: "var(--blackAlpha-700, rgba(0, 0, 0, 0.64))",
}


export const descriptionBlogStyle = {
    h:"64px",
    w:{base:"272px", md:"194px", lg:"378px"},
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
} as const




