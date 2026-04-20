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
    if (selectedSet && currentQuestion) {
      if (currentQuestion.type === 'syllogism' && partIndex !== undefined) {
        const currentParts = (userAnswers[currentQuestion.id] as number[]) || Array(currentQuestion.multiPartLabels?.length).fill(-1)
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

  const handleFinishTest = () => {
    setView('review')
    setIsTestFinished(true)
    setShowNavigator(false)
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
                      <p className="text-sm text-slate-500 mt-1 line-clamp-2">{set.context}</p>
                      <div className="mt-4 flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-slate-100 rounded text-[10px] font-black text-slate-400 group-hover:bg-[#eef6ff] group-hover:text-[#004a99] transition-colors uppercase tracking-widest">
                          {set.type.replace('_', ' ')}
                        </span>
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
      <div className="min-h-screen bg-[#f3f4f6] p-4 md:p-8 font-sans">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="bg-[#004a99] p-8 text-white text-center space-y-4">
              <h2 className="text-sm font-black uppercase tracking-[0.3em] opacity-80">Practice Results</h2>
              <div className="text-7xl font-black tracking-tighter tabular-nums">
                {score}<span className="text-2xl opacity-40 mx-2">/</span>{totalMax}
              </div>
              <p className="text-lg font-medium opacity-90">{selectedSet.title}</p>
            </div>
            
            <div className="p-8">
              <h3 className="text-xl font-black text-slate-800 mb-6 uppercase tracking-tight border-b-2 border-slate-100 pb-2">Question Review</h3>
              <div className="space-y-6">
                {selectedSet.questions.map((q) => {
                  const answer = userAnswers[q.id]
                  let isCorrect = false
                  if (q.type === 'syllogism') {
                    const correctParts = (answer as number[])?.reduce((count, val, idx) => count + (val === q.multiPartCorrect?.[idx] ? 1 : 0), 0) || 0
                    isCorrect = correctParts === 5
                  } else {
                    isCorrect = answer === q.answerIndex
                  }

                  return (
                    <div key={q.id} className={`p-6 rounded-xl border-l-4 transition-all shadow-sm ${
                      isCorrect ? 'bg-emerald-50/50 border-emerald-500' : 'bg-rose-50/50 border-rose-500'
                    }`}>
                      <div className="flex justify-between items-start mb-4">
                        <span className="font-black text-xs uppercase tracking-widest text-slate-400">Question {selectedSet.questions.indexOf(q) + 1}</span>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest ${
                          isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                        }`}>
                          {isCorrect ? 'Correct' : 'Incorrect'}
                        </span>
                      </div>
                      <p className="font-bold text-slate-800 mb-4">{q.text}</p>
                      <div className="bg-white/60 p-4 rounded-lg border border-slate-200/50">
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Explanation</p>
                        <p className="text-sm text-slate-600 leading-relaxed italic">{q.explanation}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
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
          <div className="flex gap-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">
              Question <span className="text-slate-800 text-sm">{currentQuestionIndex + 1}</span> of <span className="text-slate-800 text-sm">{totalQuestionCount}</span>
            </span>
          </div>
          <button 
            onClick={toggleFlag}
            className={`flex items-center gap-2 px-4 py-1 rounded text-xs font-black uppercase tracking-widest transition-all ${
              flaggedQuestions[currentQuestion.id] 
                ? 'bg-orange-500 text-white shadow-inner' 
                : 'text-slate-400 hover:bg-slate-200'
            }`}
          >
            <svg className="w-3 h-3" fill={flaggedQuestions[currentQuestion.id] ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-1 6 1 1H6.5l-1-1H3v4z" />
            </svg>
            {flaggedQuestions[currentQuestion.id] ? 'Flagged' : 'Flag'}
          </button>
        </div>

        <main className="flex-1 flex overflow-hidden relative">
          {/* Stimulus Area */}
          <div className="w-1/2 overflow-y-auto bg-slate-100/50 border-r border-slate-300 p-1 custom-scrollbar">
            <DataSourceRenderer 
              type={selectedSet.type} 
              dataSource={selectedSet.dataSource} 
              currentQuestionId={currentQuestion.id}
            />
          </div>

          {/* Question Area */}
          <div className="w-1/2 overflow-y-auto p-12 bg-white relative custom-scrollbar">
            {/* Calculator layer */}
            {showCalculator && (
              <Draggable handle=".handle" bounds="parent">
                <div className="absolute z-50 shadow-2xl rounded-xl overflow-hidden bg-slate-800 border-2 border-slate-700 w-64 top-4 right-4">
                  <div className="handle bg-slate-700 p-2 cursor-move flex justify-between items-center text-white text-[10px] font-black tracking-widest">
                    <span>UCAT CALCULATOR</span>
                    <button onClick={() => setShowCalculator(false)} className="hover:text-red-400">✕</button>
                  </div>
                  <Calculator />
                </div>
              </Draggable>
            )}

            {/* Navigator layer */}
            {showNavigator && (
              <Draggable handle=".handle" bounds="parent">
                <div className="absolute z-40 shadow-2xl rounded-xl overflow-hidden bg-white border-2 border-slate-200 w-80 top-4 left-4 flex flex-col max-h-[80%]">
                  <div className="handle bg-[#004a99] p-3 cursor-move flex justify-between items-center text-white text-xs font-black tracking-widest">
                    <span>QUESTION NAVIGATOR</span>
                    <button onClick={() => setShowNavigator(false)} className="hover:opacity-70 font-black">CLOSE</button>
                  </div>
                  <div className="overflow-y-auto p-4 grid grid-cols-4 md:grid-cols-8 gap-2">
                    {selectedSet.questions.map((q, idx) => (
                      <button
                        key={q.id}
                        onClick={() => {
                          setCurrentQuestionIndex(idx)
                          setShowNavigator(false)
                        }}
                        className={`aspect-square rounded flex items-center justify-center text-xs font-black transition-all relative ${
                          currentQuestionIndex === idx 
                            ? 'bg-[#004a99] text-white ring-2 ring-offset-2 ring-[#004a99]' 
                            : userAnswers[q.id] !== undefined
                              ? 'bg-slate-200 text-slate-600'
                              : 'bg-white border-2 border-slate-200 text-slate-400 hover:border-[#004a99]'
                        }`}
                      >
                        {idx + 1}
                        {flaggedQuestions[q.id] && (
                          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-white"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </Draggable>
            )}

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
