import { EyeIcon, EyeOffIcon, Wand2, ClipboardCheck } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import zxcvbn from 'zxcvbn';

type Props = {
  field: any;
  showPassGen?: boolean;
};

const generatePassword = (length = 12) => {
  const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
};

const PasswordInputField = ({ field, showPassGen = false }: Props) => {
  const [show, setShow] = useState(false);
  const [suggested, setSuggested] = useState('');
  const [copied, setCopied] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const passwordValue = field?.value || '';

  useEffect(() => {
    if (passwordValue) {
      const result = zxcvbn(passwordValue);
      setScore(result.score);
    } else {
      setScore(null);
    }
  }, [passwordValue]);

  const handleGenerate = () => {
    const pwd = generatePassword();
    setSuggested(pwd);
    setCopied(false);
  };

  const handleUsePassword = () => {
    field.onChange(suggested);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(suggested);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const getStrengthLabel = (score: number | null) => {
    switch (score) {
      case 0:
        return 'Very Weak';
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Strong';
      case 4:
        return 'Very Strong';
      default:
        return '';
    }
  };

  const getStrengthColor = (score: number | null) => {
    return [
      'bg-red-500',
      'bg-orange-500',
      'bg-yellow-500',
      'bg-blue-500',
      'bg-green-500',
    ][score ?? 0];
  };

  return (
    <div className='space-y-2'>
      <div className='relative'>
        <Input
          {...field}
          type={show ? 'text' : 'password'}
          placeholder='********'
          className='pr-10 border border-zinc-800 dark:border-zinc-200'
        />
        <div className='top-1/2 right-3 absolute flex items-center gap-2 -translate-y-1/2'>
          {showPassGen && (
            <Wand2
              size={18}
              className='hover:text-blue-500 transition cursor-pointer'
              onClick={handleGenerate}
            />
          )}
          {show ? (
            <EyeOffIcon
              size={18}
              onClick={() => setShow((prev) => !prev)}
              className='hover:text-zinc-500 transition cursor-pointer'
            />
          ) : (
            <EyeIcon
              size={18}
              onClick={() => setShow((prev) => !prev)}
              className='hover:text-zinc-500 transition cursor-pointer'
            />
          )}
        </div>
      </div>

      {showPassGen && passwordValue && (
        <div className='flex items-center gap-2 text-zinc-600 dark:text-zinc-300 text-xs'>
          <div className='flex-1 bg-zinc-300 dark:bg-zinc-700 rounded h-2 overflow-hidden'>
            <div
              className={`h-full transition-all ${getStrengthColor(score)}`}
              style={{ width: `${((score ?? 0) + 1) * 20}%` }}
            />
          </div>
          <span>{getStrengthLabel(score)}</span>
        </div>
      )}

      {showPassGen && suggested && (
        <div className='flex flex-col gap-2 bg-zinc-100 dark:bg-zinc-800 shadow-inner p-3 rounded-xl'>
          <div className='flex justify-between items-center text-zinc-700 dark:text-zinc-200 text-sm'>
            <code className='truncate'>{suggested}</code>
            <div className='flex gap-1'>
              <Button
                size='sm'
                variant='secondary'
                onClick={handleUsePassword}
                className='text-xs'>
                Use
              </Button>
              <Button
                size='sm'
                variant='ghost'
                onClick={handleCopy}
                className='text-xs'>
                {copied ? <ClipboardCheck size={16} /> : 'Copy'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordInputField;
