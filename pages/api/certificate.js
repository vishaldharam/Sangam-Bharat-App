import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge'
}

async function loadGoogleFont(font, weight) {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&display=swap`
  const css = await (await fetch(url)).text()
  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)

  if (resource) {
    const response = await fetch(resource[1])
    if (response.status == 200) {
      return await response.arrayBuffer()
    }
  }

  throw new Error('failed to load font data')
}

export default async function handler(request) {
  const data = {
    userInfo: {
      firstName: 'Aromal Jose',
      lastName: 'Baby'
    },
    stats: {
      stageId: 0,
      grade: 6,
      issueDate: '15 November, 2024'
    }
  }

  // Load different font weights
  const regularFont = await loadGoogleFont('Outfit', 400)
  const mediumFont = await loadGoogleFont('Outfit', 500)
  const semiBoldFont = await loadGoogleFont('Outfit', 600)
  const boldFont = await loadGoogleFont('Outfit', 700)

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          position: 'relative',
          borderRadius: '15px',
          overflow: 'hidden',
          fontFamily: '"Outfit"',
          background: 'linear-gradient(to bottom, rgba(219, 240, 239, 1), rgba(89, 188, 179, 1))',
          padding: '20px 30px',
          color: 'black'
        }}
      >
        {/* Header Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            width: '100%',
            marginBottom: '100px'
          }}
        >
          {/* Logo Section */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <img src='https://sangam-bharat-app.vercel.app/icons/abouv-icon.svg' alt='Icon' width='48' height='48' />
            <img
              src='https://sangam-bharat-app.vercel.app/icons/abouv-text.svg'
              alt='Icon'
              width='97'
              height='31'
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* Date Section */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-end',
              gap: '8px'
            }}
          >
            <img
              src='https://sangam-bharat-app.vercel.app/icons/certificate-badge.svg'
              alt='Icon'
              width='43'
              height='53'
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '4px'
              }}
            >
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  fontFamily: '"Outfit"',
                  color: 'rgba(1,45,56,1)',
                  margin: '0'
                }}
              >
                Date of Issue
              </p>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  fontFamily: '"Outfit"',
                  color: 'rgba(1,45,56,1)',
                  margin: '0'
                }}
              >
                {data.stats.issueDate}
              </p>
            </div>
          </div>
        </div>

        {/* Certificate Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px'
          }}
        >
          <p
            style={{
              fontSize: '17px',
              fontWeight: 400,
              fontFamily: '"Outfit"',
              lineHeight: '24px',
              color: 'rgba(1,104,130,1)',
              margin: '0'
            }}
          >
            This is to certify that
          </p>
          <h1
            style={{
              fontSize: '48px',
              fontWeight: 600,
              fontFamily: '"Outfit"',
              lineHeight: '1.2',
              color: 'rgba(1,45,56,1)',
              margin: '0'
            }}
          >
            {data.userInfo.firstName} {data.userInfo.lastName}
          </h1>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <p
              style={{
                fontSize: '24px',
                fontWeight: 500,
                fontFamily: '"Outfit"',
                color: 'rgba(1,45,56,1)',
                margin: '0'
              }}
            >
              has completed Stage {data.stats.stageId} assessments with
            </p>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 600,
                fontFamily: '"Outfit"',
                color: 'rgba(1,45,56,1)',
                margin: '0'
              }}
            >
              Grade {data.stats.grade}
            </h2>
          </div>
        </div>

        {/* middle section Signature */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '40px',
            textAlign: 'right'
          }}
        >
          <img
            src='https://sangam-bharat-app.vercel.app/icons/ceo-sign.svg'
            alt='Icon'
            width='70'
            height='45'
            style={{ objectFit: 'contain', marginBottom: '20px' }}
          />
          <p
            style={{
              fontSize: '16px',
              fontWeight: 500,
              fontFamily: '"Outfit"',
              color: 'rgba(1,45,56,1)',
              margin: '0'
            }}
          >
            Muneez Rehman
          </p>
          <p
            style={{
              fontSize: '14px',
              fontWeight: 400,
              fontFamily: '"Outfit"',
              color: 'rgba(1,45,56,1)',
              margin: '0'
            }}
          >
            (Founder & CEO)
          </p>
        </div>

        <img
          src='https://sangam-bharat-app.vercel.app/icons/certificate-bg-icon.svg'
          alt='bg'
          width='300'
          height='200'
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '0',

            objectFit: 'contain'
          }}
        />
        <img
          src='https://sangam-bharat-app.vercel.app/icons/certificate-bg-icon5.svg'
          alt='bg'
          width='300'
          height='200'
          style={{
            position: 'absolute',
            bottom: '-20px',
            right: '175px',

            objectFit: 'contain'
          }}
        />
        <img
          src='https://sangam-bharat-app.vercel.app/icons/certificate-bg-icons2.svg'
          alt='bg'
          width='300'
          height='200'
          style={{
            position: 'absolute',
            bottom: '134px',
            left: '0',

            objectFit: 'contain'
          }}
        />
        <img
          src='https://sangam-bharat-app.vercel.app/icons/certificate-bg-icon3.svg'
          alt='bg'
          width='190'
          height='150'
          style={{
            position: 'absolute',
            bottom: '114px',
            left: '245px',

            objectFit: 'contain'
          }}
        />
        <img
          src='https://sangam-bharat-app.vercel.app/icons/certificate-bg-icon4.svg'
          alt='bg'
          width='180'
          height='140'
          style={{
            position: 'absolute',
            bottom: '-20px',
            left: '100px',

            objectFit: 'contain'
          }}
        />
        <div
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'flex-start',
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            right: '16px',
            fontSize: '13px',
            padding: '0px 12px',
            color: '#012D38'
          }}
        >
          <span>G1 : Below 30%</span> | <span>G2 : 30 - 49%</span> | <span>G3 : 30 - 49%</span> |
          <span>G4 : 30 - 49%</span> | <span>G4 : 30 - 49%</span> | <span>G4 : 30 - 49%</span> |
          <span>G4 : 30 - 49%</span> | <span>G4 : 30 - 49%</span>
        </div>
      </div>
    ),
    {
      width: 942,
      height: 630,
      borderRadius: 15,
      fonts: [
        {
          name: 'Outfit',
          data: regularFont,
          weight: 400
        },
        {
          name: 'Outfit',
          data: mediumFont,
          weight: 500
        },
        {
          name: 'Outfit',
          data: semiBoldFont,
          weight: 600
        },
        {
          name: 'Outfit',
          data: boldFont,
          weight: 700
        }
      ]
    }
  )
}
