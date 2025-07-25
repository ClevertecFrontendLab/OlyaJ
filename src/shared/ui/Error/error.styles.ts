export const errorBoxStyle = {
    position:"fixed",
    bottom: {base:"85px", md:"85px", lg:"20px"},
    left:"50%",
    transform:"translateX(-50%)",
    width:{base:"328px", md:"328px", lg:"400px"},
    h:"72px",
    zIndex:"1000",
    background: "var(--red-500, #E53E3E)",
    px:"16px", 
    py:"10px",
} as const 


export const alertErrorStyle = {
    status:"error",
    padding:"4px",
    background: "var(--red-500, #E53E3E)",
} as const 


export const titleErrorStyle = {
    fontSize:"16px", 
    fontWeight:"700",
    fontHeight:"24px", 
    color: "white"
}


export const descritpionErrorStyle = {
    fontSize:"16px", 
    fontWeight:"400",
    fontHeight:"24px", 
    color:"white"
}


export const closeButtonStyle = {
    position:"absolute",
    right:"2px",
    top:"2px", 
    color: "white",
} as const

