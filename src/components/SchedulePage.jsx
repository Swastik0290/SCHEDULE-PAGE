import React from 'react';
import './SchedulePage.css';

const SchedulePage = () => {
  const days = [
    { name: 'Sunday', events: [{ time: '7:00 AM', event: 'YOGA' }, { time: '11:00 AM', event: 'BWORKZ' }, { time: '9:00 PM', event: 'BWOKRZ' }, { time: '9:30 PM', event: 'BACHATA' }] },
    { name: 'Monday', events: [{ time: '7:00 AM', event: 'YOGA' }, { time: '11:00 AM', event: 'BWORKZ' }, { time: '9:00 PM', event: 'BWOKRZ' }, { time: '9:30 PM', event: 'BACHATA' }] },
    { name: 'Tuesday', events: [{ time: '7:00 AM', event: 'YOGA' }, { time: '11:00 AM', event: 'BWORKZ' }, { time: '9:00 PM', event: 'BWOKRZ' }, { time: '9:30 PM', event: 'BACHATA' }] },
    { name: 'Wednesday', events: [{ time: '7:00 AM', event: 'YOGA' }, { time: '11:00 AM', event: 'BWORKZ' }, { time: '9:00 PM', event: 'BWOKRZ' }, { time: '9:30 PM', event: 'BACHATA' }] },
    { name: 'Thursday', events: [{ time: '7:00 AM', event: 'YOGA' }, { time: '11:00 AM', event: 'BWORKZ' }, { time: '9:00 PM', event: 'BWOKRZ' }, { time: '9:30 PM', event: 'BACHATA' }] },
    { name: 'Friday', events: [{ time: '7:00 AM', event: 'YOGA' }, { time: '11:00 AM', event: 'BWORKZ' }, { time: '9:00 PM', event: 'BWOKRZ' }, { time: '9:30 PM', event: 'BACHATA' }] },
    { name: 'Saturday', events: [{ time: '7:00 AM', event: 'YOGA' }, { time: '11:00 AM', event: 'BWORKZ' }, { time: '9:00 PM', event: 'BWOKRZ' }, { time: '9:30 PM', event: 'BACHATA' }] }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className=' flex justify-center '> <div className="text-center text-5xl galindo-regular items-center text-white bg-primary w-40 mb-8">July</div> </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
        {days.map((day, index) => (
          <div key={index} className="bg-primary p-4 rounded shadow-lg">
            <h2 className={`text-xl ${index === 6 ? 'text-b bg-white ' : 'text-white '} fasthand-regular sm:text-3xl text-center mb-4`}>{day.name}</h2>
            {day.events.map((event, idx) => (
              <div key={idx} className="mb-2 flex justify-between text-white text-xs sm:text-sm chelsea-market-regular">
                <span>{event.time}</span>
                <span>{event.event}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;
