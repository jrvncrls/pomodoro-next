import { Settings } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-3xl font-bold p-5 text-primary">Just Focus</h1>
      <Settings style={{ color: "var(--primary-color)" }} />
    </div>
  );
};

export default Header;
