import { ReactNode } from "react";

import { LayoutComponent } from "@/src/components/layout";

export default function Layout({ children }: { children: ReactNode }) {
  return <LayoutComponent>{children}</LayoutComponent>;
}
