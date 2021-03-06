const projectData = [
    {
        name: 'Trailer Bug',
        image: {
            src: './images/trailer-bug.png',
            alt: 'trailer bug'
        },
        github: 'https://github.com/Hartecode/trailer-bug',
        website: 'https://trailerbug.netlify.com/',
        skills: ['Angular', 'Angular Material', 'Typescript', 'RXJS', 'SCSS', 'Storybook.JS', 'Jasmine', 'Husky', 'PWA', 'Webpack', 'Mobile First Design'],
        description: 'Trailer Bug is a fun app to allow users to search or discover movies or tv show trailers to watch. This is a great app for anyone who loves watching trailers more then the actual movie or show.',
        yearDeveloped: 2020
    },
    {
        name: 'Panda Ipsum',
        image: {
            src: './images/panda-ipsum.png',
            alt: 'panda ipsum'
        },
        github: 'https://github.com/Hartecode/panda-ipsum',
        website: 'https://www.pandaipsum.com/',
        skills: ['ES6', 'Next.JS', 'React', 'TypeScript', 'Styled-JSX', 'Google Analytics', 'Zeit'],
        description: 'Panda Ipsum is a fun site made to generate random Lorem Ipsum for panda lovers. Panda Ipsum is great for placeholder text or for fun reads. This site uses a markov chain to randomly generate different blocks of text.',
        yearDeveloped: 2019
    },
    {
        name: 'CollaBoard',
        image: {
            src: './images/collaboard.png',
            alt: 'collaboard'
        },
        github: 'https://github.com/Hartecode/collab-board',
        website: '',
        skills: ['ES6', 'React', 'Redux', 'Express', 'Node.JS', 'MongoDB'],
        description: 'CollaBoard is where a user can post a project they are seeking collaboration on and also search for a project where they can be a co-collaborator. The user can deny or approve any requests they receive. The user can also view their owned and collab projects.',
        yearDeveloped: 2018
    },
    {
        name: 'Baby Steps',
        image: {
            src: './images/babysteps.png',
            alt: 'baby-steps'
        },
        github: 'https://github.com/Hartecode/baby-steps',
        website: '',
        skills: ['jQuery', 'AJAX', 'Express', 'Node.JS', 'MongoDB'],
        description: 'Babies experience so much exciting growth very quickly. Baby Steps allows the user to log these different milestones. Users can log all of the special moments each of their children has.',
        yearDeveloped: 2018
    },
    {
        name: 'Crypto Movers',
        image: {
            src: './images/cryptomovers.png',
            alt: 'cryptomovers'
        },
        github: 'https://github.com/Hartecode/cryptomovers',
        website: '',
        skills: ['JavaScript','jQuery', 'AJAX'],
        description: 'This app ranks 50 cryptocurrencies by percentage change. The user can click on a currency or type the name of a cryptocurrency in the search bar to obtain the symbol, current price, percentage change, market cap, volume, and open price in the past 24 hours. The user can also click on the articles on the right on desktop screens or on the button on mobile screens for the latest in crypto news.',
        yearDeveloped: 2018
    }
]

const projectPageData = {
    pageName: 'Projects',
    projects: projectData
}

export default projectPageData