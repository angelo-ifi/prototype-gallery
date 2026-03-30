export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { prototype, name, pay, easy, recommend, keep, thoughts, date } = req.body;

  const response = await fetch('https://api.airtable.com/v0/appJR8Daa5wKvrvM8/Responses', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.AIRTABLE_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      records: [{
        fields: {
          Prototype: prototype || '',
          Name:      name      || 'Anonymous',
          Pay:       pay       || '',
          Easy:      easy      || '',
          Recommend: recommend || '',
          Keep:      keep      || '',
          Thoughts:  thoughts  || '',
          Date:      date      || ''
        }
      }]
    })
  });

  const data = await response.json();
  res.status(response.ok ? 200 : 500).json(data);
}
