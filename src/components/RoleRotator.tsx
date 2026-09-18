"use client";

import { useEffect, useState } from "react";

type RoleRotatorProps = {
  roles: readonly string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
  waitMs?: number;
};

export default function RoleRotator({
  roles,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseMs = 1400,
  waitMs = 300,
}: RoleRotatorProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (roles.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = setTimeout(() => setText(roles[0]), 0);
      return () => clearTimeout(t);
    }

    const current = roles[roleIndex];

    if (!deleting) {
      if (text.length < current.length) {
        const t = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          typingSpeed,
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }

    if (text.length > 0) {
      const t = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        deletingSpeed,
      );
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, waitMs);
    return () => clearTimeout(t);
  }, [text, deleting, roleIndex, roles, typingSpeed, deletingSpeed, pauseMs, waitMs]);

  return <span className="inline-block min-h-[1em]">{text}</span>;
}
