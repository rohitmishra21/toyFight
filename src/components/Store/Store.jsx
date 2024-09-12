import React from "react";
import{ motion} from "framer-motion"
import Loader from "../Loader/Loader"
const Store = () => {
  return (
    <>
      <div className="w-full min-h-[100vh]">
        <Loader/>
        <div className="xl:h-1/2 px-8 w-full items-start xl:flex xl:pt-32 pt-16">
          <div className="one xl:text-[2.3vw] text-2xl font-normal xl:w-1/2">
            <h1>
              Welcome to the Official <br /> ToyFight Toy®Store
            </h1>
          </div>
          <div className="two xl:text-[1.2vw] pt-7 text-xl text-gray-600 xl:w-1/2">
            Welcome to our Store, where every item has a story, and every story
            is slightly off.
            <br />
            <br />
            Forget the soul-sucking hustle culture. Here, we celebrate the
            glorious messiness of life at an agency. Our collection is a
            hodgepodge of design remnants, forgotten relics, and dysfunctional
            items that will make you question why you ever bothered.
          </div>
        </div>

        <motion.div 
        className="w-full  grid xl:grid-cols-4 md:grid-cols-2 md:min-h-[750vh] md:grid-rows-8 gap-1 xl:grid-rows-4 xl:h-[300vh] min-h-[1500vh] px-8  xl:px-12 pt-24 lg:grid-cols-3 lg:grid-rows-5 lg:min-h-[500vh] xl:min-h-[140vh] ">
          <div className="w-[100%] h-[100%] bg-[url('https://images.prismic.io/toyfight/Zk8PaSol0Zci9YeX_shp-prd-drp.jpg?auto=format%2Ccompress&rect=102%2C0%2C995%2C1200&fit=clip')] bg-cover bg-center ">
            <div className="flex flex-col items-start gap-2 p-3">
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
                40Gb worth of unused PSDs
              </h1>
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
                sold out
              </h1>
            </div>
          </div>
          <div className="w-[100%] h-[100%] bg-[url('https://images.prismic.io/toyfight/Zk8Payol0Zci9YeZ_shp-prd-pen.jpg?auto=format%2Ccompress&rect=102%2C0%2C995%2C1200&fit=clip')] bg-cover bg-center ">
            <div className="flex flex-col items-start gap-2 p-3">
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
                Sauncy Man Pen
              </h1>
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
                sold out
              </h1>
            </div>
          </div>
          <div className="w-[100%] h-[100%] bg-[url('https://images.prismic.io/toyfight/Zk8PYyol0Zci9YeO_shp-prd-code.jpg?auto=format%2Ccompress&rect=102%2C0%2C995%2C1200&fit=clip')] bg-cover bg-center ">
            <div className="flex flex-col items-start gap-2 p-3">
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
               Unused PhotoShop CS licence
              </h1>
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
                sold out
              </h1>
            </div>
          </div>
          <div className="w-[100%] h-[100%] bg-[url('https://images.prismic.io/toyfight/Zk8PYiol0Zci9YeN_shp-prd-toteplastic.jpg?auto=format%2Ccompress&rect=102%2C0%2C995%2C1200&fit=clip')] bg-cover bg-center ">
            <div className="flex flex-col items-start gap-2 p-3">
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
              Branded Toti Bags(Plastic)
              </h1>
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
                sold out
              </h1>
            </div>
          </div>
          <div className="w-[100%] h-[100%] bg-[#CFCBC5]">
          <div className="flex flex-col items-start gap-2 ">
              <h1 className="bg-[#D9D6D1] one py-1  rounded-md px-4 ">
                Sauncy Man Pen
              </h1>
              <h1 className="bg-[#D9D6D1] one  rounded-md px-4 ">
                sold out
              </h1>
            </div>
            <video autoPlay muted loop className="w-[100%] h-[100%]" src="https://res.cloudinary.com/durdzswls/video/upload/q_90/v1/shop/cxn4r0nmecamdaybpgzc.webm?_a=DATAdtAAZAA0"></video>
          </div>
          <div className="w-[100%] h-[100%] bg-[url('https://images.prismic.io/toyfight/Zk9l4yol0Zci9Zlo_shp-prd-rubber.png?auto=format%2Ccompress&rect=102%2C0%2C995%2C1200&fit=clip')] bg-cover bg-center ">
            <div className="flex flex-col items-start gap-2 p-3">
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
              Rub One Out Eraser(3 pack)
              </h1>
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
                sold out
              </h1>
            </div>
          </div>
          <div className="w-[100%] h-[100%] bg-[url('https://images.prismic.io/toyfight/Zk8Pbiol0Zci9Yed_shp-prd-tee.jpg?auto=format%2Ccompress&rect=102%2C0%2C995%2C1200&fit=clip')] bg-cover bg-center ">
            <div className="flex flex-col items-start gap-2 p-3">
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
            I color in for a Living Tee(Designer Ed)
              </h1>
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
                sold out
              </h1>
            </div>
          </div>
          <div className="w-[100%] h-[100%] bg-[url('https://images.prismic.io/toyfight/Zk8Pbyol0Zci9Yee_shp-prd-stock.jpg?auto=format%2Ccompress&rect=102%2C0%2C995%2C1200&fit=clip')] bg-cover bg-center ">
            <div className="flex flex-col items-start gap-2 p-3">
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
             Toy Soke®AI ASSist PAck.
              </h1>
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
                sold out
              </h1>
            </div>
          </div>
          <div className="w-[100%] h-[100%] bg-[url('https://images.prismic.io/toyfight/Zk8PZyol0Zci9YeU_shp-prd-mug1.jpg?auto=format%2Ccompress&rect=102%2C0%2C995%2C1200&fit=clip')] bg-cover bg-center ">
            <div className="flex flex-col items-start gap-2 p-3">
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
             The Mugs Mug
              </h1>
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
                sold out
              </h1>
            </div>
          </div>
          <div className="w-[100%] h-[100%] bg-[url('https://images.prismic.io/toyfight/Zk8PaCol0Zci9YeV_shp-prd-mug2.jpg?auto=format%2Ccompress&rect=102%2C0%2C995%2C1200&fit=clip')] bg-cover bg-center ">
            <div className="flex flex-col items-start gap-2 p-3">
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
             Toy Fight OfficialWOWAC branded mug
              </h1>
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
                sold out
              </h1>
            </div>
          </div>
          <div className="w-[100%] h-[100%] bg-[url('https://images.prismic.io/toyfight/Zk8Gpyol0Zci9YXK_shp-prd-hex.jpg?auto=format%2Ccompress&rect=102%2C0%2C995%2C1200&fit=clip')] bg-cover bg-center ">
            <div className="flex flex-col items-start gap-2 p-3">
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
            Unique hex code
              </h1>
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
               10.00
              </h1>
            </div>
          </div>
          <div className="w-[100%] h-[100%] bg-[url('https://images.prismic.io/toyfight/Zk8Paiol0Zci9YeY_shp-prd-toy.jpg?auto=format%2Ccompress&rect=102%2C0%2C995%2C1200&fit=clip')] bg-cover bg-center ">
            <div className="flex flex-col items-start gap-2 p-3">
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
            Unique hex code
              </h1>
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
               10.00
              </h1>
            </div>
          </div>
          <div className="w-[100%] h-[100%] bg-[url('https://images.prismic.io/toyfight/Zk8PZiol0Zci9YeT_shp-prd-imac.jpg?auto=format%2Ccompress&rect=102%2C0%2C995%2C1200&fit=clip')] bg-cover bg-center ">
            <div className="flex flex-col items-start gap-2 p-3">
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
                iMac 2017
              </h1>
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
                sold out
              </h1>
            </div>
          </div>
          <div className="w-[100%] h-[100%] bg-[url('https://images.prismic.io/toyfight/Zk9kAiol0Zci9ZkC_shp-prd-tote.png?auto=format%2Ccompress&rect=102%2C0%2C995%2C1200&fit=clip')] bg-cover bg-center ">
            <div className="flex flex-col items-start gap-2 p-3">
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
               Every day i am sufrring tote
              </h1>
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
               Sold out
              </h1>
            </div>
          </div>
          <div className="w-[100%] h-[100%] bg-[url('https://images.prismic.io/toyfight/Zk8PZCol0Zci9YeQ_shp-prd-agency.jpg?auto=format%2Ccompress&rect=102%2C0%2C995%2C1200&fit=clip')] bg-cover bg-center ">
            <div className="flex flex-col items-start gap-2 p-3">
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
             Toy Fight Agency
              </h1>
              <h1 className="bg-[#D9D6D1] one py-1 rounded-md px-4 ">
              underoffer
              </h1>
            </div>
          </div>
    
        </motion.div>
      </div>
    </>
  );
};

export default Store;
