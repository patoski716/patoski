import { ModalProvider } from "@/components/ModalContext";
import Navbar from "@/components/Navbar";
import Works from "@/components/Works";
import React from "react";

const WorksPage = () => {
  return (
    <ModalProvider>
      <div>
        <Navbar />
        <Works />
      </div>
    </ModalProvider>
  );
};

export default WorksPage;
