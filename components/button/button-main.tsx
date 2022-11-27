type ButtonMainProps = {
  children: React.ReactNode | string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

const ButtonMain = ({ children, onClick }: ButtonMainProps) => {
  return (
    <button
      onClick={onClick}
      className="text-center uppercase text-xs bg-pink py-3 px-6 text-white font-main rounded-md"
    >
      {children}
    </button>
  );
};

export default ButtonMain;
