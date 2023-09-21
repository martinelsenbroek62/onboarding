import React, { useState } from 'react'
import CustomInput from './CustomInput'
import Image from 'next/image'

const Business = ({ onClose }) => {
    const [rating, setRating] = useState(0);
    const [avatar, setAvatar] = useState([])
    const [editImages, setEditImages] = useState([])
    const [selectedFile, setSelectedFile] = useState(null);

    const handleSignUpForm = () => {

    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleDownload = () => {
        if (selectedFile) {
            const url = window.URL.createObjectURL(selectedFile);
            const a = document.createElement('a');
            a.href = url;
            a.download = selectedFile.name;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        }
    };

    const handleRatingClick = (value) => {
        setRating(value);
    };
    const handleAvatarChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
    };
    const handleEditImages = (e) => {
        e.preventDefault();
        const file = e.target.files;
        setEditImages(file);
    };

    return (
        <div className=' max-h-[77vh] sm:max-h-[70vh] overflow-auto custom-scroll '>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-20 w-full px-6 py-8 border-b border-[#D9D9E0] '>
                <label htmlFor="businessName" className='text-[#313136] font-lato text-base font-semibold leading-5 w-24 ' >Name</label>
                <CustomInput type="text" name="name" id="businessName" placeholder="Click to add business name" handleChange={() => handleSignUpForm()} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
            </div>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-20 w-full px-6 py-8 border-b border-[#D9D9E0]'>
                <label htmlFor="" className='text-[#313136] font-lato text-base font-semibold leading-5 w-20 '>Avatar</label>
                <div className='flex items-center gap-4'>
                    <div className='bg-panther-400 rounded-full h-[30px] w-[30px] flex items-center justify-center'>

                        {avatar?.name?.length > 0 ? <img src={URL.createObjectURL(avatar)}
                            alt='Anna'
                            width="30"
                            height="30"
                            className=' rounded-full w-[30px] h-[30px]  '
                        /> : <Image src="/images/user.svg"
                            alt='Anna'
                            width="12"
                            height="13"
                            className='  '
                        />}
                    </div>
                    <label className='cursor-pointer py-[6px] px-[10px] rounded border border-[#D9D9E0] bg-[#ffffff63] flex items-center justify-center '>
                        <span htmlFor="selectImage" className='cursor-pointer text-[#313136] font-lato text-xs font-semibold leading-[130%] '>Change</span>
                        <input type="file" name="changeAvatar" className='hidden' id="imageFind" onChange={(e) => handleAvatarChange(e)} />
                    </label>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-20 w-full px-6 py-8 border-b border-[#D9D9E0]'>
                <label htmlFor="addName" className='text-[#313136] font-lato text-base font-semibold leading-5 w-24 '>Job Title</label>
                <CustomInput type="text" name="Email" id="PasswordFor" placeholder="Click to add job title" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
            </div>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-20 w-full px-6 py-8 border-b border-[#D9D9E0]  sm:hidden '>
                <label htmlFor="bioAdd" className='text-[#313136] font-lato text-base font-semibold leading-5 w-24 '>Website</label>
                <CustomInput type="text" name="Website" id="Website" placeholder="Click to add Website" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
            </div>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-20 w-full px-6 py-8 border-b border-[#D9D9E0]'>
                <label htmlFor="bioAdd" className='text-[#313136] font-lato text-base font-semibold leading-5 w-24 '>Location</label>
                <CustomInput type="text" name="Email" id="PasswordFor" placeholder="Click to add location" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
            </div>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-20 w-full px-6 py-8 border-b border-[#D9D9E0]'>
                <label htmlFor="" className='text-[#313136] font-lato text-base font-semibold leading-5 w-20 '>Bio</label>
                <textarea placeholder='Click to add Description' handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' rows="5" cols="80" className='border px-4 py-1 rounded border-[#D9D9E0] gap-4 placeholder:text-[#D9D9E0] w-[300px] sm:w-full ' />
            </div>


            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-20 w-full px-6 py-8 border-b border-[#D9D9E0]'>
                <label htmlFor="" className='text-[#313136] font-lato text-base font-semibold leading-5 w-20 '>Image</label>
                <div className='flex items-center gap-[16px]'>
                    {editImages.length === 0 && <div className='h-[48px] w-[48px] rounded-lg border bg-[#F1F1F7] flex items-center justify-center cursor-pointer' htmlFor="imageSelector" >
                        <Image src="/images/gallary.svg"
                            alt='Anna'
                            width="21"
                            height="14"
                            className=''
                        />
                    </div>}
                    <div className='flex items-center relative'>
                        {Object.values(editImages).slice(0, 6).map((item, index) => (
                            <div key={index} className='relative'
                                style={{
                                    zIndex: Object.values(editImages).length - index, // Adjust zIndex for all images
                                }}
                            >
                                <label
                                    className='rounded-lg border bg-white flex flex-col-reverse items-center justify-center cursor-pointer pr-[3px] '
                                    htmlFor={`imageSelector-${index}`}
                                    style={{
                                        marginLeft: index === 0 ? 0 : '-12px', // Overlap all but the first image
                                        zIndex: index === 0 ? 1 : 0, // Ensure the first image is on top
                                    }}
                                >
                                    <img
                                        src={URL.createObjectURL(item)}
                                        alt='Anna'
                                        width="48"
                                        height="48"
                                        className='w-12 h-12 rounded-lg flex-shrink-0 '
                                    />

                                </label>
                            </div>
                        ))}
                        {editImages.length > 6 && <div className='w-12 h-12 cursor-pointer bg-[#F1F1F7] rounded-lg border flex flex-col-reverse items-center justify-center  pr-[3px] -ml-2 '>
                            <span className='text-purple-900 text-[8px] font-medium leading-[8px] '>+{editImages.length - 6} More</span>
                        </div>}
                    </div>

                    <label htmlFor='imageSelector' className='border border-[#E7E7EE] px-2.5 py-1.5 rounded-[4px] gap-[6px] bg-[#ffffff63] text-xs leading-[15px] font-bold text-[#313136] cursor-pointer' >Edit Image(s)</label>
                    <input
                        type="file"
                        className="hidden"
                        name="image"
                        id="imageSelector"
                        accept="image/*"
                        multiple
                        onChange={(e) => handleEditImages(e)}
                    />

                </div>
            </div>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-20 w-full px-6 py-8 border-b border-[#D9D9E0]'>
                <label htmlFor="" className=' text-[#313136] font-lato text-base font-semibold leading-5 w-20 ' >Cost</label>
                <div className=' flex gap-1 '>
                    {[1, 2, 3, 4].map((value) => (
                        <div
                            className={`w-8 h-8 flex items-center justify-center cursor-pointer ${value <= rating ? 'bg-azure-400 rounded-full' : ''
                                }`}
                            onClick={() => handleRatingClick(value)}
                            key={value}
                        >
                            <Image
                                src={value <= rating ? '/images/WhiteDollar.svg' : '/images/dollar.svg'}
                                alt="Anna"
                                width="9"
                                height="16"
                                className=""
                            />
                        </div>
                    ))}
                </div>

            </div>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-20 w-full px-6 py-8 border-b border-[#D9D9E0]  sm:hidden '>
                <label htmlFor="bioAdd" className='text-[#313136] font-lato text-base font-semibold leading-5 w-24 '>Instagram</label>
                <CustomInput type="text" name="Instagram" id="Instagram" placeholder="Click to add Instagram" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
            </div>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-20 w-full px-6 py-8 border-b border-[#D9D9E0]  sm:hidden '>
                <label htmlFor="bioAdd" className='text-[#313136] font-lato text-base font-semibold leading-5 w-24 '>Facebook</label>
                <CustomInput type="text" name="Facebook" id="Facebook" placeholder="Click to add Facebook" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
            </div>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-20 w-full px-6 py-8 border-b border-[#D9D9E0]  sm:hidden '>
                <label htmlFor="bioAdd" className='text-[#313136] font-lato text-base font-semibold leading-5 w-24 '>Twitter</label>
                <CustomInput type="text" name="Twitter" id="Twitter" placeholder="Click to add Twitter" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
            </div>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-20 w-full px-6 py-8 border-b border-[#D9D9E0]  sm:hidden '>
                <label htmlFor="bioAdd" className='text-[#313136] font-lato text-base font-semibold leading-5 w-24 '>Email</label>
                <CustomInput type="text" name="Email" id="Email" placeholder="Click to add Email" handleChange={(e) => handleSignUpForm(e)} handleblur={(e) => handleBlurusername(e)} onblurshow={true} value='' />
            </div>


            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-20 w-full px-6 py-8 border-b border-[#D9D9E0]'>
                <label htmlFor="" className='text-[#313136] w-20 whitespace-nowrap font-lato text-base font-semibold leading-5 '>Pricing Sheet</label>
                <div className='flex items-center justify-between w-full gap-4'>
                    <div className='flex items-center justify-center gap-4'>
                        <div className='p-1 '>
                            <Image src="/images/attach.jpg"
                                alt='Anna'
                                width="13"
                                height="16"
                                className=''
                            />
                        </div>
                        {selectedFile?.name.length > 0 ? <div className='flex items-center gap-3'>
                            <span htmlFor='imageselector-2' className='flex text-panther-800 text-base font-medium leading-[22px] ' placeholder=''>{selectedFile?.name}</span>
                            <span htmlFor='imageselector-2' className=' text-panther-400 text-base font-medium leading-[22px]  ' placeholder=''>{(selectedFile?.size / 1048576).toFixed(2)}mb</span>
                        </div> : <label htmlFor='imageselector-2' className='flex text-[#C4C4CC] cursor-pointer ' >Add an Attachment</label>
                        }
                    </div>

                    {selectedFile?.name.length > 0 ? <div className='flex items-center gap-4'>
                        <span className='text-azure-400 font-lato text-base font-medium leading-[22px] cursor-pointer ' onClick={() => handleDownload()}   >Download</span>
                        <span className='text-[#EF4444] font-lato text-base font-medium leading-[22px] cursor-pointer ' onClick={() => setSelectedFile(null)}>Remove</span>
                    </div> : <span className='text-azure-400 font-lato text-base font-medium leading-[22px] cursor-pointer '>Upload</span>}
                    <input type="file" className='hidden' name="" id="imageselector-2" accept='.pdf' onChange={(e) => handleFileChange(e)} />
                </div>
            </div>

            <div className='px-8 pt-12 pb-[31px] flex items-center justify-end gap-4'>
                <span className='text-panther-800 text-base font-medium leading-4 px-2.5 py-1.5 rounded border border-[#F2F2EE] text-center cursor-pointer ' onClick={() => onClose()}>Cancel</span>
                <span className=' text-base font-medium leading-4 px-2.5 py-1.5 rounded bg-azure-500 text-center cursor-pointer text-panther-50 '>Save</span>
            </div>

        </div>
    )
}

export default Business