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
    label: 'Keep themes, plugins, and WordPress up to date.',
    points: 10,
  },
  {
    id: 2,
    label: 'Ensure PHP version 8.2 or higher is being used.',
    points: 10,
  },
  { id: 3, label: 'Choose a well-reputed hosting provider.', points: 10 },
  {
    id: 4,
    label: 'Enable automatic updates for themes, plugins, and WordPress.',
    points: 10,
  },
  { id: 5, label: 'Set up automatic backups of your website.', points: 10 },
  {
    id: 6,
    label:
      'Use security plugins (recommended: Wordfence and All In One Security).',
    points: 10,
  },
  {
    id: 7,
    label:
      'Implement form protection (recommended: WP Armour – Honeypot Anti-Spam).',
    points: 10,
  },
  {
    id: 8,
    label: 'Regularly review administrator users for security.',
    points: 10,
  },
  {
    id: 9,
    label:
      'Check for updates frequently (at least weekly) and install them as soon as possible.',
    points: 10,
  },
  {
    id: 10,
    label: 'Only download themes and plugins from trusted sources.',
    points: 10,
  },
  {
    id: 11,
    label:
      'Remove unused themes, plugins, and outdated WordPress installations immediately.',
    points: 10,
  },
  { id: 12, label: 'Use the strongest passwords possible.', points: 10 },
  {
    id: 13,
    label: 'Enable two-factor authentication whenever possible.',
    points: 10,
  },
  { id: 14, label: 'Hide the default WordPress login URL.', points: 10 },
  {
    id: 15,
    label: 'Limit the number of login attempts to prevent brute force attacks.',
    points: 10,
  },
  {
    id: 16,
    label: 'Install and configure an SSL certificate for HTTPS.',
    points: 10,
  },
  {
    id: 17,
    label:
      'Regularly scan your site using Wordfence and Sucuri (at least weekly or monthly).',
    points: 10,
  },
  {
    id: 18,
    label: 'Block access from countries that do not need to visit your site.',
    points: 10,
  },
  {
    id: 19,
    label:
      'Visit your site regularly (at least once or twice a week) to monitor for any issues.',
    points: 10,
  },
  {
    id: 20,
    label:
      "Frequently search for your website on Google to ensure it's indexed and appears in search results.",
    points: 10,
  },
  {
    id: 21,
    label:
      'Watch for unexpected spikes in site traffic that could indicate a security issue.',
    points: 10,
  },
  {
    id: 22,
    label: 'Use a strong password for your MySQL database user account.',
    points: 10,
  },
  {
    id: 23,
    label: 'Avoid using the default WordPress database table prefix (_wp).',
    points: 10,
  },
  {
    id: 24,
    label: 'Set file permissions to 644 for files and 755 for directories.',
    points: 10,
  },
  {
    id: 25,
    label: 'Set the permissions for wp-config.php file to 640.',
    points: 10,
  },
  {
    id: 26,
    label: 'Check WordPress admin users at least once a month.',
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
