/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        { protocol: 'https', hostname: 'ca-times.brightspotcdn.com' },
        { protocol: 'https', hostname: 'cdn.pixabay.com' },
        { protocol: 'https', hostname: 'cdn.i-scmp.com' },
        { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com' },
        { protocol: 'https', hostname: 'people.com' },
        { protocol: 'https', hostname: 'i.ebayimg.com' },
        { protocol: 'https', hostname: 'i.guim.co.uk' },
        { protocol: 'https', hostname: 'imgcdn.stablediffusionweb.com' },
        { protocol: 'https', hostname: 'www.instyle.com' },
        { protocol: 'https', hostname: 'images.footballfanatics.com' },
        { protocol: 'https', hostname: 'c4.wallpaperflare.com' },
        { protocol: 'https', hostname: 'www.parismatch.com' },
        { protocol: 'https', hostname: 'i.scdn.co' },
        { protocol: 'https', hostname: 'tr.web.img4.acsta.net' },
        { protocol: 'https', hostname: 'hips.hearstapps.com' },
      ],
    },
  };
  
  export default nextConfig;
  