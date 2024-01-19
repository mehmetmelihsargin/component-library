import React, { useState } from 'react'
import Select from 'react-select';


const Dropdown = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedTimeOption, setSelectedTimeOption] = useState(null);
    const departments: any = [
        { value: 'IT', label: 'IT' },
        { value: 'HR', label: 'HR' },
    ];
    const times: any = [
        { value: '14:00', label: '14:99' },
        { value: '15:00', label: '15:00' },
    ];

    const handleChange = (e: any, inputName: string) => {
        if (inputName === 'name') {
            setName(e.target.value)
        } else if (inputName === 'mail') {
            setMail(e.target.value)
        }

    }
    const handleSubmit = () => {
        console.log({
            name: name,
            mail: mail,
            selectedOption: selectedOption,
            selectedTimeOption: selectedTimeOption
        })
    }
    return (
        <div className='flex flex-col gap-10 p-10'>
            <header className='tracking-widest text-2xl font-bold leading-8 text-center'>Book Appointment</header>
            <div className='flex flex-col gap-3'>
                <div>
                    <p className='text-base font-semibold leading-6 tracking-wide text-left mb-3'>Name *</p>
                    <div className='bg-[#F9F9F9] border border-solid rounded-md border-[#E6E6E6] h-[50px] flex items-center '>
                        <input type=""
                            name='name'
                            className='ml-[20px] bg-[#F9F9F9] text-[#737373]'
                            placeholder="Full Name *"
                            onChange={(e) => handleChange(e, 'name')}
                            value={name}
                        />
                    </div>
                </div>
                <div>
                    <p className='text-base font-semibold leading-6 tracking-wide text-left mb-3 '>Email address *</p>
                    <div className='bg-[#F9F9F9] border border-solid rounded-md border-[#E6E6E6] h-[50px] flex items-center '>
                        <input type=""
                            name='mail'
                            placeholder="example@gmail.com"
                            className='ml-[20px] bg-[#F9F9F9] text-[#737373]'
                            onChange={(e) => handleChange(e, 'mail')}
                            value={mail}
                        />
                    </div>
                </div>
                <div className=''>
                    <p className='text-base font-semibold leading-6 tracking-wide text-left mb-3'>Departement *</p>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={departments}
                        placeholder='Please Select'
                        styles={{
                            control: (baseStyles) => ({
                                ...baseStyles,
                                height: '50px',
                                backgroundColor: '#F9F9F9',
                                borderRadius: '5px',
                                border: '#DDDDDD,1px,solid',

                            }),
                            indicatorSeparator: (baseStyles) => ({
                                ...baseStyles,
                                display: 'none'
                            }),
                            placeholder: (baseStyles) => ({
                                ...baseStyles,
                                marginLeft: '14px',
                                fontSize: '14px',
                                color: '#737373'
                            })
                        }}
                    />
                </div>
                <div>
                    <p className='text-base font-semibold leading-6 tracking-wide text-left mb-3'>Time *</p>
                    <Select
                        defaultValue={selectedTimeOption}
                        onChange={setSelectedTimeOption}
                        options={times}
                        placeholder='Please Select'
                        styles={{
                            control: (baseStyles) => ({
                                ...baseStyles,
                                height: '50px',
                                backgroundColor: '#F9F9F9',
                                borderRadius: '5px',
                                border: '#DDDDDD,1px,solid',
                            }),
                            indicatorSeparator: (baseStyles) => ({
                                ...baseStyles,
                                display: 'none'
                            }),
                            placeholder: (baseStyles) => ({
                                ...baseStyles,
                                marginLeft: '14px',
                                fontSize: '14px',
                                color: '#737373'
                            })
                        }}
                    />
                </div>
            </div>
            <div onClick={() => handleSubmit()} className='flex justify-center rounded-md bg-[#23A6F0] text-white p-4 tracking-tighter leading-7 font-bold text-base'>Book Appointment</div>
        </div>
    )
}

export default Dropdown