import { useDispatch, useSelector } from 'react-redux'
import Button from '../atoms/Button'
import VariableSelected from '../molecules/VariableSelected'
import type { RootState } from '../../store'
import { updateLabel } from '../../redux/variables.slice';

function ControlCenter() {
  const dispatch = useDispatch();
  const variablesSelected = useSelector((state: RootState) => state.variables.variableSelected);

  return (
    <div className="w-[400px] shrink-0 height-[400px] mt-5 p-2 border-width border-r-1 border-gray-100">
      <h3 className='text-[26px] text-center'>Control Center</h3>

      <br />
      <div className="font-bold">Selected Variables / Sections</div>

      <br />
      <div className='h-[calc(100vh-286px)] overflow-y-auto'>
        {variablesSelected.map(variable => (
          <VariableSelected 
            key={variable._id} 
            variable={variable}
          />
        ))}
      </div>

      <div className='mt-4 text-right'>
        <Button
          variant='primary'
          size='sm'
          onClick={() => {
            dispatch(updateLabel())
          }}
        >
          Apply
        </Button>
      </div>
    </div>
  )
}

export default ControlCenter