# Agnese Grison

Source for [agnegris.github.io](https://agnegris.github.io/), my academic website. The site uses HTML, CSS, and a small JavaScript file for image viewing. There is no build step.

## Preview locally

Open `index.html` in a browser. On Windows, you can run this from the repository folder in PowerShell:

```powershell
Start-Process .\index.html
```

Refresh the page after making changes. The profile photo loads from GitHub, so it needs an internet connection.

## Update the site

- Edit `index.html` for the biography, open-source tools, publications, background, links, and Outside the lab stories. Publications are grouped by research theme; copy an existing `article.publication` entry to add another paper.
- Edit `style.css` for colours, typography, and layout. If you change the main background colour, update the `theme-color` value in `index.html` too.
- Keep project images in `assets/projects/` and personal photos in `assets/extracurricular/`. When replacing an image, check its filename, alt text, width, and height in `index.html`.
- `assets/figure-viewer.js` handles the enlarged images and SCD Studio demo.
- If the website address changes, update the canonical URL in `index.html`, `robots.txt`, and `sitemap.xml`.

## Publish

In the repository's **Settings → Pages**, select **Deploy from a branch**, then choose `main` and `/ (root)`. Changes pushed to that branch will publish to [agnegris.github.io](https://agnegris.github.io/). See [GitHub's Pages instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

GitHub Free requires a public repository for Pages. Plans that support Pages for private repositories still publish the website publicly.

## Credits

- Research illustration: [Aron Cserveny / ScienceVisual](https://www.sciencevisual.at/about/), also credited beside the image.
- SCD Studio demo and screenshot: [SCD Studio](https://github.com/AgneGris/scd-studio). The [BSD 3-Clause notice](assets/projects/LICENSE.scd-studio) is included with those assets.
