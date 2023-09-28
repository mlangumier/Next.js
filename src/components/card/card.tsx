interface IProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<IProps> = ({ className, children }) => (
  <div
    className={`mt-24 h-min bg-white rounded-md shadow-md py-4 px-8 ${className}`}
  >
    {children}
  </div>
);
