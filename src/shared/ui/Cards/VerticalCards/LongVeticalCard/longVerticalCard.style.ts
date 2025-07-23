export const longVerticalCardStyle = {
    display:"flex",
    justifyContent:"space-between",
    borderRadius: "8px",
    border: "1px solid var(--blackAlpha-200, rgba(0, 0, 0, 0.08))",
    background: "var(--white, #FFF)",
    w:{base:"328px",md:"240px", lg:"668px"},
    h:{base:"52px", md:"56px", lg:"56px" },
    p:{base:"12px", md:"12px", lg:"24px"},
    alignItems:"center",
} as const 


export const titleVerticalCardStyle = {
    w: { base: "194px", md: "106px", lg: "485px" },
    fontSize: { base: "18px", md: "18px", lg: "20px" },
    whiteSpace: "nowrap",
    overflow: "hidden",      
    textOverflow: "ellipsis"
} as const


export const buttonVerticalCardStyle = {
    size:"sm",
    variant:"outline",
    color:"green.600",
    borderColor:"green.500",
    _hover: { bg: "green.50" }
} 