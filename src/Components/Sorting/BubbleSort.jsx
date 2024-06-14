function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function BubbleSort(array, setCompareIndices, setData, isSorting, animationSpeedRef) {
  let newArray = [...array];
  let swapped;
  let indexOfLastUnsortedElement = newArray.length - 1;

  do {
    swapped = false;
    for (let i = 0; i < indexOfLastUnsortedElement; i++) {
      if (!isSorting.current) {
        setCompareIndices([]);
        return newArray;
      }

      let leftElement = newArray[i];
      let rightElement = newArray[i + 1];

      setCompareIndices([i, i + 1]);
      await sleep(animationSpeedRef.current);

      if (leftElement > rightElement) {
        swap(newArray, i, i + 1);
        setData([...newArray]);
        setCompareIndices([i, i + 1, 'red']);
        swapped = true;
      } else {
        setCompareIndices([i, i + 1, 'green']);
      }
      await sleep(animationSpeedRef.current);
      setCompareIndices([]);
    }
    indexOfLastUnsortedElement--;
  } while (swapped);

  setCompareIndices([]);
  return newArray;
}

export default BubbleSort;
