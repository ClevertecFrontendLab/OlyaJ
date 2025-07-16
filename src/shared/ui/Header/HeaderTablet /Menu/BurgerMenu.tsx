import { LeftSidebar } from "@shared/ui/Sidebar/LeftSidebar";

  
export const BurgerMenu = ({ onClose }: { onClose: () => void }) => {
    return (
      <>
      <LeftSidebar variant="mobile" onClose={onClose} />
      </>
    );
  };
  