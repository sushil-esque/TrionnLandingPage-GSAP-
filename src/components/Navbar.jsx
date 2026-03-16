import { CgMenuRight } from "react-icons/cg";
import { useTheme } from "../context/ThemeContext";
import { IoMoon, IoSunny } from "react-icons/io5";
function Navbar() {
  const { toggleTheme, darkMode } = useTheme();

  return (
    <div className="pt-2 md:pt-9 fixed top-0 w-full left-0 z-50 flex items-center justify-between px-4 md:px-10">
      <img src="/logo.svg" className="dark:invert w-24 md:w-auto cursor-pointer" alt="" />
      <div className="flex items-center gap-2 absolute left-[50%] translate-x-[-50%]">
        <button
          className="cursor-pointer p-1 rounded-full flex items-center justify-center scale-90 md:scale-100"
          onClick={toggleTheme}
        >
          {darkMode ? (
            <div className="p-2 bg-[#cdd1d0] dark:bg-[#242525] rounded-full">
              <IoSunny className="text-black dark:text-white" />
            </div>
          ) : (
            <div className="p-2 bg-[#cdd1d0] dark:bg-[#242525] rounded-full">
              <IoMoon className="text-black dark:text-white" />
            </div>
          )}
        </button>
        <div className="size-[28px] md:size-[32px] bg-[#cdd1d0] dark:bg-[#242525] rounded-full">
          <img
            src="/sound.b0076745.svg"
            alt=""
            className="invert dark:invert-0 size-full"
          />
        </div>
      </div>
      <div className="font-bold text-sm md:text-lg leading-0 flex gap-2 items-center cursor-pointer">
        <span className="hidden md:inline">MENU</span>
        <div className="p-1.5 md:p-2 bg-[#cdd1d0] dark:bg-[#242525] rounded-full">
          <CgMenuRight className="text-xl md:text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
