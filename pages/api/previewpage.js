export default async (req, res) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  console.log(req.url);
  if (!req.query.pid) {
    return res.status(400).json({ message: "here", body: req.body });
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  const page = await fetch(
    "https://headless.afigueroa.xyz/api/collections/get/Pages?token=account-eceb5fb49df2102a005a7b28fa1449",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        filter: { _id: req.pid },
      }),
    }
  );

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!page) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  const pagejson = await page.json();
  console.log(pagejson);

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.redirect("/pages/");
  res.end("Preview mode enabled");
};
