import { cn } from "@/lib/utils"


interface HeadingProps {
    title: string,
    description: string,
}

const Heading = ({
    title,
    description,
}: HeadingProps) => {
    return (
        <>
            <div>
                <h2 className="text-3xl font-extrabold tracking-tight">
                    {title}
                </h2>
                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            </div>

        </>
    )
}

export default Heading