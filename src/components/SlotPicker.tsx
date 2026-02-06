'use client';

import { type Slot } from '@/lib/mock';
import { tokens } from '@/lib/tokens';
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
              tokens.glass,
              tokens.motion.calm,
              'w-full rounded-2xl px-4 py-3 text-left',
              slot.available ? 'hover:bg-white/42' : 'opacity-50 cursor-not-allowed',
              selected && 'ring-1 ring-slate-500/40'
            )}
          >
            <p className="text-base text-slate-800">{slot.label}</p>
            <p className="text-sm text-slate-600">{slot.available ? 'Ledig' : 'Fullbokad'}</p>
          </button>
        );
      })}
    </div>
  );
};
