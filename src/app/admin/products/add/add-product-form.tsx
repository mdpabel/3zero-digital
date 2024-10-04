'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Category } from '@prisma/client';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { productFormSchema } from '@/schema/product/product-form-schema';
import { createProduct } from '@/actions/product/add-product';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useFormState } from 'react-dom';
import FormButton from '@/components/common/form-button';
import { cn } from '@/lib/utils';

const AddProductForm = ({ categories }: { categories: Category[] }) => {
  const form = useForm<z.infer<typeof productFormSchema>>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: '',
      price: 0,
      description: '',
      imageUrl: '',
      categoryId: '',
    },
  });

  const [state, formAction] = useFormState(createProduct, {
    message: '',
    success: false,
  });

  return (
    <div>
      <Form {...form}>
        <form
          action={() => {
            const values = form.getValues();

            console.log(values.categoryId);
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('price', values.price.toString());
            formData.append('origPrice', values.origPrice.toString());
            formData.append('description', values.description || '');
            formData.append('imageUrl', values.imageUrl || '');
            formData.append('categoryId', values.categoryId || '');
            formAction(formData); // Call the server action
          }}
          className='space-y-8'>
          {/* Product Name */}
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input placeholder='Product Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Price */}
          <FormField
            control={form.control}
            name='price'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type='number' placeholder='Product Price' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Original Price */}
          <FormField
            control={form.control}
            name='origPrice'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Orig Price</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    placeholder='Product origPrice'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder='Product Description' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Image URL */}
          <FormField
            control={form.control}
            name='imageUrl'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder='https://example.com/image.jpg'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category Selector */}
          <FormField
            control={form.control}
            name='categoryId'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select
                    required
                    onValueChange={field.onChange}
                    value={field.value}>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Select a category' />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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

export default AddProductForm;
