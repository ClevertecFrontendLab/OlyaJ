export const boxStyles = {
    display: "flex",
    flexDirection: "column",
    overflow:"hidden",
    gap: {base:"12px", md:"12px", lg:"24px"},
    px:"16px",
    position: "relative",
    justifyContent: "start"
} as const 


export const headingStyle = {
    fontSize: {base:"24px", md:"24px", lg:"48px"}, 
    fontWeight: "500",
    lineHeight: {base:"32px", md:"32px", lg:"48px"}
}

export const swiperBox = {
    w: "100%", 
    maxW: {base:"328px", md:"728px",lg:"1340px"}, 

    position: "relative",
    overflow: "hidden", 
  } as const
  

export const leftArrowStyle = {
    w:"48px",
    h:"48px",
    position:"absolute",
    top:"50%",
    left:"0",
    transform:"translateY(-50%)",
    zIndex:"10",
    cursor:"pointer",
    display: {base:"none", md:"none"},
} as const 


export const rightArrowStyle = {
    w:"48px",
    h:"48px",
    position:"absolute",
    top:"50%",
    right:"0",
    transform:"translateY(-50%)",
    zIndex:"10",
    cursor:"pointer",
    display: {base:"none", md:"none"},
} as const 
  