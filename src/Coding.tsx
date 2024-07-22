import { Link } from 'react-router-dom';

export const Coding = () => {
    const tutorials = [
        { 
            name:'Assembly Programming Language',
            list: [
                { id: 'intro-mips', title: 'Introduction to MIPS', image_link:'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/code%2Fmips-intro-cover.jpg?alt=media&token=38c16676-3d95-4011-9adf-411c1c7a9643' },
                { id: 'practice-mips', title: 'MIPS Practice Exercises', image_link:'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/code%2Fpractice-mips-cover.jpg?alt=media&token=b41a7f37-ca5e-497a-ad0a-d7bb619a0063' },
                { id: 'converting-bits', title: 'Converting Bits', image_link:'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/code%2Fconvert-bits-cover.jpg?alt=media&token=e45a90d7-478f-4a42-9f4c-1ee657a5638f'}
            ]
        },
        {
            name:'C++ Programming Language',
            list: [
                { id: 'makefile', title: 'Introduction to Makefile', image_link:'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/code%2Fmakefile-cover.jpg?alt=media&token=65ec85dd-ca3e-4205-b80a-6f2da0e85b0b'},
                { id: 'unit-test', title: 'Introduction to Unit Testing', image_link:'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/code%2Funittest-cover.jpg?alt=media&token=4e7e5f69-ef8f-49ed-b5d3-6f01524d314f'},
            ]
        },
        {
            name:'C Programming Language',
            list: [
                { id: 'enum-struct', title: 'Introduction to Enum & Struct', image_link: 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/code%2Fenum-struct-cover.jpg?alt=media&token=b6bd1fe0-91f5-439a-b4cd-9b589a2fb3fd'},
                { id: 'pointer-array-file', title: 'Pointer, Array & Files', image_link: 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/code%2Fpointer-array-file-cover.jpg?alt=media&token=d66971be-4a51-4c91-9855-f44399308157'},
                { id: 'queue', title: 'Two Ways of Implementing Queue', image_link: 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/code%2Fqueue-cover.jpg?alt=media&token=d194611e-c0eb-479f-bcee-0141775f0e2b'},
                { id: 'datastructure', title: 'Basic Information of Data Structures', image_link: 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/code%2Fdatastructure-cover.jpg?alt=media&token=5c343130-a8c7-49d6-aa61-ca5f5f3aec9e'}
            ]
        }
    ];

    return (
        <div className="flex flex-col items-center px-5 custom_sm:px-10 custom_md:px-20 custom_xl:px-40 text-justify text-lg text-primary">
            <p className="w-full flex justify-center text-5xl custom_sm:text-6xl custom_nm:text-7xl custom_md:text-8xl font-fontAutography pb-10 custom_sm:py-10">a place to learn</p>
            {tutorials.map(prog_language => (
                <div key={prog_language.name}>
                    <p className="self-start text-2xl text-primarydark custom_lg:text-3xl font-semibold my-7">{prog_language.name}</p>
                    <div className="grid grid-cols-1 custom_nm:grid-cols-2 custom_md:grid-cols-3 custom_xl:grid-cols-4 gap-5 custom_md:gap-8 mb-10">
                        {prog_language.list.map(tutorial => (
                            <Link to={`/coding/${tutorial.id}`} className="group hover:bg-primarylight/70 p-2 custom_nm:p-5" key={tutorial.id}>
                                <img src={tutorial.image_link}/>
                                <div className="group relative w-max my-3 text-xl font-semibold group-hover:text-primarydark">
                                    <span>{tutorial.title}</span>
                                    <span className="absolute -bottom-0.5 left-0 w-0 transition-all h-0.5 bg-primarydark group-hover:w-full"></span>
                                </div>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}    
        </div>
    );
}
