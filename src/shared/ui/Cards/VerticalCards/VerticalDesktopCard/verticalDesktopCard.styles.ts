export const verticalCardBoxStyle = {
    w: "668px",
    display: "flex",
    flexDirection: "row",
    borderRadius: "8px",
    border: "1px solid var(--blackAlpha-200, rgba(0, 0, 0, 0.08))",
    background: "var(--white, #FFF)",
} as const


export const categoriesVerticalBoxStyle = {
    w:"274px",
    display: "flex",
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "flex-start",
} as const 


export const verticalCardImageStyle = {
    w: "346px",
    minH:"220px",
}


export const verticalCardDescriptionStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    mx: "24px",
    my: "20px",
} as const


export const verticalCardTitleStyle = {
    w: "274px",
    fontSize: "20px",
    fontWeight: "500",
    lineHeight: "28px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
}


export const buttonBoxStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: "8px"
} as const


export const saveButtonStyle = {
    variant:"outline",
    size:"sm",
    borderColor:"black",
    color:"black"
}


export const cookButtonStyle = {
    variant:"solid",
    size:"sm",
    bg:"black",
    color:"white",
    _hover:{ bg: 'gray.800' },
}