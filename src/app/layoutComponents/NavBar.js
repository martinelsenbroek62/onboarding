const NavBar = () => {
  return (
    <>
      <header>
        <nav className="relative h-16 flex items-center bg-azure-400 text-white font-thin text-2xl">
          <div className="max-w-[1264px] mx-auto w-full px-8">
            {/* <image src='/doHero.png' /> */}
            <img src="/logo.svg" alt="logo" className="h-8" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
