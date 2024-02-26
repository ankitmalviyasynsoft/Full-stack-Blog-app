import Image from "next/image";
import React from "react";
import { Stack } from "@mui/material";

export default function UnderConstruction() {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center">
      <Image
        src="https://images.pexels.com/photos/5499122/pexels-photo-5499122.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="images"
        fill
      />
    </Stack>
  );
}
