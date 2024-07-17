import './styles/fonts.css';

export const AboutMe = () => {
    return (
        <div className="flex flex-col items-center px-5 custom_sm:px-10 custom_md:px-20 custom_xl:px-40 text-justify text-lg text-primary">
            <p className="w-full flex justify-center text-5xl custom_sm:text-6xl custom_nm:text-7xl custom_md:text-8xl font-fontAutography py-10">a place to know</p>
            <img className="size-64 custom_sm:size-80 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/being-daisy%2Fdaisy-2.jpg?alt=media&token=2c749950-6edf-4b5e-823a-ee5aee1f4db1"></img>
            <p className="py-10 px-0 custom_sm:px-2 custom_md:px-50 custom_xl:px-60">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p className="self-start text-2xl custom_nm:text-3xl font-bold text-primarydark">How this blog was born</p>
            <div className="w-full flex flex-col-reverse custom_lg:flex-row space-x-0 custom_lg:space-x-10 custom_xl:space-x-14 items-center">
                <p className="py-10 custom_lg:w-3/4 px-0 custom_xl:px-14">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    <br></br>
                    <br></br>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="custom_lg:w-1/4 mt-10 custom_lg:mt-0">
                    <img className="size-64 custom_sm:size-80 custom_lg:size-auto rounded-full" src="https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/others%2Foldblogprofilepic.jpg?alt=media&token=2f0e297f-d8a1-41f3-8abf-a42348a88af7"></img>
                </div>
            </div>
            <p className="self-start text-3xl font-bold text-primarydark mb-8">My life in a nutshell</p>
            <div className="w-full px-0 custom_lg:px-20 pt-5 pb-10 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-primary before:translate-x-[-5px] md:before:mx-auto md:before:translate-x-0">
                
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-white bg-primary group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                        <div className="flex justify-center mb-2 font-bold italic text-xl">2019 - 2020</div>
                        <div className="flex font-bold text-left text-primarydark text-xl">Valedictorian, Science & Engineering Competition</div>
                        <div className="text-left">
                            - Valedictorian of a city-level French competition.
                            <br></br>
                            - Third prize of school of Science & Engineering Fair.
                            <br></br>
                            - Vice-lead of Program at a LGBTIQ+ project.
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-white bg-primary group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                        <div className="flex justify-center mb-2 font-bold italic text-xl">2021</div>
                        <div className="font-bold text-left text-primarydark text-xl">Coding, Club & Community project participation</div>
                        <div className="text-left">
                            - Participated in SheCodes Virtual Hackathon.
                            <br></br>
                            - Vice-President at a French Club at school.
                            <br></br>
                            - Head of Graphic Design at EmPOWER project.
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-white bg-primary group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                        <div className="flex justify-center mb-2 font-bold italic text-xl">2022</div>
                        <div className="font-bold text-left text-primarydark text-xl">Being tutor, Highschool graduation & College in the US</div>
                        <div className="text-left">
                            - Started being a tutor 1-1, teaching French, English, Maths, Physics.
                            <br></br>
                            - Graduated from Le Hong Phong High School For The Gifted, class of 2022.
                            <br></br>
                            - Began my freshman year at University of Massachusetts Lowell.
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-white bg-primary group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                        <div className="flex justify-center mb-2 font-bold italic text-xl">2023</div>
                        <div className="font-bold text-left text-primarydark text-xl">12 books, Gym & Part-time job in the US</div>
                        <div className="text-left">
                            - Finished 12 books in a year for the first time.
                            <br></br>
                            - Started working out seriously and pay attention to my health.
                            <br></br>
                            - Got a part-time job as a grader for two professors at UMass Lowell.
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-white bg-primary group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                        <div className="flex justify-center mb-2 font-bold italic text-xl">2024</div>
                        <div className="font-bold text-left text-primarydark text-xl">Have a balance lifestyle & First internship</div>
                        <div className="text-left">
                            - Quit tutoring job after almost 3 years to start my first internship.
                            <br></br>
                            - Built a lifestyle that I have been dreaming about.
                            <br></br>
                            - Learned to control anger and ego better when communicating with people.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
