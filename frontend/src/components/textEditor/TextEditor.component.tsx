import { forwardRef } from 'react'
import { TextEditorProps } from './TextEditor.type'
import { editorConfig } from './TextEditor.config'
import { Box } from '@mui/material'
import { style } from './TextEditor.style'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })



const TextEditor = forwardRef<any, TextEditorProps>((props, ref) => {
  const { value, onChange, placeholder } = props


  return (
    <Box sx={style.root}>
      <ReactQuill
        theme='snow'
        value={value}
        onChange={onChange}
        modules={editorConfig.modules}
        formats={editorConfig.formats}
        placeholder={placeholder || 'Write something awesome...'}
      />
    </Box>
  )
})


TextEditor.displayName = 'TextEditor'
export default TextEditor