import { useState, useEffect } from 'react'
import { ucatSprintTests } from './data/ucat_data'
import { Calculator } from './components/Calculator'

function App() {
  const [currentSetIndex, setCurrentSetIndex] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({})
  const [timeLeft, setTimeLeft] = useState(640) // 10m 40s in seconds
  const [isTestStarted, setIsTestStarted] = useState(false)
  const [isTestFinished, setIsTestFinished] = useState(false)
  const [showCalculator, setShowCalculator] = useState(false)

  const currentSet = ucatSprintTests[currentSetIndex]
  const currentQuestion = currentSet.questions[currentQuestionIndex]

  useEffect(() => {
    let timer: number
    if (isTestStarted && timeLeft > 0 && !isTestFinished) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsTestFinished(true)
    }
    return () => clearInterval(timer)
  }, [isTestStarted, timeLeft, isTestFinished])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleAnswerSelect = (optionIndex: number) => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestion.id]: optionIndex
    })
  }

  const handleNext = () => {
    if (currentQuestionIndex < currentSet.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else if (currentSetIndex < ucatSprintTests.length - 1) {
      setCurrentSetIndex(currentSetIndex + 1)
      setCurrentQuestionIndex(0)
    } else {
      setIsTestFinished(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    } else if (currentSetIndex > 0) {
      setCurrentSetIndex(currentSetIndex - 1)
      setCurrentQuestionIndex(ucatSprintTests[currentSetIndex - 1].questions.length - 1)
    }
  }

  if (!isTestStarted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">UCAT Quantitative Reasoning</h1>
          <p className="text-slate-600 mb-8">Sprint Test: 4 Sets | 16 Questions | 10:40 Minutes</p>
          <button 
            onClick={() => setIsTestStarted(true)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
          >
            Start Sprint Test
          </button>
        </div>
      </div>
    )
  }

  if (isTestFinished) {
    const totalCorrect = ucatSprintTests.flatMap(s => s.questions).reduce((acc, q) => {
      return acc + (userAnswers[q.id] === q.answerIndex ? 1 : 0)
    }, 0)

    return (
      <div className="min-h-screen bg-slate-50 p-4 md:p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">Test Results</h2>
          <div className="text-center mb-8">
            <span className="text-5xl font-extrabold text-blue-600">{totalCorrect} / 16</span>
            <p className="text-slate-500 mt-2">Score</p>
          </div>
          
          <div className="space-y-6">
            {ucatSprintTests.map((set) => (
              <div key={set.setId} className="border-t pt-6">
                <h3 className="text-xl font-bold mb-4">{set.title}</h3>
                <div className="space-y-4">
                  {set.questions.map((q) => (
                    <div key={q.id} className="p-4 bg-slate-50 rounded-lg">
                      <p className="font-medium mb-2">{q.text}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className={userAnswers[q.id] === q.answerIndex ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                          Your Answer: {q.options[userAnswers[q.id]] || "Skipped"}
                        </span>
                        {userAnswers[q.id] !== q.answerIndex && (
                          <span className="text-green-600">Correct: {q.options[q.answerIndex]}</span>
                        )}
                      </div>
                      <p className="mt-2 text-slate-600 text-sm italic">{q.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Header */}
      <header className="bg-slate-800 text-white p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-4">
          <div className="font-bold text-lg">UCAT Sprint: {currentSet.title}</div>
          <button 
            onClick={() => setShowCalculator(!showCalculator)}
            className={`px-3 py-1 rounded text-sm font-bold transition-colors ${showCalculator ? 'bg-blue-500 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
          >
            Calculator
          </button>
        </div>
        <div className={`font-mono text-xl ${timeLeft < 60 ? 'text-red-400 animate-pulse' : ''}`}>
          {formatTime(timeLeft)}
        </div>
        <button 
          onClick={() => setIsTestFinished(true)}
          className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-sm font-bold transition-colors"
        >
          End Test
        </button>
      </header>

      {/* Main Content (Split Pane) */}
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
        {showCalculator && (
          <div className="absolute bottom-4 right-4 z-50">
            <Calculator />
          </div>
        )}
        {/* Left Pane: Data Source */}
        <div className="flex-1 p-6 overflow-auto border-r border-slate-300 bg-white">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-xl font-bold mb-2">{currentSet.title}</h2>
            <p className="text-slate-600 mb-4">{currentSet.context}</p>
            
            {currentSet.type === 'TABLE' && (
              <div className="overflow-x-auto border rounded-lg">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      {currentSet.dataSource.headers.map((h: string) => (
                        <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {currentSet.dataSource.rows.map((row: any[], i: number) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j} className="px-4 py-3 whitespace-nowrap text-sm text-slate-700">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {currentSet.type === 'PIE_AND_TABLE' && (
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="font-bold mb-2">Energy Production Breakdown (Total: {currentSet.dataSource.pieTotal} TWh)</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {Object.entries(currentSet.dataSource.pieData).map(([key, val]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-slate-600">{key}:</span>
                        <span className="font-bold">{val as number}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="overflow-x-auto border rounded-lg">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500">Source</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500">% of Renewables</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500">Cost/TWh (£m)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentSet.dataSource.renewableTable.map((row: any[], i: number) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td key={j} className="px-4 py-2 text-sm text-slate-700">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {currentSet.type === 'LINE_GRAPH' && (
              <div className="space-y-4">
                <p className="text-sm font-medium italic">Table representation of line graph data:</p>
                <div className="overflow-x-auto border rounded-lg text-xs">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-2 py-2">Hour</th>
                        {currentSet.dataSource.timeHours.map((h: number) => <th key={h} className="px-2 py-2">{h}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-2 py-2 font-bold bg-slate-50">Van A (km)</td>
                        {currentSet.dataSource.vanA_Dist.map((d: number, i: number) => <td key={i} className="px-2 py-2">{d}</td>)}
                      </tr>
                      <tr>
                        <td className="px-2 py-2 font-bold bg-slate-50">Van B (km)</td>
                        {currentSet.dataSource.vanB_Dist.map((d: number, i: number) => <td key={i} className="px-2 py-2">{d}</td>)}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {currentSet.type === 'MULTI_TABLE' && (
              <div className="space-y-6">
                <div className="overflow-x-auto border rounded-lg">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500">Equipment</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500">Cost (Δ)</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-slate-500">Maint. Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentSet.dataSource.equipment.map((row: any[], i: number) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td key={j} className="px-4 py-2 text-sm text-slate-700">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <h4 className="font-bold mb-2">Exchange Rates (1 Δ =)</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">GBP (£):</span>
                      <span className="font-bold">{currentSet.dataSource.exchange.GBP}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">USD ($):</span>
                      <span className="font-bold">{currentSet.dataSource.exchange.USD}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Pane: Questions */}
        <div className="w-full md:w-[450px] bg-slate-50 p-6 flex flex-col shadow-inner">
          <div className="flex-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
              Question {currentQuestion.id} of 16
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-6 leading-snug">
              {currentQuestion.text}
            </h3>

            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswerSelect(idx)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    userAnswers[currentQuestion.id] === idx
                      ? 'border-blue-500 bg-blue-50 shadow-sm'
                      : 'border-white bg-white hover:border-slate-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 text-xs font-bold ${
                      userAnswers[currentQuestion.id] === idx
                        ? 'bg-blue-500 border-blue-500 text-white'
                        : 'border-slate-300 text-slate-500'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span className="text-slate-700 font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentSetIndex === 0 && currentQuestionIndex === 0}
              className="px-6 py-2 rounded font-bold text-slate-600 hover:text-slate-800 disabled:opacity-30"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-2 rounded font-bold transition-colors"
            >
              {currentSetIndex === ucatSprintTests.length - 1 && 
               currentQuestionIndex === currentSet.questions.length - 1 
               ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
