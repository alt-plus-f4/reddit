import { FC } from "react"
import { cn } from "@/lib/utils"; 
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";

const page: FC = () => {
    return <div className="absolute inset-0">
        <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
            <Link href="/" className={cn(buttonVariants({ variant: 'ghost' }))}>HOME</Link>

        </div>

    </div>;
}
 
export default page;