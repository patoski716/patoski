import React, { ReactNode } from "react";
import { IoCloseSharp } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto py-[50px]">
      <div className="bg-white rounded-xl shadow-lg max-w-[1240px] w-full relative max-h-screen overflow-y-auto no-scrollbar no-scrollbar::-webkit-scrollbar">
        <button
          className="absolute top-10 right-2 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          <IoCloseSharp size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
