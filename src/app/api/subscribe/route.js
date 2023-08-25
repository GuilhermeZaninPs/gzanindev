

/* export async function handler ( req, res ) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { email } =json.parse(req.body);
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    if(!email) {
        res.status(401).json({error: 'Email is required'});
        return;
    }

    const mailChimpData = {
        members: [
            {
                email_address: email,
                status: 'subscribed'
            }
        ]
    }

    try {
        const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
        const URL = `https://us21.api.mailchimp.com/3.0/lists/${audienceId}`
        const response = await fetch(URL, 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
                },
                body: JSON.stringify(mailChimpData)
            }
        );
        const data = await response.json()

        if (data.errors[0]?.error) {
            return res.status(401).json({error: data.errors[0].error})
        } else {
            res.status(200).json({success: true})
        }
    } catch (e) {
        res.status(401).json({error: 'something went wrong, please try again later.'})
    }
}
 */
export async function GET(request) {
    return new Response('Hello, Next.js!');
}



/* export async function POST ( req, res) {
    const { email } = JSON.parse(req.body);
    
    if (!email) {
        res.status(500).json({ error: 'Email is required' });
        return;
    }
    const mailChimpData = {
       members: [
          {
              email_address: email,
              status: 'subscribed'
          }
       ]
    }
    try {
       const audienceId = process.env.MAILCHIMP_AUDIENCE_ID 
       const URL = `https://us21.api.mailchimp.com/3.0/lists/${audienceId}`
       const response = await fetch(URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `auth ${process.env.MAILCHIMP_API_KEY }`,
                },
                body: JSON.stringify(mailChimpData),
            }
        );
       const data = await response.json()
       console.log(data)
       // Error handling.
       if (data.errors[0]?.error) {
            return res.status(500).json({ error: data.errors[0].error });
        } else {
            res.status(200).json({ success: true});
        }
   } catch (e) {
       res.status(500).json({error: 'Something went wrong, please try again later.'})
   }
} */


