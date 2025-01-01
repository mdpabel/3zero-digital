'use client';

import { updateUser } from '@/actions/auth/update-user';
import Spinner from '@/components/common/spinner';
import { Button } from '@/components/ui/button';
import { User } from '@prisma/client';
import React, { useState } from 'react';

const UserProfile = ({ user }: { user: User }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [firstName, setFirstName] = useState(user.name?.split(' ')[0] ?? '');
  const [lastName, setLastName] = useState(user.name?.split(' ')[1] ?? '');

  const handleSave = async () => {
    setIsLoading(true); // Set loading to true
    try {
      // Simulate saving to the backend (replace with actual API call)
      await updateUser({
        firstName,
        lastName,
      });
    } catch (error) {
      console.error('Failed to save:', error);
    } finally {
      setIsLoading(false); // Reset loading state
      setIsEditing(false); // Exit editing mode
    }
  };

  return (
    <div className='shadow mx-auto p-6 rounded-lg max-w-4xl'>
      <h1 className='mb-6 font-bold text-2xl'>User Profile</h1>
      <div className='space-y-6'>
        {/* Editable Fields */}
        <div className='flex items-center gap-4'>
          <label className='w-32 font-semibold text-lg'>First Name:</label>
          {isEditing ? (
            <input
              type='text'
              className='flex-1 px-4 py-2 border rounded-lg'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          ) : (
            <p className='flex-1'>{firstName}</p>
          )}
        </div>
        <div className='flex items-center gap-4'>
          <label className='w-32 font-semibold text-lg'>Last Name:</label>
          {isEditing ? (
            <input
              type='text'
              className='flex-1 px-4 py-2 border rounded-lg'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          ) : (
            <p className='flex-1'>{lastName}</p>
          )}
        </div>

        {/* Read-Only Fields */}
        <div className='flex items-center gap-4'>
          <label className='w-32 font-semibold text-lg'>Email:</label>
          <p className='flex-1'>{user.email}</p>
        </div>
        <div className='flex items-center gap-4'>
          <label className='w-32 font-semibold text-lg'>Role:</label>
          <p className='flex-1'>{user.role}</p>
        </div>
        <div className='flex items-center gap-4'>
          <label className='w-32 font-semibold text-lg'>Joined:</label>
          <p className='flex-1'>
            {new Date(user.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className='flex items-center gap-4'>
          <label className='w-32 font-semibold text-lg'>Stripe ID:</label>
          <p className='flex-1'>{user.stripeCustomerId || 'N/A'}</p>
        </div>

        {/* Action Buttons */}
        <div className='flex items-center gap-4'>
          {isEditing ? (
            <>
              <Button
                className='px-6 py-3'
                onClick={handleSave}
                disabled={isLoading}>
                {isLoading ? <Spinner /> : 'Save'}
              </Button>
              <Button
                className='px-6 py-3'
                onClick={() => setIsEditing(false)}
                disabled={isLoading}>
                Cancel
              </Button>
            </>
          ) : (
            <Button
              className='px-6 py-3'
              onClick={() => setIsEditing(true)}
              disabled={isLoading}>
              Edit Profile
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
