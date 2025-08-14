export const nutritionalValueBoxStyle = {
    display: "flex",
    flexDirection: { base: "column", md: "row", lg: "row" },
    gap: { base: "12px", md: "12px", lg: "24px" },
} as const;


export const nutritionSquareBoxStyle = {
    display: { base: "grid", md: "flex" },
    gridTemplateColumns: { base: "1fr 64px 64px" }, 
    columnGap: { base: "12px" },
    alignItems: "center",
    justifyItems: { base: "stretch" },
    justifyContent: { md: "center", lg: "center" },
    flexDirection: { base: "unset", md: "column", lg: "column" },
    borderRadius: "16px",
    border: "1px solid var(--blackAlpha-200, rgba(0,0,0,.08))",
    w: { base: "328px", md: "173px", lg: "149px" },
    h: { base: "64px", md: "136px", lg: "136px" },
    px: { base: "16px" },
    gap: { md: "12px", lg: "12px" },
} as const;


export const labelTextNutritionBoxStyle = {
    fontSize: "14px",
    color: "var(--blackAlpha-600, rgba(0,0,0,.48))",
    textAlign: { base: "left", md: "center" },
} as const;


export const valueTextNutritionStyle = {
    fontSize: { base: "24px", md: "36px", lg: "36px" },
    fontWeight: "500",
    color: "var(--Lime-800, #134B00)",
    lineHeight: { base: "32px", md: "40px", lg: "40px" },
    textAlign: { base: "center", md: "center" }, 
    justifySelf: { base: "center" },       
} as const;


export const unitTextNutritionStyle = {
    fontSize: { base: "12px", md: "14px", lg: "14px" },
    color: "var(--blackAlpha-900, rgba(0,0,0,.92))",
    textAlign: { base: "center", md: "center" }, 
    justifySelf: { base: "center" },
} as const;

