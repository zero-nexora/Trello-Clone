import { ModalProvider } from "@/components/providers/modal-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

interface PlatformLayoutProps {
  children: React.ReactNode;
}

const PlatformLayout = ({ children }: PlatformLayoutProps) => {
  return (
    <ClerkProvider>
      <QueryProvider>
        {children}
        <ModalProvider />
        <Toaster />
      </QueryProvider>
    </ClerkProvider>
  );
};

export default PlatformLayout;
