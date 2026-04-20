import { useState, useEffect } from 'react'
import { ucatSprintTests } from './data/ucat_data'
import type { UCATSet } from './data/ucat_data'
import { Calculator } from './components/Calculator'
import { DataSourceRenderer } from './components/DataSourceRenderer'
import Draggable from 'react-draggable'

type View = 'selection' | 'test' | 'review'

function App() {
  const [view, setView] = useState<View>('selection')
  const [selectedSet, setSelectedSet] = useState<UCATSet | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<Record<number, any>>({})
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({})
  const [timeLeft, setTimeLeft] = useState(0)
  const [isTestFinished, setIsTestFinished] = useState(false)
  const [showCalculator, setShowCalculator] = useState(false)
  const [showNavigator, setShowNavigator] = useState(false)

  const currentQuestion = selectedSet?.questions[currentQuestionIndex]
  const totalQuestionCount = selectedSet?.questions.length || 0

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + C to toggle calculator
      if (e.altKey && e.key.toLowerCase() === 'c') {
        e.preventDefault()
        setShowCalculator(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    let timer: number
    if (view === 'test' && timeLeft > 0 && !isTestFinished) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (view === 'test' && timeLeft === 0) {
      handleFinishTest()
    }
    return () => clearInterval(timer)
  }, [view, timeLeft, isTestFinished])

  const startSet = (set: UCATSet) => {
    setSelectedSet(set)
    setCurrentQuestionIndex(0)
    setUserAnswers({})
    setFlaggedQuestions({})
    // 2.5 minutes per set as a rule of thumb for sprint
    setTimeLeft(set.questions.length * 40) 
    setView('test')
    setIsTestFinished(false)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleAnswerSelect = (optionIndex: number, partIndex?: number) => {
    if (!currentQuestion) return
    
    if (currentQuestion.type === 'syllogism' && partIndex !== undefined) {
      const currentParts = (userAnswers[currentQuestion.id] as number[]) || [null, null, null, null, null]
      const newParts = [...currentParts]
      newParts[partIndex] = optionIndex
      setUserAnswers({
        ...userAnswers,
        [currentQuestion.id]: newParts
      })
    } else {
      setUserAnswers({
        ...userAnswers,
        [currentQuestion.id]: optionIndex
      })
    }
  }

  const handleFinishTest = () => {
    setView('review')
    setIsTestFinished(true)
    setShowNavigator(false)
  }

  const calculateScore = (set: UCATSet) => {
    return set.questions.reduce((acc, q) => {
      const answer = userAnswers[q.id]
      if (answer === undefined || answer === null) return acc

      if (q.type === 'syllogism') {
        const correctCount = (answer as number[]).reduce((count, val, idx) => {
          return count + (val === q.multiPartCorrect?.[idx] ? 1 : 0)
        }, 0)
        if (correctCount === 5) return acc + 2
        if (correctCount === 4) return acc + 1
        return acc
      } else {
        return acc + (answer === q.answerIndex ? 1 : 0)
      }
    }, 0)
  }

  const maxScore = (set: UCATSet) => {
    return set.questions.reduce((acc, q) => acc + (q.type === 'syllogism' ? 2 : 1), 0)
  }

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestionCount - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    } else {
      handleFinishTest()
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    }
  }

  const toggleFlag = () => {
    if (!currentQuestion) return
    setFlaggedQuestions(prev => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id]
    }))
  }

  if (view === 'selection') {
    const sections = Array.from(new Set(ucatSprintTests.map(s => s.section)))

    return (
      <div className="min-h-screen bg-[#f3f4f6] p-4 md:p-8 font-sans">
        <div className="max-w-4xl mx-auto space-y-8">
          <header className="text-center space-y-2">
            <h1 className="text-4xl font-black text-[#004a99] tracking-tight">UCAT SPRINT PRACTICE</h1>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Select a section to begin your practice session</p>
          </header>

          <div className="grid gap-8">
            {sections.map(section => (
              <div key={section} className="space-y-4">
                <h2 className="text-xl font-black text-slate-700 border-b-2 border-slate-200 pb-2 uppercase tracking-tighter">{section}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {ucatSprintTests.filter(s => s.section === section).map(set => (
                    <button
                      key={set.setId}
                      onClick={() => startSet(set)}
                      className="group bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-left hover:border-[#004a99] hover:shadow-md transition-all relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-2 bg-slate-50 text-[10px] font-bold text-slate-400 group-hover:bg-[#004a99] group-hover:text-white transition-colors">
                        {set.questions.length} ITEMS
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#004a99]">{set.title}</h3>
                      <p className="text-sm text-slate-500 mt-1 line-clamp-1">{set.context}</p>
                      <div className="mt-4 flex items-center gap-2 text-[#004a99] font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        Start Session →
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (view === 'review' && selectedSet) {
    const score = calculateScore(selectedSet)
    const totalMax = maxScore(selectedSet)

    return (
      <div className="min-h-screen bg-slate-100 p-4 md:p-8 font-sans">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-[#004a99] text-white p-6 text-center relative">
            <button 
              onClick={() => setView('selection')}
              className="absolute left-6 top-6 text-white/80 hover:text-white flex items-center gap-1 text-sm font-bold transition-colors"
            >
              ← Home
            </button>
            <h2 className="text-2xl font-bold">{selectedSet.title} - Results</h2>
            <div className="mt-4 inline-block bg-white text-[#004a99] px-6 py-2 rounded-full font-bold text-xl">
              Score: {score} / {totalMax}
            </div>
          </div>
          
          <div className="p-6 space-y-6">
            {selectedSet.questions.map((q) => {
              const answer = userAnswers[q.id]
              const isCorrect = q.type === 'syllogism' 
                ? (answer as number[] || []).every((val, idx) => val === q.multiPartCorrect?.[idx])
                : answer === q.answerIndex
              
              const partial = q.type === 'syllogism' && !isCorrect && (answer as number[] || []).reduce((acc, val, idx) => acc + (val === q.multiPartCorrect?.[idx] ? 1 : 0), 0) === 4

              return (
                <div key={q.id} className={`p-4 rounded-lg border-l-4 ${
                  isCorrect ? 'bg-green-50 border-green-500' : (partial ? 'bg-yellow-50 border-yellow-500' : 'bg-red-50 border-red-500')
                }`}>
                  <p className="font-bold text-slate-800 mb-2">Q: {q.text}</p>
                  
                  {q.type === 'syllogism' ? (
                    <div className="space-y-2 text-xs">
                      {q.multiPartLabels?.map((label, idx) => (
                        <div key={idx} className="flex justify-between border-b border-slate-200 pb-1">
                          <span>{label}</span>
                          <span className="font-bold">
                            User: {answer?.[idx] === 1 ? 'YES' : (answer?.[idx] === 0 ? 'NO' : 'Skipped')} | Correct: {q.multiPartCorrect?.[idx] === 1 ? 'YES' : 'NO'}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-1 text-sm">
                      <p className={isCorrect ? "text-green-700" : "text-red-700"}>
                        <strong>Your Answer:</strong> {q.options[answer] || "Skipped"}
                      </p>
                      {!isCorrect && (
                        <p className="text-green-700 font-bold">
                          <strong>Correct:</strong> {q.options[q.answerIndex]}
                        </p>
                      )}
                    </div>
                  )}
                  <div className="mt-3 p-3 bg-white/50 rounded text-xs text-slate-600 italic border border-slate-200">
                    {q.explanation}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="bg-slate-50 p-6 text-center border-t">
            <button 
              onClick={() => setView('selection')}
              className="bg-[#004a99] hover:bg-[#003366] text-white px-8 py-3 rounded font-bold transition-all"
            >
              Back to Selection
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (view === 'test' && selectedSet && currentQuestion) {
    return (
      <div className="min-h-screen bg-white flex flex-col font-sans select-text">
        <header className="bg-[#004a99] text-white h-14 flex items-center justify-between px-4 shadow-lg shrink-0">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setView('selection')}
              className="text-white/80 hover:text-white flex items-center gap-1 text-xs font-bold transition-colors border border-white/30 px-2 py-1 rounded"
            >
              HOME
            </button>
            <div className="font-bold text-lg tracking-tight">UCAT {selectedSet.section.toUpperCase()}</div>
            <div className="flex gap-2">
              <button 
                type="button"
                onClick={() => setShowCalculator(!showCalculator)}
                className={`px-3 py-1 rounded text-xs font-bold transition-colors border border-white/30 cursor-pointer ${showCalculator ? 'bg-white text-[#004a99]' : 'hover:bg-white/10'}`}
              >
                CALCULATOR
              </button>
              <button 
                type="button"
                onClick={() => setShowNavigator(!showNavigator)}
                className={`px-3 py-1 rounded text-xs font-bold transition-colors border border-white/30 ${showNavigator ? 'bg-white text-[#004a99]' : 'hover:bg-white/10'}`}
              >
                NAVIGATOR
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="bg-white/10 px-4 py-1 rounded-md flex flex-col items-center">
              <span className="text-[10px] opacity-70 leading-none">TIME REMAINING</span>
              <span className={`font-mono text-lg font-bold ${timeLeft < 30 ? 'text-red-300' : ''}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
            <button 
              onClick={handleFinishTest}
              className="bg-[#cc0000] hover:bg-[#990000] text-white px-4 py-1 rounded text-xs font-black uppercase tracking-widest transition-colors shadow-inner"
            >
              End Test
            </button>
          </div>
        </header>

        <div className="bg-[#f0f0f0] border-b border-slate-300 h-10 flex items-center justify-between px-4 shrink-0 shadow-sm">
          <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
            <span>Item {currentQuestionIndex + 1} of {totalQuestionCount}</span>
            <div className="h-4 w-px bg-slate-300"></div>
            <button 
              onClick={toggleFlag}
              className={`flex items-center gap-1 px-2 py-1 rounded transition-colors ${flaggedQuestions[currentQuestion.id] ? 'bg-yellow-100 text-yellow-700' : 'hover:bg-slate-200'}`}
            >
              <span className="text-base">{flaggedQuestions[currentQuestion.id] ? '🚩' : '🏳️'}</span>
              FLAG FOR REVIEW
            </button>
          </div>
        </div>

        <main className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
          {showCalculator && (
            <Draggable handle=".calculator-handle">
              <div className="absolute top-10 right-10 z-[100] cursor-move active:cursor-grabbing">
                <div className="calculator-handle bg-slate-800 text-white text-[10px] px-2 py-1 rounded-t-lg font-bold flex justify-between items-center">
                  <span>UCAT CALCULATOR</span>
                  <button onClick={() => setShowCalculator(false)} className="hover:text-red-400">✕</button>
                </div>
                <Calculator />
              </div>
            </Draggable>
          )}

          {showNavigator && (
            <div className="absolute inset-0 bg-black/50 z-[90] flex items-center justify-center p-4">
              <div className="bg-white w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
                <div className="bg-[#004a99] text-white p-4 font-bold flex justify-between items-center">
                  <span>Navigator Summary</span>
                  <button onClick={() => setShowNavigator(false)} className="hover:opacity-70 font-black">CLOSE</button>
                </div>
                <div className="overflow-y-auto p-4 grid grid-cols-4 md:grid-cols-8 gap-2">
                  {selectedSet.questions.map((q, idx) => (
                    <button
                      key={q.id}
                      onClick={() => { setCurrentQuestionIndex(idx); setShowNavigator(false); }}
                      className={`h-12 border rounded flex flex-col items-center justify-center transition-colors ${
                        currentQuestionIndex === idx ? 'border-[#004a99] bg-blue-50 ring-2 ring-[#004a99]' : 
                        userAnswers[q.id] !== undefined ? 'bg-slate-100 border-slate-300' : 'bg-white border-slate-200 hover:border-[#004a99]'
                      }`}
                    >
                      <span className="text-xs font-bold">{idx + 1}</span>
                      <div className="flex gap-1">
                        {flaggedQuestions[q.id] && <span className="text-[10px]">🚩</span>}
                        {userAnswers[q.id] !== undefined && <span className="text-[10px] text-green-600">✓</span>}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="p-4 bg-slate-50 border-t flex justify-center">
                  <button 
                    onClick={handleFinishTest}
                    className="bg-[#004a99] text-white px-8 py-2 rounded font-bold hover:bg-[#003366]"
                  >
                    End Practice and See Score
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="flex-1 p-8 overflow-auto border-r border-slate-300 bg-white">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-slate-50 p-4 border border-slate-200 rounded-lg">
                <h2 className="text-xl font-bold text-[#004a99] mb-2 uppercase tracking-wide">{selectedSet.title}</h2>
                <p className="text-slate-700 leading-relaxed text-sm">{selectedSet.context}</p>
              </div>
              
              <div className="bg-white rounded border border-slate-200 shadow-sm overflow-hidden">
                <DataSourceRenderer 
                  type={selectedSet.type} 
                  dataSource={selectedSet.dataSource} 
                  currentQuestionId={currentQuestion.id}
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-[480px] bg-[#f9f9f9] border-l border-slate-300 p-8 flex flex-col z-10 shadow-[-4px_0_15px_rgba(0,0,0,0.02)]">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-800 mb-8 leading-tight">
                {currentQuestion.text}
              </h3>

              <div className="space-y-4">
                {currentQuestion.type === 'syllogism' ? (
                  <div className="space-y-6">
                    {currentQuestion.multiPartLabels?.map((label, partIdx) => (
                      <div key={partIdx} className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                        <p className="text-sm font-bold text-slate-700 mb-3">{label}</p>
                        <div className="flex gap-2">
                          {[1, 0].map((val) => {
                            const isSelected = (userAnswers[currentQuestion.id] as number[])?.[partIdx] === val;
                            return (
                              <button
                                key={val}
                                onClick={() => handleAnswerSelect(val, partIdx)}
                                className={`flex-1 py-2 px-4 rounded border-2 font-bold text-xs transition-all ${
                                  isSelected 
                                    ? 'bg-[#004a99] border-[#004a99] text-white shadow-md' 
                                    : 'bg-white border-slate-200 text-slate-500 hover:border-[#004a99] hover:text-[#004a99]'
                                }`}
                              >
                                {val === 1 ? 'YES' : 'NO'}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  currentQuestion.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswerSelect(idx)}
                      className={`w-full text-left p-4 rounded border-2 transition-all cursor-pointer flex items-center group ${
                        userAnswers[currentQuestion.id] === idx
                          ? 'border-[#004a99] bg-[#eef6ff] shadow-md'
                          : 'border-white bg-white hover:border-slate-200 hover:shadow-sm'
                      }`}
                    >
                      <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center mr-4 text-xs font-bold shrink-0 transition-colors ${
                        userAnswers[currentQuestion.id] === idx
                          ? 'bg-[#004a99] border-[#004a99] text-white'
                          : 'border-slate-300 text-slate-500 group-hover:border-[#004a99]'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span className={`font-medium ${userAnswers[currentQuestion.id] === idx ? 'text-[#004a99]' : 'text-slate-700'}`}>
                        {option}
                      </span>
                    </button>
                  ))
                )}
              </div>
            </div>

            <div className="mt-12 flex justify-between items-center bg-slate-200/50 p-2 rounded-lg">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="px-6 py-2 rounded text-xs font-black uppercase tracking-widest text-[#004a99] hover:bg-white transition-all disabled:opacity-20"
              >
                ← Previous
              </button>
              <button
                onClick={handleNext}
                className="bg-[#004a99] hover:bg-[#003366] text-white px-10 py-2 rounded text-xs font-black uppercase tracking-widest transition-all shadow-lg active:scale-95"
              >
                {currentQuestionIndex === totalQuestionCount - 1 ? 'Review All' : 'Next →'}
              </button>
            </div>
          </div>
        </main>

        <footer className="h-6 bg-slate-100 border-t border-slate-200 flex items-center px-4 justify-between text-[10px] text-slate-400 font-bold uppercase tracking-widest shrink-0">
          <span>© 2026 UCAT Sprint Practice</span>
          <span>Pearson VUE Mock Interface v4.0</span>
        </footer>
      </div>
    )
  }

  return null
}

export default App
