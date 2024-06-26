    // components/OutputComponent.tsx
    import { useEffect, useState } from 'react';
    import { Document, PDFDownloadLink, Page, Text,StyleSheet } from '@react-pdf/renderer';
    import React from 'react';
    import { AlignCenter, View } from 'lucide-react';


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

     

      // Function to handle shifting to the next section
      // const shiftNext = () => {
      //   setCurrentSectionIndex((prevIndex) => (prevIndex + 1) % sections.length);
      // };

      // // Function to handle shifting to the previous section
      // const shiftPrevious = () => {
      //   setCurrentSectionIndex((prevIndex) => (prevIndex - 1 + sections.length) % sections.length);
      // };



      const [isClient, setIsClient] = useState(false);

      useEffect(() => {
        setIsClient(true);
      }, []);

      //For PDF view-----------------------------------------------------------------------------------------------------------------------
      
      const generatePDFContent = (): JSX.Element => (
        <Document style={styles.page}>
          <Page style={styles.bg}>
            <View style={styles.container}>

            {/* Basic Info---------------------------------------------------------------------- */}
    <div className="bg-gray-300 p-4 rounded-md">

          <Text style={styles.name}>{`${basicInfo.name}\n`}</Text>
            <Text style={styles.content2}>{`${basicInfo.location} ||`}{` ${basicInfo.email}\n`}</Text>
            <Text style={styles.content2}>{`${basicInfo.phoneNumber} || `}{` ${basicInfo.linkedin}\n`}</Text>
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryTitle}>Professional Summary: </Text>
          
              {basicInfo.objective.split('\n').map((item,index)=>(
            <View key={index} style={styles.description}>

                <Text style={styles.bullet}>•</Text>
                <Text style={styles.content}>{item}</Text>
            </View> 
              ))}
            </View>


            </div>
                {/* Education Info---------------------------------------------------------------------- */}

              
              {isEducationInfoVisible && (
                <>      
    <Text style={{marginBottom:2, borderBottom:1, justifyContent:'flex-start',
                      borderBottomWidth: 2,fontSize:18}}>Education</Text>          
                        {educationInfo.map((education, index) => (
            <View key={`education-${index}`}> 
                  <Text style={{marginLeft:2, fontWeight:'bold', fontSize:14}}> {`${education.school}\n`}</Text>
                  <View style={{flexDirection:'row', alignContent:'space-between'}}>
                  <Text style={{marginLeft:2, fontWeight:'semibold', fontSize:11}}> {`${education.degree}`}</Text> 
                  <Text style={{marginLeft: 'auto', fontWeight:'semibold', fontSize:11}}>  {`${education.date}\n`}</Text>
                  </View>
                  <Text style={{marginLeft:2, fontWeight:'semibold', fontSize:11}}> {`${education.gpa} GPA`} </Text>
                    {education.additionalInfo.split('\n').map((item, idx) => (
                      item.trim() !=='' &&

    <View style={styles.description} key={`education-additionalInformation-${idx}`}>{item}
    <Text style={styles.bullet}>•</Text>
    <Text style={styles.content}>{item}</Text>
    </View>
    ))}
    </View>
      ))}
    </>
        )}


                {/* Work Experience Info---------------------------------------------------------------------- */}

              {isWorkExpInfoVisible &&(
                  <>
    <Text style={{marginBottom:5,fontWeight:'bold', borderBottom:1, justifyContent:'flex-start',
                      borderBottomWidth: 2,fontSize:18}}>Work Experience</Text>

        {experienceInfo.map((experience, index) => (
          <View key={`experience-${index}`}>

    <View style={{flexDirection:'row', alignContent:'space-between'}}>

                  <Text style={{marginLeft:2, fontWeight:'bold', fontSize:14}}> {`${experience.company}\n`}</Text> 
                  <Text style={{marginLeft:'auto', fontSize:11}}>  {`${experience.date}\n`}</Text>
                  </View>

                  <Text style={{marginLeft:2, fontWeight:'semibold', fontSize:11}}> {`${experience.jobTitle}`}</Text> 
                    {/* Map over each item in the description and render it as a separate Text component */}

        {experience.description.split('\n').map((item, idx) => (
          item.trim() !== '' &&
          <View style={styles.description} key={`experience-description-${idx}`}>• {item}
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.content}>{item}</Text>
          </View>
        ))}
      </View>
    ))}
    </>
    )}




            
            {/* Project Info---------------------------------------------------------------------- */}
            {isProjectInfoVisible && (
              <>
              
        {projectInfo.map((project, index) => (
          <View key={`project-${index}`}>
          {index ===0 &&(<Text style={{marginBottom:5,fontWeight:'bold',
                          borderBottomWidth: 2,fontSize:18}}>Projects</Text>)}

    <View style={{flexDirection:'row', alignContent:'space-between'}}>
          <Text style={{marginLeft:2, fontWeight:'bold', fontSize:14}}>   {`${project.project}`}</Text>
          <Text style={{marginLeft:'auto', fontSize:11, fontWeight:'bold'}}> {`${project.date}\n`}</Text>
                  </View>
          {project.description.split('\n').map((item, idx) => (
                      item.trim() !== '' && // Check if item is not an empty string

          <View style={styles.description} key={`project-description-${idx}`}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.content}>{item}</Text>
              </View>
        ))}
        </View>
      ))}
      </>
    )}
                    
            {/* Skill Info---------------------------------------------------------------------- */}

    {isSkillInfoVisible &&(
    <>

            <Text style={styles.heading} >Skills</Text>
            <View>

    {skillInfo.map((skill, index) => (
      
      <Text   style={styles.content} key={`skill-${index}`}>{` ${skill.skill}\n`}</Text>
    ))}
    </View>
          
        
        
        
        </>
    )}
    </View>
    </Page>
        </Document>
    )

      const styles = StyleSheet.create({
      
        //PDF Page BG Color
        bg:{
          // backgroundColor:'#f3f3f3'
          backgroundColor:'white'
        },
        
        name:{
          fontSize: 20, // Font size of the heading
          marginBottom: 15, // Margin bottom for the heading
          // Bold font weight
          margin:5,
          marginLeft:5,
          textAlign: 'center',
          fontWeight:'extrabold',
          justifyContent:"center",
          
          
        },
        //For all parts
        container: {
          marginLeft: 20, // Add margin on the left side
          padding: 10,
          //  marginBottom: 10,
        },
        
        page: {
          padding: 8, // Padding of the page
          marginTop:5,
          marginRight:5,
          marginLeft:5,
          marginBottom:5,

      },
    
      heading: {
        fontSize: 20, // Font size of the heading
        marginBottom: 15, // Margin bottom for the heading
          // Bold font weight
        margin:5,
        marginLeft:5,
        textAlign:'left',
        fontWeight:'bold',
        justifyContent:'flex-start',
          //for line 
        borderBottom: 2, // Adjust the border width as needed
        borderBottomColor: 'black', // Adjust the color of the line as needed
        marginTop: 10, // Adjust the spacing between content and line as needed

      },
      content: {
        fontSize: 11, // Font size of the heading
        marginBottom: 5, // Margin bottom for the heading
          // Bold font weight

        margin:5,
        marginLeft:5,
        alignContent: "center",
        justifyContent:"center",
        marginTop:5,
        fontWeight:'light'
        
      },

      date:{
    fontSize:14,
    // marginBottom:5,
    fontWeight:'extrabold',
    alignContent:'center',




      },
      content2: {
        fontSize: 14, // Font size of the heading
        marginBottom: 10, // Margin bottom for the heading
          // Bold font weight
        margin:5,
        marginLeft:5,
        textAlign:'center',
        justifyContent:"center",
        marginTop:5,
        fontWeight:'bold',
      },

      mainContent: {
        fontSize: 14, // Font size of the heading
        marginBottom: 5, // Margin bottom for the heading
          // Bold font weight
        //  margin:5,
        //  marginTop:5,
        fontWeight:'ultrabold',

        
      },
      mainContent2: {
        fontSize: 14, // Font size of the heading
        //  marginBottom: 3, // Margin bottom for the heading
          // Bold font weight
        //  margin:5,
        //  marginTop:5,
        fontWeight:'extrabold',

        
      },
      
      paragraph: {
        margin:5,
        fontSize: 20, // Font size of the paragraph
        lineHeight: 1.5, // Line height of the paragraph
      },

        //for make summary in list order
      summaryContainer: {
        marginTop: 5,
      },
      summaryTitle: {
        fontWeight: 'bold',
        marginBottom: 5,
        // borderBottomWidth: 1, // Adjust the border width as needed
        textDecoration:'underline',
        textDecorationStyle:'solid'
        

        },
      
      description:{
        flexDirection:'row',
        fontSize:11,
        marginRight:5
      },
      bullet: {
        marginLeft: 5, // Adjust the margin as needed
        fontSize: 15, // Adjust the font size of the bullet symbol
        fontWeight:'bold',
        marginTop:3
        
      },
      
    });
      
      return (
    <>
    
      <div>
        <div className="bg-white p-4 rounded-md m-2">
          
          {/* Basic Information------------------------------------------------------------- */}

          <div className="">
            <span className=" text-xl flex justify-center mb-15 font-extrabold text-center">{basicInfo.name}</span>
            </div>
            <div className="font-lg mb-10 m-5 ml-5  text-center justify-center font-bold">
              <span className="ml-2">{basicInfo.location}</span>

              <span className="ml-1">{basicInfo.email}</span>
          
            <div>
              <span className="">{basicInfo.phoneNumber}</span>

            
              <span className="ml-1">{basicInfo.linkedin}</span>

          
            </div>
            
            </div>
            <div className="mb-2 whitespace-normal break-normal max-w-full">
              <span className="ml-2, text-xs">{basicInfo.objective}</span>
            </div>

      {componentOrder.map((componentKey, index) => {
        
        switch (componentKey) {
          case "educationInfo":
            return isEducationInfoVisible ? (
                <div key={index}>
              <h1 className='mb-2 font-bold text-xl text-start border-b-2 border-black'>Education</h1>
              {educationInfo.map((education, index) =>(
                <div key={index}>

        <div className="">
          <span className="ml-2 font-bold text-sm">{education.school}</span>
        </div>
        
        <div className="flex justify-between font-semibold">
          <span className="ml-2 font-semibold text-sm">{education.degree}</span>
          <span className="ml-2 text-sm">{education.date}</span>
        </div>
        
        <div className="">
        {education.gpa && (
          <span className="ml-2 font-semibold text-sm">GPA</span>
        )}
          <span className="ml-2 font-semibold text-sm">{education.gpa}</span>
        </div>
        <div className="mb-2">
          <span className="ml-2, text-xs">{education.additionalInfo}</span>
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
  <h1 className='mb-2 font-bold text-xl text-start border-b-2 border-black'>Work Experience </h1>
  
  {experienceInfo.map((experience, index) =>(
    <div key={index}>
    
    
    <div className="font-bold">
    <span className="ml-2 font-extrabold text-sm">{experience.company}</span>
    </div>
    
    <div className="font-semibold flex justify-between">
    <span className="ml-2, text-sm">
    {experience.jobTitle}</span>
    <span className="ml-2, text-sm">{experience.date}</span>
    </div>
    
    <div className="mb-2">
    <span className="ml-2, text-xs">{experience.description}</span>
    </div>
    
    </div>
  ))}
  
  </>
  </div>
):null;

case "projectInfo":

        return isProjectInfoVisible ? 
        (
          <div key={index}>

          <>
        
        <h1 className='mb-2 font-bold text-xl text-start border-b-2 border-black'>Projects</h1>
          {projectInfo.map((projects, index) =>(
            
            <div key={index}>
                <div className="flex justify-between">
                  <span className="ml-2 , text-sm font-bold">{projects.project}</span>
              
                  <span className="ml-2,text-sm font-semibold">{projects.date}</span>
                </div>
                
                <div className="mb-2">
                  <span className="ml-2, text-xs">{projects.description}</span>
                </div>
                
                </div>
          ))}
          </>
          </div>
        ): null;
        case "skillInfo":
          return isSkillInfoVisible ? (
            <div key={index}>
            {skillInfo.map((skills, index) =>(
              <div key={index}>
              <h1 className='mb-2 font-bold text-xl text-start border-b-2 border-black'>Skills</h1>
              
              <div className="mb-2">
              <span className="ml-2, text-xs">{skills.skill}</span>
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
        <div className='mt-3'>

          </div>
      {isClient && (
        
        //  {/* PDF download button */}
        
        <PDFDownloadLink className=' text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2' document={generatePDFContent()} fileName="Resume.pdf">
            {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
          </PDFDownloadLink>
      )}
      </div>
      </>
    );
  };
  
  
    export default OutputComponent;

