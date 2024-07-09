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
            <div className="flex flex-row space-x-20 my-10">
                <div className="flex flex-col w-1/6">
                    <p className="text-2xl font-semibold mb-2 ml-2">TOPICS</p>
                    <div className="flex items-center ml-8">
                        <Checkbox id="education" className="w-6 h-6 rounded-none checked:bg-[#7c9e83] border border-[#7c9e83] border-2 checked:border-none"/>
                        <label htmlFor="education" className="cursor-pointer text-lg">Education</label>
                    </div>
                    <div className="flex items-center ml-8">
                        <Checkbox id="work" className="w-6 h-6 rounded-none checked:bg-[#7c9e83] border border-[#7c9e83] border-2 checked:border-none"/>
                        <label htmlFor="work" className="cursor-pointer">Work</label>
                    </div>
                    <div className="flex items-center ml-8">
                        <Checkbox id="friendship" className="w-6 h-6 rounded-none checked:bg-[#7c9e83] border border-[#7c9e83] border-2 checked:border-none"/>
                        <label htmlFor="friendship" className="cursor-pointer">Friendship</label>
                    </div>
                    <div className="flex items-center ml-8">
                        <Checkbox id="family" className="w-6 h-6 rounded-none checked:bg-[#7c9e83] border border-[#7c9e83] border-2 checked:border-none" />
                        <label htmlFor="family" className="cursor-pointer">Family</label>
                    </div>
                    <div className="flex items-center ml-8">
                        <Checkbox id="relationship" className="w-6 h-6 rounded-none checked:bg-[#7c9e83] border border-[#7c9e83] border-2 checked:border-none"/>
                        <label htmlFor="relationship" className="cursor-pointer">Relationship</label>
                    </div>
                    <div className="flex items-center ml-8">
                        <Checkbox id="dream" className="w-6 h-6 rounded-none checked:bg-[#7c9e83] border border-[#7c9e83] border-2 checked:border-none"/>
                        <label htmlFor="dream" className="cursor-pointer">Dream</label>
                    </div>
                    <div className="flex items-center ml-8">
                        <Checkbox id="psychology" className="w-6 h-6 rounded-none checked:bg-[#7c9e83] border border-[#7c9e83] border-2 checked:border-none"/>
                        <label htmlFor="psychology" className="cursor-pointer">Psychology</label>
                    </div>
                    <div className="flex items-center ml-8">
                        <Checkbox id="beauty" className="w-6 h-6 rounded-none checked:bg-[#7c9e83] border border-[#7c9e83] border-2 checked:border-none"/>
                        <label htmlFor="beauty" className="cursor-pointer">Beauty</label>
                    </div>
                    <div className="flex items-center ml-8">
                        <Checkbox id="personality" className="w-6 h-6 rounded-none checked:bg-[#7c9e83] border border-[#7c9e83] border-2 checked:border-none"/>
                        <label htmlFor="personality" className="cursor-pointer">Personality</label>
                    </div>
                    <div className="flex items-center ml-8">
                        <Checkbox id="justice" className="w-6 h-6 rounded-none checked:bg-[#7c9e83] border border-[#7c9e83] border-2 checked:border-none"/>
                        <label htmlFor="justice" className="cursor-pointer">Justice</label>
                    </div>
                    <div className="flex items-center ml-8">
                        <Checkbox id="mental" className="w-6 h-6 rounded-none checked:bg-[#7c9e83] border border-[#7c9e83] border-2 checked:border-none"/>
                        <label htmlFor="mental" className="cursor-pointer">Mental Health</label>
                    </div>
                    <div className="flex items-center ml-8">
                        <Checkbox id="book" className="w-6 h-6 rounded-none checked:bg-[#7c9e83] border border-[#7c9e83] border-2 checked:border-none"/>
                        <label htmlFor="book" className="cursor-pointer">Book Review</label>
                    </div>
                    <div className="flex items-center ml-8">
                        <Checkbox id="yearend" className="w-6 h-6 rounded-none checked:bg-[#7c9e83] border border-[#7c9e83] border-2 checked:border-none"/>
                        <label htmlFor="yearend" className="cursor-pointer">Year-End Review</label>
                    </div>
                </div>
                <div className="w-5/6">
                    <div className="grid grid-cols-3 gap-10">
                        <div>
                            <img src="https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/high-school%2Fhighschool-3.jpg?alt=media&token=3e861c8b-7396-4e59-8044-066e25748230"></img>
                            <p className="text-xl font-semibold mt-5 mb-2">Post title and link go here</p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div>
                            <img src="https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/high-school%2Fhighschool-1.jpg?alt=media&token=3c0f89db-9457-4d76-ba3b-e54b089e4ed8"></img>
                            <p className="text-xl font-semibold mt-5 mb-2">Post title and link go here</p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div>
                            <img src="https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/middle-school%2Fmiddle-school-1.jpg?alt=media&token=506736c5-758a-4871-8e44-4f6542fdf6a8"></img>
                            <p className="text-xl font-semibold mt-5 mb-2">Post title and link go here</p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div>
                            <img src="https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/high-school%2Fhighschool-2.jpg?alt=media&token=d7da3be7-7221-4f21-8dcb-9aef2a219073"></img>
                            <p className="text-xl font-semibold mt-5 mb-2">Post title and link go here</p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div>
                            <img src="https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/high-school%2Fhighschool-3.jpg?alt=media&token=3e861c8b-7396-4e59-8044-066e25748230"></img>
                            <p className="text-xl font-semibold mt-5 mb-2">Post title and link go here</p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div>
                            <img src="https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/high-school%2Fhighschool-3.jpg?alt=media&token=3e861c8b-7396-4e59-8044-066e25748230"></img>
                            <p className="text-xl font-semibold mt-5 mb-2">Post title and link go here</p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            

        </div>
    )
}
