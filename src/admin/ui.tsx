import { useState, type ReactNode } from 'react';
import { mediaUrl } from '../cms/media';
import { uid } from '../cms/merge';
import { uploadFile } from '../cms/client';

export const inputClass =
  'w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-primary-orange focus:outline-none focus:ring-2 focus:ring-primary-orange/30';

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="mb-4 block">
      <span className="mb-1 block text-sm font-semibold text-neutral-700">{label}</span>
      {children}
    </label>
  );
}

export function TextInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <Field label={label}>
      <input className={inputClass} value={value} onChange={(event) => onChange(event.target.value)} />
    </Field>
  );
}

export function Area({
  label,
  value,
  onChange,
  rows = 4,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}) {
  return (
    <Field label={label}>
      <textarea className={inputClass} rows={rows} value={value} onChange={(event) => onChange(event.target.value)} />
    </Field>
  );
}

export function NumberInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <Field label={label}>
      <input
        type="number"
        className={inputClass}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </Field>
  );
}

export function CheckInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <label className="mb-4 flex items-center gap-2 text-sm font-semibold text-neutral-700">
      <input type="checkbox" checked={value} onChange={(event) => onChange(event.target.checked)} />
      {label}
    </label>
  );
}

export function ImageInput({
  label,
  value,
  onChange,
  accept = 'image/png,image/jpeg,image/webp,image/gif',
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  accept?: string;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const preview = mediaUrl(value);

  return (
    <Field label={label}>
      <div className="flex items-start gap-3">
        {preview && accept.startsWith('image') ? (
          <img src={preview} alt="" className="h-20 w-20 rounded-lg border object-cover" />
        ) : null}
        <div className="min-w-0 flex-1">
          <input className={inputClass} value={value} onChange={(event) => onChange(event.target.value)} />
          <input
            type="file"
            accept={accept}
            className="mt-2 block w-full text-sm"
            disabled={busy}
            onChange={async (event) => {
              const file = event.target.files?.[0];
              event.target.value = '';
              if (!file) return;
              setBusy(true);
              setError('');
              try {
                const saved = await uploadFile(file);
                onChange(saved.url);
              } catch (err) {
                setError(err instanceof Error ? err.message : 'Upload failed');
              } finally {
                setBusy(false);
              }
            }}
          />
          {busy ? <p className="mt-1 text-xs text-neutral-500">Uploading…</p> : null}
          {error ? <p className="mt-1 text-xs text-primary-red">{error}</p> : null}
        </div>
      </div>
    </Field>
  );
}

export function StringList({
  label,
  values,
  onChange,
  multiline = false,
}: {
  label: string;
  values: string[];
  onChange: (values: string[]) => void;
  multiline?: boolean;
}) {
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-neutral-700">{label}</span>
        <button type="button" className="text-sm font-semibold text-primary-orange" onClick={() => onChange([...values, ''])}>
          Add
        </button>
      </div>
      <div className="space-y-2">
        {values.map((value, index) => (
          <div key={index} className="flex gap-2">
            {multiline ? (
              <textarea
                className={inputClass}
                rows={3}
                value={value}
                onChange={(event) => onChange(values.map((item, i) => (i === index ? event.target.value : item)))}
              />
            ) : (
              <input
                className={inputClass}
                value={value}
                onChange={(event) => onChange(values.map((item, i) => (i === index ? event.target.value : item)))}
              />
            )}
            <button type="button" className="text-sm text-primary-red" onClick={() => onChange(values.filter((_, i) => i !== index))}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CardFrame({
  title,
  children,
  onRemove,
  onUp,
  onDown,
}: {
  title: string;
  children: ReactNode;
  onRemove: () => void;
  onUp?: () => void;
  onDown?: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-3 rounded-xl border border-neutral-200 bg-white">
      <button type="button" className="flex w-full items-center justify-between px-4 py-3 text-left" onClick={() => setOpen((value) => !value)}>
        <span className="font-semibold text-neutral-900">{title || 'Untitled'}</span>
        <span className="text-xs text-neutral-500">{open ? 'Hide' : 'Edit'}</span>
      </button>
      {open ? (
        <div className="border-t border-neutral-100 px-4 py-4">
          {children}
          <div className="mt-2 flex gap-3 text-sm">
            {onUp ? <button type="button" onClick={onUp}>Move up</button> : null}
            {onDown ? <button type="button" onClick={onDown}>Move down</button> : null}
            <button type="button" className="text-primary-red" onClick={onRemove}>Delete</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function moveItem<T>(items: T[], index: number, direction: -1 | 1) {
  const next = [...items];
  const target = index + direction;
  if (target < 0 || target >= next.length) return items;
  const [item] = next.splice(index, 1);
  next.splice(target, 0, item);
  return next;
}

export function newId() {
  return uid();
}
