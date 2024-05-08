    // components/OutputComponent.tsx
import { useEffect, useState } from 'react';
    import React from 'react';
        // components/OutputComponent.tsx



    interface OutputComponentProps {
      //Basic Information

      basicInfo: {
        name: string;
        objective:string;
        email: string;
        phoneNumber: string;
        linkedin:string,
        location:string
      };

      // Education Information

      educationInfo: {
        school: string;
        degree: string;
        date: string;
        gpa: string;
        additionalInfo:string;
      }[];

      // Education Information 

      experienceInfo: {
        company: string;
        jobTitle: string;
        date: string;
        description: string;
      }[];
    
    // Project Information

      projectInfo: {
        project:string;
        date: string;
        description: string;
      }[];
      
    // Skill Information

      skillInfo: {
        title:string;
        skill:string;
        
      }[];
      isProjectInfoVisible: boolean; // Add this line to include the isProjectInfoVisible prop
      isWorkExpInfoVisible: boolean; 
      isEducationInfoVisible: boolean;
      isSkillInfoVisible: boolean;
      componentOrder: string[]; // Define the type of componentOrder as string[]

    }



    const OutputComponent: React.FC<OutputComponentProps> =
    ({ basicInfo,educationInfo, experienceInfo, projectInfo, skillInfo,
      isWorkExpInfoVisible, isEducationInfoVisible, isProjectInfoVisible, isSkillInfoVisible,
      componentOrder
    }) => { 


      const [isClient, setIsClient] = useState(false);

      useEffect(() => {
        setIsClient(true);
      }, []);

     

  const handleDownloadPDF = () => {
    if (isClient) {
    const element = document.getElementById('contentToConvert');
    const options = {
      margin: [0.25, 0.25], // Adjust the top and bottom margins to 0.5 inch
      filename: 'Resume',
      image: { type: 'jpeg', quality: 0.8 },

      //for text quality
      html2canvas: { scale: 4}, 
      
      jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait'}, // Adjust the top, right, bottom, and left margins to 0.5 inch }
      // Add textLayer option to enable text selection
    textLayer: true,
    };
    import('html2pdf.js').then(({ default: html2pdf }) => {
      html2pdf().from(element).set(options).save(); 
    })
  }
 return null;
  };

  

      return (
    < >
    
    <div id="contentToConvert">
        <div className=" p-0 rounded-md">
          
          {/* Basic Information------------------------------------------------------------- */}

          <div>
            <span className=" text-xl flex justify-center mb-15 font-extrabold text-center">{basicInfo.name}</span>
            </div>
            <div className="font-lg mb-5  ml-5  text-center justify-center font-bold">
              <span className="ml-2">{basicInfo.location}</span>

              <a href={`mailto:${basicInfo.email}`} className="ml-1">{basicInfo.email}</a>
          
            <div>
              <span className="">{basicInfo.phoneNumber}</span>
              <a href={basicInfo.linkedin} target="_blank" className="ml-1">{basicInfo.linkedin}</a>
            </div>
            </div>
            {basicInfo.objective && (
          <span className="ml-2 font-semibold text-sm">Professional Summary:</span>
        )}
            <div className="mb-2 mt-2 whitespace-normal break-normal max-w-full">
                      <ul className="list-disc ml-7">
            {basicInfo.objective.split('\n').map((info, index) => (
              <li key={index}>
                <span className="ml-2 text-xs relative bottom-1">{info}</span>
              </li>
            ))}
          </ul>   
            </div>

      {componentOrder.map((componentKey, index) => {
        
        switch (componentKey) {
          case "educationInfo":
            return isEducationInfoVisible ? (
                <div key={index}>
                  <div style={{ pageBreakInside: 'avoid' }}>
              <h1 className='mb-2 p-2 font-bold text-xl text-start border-b-2 border-black'>Education</h1>
              </div>
              {educationInfo.map((education, index) =>(
                <div key={index}>

         <div style={{ pageBreakInside: 'avoid' }}>
          <span className="ml-2 font-bold text-sm">{education.school}</span>
        </div>
        
        <div className="flex justify-between font-semibold" style={{ pageBreakInside: 'avoid' }}>
          <span className="ml-2 font-semibold text-sm">{education.degree}</span>
          <span className="ml-2 text-sm">{education.date}</span>
        </div>
        
        <div  style={{ pageBreakInside: 'avoid' }}>
        {education.gpa && (
          <span className="ml-2 font-semibold text-sm">GPA</span>
        )}
          <span className="ml-2 font-semibold text-sm">{education.gpa}</span>
        </div>

        <div className="mb-2 mt-2"  style={{ pageBreakInside: 'avoid' }}>

        <ul className="list-disc ml-7">
  {education.additionalInfo.split('\n').map((info, index) => (
    <li key={index}>
      <span className="ml-2 text-xs relative bottom-1">{info}</span>
    </li>
  ))}
</ul>   

  </div>
      
        </div>
      ))}
    

  </div>
): null;
case "experienceInfo":
  return isWorkExpInfoVisible ? 
  (  //This function to hide the Right section 
  <div key={index}>
  <>
  <div style={{ pageBreakInside: 'avoid' }}>

  <h1 className='mb-2 p-2 font-bold text-xl text-start border-b-2 border-black'>Work Experience </h1>
  </div>
  
  {experienceInfo.map((experience, index) =>(
    <div key={index}>
    
    
    <div className="font-bold"style={{ pageBreakInside: 'avoid' }}>
    <span className="ml-2 font-extrabold text-sm">{experience.company}</span>
    </div>
    
    <div className="font-semibold flex justify-between" style={{ pageBreakInside: 'avoid' }}>
    <span className="ml-2, text-sm">
    {experience.jobTitle}</span>
    <span className="ml-2, text-sm">{experience.date}</span>
    </div>
    
    <div className="mb-2 mt-2"  style={{ pageBreakInside: 'avoid' }}>
    <ul className="list-disc ml-7">
  {experience.description.split('\n').map((info, index) => (
    <li key={index}>
      <span className="ml-2 text-xs relative bottom-1">{info}</span>
    </li>
  ))}
</ul> 
    </div>
    
    </div>
  ))}
  
  </>
  </div>
):null;

case "projectInfo":

        return isProjectInfoVisible ? 
        (
          <div key={index} >
          <>
        
       <div style={{ pageBreakInside: 'avoid' }}>
        <h1 className='mb-2 p-2 font-bold text-xl text-start border-b-2 border-black'>Projects</h1>
        </div> 
          {projectInfo.map((projects, index) =>(
            
            <div key={index}>
                <div className="flex justify-between" style={{ pageBreakInside: 'avoid' }}>
                  <span className="ml-2 , text-sm font-bold">{projects.project}</span>
              
                  <span className="ml-2,text-sm font-semibold">{projects.date}</span>
                </div>
                
                <div className="mb-2 mt-2" style={{ pageBreakInside: 'avoid' }}>
                <ul className="list-disc ml-7">
          {projects.description.split('\n').map((info, index) => (
            <li key={index}>
              <span className="ml-2 text-xs relative bottom-1">{info}</span>
            </li>
          ))}
        </ul>               
          </div>
                
                </div>
          ))}
          </>
          </div>
        ): null;
        case "skillInfo":
          return isSkillInfoVisible ? (
            <div key={index}>
              <div style={{ pageBreakInside: 'avoid' }}>
              <h1 className='mb-2 p-2 font-bold text-xl text-start border-b-2 border-black'>Skills</h1>
              </div>
            {skillInfo.map((skills, index) =>(
              <div key={index}>
              {/* for set the width title width take 30% of page and skill take remains 70% */}
              <div className="mb-2  grid grid-cols-[30%,70%]" style={{ pageBreakInside: 'avoid' }}> 
              <span className="m-2 text-xs font-bold ">{skills.title}</span>
              <span className="m-2  text-xs">{skills.skill}</span>
              </div>
              </div>
      ))}
              </div>
        
          ): null;
          
          default:
            return null;
          }
        
        })}
        
        </div>
       
        </div>
      {isClient && (
                //  {/* PDF download button */}

                <button  className=' text-white bg-blue-500 hover:bg-blue-700 focus:ring-4
      focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2' onClick={handleDownloadPDF}>Download PDF</button>
               
            )}
      
      </>
    );
    
  };
    
    export default OutputComponent;