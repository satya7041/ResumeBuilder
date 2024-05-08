    // components/EducationInfoComponent.tsx

    import React, { useState } from 'react';
    import {
      Card,
      CardContent,
      CardHeader,
      CardTitle,
    } from "@/components/ui/card"
    import {MdDelete } from "react-icons/md";
    import { FaArrowDown, FaArrowUp } from "react-icons/fa";


    interface ProjectInfoComponentProps {
      onUpdate: (data: { project:string; date:string; description:string }[]) => void;
      onSwapDown: () => void; // Function to trigger the swap
        onSwapUp:() => void

}

    const ProjectInfoComponent: React.FC<ProjectInfoComponentProps> = ({onUpdate, onSwapDown, onSwapUp }) => {
      const [formDataList, setFormDataList] = useState([
        { project:'', date:'', description:'', }
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
        setFormDataList([...formDataList, { project:'', date:'', description:'',  }]);
      };

      //to remove input fields but atleast one present
      const handleRemove = (index: number) => {
        if (formDataList.length === 1) return; // Ensure at least one input field remains
        const updatedFormDataList = formDataList.filter((formData, i) => i !== index);
        setFormDataList(updatedFormDataList);
        onUpdate(updatedFormDataList);
      };

      // To make editable head title 
      const [ProjectTitle, setProjectTitle] = useState("Projects");

      const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProjectTitle(e.target.value);
      };  

      const [isProjectInfoVisible, setProjectInfoVisible] = useState(true);

      const toggleProjectInfo = () => {
        setProjectInfoVisible(!isProjectInfoVisible);
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
        <label className='text-center underline'>Project</label>

              {/* <input className='text-center underline'
                type="text"
                value={ProjectTitle}
                onChange={handleTitleChange}
              /> */}
              </CardTitle>
        </CardHeader>
      <CardContent>
        {formDataList.map((formData, index) => (
          <div key={index}>
            <div>
            <label  className='text-base font-medium text-gray-700 col-span-4'>Project name: </label>
            <input className='mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base'
              type="text"
              name="project"
              value={formData.project}
              onChange={(e) => handleInputChange(e, index)}
              placeholder="Enter your project name"
            />
            </div>
            <label className='text-base font-medium text-gray-700 col-span-2'>Date: </label>
            <input className='mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base'
              type="text"
              name="date"
              value={formData.date}
              onChange={(e) => handleInputChange(e, index)}
              placeholder="date"
            />
        
            <label className='class="text-base font-medium text-gray-700 col-span-full"'>Description: </label>
            <textarea className='mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base cursor-text [&>div]:list-item pl-7'
              name="description"
              value={formData.description}
              onChange={(e) => handleInputChange(e, index)}
              placeholder="description about your project"
            />
            <div className='mt-2 flex justify-start'>

              {formDataList.length > 1 && (
                <button className='flex items-center rounded-md bg-white py-2 pl-3 pr-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                onClick={() => handleRemove(index)}><MdDelete className='text-xl'/></button>
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

    export default ProjectInfoComponent;
