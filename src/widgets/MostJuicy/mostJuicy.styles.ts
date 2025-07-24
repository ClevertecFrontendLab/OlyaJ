export const boxJuicyStyle = {
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    gap:"24px",
    maxW:"1360px",
    mt:"40px",
} as const 


export const headingButtonBoxStyle = {
    display: "grid",
    gridTemplateColumns: { base: "1fr", lg: "1fr 1fr" },
    flexDirection:"row",
    justifyContent: "space-between",
    justifySelf:{base: "start",  md:"start", lg: "start" },
    alignItems:"center",
    width: "100%", 
    w:{base:"328px", md:"728px", lg:"1330px"}
} as const 


export const buttonStyle = {
    w:{base:"167px", md:"167px", lg:"197px"},
    justifySelf: {base: "center", md:"center", lg: "flex-end" },
    background: "#B1FF2E",
    _hover: {
    background: "#D1FF6A", 
    },
    _active: {
        background: "#D1FF6A", 
        },
    transition: "background 0.2s ease",
} as const;
