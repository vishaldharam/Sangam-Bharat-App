import puppeteer from 'puppeteer'

export default async function handler(req, res) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  // Example numerical data to be visualized
  const data = {
    0: 137,
    1: 80,
    2: 78,
    3: 71,
    4: 13,
    5: 10,
    6: 26,
    7: 10,
    8: 0,
    9: 0,
    10: 0
  }

  // Generate the HTML content for the data
  const htmlContent = `
    <html>
      <body>
        <div style="font-family: Arial; text-align: center; padding: 20px;">
          <h1>Certificate</h1>
          <p>This certifies that</p>
          <h2>${req.query.name || 'John Doe'}</h2>
          <p>has completed the course with Grade ${req.query.grade || 'A'}</p>
          
          <h3>Performance Data:</h3>
          <table border="1" style="margin: 0 auto; text-align: center;">
            <thead>
              <tr>
                <th>Index</th>
                <th>Value</th>
              </tr>
            </thead>
           
          </table>
        </div>
      </body>
    </html>
  `

  await page.setContent(htmlContent)
  const screenshot = await page.screenshot({ type: 'png' })

  console.log('screeenshit', screenshot)

  await browser.close()

  res.setHeader('Content-Type', 'image/png')
  res.status(200).send(screenshot)
}
