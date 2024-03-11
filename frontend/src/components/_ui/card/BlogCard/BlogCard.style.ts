export const styled = {
  thumbnailBox: {
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    width: 1,
    aspectRatio: 4 / 2.8,
    borderRadius: 1,
    bgcolor: 'background.light',
    boxShadow: (theme: any) => `inset 0 0 0 1px ${theme.palette.divider}`,
    'img': {
      transition: 'transform .25s ease-in-out',
      transformOrigin: 'center',
      display: 'block',
      objectFit: 'cover'
    },
    ':hover': {
      'img': {
        transform: 'scale(1.07)'
      }
    }
  },
}