import { Link } from 'react-router-dom';

export const Coding = () => {
    const assembly_tutorials = [
        { id: 'intro-mips', title: 'Introduction to MIPS' },
        { id: 'practice-mips', title: 'MIPS Practice Exercises' },
        { id: 'converting-bits', title: 'Converting Bits'}
    ];

    const assembly_images: Record<string, string> = {
        'intro-mips': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/code%2Fmips-cover-1.jpg?alt=media&token=944442ef-08c4-4a38-956a-62fdf47bed6b',
        'practice-mips': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/code%2Fmips-cover-2.jpg?alt=media&token=c4a3ecd9-f992-4804-bdf9-560c47a7c3c7',
        'converting-bits': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/code%2Fmips-cover-2.jpg?alt=media&token=c4a3ecd9-f992-4804-bdf9-560c47a7c3c7'
    };

    const cplusplus_tutorials = [
        { id: 'makefile', title: 'Introduction to Makefile' },
        { id: 'unit-test', title: 'Introduction to Unit Testing' },
    ];

    const cplusplus_images: Record<string, string> = {
        'makefile': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/code%2Fmakefile-cover.jpg?alt=media&token=68fa978c-8adf-4242-bf62-354499162373',
        'unit-test': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/code%2Funittest-cover.jpg?alt=media&token=369d675a-3801-4a9d-ac49-62e98e966a8b'
    };

    return (
        <div className="flex flex-col items-center px-40 text-justify text-lg text-[#7c9e83]">
            <p className="text-8xl font-fontAutography py-10">a place to learn</p>
            <p className="self-start text-3xl font-semibold my-7">Assembly Programming Language</p>
            <div className="grid grid-cols-4 gap-14 mb-10">
                {assembly_tutorials.map(tutorial => (
                    <div key={tutorial.id}>
                        <img src={assembly_images[tutorial.id]}/>
                        <div className="mt-5 mb-1 text-xl font-semibold hover:underline">
                            <Link to={`/coding/${tutorial.id}`}>{tutorial.title}</Link>
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                ))}
            </div>
            <p className="self-start text-3xl font-semibold my-7">C++ Programming Language</p>
            <div className="grid grid-cols-4 gap-14 mb-10">
                {cplusplus_tutorials.map(tutorial => (
                    <div key={tutorial.id}>
                        <img src={cplusplus_images[tutorial.id]}/>
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
