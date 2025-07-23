import { Box, Heading, Text } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { footerBoxStyle, textCardsFooterStyle, textFooterStyle, titleDescriptionBoxStyle } from "./footer.style"
import { useGetAllCategoriesQuery } from "../../entities/categories/api/categoriesApi"
import { useMemo } from "react"
import { headingStyle } from "../NewRecipes/newRecipes.styles"
import { useGetAllRecipesQuery } from "./../../entities/recipes/api/recipesApi"
import { FooterTextCard } from "@shared/ui/Cards/FooterCards/FooterTextCard/FooterTextCard"
import { useCategoryMap } from "@shared/hooks/useCategoryMap"
import { cardsFooterBoxStyle, longCardsBoxStyle } from "@shared/ui/Cards/FooterCards/FooterTextCard/footerTextCard.style"
import { LongVerticalCard } from "@shared/ui/Cards/VerticalCards/LongVeticalCard/LongVerticalCard"

export const Footer = () => {
    const { categoryId } = useParams()
    const { data: categories } = useGetAllCategoriesQuery()
    const { data: recipes } = useGetAllRecipesQuery({ limit: 3 })
    const { categoryMap } = useCategoryMap()

    const rootCategories = useMemo(() => {
        if (!categories) return []
        return categories.filter(cat => !("rootCategoryId" in cat))
    }, [categories])

    const randomCategory = useMemo(() => {
        if (rootCategories.length === 0) return null
        const randomIndex = Math.floor(Math.random() * rootCategories.length)
        return rootCategories[randomIndex]
    }, [categoryId, rootCategories])


    return (
        <Box {...footerBoxStyle}>
            <Box {...titleDescriptionBoxStyle}>
                <Heading {...headingStyle} flex="1">
                    {randomCategory?.title}
                </Heading>
                <Text {...textFooterStyle} flex="1">
                    {randomCategory?.description}
                </Text>
            </Box>

            <Box {...cardsFooterBoxStyle}>
                <Box {...textCardsFooterStyle}>
                    {recipes?.data.slice(0, 2).map((recipe) => {
                        const categoryTitles = recipe.categoriesIds
                            .map(id => categoryMap[id])
                            .filter(Boolean);

                        return (
                            <FooterTextCard
                                title={recipe.title}
                                description={recipe.description}
                                likeCount={recipe.likes}
                                saveCount={recipe.bookmarks}
                                category={categoryTitles}
                            />
                        )
                    })}
                </Box>

                <Box {...longCardsBoxStyle}>
                    {recipes?.data.map((recipe) => (
                        <LongVerticalCard key={recipe._id} title={recipe.title} />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}
