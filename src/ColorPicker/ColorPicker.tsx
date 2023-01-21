import { ChosenColor, GetColorNames, NewColorProps } from './../Helpers'
import { useRef } from 'react'


export const ColorPicker = ({ activeColor, setActiveColor }: NewColorProps) => {
  const colorPickerRef = useRef<HTMLDivElement>(null)

  const ChooseColor = (event: React.MouseEvent<HTMLElement>) => {
    let className: string = event.currentTarget.className
    let colors: ChosenColor = { color: "", hover: "" }
    colors = GetColorNames(className)
    let currColorPick: Element
    if (colorPickerRef.current) {
      for (currColorPick of Array.from(colorPickerRef.current.children)) {
        if (currColorPick.classList.contains("active")) {
          currColorPick.classList.remove("active")
          break
        }
      }
    }
    setActiveColor(colors)
    event.currentTarget.classList.add("active")
  }
  return (
    <div className="color-picker mb-5 max-w-xl">
      <h3 className="choose-color text-3xl my-2 text-gray-500 font-light text-left tracking-tighter before:content-['•'] before:font-mono before:mr-1">
        Choose your color
      </h3>
      <div ref={colorPickerRef} className="color-grid grid gap-2 grid-cols-11">
        <div onClick={ChooseColor} className="hover:outline-orange-500 hover:bg-red-300 transition-colors ease-in duration-75 active color-pick aspect-square outline outline-1 outline-gray-900 bg-red-400 cursor-pointer"></div>
        <div onClick={ChooseColor} className="hover:outline-orange-500 hover:bg-purple-300 transition-colors ease-in duration-75 color-pick aspect-square outline outline-1 outline-gray-900 bg-purple-400 cursor-pointer"></div>
        <div onClick={ChooseColor} className="hover:outline-orange-500 hover:bg-green-300 transition-colors ease-in duration-75 color-pick aspect-square outline outline-1 outline-gray-900 bg-green-400 cursor-pointer"></div>
        <div onClick={ChooseColor} className="hover:outline-orange-500 hover:bg-blue-300 transition-colors ease-in duration-75 color-pick aspect-square outline outline-1 outline-gray-900 bg-blue-400 cursor-pointer"></div>
        <div onClick={ChooseColor} className="hover:outline-orange-500 hover:bg-yellow-100 transition-colors ease-in duration-75 color-pick aspect-square outline outline-1 outline-gray-900 bg-yellow-300 cursor-pointer"></div>
        <div onClick={ChooseColor} className="hover:outline-orange-500 hover:bg-orange-200 transition-colors ease-in duration-75 color-pick aspect-square outline outline-1 outline-gray-900 bg-orange-400 cursor-pointer"></div>
        <div onClick={ChooseColor} className="hover:outline-orange-500 hover:bg-gray-100 transition-colors ease-in duration-75 color-pick aspect-square outline outline-1 outline-gray-900 bg-white cursor-pointer"></div>
        <div onClick={ChooseColor} className="hover:outline-orange-500 hover:bg-gray-600 transition-colors ease-in duration-75 color-pick aspect-square outline outline-1 outline-black bg-gray-700 cursor-pointer"></div>
        <div onClick={ChooseColor} className="hover:outline-orange-500 hover:bg-orange-100 transition-colors ease-in duration-75 color-pick aspect-square outline outline-1 outline-gray-900 bg-orange-200 cursor-pointer"></div>
        <div onClick={ChooseColor} className="hover:outline-orange-500 hover:bg-pink-300 transition-colors ease-in duration-75 color-pick aspect-square outline outline-1 outline-gray-900 bg-pink-400 cursor-pointer"></div>
        <div onClick={ChooseColor} className="hover:outline-orange-500 hover:bg-orange-500 transition-colors ease-in duration-75 color-pick aspect-square outline outline-1 outline-gray-900 bg-orange-700 cursor-pointer"></div>
      </div>
    </div>
  )
}
