import { Header } from "@shared/ui/Header/Header";
import { ReactNode } from "react";

type AuthLayoutProps = {
    children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}
