'use client'
import html2canvas from 'html2canvas'
import { useRef } from 'react'
import jsPDF from 'jspdf'
import Image from 'next/image'

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
  { group: 'G1', range: '   Below  30%' },
  { group: 'G2', range: '  30  -  39%  ' },
  { group: 'G3', range: '  40  -  49%  ' },
  { group: 'G4', range: '  50  -  59%  ' },
  { group: 'G5', range: '  60  -  69%  ' },
  { group: 'G6', range: '  70  -  79%  ' },
  { group: 'G7', range: '  80  -  89%  ' },
  { group: 'G8', range: '  90  -  100%  ' }
]

const CertificateCard = ({ stage, completed, certificate }) => {
  const certificateRef = useRef < HTMLDivElement > null

  const captureAndShare = async () => {
    try {
      const certificateUrl = 'https://sangam-bharat-app.vercel.app/get-certificate'
      const shareText = `Hey! Check out my abouv certificate! 🎓\n\nCheck it out here: [${certificateUrl}]`

      // For native sharing (mobile devices)
      if (navigator.canShare) {
        await navigator.share({
          text: shareText,
          url: certificateUrl
        })
      } else {
        // For platform-specific sharing
        const encodedUrl = encodeURIComponent(certificateUrl)
        const encodedText = encodeURIComponent(shareText)
        let shareLink = ''

        switch (platform) {
          case 'Facebook':
            shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`
            break
          case 'Whatsapp':
            shareLink = `https://api.whatsapp.com/send?text=${encodedText}-${encodedUrl}`
            break
          case 'Linkedin':
            shareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${'My Abouv Certificate'}&summary=${encodedText}`
            break
          case 'Instagram':
            alert('Instagram sharing is only available through the app.')
            return
          default:
            shareLink = `https://api.whatsapp.com/send?text=${encodedText}-${encodedUrl}`
            break
        }

        window.open(shareLink, '_blank')
      }
    } catch (error) {
      console.error('Error sharing:', error)
    }
  }

  const { userInfo, stats } = response

  const generatePDF = () => {
    const certificateDiv = certificateRef.current

    if (certificateDiv) {
      html2canvas(certificateDiv, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('landscape', 'mm', 'a4')
        const imgWidth = 297 // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
        pdf.save(`${userInfo.firstName}-stage-${stats.stageId}-certificate.pdf`)
      })
    }
  }

  return (
    <>
      <div className='border border-[rgba(230,230,230,1)] flex flex-col gap-6 rounded-lg py-[26px] px-5 shadow-sm bg-white mb-4'>
        <h3 className='text-[20px] leading-[25px] text-black font-medium '>Stage {stage} completion certificate</h3>
        {completed ? (
          <div className='flex gap-4 w-full'>
            {/* Share Button */}
            <button
              onClick={captureAndShare}
              className='flex w-[50%] justify-center items-center text-[16px] leading-5 font-medium gap-2 bg-black text-white px-5 py-3 rounded-[8px]'
            >
              <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M3.3335 10V16.6667C3.3335 17.1087 3.50909 17.5326 3.82165 17.8452C4.13421 18.1577 4.55814 18.3333 5.00016 18.3333H15.0002C15.4422 18.3333 15.8661 18.1577 16.1787 17.8452C16.4912 17.5326 16.6668 17.1087 16.6668 16.6667V10'
                  stroke='#F2F2F2'
                  stroke-width='1.66667'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M13.3332 5L9.99984 1.66667L6.6665 5'
                  stroke='#F2F2F2'
                  stroke-width='1.66667'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M10 1.66667V12.5'
                  stroke='#F2F2F2'
                  stroke-width='1.66667'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              Share
            </button>

            {/* Download Button */}
            <button
              onClick={generatePDF}
              className='flex w-[50%] justify-center items-center gap-2 text-[16px] leading-5 font-medium border-[1.5px] border-[rgba(134,221,205,1)] px-5 py-3 rounded-[8px] text-black'
            >
              <svg width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M18 12.5V15.8333C18 16.2754 17.8244 16.6993 17.5118 17.0118C17.1993 17.3244 16.7754 17.5 16.3333 17.5H4.66667C4.22464 17.5 3.80072 17.3244 3.48816 17.0118C3.17559 16.6993 3 16.2754 3 15.8333V12.5'
                  stroke='black'
                  stroke-width='1.66667'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M6.3335 8.33333L10.5002 12.5L14.6668 8.33333'
                  stroke='black'
                  stroke-width='1.66667'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M10.5 12.5V2.5'
                  stroke='black'
                  x1
                  stroke-width='1.66667'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              Download
            </button>
          </div>
        ) : (
          <div className='mt-2'>
            <span className='bg-[rgba(234,252,249,1)]  text-gray-500 text-[16px] leading-[22.5px] font-normal text-[rgba(27,83,96,1)] px-4 py-2 rounded-md '>
              Complete stage {stage - 1} to unlock
            </span>
          </div>
        )}
      </div>
      <div
        ref={certificateRef}
        className='mx-auto absolute top-[-9999px] left-[-9999px] w-[842px] h-auto overflow-clip px-5 pt-5'
      >
        <div className='relative overflow-hidden  rounded-[15px] bg-gradient-to-b from-[rgba(219,240,239,1)] to-[rgba(89,188,179,1)] text-black py-5 px-3 shadow-lg flex flex-col'>
          {/* Header */}
          <div className='flex justify-between items-center mb-4'>
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
            <div className='items-center flex gap-2'>
              <Image src='/icons/certificate-badge.svg' alt='Icon' width={43} height={53} />
              <div>
                <p className='font-medium text-[14px] leading-[14px] text-[rgba(1,45,56,1)]'>Date of Issue</p>
                <p className='text-[rgba(1,45,56,1)] font-normal text-[10px] leading-[14px]'>
                  {response.stats.issueDate}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className='text-center flex flex-col mt-8 gap-6'>
            <p className='text-[17px] leading-6 font-normal text-[rgba(1,104,130,1)]'>This is to certify that</p>
            <h1 className='text-[39px] leading-9 font-bold text-[rgba(1,45,56,1)]'>
              {response.userInfo.firstName} {response.userInfo.lastName}
            </h1>
            <div className='flex flex-col gap-1 text-[rgba(1,45,56,1)] text-[21px] leading-6'>
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
            className='absolute z-20 right-0 bottom-10'
          />
          <Image
            src='/icons/certificate-bg-icons2.svg'
            width={300}
            height={200}
            alt='bg'
            className='absolute z-20 right-[175px] bottom-[-20px]'
          />
          <Image
            src='/icons/certificate-bg-icons2.svg'
            width={300}
            height={200}
            alt='bg'
            className='absolute z-20 left-0 bottom-[134px]'
          />
          <Image
            src='/icons/certificate-bg-icon3.svg'
            width={190}
            height={150}
            alt='bg'
            className='absolute z-20 left-[245px] bottom-[114px]'
          />
          <Image
            src='/icons/certificate-bg-icon4.svg'
            width={180}
            height={140}
            alt='bg'
            className='absolute z-20 left-[100px] bottom-0'
          />

          {/* Signature */}
          <div className='mt-12 flex justify-center'>
            <Image src='/icons/ceo-sign.svg' width={102} height={80} alt='sign' />
          </div>

          {/* Grades */}
          <div className='mt-8 flex justify-center gap-1 flex-wrap'>
            {gradeData.map((grade, index) => (
              <h2 key={index} className='text-[10px] text-[rgba(1,45,56,1)] leading-4 font-normal'>
                {grade.group} : {grade.range}
                {index !== gradeData.length - 1 && <span className='px-1.5'>|</span>}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

function CertificatePage() {
  const stages = [
    {
      stage: 0,
      completed: true,
      certificate:
        'https://priyadogra.com/wp-content/uploads/2024/12/Upper-Intermediate-English-as-a-Second-Language-certuficate-saylor-academy-pdf.jpg'
    },
    { stage: 1, completed: true },
    { stage: 2, completed: false },
    { stage: 3, completed: false },
    { stage: 4, completed: false }
  ]

  return (
    <div className='px-5 pb-10 pt-5 bg-[rgb(250,250,250)] relative mainWidth  no-scrollbar'>
      <div className='flex flex-col gap-1.5 py-4'>
        {stages.map(({ stage, completed, certificate }) => (
          <CertificateCard key={stage} certificate={certificate} stage={stage} completed={completed} />
        ))}
      </div>
    </div>
  )
}

export default CertificatePage
