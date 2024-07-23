import { useParams } from 'react-router-dom';

export const Picture = () => {
    
    const params = useParams<{ albumID: string }>();
    const { albumID } = params;

    const imageLinks: Record<string, string[]> = {
        'dalat-2021': [
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-1.JPG?alt=media&token=06767790-e40c-4c87-9d38-06618e011104',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-9.JPG?alt=media&token=c2aef680-e964-4eaa-834a-5ef3f77fc766',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-2.JPG?alt=media&token=9e915639-5166-4934-8233-67c0d51a858c',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-3.JPG?alt=media&token=8d76b5ba-1f67-4130-a73b-dfa62cc90d32',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-4.JPG?alt=media&token=6ba4148d-7c47-4714-a696-e746d46733dc',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-1.JPG?alt=media&token=06767790-e40c-4c87-9d38-06618e011104',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-9.JPG?alt=media&token=c2aef680-e964-4eaa-834a-5ef3f77fc766',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-2.JPG?alt=media&token=9e915639-5166-4934-8233-67c0d51a858c',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-3.JPG?alt=media&token=8d76b5ba-1f67-4130-a73b-dfa62cc90d32',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-4.JPG?alt=media&token=6ba4148d-7c47-4714-a696-e746d46733dc',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-1.JPG?alt=media&token=06767790-e40c-4c87-9d38-06618e011104',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-9.JPG?alt=media&token=c2aef680-e964-4eaa-834a-5ef3f77fc766',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-2.JPG?alt=media&token=9e915639-5166-4934-8233-67c0d51a858c',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-3.JPG?alt=media&token=8d76b5ba-1f67-4130-a73b-dfa62cc90d32',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-4.JPG?alt=media&token=6ba4148d-7c47-4714-a696-e746d46733dc',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-1.JPG?alt=media&token=06767790-e40c-4c87-9d38-06618e011104',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-9.JPG?alt=media&token=c2aef680-e964-4eaa-834a-5ef3f77fc766',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-2.JPG?alt=media&token=9e915639-5166-4934-8233-67c0d51a858c',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-3.JPG?alt=media&token=8d76b5ba-1f67-4130-a73b-dfa62cc90d32',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-4.JPG?alt=media&token=6ba4148d-7c47-4714-a696-e746d46733dc',
        ]
    };
    const pictures = albumID && imageLinks[albumID];

    const albumInfo: Record<string, string[]> = {
        'dalat-2021': ['DA LAT TRIP', 'Spring 2021'],
    };
    const header = albumID && albumInfo[albumID][0]
    const time = albumID && albumInfo[albumID][1]

    const remainders = [0, 1, 2, 3]

    return (
        <div className="px-40">
            <p>{header}</p>
            <p>{time}</p>
            <div className="grid grid-cols-4 gap-8 items-start">
                {remainders.map(remainder => (
                    <div className="grid gap-8">
                        {pictures && pictures.filter((_, index) => index % 4 === remainder).map((pictureLink, index) => (
                            <img key={index} className="h-auto max-w-full" src={pictureLink} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
        
    )
}