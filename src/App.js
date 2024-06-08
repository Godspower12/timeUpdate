import { useState } from "react";

function App() {

  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [progress, setProgress] = useState(null);

  const calculateProgress = (hours, minutes) => {
      const totalMinutes = (parseInt(hours) * 60) + parseInt(minutes);
      const totalTimeofTheDay = 24 * 60;
      const percentage = (totalMinutes / totalTimeofTheDay) * 100;
      return percentage.toFixed(2);
  };

  const handleTimeChange = () => {
      if (hours !== '' && minutes !== '') {
          const progress = calculateProgress(hours, minutes);
          setProgress(progress);
      } else {
          setProgress(null);
      }
  };

  return (
      <div>
          <label>
              Time:
              <input 
                  type="number" 
                  value={hours} 
                  onChange={(e) => setHours(e.target.value)} 
                  placeholder="h" 
                  min="0" 
                  max="23" 
              />
              :
              <input 
                  type="number" 
                  value={minutes} 
                  onChange={(e) => setMinutes(e.target.value)} 
                  placeholder="MM" 
                  min="0" 
                  max="59" 
              />
          </label>
          <button onClick={handleTimeChange} style={{ marginLeft: '10px' }}>Calculate</button>
          {progress !== null && (
            <div style={{ marginTop: '10px' }}> {hours}: {minutes} <span style={{marginLeft: '5px'}}>{progress}%</span> </div>
          )}
      </div>
  );
};



export default App;
