import { theme } from '@/utils'



export const getStatusColor = (status: string): string => {
  status = String(status)

  const color: Record<string, string> = {
    active: theme.palette.info.main,
    created: theme.palette.warning.main,
    draft: theme.palette.grey[400],
    review: theme.palette.warning.main,
    reject: theme.palette.error.main,
    pending: theme.palette.warning.main,
    fullyFunded: theme.palette.success.main,
    funded: theme.palette.success.main,
    approved: theme.palette.success.main,
    completed: theme.palette.success.main,
    verified: theme.palette.success.main,
    notVerified: theme.palette.warning.light,
  }

  return color[status] || '#fff'
}


export const convertHtmlToText = (html: string) => {
  var tempDivElement = document.createElement("div")
  tempDivElement.innerHTML = html
  return tempDivElement.textContent || tempDivElement.innerText || ""
}


export const isElementInViewport = (el: HTMLElement | undefined) => {
  if (!el) return false
  const rect = el.getBoundingClientRect()

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}


export const uniqueArrayElement = (array: any[]): any[] => {
  return array.filter((obj, index, arr) => {
    return arr.findIndex(item => item._id === obj._id) === index;
  });
};
