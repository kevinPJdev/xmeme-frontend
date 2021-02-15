export default async function createMeme(data) {
  const response = await fetch('https://xmeme-core.herokuapp.com/memes', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(data)
  })
  return await response.json();
} 
