
const Banner = () => {
    return (
        <div className="relative -top-52 mx-auto w-[66.38rem] h-[34rem]">
            <div
                className="rounded-3xl outline outline-[0.15rem] outline-white w-full h-full overflow-hidden"
                style={{ outlineOffset: '1.2rem' }}
            >
                <img
                    className="rounded-3xl w-full h-full object-cover"
                    src="/banner.jpg"
                    alt=""
                    
                />
            </div>
        </div>
    );
};

export default Banner;



/*
<div
        className="absolute left-0 right-0 mx-auto bg-cover rounded-3xl w-full h-full md:h-[25rem] -bottom-60 mb-10 outline outline-[0.15rem] outline-white "
        style={{
          backgroundImage: `linear-gradient(to top right,#aed6f1 ,#fdfefe , #fdfefe,#fed7aa), url('https://i.ibb.co/mTM4h2r/bg-shadow.png')`,
          backgroundBlendMode: 'overlay',
          filter: 'blur(0.005rem)',
          outlineOffset: '1.5rem',
         
        }}
      >

      img baner - https://i.postimg.cc/Kj1Vr4hp/banner.jpg 
*/