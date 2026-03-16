import { Typography } from "@mui/material";
import React from "react";

const badges = [
  {
    alt: "React",
    href: "https://reactjs.org",
    src: "https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white",
  },
  {
    alt: "Next.js",
    href: "https://nextjs.org",
    src: "https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white",
  },
  {
    alt: "TypeScript",
    href: "https://www.typescriptlang.org",
    src: "https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white",
  },
  {
    alt: "Redux",
    href: "https://redux.js.org",
    src: "https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white",
  },
  {
    alt: "Cypress",
    href: "https://www.cypress.io",
    src: "https://img.shields.io/badge/-Cypress-69D3A7?style=flat-square&logo=cypress&logoColor=white",
  },
  {
    alt: "Jest",
    href: "https://jestjs.io",
    src: "https://img.shields.io/badge/-Jest-C21325?style=flat-square&logo=jest&logoColor=white",
  },
  {
    alt: "GitHub Copilot",
    href: "https://github.com/features/copilot",
    src: "https://img.shields.io/badge/-Github%20Copilot-000000?style=flat-square&logo=githubcopilot&logoColor=white",
  },
  {
    alt: "MUI 5",
    href: "https://mui.com",
    src: "https://img.shields.io/badge/-MUI%205-007FFF?style=flat-square&logo=mui&logoColor=white",
  },
  {
    alt: "Sass",
    href: "https://sass-lang.com",
    src: "https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=white",
  },
  {
    alt: "Styled Components",
    href: "https://styled-components.com",
    src: "https://img.shields.io/badge/-Styled_Components-db7092?style=flat-square&logo=styled-components&logoColor=white",
  },
  {
    alt: "SonarLint",
    href: "https://www.sonarsource.com/products/sonarlint",
    src: "https://img.shields.io/badge/-SonarLint-CB2029?style=flat-square&logo=sonarlint&logoColor=white",
  },
  {
    alt: "Vite",
    href: "https://vitejs.dev",
    src: "https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white",
  },
  {
    alt: "Webpack",
    href: "https://webpack.js.org",
    src: "https://img.shields.io/badge/-Webpack-8DD6F9?style=flat-square&logo=webpack&logoColor=white",
  },
  {
    alt: "Prettier",
    href: "https://prettier.io",
    src: "https://img.shields.io/badge/-Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white",
  },
  {
    alt: "AWS Amplify",
    href: "https://aws.amazon.com/amplify",
    src: "https://img.shields.io/badge/-AWS%20Amplify-FF9900?style=flat-square&logo=awsamplify&logoColor=white",
  },
  {
    alt: "Amazon S3",
    href: "https://aws.amazon.com/s3",
    src: "https://img.shields.io/badge/-Amazon%20S3-569A31?style=flat-square&logo=amazons3&logoColor=white",
  },
  {
    alt: "Amazon EC2",
    href: "https://aws.amazon.com/ec2",
    src: "https://img.shields.io/badge/-Amazon%20EC2-8C4FFF?style=flat-square&logo=amazonec2&logoColor=white",
  },
  {
    alt: "Atlassian",
    href: "https://www.atlassian.com",
    src: "https://img.shields.io/badge/-Atlassian-0052CC?style=flat-square&logo=atlassian&logoColor=white",
  },
  {
    alt: "Docker",
    href: "https://www.docker.com",
    src: "https://img.shields.io/badge/-Docker-46a2f1?style=flat-square&logo=docker&logoColor=white",
  },
  {
    alt: "Git",
    href: "https://git-scm.com",
    src: "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white",
  },
  {
    alt: "NPM",
    href: "https://www.npmjs.com",
    src: "https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white",
  },
  {
    alt: "NVM",
    href: "https://github.com/nvm-sh/nvm",
    src: "https://img.shields.io/badge/-NVM-F4DD4B?style=flat-square&logo=nvm&logoColor=000000",
  },
  {
    alt: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    src: "https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white",
  },
  {
    alt: "Brave Browser",
    href: "https://brave.com",
    src: "https://img.shields.io/badge/-Brave_Browser-FB542B?style=flat-square&logo=brave&logoColor=white",
  },
  {
    alt: "Strapi",
    href: "https://strapi.io",
    src: "https://img.shields.io/badge/-Strapi-4945ff?style=flat-square&logo=strapi&logoColor=white",
  },
  {
    alt: "Google Web Designer",
    href: "https://webdesigner.withgoogle.com",
    src: "https://img.shields.io/badge/-Google_Web_Designer-4285F4?style=flat-square&logo=google-web-designer&logoColor=white",
  },
  {
    alt: "Adobe Photoshop",
    href: "https://www.adobe.com/products/photoshop.html",
    src: "https://img.shields.io/badge/-Adobe%20Photoshop-31A8FF?style=flat-square&logo=adobephotoshop&logoColor=white",
  },
  {
    alt: "Adobe Illustrator",
    href: "https://www.adobe.com/products/illustrator.html",
    src: "https://img.shields.io/badge/-Adobe%20Illustrator-FF9A00?style=flat-square&logo=adobeillustrator&logoColor=white",
  },
  {
    alt: "Figma",
    href: "https://www.figma.com",
    src: "https://img.shields.io/badge/-Figma-F24E1E?style=flat-square&logo=figma&logoColor=white",
  },
  {
    alt: "Django",
    href: "https://www.djangoproject.com",
    src: "https://img.shields.io/badge/-Django-092E20?style=flat-square&logo=django&logoColor=white",
  },
  {
    alt: "Netlify",
    href: "https://www.netlify.com",
    src: "https://img.shields.io/badge/-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white",
  },
  {
    alt: "Vercel",
    href: "https://vercel.com",
    src: "https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white",
  },
  {
    alt: "Open AI",
    href: "https://openai.com",
    src: "https://img.shields.io/badge/-Open%20AI-412991?style=flat-square&logo=openai&logoColor=white",
  },
  {
    alt: "Sparkar AR",
    href: "https://sparkar.facebook.com",
    src: "https://img.shields.io/badge/-Sparkar%20AR-FF5C83?style=flat-square&logo=sparkar&logoColor=white",
  },
  {
    alt: "Swagger",
    href: "https://swagger.io",
    src: "https://img.shields.io/badge/-Swagger-85EA2D?style=flat-square&logo=swagger&logoColor=white",
  },
];

const TechStack = () => {
  return (
    <div>
      <Typography sx={{ "& a": { margin: "0 2px" } }}>
        {badges.map(({ alt, href, src }) => (
          <a
            key={alt}
            target="_blank"
            rel="noopener noreferrer nofollow"
            href={href}
          >
            <img alt={alt} src={src} />
          </a>
        ))}
      </Typography>
    </div>
  );
};

export default TechStack;
