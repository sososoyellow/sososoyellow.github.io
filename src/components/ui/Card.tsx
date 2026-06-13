interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Card = ({ title, children, className }: CardProps) => {
  return (
    <div className={className}>
      {title && <h3>{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
