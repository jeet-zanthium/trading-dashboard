import logo from "@/assets/react.svg";
import { Card } from "@/components/ui/card";
import { Link, Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <main className="h-full flex justify-center items-center max-w-120 mx-auto p-4 flex-col gap-4">
      <Link to="/">
        <img src={logo} alt="" className="w-16" />
      </Link>
      <Card className="w-full">
        <Outlet />
      </Card>
    </main>
  );
};

export default AuthLayout;
