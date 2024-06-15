import React, {useEffect, useRef, useState} from 'react';
import Line from "./Line";
import BubbleSort from "./BubbleSort";

function Sorting() {
  const [data, setData] = useState(generateRandomNumbers(45));
  const [selectedSort, setSelectedSort] = useState('Bubble Sort');
  const [compareIndices, setCompareIndices] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(250);
  const [numElements, setNumElements] = useState(45);
  const isSorting = useRef(false);
  const animationSpeedRef = useRef(animationSpeed);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(700);
  const generateButtonRef = useRef(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    animationSpeedRef.current = animationSpeed;
  }, [animationSpeed]);

  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);

    return () => {
      console.log(containerWidth)
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, []);

  const handleSort = () => {
    isSorting.current = true;
    if (selectedSort === 'Bubble Sort') {
      BubbleSort(data, setCompareIndices, setData, isSorting, animationSpeedRef);
    }
    // TODO: Add Quick Sort
  };

  function generateRandomNumbers(num = 50) {
    return Array.from({length: num}, () => Math.floor(Math.random() * 37 + 1));
  }

  const handleStop = () => {
    isSorting.current = false;
    setData([...data]);
    setCompareIndices([]);
  };

  const renderLines = (heights) => {
    // Equation to calculate the width of each line to fit the container
    const lineWidth = containerWidth / heights.length / 2;

    return heights.map((height, index) => {
      let color = 'orange';
      if (compareIndices.includes(index)) {
        color = compareIndices[2] === 'red' && compareIndices.includes(index) ? 'red' : 'green';
      }
      return <Line height={height} xPos={index} color={color} width={lineWidth} key={index}/>;
    });
  };

  return (<div className="px-3 h-96">
      <div ref={containerRef} className="flex flex-row items-end border-4 rounded-md border-black h-full w-full">
        {renderLines(data)}
      </div>

      {/*BAR*/}
      <div className="flex flex-col items-center rounded-md p-4 bg-gray-200">
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

          {/*NUMBER INPUT*/}
          <div>
            <input
              type="number"
              min="10"
              max="100"
              value={numElements}
              onChange={(e) => {
                const value = e.target.value;
                setNumElements(value === '' ? '' : Number(value));
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  generateButtonRef.current.click();
                }
              }}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              className="border border-gray-300 rounded-full text-gray-600 h-10 pl-2 bg-white hover:border-gray-400 focus:outline-none"
            />
            <span> Elements</span>
          </div>

          {/*BUTTONS*/}
          <button
            ref={generateButtonRef}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded-full ${isInputFocused ? 'ring-2 ring-black' : ''}`}
            onClick={() => {
              handleStop();
              setData(generateRandomNumbers(numElements));
            }}
          >
            Generate
          </button>

          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 rounded-full"
            onClick={handleSort}
          >
            Sort
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 rounded-full"
            onClick={handleStop}
          >
            Stop
          </button>
        </div>
      </div>
  </div>);
}

export default Sorting;
