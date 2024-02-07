import { toast } from "react-toastify";

const errorHandler = (errorCode, errorMessage) => {
    switch (errorCode) {
        case "auth/email-already-in-use":
            toast.error(
                "Email is already in use. Please use a different email."
            );
            break;
        case "auth/invalid-email":
            toast.error("Invalid email address. Please enter a valid email.");
            break;
        case "auth/invalid-credential":
            toast.error("Invalid email or password.");
            break;

        default:
            toast.error("An error occurred. Please try again.");
            console.error("Unhandled error:", errorCode, errorMessage);
    }
};

export default errorHandler;
