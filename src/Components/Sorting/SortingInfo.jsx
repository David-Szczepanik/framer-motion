import React from 'react';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';

function SortingInfo() {
  return (
    <>
      <div className="ml-4 text-xl">
        <table className="table-auto">
          <thead>
          <tr>
            <th className="px-4 py-2">Bubble Sort</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td className="border px-4 py-2">Best Case Time Complexity</td>
            <td className="border px-4 py-2"><Latex>{'$O(n)$'}</Latex></td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Worst Case Time Complexity</td>
            <td className="border px-4 py-2"><Latex>{'$O(n^2)$'}</Latex></td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Space Complexity</td>
            <td className="border px-4 py-2"><Latex>{'$O(1)$'}</Latex></td>
          </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default SortingInfo;
