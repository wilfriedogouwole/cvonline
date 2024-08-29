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
  hostname: "modele-cv.com",
  pathname: "**",  

},

{
  protocol: "https",
  hostname: "cdn-ilanoin.nitrocdn.com",
  pathname: "**",  

},

{
  protocol: "https",
  hostname: "derrickogouwole.fr",
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
