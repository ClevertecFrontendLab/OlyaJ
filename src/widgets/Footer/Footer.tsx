import { Box, Heading, Text } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { footerBoxStyle, titleDescriptionBoxStyle } from "./footer.style"
import { useGetAllCategoriesQuery } from "../../entities/categories/api/categoriesApi"
import { useMemo } from "react"

export const Footer = () => {
    const { categoryId } = useParams()
    const { data: categories } = useGetAllCategoriesQuery()

    const randomCategory = useMemo(() => {
        if (!categories || categories.length === 0) return null
        const randomIndex = Math.floor(Math.random() * categories.length)
        return categories[randomIndex]
    }, [categoryId, categories])

    return (
        <Box {...footerBoxStyle}>
            <Box {...titleDescriptionBoxStyle}>
                <Heading>
                    {randomCategory?.title ?? "Нет категории"}
                </Heading>
                <Text>
                    {randomCategory?.description }
                </Text>
            </Box>
        </Box>
    )
}
