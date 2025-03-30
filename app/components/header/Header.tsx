"use client"; // Ensure it's a Client Component
import { Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <div
        style={{ color: "var(--primary-color)" }}
        className="flex items-center justify-center"
      >
        <h1 className="text-3xl font-bold p-5 hover:text-inherit">
          Just Focus
        </h1>
        <Settings
          style={{ color: "var(--primary-color)" }}
          className="transition-transform duration-300 hover:rotate-180 cursor-pointer"
        />
      </div>

      <div className="flex w-full justify-center pt-5">
        <div className="w-full max-w-90 flex justify-between">
          <Link
            href="/focus"
            className={`text-primary ${
              pathname === "/focus" ? "underline" : ""
            }`}
          >
            Focus
          </Link>
          <Link
            href="/break"
            className={`text-primary ${
              pathname === "/break" ? "underline" : ""
            }`}
          >
            Break
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
