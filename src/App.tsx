import { Button } from "./components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FaSquareFacebook, FaTwitter } from "react-icons/fa6";
import { TbCardsFilled } from "react-icons/tb";
import { Checkbox } from "./components/ui/checkbox";
import { LuArrowRight } from "react-icons/lu";
import My_input from "./components/my_components_ui/My_input";
function App() {
    return (
        <div className="pt-5">
            <Card className="w-[340px] m-auto border-[#D1D5DB] rounded-[12px]">
                <CardHeader className="text-center">
                    <div className="flex justify-center text-[#06B6D4] text-[50px]">
                        <TbCardsFilled />
                    </div>
                    <CardTitle className="text-[20px] font-semibold">
                        Welcome back
                    </CardTitle>
                    <CardDescription className="text-[14px] text-[#6B7280] px-2">
                        Sign in to access to your dashboard, settings and
                        projects
                    </CardDescription>
                </CardHeader>
                <form>
                    <CardContent>
                        <div className="grid w-full items-center ">
                            <div className="flex flex-col space-y-1.5">
                                <a
                                    href="#"
                                    className="link flex items-center justify-center gap-3 border-[1px] rounded-[128px] py-[8px] px-[16px] border-[#D1D5DB]"
                                >
                                    <FaSquareFacebook className="icon" />
                                    <span>Connect with Facebook</span>
                                </a>
                                <a
                                    href="#"
                                    className="link flex items-center justify-center gap-3 border-[1px] rounded-[128px] py-[8px] px-[16px] border-[#D1D5DB]"
                                >
                                    <FaTwitter className={"icon"} />
                                    <span>Connect with Twitter </span>
                                </a>
                            </div>
                            <div className="relative py-3 mb-6">
                                <div className="chiziq absolute h-[0.3px] bottom-0 rounded-xl w-[100%] bg-[#D1D5DB]   "></div>
                                <h1 className="absolute left-[50%] translate-x-[-50%] translate-y-[-2px] min-w-44 text-center   bg-white pY-[5px] ">
                                    or sign in with email
                                </h1>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <My_input
                                    label="Email"
                                    type="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5 mt-4">
                                <My_input
                                    label="password"
                                    type="password"
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start">
                        <div className="flex gap-2 ">
                            <Checkbox
                                id="terms"
                                className="rounded-[5px] border-[#D1D5DB] cursor-pointer"
                            />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Remember for 30 days
                            </label>
                        </div>
                        <Button
                            variant={"default"}
                            className="bg-[#06B6D4] text-white rounded-[128px] w-full my-3 hover:bg-[#06b5d4a9] flex gap-2 items-center"
                        >
                            Sign in <LuArrowRight className="mt-1" />
                        </Button>
                        <div className="flex gap-[5px] justify-center w-full">
                            <span>No account?</span>
                            <a href="#" className="text-[#06B6D4]">
                                Create an account
                            </a>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}

export default App;
