const linksNav = [
  {id: 1, title: "HOW WE WORK"},
  {id: 2, title: "BLOG"},
  {id: 3, title: "ACCOUNT"},
]

const Links:React.FC = () => {
  return (
    <>
      {linksNav.map(link => (
        <li
          key={link.id}
          className="whitespace-nowrap text-VeryLightGray lg:text-DarkGray text-[1.25rem] lg:text-[0.8125rem] font-Karla font-bold tracking-[1.36px] lg:tracking-[1.5px] cursor-pointer"
        >
          {link.title}
        </li>
      ))}
      <button
        className="w-full h-14 lg:px-7 text-VeryLightGray lg:text-DarkPurple  text-[1.25rem] lg:text-[0.8125rem] font-Karla font-bold tracking-[1.36px] lg:tracking-[1.5px] border-2 border-VeryLightGray lg:border-DarkPurple lg:border-3 cursor-pointer hover:bg-VeryLightGray hover:text-DarkPurple lg:hover:bg-DarkPurple lg:hover:text-VeryLightGray transition-colors duration-200 ease-in-out"
      >
        VIEW PLANS
      </button>
    </>
  )
}

export default Links;
