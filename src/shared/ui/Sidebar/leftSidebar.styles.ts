export const getLeftSidebarStyles = (variant: 'desktop' | 'mobile') => ({
  position: variant === 'mobile' ? 'fixed' : 'none', 
  top: variant === 'mobile' ? '64px' : '0',
  right: variant === 'mobile' ? '0' : 'auto',
  left: variant === 'mobile' ? 'auto' : '0',
  zIndex: variant === 'mobile' ? 'overlay' : '10',
  h: variant === 'mobile' ? 'calc(100vh - 64px)' : '100vh', 
  overflowY: 'auto', 
  w: variant === 'mobile' ? '334px' : '256px',
  minW: "256px",
  bg: "white",
  display: variant === 'desktop'
    ? { base: 'none', md: 'none', lg: 'flex' }
    : 'flex',
  flexDirection: "column" as const,
  justifyContent: "space-between" as const,
  px: "16px",
  py: "24px",
  borderLeft: variant === 'mobile' ? '1px solid #E5E5E5' : 'none',
  borderRight: variant === 'desktop' ? '1px solid #E5E5E5' : 'none',
});
