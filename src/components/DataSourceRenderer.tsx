import React from 'react';

interface DataSourceRendererProps {
  type: string;
  dataSource: any;
  currentQuestionId?: number;
}

export const DataSourceRenderer: React.FC<DataSourceRendererProps> = ({ type, dataSource, currentQuestionId }) => {
  // Handle Sprints with multiple scenarios
  let activeData = dataSource;
  let activeType = type;
  let activeTitle = '';
  let activeContext = '';

  if (dataSource.isSprint && currentQuestionId !== undefined) {
    // Find which scenario covers this question ID
    const scenario = dataSource.scenarios.find((s: any) => {
      if (s.questionRange) {
        return currentQuestionId >= s.questionRange[0] && currentQuestionId <= s.questionRange[1];
      }
      return false;
    });

    if (scenario) {
      activeData = scenario.data;
      activeType = scenario.type;
      activeTitle = scenario.title || '';
      activeContext = scenario.context || '';
    }
  }

  const renderHeader = () => {
    if (!activeTitle && !activeContext) return null;
    return (
      <div className="p-4 bg-slate-50 border-b border-slate-200">
        {activeTitle && <h4 className="font-black text-[#004a99] text-xs uppercase tracking-widest mb-1">{activeTitle}</h4>}
        {activeContext && <p className="text-xs text-slate-500 italic">{activeContext}</p>}
      </div>
    );
  };

  if (activeType === 'TABLE') {
    return (
      <div className="flex flex-col h-full">
        {renderHeader()}
        <table className="w-full text-sm">
          <thead className="bg-[#004a99] text-white">
            <tr>
              {activeData.headers.map((h: string) => (
                <th key={h} className="px-4 py-3 text-left font-bold uppercase tracking-tighter text-xs border-r border-white/20 last:border-0">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {activeData.rows.map((row: any[], i: number) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3 text-slate-700 font-medium border-r border-slate-100 last:border-0">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (activeType === 'PIE_AND_TABLE') {
    return (
      <div className="space-y-0 divide-y divide-slate-200 flex flex-col h-full">
        {renderHeader()}
        <div className="p-6 bg-blue-50/50">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {Object.entries(activeData.pieData).map(([key, val]) => (
              <div key={key} className="flex flex-col border-l-2 border-[#004a99] pl-3">
                <span className="text-[10px] font-bold text-slate-500 uppercase">{key}</span>
                <span className="text-lg font-black text-slate-800">{val as number}%</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[10px] font-bold text-slate-400 uppercase">Total: {activeData.pieTotal} Units</p>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-[#004a99] text-white">
            <tr>
              {/* Dynamic headers if available, otherwise fallback */}
              {activeData.tableHeaders ? activeData.tableHeaders.map((h:string) => (
                 <th key={h} className="px-4 py-2 text-left text-xs font-bold uppercase">{h}</th>
              )) : (
                <>
                  <th className="px-4 py-2 text-left text-xs font-bold uppercase">Category</th>
                  <th className="px-4 py-2 text-left text-xs font-bold uppercase">Share</th>
                  <th className="px-4 py-2 text-left text-xs font-bold uppercase">Rate/Cost</th>
                </>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {activeData.renewableTable.map((row: any[], i: number) => (
              <tr key={i} className="hover:bg-slate-50">
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-2 text-slate-700 font-medium">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (activeType === 'LINE_GRAPH') {
    return (
      <div className="flex flex-col h-full">
        {renderHeader()}
        <div className="p-6">
          <table className="w-full text-xs border border-slate-300 border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="border border-slate-600 p-2 text-left">Data Point</th>
                {activeData.timeHours.map((h: any) => <th key={h} className="border border-slate-600 p-2">{h}</th>)}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="bg-white">
                <td className="border border-slate-200 p-2 font-bold bg-slate-100">Index/Value A</td>
                {activeData.vanA_Dist.map((d: number, i: number) => <td key={i} className="border border-slate-200 p-2 text-center">{d}</td>)}
              </tr>
              {activeData.vanB_Dist && (
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 p-2 font-bold bg-slate-100">Index/Value B</td>
                  {activeData.vanB_Dist.map((d: number, i: number) => <td key={i} className="border border-slate-200 p-2 text-center">{d}</td>)}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (activeType === 'MULTI_TABLE') {
    return (
      <div className="space-y-0 divide-y divide-slate-200 flex flex-col h-full">
        {renderHeader()}
        <table className="w-full text-sm">
          <thead className="bg-[#004a99] text-white">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold uppercase">Item</th>
              <th className="px-4 py-3 text-left text-xs font-bold uppercase">Value/Cost</th>
              <th className="px-4 py-3 text-left text-xs font-bold uppercase">Variable</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {activeData.equipment.map((row: any[], i: number) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3 text-slate-700 font-medium">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {activeData.exchange && (
          <div className="p-6 bg-slate-50">
            <h4 className="font-bold text-xs uppercase text-slate-500 mb-4 tracking-wider">Additional Multipliers / Rates</h4>
            <div className="flex gap-12 flex-wrap">
              {Object.entries(activeData.exchange).map(([key, val]) => (
                <div key={key} className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">{key}</span>
                  <span className="text-xl font-black text-[#004a99]">{val as any}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (activeType === 'PIE_CHART') {
    return (
      <div className="flex flex-col h-full">
        {renderHeader()}
        <div className="p-8 flex flex-col items-center">
          <div className="grid grid-cols-2 gap-8 w-full max-w-md">
            {Object.entries(activeData.data).map(([key, val]) => (
              <div key={key} className="flex items-center gap-3 bg-slate-50 p-3 rounded border border-slate-200">
                <div className="w-4 h-4 rounded-full bg-[#004a99]"></div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">{key}</span>
                  <span className="text-sm font-black text-slate-800">{val as number}%</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs font-bold text-slate-400 uppercase">Total Base: {activeData.total}</p>
        </div>
      </div>
    );
  }

  if (activeType === 'BAR_CHART') {
    const maxVal = Math.max(...(activeData.data as number[]));
    return (
      <div className="flex flex-col h-full">
        {renderHeader()}
        <div className="p-8">
          <div className="space-y-4">
            {activeData.labels.map((label: string, i: number) => (
              <div key={label} className="space-y-1">
                <div className="flex justify-between text-[10px] font-bold text-slate-600 uppercase">
                  <span>{label}</span>
                  <span>{activeData.data[i]} {activeData.unit || ''}</span>
                </div>
                <div className="h-6 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                  <div 
                    className="h-full bg-[#004a99] transition-all duration-1000" 
                    style={{ width: `${(activeData.data[i] / maxVal) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (activeType === 'IMAGE_SET') {
    return (
      <div className="p-6 space-y-6">
        {renderHeader()}
        <div className="grid grid-cols-2 gap-4">
          <div className="border-2 border-[#004a99] p-4 rounded-lg bg-blue-50">
            <h5 className="font-bold text-[#004a99] mb-2 uppercase text-xs">Set A</h5>
            <div className="aspect-square bg-white border border-slate-300 flex items-center justify-center text-xs text-slate-400 italic text-center px-4">
              [Reference Stimulus Set A]
            </div>
            <p className="mt-2 text-[10px] text-slate-600 leading-tight italic">{activeData.setA_Rule}</p>
          </div>
          <div className="border-2 border-slate-800 p-4 rounded-lg bg-slate-50">
            <h5 className="font-bold text-slate-800 mb-2 uppercase text-xs">Set B</h5>
            <div className="aspect-square bg-white border border-slate-300 flex items-center justify-center text-xs text-slate-400 italic text-center px-4">
              [Reference Stimulus Set B]
            </div>
            <p className="mt-2 text-[10px] text-slate-600 leading-tight italic">{activeData.setB_Rule}</p>
          </div>
        </div>
      </div>
    );
  }

  if (activeType === 'PASSAGE') {
    return (
      <div className="p-8 prose prose-slate max-w-none flex flex-col h-full">
        <h4 className="font-black text-[#004a99] text-xs uppercase mb-6 tracking-widest">{activeData.title || activeTitle}</h4>
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
          {activeData.text.split('\n\n').map((para: string, i: number) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    );
  }

  if (activeType === 'TEXT_LOGIC') {
    return (
      <div className="flex flex-col h-full">
        {renderHeader()}
        <div className="p-8 space-y-4">
          <ul className="space-y-3">
            {activeData.premises.map((p: string, i: number) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="bg-slate-800 text-white text-[10px] font-bold px-2 py-0.5 rounded shrink-0">{i+1}</span>
                <p className="text-slate-800 font-medium leading-tight">{p}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (activeType === 'VENN_DIAGRAM') {
    return (
      <div className="flex flex-col h-full items-center">
        {renderHeader()}
        <div className="p-4 w-full flex justify-center">
          <svg viewBox="0 0 400 400" className="w-full max-w-sm drop-shadow-xl">
            {/* Circles */}
            <circle cx="160" cy="160" r="100" fill="rgba(0, 74, 153, 0.2)" stroke="#004a99" strokeWidth="2" />
            <circle cx="240" cy="160" r="100" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" strokeWidth="2" />
            <circle cx="200" cy="240" r="100" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
            
            {/* Labels for Sets */}
            <text x="80" y="80" className="text-xs font-black fill-[#004a99] uppercase">{activeData.labels[0]}</text>
            <text x="320" y="80" className="text-xs font-black fill-[#ef4444] uppercase" textAnchor="end">{activeData.labels[1]}</text>
            <text x="200" y="360" className="text-xs font-black fill-[#22c55e] uppercase" textAnchor="middle">{activeData.labels[2]}</text>

            {/* Values in Regions */}
            <text x="110" y="160" className="text-sm font-bold fill-slate-800" textAnchor="middle">{activeData.values.onlyA}</text>
            <text x="290" y="160" className="text-sm font-bold fill-slate-800" textAnchor="middle">{activeData.values.onlyB}</text>
            <text x="200" y="290" className="text-sm font-bold fill-slate-800" textAnchor="middle">{activeData.values.onlyC}</text>
            
            <text x="200" y="140" className="text-sm font-bold fill-slate-800" textAnchor="middle">{activeData.values.ab}</text>
            <text x="150" y="220" className="text-sm font-bold fill-slate-800" textAnchor="middle">{activeData.values.ac}</text>
            <text x="250" y="220" className="text-sm font-bold fill-slate-800" textAnchor="middle">{activeData.values.bc}</text>
            
            <text x="200" y="195" className="text-sm font-black fill-slate-900 underline" textAnchor="middle">{activeData.values.abc}</text>
            
            <text x="350" y="350" className="text-xs font-bold fill-slate-400 italic">Outside: {activeData.values.none}</text>
          </svg>
        </div>
      </div>
    );
  }

  return <div className="p-8 text-slate-400 italic text-sm">No visualization for this type.</div>;
};
