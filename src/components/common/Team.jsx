import React, { useEffect, useRef, useState } from 'react'
import TeamMemberInfo from './TeamMemberInfo';

const Team = ({onClose}) => {
  const [teamMembers, setTeamMembers] = useState([]);
  const scrollContainerRef = useRef(null);

  const handleAddTeamMemberClick = () => {
    // Add a new TeamMemberInfo component to the array
    setTeamMembers([...teamMembers, <TeamMemberInfo key={teamMembers.length} />]);

  };

  useEffect(() => {
    if (teamMembers.length > 0) {
      // Scroll to the "Add Team Member" button
      const addButton = document.getElementById('add-team-member-button');
      if (addButton) {
        addButton.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [teamMembers]);


  return (
    <>

      <div className='flex flex-col justify-between h-[calc(100vh-29.5vh)] '>
        <div className='flex flex-col items-start p-6 border-b border-[#E5E7EB] '>
          <span className='text-[#1F2937] font-lato text-xl font-bold leading-[150%] '>Are You a Part of a Team?</span>
          <span className='text-[#6D7280] font-lato text-BASE font-normal leading-[150%]'>Add Any Team Members Below</span>
        </div>

        <div className='overflow-auto h-full max-h-[480px] custom-scroll ' ref={scrollContainerRef} >
          {teamMembers.map((member, index) => (
            <div key={index} >{member}</div>
          ))}


          <div className='p-6 pb-9'>
            <div className='border border-[#D9D9E0] rounded text-center py-2.5 cursor-pointer ' id="add-team-member-button" onClick={() => handleAddTeamMemberClick()}>
              <span className='text-panther-800 font-lato text-base font-semibold leading-4 '>Add Team Member</span>
            </div>
          </div>
        </div>
        <div className='px-8 pt-12 pb-[31px] flex items-center justify-end gap-4'>
          <span className='text-panther-800 text-base font-medium leading-4 px-2.5 py-1.5 rounded border border-[#F2F2EE] text-center cursor-pointer ' onClick={() => onClose()}>Cancel</span>

          <span className=' text-base font-medium leading-4 px-2.5 py-1.5 rounded bg-azure-500 text-center cursor-pointer text-panther-50 '>Save</span>
        </div>
      </div>
    </>
  )
}

export default Team