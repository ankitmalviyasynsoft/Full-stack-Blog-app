import { useTheme } from '@mui/material'



export default function CssVariables() {
  const theme = useTheme()

  return (
    <style jsx global>{`
      :root{
          --palette-primary-main: ${theme.palette.primary.main};
          --palette-primary-dark: ${theme.palette.primary.dark};
          --palette-primary-light: ${theme.palette.primary.light};

          --palette-secondary-main: ${theme.palette.secondary.main};
          --palette-secondary-dark: ${theme.palette.secondary.dark};
          --palette-secondary-light: ${theme.palette.secondary.light};

          --palette-success-main: ${theme.palette.success.main};
          --palette-success-dark: ${theme.palette.success.dark};
          --palette-success-light: ${theme.palette.success.light};

          --palette-text-primary: ${theme.palette.text.primary};
          --palette-text-secondary: ${theme.palette.text.secondary};
          --palette-text-disabled: ${theme.palette.text.disabled};

          --palette-background-default: ${theme.palette.background.default};
          --palette-background-paper: ${theme.palette.background.paper};
          --palette-background-light: ${theme.palette.background.light};

          --border-radius: ${theme.shape.borderRadius}px;
        }
    `}</style>
  )
}
