export const subcategoryBoxStyle = {
    maxW:{base: "360px", md: "768px", lg: "100%" },
    w:"100%",
    mx:"auto",
}

export const cardsBoxStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center", 
    gap: {base:"16px",lg:"24px"},
    maxW: "1360px",       
    mx: "auto",                
} as const;


export const subgategoryButtonStyle = {
    w:"152px",
    h:"40px",
    mt:{base:"12px", md:"12px", lg:"24px"},
    borderRadius: "6px",
    background: "var(--Lime-400, #B1FF2E)",
    _hover: {
        background: "#D1FF6A", 
    },
    _active: {
        background: "#D1FF6A", 
    },
    transition: "background 0.2s ease",
}