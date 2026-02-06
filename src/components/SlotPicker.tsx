'use client';

import { type Slot } from '@/lib/mock';
import { cn } from '@/lib/utils';

type Props = {
  slots: Slot[];
  selectedId?: string;
  onSelect: (slot: Slot) => void;
};

export const SlotPicker = ({ slots, selectedId, onSelect }: Props) => {
  return (
    <div className="grid gap-3">
      {slots.map((slot) => {
        const selected = slot.id === selectedId;

        return (
          <button
            key={slot.id}
            disabled={!slot.available}
            onClick={() => onSelect(slot)}
            className={cn(
              'rounded-2xl border px-4 py-3 text-left transition-all duration-200',
              slot.available
                ? 'border-white/55 bg-white/42 hover:bg-white/60'
                : 'border-white/35 bg-white/25 text-slate-400 cursor-not-allowed',
              selected && 'border-slate-700 bg-white/70'
            )}
          >
            <p className="font-medium text-slate-800">{slot.label}</p>
            <p className="text-xs text-slate-600">
              {slot.available ? 'Ledig tid' : 'Fullbokad'}
            </p>
          </button>
        );
      })}
    </div>
  );
};
