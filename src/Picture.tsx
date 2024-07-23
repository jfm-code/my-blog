import { useParams } from 'react-router-dom';

export const Picture = () => {
    
    const params = useParams<{ albumID: string }>();
    const { albumID } = params;

    const imageLinks: Record<string, string[]> = {
        'dalat-2021': [
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-1.JPG?alt=media&token=06767790-e40c-4c87-9d38-06618e011104',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-2.JPG?alt=media&token=9e915639-5166-4934-8233-67c0d51a858c',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-3.JPG?alt=media&token=8d76b5ba-1f67-4130-a73b-dfa62cc90d32',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-4.JPG?alt=media&token=6ba4148d-7c47-4714-a696-e746d46733dc',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-5.JPG?alt=media&token=94b2b5be-c8db-42d9-9192-0a1a57bf8ce1',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-6.JPG?alt=media&token=9b2028e1-ce85-451a-ae86-5484435cdcc0',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-7.JPG?alt=media&token=d9b324e2-257b-4ab6-911f-09b269f34e19',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-8.JPG?alt=media&token=24b09e05-2e41-4bc8-92dd-cf909e00c63e',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-9.JPG?alt=media&token=c2aef680-e964-4eaa-834a-5ef3f77fc766',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-10.JPG?alt=media&token=b087a940-03b6-448b-b1d6-1d59dae143c4',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-11.JPG?alt=media&token=607de2a3-49b3-433c-adf3-2b3071431a7a',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-12.JPG?alt=media&token=f414dbbe-8ce6-414b-8c81-c458598fa682',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-13.JPG?alt=media&token=c4a26419-3153-4309-b300-0ef4b72abb63',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-14.JPG?alt=media&token=2e305554-9462-4d15-be0e-a65dc69ad8ea',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-15.JPG?alt=media&token=30f5c45c-fbd0-4b23-b745-0b1013996ec6',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-16.JPG?alt=media&token=25b39b0f-bb67-4f69-8b66-0407ec0f3c88',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-17.JPG?alt=media&token=dda630b5-e20d-4cdf-8a93-2bd3b381d764',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-18.JPG?alt=media&token=fe028823-6b50-4b84-a349-019891182729',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-19.JPG?alt=media&token=9b5de8fa-5597-4afe-b44a-39ea3b1e3076',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-20.JPG?alt=media&token=7f6406de-6db9-4234-aae6-4d46cd2cfdc3',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-21.JPG?alt=media&token=3e22b7b5-0caa-4e0f-9824-d0fa2c4ff645',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-22.JPG?alt=media&token=95eb3df4-ab66-4720-9333-eae79c293b48',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-23.JPG?alt=media&token=43adb65f-9141-4a3c-9e94-e87b809d1f6a',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-24.JPG?alt=media&token=c401e980-0b2c-4ff8-9c44-97e820da26b3',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-25.JPG?alt=media&token=1126b3db-71e0-49da-9c12-de3ea90a7c3e',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-26.JPG?alt=media&token=b0836b4d-f528-4ab4-9af4-a0d2f6fe019c',
            'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-27.JPG?alt=media&token=a5f866d1-9f22-46a3-96ed-80a5e5a7213c',
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
        <div data-uk-lightbox className="px-5 custom_nm:px-10 custom_md:px-20 custom_lg:px-40">
            <div className="flex flex-col items-center text-primary my-8 space-y-5">
                <p className="text-4xl custom_nm:text-5xl font-semibold">{header}</p>
                <p className="text-2xl">{time}</p>
            </div>
            <div className="grid grid-cols-1 custom_sm:grid-cols-2 custom_nm:grid-cols-3 custom_md:grid-cols-4 gap-8 items-start mb-14">
                {remainders.map(remainder => (
                    <div className="grid gap-8">
                        {pictures && pictures.filter((_, index) => index % 4 === remainder).map((pictureLink, index) => (
                            <div className="w-full relative max-w-sm mx-auto h-auto ">
                                <img key={index} className="w-full max-w-sm mx-auto h-auto relative z-0" src={pictureLink} alt="image"/>
                                <a href={pictureLink} className="absolute w-full h-full top-0 left-0 bg-black opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 "></a>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
        
    )
}