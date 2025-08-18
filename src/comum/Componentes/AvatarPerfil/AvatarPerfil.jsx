import React, { useContext } from "react";
import { Avatar, IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { AvatarContext } from "../utils/AvatarContext/AvatarContext";

export default function AvatarPerfil() {
  const { avatarUrl, updateAvatar } = useContext(AvatarContext);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      updateAvatar(imageUrl); // atualiza o contexto
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Avatar
        alt="Glauberty Chagas"
        src={avatarUrl}
        sx={{ width: 90, height: 90, mb: 1, margin: "0 auto" }}
      />

      <input
        accept="image/*"
        style={{ display: "none" }}
        id="avatar-upload"
        type="file"
        onChange={handleImageChange}
      />
      <label htmlFor="avatar-upload">
        <IconButton color="secondary" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
}
