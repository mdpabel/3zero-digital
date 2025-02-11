'use client';
import { createWebsiteHealthReport } from '@/actions/website-health-report/create-website-health-report';
import { blacklistData } from '@/app/(landing)/(services)/(maintenance)/blacklist-removal/data';
import Spinner from '@/components/common/spinner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export interface WebsiteHealthReportFormData {
  name: string;
  email: string;
  websiteUrl: string;
  blacklistVendors: string[];
  malwareScanDetails: string;
  malwareScanScreenshot: string;
  isInfected: boolean;
  seoDetails: string;
  seoScreenshot: string;
  hasSeoIssues: boolean;
  performanceDetails: string;
  performanceScreenshot: string;
  performanceScore: number;
  additionalNotes: string;
  opened: number;
}
const WebsiteHealthReport = () => {
  const { toast } = useToast();
  const [pending, setPending] = useState(false);
  const [formData, setFormData] = useState<WebsiteHealthReportFormData>({
    name: '',
    email: '',
    websiteUrl: '',
    blacklistVendors: [],
    malwareScanDetails: '',
    malwareScanScreenshot: '',
    isInfected: false,
    seoDetails: '',
    seoScreenshot: '',
    hasSeoIssues: false,
    performanceDetails: '',
    performanceScreenshot: '',
    performanceScore: 0,
    additionalNotes: '',
    opened: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleVendorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value,
    );
    setFormData({ ...formData, blacklistVendors: selectedOptions });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    const { message, success } = await createWebsiteHealthReport({
      ...formData,
      performanceScore: parseInt(formData.performanceScore.toString(), 10),
    });
    if (message) {
      if (success) {
        toast({
          title: message,
        });
      } else {
        toast({
          title: message,
          variant: 'destructive',
        });
      }
    }
    setPending(false);
  };

  return (
    <div className='shadow-md mx-auto p-8 border rounded-xl max-w-3xl'>
      <h2 className='mb-4 font-semibold text-2xl'>
        Create Website Analysis Report
      </h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        {/* Name */}
        <div>
          <Label>Name</Label>
          <Input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div>
          <Label>Email</Label>
          <Input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Website URL */}
        <div>
          <Label>Website URL</Label>
          <Input
            type='url'
            name='websiteUrl'
            value={formData.websiteUrl}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label>Blacklist Vendors</Label>
          <select
            multiple
            name='blacklistVendors'
            value={formData.blacklistVendors}
            onChange={handleVendorChange}
            className='p-2 border rounded-md w-full h-32'>
            {blacklistData.map((vendor) => (
              <option key={vendor.name} value={vendor.name}>
                {vendor.name}
              </option>
            ))}
          </select>
        </div>

        {/* Malware Scan Report */}
        <div>
          <Label>Malware Scan Report Details</Label>
          <Textarea
            name='malwareScanDetails'
            value={formData.malwareScanDetails}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Malware Scan Screenshot URL</Label>
          <Input
            type='url'
            name='malwareScanScreenshot'
            value={formData.malwareScanScreenshot}
            onChange={handleChange}
          />
        </div>

        <div className='flex items-center gap-2'>
          <Label htmlFor='isInfected'>Is Infected</Label>
          <div>
            <Input
              type='checkbox'
              name='isInfected'
              id='isInfected'
              checked={formData.isInfected}
              onChange={(e) =>
                setFormData({ ...formData, isInfected: e.target.checked })
              }
            />
          </div>
        </div>

        {/* SEO Report */}
        <div>
          <Label>SEO Report Details</Label>
          <Textarea
            name='seoDetails'
            value={formData.seoDetails}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>SEO Report Screenshot URL</Label>
          <Input
            type='url'
            name='seoScreenshot'
            value={formData.seoScreenshot}
            onChange={handleChange}
          />
        </div>

        <div className='flex items-center gap-2'>
          <Label htmlFor='seoIssue'>Has SEO Issues</Label>
          <div>
            <Input
              type='checkbox'
              name='hasSeoIssues'
              id='seoIssue'
              checked={formData.hasSeoIssues}
              onChange={(e) =>
                setFormData({ ...formData, hasSeoIssues: e.target.checked })
              }
            />
          </div>
        </div>

        {/* Performance Report */}
        <div>
          <Label>Performance Report Details</Label>
          <Textarea
            name='performanceDetails'
            value={formData.performanceDetails}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Performance Report Screenshot URL</Label>
          <Input
            type='url'
            name='performanceScreenshot'
            value={formData.performanceScreenshot}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label>Performance Score</Label>
          <Input
            type='number'
            name='performanceScore'
            value={formData.performanceScore}
            onChange={handleChange}
          />
        </div>

        {/* Additional Notes */}
        <div>
          <Label>Additional Notes</Label>
          <Textarea
            name='additionalNotes'
            value={formData.additionalNotes}
            onChange={handleChange}
          />
        </div>

        <Button type='submit' className='p-5 w-full'>
          {pending ? <Spinner /> : 'Generate Report'}
        </Button>
      </form>
    </div>
  );
};

export default WebsiteHealthReport;
