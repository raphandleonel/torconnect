type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="container max-w-[1170px] m-auto pt-20 pb-10  px-4 sm:px-8">
      {children}
    </div>
  );
}
