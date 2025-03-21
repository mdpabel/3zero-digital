'use client';
import React, { useState } from 'react';
import GaugeChart from 'react-gauge-chart'; // For the Security Strength Meter

// Define the type for a checklist item
interface ChecklistItem {
  id: number;
  label: string;
  points: number; // Points assigned to each checklist item
}

// Define the props for the SecurityStrengthMeter component
interface SecurityStrengthMeterProps {
  score: number;
  totalPoints: number;
}
// Define the checklist items array
const checklistItems: ChecklistItem[] = [
  {
    id: 1,
    label: 'Keep WordPress, themes, and plugins updated regularly.',
    points: 10,
  },
  {
    id: 2,
    label: 'Ensure your site is running PHP version 8.2 or higher.',
    points: 10,
  },
  {
    id: 3,
    label: 'Choose a reliable and reputable hosting provider.',
    points: 10,
  },
  {
    id: 4,
    label: 'Enable automatic updates for WordPress, themes, and plugins.',
    points: 10,
  },
  {
    id: 5,
    label: 'Set up automatic backups to secure your website data.',
    points: 10,
  },
  {
    id: 6,
    label:
      'Use security plugins like Wordfence or All In One Security for protection.',
    points: 10,
  },
  {
    id: 7,
    label:
      'Implement anti-spam measures, such as WP Armour’s Honeypot protection.',
    points: 10,
  },
  {
    id: 8,
    label: 'Regularly review administrator accounts for unauthorized access.',
    points: 10,
  },
  {
    id: 9,
    label: 'Check for and install updates at least once a week.',
    points: 10,
  },
  {
    id: 10,
    label:
      'Only download themes and plugins from trusted and verified sources.',
    points: 10,
  },
  {
    id: 11,
    label:
      'Remove unused themes, plugins, and outdated installations promptly.',
    points: 10,
  },
  {
    id: 12,
    label: 'Use strong, unique passwords for all accounts.',
    points: 10,
  },
  {
    id: 13,
    label: 'Enable two-factor authentication for an added layer of security.',
    points: 10,
  },
  {
    id: 14,
    label: 'Change and hide the default WordPress login URL.',
    points: 10,
  },
  {
    id: 15,
    label: 'Limit login attempts to prevent brute force attacks.',
    points: 10,
  },
  {
    id: 16,
    label: 'Install an SSL certificate to enable HTTPS for your site.',
    points: 10,
  },
  {
    id: 17,
    label:
      'Perform regular security scans using plugins like Wordfence or Sucuri.',
    points: 10,
  },
  {
    id: 18,
    label: 'Block access from countries that do not need to visit your site.',
    points: 10,
  },
  {
    id: 19,
    label: 'Visit your website weekly to monitor for issues or changes.',
    points: 10,
  },
  {
    id: 20,
    label: 'Search for your website on Google to ensure it’s indexed properly.',
    points: 10,
  },
  {
    id: 21,
    label:
      'Monitor traffic for unusual spikes that could signal a security issue.',
    points: 10,
  },
  {
    id: 22,
    label: 'Use a strong password for your MySQL database account.',
    points: 10,
  },
  {
    id: 23,
    label: 'Avoid using the default WordPress table prefix (_wp).',
    points: 10,
  },
  {
    id: 24,
    label: 'Set file permissions to 644 for files and 755 for directories.',
    points: 10,
  },
  {
    id: 25,
    label: 'Restrict wp-config.php file permissions to 640 for security.',
    points: 10,
  },
  {
    id: 26,
    label: 'Review WordPress administrator accounts at least monthly.',
    points: 10,
  },
];

// SecurityStrengthMeter component
const SecurityStrengthMeter: React.FC<SecurityStrengthMeterProps> = ({
  score,
  totalPoints,
}) => {
  const percentage = score / totalPoints;

  return (
    <div className='top-0 sticky p-6 max-w-xl'>
      <h1 className='mb-6 font-semibold text-2xl text-center'>
        Security Strength Meter
      </h1>
      <div className='flex flex-col items-center space-y-6'>
        {/* Gauge Chart */}
        <GaugeChart
          id='gauge-chart'
          nrOfLevels={30}
          arcsLength={[0.33, 0.33, 0.34]} // Color segmentation: Green, Yellow, Red
          colors={['#4caf50', '#ffeb3b', '#f44336']} // Green, Yellow, Red
          arcWidth={0.3}
          percent={percentage}
          needleColor='#3565FF'
          needleBaseColor='#3565FF'
          animateDuration={2000}
        />
        {/* Info Section */}
        <div className='text-center'>
          <div className='font-semibold text-lg'>
            <span>Total Achievable Points: </span>
            <span className='text-green-500'>{totalPoints}</span>
          </div>
          <div className='mt-2 font-semibold text-lg'>
            <span>Current Score of Your Site: </span>
            <span className='text-blue-500'>{score}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define the type for the Checklist component state
interface ChecklistState {
  checkedItems: number[];
}

// Checklist component
const Checklist: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<
    ChecklistState['checkedItems']
  >([]);
  const totalItems = checklistItems.length;

  // Toggle check/uncheck item
  const handleChange = (id: number, points: number) => {
    setCheckedItems((prev) => {
      const newCheckedItems = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];

      return newCheckedItems;
    });
  };

  // Calculate total score based on selected items' points
  const score = checkedItems.reduce((total, id) => {
    const item = checklistItems.find((item) => item.id === id);
    return item ? total + item.points : total;
  }, 0);

  return (
    <div className='space-y-6 mx-auto px-4 py-10 max-w-6xl'>
      <div className='gap-6 grid grid-cols-1 lg:grid-cols-2'>
        {/* Left Column - Checklist Items */}
        <div className='space-y-4'>
          <h1 className='font-semibold text-2xl'>
            WordPress Security Checklist
          </h1>
          <div className='space-y-4'>
            {checklistItems.map((item) => (
              <div key={item.id} className='flex items-center space-x-3'>
                <div>
                  <input
                    type='checkbox'
                    id={`item-${item.id}`}
                    checked={checkedItems.includes(item.id)}
                    onChange={() => handleChange(item.id, item.points)}
                    className='w-5 h-5 form-checkbox'
                  />
                </div>
                <label htmlFor={`item-${item.id}`}>{item.label}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Security Strength Meter */}
        <div className='top-0 sticky space-y-6'>
          <SecurityStrengthMeter score={score} totalPoints={totalItems * 10} />
        </div>
      </div>
    </div>
  );
};

export default Checklist;
