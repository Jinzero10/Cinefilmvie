import React, { useState } from "react";
import "./profile.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../userSlice";
import { auth } from "../../app/api/firebase";

import {
    EmailAuthProvider,
    reauthenticateWithCredential,
    updatePassword,
} from "firebase/auth";
import { toast } from "react-toastify";

export const Profile = () => {
    const user = useSelector(selectUser);
    const [newEmail] = useState(user.email || "");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    // const [showEmail, setShowEmail] = useState(false);

    // useEffect(() => {
    //     if (newEmail !== user.email) {
    //         setShowEmail(true);
    //     } else {
    //         setShowEmail(false);
    //     }
    // }, [newEmail]);

    // const updateUserEmail = (e) => {
    //     e.preventDefault();
    //     if (newEmail !== user.email) {
    //         updateEmail(auth.currentUser, newEmail)
    //             .then(() => {
    //                 toast.success("Email updated.");
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //                 toast.error("Something wrong while updating email.");
    //             });
    //     } else {
    //         toast.error("Email is still the same.");
    //     }
    //     onChange={(e) => setNewEmail(e.target.value)}
    // {showEmail ? (
    //     <span onClick={updateUserEmail}>
    //         Update Email
    //     </span>
    // ) : undefined}
    // };

    const updateUserPassword = (e) => {
        e.preventDefault();
        const credentials = EmailAuthProvider.credential(
            user.email,
            oldPassword
        );

        reauthenticateWithCredential(auth.currentUser, credentials)
            .then(() => {
                if (newPassword === confirmPass) {
                    updatePassword(auth.currentUser, newPassword)
                        .then(() => {
                            toast.success("Password updated.");
                            setOldPassword("");
                            setNewPassword("");
                            setConfirmPass("");
                        })
                        .catch((error) => {
                            console.log(error);
                            toast.error(
                                "Something wrong while updating password."
                            );
                        });
                } else {
                    toast.error("Password and ConfirmPassword do not match.");
                }
            })
            .catch((error) => {
                console.log(error);
                toast.error("must enter the old password for verification");
            });
    };

    return (
        <div className="profile">
            <div className="container">
                <div className="userDetails">
                    <div className="userInput">
                        <label>Email:</label>
                        <input
                            type="email"
                            autoComplete="off"
                            value={newEmail}
                            readOnly
                        />
                    </div>
                    <div className="userInput">
                        <label>Old Password:</label>
                        <input
                            type="password"
                            autoComplete="new-password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            minLength={6}
                            maxLength={24}
                        />
                    </div>
                    <div className="userInput">
                        <label>New Password:</label>
                        <input
                            type="password"
                            autoComplete="new-password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            minLength={6}
                            maxLength={24}
                        />
                    </div>
                    <div className="userInput">
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            autoComplete="new-password"
                            value={confirmPass}
                            onChange={(e) => setConfirmPass(e.target.value)}
                            minLength={6}
                            maxLength={24}
                        />
                    </div>
                </div>
                {newPassword ? (
                    <button onClick={updateUserPassword}>
                        Update Password
                    </button>
                ) : undefined}
            </div>
        </div>
    );
};
