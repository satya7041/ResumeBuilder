    // components/BasicInfoComponent.tsx

    import React, { useState } from 'react';
    import {
      Card,
      CardContent,
      CardHeader,
      CardTitle,
    } from "@/components/ui/card"


    interface BasicInfoComponentProps {
      onUpdate: (data: { name: string; objective:string; email: string; phoneNumber: string; linkedin: string; location: string; }) => void;
    }

    const BasicInfoComponent: React.FC<BasicInfoComponentProps> = ({ onUpdate }) => {
      const [formData, setFormData] = useState({
        name: '',
        objective:'',
        email: '',
        phoneNumber: '',
        linkedin:'',
        location:'',
      });




      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target; 
        
        //to avoid delay update 
        const updatedFormData = {...formData, [name]:value};
        setFormData(updatedFormData);
        
      
      onUpdate(updatedFormData) // Pass updated data to parent component
      };

      return (
        <div className='mb-4 '>
          <Card>
      <CardHeader>
        <CardTitle className='text-center underline'>Basic Information</CardTitle>
        </CardHeader>
      <CardContent>
        <div >
        <label  className='text-base font-medium text-gray-700 col-span-full'>Name:</label>
      <input className='mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
          />
          </div>

          <div>
          <label htmlFor="" className='text-base font-medium text-gray-700 col-span-full'>Objective:</label>
      <textarea className='mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base resize-none overflow-hidden'
            // type="textarea"
            name="objective"
            value={formData.objective}
            onChange={handleInputChange}
            placeholder="Objective"
            
          />
          </div> 

          <div className='grid grid-cols-2 gap-x-4'> 
          <div>
          <label htmlFor="" className='text-base font-medium text-gray-700 col-span-4'>Email:</label>
          <input className=' mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your mail"
          />
          </div>
          <div>
          <label htmlFor="" className='text-base font-medium text-gray-700 col-span-2'>Phone Number:</label>
          <input className='mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base'
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Phone Number"
          />
          </div>
          </div>

          <div className='grid grid-cols-2 gap-x-4'>
            <div>
          
          <label htmlFor="" className='class="text-base font-medium text-gray-700 col-span-4"'>Linkedin</label>
          <input className='mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base'
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleInputChange}
            placeholder="Linkedin URL"
          />
          </div>
          <div>
          <label htmlFor="" className='text-base font-medium text-gray-700 col-span-2'>Location</label>
          <input className='mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base'
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Your Location"
          />
          </div>
          </div>
      </CardContent>
    </Card>

        
        </div>
      );
    };

    export default BasicInfoComponent;
