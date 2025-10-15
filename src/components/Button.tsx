interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ text, onClick, className }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-md cursor-pointer ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
