const bioData = {
  image: {
    alt: "Sean Harte",
    src: 'images/bioPic.jpg'
  },
  description: `Hi! I’m a full stack engineer with a focus on client-side applications. Most recently, I’ve been maintaining and expanding an e-commerce site with over 38 million visitors and over $194 million of gross income annually.  I’m always excited to work on new projects for personal enjoyment or in order to deliver business value. `,
  contactEmail: 'seanharte@live.com',
  skills: [
    {
      label: 'Languages',
      skills: [
        'JavaScript',
        'Typescript',
        'HTML5',
        'CSS3',
        'Scss',
        'Sass'
      ]
    },
    {
      label: 'Front-end',
      skills: [
        'React',
        'Redux',
        'Angular (7,8,9)',
        'NGRX',
        'RXJS',
        'Next.JS',
        'jQuery',
        'Bootstrap',
        'Responsive Design',
        'Semantic HTML',
        'a11Y',
        'ADA complaint',
        'Storybook.JS',
        'Babel',
        'Webpack',
        'PWA',
        'OIDC'
      ]
    },
    {
      label: 'Back-end',
      skills: [
        'Node.JS',
        'Express',
        'Hapi',
        'MongoDB',
        'Server Side Rendering',
        'NoSQL',
        'RESTful APIs',
        'Passport.JS',
        'Socket.IO'
      ]
    },
    {
      label: 'Testing',
      skills: [
        'Mocha',
        'Chai',
        'Enzyme',
        'Jest',
        'Jasmine'
      ]
    }
  ]
}

const bioPageData = {
  pageName: 'Bio',
  ...bioData
}

export default bioPageData