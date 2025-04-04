'use client';
import { Product, Template } from '@prisma/client';
import React, { useState, useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { createAdminOrder } from '@/actions/order/create-admin-order';
import Spinner from '@/components/common/spinner';

const AdminOrderForm = ({
  products,
  templates,
}: {
  products: Product[];
  templates: Template[];
}) => {
  const [productType, setProductType] = useState('product');
  const [selectedProductId, setSelectedProductId] = useState<string>('');
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [note, setNote] = useState('');
  const [websites, setWebsites] = useState('');
  const [couponId, setCouponId] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [pending, setPending] = useState(false);

  const handleProductTypeChange = (value: string) => {
    setProductType(value);
    setSelectedProductId(''); // Clear previous selections
    setSelectedTemplateId(''); // Clear previous selections
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setPending(true);
      const res = await createAdminOrder({
        email,
        firstName,
        lastName,
        productType: productType as 'product' | 'template',
        quantity,
        couponId,
        note,
        productId: selectedProductId,
        templateId: selectedTemplateId,
        websites,
      });
      console.log({ res });
      // Simulate order creation
      setMessage('Order created successfully!');
      // You can send the data to your backend here...
    } catch (err) {
      setError('Failed to create order');
    } finally {
      setPending(false);
    }
  };

  return (
    <div className='mx-auto p-4 max-w-md'>
      <h2 className='mb-4 font-semibold text-2xl'>Create Order for Client</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <Label htmlFor='productType'>Product Type</Label>
          <Select value={productType} onValueChange={handleProductTypeChange}>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Select product type' />
            </SelectTrigger>
            <SelectContent className='w-full'>
              <SelectGroup>
                <SelectLabel>Select product type</SelectLabel>
                <SelectItem value='product'>Service</SelectItem>
                <SelectItem value='template'>Template</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {productType === 'product' && (
          <div className='mb-4'>
            <Label htmlFor='productId'>Product</Label>
            <Select
              value={selectedProductId}
              onValueChange={(value) => setSelectedProductId(value)}>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select a product' />
              </SelectTrigger>
              <SelectContent className='w-full'>
                <SelectGroup>
                  <SelectLabel>Select a product</SelectLabel>
                  {products.map((product) => (
                    <SelectItem key={product.id} value={product.id}>
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        )}

        {productType === 'template' && (
          <div className='mb-4'>
            <Label htmlFor='templateId'>Template</Label>
            <Select
              value={selectedTemplateId}
              onValueChange={(value) => setSelectedTemplateId(value)}>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select a template' />
              </SelectTrigger>
              <SelectContent className='w-full'>
                <SelectGroup>
                  <SelectLabel>Select a template</SelectLabel>
                  {templates.map((template) => (
                    <SelectItem key={template.id} value={template.id}>
                      {template.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        )}

        <div className='mb-4'>
          <Label htmlFor='quantity'>Quantity</Label>
          <Input
            type='number'
            id='quantity'
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className='mt-2'
            placeholder='Enter Quantity'
          />
        </div>

        <div className='mb-4'>
          <Label htmlFor='email'>Client Email</Label>
          <Input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='mt-2'
            placeholder='Enter Client Email'
          />
        </div>

        <div className='mb-4'>
          <Label htmlFor='firstName'>First Name</Label>
          <Input
            id='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='mt-2'
            placeholder='Enter First Name'
          />
        </div>

        <div className='mb-4'>
          <Label htmlFor='lastName'>Last Name</Label>
          <Input
            id='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='mt-2'
            placeholder='Enter Last Name'
          />
        </div>

        <div className='mb-4'>
          <Label htmlFor='note'>Order Note</Label>
          <Textarea
            id='note'
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className='mt-2'
            placeholder='Any notes about the order'
          />
        </div>

        <div className='mb-4'>
          <Label htmlFor='websites'>Websites</Label>
          <Input
            id='websites'
            value={websites}
            onChange={(e) => setWebsites(e.target.value)}
            className='mt-2'
            placeholder='Enter Websites'
          />
        </div>

        <div className='mb-4'>
          <Label htmlFor='couponId'>Coupon ID</Label>
          <Input
            id='couponId'
            value={couponId}
            onChange={(e) => setCouponId(e.target.value)}
            className='mt-2'
            placeholder='Enter Coupon ID'
          />
        </div>

        <Button type='submit' className='mt-4 w-full'>
          Create Order {pending && <Spinner />}
        </Button>
      </form>

      {error && <p className='mt-4 text-red-500'>{error}</p>}
      {message && <p className='mt-4 text-green-500'>{message}</p>}
    </div>
  );
};

export default AdminOrderForm;
