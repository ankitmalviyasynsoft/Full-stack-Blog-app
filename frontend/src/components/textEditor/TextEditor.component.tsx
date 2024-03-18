import { forwardRef, useCallback, useMemo, useRef } from 'react'
import { TextEditorProps } from './TextEditor.type'
import { editorConfig } from './TextEditor.config'
import { Box } from '@mui/material'
import { style } from './TextEditor.style'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import { useUploadFileMutation } from '@/redux/api/uploadFile.api'

const ReactQuill = dynamic(async () => {
  const { default: RQ } = await import('react-quill');
  // eslint-disable-next-line react/display-name
  return ({ forwardedRef, ...props }: any) => <RQ ref={forwardedRef} {...props} />;
}, { ssr: false })



const TextEditor = forwardRef<any, TextEditorProps>((props, ref) => {
  const { value, onChange, placeholder } = props
  const quillRef = useRef<any>(null)
  const [uploadFile] = useUploadFileMutation()


  const quillImageCallback = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files ? input.files[0] : null;
      let data = null;
      const formData = new FormData();
      formData.append('upload_preset', 'fixer-upper-v1');

      const quillObj = quillRef?.current?.getEditor();
      const range = quillObj?.getSelection();

      if (file) {
        formData.append('image', file);

        let res = await uploadFile(formData as any).unwrap()
        console.log(res.imageUrl)
        quillObj.editor.insertEmbed(range.index, 'image', res.imageUrl);
      }
    };
  }, []);



  const modules = useMemo(() => ({
    history: { delay: 2000, maxStack: 300, userOnly: true },
    toolbar: {
      container: editorConfig.modules.toolbar,
      clipboard: editorConfig.modules.clipboard,
      handlers: {
        image: quillImageCallback
      },
    },
  }),
    []
  );


  return (
    <Box sx={style.root}>
      <ReactQuill
        forwardedRef={quillRef}
        theme='snow'
        value={value}
        onChange={onChange}
        modules={modules}
        formats={editorConfig.formats}
        placeholder={placeholder || 'Write something awesome...'}
      />
    </Box>
  )
})


TextEditor.displayName = 'TextEditor'
export default TextEditor