import { PixelArtProps, ChosenColor, GetColorNames } from './../Helpers'

const PixelArt = ({ activeColor, gridSize, gridRef, tool }: PixelArtProps) => {
  let fillColors: ChosenColor = { color: "", hover: "" }

  let borderString: string = ""
  switch (gridSize) {
    case 8: case 12: case 16:
      borderString = "border-2"
      break
    case 32: default:
      borderString = "border"
  }
  const gridString: string = `pixel-art-grid grid grid-cols-${gridSize} ${borderString} border-gray-400`
  const fieldString: string = `hover:bg-gray-100 transition-colors ease-in duration-75 aspect-square bg-white ${borderString} border-gray-400`

  const ChangeBottomFillColors = (tmpCol: number, tmpRow: number, toBeColoredIndexArr: number[]) => {
    tmpRow++
    while (tmpRow <= gridSize) {
      console.log(`Bottom Index: ${tmpCol + ((tmpRow - 1) * gridSize)}`)
      console.log(`Class-Index (-1): ${tmpCol + ((tmpRow - 1) * gridSize) - 1}`)
      if (gridRef.current?.children) {
        let tmpClassName: string = gridRef.current.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].className
        let colors: ChosenColor = { color: "", hover: "" }
        colors = GetColorNames(tmpClassName)
        if (colors.color === fillColors.color) {
          gridRef.current?.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].classList.remove(colors.color)
          gridRef.current?.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].classList.remove(colors.hover)
          gridRef.current?.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].classList.add(activeColor.color)
          gridRef.current?.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].classList.add(activeColor.hover)
          console.log(`toBeColoredIndex (Bottom) ${tmpCol + ((tmpRow - 1) * gridSize)}`)
          toBeColoredIndexArr.push(tmpCol + ((tmpRow - 1) * gridSize))
        }
        else {
          break
        }
      }
      tmpRow++
    }
    console.log("----BOTTOM END----")
    return toBeColoredIndexArr
  }

  const ChangeTopFillColors = (tmpCol: number, tmpRow: number, toBeColoredIndexArr: number[]) => {
    tmpRow--
    while (tmpRow > 0) {
      console.log(`Top Index: ${tmpCol + ((tmpRow - 1) * gridSize)}`)
      console.log(`Class-Index (-1): ${tmpCol + ((tmpRow - 1) * gridSize) - 1}`)
      if (gridRef.current?.children) {
        let tmpClassName: string = gridRef.current.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].className
        let colors: ChosenColor = { color: "", hover: "" }
        colors = GetColorNames(tmpClassName)
        if (colors.color === fillColors.color) {
          gridRef.current?.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].classList.remove(colors.color)
          gridRef.current?.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].classList.remove(colors.hover)
          gridRef.current?.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].classList.add(activeColor.color)
          gridRef.current?.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].classList.add(activeColor.hover)
          console.log(`toBeColoredIndex (Top) ${tmpCol + ((tmpRow - 1) * gridSize)}`)
          toBeColoredIndexArr.push(tmpCol + ((tmpRow - 1) * gridSize))
        }
        else {
          break
        }
      }
      tmpRow--
    }
    console.log("----TOP END----")
    return toBeColoredIndexArr
  }

  const ChangeRightColors = (tmpCol: number, tmpRow: number, toBeColoredIndexArr: number[]) => {
    tmpCol++
    while (tmpCol <= gridSize) {
      console.log(`Right Index: ${tmpCol + ((tmpRow - 1) * gridSize)}`)
      console.log(`Class-Index (-1): ${tmpCol + ((tmpRow - 1) * gridSize) - 1}`)
      if (gridRef.current?.children) {
        let tmpClassName: string = gridRef.current.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].className
        let colors: ChosenColor = { color: "", hover: "" }
        colors = GetColorNames(tmpClassName)
        if (colors.color === fillColors.color) {
          gridRef.current?.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].classList.remove(colors.color)
          gridRef.current?.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].classList.remove(colors.hover)
          gridRef.current?.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].classList.add(activeColor.color)
          gridRef.current?.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].classList.add(activeColor.hover)
          console.log(`toBeColoredIndex (Right) ${tmpCol + ((tmpRow - 1) * gridSize)}`)
          toBeColoredIndexArr.push(tmpCol + ((tmpRow - 1) * gridSize))
        }
        else {
          break
        }
      }
      tmpCol++
    }
    console.log("----RIGHT END----")
    return toBeColoredIndexArr
  }

  const ChangeLeftColors = (tmpCol: number, tmpRow: number, toBeColoredIndexArr: number[]) => {
    tmpCol--
    while (tmpCol > 0) {
      console.log(`Left Index: ${tmpCol + ((tmpRow - 1) * gridSize)}`)
      console.log(`Class-Index (-1): ${tmpCol + ((tmpRow - 1) * gridSize) - 1}`)
      if (gridRef.current?.children) {
        let tmpClassName: string = gridRef.current.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].className
        let colors: ChosenColor = { color: "", hover: "" }
        colors = GetColorNames(tmpClassName)
        if (colors.color === fillColors.color) {
          gridRef.current?.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].classList.remove(colors.color)
          gridRef.current?.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].classList.remove(colors.hover)
          gridRef.current?.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].classList.add(activeColor.color)
          gridRef.current?.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].classList.add(activeColor.hover)
          console.log(`toBeColoredIndex (Left) ${tmpCol + ((tmpRow - 1) * gridSize)}`)
          toBeColoredIndexArr.push(tmpCol + ((tmpRow - 1) * gridSize))
        }
        else {
          break
        }
      }
      tmpCol--
    }
    console.log("----LEFT END----")
    return toBeColoredIndexArr
  }

  const ChangeCurrentColor = (tmpCol: number, tmpRow: number, coloredIndexArr: number[]) => {
    if (gridRef.current?.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].className) {
      let tmpClassName: string = gridRef.current?.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].className
      fillColors = GetColorNames(tmpClassName)
      gridRef.current?.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].classList.remove(fillColors.color)
      gridRef.current?.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].classList.remove(fillColors.hover)
      gridRef.current?.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].classList.add(activeColor.color)
      gridRef.current?.children[tmpCol + ((tmpRow - 1) * gridSize) - 1].classList.add(activeColor.hover)
      console.log(`First Index: ${tmpCol + ((tmpRow - 1) * gridSize)}`)
      coloredIndexArr.push(tmpCol + ((tmpRow - 1) * gridSize))
    }
    return coloredIndexArr
  }

  const ChangeColor = (event: React.MouseEvent<HTMLElement>) => {
    let coloredIndexArr: number[] = []
    let toBeColoredIndexArr: number[] = []
    if (tool !== "BUCKET") {
      let tmpClassName: string = event.currentTarget.className
      let colors: ChosenColor = { color: "", hover: "" }
      colors = GetColorNames(tmpClassName)
      event.currentTarget.classList.remove(colors.color)
      event.currentTarget.classList.remove(colors.hover)
      event.currentTarget.classList.add(activeColor.color)
      event.currentTarget.classList.add(activeColor.hover)
    }
    else {
      let gridIndex: number = parseInt((event.target as HTMLButtonElement).value)
      console.log(gridIndex)
      let col: number = 0
      let row: number = 0
      if (gridIndex % gridSize === 0) {
        col = gridSize
        row = gridIndex / gridSize
      }
      else {
        col = gridIndex % gridSize
        row = Math.floor(gridIndex / gridSize) + 1
      }
      console.log(`Col: ${col}`)
      console.log(`Row: ${row}`)
      coloredIndexArr = ChangeCurrentColor(col, row, coloredIndexArr)
      toBeColoredIndexArr = ChangeLeftColors(col, row, toBeColoredIndexArr)
      toBeColoredIndexArr = ChangeRightColors(col, row, toBeColoredIndexArr)
      toBeColoredIndexArr = ChangeTopFillColors(col, row, toBeColoredIndexArr)
      toBeColoredIndexArr = ChangeBottomFillColors(col, row, toBeColoredIndexArr)
      let whileColorIndexArr = toBeColoredIndexArr
      while (whileColorIndexArr.length !== 0) {
        toBeColoredIndexArr.forEach(element => {
          console.log(`###Current element: ${element}`)
          coloredIndexArr.push(element)
          let elementCol: number = 0
          let elementRow: number = 0
          if (element % gridSize === 0) {
            elementCol = gridSize
            elementRow = element / gridSize
          }
          else {
            elementCol = element % gridSize
            elementRow = Math.floor(element / gridSize) + 1
          }
          toBeColoredIndexArr = ChangeLeftColors(elementCol, elementRow, toBeColoredIndexArr)
          toBeColoredIndexArr = ChangeRightColors(elementCol, elementRow, toBeColoredIndexArr)
          toBeColoredIndexArr = ChangeTopFillColors(elementCol, elementRow, toBeColoredIndexArr)
          toBeColoredIndexArr = ChangeBottomFillColors(elementCol, elementRow, toBeColoredIndexArr)
          console.log("### - Element over")
        })
        whileColorIndexArr = toBeColoredIndexArr.filter(currColoredIndex => !coloredIndexArr.includes(currColoredIndex))
      }
    }
  }

  return (
    <div className="pixel-art">
      <h3 className="choose-color text-3xl my-2 text-gray-500 font-light text-left tracking-tighter before:content-['•'] before:font-mono before:mr-1">
        Result
      </h3>
      <div ref={gridRef} className={gridString}>
        {Array.from(Array(gridSize * gridSize)).map((currElement, index) =>
          <button value={index + 1} onClick={ChangeColor} className={fieldString}></button>
        )}
      </div>
    </div>
  )
}

export default PixelArt