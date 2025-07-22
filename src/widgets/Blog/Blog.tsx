import { Box, Heading, Link } from "@chakra-ui/react";
import { blogBoxStyle, cardsBlogBoxStyle, headingBlogStyle, headingButtonBlogBoxStyle, linkStyle, mobileLinkBoxStyle } from "./blog.styles";
import { BlogCard } from "./../../shared/ui/Cards/BlogCard/BlogCard"


const blogData = [
  {
    avatar: "/avatars/elena.jpg",
    name: "Елена Высоцкая",
    username: "elenapovar",
    description:
      "Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку."
  },
  {
    avatar: "/avatars/alex.jpg",
    name: "Alex Cook",
    username: "funstasticooking",
    description:
      "Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку."
  },
  {
    avatar: "/avatars/ekaterina.jpg",
    name: "Екатерина Константинопольская",
    username: "bake_and_pie",
    description:
      "Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку."
  }
];


export const Blog = () => {
  return (
    <Box {...blogBoxStyle}>
      {/* Заголовок + ссылка справа (только на десктопе) */}
      <Box {...headingButtonBlogBoxStyle}>
        <Heading {...headingBlogStyle}>
          Кулинарные блоги
        </Heading>

        <Link
          href="/authors"
          {...linkStyle}
          display={{ base: "none", lg: "inline-flex" }}
        >
          Все авторы →
        </Link>
      </Box>

      {/* Карточки */}
      <Box {...cardsBlogBoxStyle}>
        {blogData.map((item, index) => (
          <BlogCard key={index} {...item} />
        ))}
      </Box>

      {/* Ссылка под карточками для мобилки и планшета */}
      <Box
        {...mobileLinkBoxStyle}
      >
        <Link href="/authors" {...linkStyle}>
          Все авторы →
        </Link>
      </Box>
    </Box>
  );
};



