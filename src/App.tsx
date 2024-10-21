import './App.css'

function App() {

  return (
    <>
      <div className="bg-[#e8bcb9ad] min-h-screen">
        {/* Navbar section */}
        <div className="bg-[#F39F5A] text-white h-16 w-full">
          <div className="flex mx-auto max-w-5xl items-center h-full justify-between px-4 lg:px-0">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-sans font-bold">Lottery Online</h1>
            </div>
            <div className="hidden md:flex lg:text-lg gap-4">
              <a className="font-sans" href="#">หน้าแรก</a>
              <a className="font-sans" href="#">ตรวจฉลาก</a>
              <a className="font-sans" href="#">ซื้อฉลาก</a>
              <a className="font-sans" href="#">กระเป๋าของฉัน</a>
              <a className="font-sans" href="#">ประวัติการซื้อ</a>
            </div>
          </div>
        </div>
        {/* Navbar section */}

        {/* content section */}
        <div className="mx-auto max-w-5xl">
          <div className="">
            <div className="mt-4 shadow-lg lg:px-4 lg:py-2 lg:bg-white lg:rounded-xl">
              <img className="object-cover"
                src="https://picperf.io/https://laravelnews.s3.amazonaws.com/images/tailwindcss-1633184775.jpg" alt="" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-3 bg-white py-10 px-8 gap-4 rounded-xl shadow-lg">
            <h2 className="font-sans text-3xl">ค้นหาเลขเด็ดตามใจคุณ</h2>

            <div className="flex justify-between items-center w-full">
              <p className="font-sans">งวดที่ 1 ตุลาคม 2567</p>
              <p className="font-sans text-red-600 hover:text-red-400 hover:underline cursor-pointer">ล้างข้อมูล</p>
            </div>

            <div className="w-full flex flex-row justify-between px-14 sm:px-16 md:px-24 lg:px-28 py-6">
              <input className="w-10 md:w-16 h-12 border-2 border-yellow-500 hover:border-yellow-300 rounded-lg text-2xl text-center focus:outline-none " type="text" />
              <input className="w-10 md:w-16 h-12 border-2 border-yellow-500 hover:border-yellow-300 rounded-lg text-2xl text-center focus:outline-none " type="text" />
              <input className="w-10 md:w-16 h-12 border-2 border-yellow-500 hover:border-yellow-300 rounded-lg text-2xl text-center focus:outline-none " type="text" />
              <input className="w-10 md:w-16 h-12 border-2 border-yellow-500 hover:border-yellow-300 rounded-lg text-2xl text-center focus:outline-none " type="text" />
              <input className="w-10 md:w-16 h-12 border-2 border-yellow-500 hover:border-yellow-300 rounded-lg text-2xl text-center focus:outline-none " type="text" />
              <input className="w-10 md:w-16 h-12 border-2 border-yellow-500 hover:border-yellow-300 rounded-lg text-2xl text-center focus:outline-none " type="text" />
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 w-full px-4">
              <button className="p-2 bg-yellow-400 hover:bg-yellow-300 text-blue-700 font-sans rounded-lg font-bold">ดูทั้งหมด</button>
              <button className="p-2 bg-gray-300 hover:bg-gray-400 text-blue-700 font-sans rounded-lg font-bold">เลขเดียว</button>
              <button className="p-2 bg-gray-300 hover:bg-gray-400 text-blue-700 font-sans rounded-lg font-bold">ชุด 2 ใบ</button>
              <button className="p-2 bg-gray-300 hover:bg-gray-400 text-blue-700 font-sans rounded-lg font-bold">ชุด 3 ใบ</button>
              <button className="p-2 bg-gray-300 hover:bg-gray-400 text-blue-700 font-sans rounded-lg font-bold">ชุด 4 ใบ</button>
              <button className="p-2 bg-gray-300 hover:bg-gray-400 text-blue-700 font-sans rounded-lg font-bold">ชุด 5 ใบ</button>
              <button className="p-2 bg-gray-300 hover:bg-gray-400 text-blue-700 font-sans rounded-lg font-bold col-span-3">เลขเซียนดัง</button>
              <button className="p-2 bg-gray-300 hover:bg-gray-400 text-blue-700 font-sans rounded-lg font-bold col-span-3">เลขเด็ดเซียนกบ</button>
              <button className="p-2 bg-blue-700 hover:bg-blue-300 text-white font-sans rounded-lg font-bold col-span-3">ค้นหาเลขเด็ด</button>
            </div>

          </div>
        </div>
        {/* content section */}

      </div>
    </>
  )
}

export default App
