type ButtonMainProps = {
  children: React.ReactNode | string;
};

const ButtonMain = ({ children }: ButtonMainProps) => {
  return (
    <button className="text-center uppercase text-xs bg-pink py-3 px-6 text-white font-main rounded-md">
      {children}
    </button>
  );
};

export default ButtonMain;
