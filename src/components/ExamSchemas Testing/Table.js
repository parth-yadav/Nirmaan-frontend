import React from 'react'
import zap from  './images/tableicons/zap.svg'

const customData = [
    ["Row 1 Col 1", "Row 1 Col 2", "Row 1 Col 3", "Row 1 Col 4", { text: "Row 1 Col 5 Text", imageSrc: zap }],
    ["Row 2 Col 1", "Row 2 Col 2", "Row 2 Col 3", "Row 2 Col 4", { text: "Row 2 Col 5 Text", imageSrc: zap }],
    ["Row 3 Col 1", "Row 3 Col 2", "Row 3 Col 3", "Row 3 Col 4", { text: "Row 3 Col 5 Text", imageSrc: zap }],
    ["Row 4 Col 1", "Row 4 Col 2", "Row 4 Col 3", "Row 4 Col 4", { text: "Row 4 Col 5 Text", imageSrc: zap }],
    ["Row 5 Col 1", "Row 5 Col 2", "Row 5 Col 3", "Row 5 Col 4", { text: "Row 5 Col 5 Text", imageSrc: zap }],
  ];
  
  const Table = () => {
    return (
        <div className="bg-white  overflow-auto">
        <table className="min-w-full border border-gray-300 h-72 ">
          <thead>
            <tr>
              <th className="pl-5 py-0.5 text-left font-medium text-sm text-gray-500  border-b w-[37rem]">Title</th>
              <th className="px-5 py-0.5 text-left font-medium text-sm text-gray-500 border-b w-44">Question Count</th>
              <th className="px-5 py-0.5 text-left font-medium text-sm text-gray-500 border-b w-">Duration</th>
              <th className="px-5 py-0.5 text-left font-medium text-sm text-gray-500 border-b w-">Attempts</th>
              <th className="px-5 py-0.5 text-left font-medium text-sm text-gray-500 border-b w-">Status</th>
            </tr>
          </thead>
          <tbody className='p-5'>
            {customData.map((rowData, rowIndex) => (
              <tr key={rowIndex} className="text-left h-12  border-b border-gray-300 ">
                {rowData.map((cellData, colIndex) => (
                  <td key={colIndex} className="px-5 py-0.5 ">
                    {colIndex === 4 && typeof cellData === 'object' ? (
                      <div className="flex items-center space-x-2">
                        <img src={cellData.imageSrc} alt="" className="h-5 w-5" />
                        <span className="text-[1rem] font-normal">{cellData.text}</span>
                      </div>
                    ) : (
                      <span className="text-[1rem] font-normal">{cellData}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    );
  };

export default Table