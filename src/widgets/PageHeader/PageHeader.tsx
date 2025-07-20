import { Box, Heading, Image, Input, InputGroup, InputRightElement, Switch, Text, useBreakpointValue } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import { useGetAllCategoriesQuery } from "./../../entities/categories/api/categoriesApi"
import { allergenBoxStyles, allergenSwitchBox, filterButtonBox, filterButtonStyles, headerBoxStyles, headerTitleStyles, inputStyles, searchIconStyles, textStyles } from "./pageHeader.styles"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { ROUTES } from "@shared/model/routes"
import filterButton from './../../../public/filter.svg'
import { ChangeEvent, useState } from "react"
import { Select } from "@shared/ui/Select /Select"


export const PageHeader = () => {
    const { data: categories } = useGetAllCategoriesQuery();
    const location = useLocation();
    const { categoryId } = useParams();
    const [value, setValue] = useState<string>('');
    const [isHeaderActive, setIsHeaderActive] = useState(false); 
    const [allergenFilterEnabled, setAllergenFilterEnabled] = useState(false)
    const navigate = useNavigate()

    const isDesktop = useBreakpointValue({ base: false, md: false, lg: true })
    const isHome = location.pathname === ROUTES.MAIN
    const currentCategory = categories?.find(cat => cat.category === categoryId)

    const title = isHome
        ? 'Приятного аппетита!'
        : currentCategory?.title

    const handleFilterChange = () => {
        setIsHeaderActive(true)
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.currentTarget.value
        setValue(val)
        setIsHeaderActive(true)

        const query = new URLSearchParams(location.search)
        query.set("search", val)
        navigate(`${location.pathname}?${query.toString()}`)
    }

    const handleOnSwitchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsHeaderActive(true);
        setAllergenFilterEnabled(e.currentTarget.checked); 
    };
    

    const isActive = value.length > 3

    return (
        <Box
            {...headerBoxStyles}
            boxShadow={isHeaderActive ? '0px 20px 25px -5px rgba(0, 0, 0, 0.10), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);' : 'none'}
            borderRadius="16px"
        >

            <Heading as='h1' {...headerTitleStyles}>
                {title}
            </Heading>

            {/*filter button + input*/}
            <Box {...filterButtonBox}>
                <Image src={filterButton} {...filterButtonStyles} onClick={handleFilterChange} />

                <InputGroup>
                    <Input {...inputStyles} value={value} onChange={handleInputChange} placeholder="Название или ингредиент..." />
                    <InputRightElement
                        cursor={isActive ? 'pointer' : 'not-allowed'}
                        h="100%">
                        <SearchIcon
                            {...searchIconStyles}
                            color={isActive ? 'black' : 'gray.500'}
                        />
                    </InputRightElement>
                </InputGroup>
            </Box>

            {/*исключить аллергены + select*/}
            {isDesktop && (
                <Box {...allergenBoxStyles}>
                    <Box {...allergenSwitchBox}>
                        <Text {...textStyles}>Исключить аллергены</Text>
                        <Switch
                            onChange={handleOnSwitchChange}
                            sx={{'span.chakra-switch__track': {
                                    _checked: {bg: '#B1FF2E'}},
                            }}
                        />
                    </Box>
                    <Select placeholder="Выберете из списка..." isDisabled={!allergenFilterEnabled}/>
                </Box>
            )}
        </Box>
    )
}



