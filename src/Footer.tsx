export const Footer = () => {

    const content = [
        {
            header:'SECTIONS',
            content_list: [
                { name:'About me'},
                { name:'Posts'},
                { name:'Album'},
                { name:'Vlogs'},
                { name:'Projects'}
            ]
        },
        {
            header:'TOPICS',
            content_list: [
                { name:'Education'},
                { name:'Work'},
                { name:'Friendship'},
                { name:'Family'},
                { name:'Mental Health'}
            ]
        },
        {
            header:'ALBUM',
            content_list: [
                { name:'Nha Trang 2024'},
                { name:'Being Daisy'},
                { name:'LHP Graduation'},
                { name:'Phan Thiet 2022'},
                { name:'Da Lat 2021'}
            ]
        }
    ]

    return (
        <div className="flex flex-row justify-around bg-primary text-lg custom_sm:text-xl text-primary px-5 custom_md:px-20 custom_xl:px-40">
            {content.map(section => (
                <div className="flex flex-col my-8 custom_lg:my-14 space-y-3 hidden custom_nm:block">
                    <p className="text-white font-bold mb-2">{section.header}</p>
                    {section.content_list.map(line => (
                        <p className="text-white hover:underline">{line.name}</p>
                    ))}
                </div>
            ))}
            <form className="pl-3 custom_sm:pl-0 my-8 custom_lg:my-14 space-y-8">
                <p className="text-white font-bold">SUBSCRIBE FOR EMAILS FROM JFM BLOG</p>
                <div className="space-y-1">
                    <p className="text-white">Full name</p>
                    <input className="px-3 py-1 text-white w-72 custom_sm:w-80 bg-primary border border-white border-0 border-b outline-none focus:text-primary focus:bg-white focus:shadow-lg"></input>
                </div>
                <div className="space-y-1">
                    <p className="text-white">Email</p>
                    <input className="px-3 py-1 text-white w-72 custom_sm:w-80 bg-primary border border-white border-0 border-b outline-none focus:text-primary focus:bg-white focus:shadow-lg"></input>
                </div>
                <input className="mt-10 p-2 w-24 text-lg text-white border border-white bg-primary hover:bg-white hover:text-primary" type="submit" value="Sign Up"></input>
            </form>
        </div>
    )
};
