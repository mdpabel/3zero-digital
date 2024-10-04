'use client';
import { useEffect, useState } from 'react';

const employees = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' },
  { id: 4, name: 'Bob Brown' },
];

const Page = () => {
  const [days, setDays] = useState<number[]>([]);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [scores, setScores] = useState<{
    [employeeId: number]: { [day: number]: number };
  }>({});

  useEffect(() => {
    const date = new Date();
    setCurrentMonth(date);

    // Get number of days in the current month
    const totalDays = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0,
    ).getDate();
    const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);
    setDays(daysArray);

    // Check every day if the date changes
    const interval = setInterval(() => {
      const now = new Date();
      if (now.getDate() === 1) {
        resetMonthlyPerformance();
      }
    }, 86400000); // Check every day

    return () => clearInterval(interval);
  }, []);

  const resetMonthlyPerformance = async () => {
    // Call an API to reset the monthly performance records
    await fetch('/api/reset-performance', {
      method: 'POST',
    });

    // Reset scores in state
    setScores({});
  };

  const handleScoreChange = (
    employeeId: number,
    day: number,
    score: number,
  ) => {
    setScores((prev) => ({
      ...prev,
      [employeeId]: {
        ...prev[employeeId],
        [day]: score,
      },
    }));
  };

  return (
    <div className='mx-auto p-4 container'>
      <h1 className='mb-4 font-bold text-2xl'>
        Performance Tracking for{' '}
        {currentMonth.toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        })}
      </h1>
      <button className='bg-blue-500 hover:bg-blue-600 mb-4 px-4 py-2 rounded text-white transition duration-200'>
        Reset Monthly Performance
      </button>
      <table className='border-gray-300 bg-white border min-w-full'>
        <thead>
          <tr className='bg-gray-200 text-gray-700'>
            <th className='px-4 py-2 border'>Date</th>
            {employees.map((employee) => (
              <th key={employee.id} className='px-4 py-2 border'>
                {employee.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((day) => (
            <tr key={day} className='hover:bg-gray-100'>
              <td className='px-4 py-2 border'>{day}</td>
              {employees.map((employee) => (
                <td key={employee.id} className='px-4 py-2 border'>
                  <select
                    onChange={(e) =>
                      handleScoreChange(
                        employee.id,
                        day,
                        Number(e.target.value),
                      )
                    }
                    value={scores[employee.id]?.[day] || ''}
                    className='border-gray-300 p-1 border rounded'>
                    <option value=''>Select Score</option>
                    {[...Array(10)].map((_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
