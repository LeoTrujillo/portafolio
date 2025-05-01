import React, { useState, useEffect } from 'react';
import '@/styles/fonts.css';

interface AnimatedTextProps {
  baseText: string;
  roles: string[];
}

const TYPING_SPEED = 150;
const DELETING_SPEED = 100;
const PAUSE_TIME = 3000;

const AnimatedText: React.FC<AnimatedTextProps> = ({ baseText, roles }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (!Array.isArray(roles) || roles.length === 0) return;

    let timeout: NodeJS.Timeout;
    const currentRole = roles[roleIndex];

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, PAUSE_TIME);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, DELETING_SPEED);
      }
    }
    else {
      if (text === currentRole) {
        setIsWaiting(true);
      } else {
        timeout = setTimeout(() => {
          setText(currentRole.slice(0, text.length + 1));
        }, TYPING_SPEED);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, roles, isWaiting]);

  useEffect(() => {
    if (Array.isArray(roles) && roles.length > 0) {
      setText('');
      setRoleIndex(0);
      setIsDeleting(false);
      setIsWaiting(false);
    }
  }, [roles]);

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
      <span className="font-normal font-poppins whitespace-nowrap">{baseText}</span>
      <div className="typewriter-text">
        <span className="role-text">{text}</span>
        <span className="cursor" />
      </div>
    </div>
  );
};

export default AnimatedText; 