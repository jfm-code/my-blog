import { useParams } from 'react-router-dom';

export const Tutorial = () => {
    const params = useParams<{ tutorialID: string }>();
    const { tutorialID } = params;

    const htmlLinks: Record<string, string> = {
        'intro-mips': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/htmls%2Fassembly-mips.html?alt=media&token=b9e17f1d-aea5-45ee-997d-9f0228c497b2',
        'practice-mips': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/htmls%2Fmips-exercises.html?alt=media&token=fdb9f712-6a99-489e-b1d3-8ef308f7bf06',
        'makefile': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/htmls%2Fmakefile.html?alt=media&token=c0ae386e-a0b4-45ec-b3ed-efa652a1e4f5',
        'unit-test': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/htmls%2Funit-test.html?alt=media&token=de77daaf-19aa-4870-a828-ee77bfe27301',
        'converting-bits': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/pdfs%2FConverting_Bits.pdf?alt=media&token=6a0ce550-d9ac-4b80-9ada-04c623c12c88',
        'enum-struct': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/htmls%2Fenum-struct.html?alt=media&token=5e2722b4-9679-43c5-821d-0fce8787eaea',
        'pointer-array-file': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/htmls%2Fpointer-array-file.html?alt=media&token=18d39bdd-69c4-4627-9b18-d7b045cca432',
        'queue': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/htmls%2Fqueue.html?alt=media&token=6479ebc5-910d-4387-92ba-4cbcf0def2a8',
        'datastructure': 'https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/htmls%2Fdatastructure.html?alt=media&token=8bf56fa0-1340-462d-8cf3-339b593005d0'
    };
    const src = tutorialID && htmlLinks[tutorialID]; 

    return (
        <iframe className="px-40 py-10" src={src} width="100%" height="800"></iframe>
    );
}
