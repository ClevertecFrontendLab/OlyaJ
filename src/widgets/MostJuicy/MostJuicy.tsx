import { Box, Button, Heading } from "@chakra-ui/react"
import { headingStyle } from "../NewRecipes/newRecipes.styles"
import { boxJuicyStyle, buttonStyle, headingButtonBoxStyle } from "./mostJuicy.styles"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "@shared/model/routes"



export const MostJuicy = ()=>{

    const navigate = useNavigate()
     
    return(
        <Box as="section" {...boxJuicyStyle}>
            <Box {...headingButtonBoxStyle}>
                <Heading {...headingStyle}>Самое сочное</Heading>
                <Button 
                    {...buttonStyle}
                    onClick={()=>{
                        window.scrollTo(0,0)
                        navigate(ROUTES.MOST_JUICY)}}
                >
                        Вся подборка→
                </Button>
            </Box>
        </Box>
    )
}