

export default function CustomInput({ lab,invalid, ...props }) {
  let labelClass= "block mb-2 text-xs font-bold tracking-wide uppercase"
  let inputClass="w-full px-3 py-2 leading-tight  border rounded shadow bg-stone-300"
  if(invalid){
    labelClass +=' text-red-700'
    inputClass += ' text-red-700'
  }
  else{
    labelClass +=' text-stone-300'
    inputClass += ' text-gray-700'
  }
  return (
    <p>
      <label className={labelClass}>{lab}</label>
      <input className={inputClass}  {...props} />
    </p>
  );
}
