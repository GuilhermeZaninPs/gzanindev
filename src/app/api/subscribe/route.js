/* 


export async function POST ( req, res) {
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
       const URL = `https://us21.api.mailchimp.com/3.0/lists/${audienceId}/members`
       const response = await fetch(URL,
            {
                body: JSON.stringify(mailChimpData),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `auth ${process.env.MAILCHIMP_API_KEY }`,
                },
                method: 'POST',
            }
        );
       const data = await response.json()
       return new Response(JSON.stringify(data))
    } catch (e) {
        res.status(500).json({error: 'Something went wrong, please try again later.'})
    }
}


 */