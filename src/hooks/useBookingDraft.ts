'use client';

import { useEffect, useMemo, useState } from 'react';

type Draft = {
  slotId?: string;
  slotLabel?: string;
};

const STORAGE_KEY = 'showup-booking-draft';

export const useBookingDraft = () => {
  const [draft, setDraft] = useState<Draft>({});

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return;
    }

    try {
      setDraft(JSON.parse(raw) as Draft);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const saveDraft = (next: Draft) => {
    setDraft(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const clearDraft = () => {
    setDraft({});
    window.localStorage.removeItem(STORAGE_KEY);
  };

  return useMemo(
    () => ({ draft, saveDraft, clearDraft }),
    [draft]
  );
};
