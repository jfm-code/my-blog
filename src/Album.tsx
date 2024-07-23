import { Link } from 'react-router-dom';

export const Album = () => {

    const albums = [
        {
            name:'DA LAT TRIP',
            time:'Spring 2021',
            id:'dalat-2021',
            images: [
                { style:'', link:'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-1.JPG?alt=media&token=06767790-e40c-4c87-9d38-06618e011104'},
                { style:'row-span-2 h-full', link:'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-9.JPG?alt=media&token=c2aef680-e964-4eaa-834a-5ef3f77fc766'},
                { style:'', link:'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-2.JPG?alt=media&token=9e915639-5166-4934-8233-67c0d51a858c'},
                { style:'', link:'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-3.JPG?alt=media&token=8d76b5ba-1f67-4130-a73b-dfa62cc90d32'},
                { style:'', link:'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-4.JPG?alt=media&token=6ba4148d-7c47-4714-a696-e746d46733dc'}
            ]
        },
        {
            name:'LHP GRADUATION',
            time:'Summer 2022',
            id:'lhp-graduation',
            images: [
                { style:'row-span-2 col-span-2', link:'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/lhp-graduation%2Flhp-graduation-1.jpg?alt=media&token=4980f2dd-8b4a-4fb2-815c-0d544fe07faa'},
                { style:'', link:'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/lhp-graduation%2Flhp-graduation-3.jpg?alt=media&token=f5be9e8f-ac5b-403d-9952-fca1d24ae2c9'},
                { style:'row-span-2 h-full', link:'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/lhp-graduation%2Flhp-graduation-2.jpg?alt=media&token=54865edd-ada9-43ed-8b40-0e2c4565d140'},
                { style:'', link:'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/lhp-graduation%2Flhp-graduation-4.jpg?alt=media&token=b9ef9389-0d68-4a23-a6fb-7a492baea754'},
                { style:'', link:'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/lhp-graduation%2Flhp-graduation-5.jpg?alt=media&token=eca34d41-9329-41a0-a0a7-5389a2ee48ad'},
            ]
        },
        {
            name:'BEING DAISY',
            time:'Summer 2024',
            id:'being-daisy',
            images: [
                { style:'', link:'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/being-daisy%2Fdaisy-7.jpg?alt=media&token=540d7a47-bf07-4396-ac0c-d5811918d970'},
                { style:'', link:'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/being-daisy%2Fdaisy-8.jpg?alt=media&token=402709d7-5a7a-4ade-a99b-8cb9bc0749a3'},
                { style:'row-span-2', link:'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/being-daisy%2Fdaisy-9.jpg?alt=media&token=14c2ed25-6d8c-488f-ba58-15ad86e018ec'},
                { style:'', link:'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/being-daisy%2Fdaisy-6.jpg?alt=media&token=64739d60-e1cf-4541-a106-61b0812344d5'},
                { style:'', link:'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/being-daisy%2Fdaisy-4.jpg?alt=media&token=b0d35860-8705-4e79-8e00-53b93d5fd157'},
            ]
        }
    ]

    return (
        <div className="flex flex-col items-center px-5 custom_sm:px-10 custom_md:px-20 custom_xl:px-40 text-justify text-lg text-primary">
            <p className="w-full flex justify-center text-5xl custom_sm:text-6xl custom_nm:text-7xl custom_md:text-8xl font-fontAutography pb-10 custom_sm:py-10">a place to see</p>
            {albums.map(album => (
                <Link to={`/album/${album.id}`} key={album.id} className="group hover:bg-primarylight/70 hover:border hover:shadow-md p-8 w-full flex flex-col-reverse custom_lg:flex-row custom_lg:odd:flex-row-reverse space-x-14 odd:space-x-reverse mb-14 items-center">
                    <div className="custom_lg:w-3/4 grid grid-cols-1 custom_sm:grid-cols-2 custom_lg:grid-cols-3 gap-y-8 custom_sm:gap-8 items-center">
                        {album.images.map(image => (
                            <img className={image.style} src={image.link}></img>
                        ))}
                    </div>
                    <div className="custom_lg:w-1/4 flex flex-col items-center mb-5 custom_lg:mb-0">
                        <p className="group relative w-max mb-5">
                            <p className="group-hover:text-primarydark text-3xl custom_nm:text-4xl font-semibold">{album.name}</p>
                            <span className="absolute -bottom-2 left-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
                            <span className="absolute -bottom-2 right-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
                        </p>
                        <p className="text-2xl mb-5">{album.time}</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </Link>
            ))}
            
        </div>
    )
};
