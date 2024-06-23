import React, {useEffect, useRef} from 'react';

function Tetris() {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.focus();
    }
  }, []);

  return (
    <>
      <div className="flex flex-row items-start justify-center">
        <div className="rounded-lg overflow-hidden" style={{width: "38%", height: "800px"}}>
          <iframe
            ref={iframeRef}
            title="Leaflet App"
            src="https://szczepanik.cz:4000/tetris.html"
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <div className="ml-4 text-xl">
          <h1 className="text-3xl">Tetris</h1>
          <table className="table-auto">
            <thead>
            <tr>
              <th className="px-4 py-2">Control</th>
              <th className="px-4 py-2">Key</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td className="border px-4 py-2">⬅️Arrow</td>
              <td className="border px-4 py-2">A</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">➡️Right</td>
              <td className="border px-4 py-2">D</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">⬇️Down</td>
              <td className="border px-4 py-2">S</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">🔄Rotate</td>
              <td className="border px-4 py-2">W</td>
            </tr>

            <tr>
              <td className="border px-4 py-2">⏸️Pause</td>
              <td className="border px-4 py-2">P</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">🔇Mute</td>
              <td className="border px-4 py-2">G</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Tetris
