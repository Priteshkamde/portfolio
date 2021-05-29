import gif1 from '../assets/projectimages/cafe_api_walk_through.gif';
import gif2 from '../assets/projectimages/nasa-stellar-walk-th.gif';

const projectdata = {
    projects : [
        {
            id : '1',
            name : 'Cafe App',
            imageLink : gif1,
            details : [
                'A Full Stack Application for a Cafe • Place and Edit Orders though the catalogue • Read Corresponding Reviews • Print Invoices', 
                'SpringBoot ~ Kotlin',
                'GraphQL ~ Apollo',
                'React JS',
                'React Bootstrap', 
                ],
            gitHubLink : 'https://github.com/Priteshkamde/the-cafe',
        },
        {
            id : '2',
            name : 'Nasa Stellar',
            imageLink : gif2,
            details : [
                'A React App • APOD ~ Astronomy Picture of the Day', 
                'NASA API',
                'React JS',
                'React Bootstrap', 
                ],
                gitHubLink : 'https://github.com/Priteshkamde/stellar-nasa-react-app',
        },
    ],
};

export default projectdata;
