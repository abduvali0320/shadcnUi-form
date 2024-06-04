import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
type InputType = {
    label: string;
    type: string;
    placeholder: string;
    style?: string;
};

export default function My_input({
    label,
    type,
    placeholder,
    style,
}: InputType) {
    return (
        <>
            <Label htmlFor="framework">{label}</Label>
            <Input
                type={type}
                className={`rounded-[128px]  border-[#D1D5DB] hover:border-[#06b5d484] ${style}`}
                placeholder={placeholder}
            />
        </>
    );
}
