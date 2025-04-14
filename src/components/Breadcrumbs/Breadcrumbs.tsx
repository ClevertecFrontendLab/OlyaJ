import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

import { useBreadcrumb } from "~/utils/BreadcrumbsContext";


export const Breadcrumbs = () => {
  const { activeAccordion, activeSubItem } = useBreadcrumb();

  return (
    <Breadcrumb spacing="8px" separator=">">
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Главная</BreadcrumbLink>
      </BreadcrumbItem>

      {activeAccordion && (
        <BreadcrumbItem>
          <BreadcrumbLink>{activeAccordion}</BreadcrumbLink>
        </BreadcrumbItem>
      )}

      {activeSubItem && (
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>{activeSubItem}</BreadcrumbLink>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
};


