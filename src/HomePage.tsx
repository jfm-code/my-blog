import { Carousel } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const images = [
    { link:"https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/being-daisy%2Fdaisy-10.jpg?alt=media&token=2ccb1dba-3c0b-4bbe-8e53-f7650763bbe3"},
    { link:"https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/being-daisy%2Fdaisy-1.jpg?alt=media&token=eac6b9d0-65ed-409d-9742-f74a98ee123d"},
    { link:"https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/intern%2Fintern-1.jpg?alt=media&token=d09f8911-6835-4e72-8b83-dd5fdd27c473"},
    { link:"https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/sapa-2022%2Fsapa-1.jpg?alt=media&token=e96470ae-c122-4e68-bb79-02773bba0779"}
  ]
  return (
    <div className="text-primary">
      <div className="flex flex-col items-center">
        <p className="ml-14 mb-5 mt-[-40px] custom_sm:mt-0 custom_sm:mb-14 custom_sm:text-[225px] text-9xl font-fontAutography">j.f.m</p>
        <p className="sm:text-xl mt-5 custom_sm:mt-0">A personal blog<span className="hidden custom_nm:inline">. Created with discipline, wisdom and kindness.</span></p>
        <div className="px-5 custom_sm:px-10 custom_md:px-20 custom_xl:px-40 pt-8 custom_sm:pt-10 custom_md:py-16">
          <Carousel transition={{ duration: 1 }} className="w-full" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            {images.map(image => (
              <img src={image.link} alt="" className="h-full w-full object-cover"
            />))}
          </Carousel>
        </div>
        

      </div>
      <div className="flex flex-row px-5 custom_sm:px-10 custom_md:px-20 custom_xl:px-40 py-8 custom_md:py-10 space-x-10 custom_xl:space-x-16">
        <div className="w-full custom_md:w-2/3">
          <div className="flex flex-col items-center">
            <p className="sm:text-xl font-medium">JULY 14, 2023</p>
            <p className="text-2xl custom_nm:text-3xl custom_nm:mt-3 mb-4 custom_nm:mb-7 font-bold text-primarydark">Post title goes here</p>
            <img className="w-full" src="https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/high-school%2Fhighschool-1.jpg?alt=media&token=3c0f89db-9457-4d76-ba3b-e54b089e4ed8"></img>
            <p className="text-lg text-justify mt-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <input className="mt-5 mb-16 p-2 w-28 text-lg text-white border border-white bg-primary hover:bg-white hover:text-primary hover:border-primary" type="submit" value="Read more"></input>
          </div>
          <div className="flex flex-col items-center">
            <p className="sm:text-xl font-medium">JULY 14, 2023</p>
            <p className="text-2xl custom_nm:text-3xl custom_nm:mt-3 mb-4 custom_nm:mb-7 font-bold text-primarydark">Post title goes here</p>
            <img className="w-full" src="https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/high-school%2Fhighschool-2.jpg?alt=media&token=d7da3be7-7221-4f21-8dcb-9aef2a219073"></img>
            <p className="text-lg text-justify mt-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <input className="mt-5 mb-16 p-2 w-28 text-lg text-white border border-white bg-primary hover:bg-white hover:text-primary hover:border-primary" type="submit" value="Read more"></input>
          </div>
        </div>
        <div className="hidden custom_md:block w-1/3 flex flex-col text-lg text-justify space-y-2">
          <Link to="/about" className="group hover:bg-primarylight/70 flex flex-col items-center p-5">
            <div className="group relative w-max">
              <p className="text-3xl font-bold text-primarydark">About me</p>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
            </div>
            
            <img className="m-10 custom_md:p-5 custom_xl:p-0 custom_xl:size-96 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/being-daisy%2Fdaisy-2.jpg?alt=media&token=2c749950-6edf-4b5e-823a-ee5aee1f4db1"></img>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </Link>
          <Link to="/album" className="group hover:bg-primarylight/70 flex flex-col items-center p-5">
            <div className="group relative w-max">
              <p className="text-3xl font-bold text-primarydark">My latest album</p>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8 mb-4">
              <img className="" src="https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/being-daisy%2Fdaisy-3.jpg?alt=media&token=922c27ee-deb4-4050-90d7-1b4be6c670d1"></img>
              <img className="" src="https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/being-daisy%2Fdaisy-4.jpg?alt=media&token=b0d35860-8705-4e79-8e00-53b93d5fd157"></img>
              <img className="" src="https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/being-daisy%2Fdaisy-5.jpg?alt=media&token=06de1a81-39f5-4a7d-8c36-e83d45668912"></img>
              <img className="" src="https://firebasestorage.googleapis.com/v0/b/jfm-blog.appspot.com/o/being-daisy%2Fdaisy-6.jpg?alt=media&token=64739d60-e1cf-4541-a106-61b0812344d5"></img>
            </div>
            <p className="group-hover:text-primarydark group-hover:font-bold text-xl font-semibold">BEING DAISY</p>
            <p className="my-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </Link>
          <Link to="/video" className="group hover:bg-primarylight/70 flex flex-col items-center p-5">
            <div className="group relative w-max">
              <p className="text-3xl font-bold text-primarydark">My latest vlog</p>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-primarydark group-hover:w-3/6"></span>
            </div>
            <iframe className="pt-8 pb-4 w-full aspect-video" src="https://www.youtube.com/embed/lTSffczhgGw?si=hnRkzAW_BDyDxzIq" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>
            <p className="group-hover:text-primarydark group-hover:font-bold text-xl font-semibold">SECOND YEAR IN THE US</p>
            <p className="my-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
};
