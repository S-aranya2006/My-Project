import React from 'react';

/**
 * Reusable responsive Table component that fits the dark glassmorphism styling of the portfolio.
 */
const Table = ({
  headers = [],
  data = [],
  className = '',
  renderRow,
  ...props
}) => {
  return (
    <div className={`w-full overflow-x-auto rounded-xl border border-outline-variant/20 glass-card ${className}`} {...props}>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-outline-variant/30 bg-surface-container/40">
            {headers.map((header, idx) => (
              <th 
                key={idx} 
                className="px-6 py-4 text-label-md font-label-md text-outline uppercase tracking-wider font-semibold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-outline-variant/10">
          {data.length === 0 ? (
            <tr>
              <td colSpan={headers.length || 1} className="px-6 py-8 text-center text-body-md text-on-surface-variant">
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, rowIdx) => {
              if (renderRow) return renderRow(row, rowIdx);
              
              return (
                <tr 
                  key={rowIdx} 
                  className="hover:bg-white/5 transition-colors duration-200"
                >
                  {Object.values(row).map((val, cellIdx) => (
                    <td 
                      key={cellIdx} 
                      className="px-6 py-4 text-body-md text-on-surface"
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
