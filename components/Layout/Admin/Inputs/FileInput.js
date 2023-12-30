import PropTypes from 'prop-types'

function FileInput({ type, label, id, name }) {
  const handleFileUpload = () => {
    console.log('aaaaaaaaa')
  }
  return (
    <>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <label
        htmlFor={id}
        className="border- mt-1 flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed"
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <p className="text-center text-xs font-medium text-input">
            Click to add an image or drag and drop <br /> one in this area
          </p>
        </div>
        <input
          accept="image/*"
          onChange={handleFileUpload}
          id={id}
          type="file"
          className="hidden"
        />
      </label>
    </>
  )
}

FileInput.propTypes = {
  type: PropTypes.oneOf(['image/*', 'video/*', '.pdf']).isRequired,
}

export default FileInput
