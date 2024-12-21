// pages/api/og.js
import { ImageResponse } from '@vercel/og'
import Image from 'next/image'

export default async function handler(req) {
  // Get dynamic values from URL params

  const response = {
    userInfo: {
      firstName: 'Aromal Jose',
      lastName: 'Baby'
    },
    stats: {
      stageId: 1,
      stageName: 'Introduction to Programming',
      grade: 6, // Grade displayed on certificate
      score: 95, // Optional: For reference, not displayed explicitly
      issueDate: new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }) // Generates date like: 15 November, 2024
    },
    signature: {
      name: 'Muneez Rehman',
      title: 'Founder & CEO'
    },
    meta: {
      logo: 'https://yourlogo-url.com/logo.png' // Placeholder for a logo URL
    }
  }

  const gradeData = [
    { group: 'G1', range: '  Below  30%' },
    { group: 'G2', range: '  30  -  39%  ' },
    { group: 'G3', range: '  40  -  49%  ' },
    { group: 'G4', range: '  50  -  59%  ' },
    { group: 'G5', range: '  60  -  69%  ' },
    { group: 'G6', range: '  70  -  79%  ' },
    { group: 'G7', range: '  80  -  89%  ' },
    { group: 'G8', range: '  90  -  100%  ' }
  ]
  return new ImageResponse(
    (
      <div className='relative flex flex-col overflow-hidden rounded-[15px] bg-gradient-to-b from-[rgba(219,240,239,1)] to-[rgba(89,188,179,1)] px-3 py-5 text-black shadow-lg'>
        {/* Header */}
        <div className='mb-4 flex items-center justify-between'>
          <div className='flex gap-3'>
            <Image src='/icons/abouv-icon.svg' alt='Icon' width={48} height={48} className='pt-2' />
            <div className='flex items-end'>
              <Image
                src='/icons/abouv-text.svg'
                alt='Icon'
                width={97}
                height={31}
                className='object-contain' // Ensures no stretching
              />
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <Image src='/icons/certificate-badge.svg' alt='Icon' width={43} height={53} />
            <div>
              <p className='text-[14px] font-medium leading-[14px] text-[rgba(1,45,56,1)]'>Date of Issue</p>
              <p className='text-[10px] font-normal leading-[14px] text-[rgba(1,45,56,1)]'>
                {response.stats.issueDate}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className='mt-8 flex flex-col gap-6 text-center'>
          <p className='text-[17px] font-normal leading-6 text-[rgba(1,104,130,1)]'>This is to certify that</p>
          <h1 className='text-[39px] font-bold leading-9 text-[rgba(1,45,56,1)]'>
            {response.userInfo.firstName} {response.userInfo.lastName}
          </h1>
          <div className='flex flex-col gap-1 text-[21px] leading-6 text-[rgba(1,45,56,1)]'>
            <p className='font-medium'>has completed Stage {response.stats.stageId} assessments with</p>
            <h2 className='font-bold'>Grade {response.stats.grade}</h2>
          </div>
        </div>

        {/* Background Images */}
        <Image
          src='/icons/certificate-bg-icon.svg'
          width={300}
          height={200}
          alt='bg'
          className='absolute bottom-10 right-0 z-20'
        />
        <Image
          src='/icons/certificate-bg-icons2.svg'
          width={300}
          height={200}
          alt='bg'
          className='absolute bottom-[-20px] right-[175px] z-20'
        />
        <Image
          src='/icons/certificate-bg-icons2.svg'
          width={300}
          height={200}
          alt='bg'
          className='absolute bottom-[134px] left-0 z-20'
        />
        <Image
          src='/icons/certificate-bg-icon3.svg'
          width={190}
          height={150}
          alt='bg'
          className='absolute bottom-[114px] left-[245px] z-20'
        />
        <Image
          src='/icons/certificate-bg-icon4.svg'
          width={180}
          height={140}
          alt='bg'
          className='absolute bottom-0 left-[100px] z-20'
        />

        {/* Signature */}
        <div className='mt-12 flex justify-center'>
          <Image src='/icons/ceo-sign.svg' width={102} height={80} alt='sign' />
        </div>

        {/* Grades */}
        <div className='mt-8 flex flex-wrap justify-center gap-1'>
          {gradeData.map((grade, index) => (
            <h2 key={index} className='text-[10px] font-normal leading-4 text-[rgba(1,45,56,1)]'>
              {grade.group} : {grade.range}
              {index !== gradeData.length - 1 && <span className='px-1.5'>|</span>}
            </h2>
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  )
}
