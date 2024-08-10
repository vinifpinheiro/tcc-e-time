import Menunav from "../menunav/Menunav";

export default function Navbar() {
  return (
    // navbar responsive color violet and white
    <nav className="bg-violet-500 p-4 w-full h-18 flex items-center border-0">
      <div className="container mx-auto flex justify-between items-center space-x-4">
       
        <img
          src="../logo-no-background.png"
          className="h-16 w-auto"
          alt="Logo"
        />
      </div>
    </nav>
  );
}
