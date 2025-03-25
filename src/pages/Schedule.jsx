import React, { useState } from 'react';
import './Schedule.css';

const Schedule = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    trainer: 'all',
    classType: 'all',
    timeSlot: 'all'
  });

  const timeSlots = [
    'Morning (6AM - 12PM)',
    'Afternoon (12PM - 5PM)',
    'Evening (5PM - 10PM)'
  ];

  const trainers = [
    'All Trainers',
    'John Smith',
    'Sarah Wilson',
    'Mike Johnson',
    'Emma Davis'
  ];

  const classTypes = [
    'All Classes',
    'HIIT Training',
    'Yoga Flow',
    'Strength & Conditioning',
    'Spin Class',
    'Pilates',
    'Boxing'
  ];

  const weeklySchedule = [
    {
      day: 'Monday',
      classes: [
        {
          time: '6:00 AM - 7:00 AM',
          name: 'HIIT Training',
          trainer: 'Mike Johnson',
          capacity: '15/20',
          type: 'HIIT Training'
        },
        {
          time: '8:00 AM - 9:00 AM',
          name: 'Yoga Flow',
          trainer: 'Sarah Wilson',
          capacity: '12/15',
          type: 'Yoga Flow'
        },
        {
          time: '5:00 PM - 6:00 PM',
          name: 'Strength & Conditioning',
          trainer: 'John Smith',
          capacity: '8/12',
          type: 'Strength & Conditioning'
        }
      ]
    },
    {
      day: 'Tuesday',
      classes: [
        {
          time: '7:00 AM - 8:00 AM',
          name: 'Spin Class',
          trainer: 'Emma Davis',
          capacity: '12/18',
          type: 'Spin Class'
        },
        {
          time: '9:00 AM - 10:00 AM',
          name: 'Pilates',
          trainer: 'Sarah Wilson',
          capacity: '10/15',
          type: 'Pilates'
        },
        {
          time: '6:00 PM - 7:00 PM',
          name: 'Boxing',
          trainer: 'Mike Johnson',
          capacity: '8/10',
          type: 'Boxing'
        }
      ]
    }
    // Add more days here
  ];

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const getTimeSlot = (time) => {
    const hour = parseInt(time.split(':')[0]);
    if (hour >= 6 && hour < 12) return 'Morning (6AM - 12PM)';
    if (hour >= 12 && hour < 17) return 'Afternoon (12PM - 5PM)';
    return 'Evening (5PM - 10PM)';
  };

  const filteredSchedule = weeklySchedule.map(day => ({
    ...day,
    classes: day.classes.filter(cls => {
      const trainerMatch = selectedFilters.trainer === 'all' || selectedFilters.trainer === 'All Trainers' || cls.trainer === selectedFilters.trainer;
      const classMatch = selectedFilters.classType === 'all' || selectedFilters.classType === 'All Classes' || cls.type === selectedFilters.classType;
      const timeMatch = selectedFilters.timeSlot === 'all' || selectedFilters.timeSlot === getTimeSlot(cls.time);
      return trainerMatch && classMatch && timeMatch;
    })
  }));

  return (
    <div className="schedule">
      <section className="schedule-hero">
        <div className="schedule-hero-content">
          <h1>Class Schedule</h1>
          <p>Find and book your next workout session</p>
        </div>
      </section>

      <section className="schedule-content">
        <div className="container">
          {/* Filters */}
          <div className="filters">
            <div className="filter-group">
              <label>Trainer:</label>
              <select
                value={selectedFilters.trainer}
                onChange={(e) => handleFilterChange('trainer', e.target.value)}
              >
                {trainers.map((trainer, index) => (
                  <option key={index} value={trainer}>{trainer}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Class Type:</label>
              <select
                value={selectedFilters.classType}
                onChange={(e) => handleFilterChange('classType', e.target.value)}
              >
                {classTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Time Slot:</label>
              <select
                value={selectedFilters.timeSlot}
                onChange={(e) => handleFilterChange('timeSlot', e.target.value)}
              >
                <option value="all">All Time Slots</option>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Schedule Table */}
          <div className="schedule-table">
            {filteredSchedule.map((day, index) => (
              <div key={index} className="day-schedule">
                <h2>{day.day}</h2>
                <div className="classes-list">
                  {day.classes.length > 0 ? (
                    day.classes.map((cls, idx) => (
                      <div key={idx} className="class-item">
                        <div className="class-time">{cls.time}</div>
                        <div className="class-details">
                          <h3>{cls.name}</h3>
                          <p>Trainer: {cls.trainer}</p>
                          <p>Capacity: {cls.capacity}</p>
                        </div>
                        <button className="enroll-btn">Enroll</button>
                      </div>
                    ))
                  ) : (
                    <div className="no-classes">No classes match your filters</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule; 