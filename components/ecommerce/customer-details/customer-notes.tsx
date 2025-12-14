"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface NoteItem {
  text: string;
  date: string;
}

interface CustomerNotesProps {
  title: string;
  placeholder: string;
  buttonLabel: string;
  className?: string;
  notes: NoteItem[];

  onAddNote?: (text: string) => void;
}

export default function CustomerNotes({
  title,
  placeholder,
  buttonLabel,
  notes,
  onAddNote,
  className,
}: CustomerNotesProps) {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (!value.trim()) return;
    onAddNote?.(value);
    setValue("");
  };

  return (
    <Card className={className}>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-3">{title}</h3>

        {/* Textarea */}
        <Textarea
          placeholder={placeholder}
          rows={6}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <Button onClick={handleAdd} className="w-full mt-3">
          {buttonLabel}
        </Button>
      </CardContent>

      {/* Notes List */}
      <div className="max-h-[400px] overflow-y-auto px-4 pb-4">
        <div className="bg-muted/30 rounded-lg p-4">
          {notes.map((note, i) => (
            <div key={i}>
              <div className="mb-4">
                <p className="text-sm mb-2">{note.text}</p>
                <p className="text-xs italic text-muted-foreground text-right">
                  {note.date}
                </p>
              </div>
              {i < notes.length - 1 && <hr className="border-dashed my-3" />}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
