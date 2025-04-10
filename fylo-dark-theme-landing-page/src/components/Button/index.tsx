type ButtonProps = {
  label: string;
  width?: string;
  height?: string;
  FormButton?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, width, height, FormButton = false }) => {
  return (
    <button
      className="relative rounded-full bg-linear-to-br from-Cyan to-Blue font-Raleway font-bold text-[14px] cursor-pointer transition duration-50 ease-in-out after:content-[''] after:absolute after:inset-0 after:bg-white after:rounded-full after:opacity-0 after:transition-opacity after:duration-50 active:after:opacity-25"
      style={{paddingLeft: width, paddingRight: width, paddingTop: height, paddingBottom: height, height: FormButton ? "48px" : ""}}
    >
      {label}
    </button>
  )
}

export { Button }