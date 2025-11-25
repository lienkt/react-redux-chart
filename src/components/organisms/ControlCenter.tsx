import VariableSelected from '../molecules/VariableSelected'

function ControlCenter() {
  return (
    <div className="w-[400px] height-[400px] mt-5 p-2 border-width border-r-1 border-gray-100">
      <h3 className='text-[26px] text-center'>Control Center</h3>

      <br />
      <div className="font-bold">Selected Variables / Sections</div>

      <br />
      <div>
        <VariableSelected />
        <VariableSelected />
        <VariableSelected />
        <VariableSelected />
      </div>
    </div>
  )
}

export default ControlCenter