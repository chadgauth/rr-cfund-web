import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';
import { FormControl } from './form';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string | undefined) => void;
  placeholder?: string;
  minHeight?: number;
  maxHeight?: number;
  preview?: 'edit' | 'preview' | 'live';
  className?: string;
}

export function MarkdownEditor({
  value,
  onChange,
  placeholder = 'Write your content here...',
  minHeight = 300,
  maxHeight = 800,
  preview = 'live',
  className = '',
}: MarkdownEditorProps) {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div
      className={`md-editor-wrapper relative rounded-md border ${
        isFocused ? 'ring-2 ring-ring ring-offset-2' : ''
      } ${className}`}
      data-color-mode="light"
    >
      <FormControl>
        <MDEditor
          value={value}
          onChange={onChange}
          preview={preview}
          textareaProps={{
            placeholder,
            onFocus: () => setIsFocused(true),
            onBlur: () => setIsFocused(false),
          }}
          previewOptions={{
            rehypePlugins: [[rehypeSanitize]],
          }}
          height={minHeight}
          maxHeight={maxHeight}
          className="md-editor-custom"
        />
      </FormControl>
      
      <style jsx global>{`
        .md-editor-custom {
          border: none !important;
          font-family: inherit;
        }
        .md-editor-custom .w-md-editor-toolbar {
          border-bottom: 1px solid hsl(var(--border));
          background-color: hsl(var(--muted));
        }
        .md-editor-custom .w-md-editor-content {
          background-color: hsl(var(--background));
        }
        .md-editor-custom .w-md-editor-text-input {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 0.9rem;
        }
        .md-editor-custom .wmde-markdown {
          background-color: hsl(var(--background));
          font-family: inherit;
        }
        .md-editor-custom .wmde-markdown h1,
        .md-editor-custom .wmde-markdown h2,
        .md-editor-custom .wmde-markdown h3,
        .md-editor-custom .wmde-markdown h4,
        .md-editor-custom .wmde-markdown h5,
        .md-editor-custom .wmde-markdown h6 {
          border-bottom: none;
          margin-top: 1.5em;
          margin-bottom: 0.5em;
          color: hsl(var(--foreground));
        }
        .md-editor-custom .wmde-markdown code,
        .md-editor-custom .wmde-markdown pre {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          background-color: hsl(var(--muted));
          border-radius: 0.25rem;
        }
        .md-editor-custom .wmde-markdown blockquote {
          border-left: 4px solid hsl(var(--primary));
          background-color: hsl(var(--muted));
          padding: 0.5em 1em;
          color: hsl(var(--primary-foreground));
        }
        .md-editor-custom .wmde-markdown hr {
          border-color: hsl(var(--border));
        }
        .md-editor-custom .wmde-markdown-color code[class*="language-"],
        .md-editor-custom .wmde-markdown-color pre[class*="language-"] {
          background-color: hsl(var(--muted));
          color: hsl(var(--foreground));
        }
      `}</style>
    </div>
  );
}

export function MarkdownPreview({ content }: { content: string }) {
  return (
    <div data-color-mode="light" className="markdown-preview">
      <MDEditor.Markdown source={content} rehypePlugins={[[rehypeSanitize]]} />
      <style jsx global>{`
        .markdown-preview .wmde-markdown {
          background-color: transparent;
          font-family: inherit;
        }
        .markdown-preview .wmde-markdown h1,
        .markdown-preview .wmde-markdown h2,
        .markdown-preview .wmde-markdown h3,
        .markdown-preview .wmde-markdown h4,
        .markdown-preview .wmde-markdown h5,
        .markdown-preview .wmde-markdown h6 {
          border-bottom: none;
          margin-top: 1.5em;
          margin-bottom: 0.5em;
          color: hsl(var(--foreground));
        }
        .markdown-preview .wmde-markdown code,
        .markdown-preview .wmde-markdown pre {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          background-color: hsl(var(--muted));
          border-radius: 0.25rem;
        }
        .markdown-preview .wmde-markdown blockquote {
          border-left: 4px solid hsl(var(--primary));
          background-color: hsl(var(--muted));
          padding: 0.5em 1em;
          color: hsl(var(--primary-foreground));
        }
        .markdown-preview .wmde-markdown hr {
          border-color: hsl(var(--border));
        }
        .markdown-preview .wmde-markdown-color code[class*="language-"],
        .markdown-preview .wmde-markdown-color pre[class*="language-"] {
          background-color: hsl(var(--muted));
          color: hsl(var(--foreground));
        }
      `}</style>
    </div>
  );
}