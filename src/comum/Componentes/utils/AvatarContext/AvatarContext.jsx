// AvatarContext.js
import React, { createContext, useState } from "react";

export const AvatarContext = createContext();

export const AvatarProvider = ({ children }) => {
  const [avatarUrl, setAvatarUrl] = useState(
    "https://avatars.githubusercontent.com/u/12345678?v=4"
  );

  const updateAvatar = (newUrl) => {
    setAvatarUrl(newUrl);
  };

  return (
    <AvatarContext.Provider value={{ avatarUrl, updateAvatar }}>
      {children}
    </AvatarContext.Provider>
  );
};
