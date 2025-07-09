import { useEffect, useState } from "react";
import { CredentialsGetMe } from "@/utils/types/credentials";

export const useGetMe = () => {
    const [user, setUser] = useState<CredentialsGetMe | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
                credentials: "include",
            });
            const data = await response.json();
            setUser(data.user as CredentialsGetMe);
        }
        fetchUser();
    }, []);

    return user;
}