import { Link } from 'react-router-dom';

export const Coding = () => {
    const assembly_tutorials = [
        { id: 'intro-mips', title: 'Introduction to MIPS' },
        { id: 'practice-mips', title: 'MIPS Practice Exercises' },
        { id: 'converting-bits', title: 'Converting Bits'}
    ];

    const assembly_images: Record<string, string> = {
        'intro-mips': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/code%2Fmips-intro-cover.jpg?alt=media&token=38c16676-3d95-4011-9adf-411c1c7a9643',
        'practice-mips': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/code%2Fpractice-mips-cover.jpg?alt=media&token=b41a7f37-ca5e-497a-ad0a-d7bb619a0063',
        'converting-bits': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/code%2Fconvert-bits-cover.jpg?alt=media&token=e45a90d7-478f-4a42-9f4c-1ee657a5638f'
    };

    const cplusplus_tutorials = [
        { id: 'makefile', title: 'Introduction to Makefile' },
        { id: 'unit-test', title: 'Introduction to Unit Testing' },
    ];

    const cplusplus_images: Record<string, string> = {
        'makefile': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/code%2Fmakefile-cover.jpg?alt=media&token=65ec85dd-ca3e-4205-b80a-6f2da0e85b0b',
        'unit-test': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/code%2Funittest-cover.jpg?alt=media&token=4e7e5f69-ef8f-49ed-b5d3-6f01524d314f'
    };

    const c_tutorials = [
        { id: 'enum-struct', title: 'Introduction to Enum & Struct' },
        { id: 'pointer-array-file', title: 'Pointer, Array & Files'},
        { id: 'queue', title: 'Two Ways of Implementing Queue'},
        { id: 'datastructure', title: 'Basic Information of Data Structures'}
    ];

    const c_images: Record<string, string> = {
        'enum-struct': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/code%2Fenum-struct-cover.jpg?alt=media&token=b6bd1fe0-91f5-439a-b4cd-9b589a2fb3fd',
        'pointer-array-file': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/code%2Fpointer-array-file-cover.jpg?alt=media&token=d66971be-4a51-4c91-9855-f44399308157',
        'queue':'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/code%2Fqueue-cover.jpg?alt=media&token=d194611e-c0eb-479f-bcee-0141775f0e2b',
        'datastructure': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/code%2Fdatastructure-cover.jpg?alt=media&token=5c343130-a8c7-49d6-aa61-ca5f5f3aec9e',
    };

    return (
        <div className="flex flex-col items-center px-40 text-justify text-lg text-primary">
            <p className="text-8xl font-fontAutography py-10">a place to learn</p>
            <p className="self-start text-3xl font-semibold my-7">Assembly Programming Language</p>
            <div className="grid grid-cols-4 gap-14 mb-10">
                {assembly_tutorials.map(tutorial => (
                    <div key={tutorial.id}>
                        <img className="bg-red-100" src={assembly_images[tutorial.id]}/>
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
            <p className="self-start text-3xl font-semibold my-7">C Programming Language</p>
            <div className="grid grid-cols-4 gap-14 mb-10">
                {c_tutorials.map(tutorial => (
                    <div key={tutorial.id}>
                        <img src={c_images[tutorial.id]}/>
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
