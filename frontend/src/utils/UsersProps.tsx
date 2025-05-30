import type { User } from "./User";

export type UsersProps = {
    users: Array<User>;
    setChatClickedId: React.Dispatch<React.SetStateAction<number>>;
}