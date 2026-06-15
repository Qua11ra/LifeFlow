"use client";

import {
    type DragEvent,
    type InputHTMLAttributes,
    useEffect,
    useRef,
    useState,
} from "react";
import UploadIcon from "../icons/UploadIcon";
import "./FileInput.css";

interface IFileInputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    error?: string | undefined;
    label?: string;
}

export default function FileInput({
    error,
    label,
    onChange,
    ...props
}: IFileInputProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    function handleFile(file: File | undefined) {
        if (!file) return;

        if (preview) URL.revokeObjectURL(preview);
        setPreview(URL.createObjectURL(file));
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.currentTarget.files?.[0];
        handleFile(file);
        onChange?.(e);
    }

    function handleDragOver(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
    }

    function handleDragEnter(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }

    function handleDragLeave(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }

    function handleDrop(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const file = e.dataTransfer.files?.[0];
        if (!file) return;

        if (inputRef.current) {
            const dt = new DataTransfer();
            dt.items.add(file);
            inputRef.current.files = dt.files;

            const nativeEvent = new Event("change", { bubbles: true });
            inputRef.current.dispatchEvent(nativeEvent);
        }

        handleFile(file);
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
        if (e.key === "Enter" || e.key === " ") {
            inputRef.current?.click();
        }
    }

    return (
        <div className="fileWrapper">
            {label && <label className="fileLabel">{label}</label>}
            <div
                className={`dropZone${error ? " error" : ""}${isDragging ? " dragging" : ""}${preview ? " hasImage" : ""}`}
                onClick={() => inputRef.current?.click()}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                role="button"
                tabIndex={0}
                onKeyDown={handleKeyDown}
            >
                {preview ? (
                    <img src={preview} alt="Preview" className="preview" />
                ) : (
                    <div className="placeholder">
                        <UploadIcon size={48} />
                        <p className="placeholderText">
                            Click to upload or drag and drop
                        </p>
                    </div>
                )}
                {isDragging && (
                    <div className="dragOverlay">
                        <UploadIcon size={48} />
                        <p className="placeholderText">Drop here</p>
                    </div>
                )}
            </div>
            <input
                {...props}
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hiddenInput"
                onChange={handleInputChange}
            />
            {error && <p className="errorMessage">{error}</p>}
        </div>
    );
}
