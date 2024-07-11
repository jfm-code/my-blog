import { useParams } from 'react-router-dom';

export const Tutorial = () => {
    const params = useParams<{ tutorialID: string }>();

    const { tutorialID } = params;
    const src = tutorialID ? `/${tutorialID}.html` : '';

    return (
        <iframe src={src} width="100%" height="700"></iframe>
    );
}
