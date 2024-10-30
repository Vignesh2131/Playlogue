import { Gamepad2 } from "lucide-react"
interface AuthHeaderProps{
    headerText: string,
    lineText:string
}
const AuthHeader = ({headerText,lineText}:AuthHeaderProps) => {
    return (
      <div>
        <div className="flex items-center justify-center mb-4">
          <Gamepad2 className="h-12 w-12 text-red-500 animate-pulse" />
        </div>

        <div className="space-y-2 text-center mb-8">
                <h1 className="text-2xl font-bold text-white">{headerText}</h1>
          <p className="text-red-400">
            {lineText}
          </p>
        </div>
      </div>
    );
}

export default AuthHeader