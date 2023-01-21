import { useEffect, useRef, useState } from 'react'
import './App.scss'
import html2canvas from 'html2canvas'
import { ChosenColor, GetColorNames, ImageType, Tool } from './Helpers'
import { ColorPicker } from './ColorPicker/ColorPicker'
import PixelArt from './PixelArt/PixelArt'
import GridSize from './GridSize'
import paintBrushIcon from './assets/paint-brush-icon.svg'
import paintBucketIcon from './assets/paint-bucket-icon.svg'

function App() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [activeColor, setActiveColor] = useState<ChosenColor>({ color: "", hover: "" })
  const [gridSize, setGridSize] = useState<number>(8)
  const [tool, setTool] = useState<Tool>(Tool.BRUSH)
  const [imageFormat, setFormat] = useState<ImageType>(ImageType.PNG)

  //TODO: fix use effect
  useEffect(() => {
    const firstColor = document.querySelector(".color-pick.active")
    if (firstColor) {
      let colors: ChosenColor = { color: "", hover: "" }
      colors = GetColorNames(firstColor.className)
      setActiveColor(colors)
    }
  })

  const saveImage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log()
    html2canvas(document.querySelector('.pixel-art-grid') as HTMLInputElement).then(function (canvas) {
      canvas.toBlob(function () {
        const fileName = "pixel-art"
        const link = document.createElement("a")
        link.download = `${fileName}.${imageFormat.toLowerCase()}`
        canvas.toBlob(function (blob) {
          if (blob) {
            link.href = URL.createObjectURL(new Blob([blob], { type: `image/${imageFormat.toLowerCase()}` }))
            link.click()
          }
        })
      })
    })
  }

  const changeTool = (event: React.MouseEvent<HTMLElement>) => {
    let tmpTool = (event.currentTarget as HTMLButtonElement).value
    tmpTool = tmpTool.toUpperCase()
    setTool(tmpTool as Tool)
    let siblingDiv: HTMLElement
    if (event.currentTarget.previousSibling) {
      siblingDiv = event.currentTarget.previousSibling.childNodes[0] as HTMLElement
      siblingDiv.classList.remove("active")
    }
    else if (event.currentTarget.nextSibling) {
      siblingDiv = event.currentTarget.nextSibling.childNodes[0] as HTMLElement
      siblingDiv.classList.remove("active")
    }
    event.currentTarget.children[0].classList.add("active")
  }

  const selectFormat = (event: React.ChangeEvent<HTMLSelectElement>) => {
    Object.values(ImageType).forEach(element => {
      if (element.toUpperCase() === event.target.value.toUpperCase()) {
        setFormat(event.target.value as ImageType)
      }
    })
  }

  return (
    <div className="App max-w-xl mx-auto px-4 pb-3">
      <div className="color-picker-parent mb-4 border-b">
        <ColorPicker
          activeColor={activeColor}
          setActiveColor={setActiveColor}
        />
      </div>
      <div className="grid-size-parent mb-4 border-b">
        <GridSize
          gridSize={gridSize}
          setGridSize={setGridSize}
          gridRef={gridRef}
        />
      </div>
      <div className="tool-parent mb-4 border-b">
        <div className="tools mb-5">
          <h3 className="choose-color text-3xl my-2 text-gray-500 font-light text-left tracking-tighter before:content-['•'] before:font-mono before:mr-1">
            Choose Tool
          </h3>
          <div className="flex gap-2">
            <button value={"brush"} onClick={changeTool}>
              <img src={paintBrushIcon} alt="" className="hover:opacity-50 transition-opacity ease-in duration-75 paint-tool p-1 w-12 cursor-pointer fill-gray-300 active" />
            </button>
            <button value={"bucket"} onClick={changeTool}>
              <img src={paintBucketIcon} alt="" className="hover:opacity-50 transition-opacity ease-in duration-75 paint-tool p-1  w-12 cursor-pointer fill-gray-300" />
            </button>
          </div>
        </div>
      </div>
      <PixelArt
        activeColor={activeColor}
        setActiveColor={setActiveColor}
        gridSize={gridSize}
        setGridSize={setGridSize}
        gridRef={gridRef}
        tool={tool}
        setTool={setTool}
      />
      <form className="save-image-container gap-3 flex mt-3" onSubmit={saveImage}>
        <select name="" onChange={selectFormat} id="" className="px-3 py-2 outline outline-1 outline-gray-300 border-r-8 border-transparent text-center text-gray-500">
          <option value="PNG">PNG</option>
          <option value="JPG">JPG</option>
          <option value="GIF">GIF</option>
        </select>
        <button type="submit" className="hover:scale-[1.1] hover:bg-green-300 transition-all ease-in px-4 py-2 bg-blue-400 text-white tracking-wide text-xl">
          Save Image
        </button>
      </form>
    </div>
  )
}

export default App