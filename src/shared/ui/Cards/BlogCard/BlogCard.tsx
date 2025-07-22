import { Box, Image, Text } from "@chakra-ui/react"
import { avatarNameBox, avatarStyle, blogBoxCard, descriptionBlogStyle, emailStyle, nameEmailStyle, nameStyle } from "./blogCard.style"

export type BlogCardProps = {
    avatar?: string; 
  }
  
export const BlogCard = ({avatar}: BlogCardProps) => {
    return (
    <Box {...blogBoxCard}>
        <Box {...avatarNameBox}>
            <Image src={avatar} alt="avatar" {...avatarStyle}/>
            <Box {...nameEmailStyle}>
                <Text {...nameStyle}>{"Екатерина Константинопольская"}</Text>
                <Text {...emailStyle}>{"@bake_and_pie"}</Text>
            </Box>
        </Box>

        <Text {...descriptionBlogStyle}>
            {"Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку."}
        </Text>
    </Box>
    )
}