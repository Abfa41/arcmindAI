"use client";

import { getTemplates } from "@/lib/prompts/templates";
import TemplateCard from "./template-card";
import { Sparkles } from "lucide-react";

interface StarterTemplatesProps {
  onSelectTemplate: (templateBody: string) => void;
  isVisible: boolean;
}

export default function StarterTemplates({
  onSelectTemplate,
  isVisible,
}: StarterTemplatesProps) {
  const templates = getTemplates();

  if (!isVisible) {
    return null;
  }

  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-4 border border-blue-200/50 dark:border-blue-800/50">
      <div className="mb-3 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide">
          Quick Start Templates
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            onSelect={() => onSelectTemplate(template.body)}
          />
        ))}
      </div>
    </div>
  );
}
