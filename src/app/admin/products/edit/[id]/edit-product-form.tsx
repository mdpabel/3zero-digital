'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Category, Product } from '@prisma/client';
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
import { updateProduct } from '@/actions/product/update-product';

const EditProductForm = ({
  product,
  category,
  categories,
}: {
  product: Product;
  category: Category;
  categories: Category[];
}) => {
  // Initialize form with existing product data
  const form = useForm<z.infer<typeof productFormSchema>>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: product.name || '',
      price: product.price || 0,
      origPrice: product.origPrice || 0,
      description: product.description || '',
      imageUrl: product.imageUrl || '',
      categoryId: product.categoryId || category.id || '',
    },
  });

  const [state, formAction] = useFormState(updateProduct, {
    message: '',
    success: false,
  });

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(async (values) => {
            const formData = new FormData();
            formData.append('id', product.id); // Include the product ID for updating
            formData.append('name', values.name);
            formData.append('price', values.price.toString());
            formData.append('origPrice', values.origPrice.toString());
            formData.append('description', values.description || '');
            formData.append('imageUrl', values.imageUrl || '');
            formData.append('categoryId', values.categoryId || '');

            await formAction(formData); // Call the server action to update the product
          })}
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
                <FormLabel>Original Price</FormLabel>
                <FormControl>
                  <Input
                    type='number'
                    placeholder='Original Price'
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
                  <Select onValueChange={field.onChange} value={field.value}>
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

          <div className='max-w-52'>
            <FormButton>Update Product</FormButton>
          </div>

          <p
            className={cn(
              'text-red-500 mt-4',
              state.success && 'text-green-800',
            )}>
            {state?.message}
          </p>
        </form>
      </Form>
    </div>
  );
};

export default EditProductForm;
