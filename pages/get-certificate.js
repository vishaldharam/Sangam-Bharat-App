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

      <div className='min-h-screen bg-white w-full font-outfit px-4 py-6 md:py-12'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col w-full lg:flex-row gap-6 lg:gap-8'>
            {/* Certificate Section - Adjusted height */}
            <div className=' relative w-full lg:w-[60%]'>
              <div className='relative flex flex-col overflow-hidden rounded-[15px] border border-[rgba(1,29,36,1)] bg-gradient-to-b from-[rgba(219,240,239,1)] to-[rgba(89,188,179,1)] px-5 py-5 text-black shadow-lg'>
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
                  width={253}
                  height={161}
                  alt='bg'
                  className='absolute bottom-10 right-0 z-20'
                />
                <Image
                  src='/icons/certificate-bg-icons2.svg'
                  width={268}
                  height={173}
                  alt='bg'
                  className='absolute bottom-[-20px] right-[175px] z-20'
                />
                <Image
                  src='/icons/certificate-bg-icons2.svg'
                  width={267}
                  height={173}
                  alt='bg'
                  className='absolute bottom-[134px] left-0 z-20'
                />
                <Image
                  src='/icons/certificate-bg-icon3.svg'
                  width={157}
                  height={101}
                  alt='bg'
                  className='absolute bottom-[114px] left-[245px] z-20'
                />
                <Image
                  src='/icons/certificate-bg-icon4.svg'
                  width={181}
                  height={117}
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
            </div>
            {/* Features Section */}
            <div className='bg-[#001A1E] text-white  rounded-3xl'>
              <div className='flex justify-between items-center px-8 pt-8 mb-5 '>
                <h1 className='text-[28px] leading-9 font-semibold'>Get your certificate</h1>
                <button className='bg-[rgba(41,143,150,1)] text-white px-7 py-3 rounded-[8px] text-xl hover:bg-opacity-90 transition-opacity'>
                  Signup now
                </button>
              </div>

              <div className='bg-[rgba(1,68,85,1)] p-3 mb-12'>
                <h2 className='text-[22px] leading-7 px-8 '>What you get from abouv</h2>
              </div>

              <div className='space-y-12 px-8 '>
                <div className='flex items-start gap-6'>
                  <div className='bg-purple-200 p-4 rounded-2xl'></div>
                  <div>
                    <h3 className='text-2xl font-medium mb-2'>Win Big with Monthly Contests</h3>
                    <p className='text-gray-300 text-xl'>Compete for exclusive internships and rewards.</p>
                  </div>
                </div>

                <div className='flex items-start gap-6'>
                  <div className='bg-yellow-200 p-4 rounded-2xl'></div>
                  <div>
                    <h3 className='text-2xl font-medium mb-2'>Unlock Opportunities</h3>
                    <p className='text-gray-300 text-xl'>1,000+ jobs and internships from top companies.</p>
                  </div>
                </div>

                <div className='flex items-start gap-6'>
                  <div className='bg-teal-200 p-4 rounded-2xl'></div>
                  <div>
                    <h3 className='text-2xl font-medium mb-2'>Assess Your Job Readiness</h3>
                    <p className='text-gray-300 text-xl'>Detailed reports to assess and improve your job readiness.</p>
                  </div>
                </div>
              </div>
            </div>
            x{' '}
          </div>
        </div>
      </div>
    </>
  )
}

export default CertificatePage
