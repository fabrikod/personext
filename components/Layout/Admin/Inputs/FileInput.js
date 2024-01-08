import { PanelDelete, PanelEdit } from '@/components/Icons'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'

function FileInput({ type, label, id, name, onChange, value }) {
  const imageRef = useRef(null)
  const fileInputRef = useRef(null)
  const [showImage, setShowImage] = useState(false)

  const handleFileUpload = e => {
    if (type === 'image/*') {
      if (e.target.files && e.target.files.length !== 0) {
        const file = e.target.files[0]
        const fileReader = new FileReader()

        fileReader.onloadend = function () {
          onChange(file)
          setShowImage(true)
        }
        fileReader.readAsDataURL(file)
      }
    }
  }

  useEffect(() => {
    if (value) {
      if (typeof value === 'object') {
        const fileReader = new FileReader()
        fileReader.onloadend = function () {
          imageRef.current.setAttribute('src', fileReader.result)
        }
        fileReader.readAsDataURL(value)
      }
      setShowImage(true)
    }
  }, [value])

  const handleEditImage = () => {
    fileInputRef.current.click()
  }

  const handleDeleteImage = () => {
    fileInputRef.current.target = null
    onChange(null)
    setShowImage(false)
  }

  return (
    <>
      <div className={classNames(showImage && 'hidden')}>
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
        <label
          htmlFor={id}
          className={
            'mt-1 flex min-h-[10rem] w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed'
          }
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <p className="text-center text-xs font-medium text-input">
              Click to add an image or drag and drop <br /> one in this area
            </p>
          </div>

          <input
            ref={fileInputRef}
            accept={type}
            onChange={handleFileUpload}
            id={id}
            type="file"
            className="hidden"
          />
        </label>
      </div>

      <div
        className={classNames(
          'relative flex justify-center border border-primary-1',
          !showImage && 'hidden'
        )}
      >
        <img
          ref={imageRef}
          src={value}
          alt="Hero Image"
          className="h-96 w-full rounded-md object-cover"
        />
        <div className="absolute bottom-3 right-3 z-20 flex gap-2">
          <div
            className="cursor-pointer rounded-md border border-primary-1 bg-lineer-light px-2 py-2 font-bold"
            onClick={handleDeleteImage}
          >
            <PanelDelete />
          </div>
          <div
            className="cursor-pointer rounded-md border border-primary-1 bg-lineer-light px-2 py-2"
            onClick={handleEditImage}
          >
            <PanelEdit />
          </div>
        </div>
        {/* <div className="absolute left-0 top-0 z-10 h-full w-full bg-black opacity-10"></div> */}
      </div>
    </>
  )
}

FileInput.propTypes = {
  type: PropTypes.oneOf(['image/*', 'video/*', '.pdf']).isRequired,
}

export default FileInput
