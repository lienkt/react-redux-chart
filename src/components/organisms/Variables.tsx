import VariableCheckbox from "../molecules/VariableCheckbox"

function Variables() {
  return (
    <div className="w-[400px] height-[400px] mt-5 p-2 border-width border-l-1 border-gray-100">
      <h3 className='text-[26px] text-center'>Variables</h3>

      <br />
      <div>
        <VariableCheckbox />
        <VariableCheckbox />
        <VariableCheckbox />
        <VariableCheckbox />
      </div>
    </div>
  )
}

export default Variables