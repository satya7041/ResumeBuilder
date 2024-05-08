    // components/EducationInfoComponent.tsx

    import React, { useState } from 'react';
    import {
      Card,
      CardContent,
      CardHeader,
      CardTitle,
    } from "@/components/ui/card"
    import { FaArrowDown, FaArrowUp } from "react-icons/fa";
    import { MdDelete } from "react-icons/md";



    interface SkillInfoComponentProps {

      onUpdate: (data: { skill:string;title:string}[]) => void;
      onSwapDown: () => void; // Function to trigger the swap
      onSwapUp:() => void
    }

    const SkillInfoComponent: React.FC<SkillInfoComponentProps> = ({ onUpdate, onSwapDown, onSwapUp }) => {
      const [formDataList, setFormDataList] = useState([
        { skill:'', title:''}
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

      // To make editable head title 
      const [SkillTitle, setSkillTitle] = useState("Skills");

      const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSkillTitle(e.target.value);
      };  
      

      const [isSkillInfoVisible, setSkillInfoVisible] = useState(true);

      const toggleSkillInfo = () => {
        setSkillInfoVisible(!isSkillInfoVisible);
      }

      
      const handleSwapDown = () => {
        // Trigger the swap function passed from the parent component
        onSwapDown();
      };
      const handleSwapUp = () => {
        // Trigger the swap function passed from the parent component
        onSwapUp();
      };

      //Below addMore button is used to handle addMore functionality 

      const handleAddMore = () => {
        setFormDataList([...formDataList, { skill:'',title:''}]);
      };

      // to remove input fields but atleast one present

      const handleRemove = (index: number) => {
        if (formDataList.length === 1) return; // Ensure at least one input field remains
        const updatedFormDataList = formDataList.filter((formData, i) => i !== index);
        setFormDataList(updatedFormDataList);
        onUpdate(updatedFormDataList);
      };

      return (
        <div className='mt-4'>
              <div className='flex flex-row  mb-1'>
              <button onClick={handleSwapDown} className='flex relative' ><FaArrowDown className= 'text-xl' />
</button>
              <button onClick={handleSwapUp} className='flex relative ml-1' ><FaArrowUp className= 'text-xl' />
</button>
</div>
            <Card className=' bg-white'>
            <CardHeader>
        <CardTitle className=' text-center'> 
        <label className='text-center underline'>Skills</label>


              {/* <input className='text-center underline'
                type="text"
                value={SkillTitle}
                onChange={handleTitleChange}
              /> */}
              </CardTitle>
        </CardHeader>
      <CardContent>
        {formDataList.map((formData, index) => (
          <div key={index}>
            <div className='flex justify-between mt-2'>

            <input className='ml-2 px-3 py-2 block h-10 w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base cursor-text [&>div]:list-item pl-2'
             name="title"
             value={formData.title}
             onChange={(e) => handleInputChange(e, index)}
             placeholder="Title:"/>
             
            <input className='ml-2 px-3 py-2 block w-full h-10 rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base cursor-text [&>div]:list-item pl-2'

              // type="text"
              name="skill"
              value={formData.skill}
              onChange={(e) => handleInputChange(e, index)}
              placeholder="Mention your skills"
              />
         <div className='mt-2 flex justify-start'>

{formDataList.length > 1 && (
  <button className='flex items-center rounded-md bg-white py-1 pl-3 pr-4 ml-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
  onClick={() => handleRemove(index)}><MdDelete className='text-xl'/></button>
)}
</div>
        </div>
   <button className='mt-2 flex items-center rounded-md bg-white py-2 pl-3 pr-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
        onClick={handleAddMore}>+Add More</button>

          
          </div>
        ))}
      
        </CardContent>
        </Card>
      </div>
    );
    };

    export default SkillInfoComponent;
