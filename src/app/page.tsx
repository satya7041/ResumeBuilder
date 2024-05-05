// pages/index.tsx
"use client"
import { useState } from 'react';
import BasicInfoComponent from '../components/BasicInfoComponent';
import EducationInfoComponent from '../components/EducationInfoComponent';
import OutputData from '../components/OutputData';
import WorkExpInfoComponent from '@/components/WorkExpInfo';
import ProjectInfoComponent from '@/components/ProjectInfo';
import SkillInfoComponent from '@/components/SkillsInfo';
import { IoEye,IoEyeOff  } from "react-icons/io5";
import '../components/CSS/style.css'


const Home: React.FC = () => {
  const [basicInfo, setBasicInfo] = useState({
    name: '',
    objective:'',
    email: '',
    phoneNumber: '',
    linkedin:'',
    location:'',
  
});

//To hide the section 

const [isProjectInfoVisible, setIsProjectInfoVisible] = useState(true);

const toggleProjectVisibility = () => {
  setIsProjectInfoVisible(!isProjectInfoVisible);
};

const [isWorkExpInfoVisible, setWorkExpInfoVisible] = useState(true);

const toggleWorkExpVisiblity = () =>{
  setWorkExpInfoVisible(!isWorkExpInfoVisible);
}

const [isEducationInfoVisible, setEducationInfoVisible] = useState(true);

const toggleEducationInfoVisiblity = () =>{
  setEducationInfoVisible(!isEducationInfoVisible);
}

const [isSkillInfoVisible, setSkillInfoVisible] = useState(true);

const toggleSkillInfoVisibility = () =>{
setSkillInfoVisible(!isSkillInfoVisible);
}

const [educationInfo, setEducationInfo] = useState([
  { school: '', degree: '', date: '', gpa:'',additionalInfo:'' }
]);

const [experienceInfo, setExperienceInfo] = useState([
  { company:'', jobTitle:'', date:'', description:''  }
]);

const [projectInfo, setProjectInfo] = useState([
  { project:'', date:'', description:'', }
]);

const [skillInfo, setSkillInfo] = useState([
  { skill:'', }
]);

  const handleBasicInfoUpdate = (basicInfo: { name: string; objective: string; email: string; phoneNumber: string; linkedin:string; location: string;}) => {
    setBasicInfo(basicInfo);
  };

  const handleEducationInfoUpdate = (educationInfo: { school: string; degree: string; date: string; gpa:string; additionalInfo: string }[]) => {
    setEducationInfo(educationInfo);
  };

  const handleWorkExpInfoUpdate = (experienceInfo: { company:string; jobTitle: string; date: string; description: string;  }[]) => {
    setExperienceInfo(experienceInfo);
  };

  const handleProjectInfoUpdate = (projectInfo: {project:string; date:string; description:string }[]) => {
    setProjectInfo(projectInfo);
  };
 
  const handleSkillInfoUpdate = (skillInfo: {skill:string; }[]) => {
    setSkillInfo(skillInfo);
  };
  const [componentOrder, setComponentOrder] = useState([
    "educationInfo",
    "experienceInfo",
    "projectInfo",
    "skillInfo"
  ]);
  
  const swapComponents = (index: number) => {
    setComponentOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      if (index >= 0 && index < newOrder.length - 1) {
        const temp = newOrder[index];
        newOrder[index] = newOrder[index + 1];
        newOrder[index + 1] = temp;
      }
      return newOrder;
    });
  };
  
  return (

    <div className="flex justify-center mt-8">
     <div className="w-1/2 p-4 border-r border-gray-400">
          <BasicInfoComponent onUpdate={handleBasicInfoUpdate} />
        
        {componentOrder.map((componentKey, index) => {
      switch (componentKey) {
        case "educationInfo":
          return (
            <div className="card">
    <div className="cardHeader">
            <div className='cardContent'>
              <button className="cardButton" onClick={toggleEducationInfoVisiblity}>{isEducationInfoVisible ? <IoEye/> : < IoEyeOff /> }</button>

            {isEducationInfoVisible && 
            <EducationInfoComponent
            key={`${componentKey}-${index}`}
            onUpdate={handleEducationInfoUpdate}
            onSwap={() => swapComponents(index)}
            />
          }
          </div>
          </div>
  </div>
          );
        case "experienceInfo":
          return (
            <div className="card">
            <div className="cardHeader">
              <button className="cardButton" onClick={toggleWorkExpVisiblity}>{isWorkExpInfoVisible ? <IoEye/> : < IoEyeOff />  }</button>
                    <div className='cardContent'>
                    {isWorkExpInfoVisible && 
            <WorkExpInfoComponent
              key={`${componentKey}-${index}`}
              onUpdate={handleWorkExpInfoUpdate}
              onSwap={() => swapComponents(index)}
                    
            />
                    }
            </div>
            </div>
            </div>
          );
          
        case "projectInfo":
          return (
            
         <div className="card">
         <div className="cardHeader">
               <button className="cardButton" onClick={toggleProjectVisibility}>{isProjectInfoVisible ? <IoEye/> : < IoEyeOff /> }</button>
               <div className='cardContent'>
        {isProjectInfoVisible &&
            <ProjectInfoComponent
              key={`${componentKey}-${index}`}
              onUpdate={handleProjectInfoUpdate}
              onSwap={() => swapComponents(index)}
            />}
            </div>
  </div>
  </div>
          );
          case "skillInfo":
            return(
              <div className="card">
    <div className="cardHeader">
<button className="cardButton" onClick={toggleSkillInfoVisibility}>{isSkillInfoVisible ? <IoEye/> : < IoEyeOff /> }</button>
<div className='cardContent'>
  {isSkillInfoVisible &&
              <SkillInfoComponent
              key={`${componentKey}-${index}`}
              onUpdate={handleSkillInfoUpdate}
              onSwap={() => swapComponents(index)}
              />}
              </div>
</div>
  </div>
            )
        default:
          return null;
      }
    })}
        {/* <div className="w-1/2 p-4 border-r border-gray-400">
          <BasicInfoComponent onUpdate={handleBasicInfoUpdate} />
  <div className="card">
    <div className="cardHeader">
                
       <button className="cardButton" onClick={toggleEducationInfoVisiblity}>{isEducationInfoVisible ? <IoEye/> : < IoEyeOff /> }</button>
       <div className='cardContent'>
 {isEducationInfoVisible && 
          <EducationInfoComponent onUpdate={handleEducationInfoUpdate} onSwap={() => swapComponents}
          /> }

</div>
  </div>
  </div>


          <div className="card">
    <div className="cardHeader">
      <button className="cardButton" onClick={toggleWorkExpVisiblity}>{isWorkExpInfoVisible ? <IoEye/> : < IoEyeOff />  }</button>
            <div className='cardContent'>
            {isWorkExpInfoVisible && 

            <WorkExpInfoComponent onUpdate={handleWorkExpInfoUpdate}onSwap={() => swapComponents}/>}
            </div>
  </div>
  </div>



         <div className="card">
    <div className="cardHeader">
          <button className="cardButton" onClick={toggleProjectVisibility}>{isProjectInfoVisible ? <IoEye/> : < IoEyeOff /> }</button>
          <div className='cardContent'>
   {isProjectInfoVisible &&
         <ProjectInfoComponent onUpdate={handleProjectInfoUpdate} onSwap={() => swapComponents} />}

</div>
  </div>
  </div>

<div className="card">
    <div className="cardHeader">
<button className="cardButton" onClick={toggleSkillInfoVisibility}>{isSkillInfoVisible ? <IoEye/> : < IoEyeOff /> }</button>
<div className='cardContent'>
  {isSkillInfoVisible &&
          <SkillInfoComponent onUpdate={handleSkillInfoUpdate} onSwap={() => swapComponents}/>}
</div>
</div>
  </div>

        </div> */}
        </div>

        <div className="w-1/2 p-4">
          <OutputData basicInfo={basicInfo} 
          experienceInfo={experienceInfo} 
          educationInfo={educationInfo} 
          projectInfo={projectInfo} 
          skillInfo={skillInfo}

         isProjectInfoVisible={isProjectInfoVisible}

          isWorkExpInfoVisible={isWorkExpInfoVisible} 

        isEducationInfoVisible={isEducationInfoVisible}

        isSkillInfoVisible= {isSkillInfoVisible }
        componentOrder={componentOrder} // Pass the reordered component order to OutputData

        
            />
        </div>
      </div>
  )
  };

export default Home; 