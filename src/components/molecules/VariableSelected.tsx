import { useDispatch } from "react-redux"
import type { IUser } from "../../types"
import { unCheckVariable } from "../../redux/variables.slice";

interface VariableSelectedProps {
  variable: IUser
}

function VariableSelected({ variable }: VariableSelectedProps) {
  const dispatch = useDispatch();

  function handleRemoveVariable() {
    dispatch(unCheckVariable(variable._id))
  }

  return (
    <div className="flex mb-4 items-center justify-between text-blue-600 max-w-full w-full shadow bg-white h-10">
      <div className="h-full w-1.5 bg-blue-600"></div>
      <div className="text-left">
        {variable.last_name} {variable.first_name}
      </div>   
      <button 
        type="button" 
        aria-label="close" 
        className="active:scale-90 transition-all mr-3 cursor-pointer"
        onClick={handleRemoveVariable}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}

export default VariableSelected