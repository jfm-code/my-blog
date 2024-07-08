import './styles/fonts.css';
import { Checkbox } from "@material-tailwind/react";

export const Post = () => {
    return (
        <div className="flex flex-col px-40 items-center text-justify text-lg text-[#7c9e83]">
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
            <div className="flex flex-row space-x-20 my-5">
                <div className="flex flex-col w-1/5">
                    <p className="text-2xl font-semibold mb-2 ml-2">TOPICS</p>
                    <div className="flex items-center ml-8">
                        <Checkbox id="check1" className="w-6 h-6 rounded-none checked:bg-[#7c9e83] border border-[#7c9e83] border-2 checked:border-none" defaultChecked />
                        <label htmlFor="check1" className="cursor-pointer">Bla bla</label>
                    </div>
                    <div className="flex items-center ml-8">
                        <Checkbox id="check1" className="w-6 h-6 rounded-none checked:bg-[#7c9e83] border border-[#7c9e83] border-2 checked:border-none" defaultChecked />
                        <label htmlFor="check1" className="cursor-pointer">Bla bla</label>
                    </div>
                    <div className="flex items-center ml-8">
                        <Checkbox id="check1" className="w-6 h-6 rounded-none checked:bg-[#7c9e83] border border-[#7c9e83] border-2 checked:border-none" defaultChecked />
                        <label htmlFor="check1" className="cursor-pointer">Bla bla</label>
                    </div>
                    <div className="flex items-center ml-8">
                        <Checkbox id="check1" className="w-6 h-6 rounded-none checked:bg-[#7c9e83] border border-[#7c9e83] border-2 checked:border-none" defaultChecked />
                        <label htmlFor="check1" className="cursor-pointer">Bla bla</label>
                    </div>
                   
                </div>
                <div className="w-5/6">
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            
            

        </div>
    )
}
