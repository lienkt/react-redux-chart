import { useDispatch } from "react-redux";
import { useFetchUser } from "../../hooks/useFetchUser"
import VariableCheckbox from "../molecules/VariableCheckbox"
import { setVariable, unCheckVariable } from "../../redux/variables.slice";
import type { IUser } from "../../types";

function Variables() {
  const { users } = useFetchUser();
  const dispatch = useDispatch();


  function onChange(checked: boolean, user: IUser) {
    if (checked) {
      dispatch(setVariable(user))
      return;
    }

    // unchecked
    dispatch(unCheckVariable(user._id))
  }


  return (
    <div className="w-[400px] shrink-0 height-[400px] mt-5 p-2 border-width border-l-1 border-gray-100">
      <h3 className='text-[26px] text-center'>Variables</h3>

      <br />
      <div>
        {users.map(user => (
          <VariableCheckbox
            key={user._id}
            value={user._id}
            onChange={(checked) => onChange(checked, user)}
          >
            {user.last_name} {user.first_name}
          </VariableCheckbox>
        ))}
      </div>
    </div>
  )
}

export default Variables