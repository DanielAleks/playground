import shuffle from 'lodash.shuffle'

const arrayOfColor = ['blue', 'green', 'pink', 'purple', 'orange', 'yellow', 'red', 'hotpink']

export const gameLogic = ({ memory, setCubesArray, setMemory }) => {
  if (memory.length === 2) {
    if (memory[0].index !== memory[1].index && memory[0].color === memory[1].color) {
      matchComplete({ setCubesArray, memory })
    }
    setMemory([])
  }
}

export const matchComplete = ({ setCubesArray, memory }) => {
  setCubesArray(prev => prev.map((cubesProps, index) => {
    if (index === memory[0].index || index === memory[1].index) {
      return { ...cubesProps, found: true }
    } else return cubesProps
  }))
}




export const mapMyCubes = ({ setCubesArray }) => {
  setCubesArray(prev => {

    let newArray = []
    for (let cubeIndex = 0; cubeIndex < arrayOfColor.length; cubeIndex++) {
      newArray.push({ color: arrayOfColor[cubeIndex], found: false })
    }
    return shuffle(newArray.concat(newArray))
  })
}