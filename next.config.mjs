/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
  
remotePatterns: [
{
  protocol: "https",
  hostname: "img.clerk.com",
  pathname: "**",  

},

{
  protocol: "https",
  hostname: "mail.google.com",
  pathname: "**",  

},

{
  protocol: "https",
  hostname: "mail.google.com",
  pathname: "**",  

},




]

},
};
export default nextConfig;
