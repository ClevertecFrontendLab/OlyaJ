export const nutritionalValueBoxStyle = {
    display:"flex",
    flexDirection:{base:"column", md:"row", lg:"row"},
    gap: {base:"12px", md:"12px", lg:"24px"},
} as const 


export const nutritionSquareBoxStyle = {
    display: "flex",
    justifyContent:{base:"space-between",md:"center", lg:"center"},
    alignItems:"center",
    flexDirection:{base:"row", md:"column", lg:"column"},
    borderRadius: "16px",
    border: "1px solid var(--blackAlpha-200, rgba(0, 0, 0, 0.08))",
    w:{base:"328px", md:"173px", lg:"149px"},
    h:{base:"64px", md:"136px", lg:"136px"},
    px:{base:"16px"},
    gap:{md:"12px", lg:"12px"}
} as const 


export const labelTextNutritionBoxStyle = {
    fontSize:"14px",
    color: "var(--blackAlpha-600, rgba(0, 0, 0, 0.48))",
}