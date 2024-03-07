import { createTheme, Theme, alpha } from '@mui/material'
import type { } from '@mui/x-data-grid/themeAugmentation'



/* Typography & Palette
======================== */
let theme = createTheme({
  typography: {
    fontFamily: 'var(--font-family)',
    h1: { fontSize: '3rem' },
    h2: { fontSize: '2.25rem' },
    h3: { fontSize: '2rem' },
    h4: { fontSize: '1.75rem' },
    h5: { fontSize: '1.50rem', fontWeight: 400 },
    h6: { fontSize: '1.38rem' },
    body1: { fontSize: '1rem' },
    body2: { fontSize: '1rem', color: '#144312' },
    body3: { fontSize: '1rem', fontWeight: 600, color: '#2f662d' },
    body4: { fontSize: '0.875rem', color: '#144312' },
    subtitle: { fontSize: '1rem', },
    subtitle1: { fontSize: '1.25rem' },
    subtitle2: { fontSize: '0.7rem' },
  },
  palette: {
    mode: 'light',
    divider: 'rgba(0, 0, 0, 0.1)',
    text: { primary: '#101828', secondary: '#344054', disabled: '#667085' },
    primary: { main: '#208B3A', contrastText: '#fff' },
    secondary: { main: '#2f662d' },
    // error: { main: '#EA4335', light: '#F65548' },
    // background: { default: '#111', paper: '#000', light: '#282828' },
    white: { main: '#fff', light: alpha('#fff', 0.5), dark: alpha('#fff', 0.8), contrastText: '#222' },
  },
  shape: {
    borderRadius: 8
  }
})



/* Components
======================== */
theme = createTheme(theme, {
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: { subtitle: 'div', body1: 'div', body3: 'div', body4: 'div' }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'unset', whiteSpace: 'nowrap' },
        sizeSmall: { fontSize: theme.typography.body1.fontSize, minHeight: 38, fontWeight: 400 },
        sizeMedium: { fontSize: theme.typography.body1.fontSize, minHeight: 38, fontWeight: 500 },
        sizeLarge: { fontSize: theme.typography.body1.fontSize, minHeight: 48, fontWeight: 600 },
      },
      variants: [
        {
          props: { variant: 'transparent' },
          style: theme.unstable_sx({
            color: 'text.primary', bgcolor: 'background.light', fontSize: 'body1.fontSize', minHeight: 48,
            ':hover': { textDecoration: 'underline' }
          })
        }
      ]
    },
    MuiCard: {
      styleOverrides: {
        root: { boxShadow: 'unset', backgroundImage: 'unset' }
      }
    },
    MuiTextField: {
      defaultProps: { fullWidth: true, variant: 'outlined' },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: theme.unstable_sx({
          color: 'text.disabled', borderRadius: 1,
          ':before, :after': { display: 'none' },
          'input': {
            borderRadius: 'inherit !important',
            ':-webkit-autofill': { WebkitBoxShadow: `0 0 0 100px #171717 inset !important` }
          }
        })
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        filled: theme.unstable_sx({
          color: `${theme.palette.text.disabled} !important`, fontWeight: 400
        })
      }
    },
    MuiFormControl: {
      defaultProps: { fullWidth: true }
    },
    MuiChip: {
      styleOverrides: {
        root: { height: 'unset', minHeight: 20, },
        label: theme.unstable_sx({
          fontSize: 'body3.fontSize',
        })
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: { maxWidth: 'min(100%, 1266px) !important' },
      }
    },
    // MuiDataGrid: {
    //   defaultProps: { autoHeight: true, disableRowSelectionOnClick: true, disableColumnMenu: true, paginationMode: 'server' },
    //   styleOverrides: {
    //     root: theme.unstable_sx({
    //       border: 0, bgcolor: 'background.default',
    //       '.MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus, .MuiDataGrid-columnHeader, .MuiDataGrid-cell, .MuiDataGrid-columnHeader:hover, .MuiDataGrid-cell:hover': { outline: 'unset !important' },
    //       '.MuiDataGrid-columnSeparator': {
    //         svg: { display: 'none' }
    //       },
    //       '.MuiDataGrid-cell': { border: 0 },
    //       '.MuiDataGrid-row:nth-child(even)': { bgcolor: 'action.hover' },
    //       '.MuiDataGrid-row:hover': { bgcolor: 'action.focus' },
    //     }),
    //   }
    // },
    MuiFormHelperText: {
      defaultProps: { variant: 'filled' },
      styleOverrides: {
        root: { position: 'relative' }
      }
    },
    // MuiPagination: {
    //   defaultProps: { shape: 'rounded', color: 'primary' },
    //   styleOverrides: {
    //     root: theme.unstable_sx({
    //       mr: 2, my: 1.5,
    //     })
    //   }
    // },
    // MuiPaginationItem: {
    //   styleOverrides: {
    //     root: theme.unstable_sx({
    //       bgcolor: 'action.focus',
    //     })
    //   }
    // }
  }
} as Theme)



/* Typescript
======================== */
declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: React.CSSProperties
    body4: React.CSSProperties
    subtitle: React.CSSProperties
  }
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties
    body4?: React.CSSProperties
    subtitle: React.CSSProperties
  }
  interface TypeBackground {
    light: string
  }
  interface Palette {
    white: Palette['primary']
  }
  interface PaletteOptions {
    white?: PaletteOptions['primary']
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true
    body4: true
    subtitle: true
    subtitle1: false
    subtitle2: false
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    transparent: true
  }
  interface ButtonPropsColorOverrides {
    white: true
  }
}



export { theme }

export const stylePageSection = { xs: 2 }