import React, {useEffect, useRef, useState} from 'react';
import Line from "./Line";
import BubbleSort from "./BubbleSort";

function Sorting() {
  // const [data, setData] = useState([1, 2, 3, 6, 2, 7, 1, 4, 1, 10, 20, 5, 2, 8, 6, 2, 7, 1, 4, 1]);
  const [data, setData] = useState(generateRandomNumbers());
  const [selectedSort, setSelectedSort] = useState('Bubble Sort');
  const [compareIndices, setCompareIndices] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(250);
  const isSorting = useRef(false);
  const animationSpeedRef = useRef(animationSpeed);
  const [originalData, setOriginalData] = useState([]);

  const handleSort = () => {
    isSorting.current = true;
    if (selectedSort === 'Bubble Sort') {
      BubbleSort(data, setCompareIndices, setData, isSorting, animationSpeedRef)
    }
    // TODO: Add Quick Sort
  };

  function generateRandomNumbers() {
    return Array.from({length: 45}, () => Math.floor(Math.random() * 37));

  }

  useEffect(() => {
    animationSpeedRef.current = animationSpeed;
  }, [animationSpeed]);


  const handleStop = () => {
    isSorting.current = false;
    setData([...data]);
    setCompareIndices([]);
  }

  const renderLines = (heights) => {
    return heights.map((height, index) => {
      let color = 'orange';
      if (compareIndices.includes(index)) {
        color = compareIndices[2] === 'red' && compareIndices.includes(index) ? 'red' : 'green';
      }
      return <Line height={height} xPos={index} color={color} key={index}/>
    });
  }

  return (<div className="px-3 h-96">
    <div className="flex flex-row items-end border-4 rounded-md border-black h-full">
      {renderLines(data)}
    </div>

    {/*BAR*/}
    <div className="flex justify-between rounded-md p-4 bg-gray-200">
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 justify-center">
        <div>
          <input
            type="range"
            min="10"
            max="500"
            value={animationSpeed}
            onChange={(e) => setAnimationSpeed(Number(e.target.value))}
          />
          <span>{animationSpeed} ms</span>
        </div>

        {/*DROPDOWN*/}
        <div className="relative inline-flex">
          <select
            className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
          >
            <option>Bubble Sort</option>
            <option>Quick Sort</option>
          </select>
        </div>

        {/*BUTTONS*/}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded-full"
                onClick={handleStop}>
          Stop
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 rounded-full"
                onClick={handleSort}>
          Sort
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded-full"
                onClick={() => {
                  handleStop();
                  setData(generateRandomNumbers());
                }}>
          Generate
        </button>
      </div>
    </div>
  </div>);
}

export default Sorting;
