const Body: React.FC = () => {
  return (
    <section className="pt-40">
      <div className="flex items-center gap-4">
        <div className="grid place-items-center w-12 h-[25px] bg-VeryDarkBlue rounded-full">
          <span className=" text-white text-[15px] font-bold font-BarlowCondensed">NEW</span>
        </div>
        <h2 className="font-BarlowCondensed text-[15px] text-VeryDarkBlue tracking-[5px] opacity-50">MONOGRAPH DASHBOARD</h2>
      </div>
      <h1 className="mt-4 font-bold leading-10 font-BarlowCondensed text-[2.5rem] text-VeryDarkBlue">POWERFUL INSIGHTS INTO YOUR TEAM</h1>
      <p className="mt-4 font-Barlow text-[18px] text-VeryDarkBlue opacity-75">Project planning and time tracking for agile teams</p>
      <div className="flex items-center gap-5 mt-7">
        <button className="relative w-[153px] h-10 bg-Red font-BarlowCondensed font-bold text-[14px] text-white rounded-[5px] cursor-pointer tracking-[0.93px] transition duration-50 ease-in-out after:content-[''] after:absolute after:inset-0 after:bg-white after:rounded-[5px] after:opacity-0 after:transition-opacity after:duration-50 hover:after:opacity-25">
          SCHEDULE A DEMO
        </button>
        <span className="font-BarlowCondensed text-[14px] text-VeryDarkBlue opacity-50 tracking-[2.5px]">
          TO SEE A PREVIEW
        </span>
      </div>
    </section>
  )
}

export { Body }