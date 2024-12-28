import BhiveLogo from "@/assets/bhive-logo.svg";
import { MdPhone } from "react-icons/md";

export default function Header() {
  return (
    <header className="p-5 shadow-[0px_1px_3px_1px_#00000012]">
      <nav className="container flex justify-between px-[120px]">
        <div>
          <img src={BhiveLogo} alt="bhive-workspaces" />
        </div>
        <div>
          <MdPhone
            size={32}
            className="fill-brand-yellow border rounded-md border-brand-yellow"
          />
        </div>
      </nav>
    </header>
  );
}
