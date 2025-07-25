import { Box } from "@chakra-ui/react";
import { PageHeader } from "./../../widgets/PageHeader/PageHeader"
import { subcategoryBoxStyle } from "@features/subcategory/subcategory.styles";


function MostJuicyPage() {

  
    return (
      <Box {...subcategoryBoxStyle}>
        <PageHeader/>
      </Box>
    );
  }
  
  export const Component = MostJuicyPage;
  