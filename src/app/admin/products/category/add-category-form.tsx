'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { categoryFormSchema } from '@/schema/product/category-form-schema';
import { createCategory } from '@/actions/product/add-category';
import { useFormState } from 'react-dom';
import FormButton from '@/components/common/form-button';
import { cn } from '@/lib/utils';

const AddCategoryForm = () => {
  const form = useForm<z.infer<typeof categoryFormSchema>>({
    resolver: zodResolver(categoryFormSchema),
    defaultValues: { name: '' },
  });

  const [state, formAction] = useFormState(createCategory, {
    message: '',
    success: false,
  });

  return (
    <div>
      <h1 className='mb-8 font-bold text-3xl'>Add New Category</h1>
      <Form {...form}>
        <form
          action={() => {
            const values = form.getValues();
            const formData = new FormData();
            formData.append('name', values.name);
            formAction(formData);
          }}
          className='space-y-8'>
          {/* Category Name */}
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category Name</FormLabel>
                <FormControl>
                  <Input placeholder='Category Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className='max-w-52'>
            <FormButton />
          </div>

          {/* Display state message */}
          <p
            className={cn(
              'text-red-500 m6-4',
              state.success && 'text-green-800',
            )}>
            {state?.message}
          </p>
        </form>
      </Form>
    </div>
  );
};

export default AddCategoryForm;
