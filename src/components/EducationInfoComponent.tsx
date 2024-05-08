      // components/EducationInfoComponent.tsx

      import React, { useState } from 'react';
      import {
        Card,
        CardContent,
        CardHeader,
        CardTitle,
      } from "@/components/ui/card"
      import { MdDelete } from "react-icons/md";
      import { FaArrowDown, FaArrowUp } from "react-icons/fa";



      interface EducationInfoComponentProps {
        onUpdate: (data: { school: string; degree: string; date: string; gpa:string; additionalInfo:string; }[]) => void;
        onSwapDown: () => void; // Function to trigger the swap
        onSwapUp:() => void

      }
      
      
      const EducationInfoComponent: React.FC<EducationInfoComponentProps> = ({onUpdate, onSwapDown, onSwapUp }) => {
        const [formDataList, setFormDataList] = useState([
          { school: '',date: '', degree: '',gpa:'',additionalInfo:''}
        ]);
       


        
      // Below we write add this ( | HTMLTextAreaElement ) to accept textarea also
        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
          const { name, value } = e.target;
          const updatedFormDataList = formDataList.map((formData, i) =>
            i === index ? { ...formData, [name]: value } : formData
          );
          setFormDataList(updatedFormDataList);
          onUpdate(updatedFormDataList);
        };
        
        const handleAddMore = () => {
          setFormDataList([...formDataList, { school: '', degree: '', date: '',gpa:'',additionalInfo:'' }]);
        };

        //to remove input fields but atleast one present
        const handleRemove = (index: number) => {
          if (formDataList.length === 1) return; // Ensure at least one input field remains
          const updatedFormDataList = formDataList.filter((formData, i) => i !== index);
          setFormDataList(updatedFormDataList);
          onUpdate(updatedFormDataList);
        };

        // To make editable head title 
        const [EducationTitle, setEducationTitle] = useState("Education");

        const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setEducationTitle(e.target.value);
        };  

        const [isEducationInfoVisible, setEducationInfoVisible] = useState(true);
        
        
        const toggleEducationInfo = () => {
          setEducationInfoVisible(!isEducationInfoVisible);
        };

        const handleSwapDown = () => {
          // Trigger the swap function passed from the parent component
          onSwapDown();
        };
        const handleSwapUp = () => {
          // Trigger the swap function passed from the parent component
          onSwapUp();
        };

        return (
          <div className='mt-4 '>
            <div className='flex flex-row  mb-1'>
              <button onClick={handleSwapDown} className='flex relative' ><FaArrowDown className= 'text-xl' />
</button>
              <button onClick={handleSwapUp} className='flex relative ml-1' ><FaArrowUp className= 'text-xl' />
</button>
</div>
              <Card className=' bg-white'>

              <CardHeader>
          <CardTitle className=' text-center'> 
                {/* <input className='text-center underline'
                  type="text"
                  value={EducationTitle}
                  onChange={handleTitleChange}
                /> */}
                <label className='text-center underline'>Education</label>
                </CardTitle>
          </CardHeader>
        
        <CardContent>
          {formDataList.map((formData, index) => (
            <div key={index}>
              <label  className='text-base font-medium text-gray-700 col-span-4'>School: </label>
              <input className='mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base'
                type="text"
                name="school"
                value={formData.school}
                onChange={(e) => handleInputChange(e, index)}
                placeholder="School or University name"
              />

              <div className='grid grid-cols-2 gap-x-4'>
                <div>
              <label className='text-base font-medium text-gray-700 col-span-4'>Degree: </label>
              <input className='mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base'
                type="text"
                name="degree"
                value={formData.degree}
                onChange={(e) => handleInputChange(e, index)}
                placeholder="Degree"
              />
              </div>
              <div>
              <label className='text-base font-medium text-gray-700 col-span-2'>Date: </label>
              <input className='mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base'
                type="text"
                name="date"
                value={formData.date}
                onChange={(e) => handleInputChange(e, index)}
                placeholder="Date"
              />
              </div>
              </div>
              <label className='text-base font-medium text-gray-700 col-span-2'>GPA: </label>
              <input className='mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base'
                type="text"
                name="gpa"
                value={formData.gpa}
                onChange={(e) => handleInputChange(e, index)}
                placeholder="GPA"
              />
              <div className='relative col-span-full'>
              <label className='text-base font-medium text-gray-700 col-span-full'>Additional Information</label>
              <textarea className='mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base cursor-text [&>div]:list-item pl-7'
                // type="text"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange(e, index)}
                placeholder="Additional information"
              />
              </div>
              <div className='mt-2 flex justify-start'>

                {formDataList.length > 1 && (
                  <button className='flex items-center rounded-md bg-white py-2 pl-3 pr-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                  onClick={() => handleRemove(index)}><MdDelete className='text-xl'/>
                  </button>
                )}
                </div>
            </div>
          ))}
          <div className='mt-2 flex justify-end'>

          <button className='flex items-center rounded-md bg-white py-2 pl-3 pr-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
          onClick={handleAddMore}>+Add More</button>
          </div>
          </CardContent>
          </Card>
        </div>
      );
      };

      export default EducationInfoComponent;
