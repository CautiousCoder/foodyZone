import logo from "/download.png";
const Navbar = () => {
  return (
    <div className="headerText h-[60px] max-w-[380px] rounded bg-white p-2 flex justify-center">
      <img className="w-10 h-10" src={logo} alt="Logo" />
      <h2 className="text-black text-base text-center p-2 capitalize font-semibold">
        firebase contact app
      </h2>
    </div>
  );
};
export default Navbar;
