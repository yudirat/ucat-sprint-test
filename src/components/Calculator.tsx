import { useState } from 'react'

export function Calculator() {
  const [display, setDisplay] = useState('0')
  const [memory, setMemory] = useState<number | null>(null)
  const [operator, setOperator] = useState<string | null>(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit)
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? digit : display + digit)
    }
  }

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
    } else if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  const clearAll = () => {
    setDisplay('0')
    setMemory(null)
    setOperator(null)
    setWaitingForOperand(false)
  }

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(display)

    if (memory === null) {
      setMemory(inputValue)
    } else if (operator) {
      const currentValue = memory || 0
      const newValue = calculate(currentValue, inputValue, operator)
      setMemory(newValue)
      setDisplay(String(newValue))
    }

    setWaitingForOperand(true)
    setOperator(nextOperator === '=' ? null : nextOperator)
    if (nextOperator === '=') setMemory(null)
  }

  const calculate = (left: number, right: number, op: string) => {
    switch (op) {
      case '+': return left + right
      case '-': return left - right
      case '*': return left * right
      case '/': return right === 0 ? 0 : left / right
      default: return right
    }
  }

  return (
    <div className="bg-slate-700 p-3 rounded-lg shadow-xl w-64 text-white select-auto">
      <div className="bg-slate-900 p-2 mb-3 text-right text-2xl font-mono rounded overflow-hidden">
        {display}
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button onClick={clearAll} className="col-span-3 bg-red-500 hover:bg-red-600 p-2 rounded font-bold">C</button>
        <button onClick={() => performOperation('/')} className="bg-slate-500 hover:bg-slate-600 p-2 rounded font-bold">/</button>
        
        {[7, 8, 9].map(d => (
          <button key={d} onClick={() => inputDigit(String(d))} className="bg-slate-600 hover:bg-slate-500 p-2 rounded font-bold">{d}</button>
        ))}
        <button onClick={() => performOperation('*')} className="bg-slate-500 hover:bg-slate-600 p-2 rounded font-bold">×</button>
        
        {[4, 5, 6].map(d => (
          <button key={d} onClick={() => inputDigit(String(d))} className="bg-slate-600 hover:bg-slate-500 p-2 rounded font-bold">{d}</button>
        ))}
        <button onClick={() => performOperation('-')} className="bg-slate-500 hover:bg-slate-600 p-2 rounded font-bold">-</button>
        
        {[1, 2, 3].map(d => (
          <button key={d} onClick={() => inputDigit(String(d))} className="bg-slate-600 hover:bg-slate-500 p-2 rounded font-bold">{d}</button>
        ))}
        <button onClick={() => performOperation('+')} className="bg-slate-500 hover:bg-slate-600 p-2 rounded font-bold">+</button>
        
        <button onClick={() => inputDigit('0')} className="col-span-2 bg-slate-600 hover:bg-slate-500 p-2 rounded font-bold">0</button>
        <button onClick={inputDot} className="bg-slate-600 hover:bg-slate-500 p-2 rounded font-bold">.</button>
        <button onClick={() => performOperation('=')} className="bg-blue-500 hover:bg-blue-600 p-2 rounded font-bold">=</button>
      </div>
    </div>
  )
}
