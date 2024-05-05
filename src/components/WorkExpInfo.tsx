  // components/EducationInfoComponent.tsx

  import React, { useState } from 'react';
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


  interface WorkExpInfoComponentProps {
    onUpdate: (data: { company:string; jobTitle: string; date: string; description: string;  }[]) => void;
    onSwap: () => void; // Function to trigger the swap

    
  }

  const WorkExpInfoComponent: React.FC<WorkExpInfoComponentProps> = ({onSwap, onUpdate }) => {
    const [formDataList, setFormDataList] = useState([
      { company:'', jobTitle:'', date:'', description:''}
    ]);
    
    // To make editable head title 
    const [workExpTitle, setWorkExpTitle] = useState("Work Experience");
    
    const [isWorkExpInfoVisible, setWorkExpInfoVisible] = useState(true);
    
    
    const toggleWorkExpInfo = () => {
      setWorkExpInfoVisible(!isWorkExpInfoVisible);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
      const { name, value } = e.target;
      const updatedFormDataList = formDataList.map((formData, i) =>
        i === index ? { ...formData, [name]: value } : formData
      );
      setFormDataList(updatedFormDataList);
      onUpdate(updatedFormDataList);
    };
    
    const handleAddMore = () => {
      setFormDataList([...formDataList, {company:'', jobTitle:'', date:'', description:''  }]);
    };

    //to remove input fields but atleast one present
    const handleRemove = (index: number) => {
      if (formDataList.length === 1) return; // Ensure at least one input field remains
      const updatedFormDataList = formDataList.filter((formData, i) => i !== index);
      setFormDataList(updatedFormDataList);
      onUpdate(updatedFormDataList);
    };

      // To make editable head title 

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setWorkExpTitle(e.target.value);
    };  

    const handleSwap = () => {
      // Trigger the swap function passed from the parent component
      onSwap();
    };


    return (
      <div className='mb-4'>
          <Card>
          <button onClick={handleSwap}>Swap</button>

    <CardHeader>
      <CardTitle className=' text-center'> 
            <input className='text-center'
              type="text"
              value={workExpTitle}
              onChange={handleTitleChange}
            />
            </CardTitle>
      </CardHeader>
    <CardContent>
      {formDataList.map((formData, index) => (
        <div key={index}>
          <label htmlFor="" className='text-base font-medium text-gray-700 col-span-full'>Company: </label>
          <input className='mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base'
            type="text"
            name="company"
            value={formData.company}
            onChange={(e) => handleInputChange(e, index)}
            placeholder="company name"
          />
          <div className='grid grid-cols-2 gap-x-4'>
            <div>

          
          <label htmlFor="" className='text-base font-medium text-gray-700 col-span-4'>Job Title: </label>
          <input className='mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base'
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={(e) => handleInputChange(e, index)}
            placeholder="your job title"
          />
          </div>
          <div>
          <label htmlFor="" className='text-base font-medium text-gray-700 col-span-2'>Date: </label>
          <input className='mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base'
            type="text"
            name="date"
            value={formData.date}
            onChange={(e) => handleInputChange(e, index)}
            placeholder="date"
          />
          </div>
          </div>
          <label htmlFor="" className='text-base font-medium text-gray-700 col-span-full'>Description: </label>
          <textarea className='mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base cursor-text [&>div]:list-item pl-7'
            // type="text"
            name="description"
            value={formData.description}
            onChange={(e) => handleInputChange(e, index)}
            placeholder="job description"
          />
          <div className='mt-2 flex justify-start '>
            {formDataList.length > 1 && (
              <button className='flex items-center rounded-md
              bg-white py-2 pl-3 pr-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
              onClick={() => handleRemove(index)}>Remove</button>
            )}
            </div>
        </div>
      ))}
      <div className='mt-2 flex justify-end'>
      <button className='flex items-center rounded-md
      bg-white py-2 pl-3 pr-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
        onClick={handleAddMore}>Add More</button>
      </div>
      </CardContent>
      </Card>
    </div>
  );
  };

  export default WorkExpInfoComponent;
