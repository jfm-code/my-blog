import './styles/fonts.css';

export const Post = () => {
    return (
        <div className="flex flex-col px-40 items-center text-justify text-lg">
            <p className="text-8xl font-fontAutography py-10">a place to write</p>
            <div className="flex flex-row space-x-16">
                <img className="w-[600px] h-full" src="https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/dalat-2021%2Fdalat-2021-1.JPG?alt=media&token=06767790-e40c-4c87-9d38-06618e011104"></img>
                <div className="flex flex-col">
                    <p className="text-2xl font-medium">Post title and link goes here</p>
                    <p className="my-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <input className="mt-5 mb-16 p-2 w-28 text-lg text-white border border-white bg-[#7c9e83] hover:bg-white hover:text-[#7c9e83] hover:border-[#7c9e83]" type="submit" value="Read more"></input>
                </div>
            </div>
            <div className="flex items-center mb-4">
                <input id="default-checkbox" type="checkbox" className="w-7 h-7 text-[#7c9e83] border border-[#7c9e83]  bg-[#7c9e83]"/>
                <label htmlFor="default-checkbox" className="ms-2 text-[#7c9e83] dark:text-gray-300">
                    Default checkbox
                </label>
            </div>

        </div>
    )
}
