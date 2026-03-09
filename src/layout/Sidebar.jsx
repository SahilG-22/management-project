import {
  LayoutDashboard,
  Megaphone,
  Factory,
  DollarSign,
  FlaskConical,
  FileText,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-10">SimuCorp</h1>

      <nav className="space-y-6">
        <div className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
          <LayoutDashboard size={18} />
          Dashboard
        </div>

        <div className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
          <Megaphone size={18} />
          Marketing
        </div>

        <div className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
          <Factory size={18} />
          Production
        </div>

        <div className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
          <DollarSign size={18} />
          Finance
        </div>

        <div className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
          <FlaskConical size={18} />
          R&D
        </div>

        <div className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
          <FileText size={18} />
          Reports
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
