"use client"

import { forwardRef, Fragment } from "react";
import { Transition, TransitionChild } from "@headlessui/react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({
    open,
    onClose,
    children
}: ModalProps) => {

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    }

    return (

        <Dialog open={open} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <div className="flex items-center gap-x-2 py-1">
                            Preview
                        </div>
                    </DialogTitle>
                    <DialogDescription>
                        {/* Add description if needed */}
                    </DialogDescription>
                </DialogHeader>
                <div>
                    {children}
                </div>
            </DialogContent>

        </Dialog>

    );
};


export default Modal;
