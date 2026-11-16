LOBEWOHL WEBSITE — QUICK START

This is the first, static version of your LOBEWOHL farewell gallery website.
It includes the homepage, category filters, responsive photo grid, full-screen photo viewer and embedded video section.

IMPORTANT:
- No real farewell photos/videos are included yet.
- This version does NOT include a secure admin upload dashboard.
- It does NOT upload files by itself. Add images to the assets/photos folder and list them in photos.json.
- Only publish photos/videos you have permission to share. Anyone who can access a public gallery may save or screenshot displayed images.

ADD PHOTOS:
1. Copy photos into assets/photos/
2. Open photos.json in a text editor.
3. Add entries like:
[
  {"src":"assets/photos/photo-001.jpg","title":"Friends","category":"Friends"},
  {"src":"assets/photos/photo-002.jpg","title":"Grand Entry","category":"Entry"}
]
Allowed category names: Entry, Candid, Friends, Groups, Performances, Teachers.
Use compressed JPG/WebP images for faster loading. Keep individual files reasonably small.

ADD VIDEOS:
Edit videos.json with YouTube embed links:
[
  {"title":"Farewell Aftermovie","embed":"https://www.youtube-nocookie.com/embed/YOUTUBE_VIDEO_ID"}
]
For a YouTube video, use the embed URL format above, not the normal watch URL.

PUBLISH FOR FREE:
1. Create/sign in to a GitHub account.
2. Create a new repository and upload the contents of this folder (index.html, style.css, app.js, JSON files and assets).
3. In Cloudflare, create a free account and connect the GitHub repository to Cloudflare Pages.
4. Use the default settings for a plain static HTML site: no build command; output directory is the repository root.
5. Deploy. Cloudflare will provide a public pages.dev address.

FREE-TIER / STORAGE NOTE:
Free hosting is not unlimited storage or bandwidth. Check current GitHub and Cloudflare limits before uploading all 500 photos. For a large collection, use compressed gallery images and keep originals backed up separately.

NEXT PHASE:
A secure upload dashboard needs a real backend, authentication, storage buckets and access rules. Do not add a public upload form or place admin passwords/API secret keys in these files. Configure that separately before claiming uploads are secure.
