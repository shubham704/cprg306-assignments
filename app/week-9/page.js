"use client";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context.js";
import { useEffect, useState } from "react";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function SignIn() {
    try {
      await gitHubSignIn();
      window.location.href = "./week-9/shopping-list/"; // Redirect to shopping list after successful login
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <p>Welcome</p>
      {user ? (
        <>
          <p>Hello, {user.displayName}</p>
        </>
      ) : (
        <button onClick={SignIn}>Sign In with GitHub</button>
      )}
    </main>
  );
}
// Use the useUserAuth hook to get the user object and the login and logout functions
// const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

// // Sign in to Firebase with GitHub authentication
// await gitHubSignIn();

// // Sign out of Firebase
// await firebaseSignOut();

// // Display some of the user's information
// <p>
//   Welcome, {user.displayName} ({user.email})
// </p>;
