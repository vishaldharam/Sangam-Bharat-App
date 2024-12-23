import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

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

const features = [
  {
    title: 'Win Big with Monthly Contests',
    desc: 'Compete for exclusive internships and rewards.',
    imageUrl: '/trophy-icon.svg'
  },
  {
    title: 'Unlock Opportunities:',
    desc: '1,000+ jobs and internships from top companies.',
    imageUrl: '/bag-icon.svg'
  },
  {
    title: 'Assess Your Job Readiness',
    desc: 'Detailed reports to assess and improve your job readiness.',
    imageUrl: '/brain-icon.svg'
  }
]
function CertificatePage() {
  const certificateId = 123 // Replace this dynamically based on the user

  return (
    <>
      <Head>
        <meta property='og:site_name' content='Certificate of Achievement' />
        <meta property='og:title' content='Aromal Jose Baby Stage zero certificate' />
        <meta property='og:description' content={`Hey! Check out my abouv certificate[]`} />

        <meta property='og:image' itemProp='image' content='https://sangam-bharat-app.vercel.app/api/certificate' />
        <meta property='og:type' content='website' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='400' />
        <meta property='og:image:height' content='400' />
        <meta property='og:type' content='website' />

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='min-h-screen bg-white w-full font-outfit px-4 py-6 md:py-10'>
        <div className='w-full px-2 lg:px-[60px]'>
          <div className='flex flex-col w-full lg:flex-row  h-full gap-6 lg:gap-10'>
            {/* Certificate Section - Adjusted height */}
            <div className='relative w-full mb-14 lg:h-[25%] lg:w-[60%]'>
              <div className='relative flex flex-col overflow-hidden rounded-[15px] border border-[rgba(0,102,127,1)] bg-gradient-to-b from-[rgba(219,240,239,1)] to-[rgba(89,188,179,1)] px-5 py-5 text-black shadow-lg'>
                {/* Header */}
                <div className='mb-4 flex items-center justify-between'>
                  <div className='flex gap-3'>
                    <img src='/icons/abouv-icon.svg' alt='Icon' width={48} height={48} className='pt-2' />
                    <div className='flex items-end'>
                      <img src='/icons/abouv-text.svg' alt='Icon' width={97} height={31} className='object-contain' />
                    </div>
                  </div>
                  <div className='flex items-center gap-2'>
                    <img src='/icons/certificate-badge.svg' alt='Icon' width={43} height={53} />
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
                  <p className='text-[clamp(14px,2vw,17px)] font-normal leading-6 text-[rgba(1,104,130,1)]'>
                    This is to certify that
                  </p>
                  <h1 className='text-[clamp(24px,4vw,39px)] font-bold leading-[clamp(30px,5vw,9rem)] text-[rgba(1,45,56,1)]'>
                    {response.userInfo.firstName} {response.userInfo.lastName}
                  </h1>
                  <div className='flex flex-col gap-1 text-[clamp(18px,3vw,21px)] leading-6 text-[rgba(1,45,56,1)]'>
                    <p className='font-medium'>has completed Stage {response.stats.stageId} assessments with</p>
                    <h2 className='font-bold'>Grade {response.stats.grade}</h2>
                  </div>
                </div>

                {/* Background Images */}
                <img
                  src='/icons/certificate-bg-icon.svg'
                  alt='bg'
                  className='absolute bottom-10 right-0 z-20 w-[clamp(150px,40%,253px)] h-auto'
                />
                <img
                  src='/icons/certificate-bg-icons2.svg'
                  alt='bg'
                  className='absolute bottom-[-20px] right-[10%] z-20 w-[clamp(150px,40%,268px)] h-auto'
                />
                <img
                  src='/icons/certificate-bg-icons2.svg'
                  alt='bg'
                  className='absolute bottom-[10%] left-0 z-20 w-[clamp(150px,40%,267px)] h-auto'
                />
                <img
                  src='/icons/certificate-bg-icon3.svg'
                  alt='bg'
                  className='absolute bottom-[15%] left-[25%] z-20 w-[clamp(100px,25%,157px)] h-auto'
                />
                <img
                  src='/icons/certificate-bg-icon4.svg'
                  alt='bg'
                  className='absolute bottom-0 left-[10%] z-20 w-[clamp(120px,30%,181px)] h-auto'
                />

                {/* Signature */}
                <div className='mt-12 flex justify-center'>
                  <img src='/icons/ceo-sign.svg' alt='sign' className='w-[clamp(60px,20%,102px)] h-auto' />
                </div>

                {/* Grades */}
                <div className='mt-8 flex flex-wrap justify-center gap-1'>
                  {gradeData.map((grade, index) => (
                    <h2 key={index} className='text-[clamp(8px,2vw,10px)] font-normal leading-4 text-[rgba(1,45,56,1)]'>
                      {grade.group} : {grade.range}
                      {index !== gradeData.length - 1 && <span className='px-1.5'>|</span>}
                    </h2>
                  ))}
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className='bg-[rgba(1,29,36,1)]  text-white mb-6   rounded-[16px]'>
              <div className='flex justify-between items-center px-10 pt-10 mb-5 '>
                <h1 className='text-[28px] leading-9 font-semibold'>Get your certificate</h1>
                <a target='_blank' href={'http://localhost:3000/sign-up'}>
                  <button className='bg-[rgba(41,143,150,1)] text-white px-7 py-3 rounded-[8px] text-xl hover:bg-opacity-90 transition-opacity'>
                    Signup now
                  </button>
                </a>
              </div>

              <div className='bg-[rgba(1,68,85,1)] p-3 mb-12'>
                <h2 className='text-[22px] leading-7 px-8 '>What you get from abouv</h2>
              </div>

              <div className='space-y-12 py-0 px-10 '>
                {features.map((feature, index) => (
                  <div key={index} className='flex items-start gap-6'>
                    <img src={`/icons/features/${feature.imageUrl}`} width={58} height={58} alt='trophy-icon' />
                    <div>
                      <h3 className='text-[18px] leading-[22px] font-semibold mb-2'>{feature.title}</h3>
                      <p className='text-[18px] text-[rgba(230,230,230,1)] leading-[22px] font-light'>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CertificatePage
