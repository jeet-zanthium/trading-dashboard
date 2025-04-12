import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="h-full flex justify-center items-center gap-4">
      <Button asChild>
        <Link to="/auth/sign-up">Sign Up</Link>
      </Button>
      <Button asChild>
        <Link to="/auth/sign-in">Sign In</Link>
      </Button>
    </div>
  );
}
