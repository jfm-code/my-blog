import { useParams } from 'react-router-dom';

export const Tutorial = () => {
    const { tutorialId } = useParams<{ tutorialId: string }>();

    const htmlFiles: Record<string, string> = {
        'intro-mips': '/intro-mips.html',
        'practice-mips': '/practice-mips.html',
        // Add more mappings as needed
    };

    const src = tutorialId && htmlFiles[tutorialId];

    return (
        <iframe src={src} width="100%" height="700"></iframe>
    );
}
