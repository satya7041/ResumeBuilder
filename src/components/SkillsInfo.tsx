// components/EducationInfoComponent.tsx

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface SkillInfoComponentProps {

  onUpdate: (data: { skill:string;}[]) => void;
}

const SkillInfoComponent: React.FC<SkillInfoComponentProps> = ({ onUpdate }) => {
  const [formDataList, setFormDataList] = useState([
    { skill:'', }
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

  //Below addMore button is used to handle addMore functionality 

//   const handleAddMore = () => {
//     setFormDataList([...formDataList, { skill:'',}]);
//   };

  //to remove input fields but atleast one present

//   const handleRemove = (index: number) => {
//     if (formDataList.length === 1) return; // Ensure at least one input field remains
//     const updatedFormDataList = formDataList.filter((formData, i) => i !== index);
//     setFormDataList(updatedFormDataList);
//     onUpdate(updatedFormDataList);
//   };

  return (
    <div className='mt-4'>
        <Card >
        <CardHeader>
    <CardTitle className=' text-center'> 
          <input className='text-center underline'
            type="text"
            value={SkillTitle}
            onChange={handleTitleChange}
          /></CardTitle>
    </CardHeader>
  <CardContent>
    {formDataList.map((formData, index) => (
      <div key={index}>
        <label htmlFor="" className='text-base font-medium text-gray-700 col-span-full'>Skills: </label>
        <textarea className='mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base cursor-text [&>div]:list-item pl-7'

          // type="text"
          name="skill"
          value={formData.skill}
          onChange={(e) => handleInputChange(e, index)}
          placeholder="Mention your skills"
        />

        {/* Remove button=> no need in this ccomponent */}
          {/* {formDataList.length > 1 && (
            <button onClick={() => handleRemove(index)}>Remove</button>
          )} */}
      </div>
    ))}
    {/* no need for addMore button, because i use textarea in skill */}
    {/* <button onClick={handleAddMore}>Add More</button> */}
    </CardContent>
    </Card>
  </div>
);
};

export default SkillInfoComponent;
