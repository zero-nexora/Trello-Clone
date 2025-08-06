interface ClerkLayoutProps {
  children: React.ReactNode;
}

const ClerkLayout = ({ children }: ClerkLayoutProps) => {
  return (
    <div className="flex h-full items-center justify-center">{children}</div>
  );
};

export default ClerkLayout;
