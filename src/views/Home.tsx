import { useState } from "react";
import { textToNumber } from "../utils/textToNumber";

const Home = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState('');

  const handleConvert = () => {
    try {
      const num = textToNumber(input);
      setResult(num);
      setError('');
    } catch (e) {
      setError((e as Error).message);
      setResult(null);
    }
  };

  return (
    <div className="flex flex-col px-6 py-8 rounded-lg m-auto bg-white dark:bg-neutral-900 align-left w-64">
      <h2 className="text-xl font-bold text-left">Text to Number</h2>
      <div className="flex flex-col my-3">
        <label className="mb-2 text-sm font-bold">Enter text</label>
        <textarea 
          className="resize-none text-sm bg-neutral-100 dark:bg-neutral-700 rounded px-4 py-2 h-32" 
          placeholder="e.g., two hundred thirty five"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="my-1 text-sm">
        {result !== null && <p><span className="font-bold">Number:</span> {result}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <div>
        <button 
          className="bg-blue-900 dark:bg-blue-400 text-white dark:text-black rounded px-8 py-1.5 mt-4 mx-auto align-left text-sm"
          onClick={handleConvert}
          >
            Convert
        </button>
      </div>
    </div>
  )
}

export default Home
