import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Dummy Name",
        email: "dummyName@gmail.com"
    }
});
UserContext.displayName = "UserContext";

export default UserContext;