import React, { useState } from 'react'
import Select from 'react-select';
// const [selectedOption, setSelectedOption] = useState<any>();
const options = [
    { value: '4:00 Available', label: '4:00 Available' },
    { value: 'Please Select', label: 'Please Select' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
const Dropdown = () => {
    return (
        <div className='flex flex-col gap-10 p-10'>
            <header className='tracking-widest text-2xl font-bold leading-8 text-center'>Book Appointment</header>
            <div className='flex flex-col gap-3'>
                <div>
                    <p className='text-base font-semibold leading-6 tracking-wide text-left mb-3'>Name *</p>
                    <div className='bg-[#F9F9F9] border border-solid rounded-md border-[#E6E6E6] h-[50px] flex items-center '>
                        <input type=""
                            className='ml-[20px] bg-[#F9F9F9] text-[#737373]'
                            placeholder="Full Name *"
                        />
                    </div>
                </div>
                <div>
                    <p className='text-base font-semibold leading-6 tracking-wide text-left mb-3 '>Email address *</p>
                    <div className='bg-[#F9F9F9] border border-solid rounded-md border-[#E6E6E6] h-[50px] flex items-center '>
                        <input type=""
                            placeholder="example@gmail.com"
                            className='ml-[20px] bg-[#F9F9F9] text-[#737373]'
                        />
                    </div>
                </div>
                <div className=''>
            <p className='text-base font-semibold leading-6 tracking-wide text-left mb-3'>Departement *</p>
            <Select
                    // defaultValue={selectedOption}
                    // onChange={setSelectedOption}
                    options={options}
                />
                </div>
                <div>
               <p className='text-base font-semibold leading-6 tracking-wide text-left mb-3'>Time *</p>
                <Select
                    // defaultValue={selectedOption}
                    // onChange={setSelectedOption}
                    options={options}
                    className=""
                />
                </div>
            </div>
            <div className='flex justify-center rounded-md bg-[#23A6F0] text-white p-4 tracking-tighter leading-7 font-bold text-base'>Book Appointment</div>
        </div>
    )
}

export default Dropdown