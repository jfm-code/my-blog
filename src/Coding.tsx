import { Link } from 'react-router-dom';

export const Coding = () => {
    const tutorials = [
        { id: 'intro-mips', title: 'Introduction to MIPS' },
        { id: 'practice-mips', title: 'MIPS Practice Exercises' },
        { id: 'makefile', title: 'Introduction to Makefile' },
        { id: 'unittest', title: 'Introduction to Unit Testing' },
    ];

    const images: Record<string, string> = {
        'intro-mips': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/being-daisy%2Fdaisy-1.jpg?alt=media&token=eac6b9d0-65ed-409d-9742-f74a98ee123d',
        'practice-mips': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/being-daisy%2Fdaisy-10.jpg?alt=media&token=2ccb1dba-3c0b-4bbe-8e53-f7650763bbe3',
    };

    return (
        <div className="flex flex-col items-center px-40 text-justify text-lg text-[#7c9e83]">
            <p className="text-8xl font-fontAutography py-10">a place to learn</p>
            <p className="self-start text-3xl font-semibold my-7">Assembly Programming Language</p>
            <div className="grid grid-cols-4 gap-14 mb-10">
                {tutorials.map(tutorial => (
                    <div key={tutorial.id}>
                        <img src={images[tutorial.id]}/>
                        <div className="mt-5 mb-1 text-xl font-semibold hover:underline">
                            <Link to={`/coding/${tutorial.id}`}>{tutorial.title}</Link>
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
