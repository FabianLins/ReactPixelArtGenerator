export enum Tool {
  BRUSH = "BRUSH",
  BUCKET = "BUCKET"
}

export enum ImageType {
  GIF = "GIF",
  JPG = "JPG",
  PNG = "PNG"
}

export type ChosenColor = {
  color: string
  hover: string
}

export type NewColorProps = {
  activeColor: ChosenColor
  setActiveColor: (data: ChosenColor) => void
}

export type GridProps = {
  gridSize: number
  setGridSize: (data: number) => void
  gridRef: React.RefObject<HTMLDivElement>
}

export type PixelArtProps = {
  tool: Tool
  setTool: (data: Tool) => void
} & GridProps & NewColorProps

export const GetColorNames = (inputClassName: string) => {
  const hoverStrLen: number = "hover:".length
  let currHoverColorStart: number = inputClassName.indexOf("hover:bg-")
  let tmpClassName: string = inputClassName.substring(currHoverColorStart, inputClassName.length)
  let currHoverColorEnd: number = tmpClassName.indexOf(' ')
  let currHoverColor: string = ""
  if (currHoverColorEnd === -1) {
    currHoverColor = tmpClassName
  }
  else {
    currHoverColor = tmpClassName.substring(0, currHoverColorEnd)
  }
  let currColorStart: number = inputClassName.indexOf("bg-")
  if (currColorStart == inputClassName.indexOf("hover:bg") + hoverStrLen) {
    tmpClassName = inputClassName.substring(currColorStart + 1, inputClassName.length)
  }
  else {
    tmpClassName = inputClassName.substring(currColorStart, inputClassName.length)
  }
  currColorStart = tmpClassName.indexOf("bg-")
  tmpClassName = tmpClassName.substring(currColorStart, tmpClassName.length)
  let currColorEnd: number = tmpClassName.indexOf(' ')
  let currColor: string = ""
  if (currColorEnd === -1) {
    currColor = tmpClassName
  }
  else {
    currColor = tmpClassName.substring(0, currColorEnd)
  }
  let colors: ChosenColor = { color: "", hover: "" }
  colors = { color: currColor, hover: currHoverColor }
  return colors
}