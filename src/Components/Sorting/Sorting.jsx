import React, {useEffect, useRef, useState} from 'react';
import Line from "./Line";
import BubbleSort from "./BubbleSort";
import SortingInfo from "./SortingInfo";

function Sorting() {
  const [data, setData] = useState(generateRandomNumbers(45));
  const [selectedSort, setSelectedSort] = useState('Bubble Sort');
  const [compareIndices, setCompareIndices] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(250);
  const [numElements, setNumElements] = useState(45);
  const isSorting = useRef(false);
  const animationSpeedRef = useRef(animationSpeed);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(10);
  const generateButtonRef = useRef(null);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const dropdownRef = useRef(null);

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
      console.log(containerWidth);
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, [containerWidth]);

  useEffect(() => {
    if (dropdownRef.current) {
      dropdownRef.current.classList.add('blink');
      setTimeout(() => {
        if (dropdownRef.current) {
          dropdownRef.current.classList.remove('blink');
        }
      }, 2000); // Duration of the animation: 0.5s * 2 iterations * 2 (for blink timing) = 2s
    }
  }, []);

  const handleSort = () => {
    isSorting.current = true;
    if (selectedSort === 'Bubble Sort') {
      BubbleSort(data, setCompareIndices, setData, isSorting, animationSpeedRef);
    }
    // TODO: Add Quick Sort
  };

  function generateRandomNumbers(num = 50) {
    return Array.from({length: num}, () => Math.floor(Math.random() * 35 + 1));
  }

  const handleStop = () => {
    isSorting.current = false;
    setData([...data]);
    setCompareIndices([]);
  };

  const renderLines = (heights) => {
    let lineWidth;
    if (heights.length > 499) {
      lineWidth = containerWidth / heights.length - 1.01;
    } else if (heights.length > 299) {
      lineWidth = containerWidth / heights.length - 1.02;
    } else if (heights.length > 199) {
      lineWidth = containerWidth / heights.length - 1.05;
    } else if (heights.length > 99) {
      lineWidth = containerWidth / heights.length - 1.1;
    } else if (heights.length > 49) {
      lineWidth = containerWidth / heights.length - 1.1;
    } else {
      lineWidth = containerWidth / heights.length - 1.2;
    }

    return heights.map((height, index) => {
      let color = 'orange';
      if (compareIndices.includes(index)) {
        color = compareIndices[2] === 'red' && compareIndices.includes(index) ? 'red' : 'green';
      }
      return (
        <Line height={height} xPos={index} color={color} width={lineWidth} key={index}/>
      )
    });
  };

  return (
    <>
      {/*INFO*/}
      <div className="px-4 pb-6">
        <div className="border-black border-4 rounded-md h-60 w-full">
          <SortingInfo/>

        </div>
      </div>

      {/*DATA*/}
      <div className="px-4 h-96 pb-6">
        <div
          ref={containerRef}
          className="bg-gradient-to-t from-white flex pl-1.5 flex-row items-end h-full w-full"
        >
          {renderLines(data)}
        </div>

        {/*BAR*/}
        <div className="flex flex-col bg-gradient-to-b from-white items-center rounded-b-md p-4 bg-gray-200">
          <div
            className="flex flex-col sm:flex-row text-black font-bold space-y-2 sm:space-y-0 sm:space-x-2 justify-center">
            <div className="flex items-center justify-center">
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
                ref={dropdownRef}
                className="border border-gray-300 rounded-full text-black h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
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
                className="border border-gray-300 rounded-full text-black h-10 pl-2 bg-white hover:border-gray-400 focus:outline-none"
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
      </div>
    </>
  );
}

export default Sorting;
