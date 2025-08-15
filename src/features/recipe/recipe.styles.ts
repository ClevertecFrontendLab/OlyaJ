export const recipePageStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    mt: { base: '16px', md: '18px', lg: '56px' },
    maxW: { base: '328px', md: '728px', lg: '1360px' },
    alignItems:"center",
} as const;


export const pictureDescriptionBoxStyle = {
    display: 'flex',
    flexDirection: { base: 'column', md: 'row', lg: 'row' },
    gap: { base: '16px', md: '16px', lg: '24px' },
} as const;


export const descriptionBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: { base: '24px', md: '10px' },
} as const;


export const imageRecipeStyle = {
    w: { base: '328px', md: '232px', lg: '553px' },
    h: { base: '224px', md: '224px', lg: '410px' },
    borderRadius: '8px',
    background: 'rgba(0, 0, 0, 0.08)',
};


export const categoriesIconsStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'start',
    w: { base: '328px', md: '480px', lg: '783px' },
} as const;


export const recipeCategoriesStyle = {
    display: 'flex',
    flexDirection: { base: 'column', md: 'row', lg: 'row' },
    gap: { base: '6px', md: '6px', lg: '8px' },
    flexWrap: 'wrap',
} as const;

export const categoryBoxStyle = {
    display: 'inline-block',
    borderRadius: '4px',
    background: '#FFFFD3',
    py: '1px',
    px: '4px',
    fontSize: '14px',
};

export const titleDescriptionBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: { base: '8px', md: '6px', lg: '16px' },
    w: { base: '328px', md: '480px', lg: '683px' },
} as const;

export const titleRecipeStyle = {
    fontSize: { base: '24px', md: '24px', lg: '48px' },
    fontWeight: '700',
    lineHeight: { base: '32px', md: '32px', lg: '48px' },
};

export const descriptionRecipeStyle = {
    fontSize: '14px',
    fontWeight: '400',
};

export const buttonsBoxStyle = {
    display: 'flex',
    flexDirection: { base: 'column', md: 'row', lg: 'row' },
    justifyContent: 'space-between',
    alignItems: { base: 'flex-start', md: 'flex-end', lg: 'flex-end' },
    gap: '12px',
} as const;

export const timeRecipeStyle = {
    display: 'inline-flex',
    borderRadius: '4px',
    background: 'rgba(0, 0, 0, 0.06)',
    padding: '2px 6px',
    w: 'fit-content',
    fontSize: '14px',
};

export const buttonRecipeStyle = {
    width: 'fit-content',
    height: { base: '24px', md: '24px', lg: '36px' },
    fontSize: { base: '12px', md: '12px', lg: '16px' },
    fontWeight: 600,
    lineHeight: { base: '16px', md: '16px', lg: '24px' },
    px: { base: 2, md: 3, lg: 4 },
    borderRadius: 'md',
} as const;


export const calorieBoxStyle = {
    display:"flex",
    flexDirection: "column",
    mt:{base:"24px", md:"24px", lg:"40px"},
    w:{base:"328px",md:"728px",lg:"668px"},
    gap:{base:"12px", md:"12px", lg:"24px"}
} as const 


export const caloryTextStyle = {
    fontSize:"14px", 
    fontWeight:400,
    fontHeight: "20px",
    color: "var(--blackAlpha-800, rgba(0, 0, 0, 0.80))",
}


export const ingredientsSelectBoxStyle = {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    mt:{base:"32px", md:"32px", lg:'48px'},
    w:{base:"328px",md:"728px",lg:"668px"},
} as const 


export const ingredientsTextStyle = {
    fonstSize:"12px",
    lineHeight:"16px",
    color: "var(--Lime-600, #2DB100)",
    fontWeight:700,
}


export const allIngredientsBoxStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    w: { base: "328px", md: "728px", lg: "668px" },
} as const;


export const ingredientRowStyle = {
    justifyContent: "space-between",
    px: 4,
    py: 3,
    _odd: { bg: "white" },
    _even: { bg: "gray.50" },
} as const;


export const recipeStepsBoxStyle = {
    display:"flex",
    flexDirection:"column",
    alignItems:"start",
    gap:"20px",
    mt:{base:"24px", md:"24px", lg:"40px"},
    w: { base: "328px", md: "728px", lg: "668px" },
} as const 


export const recipeStepsTextStyle = {
    fontSize:{base:"24px", md:"24px", lg:"48px"},
    fontWeight:500,
    lineHeight:{base:"32px", md:"32px", lg:'48px'}
}


export const recipeCardBoxStyle = {
    display:"flex",
    flexDirection:"column",
    gap:"20px"
} as const 


export const stepCardStyle = {
    display:"flex",
    flexDirection:"row",
    borderRadius: "8px",
    border: "1px solid var(--blackAlpha-200, rgba(0, 0, 0, 0.08))",
    background: "var(--white, #FFF)",
    w: { base: "328px", md: "728px", lg: "668px" },
    overflow:"hidden",
} as const 


export const stepCardImageStyle = {
    w:{base:"158px", md:"158px",lg:"346px"}
}


export const recipeCardDescriptionBoxStyle = {
    display:"flex",
    flexDirection:"column",
    px:{base:"8px", md:"8px",lg:"24px"},
    py:{base:"8px", md:"8px",lg:"20px"}
} as const 



export const recipeCardDescriptionTextStyle = {
    fontSize:"14px",
    fontWeight:400,
    lineHeight:"20px"
}



