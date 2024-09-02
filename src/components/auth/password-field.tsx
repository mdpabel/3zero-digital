import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';
import { Input } from '../ui/input';

type Props = {
  field: any;
};

const PasswordInputField = ({ field }: Props) => {
  const [show, setShow] = useState(false);

  return (
    <div className='relative'>
      <Input
        {...field}
        className='border-zinc-800 dark:border-zinc-200 border'
        type={show ? 'text' : 'password'}
        placeholder='********'
      />
      {show ? (
        <EyeOffIcon
          onClick={() => setShow((prev) => !prev)}
          className='top-1/2 right-3 absolute -translate-y-1/2 cursor-pointer'
        />
      ) : (
        <EyeIcon
          onClick={() => setShow((prev) => !prev)}
          className='top-1/2 right-3 absolute -translate-y-1/2 cursor-pointer'
        />
      )}
    </div>
  );
};

export default PasswordInputField;
