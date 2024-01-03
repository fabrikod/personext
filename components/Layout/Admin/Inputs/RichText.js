'use client'
import dynamic from 'next/dynamic'
import React, { useCallback } from 'react'
import 'react-quill/dist/quill.snow.css'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

export default function RichText({ value, id, name, label, onChange }) {
  const imageHandler = useCallback(function () {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()

    input.onchange = async () => {
      const file = input.files[0]
      const formData = new FormData()
      formData.append('image', file)

      // Sunucunuza resim yükleyin
      // const response = await fetch('/api/upload', {
      //   // Sunucunuzun endpoint'i
      //   method: 'POST',
      //   body: formData,
      // })

      // const data = await response.json()
      // const url = data.url // Sunucunuzdan dönen URL

      // Resmi Quill editörüne ekleyin
      const range = this.quill.getSelection()
      this.quill.insertEmbed(
        range.index,
        'image',
        'https://i0.wp.com/www.authormedia.com/wp-content/uploads/2012/03/bigstock_Shocked_Computer_Nerd_1520709.jpg'
      )
    }
  }, [])

  return (
    <>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <ReactQuill
        className="mt-1"
        id={id}
        modules={{
          toolbar: {
            container: [
              [{ font: [] }, { size: [] }, { header: [1, 2, 3, 4, 5, 6] }],
              ['bold', 'italic', 'underline', 'strike'],
              [{ color: [] }, { background: [] }],
              [{ script: 'sub' }, { script: 'super' }],
              [{ header: 1 }, { header: 2 }, 'blockquote', 'code-block'],
              [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
              ],
              [{ direction: 'rtl' }, { align: [] }],
              ['link', 'image', 'clean'],
            ],
            handlers: {
              image: imageHandler,
            },
          },
          clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
          },
        }}
        formats={[
          'header',
          'font',
          'size',
          'bold',
          'italic',
          'underline',
          'strike',
          'color',
          'background',
          'script',
          'blockquote',
          'code-block',
          'list',
          'bullet',
          'indent',
          'direction',
          'align',
          'link',
          'image',
        ]}
        onChange={e => onChange(e)}
        value={value}
        theme="snow"
      />
    </>
  )
}
