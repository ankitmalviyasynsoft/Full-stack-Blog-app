import { Style } from '@/types/Style.type'



export const style: Style = {
  root: {
    fieldset: { display: 'none' }
  },
  box: {
    width: 1,
    border: '2px dashed lightblue',
    borderRadius: 1,
    // bgcolor: 'background.input',
    overflow: 'hidden',
    cursor: 'pointer',
    bgcolor: '#fff',
    borderColor: 'primary.main !important',
    minHeight: '100px',
    ':hover, &.isHover': {
      borderColor: 'primary.main',
    }
  },
  uploadBox: {
    p: 2,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: 1,
    width: 1,
    py: { xs: '50px', md: '100px' },
    '.upload-icon': {
      fontSize: 'h4.fontSize'
    }
  },
  thumbnail: {
    objectFit: 'contain',
    height: 'auto',
    width: 'auto',
    maxHeight: 'calc(50vh - 100px)',
  }
}