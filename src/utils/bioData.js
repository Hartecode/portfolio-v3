const bioData = {
  image: {
    alt: "Sean Harte",
    src: 'images/bioPic.jpg'
  },
  description: `I am a client side focused full stack developer.  I am currently working with the MERN stack. When I was younger I enjoyed building things with legos. I would sometimes follow the directions in the box but I had the most fun thinking outside the box to create unique pieces.  Now that I am older I have replaced my lego blocks for blocks of code.  By coding I can create anything my imagination can come up with.`,
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