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
            type="button"
            disabled={!slot.available}
            onClick={() => onSelect(slot)}
            className={cn(
              'w-full px-4 py-3 text-left',
              tokens.motion.calm,
              slot.available ? tokens.material.utility : cn(tokens.material.utility, 'opacity-45 cursor-not-allowed'),
              selected && cn(tokens.material.secondary, 'ring-1 ring-slate-500/45')
            )}
          >
            <p className={cn('text-sm', selected ? 'font-semibold text-slate-900' : 'text-slate-800')}>
              {slot.label}
            </p>
            <p className="mt-0.5 text-xs text-slate-600">{slot.available ? 'Ledig tid' : 'Fullbokad'}</p>
          </button>
        );
      })}
    </div>
  );
};
