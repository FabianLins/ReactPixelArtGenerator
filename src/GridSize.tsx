import { useState } from 'react'
import { ChosenColor, GetColorNames, GridProps } from './Helpers'

const GridSize = ({ setGridSize, gridRef }: GridProps) => {
  const [gridSelect, setGridSelect] = useState<string>("8x8")
  const resetGrid = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    switch (gridSelect) {
      case "8x8":
        setGridSize(8)
        break
      case "12x12":
        setGridSize(12)
        break
      case "16x16":
        setGridSize(16)
        break
      case "32x32":
        setGridSize(32)
        break
      default:
        setGridSize(8)
    }
    if (gridRef.current) {
      for (let currGridClass of gridRef.current.children) {
        let colors: ChosenColor = { color: "", hover: "" }
        colors = GetColorNames(currGridClass.className)
        if (colors.color !== "bg-white") {
          currGridClass.classList.remove(colors.color)
          currGridClass.classList.add("bg-white")
        }
        if (colors.hover !== "hover:bg-gray-100") {
          currGridClass.classList.remove(colors.hover)
          currGridClass.classList.add("hover:bg-gray-100")
        }
      }
    }
  }

  return (
    <div className="grid-size mb-5">
      <h3 className="choose-color text-3xl my-2 text-gray-500 font-light text-left tracking-tighter before:content-['•'] before:font-mono before:mr-1">
        Choose Grid Size
      </h3>
      <form className="reset-grid flex gap-3" onSubmit={resetGrid}>
        <select name="grid_size" onChange={(e) => setGridSelect(e.target.value)} className="hover:border-gray-200 transition-all ease-in pl-4 pr-5 py-2 border border-gray-300 text-center text-gray-500">
          <option value="8x8">8x8</option>
          <option value="12x12">12x12</option>
          <option value="16x16">16x16</option>
          <option value="32x32">32x32</option>
        </select>
        <div className="reset-grid-button">
          <button className="hover:scale-[1.1] hover:bg-orange-300 transition-all ease-in px-3 py-2 bg-gray-400 text-white tracking-wide text-xl" type="submit">Reset Grid</button>
        </div>
      </form>
    </div>
  )
}

export default GridSize