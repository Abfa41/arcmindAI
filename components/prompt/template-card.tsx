"use client";

import React from "react";
import { PromptTemplate } from "@/lib/prompts/templates";
import { Button } from "@/components/ui/button";

interface TemplateCardProps {
  template: PromptTemplate;
  onSelect: () => void;
}

export default function TemplateCard({
  template,
  onSelect,
}: TemplateCardProps) {
  return (
    <Button
      variant="outline"
      className="h-auto flex flex-col items-start gap-1.5 p-3 text-left text-xs overflow-hidden transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-sm"
      onClick={onSelect}
    >
      <div className="font-semibold text-xs leading-snug line-clamp-2 break-words text-gray-900 dark:text-gray-100">
        {template.title}
      </div>
      {template.description && (
        <div className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1 break-words w-full truncate">
          {template.description}
        </div>
      )}
    </Button>
  );
}
