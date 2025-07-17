import { Box, Heading, Image, Input, InputGroup, InputRightElement} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import { useGetAllCategoriesQuery } from "./../entities/categories/api/categoriesApi"
import { filterButtonBox, filterButtonStyles, headerBoxStyles, headerTitleStyles, inputStyles, searchIconStyles } from "./pageHeader.styles"
import { useLocation, useParams } from "react-router-dom"
import { ROUTES } from "@shared/model/routes"
import filterButton from './../../public/filter.svg'
import { useState } from "react"


export const PageHeader = () => {
    const { data: categories } = useGetAllCategoriesQuery();
    const location = useLocation();
    const { categoryId } = useParams();
    const [value, setValue] = useState()

    const isHome = location.pathname === ROUTES.MAIN
    const currentCategory = categories?.find(cat => cat.category === categoryId)

    const title = isHome
        ? 'Приятного аппетита!'
        : currentCategory?.title

    return (
        <Box {...headerBoxStyles}>
            <Heading as='h1' {...headerTitleStyles}>
                {title}
            </Heading>

            <Box {...filterButtonBox}>
                <Image src={filterButton} {...filterButtonStyles} />

                <InputGroup>
                    <Input {...inputStyles}/>
                    <InputRightElement cursor="pointer">
                        <SearchIcon {...searchIconStyles}/>
                    </InputRightElement>
                </InputGroup>
            </Box>

        </Box>
    )
}

