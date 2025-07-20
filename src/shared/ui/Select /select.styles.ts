export const menuButtonStyle = {
    w: { base: "308px", md: "399px", lg: "234px" },
    minH: "40px",
    h: "100%",
    my: "4px",
    whiteSpace: "normal",
    textAlign: "left",
    bg: "transparent",
    border: "1px solid ",
    borderColor: "gray.300",
    _hover: { borderColor: "#2DB100", bg: "transparent" },
    _focus: { borderColor: "#2DB100", bg: "transparent" },
    _active: { borderColor: "#2DB100", bg: "transparent" },
    py: "6px"
} as const


export const selectedWordStyle = {
    border: "1px solid #2DB100",
    color:"#2DB100",
    px:"8px",
    py:"2px",
    borderRadius:"16px",
    fontSize:"14px",
    fontWeight:"500"
}


export const checkboxStyle = {
    '.chakra-checkbox__control': {
      borderColor: '#D7FF94',
      borderRadius: '2px',
      bg: 'transparent', 
      _hover: {
        bg: '#D7FF94',
        borderColor: '#D7FF94',
      },
      _focus: {
        bg: '#D7FF94',
        borderColor: '#D7FF94',
      },
      _checked: {
        bg: '#D7FF94',
        borderColor: '#D7FF94',
        color: 'black',
      },
      _active: {
        bg: '#D7FF94', 
      },
    },
    '.chakra-checkbox__label': {
      color: 'black',
    },
  };
  




