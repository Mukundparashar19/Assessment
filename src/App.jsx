import { useState } from "react"
function App() {
  
  const [amount, setAmount] = useState(100)
  const [intrest, setIntrest] = useState()
  const [term, setTerm] = useState()
  const [date, setDate] = useState()


  return (
    <>
     
<div href="#" class="block max-w-sm space-y-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h1>Loan details</h1>
<div>
      <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Loan amount</label>
      <input type="text" id="small-input" value={amount} onChange={() =>setAmount} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>

  <div>
      <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Interest rate</label>
      <input type="text" id="small-input" value={intrest} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>

  <div>
      <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Loan term (months)</label>
      <input type="text" id="small-input" value={term} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>

  <div>
      <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start date</label>
      <input type="text" id="small-input" value={date} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
  
  

</div>

    </>
  );
}

export default App;
