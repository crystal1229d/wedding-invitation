// filename = wedding_01
// format = jpg | webp
// option = c_fill,w_400

//res.cloudinary.com/dsi2i93f2/image/upload/v1707725689/wedding-invitation/jpg/wedding_09.jpg
//res.cloudinary.com/dsi2i93f2/image/upload/w_240,h_240,c_fill,q_auto/v1707725689/wedding-invitation/jpg/wedding_09.jpg

function generateImageUrl({
  filename,
  format,
  option = 'q_auto,c_fill',
}: {
  filename: string
  format: 'jpg' | 'webp'
  option?: string
}) {
  return `https://res.cloudinary.com/dsi2i93f2/image/upload/${option}/v1707725689/wedding-invitation/${format}/${filename}.${format}`
}

export default generateImageUrl
