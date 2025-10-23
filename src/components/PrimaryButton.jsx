export default function PrimaryButton({
  value,
  heigth,
  width,
  icon,
  textInputSize,
}) {
  return (
    <button
      className={`bg-blue-600 text-white rounded-lg w-${width} h-${heigth} p-3.5 text-center text-${textInputSize} cursor-pointer flex items-center justify-center gap-2 hover:bg-blue-700`}
    >
      {icon}
      {value}
    </button>
  )
}

// bg-blue-600 text-white rounded-xl w-{96} h-16 p-3.5 `text-center text-[16px] cursor-pointer
