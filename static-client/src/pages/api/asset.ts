
// This is for font assets as they are throwing CORS error
export default async function handler(req:any, res:any) {
    const font_url = req.query.font_url;
    const assetUrl = font_url; // replace with your actual asset URL

    const response = await fetch(assetUrl, {
        mode: 'cors', // or other mode you want to set
    });

    if (!response.ok) {
        res.status(response.status).end();
        return;
    }

    // return the response body

    const buffer = await response.arrayBuffer();
    const headers = response.headers; 
    const contentType = headers.get('content-type');
    res.setHeader('Content-Type', contentType);
    return res.status(200).send(Buffer.from(buffer));
}
