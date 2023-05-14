import img1 from "../../../../assets/images/banner/1.jpg";
import img2 from "../../../../assets/images/banner/2.jpg";
import img3 from "../../../../assets/images/banner/3.jpg";
import img4 from "../../../../assets/images/banner/4.jpg";
//  import img5 from '../../../../assets/images/banner/5.jpg'
//  import img6 from '../../../../assets/images/banner/6.jpg'

const Banner = () => {
  return (
    <div className="carousel w-full  h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-lg" />
  
{/* Headline */}
        <div className="absolute
        h-full top-0 left-0 flex items-center
          right-5 bottom-0 bg-gradient-to-r from-[#151515]
           to-[rgba(21,21,21,0)]"
        >
          <div className="text-white left-3  space-y-7 pl-14  w-1/2">
            <h2 className="text-6xl font-bold">Affordable price For Car Servicing</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              magni iste et vero quidem? Quibusdam quisquam assumenda totam
              vitae nostrum?
            </p>
            <button className="btn btn-primary mr-5">Dicover More</button>
            <button className="btn btn-primary btn-outline">
              Letest Projects
            </button>
          </div>
        </div>




        <div className="absolute
         flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>


      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        {/* headline */}
        
        <div className="absolute
        h-full top-0 left-0 flex items-center
          right-5 bottom-0 bg-gradient-to-r from-[#151515]
           to-[rgba(21,21,21,0)]"
        >
          <div className="text-white left-3  space-y-7 pl-14  w-1/2">
            <h2 className="text-6xl font-bold">Affordable price For Car Servicing</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              magni iste et vero quidem? Quibusdam quisquam assumenda totam
              vitae nostrum?
            </p>
            <button className="btn btn-primary mr-5">Dicover More</button>
            <button className="btn btn-primary btn-outline">
              Letest Projects
            </button>
          </div>
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />

{/* headline  */}


<div className="absolute
        h-full top-0 left-0 flex items-center
          right-5 bottom-0 bg-gradient-to-r from-[#151515]
           to-[rgba(21,21,21,0)]"
        >
          <div className="text-white left-3  space-y-7 pl-14  w-1/2">
            <h2 className="text-6xl font-bold">Affordable price For Car Servicing</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              magni iste et vero quidem? Quibusdam quisquam assumenda totam
              vitae nostrum?
            </p>
            <button className="btn btn-primary mr-5">Dicover More</button>
            <button className="btn btn-primary btn-outline">
              Letest Projects
            </button>
          </div>
        </div>



        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        {/* Headline  */}
        
        <div className="absolute
        h-full top-0 left-0 flex items-center
          right-5 bottom-0 bg-gradient-to-r from-[#151515]
           to-[rgba(21,21,21,0)]"
        >
          <div className="text-white left-3  space-y-7 pl-14  w-1/2">
            <h2 className="text-6xl font-bold">Affordable price For Car Servicing</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              magni iste et vero quidem? Quibusdam quisquam assumenda totam
              vitae nostrum?
            </p>
            <button className="btn btn-primary mr-5">Dicover More</button>
            <button className="btn btn-primary btn-outline">
              Letest Projects
            </button>
          </div>
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
