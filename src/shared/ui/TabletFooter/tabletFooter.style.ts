export const tabletFooterBoxStyle = {
    display: {base:"flex", md:"flex", lg:"none"},
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center",
    w: "100%",
    maxW: { base: "360px", md: "768px" },
    h: "84px",
    bg: "#FFFFD3",
    px: "4",
    position: "fixed",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1000,
} as const;


export const footerItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
} as const;


export const footerIconStyle = {
    boxSize: "24px",
    mb: "4px",
} as const;


export const footerTextStyle = {
    fontSize: "12px",
    fontWeight: 500,
    color: "black",
} as const;
