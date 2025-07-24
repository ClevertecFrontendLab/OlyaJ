export const verticalCardTabletStyles = {
    display:"flex",
    flexDirection: "row",
    w: {base:"328px", md:"356px"}, 
    h: "128px", 
    gap:"6px",
    borderRadius: "8px",
    border: "1px solid var(--blackAlpha-200, rgba(0, 0, 0, 0.08))",
    background: "var(--white, #FFF)",
    overflow:"hidden",
} as const 


export const imageVerticalCardTabletStyle = {
    h:"128px",
    w:"158px",
}

export const titleIconsStyle = {
    display: "flex", 
    flexDirection: "column",
    w:{base:"148px",md:"178px"},
} as const


export const verticalCardTitleStyle = {
    display: "flex", 
    flexDirection:"column",
    justifyContent: "space-between",
    p:"8px",
} as const 


export const titleStyle = {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "24px",
    h: "48px", 
    w: {base:"150px",md:"160px"},
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
}


export const buttonVerticalCardStyle = {
    display:"flex",
    flexDirection: "row", 
    gap: "12px",
    justifyContent: "end"
} as const 


export const buttonVerticalCardTabletStyle = {
    h: "24px",
    w: "70px",
    color: "white",  
    bg: "black",          
    fontSize: "12px",
    fontWeight: "500",
    lineHeight: "16px",
    _hover: {
        bg: "gray.800",   
    },
    _active: {
        bg: "gray.900",    
    },
}


