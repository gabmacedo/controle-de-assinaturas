export default function PrimaryButton({
  value,
  heigth,
  width,
  icon,
  rightIcon,
  textInputSize,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white rounded-lg w-${width} h-${heigth} p-3.5 text-center text-${textInputSize} cursor-pointer flex items-center justify-center gap-2 hover:bg-blue-700`}
    >
      {icon}
      {value}
      {rightIcon}
    </button>
  );
}
